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
