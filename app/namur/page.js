import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import ZoneCrossLinks from '../../components/ZoneCrossLinks';
import HeroForm from '../../components/HeroForm';
import DemoMockup from '../../components/DemoMockup';

const SITE_URL = 'https://www.summitseo.be';

export const metadata = {
  title: { absolute: 'Agence SEO Namur | Référencement Local pour Indépendants' },
  description:
    "Summit aide les artisans et indépendants de Namur à se classer sur Google. Fiche Google Business, référencement local, résultats mesurables.",
  alternates: { canonical: '/namur' },
  openGraph: {
    title: 'Agence SEO Namur | Référencement Local pour Indépendants',
    description:
      "Summit aide les artisans et indépendants de Namur à se classer sur Google. Fiche Google Business, référencement local, résultats mesurables.",
    url: '/namur',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Référencement local (SEO local)',
  provider: { '@type': 'Organization', name: 'Summit Local SEO', url: SITE_URL },
  areaServed: { '@type': 'City', name: 'Namur', addressCountry: 'BE' },
  url: `${SITE_URL}/namur`,
};

export default function NamurPage() {
  return (
    <ScrollReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero-dark hero-tall" style={{ backgroundImage: 'linear-gradient(90deg, rgba(7,70,68,0) 0%, rgba(7,70,68,0.55) 100%), linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/about-hero-bg.jpg\')', backgroundPosition: 'center 75%' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: '2', padding: '0' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} className="eyebrow">
              <span style={{ width: '18px', height: '1px', background: 'var(--color-blaze)' }} />
              <span data-fr="Référencement local · Namur" data-en="Local SEO · Namur">Référencement local · Namur</span>
            </span>
            <h1 style={{ fontSize: '40px', letterSpacing: '-1.6px', lineHeight: '1.08', color: '#fff', margin: '20px 0 0' }} data-fr="Référencement Local à Namur pour Artisans et Indépendants" data-en="Local SEO in Namur for Tradespeople and Independents">Référencement Local à Namur pour Artisans et Indépendants</h1>
            <p className="hero-sub" style={{ maxWidth: '440px' }} data-fr="Sur un marché plus resserré que Liège ou Charleroi, une bonne position Google fait une différence proportionnellement plus grande. Nous aidons les artisans et indépendants namurois à se démarquer." data-en="In a tighter market than Liège or Charleroi, a strong Google position makes a proportionally bigger difference. We help Namur tradespeople and independents stand out.">Sur un marché plus resserré que Liège ou Charleroi, une bonne position Google fait une différence proportionnellement plus grande. Nous aidons les artisans et indépendants namurois à se démarquer.</p>
          </div>
          <div style={{ background: 'var(--color-white)', padding: '34px', maxWidth: '380px', justifySelf: 'end', width: '100%', minHeight: '392px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} data-form-wrapper>
            <HeroForm source="Landing Namur" />
          </div>
        </div>
      </section>

      {/* WHAT IS LOCAL SEO IN 2026 */}
      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container seo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'stretch', padding: '0' }}>
          <DemoMockup city="Namur" />
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 'var(--space-6)' }}>
            <span className="eyebrow" data-fr="Qu'est-ce que le SEO local ?" data-en="What is local SEO?">Qu'est-ce que le SEO local ?</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1.2px', lineHeight: '1.15', margin: '14px 0 0' }} data-fr="Pourquoi ça compte plus que jamais en 2026." data-en="Why it matters more than ever in 2026.">Pourquoi ça compte plus que jamais en 2026.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '640px', margin: '20px 0 0' }} data-fr="Le SEO local aide votre entreprise à ranker plus haut et à être découverte quand des clients proches de Namur cherchent vos produits ou services, que ce soit sur Google, Google Maps, ou des outils IA comme ChatGPT et Gemini." data-en="Local SEO helps your business rank higher and get discovered when customers near Namur search for the products or services you offer, whether on Google, Google Maps, or AI tools like ChatGPT and Gemini.">Le SEO local aide votre entreprise à ranker plus haut et à être découverte quand des clients proches de Namur cherchent vos produits ou services, que ce soit sur Google, Google Maps, ou des outils IA comme ChatGPT et Gemini.</p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '640px', margin: '20px 0 0' }} data-fr="En 2026, de plus en plus de recherches passent par des assistants IA en plus de Google : ces outils s'appuient sur les mêmes signaux (fiche Google Business, avis, cohérence des informations en ligne) pour recommander une entreprise plutôt qu'une autre. Sur un marché aussi resserré que Namur, être le premier à bien s'y prendre suffit souvent à distancer durablement les confrères." data-en="In 2026, more and more searches happen through AI assistants alongside Google: these tools rely on the same signals (Google Business Profile, reviews, consistent information online) to recommend one business over another. In a market as tight as Namur, being the first to get it right is often enough to durably outpace your peers.">En 2026, de plus en plus de recherches passent par des assistants IA en plus de Google : ces outils s'appuient sur les mêmes signaux (fiche Google Business, avis, cohérence des informations en ligne) pour recommander une entreprise plutôt qu'une autre. Sur un marché aussi resserré que Namur, être le premier à bien s'y prendre suffit souvent à distancer durablement les confrères.</p>
            <div style={{ fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-mirage)', margin: '28px 0 16px' }} data-fr="Ce qui change concrètement pour vous à Namur" data-en="What actually changes for you in Namur">Ce qui change concrètement pour vous à Namur</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Un avantage net sur un marché local moins saturé" data-en="A clear edge in a less saturated local market">Un avantage net sur un marché local moins saturé</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Plus de chances d'apparaître dans les recommandations IA" data-en="More chances to appear in AI-generated recommendations">Plus de chances d'apparaître dans les recommandations IA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Un meilleur classement sur Google Maps autour de Namur" data-en="Higher rankings on Google Maps around Namur">Un meilleur classement sur Google Maps autour de Namur</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Plus de clients trouvés sans payer chaque clic" data-en="More customers finding you without paying for every click">Plus de clients trouvés sans payer chaque clic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT + WHO WE HELP */}
      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container market-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'start', padding: '0' }}>
          <div>
            <span className="eyebrow" data-fr="Le marché namurois" data-en="The Namur market">Le marché namurois</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1.1px', lineHeight: '1.1', margin: '14px 0 0' }} data-fr="Capitale administrative de la Wallonie, et un marché local à taille humaine." data-en="Wallonia's administrative capital, and a local market on a human scale.">Capitale administrative de la Wallonie, et un marché local à taille humaine.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '20px 0 0' }} data-fr="Siège du Gouvernement et du Parlement wallons, Namur a une économie tournée vers les services, l'administration et les professions libérales, avec un tissu de commerces et d'indépendants plus resserré qu'à Liège ou Charleroi. Sur un marché local plus compact, bien apparaître sur Google fait une différence proportionnellement plus grande : il y a simplement moins de concurrents à dépasser pour arriver en tête." data-en="Home to the Walloon Government and Parliament, Namur has an economy geared toward services, administration and the professions, with a tighter fabric of shops and independents than Liège or Charleroi. In a more compact local market, showing up well on Google makes a proportionally bigger difference: there are simply fewer competitors to overtake to reach the top.">Siège du Gouvernement et du Parlement wallons, Namur a une économie tournée vers les services, l'administration et les professions libérales, avec un tissu de commerces et d'indépendants plus resserré qu'à Liège ou Charleroi. Sur un marché local plus compact, bien apparaître sur Google fait une différence proportionnellement plus grande : il y a simplement moins de concurrents à dépasser pour arriver en tête.</p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '16px 0 0' }} data-fr="Pour un artisan ou un indépendant namurois, cela veut dire qu'un travail de référencement local bien fait peut rapidement porter ses fruits : une fiche Google Business optimisée et un site clair suffisent souvent à se démarquer nettement." data-en="For a Namur tradesperson or independent, that means a well-done local SEO effort can pay off quickly: an optimized Google Business Profile and a clear website are often enough to stand out clearly.">Pour un artisan ou un indépendant namurois, cela veut dire qu'un travail de référencement local bien fait peut rapidement porter ses fruits : une fiche Google Business optimisée et un site clair suffisent souvent à se démarquer nettement.</p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '16px 0 0' }} data-fr="À Namur, la concurrence entre artisans et indépendants pour apparaître en tête des recherches Google reste plus accessible que dans les grandes villes voisines. C'est le moment idéal pour prendre une longueur d'avance. Que vous soyez basé à Namur centre, Jambes, Salzinnes ou dans les environs, Summit optimise votre fiche Google Business Profile et votre visibilité locale pour que les clients de votre quartier vous trouvent en premier." data-en="In Namur, competition among tradespeople and independents to rank at the top of Google searches remains more accessible than in neighbouring larger cities. Now is the ideal time to get ahead. Whether you're based in Namur centre, Jambes, Salzinnes, or the surrounding area, Summit optimizes your Google Business Profile and local visibility so customers in your neighbourhood find you first.">À Namur, la concurrence entre artisans et indépendants pour apparaître en tête des recherches Google reste plus accessible que dans les grandes villes voisines. C'est le moment idéal pour prendre une longueur d'avance. Que vous soyez basé à Namur centre, Jambes, Salzinnes ou dans les environs, Summit optimise votre fiche Google Business Profile et votre visibilité locale pour que les clients de votre quartier vous trouvent en premier.</p>
          </div>
          <div style={{ background: 'var(--color-white)', border: '0.5px solid var(--color-border-card)', padding: 'var(--space-5)' }}>
            <div style={{ fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-mirage)', marginBottom: '16px' }} data-fr="Nous accompagnons notamment à Namur" data-en="We notably work with, in Namur">Nous accompagnons notamment à Namur</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Professions libérales et cabinets de services" data-en="The professions and service practices">Professions libérales et cabinets de services</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Artisans du bâtiment et de l'entretien" data-en="Building and maintenance trades">Artisans du bâtiment et de l'entretien</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Commerces du centre-ville et des quartiers résidentiels" data-en="City-centre shops and residential-area businesses">Commerces du centre-ville et des quartiers résidentiels</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Cabinets dentaires et professions de santé" data-en="Dental practices and healthcare professionals">Cabinets dentaires et professions de santé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-white" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.7fr 1fr', gap: '72px', padding: '0' }}>
          <div>
            <span className="eyebrow" data-fr="Comment ça marche" data-en="How it works">Comment ça marche</span>
            <h2 style={{ fontSize: '32px', letterSpacing: '-1.3px', lineHeight: '1.1', margin: '14px 0 0' }} data-fr="Un process simple, des résultats concrets." data-en="A simple process, concrete results.">Un process simple, des résultats concrets.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'var(--color-slate)', margin: '20px 0 0' }} data-fr="De l'audit à la première page, un accompagnement clair en quatre étapes, sans jargon, sans surprise." data-en="From audit to page one, a clear four-step journey, no jargon, no surprises.">De l'audit à la première page, un accompagnement clair en quatre étapes, sans jargon, sans surprise.</p>
            <Link href="/audit" className="btn btn-forest" style={{ marginTop: '28px' }}>
              <span data-fr="Demander un audit" data-en="Request an audit">Demander un audit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </Link>
          </div>
          <div className="steps steps-numbered">
            <div className="step" data-reveal="hidden">
              <div className="step-marker">
                <span className="step-num">01</span>
                <span className="step-line" data-line-reveal="hidden" />
              </div>
              <div className="step-body">
                <div className="step-title" data-fr="Découverte" data-en="Discover">Découverte</div>
                <p className="step-text" data-fr="On audite votre fiche Google Business et on identifie les mots-clés locaux les plus rentables pour votre activité et votre zone à Namur." data-en="We audit your Google Business Profile and find the most profitable local keywords for your business and area in Namur.">On audite votre fiche Google Business et on identifie les mots-clés locaux les plus rentables pour votre activité et votre zone à Namur.</p>
              </div>
            </div>
            <div className="step" data-reveal="hidden">
              <div className="step-marker">
                <span className="step-num">02</span>
                <span className="step-line" data-line-reveal="hidden" />
              </div>
              <div className="step-body">
                <div className="step-title" data-fr="Stratégie" data-en="Plan">Stratégie</div>
                <p className="step-text" data-fr="On met en place votre configuration initiale : catégories, services et zones définis, citations sur les annuaires et optimisation de base du site." data-en="We set up your initial configuration: categories, services and areas defined, directory citations and basic site optimization.">On met en place votre configuration initiale : catégories, services et zones définis, citations sur les annuaires et optimisation de base du site.</p>
              </div>
            </div>
            <div className="step" data-reveal="hidden">
              <div className="step-marker">
                <span className="step-num">03</span>
                <span className="step-line" data-line-reveal="hidden" />
              </div>
              <div className="step-body">
                <div className="step-title" data-fr="Optimisation" data-en="Optimize">Optimisation</div>
                <p className="step-text" data-fr="En option, on prend le relais chaque mois : contenu local, articles, backlinks et optimisation continue de votre visibilité." data-en="Optionally, we take it further every month: local content, articles, backlinks and ongoing visibility optimization.">En option, on prend le relais chaque mois : contenu local, articles, backlinks et optimisation continue de votre visibilité.</p>
              </div>
            </div>
            <div className="step" data-reveal="hidden">
              <div className="step-marker">
                <span className="step-num">04</span>
              </div>
              <div className="step-body">
                <div className="step-title" data-fr="Résultats" data-en="Results">Résultats</div>
                <p className="step-text" data-fr="On suit vos positions chaque mois et on vous envoie un rapport clair : appels reçus, demandes de devis et trafic." data-en="We track your rankings every month and send you a clear report: calls received, quote requests and traffic.">On suit vos positions chaque mois et on vous envoie un rapport clair : appels reçus, demandes de devis et trafic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="section-off" data-reveal="hidden" style={{ padding: '0 var(--space-6) var(--space-7)' }}>
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
        <ZoneCrossLinks current="namur" />
      </section>

      {/* CTA BAND */}
      <section className="cta-band" data-reveal="hidden" style={{ backgroundImage: 'linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/cta-bg.jpg\')' }}>
        <div className="cta-inner">
          <h2 style={{ fontSize: '34px', letterSpacing: '-1.2px', lineHeight: '1.12' }} data-fr="Prêt à être trouvé à Namur ?" data-en="Ready to be found in Namur?">Prêt à être trouvé à Namur ?</h2>
          <p data-fr="Recevez un audit gratuit de votre visibilité locale. Réponse sous 48h, sans engagement." data-en="Get a free audit of your local visibility. Reply within 48h, no commitment.">Recevez un audit gratuit de votre visibilité locale. Réponse sous 48h, sans engagement.</p>
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
