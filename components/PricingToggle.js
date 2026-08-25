'use client';

import { useEffect } from 'react';

export function usePricingToggle() {
  useEffect(function () {
    var toggle = document.querySelector('.toggle-switch');
    if (!toggle) return;
    var monthlyEls = document.querySelectorAll('[data-price-monthly]');
    var annualEls = document.querySelectorAll('[data-price-annual]');
    var monthlyLabel = document.querySelector('[data-toggle-label="monthly"]');
    var annualLabel = document.querySelector('[data-toggle-label="annual"]');

    function render(annual) {
      toggle.classList.toggle('on', annual);
      toggle.setAttribute('aria-checked', annual ? 'true' : 'false');
      monthlyEls.forEach(function (el) { el.hidden = annual; });
      annualEls.forEach(function (el) { el.hidden = !annual; });
      if (monthlyLabel) monthlyLabel.classList.toggle('active', !annual);
      if (annualLabel) annualLabel.classList.toggle('active', annual);
    }

    function onClick() {
      render(!toggle.classList.contains('on'));
    }

    toggle.addEventListener('click', onClick);
    render(false);

    return function () { toggle.removeEventListener('click', onClick); };
  }, []);
}

export function PricingToggleBoundary({ children }) {
  usePricingToggle();
  return children;
}
