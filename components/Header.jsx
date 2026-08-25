'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLang, setLang, applyLanguage } from '../lib/lang';

export default function Header() {
  const pathname = usePathname();

  useEffect(function () {
    // ---------------- language ----------------
    applyLanguage(getLang());

    function onLangBtnClick(e) {
      setLang(e.currentTarget.getAttribute('data-lang'));
    }
    function onLangSelectChange(e) {
      setLang(e.target.value);
    }
    var langButtons = document.querySelectorAll('.lang-toggle button');
    langButtons.forEach(function (btn) { btn.addEventListener('click', onLangBtnClick); });
    var langSelects = document.querySelectorAll('.lang-select');
    langSelects.forEach(function (sel) { sel.addEventListener('change', onLangSelectChange); });

    // ---------------- header scroll state ----------------
    var header = document.querySelector('.site-header');
    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      if (header) header.classList.toggle('scrolled', y > 80);
    }
    if (header) {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // ---------------- mobile menu ----------------
    var openBtn = document.querySelector('.mobile-menu-btn');
    var menu = document.querySelector('.mobile-menu');
    var scrim = document.querySelector('.mobile-menu-scrim');

    function open() {
      menu.classList.add('open');
      scrim.classList.add('open');
      openBtn.classList.add('active');
      openBtn.setAttribute('aria-expanded', 'true');
      if (header) header.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      menu.classList.remove('open');
      scrim.classList.remove('open');
      openBtn.classList.remove('active');
      openBtn.setAttribute('aria-expanded', 'false');
      if (header) header.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
    function toggleMenu() {
      if (openBtn.classList.contains('active')) close();
      else open();
    }

    var menuLinks = [];
    if (openBtn && menu && scrim) {
      openBtn.addEventListener('click', toggleMenu);
      scrim.addEventListener('click', close);
      menuLinks = Array.prototype.slice.call(menu.querySelectorAll('a'));
      menuLinks.forEach(function (a) { a.addEventListener('click', close); });
    }

    return function () {
      langButtons.forEach(function (btn) { btn.removeEventListener('click', onLangBtnClick); });
      langSelects.forEach(function (sel) { sel.removeEventListener('change', onLangSelectChange); });
      if (header) window.removeEventListener('scroll', onScroll);
      if (openBtn && menu && scrim) {
        openBtn.removeEventListener('click', toggleMenu);
        scrim.removeEventListener('click', close);
        menuLinks.forEach(function (a) { a.removeEventListener('click', close); });
      }
    };
  }, []);

  return (
    <>
      <div className="topbar">
        <a href="tel:+32492921040">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          +32 492 92 10 40
        </a>
        <span className="divider" />
        <a href="mailto:summitseo.be@gmail.com">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          summitseo.be@gmail.com
        </a>
      </div>

      <header className="site-header">
        <Link href="/" className="brand">
          <svg width="34.9" height="30" viewBox="0 0 172 148">
            <polygon points="0,143 40,48 80,143" className="peak-side" />
            <polygon points="48,143 88,0 128,143" fill="#FF5B04" />
            <polygon points="92,143 132,66 172,143" className="peak-side" opacity="0.55" />
            <rect x="0" y="140" width="172" height="4" className="peak-side" opacity="0.42" />
          </svg>
          <span className="divider" />
          <span className="brand-text">
            <span className="brand-name">Summit</span>
            <span className="brand-sub">Local SEO</span>
          </span>
        </Link>
        <nav className="nav">
          <div className="nav-links">
            <Link className="nav-link" href="/about" data-fr="À propos" data-en="About" aria-current={pathname === '/about' ? 'page' : undefined}>À propos</Link>
            <Link className="nav-link" href="/pricing" data-fr="Tarifs" data-en="Pricing" aria-current={pathname === '/pricing' ? 'page' : undefined}>Tarifs</Link>
          </div>
          <div className="lang-toggle">
            <button data-lang="fr" className="active">FR</button>
            <button data-lang="en">EN</button>
          </div>
          <Link className="nav-cta" href="/audit" data-fr="Demander un audit" data-en="Request an audit" aria-current={pathname === '/audit' ? 'page' : undefined}>Demander un audit</Link>
          <button className="mobile-menu-btn" aria-label="Menu" aria-expanded="false">
            <span className="hamburger">
              <span />
              <span />
              <span />
            </span>
          </button>
        </nav>
      </header>

      <div className="mobile-menu-scrim" />

      <div className="mobile-menu">
        <Link className="mobile-link" href="/about" data-fr="À propos" data-en="About" aria-current={pathname === '/about' ? 'page' : undefined}>À propos</Link>
        <Link className="mobile-link" href="/pricing" data-fr="Tarifs" data-en="Pricing" aria-current={pathname === '/pricing' ? 'page' : undefined}>Tarifs</Link>
        <Link className="mobile-cta" href="/audit" data-fr="Demander un audit" data-en="Request an audit" aria-current={pathname === '/audit' ? 'page' : undefined}>
          Demander un audit
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </Link>
        <div className="mobile-lang">
          <select className="lang-select" aria-label="Choisir la langue / Choose language">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </>
  );
}
