import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import { PricingToggleBoundary } from '../../components/PricingToggle';

export const metadata = {
  title: { absolute: 'Tarifs SEO Local — Summit Local SEO Wallonie' },
  description:
    "Configuration initiale à 300€ ou accompagnement mensuel dès 485€/mois, sans engagement. Audit gratuit de votre visibilité locale inclus.",
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Tarifs SEO Local — Summit Local SEO Wallonie',
    description:
      "Configuration initiale à 300€ ou accompagnement mensuel dès 485€/mois, sans engagement. Audit gratuit de votre visibilité locale inclus.",
    url: '/pricing',
  },
};

export default function PricingPage() {
  return (
    <ScrollReveal>
      {/* HERO */}
      
      <section className="hero-dark hero-centered" style={{ backgroundImage: 'linear-gradient(90deg, rgba(7,70,68,0) 0%, rgba(7,70,68,0.55) 100%), linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/pricing-hero-bg.jpg\')', backgroundPosition: 'center 70%' }}>
        <div className="hero-inner">
          <h1 style={{ fontSize: '42px', letterSpacing: '-1.6px', lineHeight: '1.06' }} data-fr="Tarifs" data-en="Pricing">Tarifs</h1>
        </div>
      </section>
      
      {/* PRICING CARDS */}

      <PricingToggleBoundary>
      <section className="section-off pricing-intro-section" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6) var(--space-7)' }}>
        <div className="container-narrow" style={{ textAlign: 'center', marginBottom: '40px', padding: '0' }}>
          <h2 style={{ fontSize: '30px', letterSpacing: '-1.1px', lineHeight: '1.1' }} data-fr="Des tarifs adaptés à vos besoins." data-en="Pricing that suits your needs.">Des tarifs adaptés à vos besoins.</h2>
          <p style={{ fontSize: '14.5px', lineHeight: '1.7', color: 'var(--color-slate)', maxWidth: '480px', margin: '14px auto 0' }} data-fr="Une formule pour chaque étape de votre croissance. Sans engagement, résiliables à tout moment." data-en="A plan for every stage of your growth. No commitment, cancel anytime.">Une formule pour chaque étape de votre croissance. Sans engagement, résiliables à tout moment.</p>
        </div>
        <div className="pricing-grid">
          {/* ONE-TIME SETUP */}
          <div className="pricing-card" data-reveal-left="hidden">
            <span className="pricing-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 4h-9l-1.5 4.5v2h12v-2z" />
                <path d="M4 8.5v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1 -1v-10" />
                <path d="M9 19.5v-6h2v6" />
              </svg>
            </span>
            <div className="pricing-name" data-fr="Configuration initiale" data-en="Initial Setup">Configuration initiale</div>
            <p className="pricing-tagline" data-fr="Paiement unique" data-en="One-time payment">Paiement unique</p>
            <div className="pricing-align-spacer" style={{ height: '32px' }} />
            <div className="pricing-amount">
              <span className="num">300€</span>
              <span className="period" data-fr="" data-en="incl. VAT" />
            </div>
            <div className="pricing-bill-note" data-fr="Facturé une seule fois · TVAC" data-en="Billed once · incl. VAT">Facturé une seule fois · TVAC</div>
            <Link href="/audit" className="btn btn-dark btn-full">
              <span data-fr="Demander un audit" data-en="Request an audit">Demander un audit</span>
            </Link>
            <div className="pricing-divider" />
            <div className="pricing-feat-intro" data-fr="Ce qui est inclus :" data-en="What's included:">Ce qui est inclus :</div>
            <ul className="pricing-feats">
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Audit de votre fiche Google Business" data-en="Google Business Profile audit">Audit de votre fiche Google Business</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Optimisation de votre fiche Google Business" data-en="Google Business Profile optimization">Optimisation de votre fiche Google Business</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Catégories, services et zones définis" data-en="Categories, services and areas defined">Catégories, services et zones définis</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Recherche de mots-clés locaux" data-en="Local keyword research">Recherche de mots-clés locaux</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Citations sur les annuaires" data-en="Directory citations">Citations sur les annuaires</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Optimisation de base du site" data-en="Basic site optimization">Optimisation de base du site</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Stratégie d'avis clients + QR code" data-en="Review strategy + QR code">Stratégie d'avis clients + QR code</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Suivi initial de vos positions" data-en="Initial rank tracking">Suivi initial de vos positions</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Rapport final détaillé" data-en="Detailed final report">Rapport final détaillé</span>
              </li>
            </ul>
          </div>
          {/* MONTHLY (recommended) */}
          <div className="pricing-card featured" data-reveal-left="hidden" style={{ transitionDelay: '150ms' }}>
            <span className="pricing-icon gradient">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6 -6l4 4l8 -8" />
                <path d="M14 7l7 0l0 7" />
              </svg>
            </span>
            <span className="pricing-badge">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2l2.9 6.4l7.1 .8l-5.3 4.8l1.5 7l-6.2-3.6l-6.2 3.6l1.5-7l-5.3-4.8l7.1-.8z" />
              </svg>
              <span data-fr="Recommandé" data-en="Recommended">Recommandé</span>
            </span>
            <div className="pricing-name" data-fr="Accompagnement continu" data-en="Ongoing Growth">Accompagnement continu</div>
            <p className="pricing-tagline" data-fr="Abonnement mensuel" data-en="Monthly subscription">Abonnement mensuel</p>
            <div className="pricing-toggle">
              <span className="pricing-toggle-label" data-toggle-label="monthly" data-fr="Mensuel" data-en="Monthly">Mensuel</span>
              <button className="toggle-switch" role="switch" aria-checked="false" aria-label="Facturation mensuelle ou annuelle">
                <span className="knob" />
              </button>
              <span className="pricing-toggle-label" data-toggle-label="annual" data-fr="Annuel" data-en="Annual">
                Annuel
                <span className="pricing-toggle-save" data-fr="-2 mois" data-en="-2 months">-2 mois</span>
              </span>
            </div>
            <div className="pricing-amount">
              <span className="num" data-price-monthly>485€</span>
              <span className="num" data-price-annual hidden>404€</span>
              <span className="period" data-fr="/ mois" data-en="/ month">/ mois</span>
            </div>
            <div className="pricing-bill-note" data-price-monthly data-fr="Facturation mensuelle · TVAC" data-en="Billed monthly · incl. VAT">Facturation mensuelle · TVAC</div>
            <div className="pricing-bill-note" data-price-annual hidden data-fr="Facturé annuellement · 2 mois offerts" data-en="Billed annually · 2 months free">Facturé annuellement · 2 mois offerts</div>
            <Link href="/audit" className="btn btn-forest btn-full">
              <span data-fr="Demander un audit" data-en="Request an audit">Demander un audit</span>
            </Link>
            <div className="pricing-divider" />
            <div className="pricing-feat-intro" data-fr="Tout ce qui est inclus dans la Configuration initiale, plus :" data-en="Everything in Initial Setup, plus:">Tout ce qui est inclus dans la Configuration initiale, plus :</div>
            <ul className="pricing-feats">
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Optimisation continue du site" data-en="Ongoing site optimization">Optimisation continue du site</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Création de contenu local" data-en="Local content creation">Création de contenu local</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Rédaction d'articles" data-en="Article writing">Rédaction d'articles</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Développement de backlinks" data-en="Backlink building">Développement de backlinks</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Suivi mensuel de vos positions" data-en="Monthly rank tracking">Suivi mensuel de vos positions</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Rapport de performance mensuel" data-en="Monthly performance report">Rapport de performance mensuel</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Optimisation continue de votre visibilité" data-en="Ongoing visibility optimization">Optimisation continue de votre visibilité</span>
              </li>
              <li>
                <span className="check">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span data-fr="Travail sur le GEO et la visibilité IA" data-en="GEO and AI visibility work">Travail sur le GEO et la visibilité IA</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="guarantees">
          <span className="item" data-reveal="hidden">
            <span className="dot">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </span>
            <span data-fr="Sans engagement" data-en="No commitment">Sans engagement</span>
          </span>
          <span className="item" data-reveal="hidden" style={{ transitionDelay: '120ms' }}>
            <span className="dot">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </span>
            <span data-fr="Résiliable à tout moment" data-en="Cancel anytime">Résiliable à tout moment</span>
          </span>
          <span className="item" data-reveal="hidden" style={{ transitionDelay: '240ms' }}>
            <span className="dot">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </span>
            <span data-fr="Résultats mesurés chaque mois" data-en="Results measured every month">Résultats mesurés chaque mois</span>
          </span>
        </div>
      </section>
      </PricingToggleBoundary>

      {/* WHAT'S ALWAYS INCLUDED */}
      
      <section className="section-white" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container-md" style={{ padding: '0' }}>
          <div className="section-lead center">
            <span className="eyebrow" data-fr="Toujours inclus" data-en="Always included">Toujours inclus</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1px', lineHeight: '1.1', margin: '14px 0 0' }} data-fr="Quel que soit votre forfait." data-en="Whatever your plan.">Quel que soit votre forfait.</h2>
          </div>
          <div className="incl-grid">
            <div className="incl-item" data-reveal="hidden">
              <span className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6 -6l4 4l8 -8" />
                  <path d="M14 7l7 0l0 7" />
                </svg>
              </span>
              <div className="title" data-fr="Rapports transparents" data-en="Transparent reporting">Rapports transparents</div>
              <p data-fr="Un tableau de bord clair : positions, appels, trafic. Aucun jargon, que des chiffres." data-en="A clear dashboard: rankings, calls, traffic. No jargon, just numbers.">Un tableau de bord clair : positions, appels, trafic. Aucun jargon, que des chiffres.</p>
            </div>
            <div className="incl-item" data-reveal="hidden" style={{ transitionDelay: '120ms' }}>
              <span className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                </svg>
              </span>
              <div className="title" data-fr="Aucun engagement" data-en="No lock-in">Aucun engagement</div>
              <p data-fr="Vous restez pour les résultats, jamais à cause d'un contrat. Résiliable quand vous voulez." data-en="You stay for the results, never because of a contract. Cancel whenever you want.">Vous restez pour les résultats, jamais à cause d'un contrat. Résiliable quand vous voulez.</p>
            </div>
            <div className="incl-item" data-reveal="hidden" style={{ transitionDelay: '240ms' }}>
              <span className="icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
                  <path d="M18 19a2 2 0 0 1 -2 2h-2" />
                  <path d="M4 14a2 2 0 0 1 2 -2h1a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-1a2 2 0 0 1 -2 -2z" />
                  <path d="M20 14a2 2 0 0 0 -2 -2h-1a1 1 0 0 0 -1 1v4a1 1 0 0 0 1 1h1a2 2 0 0 0 2 -2z" />
                </svg>
              </span>
              <div className="title" data-fr="Un interlocuteur dédié" data-en="A dedicated contact">Un interlocuteur dédié</div>
              <p data-fr="Une vraie personne qui connaît votre dossier, joignable et basée en Wallonie." data-en="A real person who knows your account, reachable and based in Wallonia.">Une vraie personne qui connaît votre dossier, joignable et basée en Wallonie.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA BAND */}
      
      <section className="cta-band" data-reveal="hidden" style={{ backgroundImage: 'linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/cta-bg.jpg\')' }}>
        <div className="cta-inner">
          <h2 style={{ fontSize: '34px', letterSpacing: '-1.2px', lineHeight: '1.12' }} data-fr="Pas sûr du forfait idéal ?" data-en="Not sure which plan fits?">Pas sûr du forfait idéal ?</h2>
          <p data-fr="Recevez un audit gratuit de votre visibilité locale et une recommandation personnalisée. Réponse sous 48h." data-en="Get a free audit of your local visibility and a tailored recommendation. Reply within 48h.">Recevez un audit gratuit de votre visibilité locale et une recommandation personnalisée. Réponse sous 48h.</p>
          <Link href="/audit" className="btn btn-primary">
            <span data-fr="Demander un audit gratuit" data-en="Request a free audit">Demander un audit gratuit</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </Link>
        </div>
      </section>
    </ScrollReveal>
  );
}
