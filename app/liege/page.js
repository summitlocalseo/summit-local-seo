import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import ZoneCrossLinks from '../../components/ZoneCrossLinks';
import HeroForm from '../../components/HeroForm';
import DemoMockup from '../../components/DemoMockup';

const SITE_URL = 'https://www.summitseo.be';

export const metadata = {
  title: { absolute: 'Agence SEO Liège | Visibilité Google pour Indépendants' },
  description:
    "Summit aide les artisans et indépendants de Liège à améliorer leur classement Google. Référencement local, fiche Google Business, suivi mensuel transparent.",
  alternates: { canonical: '/liege' },
  openGraph: {
    title: 'Agence SEO Liège | Visibilité Google pour Indépendants',
    description:
      "Summit aide les artisans et indépendants de Liège à améliorer leur classement Google. Référencement local, fiche Google Business, suivi mensuel transparent.",
    url: '/liege',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Référencement local (SEO local)',
  provider: { '@type': 'Organization', name: 'Summit Local SEO', url: SITE_URL },
  areaServed: { '@type': 'City', name: 'Liège', addressCountry: 'BE' },
  url: `${SITE_URL}/liege`,
};

export default function LiegePage() {
  return (
    <ScrollReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero-dark hero-tall" style={{ backgroundImage: 'linear-gradient(90deg, rgba(7,70,68,0) 0%, rgba(7,70,68,0.35) 100%), linear-gradient(120deg, rgba(18,22,24,0.55) 0%, rgba(24,30,32,0.4) 48%, rgba(30,38,40,0.2) 100%), url(\'/assets/img/hero-bg.jpg\')' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: '2', padding: '0' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} className="eyebrow">
              <span style={{ width: '18px', height: '1px', background: 'var(--color-blaze)' }} />
              <span data-fr="Référencement local · Liège" data-en="Local SEO · Liège">Référencement local · Liège</span>
            </span>
            <h1 style={{ fontSize: '40px', letterSpacing: '-1.6px', lineHeight: '1.08', color: '#fff', margin: '20px 0 0' }} data-fr="Référencement Local à Liège pour Artisans et Indépendants" data-en="Local SEO in Liège for Tradespeople and Independents">Référencement Local à Liège pour Artisans et Indépendants</h1>
            <p className="hero-sub" style={{ maxWidth: '440px' }} data-fr="Liège est le plus grand bassin économique de Wallonie, et l'une des places les plus disputées sur Google. Nous aidons les artisans et indépendants liégeois à sortir du lot sur les recherches locales et Google Maps." data-en="Liège is Wallonia's largest economic hub, and one of its most contested places on Google. We help Liège tradespeople and independents stand out in local search and Google Maps.">Liège est le plus grand bassin économique de Wallonie, et l'une des places les plus disputées sur Google. Nous aidons les artisans et indépendants liégeois à sortir du lot sur les recherches locales et Google Maps.</p>
          </div>
          <div style={{ background: 'var(--color-white)', padding: '34px', maxWidth: '380px', justifySelf: 'end', width: '100%', minHeight: '392px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} data-form-wrapper>
            <HeroForm source="Landing Liège" />
          </div>
        </div>
      </section>

      {/* WHAT IS LOCAL SEO IN 2026 */}
      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container seo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'stretch', padding: '0' }}>
          <DemoMockup city="Liège" />
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 'var(--space-6)' }}>
            <span className="eyebrow" data-fr="Qu'est-ce que le SEO local ?" data-en="What is local SEO?">Qu'est-ce que le SEO local ?</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1.2px', lineHeight: '1.15', margin: '14px 0 0' }} data-fr="Pourquoi ça compte plus que jamais en 2026." data-en="Why it matters more than ever in 2026.">Pourquoi ça compte plus que jamais en 2026.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '640px', margin: '20px 0 0' }} data-fr="Le SEO local aide votre entreprise à ranker plus haut et à être découverte quand des clients proches de Liège cherchent vos produits ou services, que ce soit sur Google, Google Maps, ou des outils IA comme ChatGPT et Gemini." data-en="Local SEO helps your business rank higher and get discovered when customers near Liège search for the products or services you offer, whether on Google, Google Maps, or AI tools like ChatGPT and Gemini.">Le SEO local aide votre entreprise à ranker plus haut et à être découverte quand des clients proches de Liège cherchent vos produits ou services, que ce soit sur Google, Google Maps, ou des outils IA comme ChatGPT et Gemini.</p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '640px', margin: '20px 0 0' }} data-fr="En 2026, de plus en plus de recherches passent par des assistants IA en plus de Google : ces outils s'appuient sur les mêmes signaux (fiche Google Business, avis, cohérence des informations en ligne) pour recommander une entreprise plutôt qu'une autre. Dans une agglomération aussi dense que Liège, ne pas être optimisé, c'est laisser le champ libre à vos concurrents." data-en="In 2026, more and more searches happen through AI assistants alongside Google: these tools rely on the same signals (Google Business Profile, reviews, consistent information online) to recommend one business over another. In an agglomeration as dense as Liège, not being optimized means leaving the field open to your competitors.">En 2026, de plus en plus de recherches passent par des assistants IA en plus de Google : ces outils s'appuient sur les mêmes signaux (fiche Google Business, avis, cohérence des informations en ligne) pour recommander une entreprise plutôt qu'une autre. Dans une agglomération aussi dense que Liège, ne pas être optimisé, c'est laisser le champ libre à vos concurrents.</p>
            <div style={{ fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-mirage)', margin: '28px 0 16px' }} data-fr="Ce qui change concrètement pour vous à Liège" data-en="What actually changes for you in Liège">Ce qui change concrètement pour vous à Liège</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Plus de visibilité face à une concurrence dense sur Google" data-en="More visibility against dense competition on Google">Plus de visibilité face à une concurrence dense sur Google</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Plus de chances d'apparaître dans les recommandations IA" data-en="More chances to appear in AI-generated recommendations">Plus de chances d'apparaître dans les recommandations IA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Un meilleur classement sur Google Maps autour de Liège" data-en="Higher rankings on Google Maps around Liège">Un meilleur classement sur Google Maps autour de Liège</span>
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
            <span className="eyebrow" data-fr="Le marché liégeois" data-en="The Liège market">Le marché liégeois</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1.1px', lineHeight: '1.1', margin: '14px 0 0' }} data-fr="Une agglomération dense, une concurrence Google à l'avenant." data-en="A dense city, and Google competition to match.">Une agglomération dense, une concurrence Google à l'avenant.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '20px 0 0' }} data-fr="Liège est la plus grande agglomération de Wallonie, portée par un aéroport de fret parmi les plus actifs d'Europe (Liège Airport / BRUcargo), un tissu industriel historique et une économie de services en pleine croissance. Cette densité est une opportunité, mais elle veut aussi dire plus de concurrents affichés sur la même recherche Google que dans une ville plus petite." data-en="Liège is Wallonia's largest agglomeration, driven by one of Europe's busiest cargo airports (Liège Airport / BRUcargo), a historic industrial fabric and a fast-growing services economy. This density is an opportunity, but it also means more competitors showing up on the same Google search than in a smaller city.">Liège est la plus grande agglomération de Wallonie, portée par un aéroport de fret parmi les plus actifs d'Europe (Liège Airport / BRUcargo), un tissu industriel historique et une économie de services en pleine croissance. Cette densité est une opportunité, mais elle veut aussi dire plus de concurrents affichés sur la même recherche Google que dans une ville plus petite.</p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '16px 0 0' }} data-fr="Pour un artisan ou un indépendant liégeois, apparaître dans les 3 premiers résultats de la carte Google ou en première page de recherche fait souvent la différence entre un agenda plein et un téléphone silencieux. C'est exactement le travail que nous faisons : optimiser votre fiche Google Business, votre site et votre présence en ligne pour les recherches locales autour de Liège." data-en="For a Liège tradesperson or independent, appearing in the top 3 results on the Google map or on page one of search often makes the difference between a full schedule and a silent phone. That's exactly the work we do: optimizing your Google Business Profile, your website and your online presence for local searches around Liège.">Pour un artisan ou un indépendant liégeois, apparaître dans les 3 premiers résultats de la carte Google ou en première page de recherche fait souvent la différence entre un agenda plein et un téléphone silencieux. C'est exactement le travail que nous faisons : optimiser votre fiche Google Business, votre site et votre présence en ligne pour les recherches locales autour de Liège.</p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '16px 0 0' }} data-fr="Liège est l'un des marchés les plus compétitifs de Wallonie pour le référencement local — ce qui signifie aussi que les indépendants qui investissent tôt dans leur visibilité Google prennent une vraie avance sur leurs concurrents. Que votre activité soit basée à Liège centre, Seraing, Herstal ou Ans, Summit optimise votre présence locale pour capter les recherches de clients près de chez vous." data-en="Liège is one of Wallonia's most competitive markets for local SEO — which also means independents who invest early in their Google visibility gain a real edge over competitors. Whether your business is based in Liège centre, Seraing, Herstal, or Ans, Summit optimizes your local presence to capture nearby customer searches.">Liège est l'un des marchés les plus compétitifs de Wallonie pour le référencement local — ce qui signifie aussi que les indépendants qui investissent tôt dans leur visibilité Google prennent une vraie avance sur leurs concurrents. Que votre activité soit basée à Liège centre, Seraing, Herstal ou Ans, Summit optimise votre présence locale pour capter les recherches de clients près de chez vous.</p>
          </div>
          <div style={{ background: 'var(--color-white)', border: '0.5px solid var(--color-border-card)', padding: 'var(--space-5)' }}>
            <div style={{ fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-mirage)', marginBottom: '16px' }} data-fr="Nous accompagnons notamment à Liège" data-en="We notably work with, in Liège">Nous accompagnons notamment à Liège</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Artisans du bâtiment (plomberie, électricité, toiture)" data-en="Building trades (plumbing, electrical, roofing)">Artisans du bâtiment (plomberie, électricité, toiture)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Garages automobiles et serruriers" data-en="Auto garages and locksmiths">Garages automobiles et serruriers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Cabinets dentaires et professions de santé de proximité" data-en="Dental practices and local healthcare professionals">Cabinets dentaires et professions de santé de proximité</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5l10 -10" /></svg></span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Commerces et indépendants du centre-ville et des communes voisines" data-en="Shops and independents in the city centre and neighbouring municipalities">Commerces et indépendants du centre-ville et des communes voisines</span>
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
                <p className="step-text" data-fr="On audite votre fiche Google Business et on identifie les mots-clés locaux les plus rentables pour votre activité et votre zone à Liège." data-en="We audit your Google Business Profile and find the most profitable local keywords for your business and area in Liège.">On audite votre fiche Google Business et on identifie les mots-clés locaux les plus rentables pour votre activité et votre zone à Liège.</p>
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
        <ZoneCrossLinks current="liege" />
      </section>

      {/* CTA BAND */}
      <section className="cta-band" data-reveal="hidden" style={{ backgroundImage: 'linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/cta-bg.jpg\')' }}>
        <div className="cta-inner">
          <h2 style={{ fontSize: '34px', letterSpacing: '-1.2px', lineHeight: '1.12' }} data-fr="Prêt à être trouvé à Liège ?" data-en="Ready to be found in Liège?">Prêt à être trouvé à Liège ?</h2>
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
