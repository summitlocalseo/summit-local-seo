import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import ZoneCrossLinks from '../../components/ZoneCrossLinks';
import HeroForm from '../../components/HeroForm';
import DemoMockup from '../../components/DemoMockup';

const SITE_URL = 'https://www.summitlocalseo.be';

export const metadata = {
  title: { absolute: 'Référencement Local à Charleroi — Summit Local SEO' },
  description:
    "Summit aide les artisans et indépendants de Charleroi à apparaître en tête de Google et Google Maps. Audit de visibilité locale gratuit, sans engagement.",
  alternates: { canonical: '/charleroi' },
  openGraph: {
    title: 'Référencement Local à Charleroi — Summit Local SEO',
    description:
      "Summit aide les artisans et indépendants de Charleroi à apparaître en tête de Google et Google Maps. Audit de visibilité locale gratuit, sans engagement.",
    url: '/charleroi',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Référencement local (SEO local)',
  provider: { '@type': 'Organization', name: 'Summit Local SEO', url: SITE_URL },
  areaServed: { '@type': 'City', name: 'Charleroi', addressCountry: 'BE' },
  url: `${SITE_URL}/charleroi`,
};

export default function CharleroiPage() {
  return (
    <ScrollReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero-dark hero-tall" style={{ backgroundImage: 'linear-gradient(90deg, rgba(7,70,68,0) 0%, rgba(7,70,68,0.55) 100%), linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/audit-hero.jpg\')' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: '2', padding: '0' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} className="eyebrow">
              <span style={{ width: '18px', height: '1px', background: 'var(--color-blaze)' }} />
              <span data-fr="Référencement local · Charleroi" data-en="Local SEO · Charleroi">Référencement local · Charleroi</span>
            </span>
            <h1 style={{ fontSize: '46px', letterSpacing: '-1.8px', lineHeight: '1.05', color: '#fff', margin: '20px 0 0' }} data-fr="Soyez trouvé en premier à Charleroi." data-en="Get found first in Charleroi.">Soyez trouvé en premier à Charleroi.</h1>
            <p className="hero-sub" style={{ maxWidth: '440px' }} data-fr="Charleroi se réinvente vite — numérique, aéroport, centre-ville rénové. Nous aidons les artisans et indépendants carolos à transformer leur réputation de terrain en visibilité Google." data-en="Charleroi is reinventing itself fast — digital, airport, a renovated city centre. We help Charleroi tradespeople and independents turn their on-the-ground reputation into Google visibility.">Charleroi se réinvente vite — numérique, aéroport, centre-ville rénové. Nous aidons les artisans et indépendants carolos à transformer leur réputation de terrain en visibilité Google.</p>
          </div>
          <div style={{ background: 'var(--color-white)', padding: '34px', maxWidth: '380px', justifySelf: 'end', width: '100%', minHeight: '392px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} data-form-wrapper>
            <HeroForm source="Landing Charleroi" />
          </div>
        </div>
      </section>

      {/* WHAT IS LOCAL SEO IN 2026 */}
      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container seo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'stretch', padding: '0' }}>
          <DemoMockup city="Charleroi" />
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 'var(--space-6)' }}>
            <span className="eyebrow" data-fr="Qu'est-ce que le SEO local ?" data-en="What is local SEO?">Qu'est-ce que le SEO local ?</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1.2px', lineHeight: '1.15', margin: '14px 0 0' }} data-fr="Pourquoi ça compte plus que jamais en 2026." data-en="Why it matters more than ever in 2026.">Pourquoi ça compte plus que jamais en 2026.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '640px', margin: '20px 0 0' }} data-fr="Le SEO local aide votre entreprise à ranker plus haut et à être découverte quand des clients proches de Charleroi cherchent vos produits ou services, que ce soit sur Google, Google Maps, ou des outils IA comme ChatGPT et Gemini." data-en="Local SEO helps your business rank higher and get discovered when customers near Charleroi search for the products or services you offer, whether on Google, Google Maps, or AI tools like ChatGPT and Gemini.">Le SEO local aide votre entreprise à ranker plus haut et à être découverte quand des clients proches de Charleroi cherchent vos produits ou services, que ce soit sur Google, Google Maps, ou des outils IA comme ChatGPT et Gemini.</p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '640px', margin: '20px 0 0' }} data-fr="En 2026, de plus en plus de recherches passent par des assistants IA en plus de Google : ces outils s'appuient sur les mêmes signaux (fiche Google Business, avis, cohérence des informations en ligne) pour recommander une entreprise plutôt qu'une autre. Pour une ville comme Charleroi, en pleine reconversion numérique, c'est le moment où jamais de construire cette visibilité avant que les concurrents ne le fassent." data-en="In 2026, more and more searches happen through AI assistants alongside Google: these tools rely on the same signals (Google Business Profile, reviews, consistent information online) to recommend one business over another. For a city like Charleroi, mid-way through its digital reconversion, now is the time to build that visibility before competitors do.">En 2026, de plus en plus de recherches passent par des assistants IA en plus de Google : ces outils s'appuient sur les mêmes signaux (fiche Google Business, avis, cohérence des informations en ligne) pour recommander une entreprise plutôt qu'une autre. Pour une ville comme Charleroi, en pleine reconversion numérique, c'est le moment où jamais de construire cette visibilité avant que les concurrents ne le fassent.</p>
            <div style={{ fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-mirage)', margin: '28px 0 16px' }} data-fr="Ce qui change concrètement pour vous à Charleroi" data-en="What actually changes for you in Charleroi">Ce qui change concrètement pour vous à Charleroi</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Une visibilité Google à la hauteur de votre réputation locale" data-en="Google visibility that matches your local reputation">Une visibilité Google à la hauteur de votre réputation locale</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Plus de chances d'apparaître dans les recommandations IA" data-en="More chances to appear in AI-generated recommendations">Plus de chances d'apparaître dans les recommandations IA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Un meilleur classement sur Google Maps autour de Charleroi" data-en="Higher rankings on Google Maps around Charleroi">Un meilleur classement sur Google Maps autour de Charleroi</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Moins de dépendance au seul bouche-à-oreille" data-en="Less dependence on word-of-mouth alone">Moins de dépendance au seul bouche-à-oreille</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT + WHO WE HELP */}
      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'start', padding: '0' }}>
          <div>
            <span className="eyebrow" data-fr="Le marché carolo" data-en="The Charleroi market">Le marché carolo</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1.1px', lineHeight: '1.1', margin: '14px 0 0' }} data-fr="Une ville en pleine reconversion, où la visibilité en ligne se construit encore." data-en="A city mid-reconversion, where online visibility is still being built.">Une ville en pleine reconversion, où la visibilité en ligne se construit encore.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '20px 0 0' }} data-fr="Ancien cœur industriel de la Wallonie, Charleroi s'est profondément réinventée : essor du numérique et des start-ups, aéroport devenu un hub majeur du trafic aérien belge, quartiers du centre-ville en rénovation. Beaucoup d'artisans et d'indépendants carolos ont bâti leur réputation sur le bouche-à-oreille, mais n'ont pas encore une présence Google à la hauteur de leur savoir-faire." data-en="Once Wallonia's industrial heartland, Charleroi has profoundly reinvented itself: a rise of digital and start-ups, an airport that's become a major Belgian air traffic hub, city-centre neighbourhoods under renovation. Many Charleroi tradespeople and independents built their reputation on word of mouth, but don't yet have a Google presence to match their skill.">Ancien cœur industriel de la Wallonie, Charleroi s'est profondément réinventée : essor du numérique et des start-ups, aéroport devenu un hub majeur du trafic aérien belge, quartiers du centre-ville en rénovation. Beaucoup d'artisans et d'indépendants carolos ont bâti leur réputation sur le bouche-à-oreille, mais n'ont pas encore une présence Google à la hauteur de leur savoir-faire.</p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '16px 0 0' }} data-fr="C'est précisément là que le référencement local change la donne : une fiche Google Business bien optimisée et un site structuré pour les recherches locales permettent de capter une demande qui existe déjà en ligne." data-en="This is exactly where local SEO changes things: a well-optimized Google Business Profile and a site structured for local search let you capture demand that already exists online.">C'est précisément là que le référencement local change la donne : une fiche Google Business bien optimisée et un site structuré pour les recherches locales permettent de capter une demande qui existe déjà en ligne.</p>
          </div>
          <div style={{ background: 'var(--color-white)', border: '0.5px solid var(--color-border-card)', padding: 'var(--space-5)' }}>
            <div style={{ fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-mirage)', marginBottom: '16px' }} data-fr="Nous accompagnons notamment à Charleroi" data-en="We notably work with, in Charleroi">Nous accompagnons notamment à Charleroi</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Entreprises du bâtiment et de rénovation" data-en="Construction and renovation companies">Entreprises du bâtiment et de rénovation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Garages, serruriers et petits ateliers artisanaux" data-en="Garages, locksmiths and small craft workshops">Garages, serruriers et petits ateliers artisanaux</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Coiffure, beauté et commerces de quartier" data-en="Hair, beauty and neighbourhood shops">Coiffure, beauté et commerces de quartier</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Nouvelles entreprises et indépendants qui démarrent leur activité" data-en="New businesses and independents just starting out">Nouvelles entreprises et indépendants qui démarrent leur activité</span>
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
                <p className="step-text" data-fr="On audite votre fiche Google Business et on identifie les mots-clés locaux les plus rentables pour votre activité et votre zone à Charleroi." data-en="We audit your Google Business Profile and find the most profitable local keywords for your business and area in Charleroi.">On audite votre fiche Google Business et on identifie les mots-clés locaux les plus rentables pour votre activité et votre zone à Charleroi.</p>
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
        <ZoneCrossLinks current="charleroi" />
      </section>

      {/* CTA BAND */}
      <section className="cta-band" data-reveal="hidden" style={{ backgroundImage: 'linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/cta-bg.jpg\')' }}>
        <div className="cta-inner">
          <h2 style={{ fontSize: '34px', letterSpacing: '-1.2px', lineHeight: '1.12' }} data-fr="Prêt à être trouvé à Charleroi ?" data-en="Ready to be found in Charleroi?">Prêt à être trouvé à Charleroi ?</h2>
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
