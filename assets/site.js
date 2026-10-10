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
    try { window.sessionStorage.setItem('nater-splash-seen', '1'); } catch (error) { /* ignore */ }
    window.dispatchEvent(new CustomEvent('nater:splash-done'));
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { finish(); return; }
  // Repeat visitors in the same tab session skip the intro; a first visit still plays it in full.
  // sessionStorage holds a UI preference only — no personal data, no tracking.
  try {
    if (window.sessionStorage.getItem('nater-splash-seen')) { finish(); return; }
  } catch (error) { /* storage unavailable — play the intro as usual */ }

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

// ---- Cross-reference page: filter the model tables by code ----
(function () {
  'use strict';
  var filter = document.getElementById('xref-filter');
  if (!filter) return;
  filter.addEventListener('input', function () {
    var query = filter.value.trim().toUpperCase();
    var rows = document.querySelectorAll('[data-xref-row]');
    for (var index = 0; index < rows.length; index += 1) {
      var code = (rows[index].getAttribute('data-xref-row') || '').toUpperCase();
      rows[index].style.display = !query || code.indexOf(query) !== -1 ? '' : 'none';
    }
  });
})();

// ---- 404 page: show the message in the visitor's language ----
// The host serves one file for every missing URL and keeps the requested URL in the address bar, so
// the first path segment decides the language when it names a locale (a mistyped /de/… link);
// otherwise the browser's own language is used. Without JavaScript the English block stays visible.
(function () {
  'use strict';
  var blocks = document.querySelectorAll('[data-not-found]');
  if (!blocks.length) return;
  var supported = [];
  for (var i = 0; i < blocks.length; i += 1) supported.push(blocks[i].getAttribute('data-not-found'));
  var segments = window.location.pathname.split('/');
  var fromPath = null;
  for (var s = 0; s < segments.length; s += 1) {
    if (supported.indexOf(segments[s].toLowerCase()) !== -1) { fromPath = segments[s].toLowerCase(); break; }
  }
  var preferred = fromPath;
  if (!preferred) {
    var tags = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    for (var t = 0; t < tags.length; t += 1) {
      var short = String(tags[t]).slice(0, 2).toLowerCase();
      if (supported.indexOf(short) !== -1) { preferred = short; break; }
    }
  }
  var code = preferred || 'en';
  for (var b = 0; b < blocks.length; b += 1) blocks[b].hidden = blocks[b].getAttribute('data-not-found') !== code;
  if (code !== 'en') {
    document.documentElement.lang = code;
    if (code === 'ar') document.documentElement.dir = 'rtl';
  }
})();

// ---- Mobile: collapse fastener spec details by default ----
(function () {
  'use strict';
  if (window.innerWidth > 760) return;
  var details = document.querySelectorAll('.fastener-specs[open]');
  for (var i = 0; i < details.length; i++) details[i].removeAttribute('open');
})();

