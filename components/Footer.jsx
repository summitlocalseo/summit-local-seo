import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <svg width="34.9" height="30" viewBox="0 0 172 148">
              <polygon points="0,143 40,48 80,143" fill="#074644" />
              <polygon points="48,143 88,0 128,143" fill="#FF5B04" />
              <polygon points="92,143 132,66 172,143" fill="#074644" opacity="0.55" />
              <rect x="0" y="140" width="172" height="4" fill="#074644" opacity="0.42" />
            </svg>
            <span className="brand-text">
              <span className="brand-name" style={{ color: '#fff' }}>Summit</span>
              <span className="brand-sub" style={{ color: 'rgba(255,255,255,.6)' }}>Local SEO</span>
            </span>
          </Link>
          <p className="footer-tagline" data-fr="Soyez visible localement et développez votre activité grâce à un SEO local plus intelligent." data-en="Get found locally and grow your business with smarter local SEO.">Soyez visible localement et développez votre activité grâce à un SEO local plus intelligent.</p>
        </div>
        <div>
          <div className="footer-heading" data-fr="Navigation" data-en="Navigation">Navigation</div>
          <nav className="footer-links" aria-label="Footer">
            <Link href="/" data-fr="Accueil" data-en="Home">Accueil</Link>
            <Link href="/pricing" data-fr="Tarifs" data-en="Pricing">Tarifs</Link>
            <Link href="/audit" data-fr="Demander un audit" data-en="Request an audit">Demander un audit</Link>
          </nav>
        </div>
        <div>
          <div className="footer-heading" data-fr="Zones" data-en="Areas">Zones</div>
          <nav className="footer-links" aria-label="Zones desservies">
            <Link href="/liege">Liège</Link>
            <Link href="/charleroi">Charleroi</Link>
            <Link href="/namur">Namur</Link>
            <span data-fr="Toute la Wallonie" data-en="All of Wallonia">Toute la Wallonie</span>
          </nav>
        </div>
        <div>
          <div className="footer-heading" data-fr="Contact" data-en="Contact">Contact</div>
          <div className="footer-links">
            <span>summitseo.be@gmail.com</span>
            <span>+32 492 92 10 40</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span data-fr="© 2026 Summit Local SEO · Wallonie, Belgique" data-en="© 2026 Summit Local SEO · Wallonia, Belgium">© 2026 Summit Local SEO · Wallonie, Belgique</span>
      </div>
    </footer>
  );
}
