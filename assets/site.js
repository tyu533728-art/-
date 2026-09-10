(function () {
  'use strict';
  var triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;
  var overlay = null;
  var lastTrigger = null;
  var bodyOverflow = '';
  function close() {
    if (!overlay) return;
    overlay.remove();
    overlay = null;
    document.body.style.overflow = bodyOverflow;
    if (lastTrigger) lastTrigger.focus();
  }
  function open(trigger) {
    close();
    var src = trigger.getAttribute('data-lightbox');
    var sourceImage = trigger.querySelector('img');
    lastTrigger = trigger;
    bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    var image = document.createElement('img');
    image.src = src;
    image.alt = sourceImage ? sourceImage.alt : '';
    var closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.className = 'lightbox__close';
    closeBtn.setAttribute('aria-label', trigger.getAttribute('data-close') || 'Close');
    closeBtn.textContent = '\u2715';
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', function (event) { if (event.target === overlay) close(); });
    overlay.appendChild(image);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    closeBtn.focus();
  }
  for (var i = 0; i < triggers.length; i++) {
    (function (trigger) {
      trigger.addEventListener('click', function () { open(trigger); });
    })(triggers[i]);
  }
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && overlay) close();
  });
})();

/**
 * 滚动入场动画（零依赖、渐进增强）：
 * 卡片/板块滚入视口时淡入上移；每 4 个元素给一个轻微缩放变化。
 * 不支持 IntersectionObserver 或用户开启"减少动态"时完全不生效（内容照常显示）。
 * 有独立开幕动画时,等开幕结束再初始化,避免动画在遮罩后面提前放完。
 */
(function () {
  'use strict';
  if (!('IntersectionObserver' in window)) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  function init() {
    var selector = '.home-hero__copy, .category-card, .guide-card, .company-intro, .section-heading, .factory-banner, .factory-spotlight';
    var elements = Array.prototype.slice.call(document.querySelectorAll(selector));
    if (!elements.length) return;
    document.documentElement.classList.add('has-reveal');
    elements.forEach(function (element, index) {
      element.classList.add('reveal');
      if (index % 4 === 3) element.classList.add('reveal--zoom');
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    elements.forEach(function (element) { observer.observe(element); });
  }
  var splash = document.getElementById('brand-splash');
  if (splash && !document.documentElement.classList.contains('splash-done')) {
    window.addEventListener('nater:splash-done', init, { once: true });
    return;
  }
  init();
})();


// ---- 独立全屏开幕动画 lead-word-zoom-assemble(与镜头卡同色同节奏)----
(function () {
  'use strict';
  var splash = document.getElementById('brand-splash');
  if (!splash) return;
  var word = splash.querySelector('.brand-splash__word');
  var sub = splash.querySelector('.brand-splash__sub');
  var stage = splash.querySelector('.brand-splash__stage');
  if (!word || !sub || !stage) return;
  var root = document.documentElement;
  root.classList.add('splash-active');

  function finish() {
    root.classList.add('splash-done');
    root.classList.remove('splash-active');
    window.dispatchEvent(new CustomEvent('nater:splash-done'));
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); return; }

  var cubicBezier = function (p1x, p1y, p2x, p2y) {
    var ax = 3 * p1x - 3 * p2x + 1, bx = 3 * p2x - 6 * p1x, cx = 3 * p1x;
    var ay = 3 * p1y - 3 * p2y + 1, by = 3 * p2y - 6 * p1y, cy = 3 * p1y;
    var sx = function (t) { return ((ax * t + bx) * t + cx) * t; };
    var sy = function (t) { return ((ay * t + by) * t + cy) * t; };
    return function (x) {
      if (x <= 0) return 0;
      if (x >= 1) return 1;
      var t = x;
      for (var i = 0; i < 6; i++) {
        var dx = sx(t) - x;
        if (Math.abs(dx) < 1e-4) return sy(t);
        var d = (3 * ax * t + 2 * bx) * t + cx;
        if (Math.abs(d) < 1e-6) break;
        t -= dx / d;
      }
      return sy(t);
    };
  };
  var pushEase = cubicBezier(0.25, 1, 0.5, 1);
  var zoomEase = cubicBezier(0.5, 0, 0.05, 1);
  var outCubic = function (k) { return 1 - Math.pow(1 - k, 3); };
  var inQuad = function (k) { return k * k; };

  // 测量:单行单词;基线用零尺寸尺子读出(卡片命门)
  var rect = word.getBoundingClientRect();
  var wordWidth = rect.width;
  var lineCenter = rect.left + rect.width / 2;
  var viewportCenter = window.innerWidth / 2;
  var slideDistance = viewportCenter - lineCenter;
  var ruler = document.createElement('span');
  ruler.style.cssText = 'display:inline-block;width:0;height:0;';
  word.appendChild(ruler);
  var baseline = ruler.offsetTop;
  ruler.remove();
  word.style.transformOrigin = '50% ' + baseline + 'px';

  // 长词自适应峰值:不溢出视口
  var peak = Math.min(2.3, (window.innerWidth * 0.92) / Math.max(wordWidth, 1));
  var peakPush = peak * 1.06;

  // 镜头卡原版时间轴(84f @30fps)
  var FPS = 30;
  var INTRO = 6, HOLD = 12, RECEDE = 12, ASSEMBLE = 24, LIFT_A = 34, LIFT_B = 50, CRASH = 72, TOTAL = 84;

  var start = null;
  word.style.opacity = '0';
  sub.style.opacity = '0';

  function frame(now) {
    if (start === null) start = now;
    var s = (now - start) / 1000;
    if (s > TOTAL / FPS) s = TOTAL / FPS;
    var f = s * FPS;
    var scale, tx, liftY = 0;
    if (f <= HOLD) {
      scale = peak * (1 + 0.06 * pushEase(f / HOLD));
      tx = slideDistance;
    } else if (f <= HOLD + RECEDE) {
      var k1 = (f - HOLD) / RECEDE;
      scale = peakPush * (1 - zoomEase(k1)) + zoomEase(k1);
      tx = slideDistance;
    } else {
      scale = 1;
      tx = f >= HOLD + ASSEMBLE ? 0 : slideDistance * (1 - zoomEase((f - HOLD) / ASSEMBLE));
    }
    if (f >= LIFT_A) {
      var k2 = Math.min((f - LIFT_A) / (LIFT_B - LIFT_A), 1);
      liftY = -48 * outCubic(k2);
    }
    word.style.transform = 'translateX(' + tx + 'px) translateY(' + liftY + 'px) scale(' + scale + ')';
    word.style.opacity = String(Math.min(f / INTRO, 1));
    if (f >= LIFT_A) {
      var k3 = Math.min((f - LIFT_A) / (LIFT_B - LIFT_A), 1);
      var a = outCubic(k3);
      sub.style.opacity = String(a);
      sub.style.transform = 'translateY(' + (1 - a) * 16 + 'px)';
    }
    if (f >= CRASH) {
      var k4 = Math.min((f - CRASH) / (TOTAL - CRASH), 1);
      var c = inQuad(k4);
      stage.style.transform = 'scale(' + (1 + c * 0.2) + ')';
      stage.style.filter = 'blur(' + (c * 9) + 'px)';
      stage.style.opacity = String(1 - c * 0.55);
    }
    if (f < TOTAL) {
      requestAnimationFrame(frame);
    } else {
      splash.classList.add('is-leaving'); // CSS 过渡到完全淡出,交棒首页
      window.setTimeout(finish, 460);
    }
  }
  requestAnimationFrame(frame);
})();
