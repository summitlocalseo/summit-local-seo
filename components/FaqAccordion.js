'use client';

import { useEffect } from 'react';

export function useFaqAccordion() {
  useEffect(function () {
    var items = document.querySelectorAll('.faq-item');
    var cleanups = [];
    items.forEach(function (item) {
      var q = item.querySelector('.faq-question');
      if (!q) return;
      function onClick() {
        var wasOpen = item.classList.contains('open');
        var list = item.closest('.faq-list');
        if (list) {
          list.querySelectorAll('.faq-item.open').forEach(function (openItem) {
            openItem.classList.remove('open');
          });
        }
        if (!wasOpen) item.classList.add('open');
      }
      q.addEventListener('click', onClick);
      cleanups.push(function () { q.removeEventListener('click', onClick); });
    });
    return function () { cleanups.forEach(function (fn) { fn(); }); };
  }, []);
}

export function FaqAccordionBoundary({ children }) {
  useFaqAccordion();
  return children;
}
