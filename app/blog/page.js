import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata = {
  title: { absolute: 'Blog — Conseils SEO Local | Summit Local SEO' },
  description:
    "Conseils pratiques sur le référencement local, Google Business Profile et Google Maps pour les artisans et indépendants de Wallonie.",
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Conseils SEO Local | Summit Local SEO',
    description:
      "Conseils pratiques sur le référencement local, Google Business Profile et Google Maps pour les artisans et indépendants de Wallonie.",
    url: '/blog',
  },
};

const POSTS = [
  {
    slug: 'pourquoi-mon-entreprise-napparait-pas-sur-google-maps',
    title: "Pourquoi mon entreprise n'apparaît pas sur Google Maps ?",
    excerpt:
      "9 raisons courantes qui empêchent votre entreprise d'apparaître sur Google Maps, et comment les corriger.",
    date: '2026-08-31',
  },
];

export default function BlogIndexPage() {
  return (
    <ScrollReveal>
      {/* HERO */}
      <section className="hero-dark hero-centered" style={{ backgroundImage: 'linear-gradient(90deg, rgba(7,70,68,0) 0%, rgba(7,70,68,0.55) 100%), linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/audit-hero.jpg\')' }}>
        <div className="hero-inner">
          <h1 style={{ fontSize: '42px', letterSpacing: '-1.6px', lineHeight: '1.06' }}>Blog</h1>
        </div>
      </section>

      {/* POSTS LIST */}
      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container-narrow" style={{ padding: '0' }}>
          <span className="eyebrow">Conseils SEO local</span>
          <h2 style={{ fontSize: '28px', letterSpacing: '-1px', lineHeight: '1.15', margin: '14px 0 32px' }}>Nos derniers articles.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {POSTS.map((post) => (
              <article
                key={post.slug}
                style={{ background: 'var(--color-white)', border: '0.5px solid var(--color-border-card)', padding: 'var(--space-5)' }}
              >
                <div style={{ fontSize: '12px', color: 'var(--color-slate)', marginBottom: '10px' }}>
                  {new Date(`${post.date}T12:00:00Z`).toLocaleDateString('fr-BE', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '20px', letterSpacing: '-0.4px', margin: '0 0 10px' }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: 'var(--color-mirage)', textDecoration: 'none' }}>
                    {post.title}
                  </Link>
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-slate)', margin: '0 0 16px' }}>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--color-blaze)', textDecoration: 'none' }}>
                  <span>Lire l'article</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
