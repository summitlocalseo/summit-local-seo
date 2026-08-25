import Link from 'next/link';
import ScrollReveal from '../components/ScrollReveal';
import { FaqAccordionBoundary } from '../components/FaqAccordion';
import HeroForm from '../components/HeroForm';
import DemoMockup from '../components/DemoMockup';

export const metadata = {
  title: { absolute: 'Summit Local SEO — Référencement Local en Wallonie' },
  description:
    "Summit aide les artisans et indépendants de Liège, Charleroi et Namur à se classer #1 sur Google. Audit de visibilité locale gratuit, sans engagement.",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Summit Local SEO — Référencement Local en Wallonie',
    description:
      "Summit aide les artisans et indépendants de Liège, Charleroi et Namur à se classer #1 sur Google. Audit de visibilité locale gratuit, sans engagement.",
    url: '/',
  },
};

export default function HomePage() {
  return (
    <ScrollReveal>
      {/* HERO */}
      
      <section className="hero-dark hero-tall" style={{ backgroundImage: 'linear-gradient(90deg, rgba(7,70,68,0) 0%, rgba(7,70,68,0.35) 100%), linear-gradient(120deg, rgba(18,22,24,0.55) 0%, rgba(24,30,32,0.4) 48%, rgba(30,38,40,0.2) 100%), url(\'/assets/img/hero-bg.jpg\')' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '80px', alignItems: 'center', position: 'relative', zIndex: '2', padding: '0' }}>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} className="eyebrow">
              <span style={{ width: '18px', height: '1px', background: 'var(--color-blaze)' }} />
              <span data-fr="Référencement local · Wallonie" data-en="Local SEO · Wallonia">Référencement local · Wallonie</span>
            </span>
            <h1 style={{ fontSize: '52px', letterSpacing: '-2px', lineHeight: '1.02', color: '#fff', margin: '20px 0 0' }} data-fr="Atteignez le sommet des recherches locales." data-en="Reach the summit of local search.">Atteignez le sommet des recherches locales.</h1>
            <p className="hero-sub" style={{ maxWidth: '440px' }} data-fr="Summit aide les artisans et indépendants de Liège et Charleroi à se classer #1 sur Google. Clair, direct, orienté résultats." data-en="Summit helps tradespeople and independents in Liège and Charleroi rank #1 on Google. Clear, direct, results-driven.">Summit aide les artisans et indépendants de Liège et Charleroi à se classer #1 sur Google. Clair, direct, orienté résultats.</p>
          </div>
          <div style={{ background: 'var(--color-white)', padding: '34px', maxWidth: '380px', justifySelf: 'end', width: '100%', minHeight: '392px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} data-form-wrapper>
            <HeroForm />
          </div>
        </div>
      </section>
      
      {/* VALUE PROPS */}
      
      <section className="section-off" style={{ padding: '0 var(--space-6)' }}>
        <div className="container" style={{ padding: '0' }}>
          <div className="value-props">
            <div className="value-card">
              <span className="icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <circle cx="26" cy="26" r="15" stroke="var(--forest)" strokeWidth="1.4" />
                  <ellipse cx="26" cy="26" rx="6.2" ry="15" stroke="var(--forest)" strokeWidth="1.4" />
                  <path d="M11 26h30" stroke="var(--forest)" strokeWidth="1.4" />
                  <path d="M13.5 18.5h25M13.5 33.5h25" stroke="var(--forest)" strokeWidth="1.4" />
                  <path d="M26 41v6M23 47h6" stroke="var(--forest)" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="26" cy="41" r="3" fill="#fff" stroke="var(--forest)" strokeWidth="1.6" />
                </svg>
              </span>
              <div>
                <span className="title" data-fr="Solution SEO locale" data-en="Local SEO solution">Solution SEO locale</span>
                <span className="sub" data-fr="Une stratégie complète pour votre fiche Google, votre site et vos avis, pensée pour les recherches locales." data-en="A complete strategy for your Google profile, website and reviews, built around local search.">Une stratégie complète pour votre fiche Google, votre site et vos avis, pensée pour les recherches locales.</span>
              </div>
            </div>
            <div className="value-card">
              <span className="icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <path d="M11 42h30" stroke="var(--forest)" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M11 42V15" stroke="var(--forest)" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M16 36v-8M23 36v-13M30 36v-6M37 36v-16" stroke="var(--forest)" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M15 20l7 -6l5 4l9 -8" stroke="var(--forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M29 10h7v7" stroke="var(--forest)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <span className="title" data-fr="Croissance de votre activité" data-en="Business growth">Croissance de votre activité</span>
                <span className="sub" data-fr="Plus de visibilité se traduit par plus d'appels, de demandes de devis et de clients qui poussent votre porte." data-en="More visibility means more calls, more quote requests, and more customers walking through your door.">Plus de visibilité se traduit par plus d'appels, de demandes de devis et de clients qui poussent votre porte.</span>
              </div>
            </div>
            <div className="value-card">
              <span className="icon">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <path d="M14 8h24v36H14z" stroke="var(--forest)" strokeWidth="1.4" strokeLinejoin="round" />
                  <path d="M19 17h14M19 23h14M19 29h9" stroke="var(--forest)" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M35 34l4.5 4.5" stroke="var(--forest)" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="30.5" cy="30.5" r="5.5" stroke="var(--forest)" strokeWidth="1.8" />
                </svg>
              </span>
              <div>
                <span className="title" data-fr="Rapport de visibilité" data-en="Visibility report">Rapport de visibilité</span>
                <span className="sub" data-fr="Un suivi mensuel clair de vos positions, appels et trafic, pour voir précisément ce qui progresse." data-en="A clear monthly summary of your rankings, calls and traffic, so you see exactly what is improving.">Un suivi mensuel clair de vos positions, appels et trafic, pour voir précisément ce qui progresse.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* WHAT IS LOCAL SEO */}
      
      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container seo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)', alignItems: 'stretch', padding: '0' }}>
          <DemoMockup city="Liège" />
          <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: 'var(--space-6)' }}>
            <span className="eyebrow" data-fr="À propos" data-en="About">À propos</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1.2px', lineHeight: '1.15', margin: '14px 0 0' }} data-fr="Soyez visible là où les gens cherchent." data-en="Show up where people search.">Soyez visible là où les gens cherchent.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '640px', margin: '20px 0 0' }} data-fr="Le SEO local aide votre entreprise à ranker plus haut et à être découverte quand des clients proches cherchent vos produits ou services, que ce soit sur Google, Google Maps, ou des outils IA comme ChatGPT et Gemini." data-en="Local SEO helps your business rank higher and get discovered when nearby customers search for the products or services you offer, whether they're searching on Google, Google Maps, or AI tools like ChatGPT and Gemini.">Le SEO local aide votre entreprise à ranker plus haut et à être découverte quand des clients proches cherchent vos produits ou services, que ce soit sur Google, Google Maps, ou des outils IA comme ChatGPT et Gemini.</p>
            <p style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '640px', margin: '20px 0 0' }} data-fr="On optimise votre fiche Google Business, votre site et votre présence en ligne pour que les moteurs de recherche et les plateformes IA comprennent votre activité, et que les clients vous trouvent au moment d'acheter." data-en="We optimize your Google Business Profile, website, and online presence so search engines and AI platforms understand your business, and customers can find you when they're ready to buy.">On optimise votre fiche Google Business, votre site et votre présence en ligne pour que les moteurs de recherche et les plateformes IA comprennent votre activité, et que les clients vous trouvent au moment d'acheter.</p>
            <div style={{ fontWeight: '700', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-mirage)', margin: '28px 0 16px' }} data-fr="Ce qui change concrètement pour vous" data-en="What actually changes for you">Ce qui change concrètement pour vous</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Plus de visibilité dans les recherches locales sur Google" data-en="More visibility in local Google searches">Plus de visibilité dans les recherches locales sur Google</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Plus de chances d'apparaître dans les recommandations IA" data-en="More chances to appear in AI-generated recommendations">Plus de chances d'apparaître dans les recommandations IA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Un meilleur classement sur Google Maps" data-en="Higher rankings on Google Maps">Un meilleur classement sur Google Maps</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span style={{ flexShrink: '0', marginTop: '2px', color: 'var(--color-blaze)' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </span>
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', fontWeight: '600' }} data-fr="Plus de clients trouvés sans payer chaque clic" data-en="More customers finding you without paying for every click">Plus de clients trouvés sans payer chaque clic</span>
              </div>
            </div>
            <Link href="/about" className="btn btn-primary" style={{ marginTop: '28px', alignSelf: 'flex-start' }}>
              <span data-fr="En savoir plus" data-en="Learn more">En savoir plus</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* INDUSTRIES */}
      
      <section className="section-dark" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container industries-grid" style={{ display: 'grid', gridTemplateColumns: '0.42fr 1fr', gap: 'var(--space-6)', alignItems: 'start', padding: '0' }}>
          <div>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }} data-fr="Secteurs" data-en="Industries">Secteurs</span>
            <h2 style={{ fontSize: '34px', letterSpacing: '-1.1px', lineHeight: '1.08', color: '#fff', margin: '8px 0 0' }} data-fr="Les métiers que nous accompagnons." data-en="The trades we support.">Les métiers que nous accompagnons.</h2>
          </div>
          <div className="industries-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 var(--space-5)', paddingLeft: 'var(--space-7)' }}>
            <div data-reveal-right="hidden" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', padding: 'var(--space-2) 0', borderBottom: '0.5px solid rgba(255,255,255,0.12)' }} data-fr="Serrurerie" data-en="Locksmiths">Serrurerie</div>
            <div data-reveal-right="hidden" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', padding: 'var(--space-2) 0', borderBottom: '0.5px solid rgba(255,255,255,0.12)', transitionDelay: '260ms' }} data-fr="Plomberie & chauffage" data-en="Plumbing & heating">Plomberie & chauffage</div>
            <div data-reveal-right="hidden" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', padding: 'var(--space-2) 0', borderBottom: '0.5px solid rgba(255,255,255,0.12)' }} data-fr="Électricité" data-en="Electrical">Électricité</div>
            <div data-reveal-right="hidden" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', padding: 'var(--space-2) 0', borderBottom: '0.5px solid rgba(255,255,255,0.12)', transitionDelay: '260ms' }} data-fr="Cabinets dentaires" data-en="Dental practices">Cabinets dentaires</div>
            <div data-reveal-right="hidden" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', padding: 'var(--space-2) 0', borderBottom: '0.5px solid rgba(255,255,255,0.12)', transitionDelay: '520ms' }} data-fr="Garages automobiles" data-en="Auto garages">Garages automobiles</div>
            <div data-reveal-right="hidden" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', padding: 'var(--space-2) 0', borderBottom: '0.5px solid rgba(255,255,255,0.12)', transitionDelay: '780ms' }} data-fr="Coiffure & beauté" data-en="Hair & beauty">Coiffure & beauté</div>
            <div data-reveal-right="hidden" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', padding: 'var(--space-2) 0', borderBottom: '0.5px solid rgba(255,255,255,0.12)', transitionDelay: '520ms' }} data-fr="Toiture & couverture" data-en="Roofing & cladding">Toiture & couverture</div>
            <div data-reveal-right="hidden" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', padding: 'var(--space-2) 0', borderBottom: '0.5px solid rgba(255,255,255,0.12)', transitionDelay: '780ms' }} data-fr="Et bien plus encore" data-en="And much more">Et bien plus encore</div>
          </div>
        </div>
      </section>
      
      {/* WHY CHOOSE US */}
      
      <section className="section-white" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container" style={{ padding: '0' }}>
          <div className="section-lead">
            <span className="eyebrow" data-fr="Pourquoi nous choisir" data-en="Why choose us">Pourquoi nous choisir</span>
            <h2 style={{ fontSize: '38px', letterSpacing: '-1.5px', lineHeight: '1.08', margin: '16px 0 18px' }} data-fr="Ce qui nous distingue vraiment des autres agences." data-en="What truly sets us apart from other agencies.">Ce qui nous distingue vraiment des autres agences.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'var(--color-slate)' }} data-fr="La plupart des agences vendent du référencement. Nous vendons des résultats : des appels qui sonnent, des clients qui poussent la porte, une place durable en haut de Google." data-en="Most agencies sell SEO. We sell results: phones that ring, customers who walk in, and a lasting spot at the top of Google.">La plupart des agences vendent du référencement. Nous vendons des résultats : des appels qui sonnent, des clients qui poussent la porte, une place durable en haut de Google.</p>
          </div>
          <div className="card-row">
            <div className="card-col" data-reveal="hidden">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--color-mirage)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19v-6" />
                <path d="M10 19v-10" />
                <path d="M16 19v-4" />
                <path d="M20 19v-14" />
                <path d="M4 13l6 -5l4 2l6 -6" opacity="0.55" />
                <path d="M18 4h3v3" opacity="0.55" />
              </svg>
              <h3 data-fr="Abordable, sans compromis." data-en="Affordable, not compromised.">Abordable, sans compromis.</h3>
              <p data-fr="Profitez d'un référencement local professionnel sans le prix d'une grande agence. On garde nos tarifs accessibles en se concentrant sur le travail qui génère vraiment des résultats." data-en="Get professional local SEO without the expensive agency price tag. We keep our pricing accessible while focusing on the work that actually drives results.">Profitez d'un référencement local professionnel sans le prix d'une grande agence. On garde nos tarifs accessibles en se concentrant sur le travail qui génère vraiment des résultats.</p>
              <Link className="read-more" href="/about">
                <span data-fr="En savoir plus" data-en="Learn more">En savoir plus</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </Link>
            </div>
            <div className="card-col" data-reveal="hidden" style={{ transitionDelay: '120ms' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--color-mirage)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21c-4 -4.5 -7 -8.5 -7 -12a7 7 0 1 1 14 0c0 3.5 -3 7.5 -7 12z" />
                <circle cx="12" cy="9" r="2.6" />
              </svg>
              <h3 data-fr="Local et personnel." data-en="Local and personal.">Local et personnel.</h3>
              <p data-fr="On se spécialise dans les commerces locaux, pas les métriques de vanité. Vous travaillez directement avec un partenaire dédié qui prend le temps de comprendre votre activité, vos clients et votre marché." data-en="We specialize in local businesses, not vanity metrics. You work directly with a dedicated partner who takes the time to understand your business, your customers and your local market.">On se spécialise dans les commerces locaux, pas les métriques de vanité. Vous travaillez directement avec un partenaire dédié qui prend le temps de comprendre votre activité, vos clients et votre marché.</p>
              <Link className="read-more" href="/about">
                <span data-fr="En savoir plus" data-en="Learn more">En savoir plus</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </Link>
            </div>
            <div className="card-col" data-reveal="hidden" style={{ transitionDelay: '240ms' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--color-mirage)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M4 9h16" opacity="0.55" />
                <path d="M9 9v11" opacity="0.55" />
                <path d="M12.5 13.5l2 2l3.5 -4" />
              </svg>
              <h3 data-fr="Des résultats compréhensibles." data-en="Results you can understand.">Des résultats compréhensibles.</h3>
              <p data-fr="Pas de jargon SEO ni de rapports mystérieux. On vous montre ce qu'on fait, pourquoi, et comment votre visibilité progresse." data-en="No confusing SEO jargon or mystery reports. We show you what we're doing, why it matters, and how your visibility is improving.">Pas de jargon SEO ni de rapports mystérieux. On vous montre ce qu'on fait, pourquoi, et comment votre visibilité progresse.</p>
              <Link className="read-more" href="/about" style={{ color: 'var(--color-deep-sea)' }}>
                <span data-fr="En savoir plus" data-en="Learn more">En savoir plus</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l14 0" />
                  <path d="M13 18l6 -6" />
                  <path d="M13 6l6 6" />
                </svg>
              </Link>
            </div>
            <div className="card-col" data-reveal="hidden" style={{ background: 'var(--color-blaze)', borderRight: 'none', transitionDelay: '360ms' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l-4 7h8l-4 7" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <h3 style={{ color: '#fff' }} data-fr="Prêt à commencer ?" data-en="Ready to get started?">Prêt à commencer ?</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)' }} data-fr="Recevez un audit gratuit de votre visibilité locale et découvrez comment nous pouvons vous aider. Réponse sous 48h, sans engagement." data-en="Get a free audit of your local visibility and discover how we can help. Reply within 48h, no commitment.">Recevez un audit gratuit de votre visibilité locale et découvrez comment nous pouvons vous aider. Réponse sous 48h, sans engagement.</p>
              <Link className="card-cta" href="/audit" style={{ marginTop: 'auto', alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '500', fontSize: '13px', padding: 'var(--space-3) var(--space-4)', background: '#fff', color: 'var(--color-mirage)', textDecoration: 'none' }}>
                <span data-fr="Demander un audit" data-en="Request an audit">Demander un audit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* WHAT'S INCLUDED */}
      
      <section id="services" data-reveal="hidden" style={{ position: 'relative', padding: 'var(--space-7) var(--space-6)', backgroundColor: '#074644', backgroundImage: 'linear-gradient(rgba(7,70,68,0.92), rgba(7,70,68,0.92)), url(\'/assets/img/ready-card-bg.jpg\')', backgroundSize: 'cover', backgroundPosition: '5% 80%' }}>
        <div className="container" style={{ padding: '0' }}>
          <div className="section-lead center">
            <span className="eyebrow" data-fr="Ce qui est inclus" data-en="What's included">Ce qui est inclus</span>
            <h2 style={{ color: '#fff', margin: '14px 0 14px' }} data-fr="Tout pour grimper en première page." data-en="Everything to climb to page one.">Tout pour grimper en première page.</h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px' }} data-fr="Un accompagnement complet, pensé pour le référencement local. Rien de superflu." data-en="A complete package, built for local SEO. Nothing superfluous.">Un accompagnement complet, pensé pour le référencement local. Rien de superflu.</p>
          </div>
          <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)' }}>
            <div data-reveal="hidden" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span style={{ width: '76px', height: '76px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-deep-sea)', overflow: 'hidden', boxShadow: '0 12px 26px -14px rgba(0,0,0,0.4), 0 0 0 6px rgba(255,255,255,0.2)' }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10.2" opacity="0.35" strokeDasharray="1.5 3" />
                  <path d="M12 20c-3.6 -3.9 -6 -7.4 -6 -10.2a6 6 0 1 1 12 0c0 2.8 -2.4 6.3 -6 10.2z" />
                  <circle cx="12" cy="9.6" r="2.7" />
                  <circle cx="5" cy="20.5" r="0.6" opacity="0.5" />
                  <circle cx="19" cy="19.5" r="0.45" opacity="0.4" />
                </svg>
              </span>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '15px', color: '#fff', margin: '18px 0 0' }} data-fr="Référencement local" data-en="Local SEO">Référencement local</div>
              <p style={{ fontSize: '11.5px', lineHeight: '1.55', color: 'rgba(255,255,255,0.65)', margin: '8px 0 0' }} data-fr="Apparaissez en tête des recherches « près de chez moi » dans toute la Wallonie." data-en="Show up at the top of “near me” searches across Wallonia.">Apparaissez en tête des recherches « près de chez moi » dans toute la Wallonie.</p>
            </div>
            <div data-reveal="hidden" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transitionDelay: '120ms' }}>
              <span style={{ width: '76px', height: '76px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-deep-sea)', overflow: 'hidden', boxShadow: '0 12px 26px -14px rgba(0,0,0,0.4), 0 0 0 6px rgba(255,255,255,0.2)' }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 21v-14l7 -4l7 4v14" />
                  <path d="M2.5 21h19" />
                  <path d="M9 21v-5.5h6V21" />
                  <rect x="9" y="7" width="2" height="2.4" rx="0.3" opacity="0.7" />
                  <rect x="13" y="7" width="2" height="2.4" rx="0.3" opacity="0.7" />
                  <rect x="9" y="11.3" width="2" height="2.4" rx="0.3" opacity="0.7" />
                  <rect x="13" y="11.3" width="2" height="2.4" rx="0.3" opacity="0.7" />
                  <circle cx="12" cy="18.4" r="0.45" />
                </svg>
              </span>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '15px', color: '#fff', margin: '18px 0 0' }} data-fr="Fiche Google Business" data-en="Google Business Profile">Fiche Google Business</div>
              <p style={{ fontSize: '11.5px', lineHeight: '1.55', color: 'rgba(255,255,255,0.65)', margin: '8px 0 0' }} data-fr="Optimisation complète de votre profil : catégories, horaires, photos, services et posts réguliers." data-en="Full optimization of your profile, categories, hours, photos, services and regular posts.">Optimisation complète de votre profil : catégories, horaires, photos, services et posts réguliers.</p>
            </div>
            <div data-reveal="hidden" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transitionDelay: '240ms' }}>
              <span style={{ width: '76px', height: '76px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-deep-sea)', overflow: 'hidden', boxShadow: '0 12px 26px -14px rgba(0,0,0,0.4), 0 0 0 6px rgba(255,255,255,0.2)' }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10.2" cy="10.2" r="6.6" />
                  <circle cx="10.2" cy="10.2" r="3.4" opacity="0.4" strokeDasharray="1 2" />
                  <path d="M14.9 14.9l5.6 5.6" />
                  <path d="M7.8 10.2h4.8" />
                  <path d="M10.2 7.8v4.8" />
                  <circle cx="10.2" cy="10.2" r="0.5" />
                </svg>
              </span>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '15px', color: '#fff', margin: '18px 0 0' }} data-fr="SEO technique" data-en="Technical SEO">SEO technique</div>
              <p style={{ fontSize: '11.5px', lineHeight: '1.55', color: 'rgba(255,255,255,0.65)', margin: '8px 0 0' }} data-fr="Site rapide, mobile, correctement indexé et structuré autour des mots-clés qui convertissent réellement." data-en="A fast, mobile-friendly site that is properly indexed and structured around the keywords that actually convert.">Site rapide, mobile, correctement indexé et structuré autour des mots-clés qui convertissent réellement.</p>
            </div>
            <div data-reveal="hidden" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transitionDelay: '360ms' }}>
              <span style={{ width: '76px', height: '76px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-deep-sea)', overflow: 'hidden', boxShadow: '0 12px 26px -14px rgba(0,0,0,0.4), 0 0 0 6px rgba(255,255,255,0.2)' }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M3.5 12h17" />
                  <path d="M12 3.5c2.4 2.3 3.8 5.3 3.8 8.5s-1.4 6.2 -3.8 8.5c-2.4 -2.3 -3.8 -5.3 -3.8 -8.5s1.4 -6.2 3.8 -8.5z" />
                  <path d="M5.3 6.5a8.5 8.5 0 0 0 13.4 0" opacity="0.45" />
                  <path d="M5.3 17.5a8.5 8.5 0 0 1 13.4 0" opacity="0.45" />
                  <circle cx="12" cy="12" r="1" />
                </svg>
              </span>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '15px', color: '#fff', margin: '18px 0 0' }} data-fr="Citations & annuaires" data-en="Citations & directories">Citations & annuaires</div>
              <p style={{ fontSize: '11.5px', lineHeight: '1.55', color: 'rgba(255,255,255,0.65)', margin: '8px 0 0' }} data-fr="Cohérence de votre nom, adresse et téléphone (NAP) sur les annuaires belges qui comptent." data-en="Consistent name, address and phone (NAP) across the Belgian directories that matter.">Cohérence de votre nom, adresse et téléphone (NAP) sur les annuaires belges qui comptent.</p>
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
                <p className="step-text" data-fr="On audite votre fiche Google Business et on identifie les mots-clés locaux les plus rentables pour votre activité et votre zone." data-en="We audit your Google Business Profile and find the most profitable local keywords for your business and area.">On audite votre fiche Google Business et on identifie les mots-clés locaux les plus rentables pour votre activité et votre zone.</p>
              </div>
            </div>
            <div className="step" data-reveal="hidden">
              <div className="step-marker">
                <span className="step-num">02</span>
                <span className="step-line" data-line-reveal="hidden" />
              </div>
              <div className="step-body">
                <div className="step-title" data-fr="Stratégie" data-en="Plan">Stratégie</div>
                <p className="step-text" data-fr="On met en place votre configuration initiale : catégories, services et zones définis, citations sur les annuaires et optimisation de base du site, avec une stratégie d'avis clients et QR code." data-en="We set up your initial configuration: categories, services and areas defined, directory citations and basic site optimization, with a review strategy and QR code.">On met en place votre configuration initiale : catégories, services et zones définis, citations sur les annuaires et optimisation de base du site, avec une stratégie d'avis clients et QR code.</p>
              </div>
            </div>
            <div className="step" data-reveal="hidden">
              <div className="step-marker">
                <span className="step-num">03</span>
                <span className="step-line" data-line-reveal="hidden" />
              </div>
              <div className="step-body">
                <div className="step-title" data-fr="Optimisation" data-en="Optimize">Optimisation</div>
                <p className="step-text" data-fr="L'optimisation de base du site est incluse dans la configuration initiale. En option, on prend le relais chaque mois : contenu local, articles, backlinks et optimisation continue." data-en="Basic site optimization is included in the initial setup. Optionally, we take it further every month: local content, articles, backlinks and ongoing optimization.">L'optimisation de base du site est incluse dans la configuration initiale. En option, on prend le relais chaque mois : contenu local, articles, backlinks et optimisation continue.</p>
              </div>
            </div>
            <div className="step" data-reveal="hidden">
              <div className="step-marker">
                <span className="step-num">04</span>
              </div>
              <div className="step-body">
                <div className="step-title" data-fr="Résultats" data-en="Results">Résultats</div>
                <p className="step-text" data-fr="On suit vos positions chaque mois et on vous envoie un rapport clair : appels reçus, demandes de devis et trafic, on ajuste en continu selon ce qui fonctionne." data-en="We track your rankings every month and send you a clear report: calls received, quote requests and traffic, continuously adjusted around what works.">On suit vos positions chaque mois et on vous envoie un rapport clair : appels reçus, demandes de devis et trafic, on ajuste en continu selon ce qui fonctionne.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PRICING PREVIEW */}
      
      <section id="pricing-preview" data-reveal="hidden" style={{ position: 'relative', background: 'var(--color-wild-sand)', padding: 'var(--space-6) var(--space-6)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '0', backgroundImage: 'url(\'/assets/img/pricing-wave-bg.svg\')', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.6', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', left: '0', top: '0', width: '30%', height: '42%', background: 'linear-gradient(135deg, rgba(230,236,232,0.9), rgba(230,236,232,0) 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ textAlign: 'center', padding: '0', position: 'relative', zIndex: '1' }}>
          <span className="eyebrow" data-fr="Tarifs" data-en="Pricing">Tarifs</span>
          <h2 style={{ fontSize: '34px', letterSpacing: '-1.2px', margin: '14px 0 0' }} data-fr="Investissez dans votre visibilité." data-en="Pricing that suits your needs.">Investissez dans votre visibilité.</h2>
          <div style={{ maxWidth: '1080px', margin: 'var(--space-5) auto 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5)', textAlign: 'left' }} className="pricing-grid-preview">
            <div className="preview-card" data-reveal="hidden" style={{ background: 'var(--color-white)', border: '0.5px solid var(--color-border-card)', padding: 'var(--space-5) var(--space-5)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '40px', height: '40px', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 4h-9l-1.5 4.5v2h12v-2z" />
                  <path d="M4 8.5v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1 -1v-10" />
                </svg>
              </div>
              <div className="preview-name" style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '21px', color: 'var(--color-mirage)', marginTop: '18px' }} data-fr="Configuration initiale" data-en="Initial Setup">Configuration initiale</div>
              <p className="preview-tagline" style={{ fontSize: '12.5px', color: 'var(--color-slate)', margin: '6px 0 0' }} data-fr="Paiement unique" data-en="One-time payment">Paiement unique</p>
              <ul className="preview-feat-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3) var(--space-3)', margin: 'var(--space-4) 0 0' }}>
                <li style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--color-ink)' }}>
                  <span style={{ flexShrink: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  <span data-fr="Audit Google Business" data-en="Google Business audit">Audit Google Business</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--color-ink)' }}>
                  <span style={{ flexShrink: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  <span data-fr="Optimisation de fiche" data-en="Profile optimization">Optimisation de fiche</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--color-ink)' }}>
                  <span style={{ flexShrink: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  <span data-fr="Recherche de mots-clés" data-en="Keyword research">Recherche de mots-clés</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--color-ink)' }}>
                  <span style={{ flexShrink: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  <span data-fr="Optimisation de base du site" data-en="Basic site optimization">Optimisation de base du site</span>
                </li>
              </ul>
              <div style={{ height: '1px', background: 'var(--color-border-strong)', margin: '16px 0 14px' }} />
              <div className="preview-price-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '34px', letterSpacing: '-1.3px', color: 'var(--color-mirage)' }}>300€</span>
                <Link href="/audit" className="btn btn-forest btn-sm">
                  <span data-fr="Commencer" data-en="Get started">Commencer</span>
                </Link>
              </div>
            </div>
            <div className="preview-card" data-reveal="hidden" style={{ background: 'var(--color-white)', border: '0.5px solid var(--color-border-card)', padding: 'var(--space-5) var(--space-5)', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 6px 16px -12px rgba(7,70,68,0.2)', transitionDelay: '150ms' }}>
              <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, var(--forest), var(--color-blaze))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l6 -6l4 4l8 -8" />
                  <path d="M14 7l7 0l0 7" />
                </svg>
              </div>
              <span style={{ position: 'absolute', top: '36px', right: '34px', fontWeight: '600', fontSize: '9.5px', color: 'var(--forest)', background: 'var(--color-wild-sand)', padding: 'var(--space-1) var(--space-2)' }} data-fr="Recommandé" data-en="Recommended">Recommandé</span>
              <div className="preview-name" style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '21px', color: 'var(--color-mirage)', marginTop: '18px' }} data-fr="Accompagnement continu" data-en="Ongoing Growth">Accompagnement continu</div>
              <p className="preview-tagline" style={{ fontSize: '12.5px', color: 'var(--color-slate)', margin: '6px 0 0' }} data-fr="Abonnement mensuel" data-en="Monthly subscription">Abonnement mensuel</p>
              <ul className="preview-feat-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3) var(--space-3)', margin: 'var(--space-4) 0 0' }}>
                <li style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--color-ink)' }}>
                  <span style={{ flexShrink: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  <span data-fr="Optimisation continue du site" data-en="Ongoing site optimization">Optimisation continue du site</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--color-ink)' }}>
                  <span style={{ flexShrink: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  <span data-fr="Création de contenu local" data-en="Local content creation">Création de contenu local</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--color-ink)' }}>
                  <span style={{ flexShrink: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  <span data-fr="Rapport de performance mensuel" data-en="Monthly performance report">Rapport de performance mensuel</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'var(--color-ink)' }}>
                  <span style={{ flexShrink: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--forest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </span>
                  <span data-fr="Backlinks & suivi mensuel" data-en="Backlinks & monthly tracking">Backlinks & suivi mensuel</span>
                </li>
              </ul>
              <div style={{ height: '1px', background: 'var(--color-border-strong)', margin: '16px 0 14px' }} />
              <div className="preview-price-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: '700', fontSize: '34px', letterSpacing: '-1.3px', color: 'var(--color-mirage)' }}>
                  485€
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: '400', fontSize: '13px', color: 'var(--color-slate)' }} data-fr="/mois" data-en="/mo">/mois</span>
                </span>
                <Link href="/audit" className="btn btn-forest btn-sm">
                  <span data-fr="Commencer" data-en="Get started">Commencer</span>
                </Link>
              </div>
            </div>
          </div>
          <Link href="/pricing" style={{ marginTop: '36px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '12px', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-mirage)', textDecoration: 'none' }}>
            <span data-fr="Voir les tarifs complets" data-en="See full pricing">Voir les tarifs complets</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </Link>
        </div>
      </section>
      
      {/* FAQ */}

      <FaqAccordionBoundary>
      <section id="faq" className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 'var(--space-6)', alignItems: 'start', padding: '0' }}>
          <div>
            <span className="eyebrow" data-fr="Questions fréquentes" data-en="Frequently asked">Questions fréquentes</span>
            <h2 style={{ fontSize: '32px', letterSpacing: '-1px', margin: '14px 0 0' }} data-fr="Tout ce que vous voulez savoir." data-en="Everything you want to know.">Tout ce que vous voulez savoir.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'var(--color-slate)', margin: '16px 0 0', maxWidth: '300px' }} data-fr="Vous ne trouvez pas votre réponse ? Écrivez-nous, on vous répond sous 48h." data-en="Can't find your answer? Write to us and we'll reply within 48h.">Vous ne trouvez pas votre réponse ? Écrivez-nous, on vous répond sous 48h.</p>
            <Link href="/audit" style={{ marginTop: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--color-blaze)', textDecoration: 'none' }}>
              <span data-fr="Demander un audit" data-en="Request an audit">Demander un audit</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </Link>
          </div>
          <div className="faq-list" style={{ borderTop: '0.5px solid var(--color-border-card)' }}>
            <div className="faq-item" data-reveal="hidden">
              <button className="faq-question">
                <span data-fr="Combien de temps avant de voir des résultats ?" data-en="How long before I see results?">Combien de temps avant de voir des résultats ?</span>
                <span className="faq-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p data-fr="La plupart de nos clients apparaissent en page 1 sous 90 jours. Le référencement local donne souvent ses premiers signaux dès les premières semaines." data-en="Most of our clients appear on page 1 within 90 days. Local SEO often shows its first signals within the first few weeks.">La plupart de nos clients apparaissent en page 1 sous 90 jours. Le référencement local donne souvent ses premiers signaux dès les premières semaines.</p>
              </div>
            </div>
            <div className="faq-item" data-reveal="hidden" style={{ transitionDelay: '80ms' }}>
              <button className="faq-question">
                <span data-fr="Travaillez-vous avec mon secteur d'activité ?" data-en="Do you work with my type of business?">Travaillez-vous avec mon secteur d'activité ?</span>
                <span className="faq-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p data-fr="Nous accompagnons les artisans et indépendants : électriciens, serruriers, dentistes, garagistes, plombiers et bien d'autres partout en Wallonie." data-en="We support tradespeople and independents: electricians, locksmiths, dentists, mechanics, plumbers and many more across Wallonia.">Nous accompagnons les artisans et indépendants : électriciens, serruriers, dentistes, garagistes, plombiers et bien d'autres partout en Wallonie.</p>
              </div>
            </div>
            <div className="faq-item" data-reveal="hidden" style={{ transitionDelay: '160ms' }}>
              <button className="faq-question">
                <span data-fr="Y a-t-il un engagement de durée ?" data-en="Is there a lock-in contract?">Y a-t-il un engagement de durée ?</span>
                <span className="faq-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p data-fr="Non. Nos accompagnements sont sans engagement. Vous restez parce que les résultats sont là, jamais à cause d'un contrat." data-en="No. Our engagements have no commitment. You stay because the results are there, never because of a contract.">Non. Nos accompagnements sont sans engagement. Vous restez parce que les résultats sont là, jamais à cause d'un contrat.</p>
              </div>
            </div>
            <div className="faq-item" data-reveal="hidden" style={{ transitionDelay: '240ms' }}>
              <button className="faq-question">
                <span data-fr="Que comprend l'audit gratuit ?" data-en="What does the free audit include?">Que comprend l'audit gratuit ?</span>
                <span className="faq-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p data-fr="Une analyse de votre fiche Google Business, vos positions sur 10 mots-clés locaux, et un plan d'action concret livré sous 48 heures." data-en="An analysis of your Google Business Profile, your rankings on 10 local keywords, and a concrete action plan delivered within 48 hours.">Une analyse de votre fiche Google Business, vos positions sur 10 mots-clés locaux, et un plan d'action concret livré sous 48 heures.</p>
              </div>
            </div>
            <div className="faq-item" data-reveal="hidden" style={{ transitionDelay: '320ms' }}>
              <button className="faq-question">
                <span data-fr="Intervenez-vous partout en Wallonie ?" data-en="Do you work across all of Wallonia?">Intervenez-vous partout en Wallonie ?</span>
                <span className="faq-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p data-fr="Oui. Nous sommes basés à Liège et Charleroi et accompagnons des commerces dans toute la Wallonie, jusqu'à Namur et au-delà." data-en="Yes. We are based in Liège and Charleroi and support businesses across all of Wallonia, up to Namur and beyond.">Oui. Nous sommes basés à Liège et Charleroi et accompagnons des commerces dans toute la Wallonie, jusqu'à Namur et au-delà.</p>
              </div>
            </div>
            <div className="faq-item" data-reveal="hidden" style={{ transitionDelay: '400ms' }}>
              <button className="faq-question">
                <span data-fr="Comment mesurez-vous les résultats ?" data-en="How do you measure results?">Comment mesurez-vous les résultats ?</span>
                <span className="faq-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p data-fr="Un tableau de bord clair : positions sur Google, appels reçus, trafic et itinéraires. Sans jargon, des chiffres que vous comprenez." data-en="A clear dashboard: Google rankings, calls received, traffic and directions. No jargon, numbers you understand.">Un tableau de bord clair : positions sur Google, appels reçus, trafic et itinéraires. Sans jargon, des chiffres que vous comprenez.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FaqAccordionBoundary>

      {/* CTA BAND */}
      
      <section className="cta-band" data-reveal="hidden" style={{ backgroundImage: 'linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/cta-bg.jpg\')' }}>
        <div className="cta-inner">
          <h2 data-fr="Prêt à atteindre le sommet ?" data-en="Ready to reach the summit?">Prêt à atteindre le sommet ?</h2>
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
