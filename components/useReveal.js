'use client';

import { useEffect } from 'react';

export function useReveal() {
  useEffect(function () {
    var targets = document.querySelectorAll(
      '[data-reveal="hidden"], [data-reveal-left="hidden"], [data-reveal-right="hidden"]'
    );
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(function (el) {
        ['data-reveal', 'data-reveal-left', 'data-reveal-right'].forEach(function (attr) {
          if (el.hasAttribute(attr)) el.setAttribute(attr, 'visible');
        });
        el.querySelectorAll('[data-line-reveal]').forEach(function (line) {
          line.setAttribute('data-line-reveal', 'visible');
        });
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          ['data-reveal', 'data-reveal-left', 'data-reveal-right'].forEach(function (attr) {
            if (el.hasAttribute(attr)) el.setAttribute(attr, 'visible');
          });
          el.querySelectorAll('[data-line-reveal]').forEach(function (line) {
            line.setAttribute('data-line-reveal', 'visible');
          });
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );
    targets.forEach(function (el) { observer.observe(el); });

    return function () { observer.disconnect(); };
  }, []);
}
