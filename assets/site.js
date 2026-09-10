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
 */
(function () {
  'use strict';
  if (!('IntersectionObserver' in window)) return;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
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
})();


// ---- 开幕大字动画 lead-word-zoom-assemble(纯 JS,零依赖)----
(function () {
  var hero = document.querySelector('.home-hero__copy');
  if (!hero) return;
  var lead = hero.querySelector('h1.hero-brand');
  var sub = hero.querySelector('.hero-subline');
  if (!lead || !sub) return;
  document.documentElement.classList.add('js-hero-pending');
  window.setTimeout(function () {
    document.documentElement.classList.remove('js-hero-pending');
  }, 2500); // 兜底:JS 出错也不至于让标题永久隐藏

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('no-hero-anim');
    document.documentElement.classList.remove('js-hero-pending');
    return;
  }

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
  var subEase = cubicBezier(0.22, 0.8, 0.36, 1);

  // 测量:单行单词;基线用零尺寸尺子读出(卡片命门)
  var rect = lead.getBoundingClientRect();
  var wordWidth = rect.width;
  var lineCenter = rect.left + rect.width / 2;
  var viewportCenter = window.innerWidth / 2;
  var slideDistance = viewportCenter - lineCenter;
  var ruler = document.createElement('span');
  ruler.style.cssText = 'display:inline-block;width:0;height:0;';
  lead.appendChild(ruler);
  var baseline = ruler.offsetTop;
  ruler.remove();
  lead.style.transformOrigin = '50% ' + baseline + 'px';

  // 长词自适应峰值:不溢出视口
  var peak = Math.min(2.3, (window.innerWidth * 0.92) / Math.max(wordWidth, 1));
  var peakPush = peak * 1.06;

  var FPS = 30;                    // 镜头卡时间轴 30fps 基准
  var t1 = 12, t2 = 24, t3 = 36;   // 帧:推近 0-12,缩回 12-24,左滑 12-36
  var subStart = 14, subEnd = 26;
  var total = t3 / FPS;

  var start = null;
  lead.style.opacity = '0';
  sub.style.opacity = '0';
  sub.style.transform = 'translateY(16px)';

  function frame(now) {
    if (start === null) start = now;
    var s = (now - start) / 1000;
    if (s > total) s = total;
    var f = s * FPS;
    var scale, tx;
    if (f <= t1) {
      var k = f / t1;
      scale = peak * (1 + 0.06 * pushEase(k));
      tx = slideDistance;
    } else if (f <= t2) {
      var k2 = (f - t1) / (t2 - t1);
      scale = peakPush * (1 - zoomEase(k2)) + zoomEase(k2);
      tx = slideDistance;
    } else {
      var k3 = (f - t2) / (t3 - t2);
      scale = 1;
      tx = slideDistance * (1 - zoomEase(k3));
    }
    lead.style.transform = 'translateX(' + tx + 'px) scale(' + scale + ')';
    lead.style.opacity = '1';
    document.documentElement.classList.remove('js-hero-pending');
    if (f >= subStart) {
      var k4 = (f - subStart) / (subEnd - subStart);
      if (k4 >= 1) k4 = 1;
      var a = subEase(k4);
      sub.style.opacity = String(a);
      sub.style.transform = 'translateY(' + (1 - a) * 16 + 'px)';
    }
    if (s < total) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
