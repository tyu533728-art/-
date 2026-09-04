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
