const LANG_KEY = 'summit-lang';

export function getLang() {
  if (typeof window === 'undefined') return 'fr';
  return window.localStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'fr';
}

export function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.querySelectorAll('[data-fr]').forEach(function (el) {
    var val = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-fr');
    if (val !== null) el.textContent = val;
  });
  document.querySelectorAll('[data-fr-placeholder]').forEach(function (el) {
    var val = lang === 'en'
      ? el.getAttribute('data-en-placeholder')
      : el.getAttribute('data-fr-placeholder');
    if (val !== null) el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('.lang-toggle button').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
  document.querySelectorAll('.lang-select').forEach(function (sel) {
    sel.value = lang;
  });
}

export function setLang(lang) {
  window.localStorage.setItem(LANG_KEY, lang);
  applyLanguage(lang);
}