// ---- Site search ----
(function () {
  'use strict';
  var input = document.getElementById('site-search-input');
  var results = document.getElementById('site-search-results');
  if (!input || !results) return;
  var index = null;
  var matches = [];
  var activeIdx = -1;
  // Labels follow the page language; English is the fallback.
  var searchText = {
    en: { series: 'Series', product: 'Product', guide: 'Guide', none: 'No results found' },
    es: { series: 'Serie', product: 'Producto', guide: 'Guía', none: 'Sin resultados' },
    de: { series: 'Serie', product: 'Produkt', guide: 'Anleitung', none: 'Keine Ergebnisse' },
    fr: { series: 'Série', product: 'Produit', guide: 'Guide', none: 'Aucun résultat' },
    pt: { series: 'Série', product: 'Produto', guide: 'Guia', none: 'Sem resultados' },
    ar: { series: 'سلسلة', product: 'منتج', guide: 'دليل', none: 'لا توجد نتائج' },
    tr: { series: 'Seri', product: 'Ürün', guide: 'Kılavuz', none: 'Sonuç bulunamadı' },
    ru: { series: 'Серия', product: 'Продукт', guide: 'Руководство', none: 'Ничего не найдено' },
    it: { series: 'Serie', product: 'Prodotto', guide: 'Guida', none: 'Nessun risultato' },
    vi: { series: 'Dòng', product: 'Sản phẩm', guide: 'Hướng dẫn', none: 'Không có kết quả' },
    id: { series: 'Seri', product: 'Produk', guide: 'Panduan', none: 'Tidak ada hasil' },
    ja: { series: 'シリーズ', product: '製品', guide: 'ガイド', none: '該当する結果はありません' },
    ko: { series: '시리즈', product: '제품', guide: '가이드', none: '검색 결과가 없습니다' }
  };

  // Detect current locale from URL path: /de/products/... -> de
  var seg = window.location.pathname.split('/');
  var locale = (seg.length > 1 && seg[1].length === 2) ? seg[1] : 'en';
  var localePrefix = locale === 'en' ? '' : '/' + locale;
  var t = searchText[locale] || searchText.en;

  function resolveUrl(itemUrl) {
    // Guide URLs start with /en/ — keep them English-only
    if (itemUrl.indexOf('/en/') === 0) return itemUrl;
    return localePrefix + itemUrl;
  }

  function highlight(text, query) {
    if (!query) return escapeHtml(text);
    var lower = text.toLowerCase();
    var q = query.toLowerCase();
    var idx = lower.indexOf(q);
    if (idx === -1) return escapeHtml(text);
    return escapeHtml(text.slice(0, idx)) + '<mark>' + escapeHtml(text.slice(idx, idx + q.length)) + '</mark>' + escapeHtml(text.slice(idx + q.length));
  }

  function escapeHtml(s) {
    var d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function loadIndex(callback) {
    if (index) { callback(index); return; }
    fetch('/assets/search-index.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { index = data; callback(data); })
      .catch(function () {});
  }

  function doSearch(query) {
    query = query.trim();
    if (!query) { results.classList.remove('is-open'); results.innerHTML = ''; matches = []; activeIdx = -1; return; }
    var q = query.toLowerCase();
    loadIndex(function (data) {
      matches = data.filter(function (item) {
        return item.name.toLowerCase().indexOf(q) !== -1 ||
          (item.code && item.code.toLowerCase().indexOf(q) !== -1) ||
          (item.series && item.series.toLowerCase().indexOf(q) !== -1);
      }).slice(0, 10);
      activeIdx = -1;
      if (!matches.length) {
        results.innerHTML = '<div class="site-search__empty">' + escapeHtml(t.none) + '</div>';
      } else {
        results.innerHTML = matches.map(function (item, i) {
          return '<a class="site-search__item" data-idx="' + i + '" href="' + resolveUrl(item.url) + '">' +
            '<div class="site-search__item--type">' + (t[item.t] || item.t) + '</div>' +
            '<div class="site-search__item--name">' + highlight(item.name, query) + '</div>' +
            (item.series ? '<div class="site-search__item--sub">' + highlight(item.series, query) + '</div>' : '') +
            '</a>';
        }).join('');
      }
      results.classList.add('is-open');
    });
  }

  function setActive(idx) {
    var items = results.querySelectorAll('.site-search__item');
    for (var i = 0; i < items.length; i++) items[i].style.background = '';
    if (idx >= 0 && items[idx]) {
      items[idx].style.background = '#f5f0e0';
      activeIdx = idx;
    }
  }

  var timer = null;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { doSearch(input.value); }, 200);
  });
  input.addEventListener('focus', function () {
    if (input.value) doSearch(input.value);
  });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(Math.min(activeIdx + 1, matches.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(Math.max(activeIdx - 1, 0)); }
    else if (e.key === 'Enter' && activeIdx >= 0 && matches[activeIdx]) { window.location.href = resolveUrl(matches[activeIdx].url); }
    else if (e.key === 'Escape') { results.classList.remove('is-open'); input.blur(); }
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-search')) results.classList.remove('is-open');
  });
})();
