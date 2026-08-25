import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';

export const metadata = {
  title: { absolute: "À Propos de Summit — Agence SEO Local en Wallonie" },
  description:
    "Découvrez l'histoire de Summit et de son fondateur, et pourquoi nous aidons les artisans et indépendants de Wallonie à devenir visibles sur Google.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: "À Propos de Summit — Agence SEO Local en Wallonie",
    description:
      "Découvrez l'histoire de Summit et de son fondateur, et pourquoi nous aidons les artisans et indépendants de Wallonie à devenir visibles sur Google.",
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <ScrollReveal>
      {/* HERO */}

      <section className="hero-dark hero-centered" style={{ backgroundImage: 'linear-gradient(90deg, rgba(7,70,68,0) 0%, rgba(7,70,68,0.55) 100%), linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/about-hero-bg.jpg\')', backgroundPosition: 'center 75%' }}>
        <div className="hero-inner">
          <h1 style={{ fontSize: '42px', letterSpacing: '-1.6px', lineHeight: '1.06' }} data-fr="À propos" data-en="About">À propos</h1>
        </div>
      </section>

      {/* FOUNDER */}

      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-6) var(--space-6) var(--space-7)' }}>
        <div className="container founder-grid" style={{ maxWidth: '1080px', display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 'var(--space-6)', alignItems: 'stretch', padding: '0' }}>
          <div className="founder-photo-slot">
            <Image src="/assets/img/founder-photo.png" alt="Harold Henkart, fondateur de Summit Local SEO" className="photo-frame" fill sizes="(max-width: 860px) 100vw, 40vw" style={{ border: 'none' }} priority />
            <div className="founder-caption">
              <div className="name" data-fr="Harold Henkart" data-en="Harold Henkart">Harold Henkart</div>
              <div className="role" data-fr="Fondateur · Summit Local SEO" data-en="Founder · Summit Local SEO">Fondateur · Summit Local SEO</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="eyebrow" data-fr="Le fondateur" data-en="The founder">Le fondateur</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1px', lineHeight: '1.12', margin: '14px 0 20px' }} data-fr="J'ai toujours voulu comprendre comment une entreprise se fait remarquer." data-en="I've always wanted to understand how a business gets noticed.">J'ai toujours voulu comprendre comment une entreprise se fait remarquer.</h2>
            <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '520px' }} data-fr="J'ai toujours voulu comprendre comment une entreprise se fait remarquer. À 26 ans, mon parcours m'a déjà amené bien au-delà de la Belgique. J'ai vécu et travaillé en Australie et au Canada, avec des expériences dans plusieurs secteurs, dont le jeu vidéo et le digital." data-en="I'm 26, and my path has already taken me well beyond Belgium. I've lived and worked in Australia and Canada, with experience across several industries, including gaming and digital.">J'ai toujours voulu comprendre comment une entreprise se fait remarquer. À 26 ans, mon parcours m'a déjà amené bien au-delà de la Belgique. J'ai vécu et travaillé en Australie et au Canada, avec des expériences dans plusieurs secteurs, dont le jeu vidéo et le digital.</p>
            <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '520px', marginTop: '16px' }} data-fr="C'est au Canada que j'ai décidé de me former au référencement et au marketing digital. J'y ai compris une chose simple : une entreprise locale peut proposer un excellent service et pourtant perdre des clients chaque semaine si elle reste invisible au moment où ils la recherchent." data-en="It was in Canada that I decided to train in SEO and digital marketing. I understood something simple there: a local business can offer an excellent service and still lose customers every week if it stays invisible the moment people search for it.">C'est au Canada que j'ai décidé de me former au référencement et au marketing digital. J'y ai compris une chose simple : une entreprise locale peut proposer un excellent service et pourtant perdre des clients chaque semaine si elle reste invisible au moment où ils la recherchent.</p>
            <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', maxWidth: '520px', marginTop: '16px' }} data-fr="De retour en Belgique, j'ai choisi de mettre ces compétences au service des indépendants, artisans et PME. Mon travail consiste à améliorer leur présence sur Google et Google Maps afin de les positionner face aux personnes qui recherchent déjà leurs services. Pas de stratégie inutilement complexe. Je privilégie des actions concrètes, un suivi clair et des résultats mesurables." data-en="Back in Belgium, I chose to put these skills to work for independents, tradespeople and small businesses. My job is to improve their presence on Google and Google Maps so they show up in front of the people already searching for their services. No unnecessarily complex strategy. I focus on concrete actions, clear tracking and measurable results.">De retour en Belgique, j'ai choisi de mettre ces compétences au service des indépendants, artisans et PME. Mon travail consiste à améliorer leur présence sur Google et Google Maps afin de les positionner face aux personnes qui recherchent déjà leurs services. Pas de stratégie inutilement complexe. Je privilégie des actions concrètes, un suivi clair et des résultats mesurables.</p>
            <div className="founder-quote" style={{ marginTop: 'var(--space-5)', paddingLeft: 'var(--space-4)', borderLeft: '2px solid var(--color-blaze)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: '500', fontSize: '18px', letterSpacing: '-0.3px', lineHeight: '1.4', color: 'var(--color-mirage)', margin: '0' }} data-fr="« Ton prochain client te cherche déjà. Mon travail, c'est de faire en sorte qu'il te trouve. »" data-en="“Your next customer is already looking for you. My job is to make sure they find you.”">« Ton prochain client te cherche déjà. Mon travail, c'est de faire en sorte qu'il te trouve. »</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}

      <section className="section-sand" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container" style={{ padding: '0' }}>
          <span className="eyebrow" data-fr="Notre approche" data-en="Our approach">Notre approche</span>
          <h2 style={{ fontSize: '40px', letterSpacing: '-1.6px', lineHeight: '1.05', margin: '12px 0 0' }} data-fr="Ce qui nous guide." data-en="What guides us.">Ce qui nous guide.</h2>
          <div className="approach-wrap" style={{ position: 'relative', marginTop: 'var(--space-6)' }}>
            <div className="approach-grid" data-reveal-left="hidden" style={{ width: '72%', background: 'var(--color-white)', border: '0.5px solid var(--color-border-card)', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', position: 'relative', zIndex: '2' }}>
              <div style={{ padding: 'var(--space-5) var(--space-4)' }}>
                <div style={{ color: 'var(--color-deep-sea)', marginBottom: '20px' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21a9 9 0 0 0 0 -18a9 9 0 0 0 0 18" />
                    <path d="M12 12l0 .01" />
                    <path d="M12 7a5 5 0 0 1 0 10" />
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: '500', fontSize: '18px', letterSpacing: '-0.3px', color: 'var(--color-mirage)', marginBottom: '10px' }} data-fr="Notre mission" data-en="Our mission">Notre mission</div>
                <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'var(--color-slate)', margin: '0' }} data-fr="Donner aux artisans les mêmes armes que les grandes enseignes pour être trouvés sur Google, sans jargon, sans budget démesuré." data-en="Give tradespeople the same tools as big brands to be found on Google, no jargon, no oversized budget.">Donner aux artisans les mêmes armes que les grandes enseignes pour être trouvés sur Google, sans jargon, sans budget démesuré.</p>
              </div>
              <div style={{ padding: 'var(--space-5) var(--space-4)', borderLeft: '0.5px solid var(--color-border-card)' }}>
                <div style={{ color: 'var(--color-deep-sea)', marginBottom: '20px' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: '500', fontSize: '18px', letterSpacing: '-0.3px', color: 'var(--color-mirage)', marginBottom: '10px' }} data-fr="Notre vision" data-en="Our vision">Notre vision</div>
                <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'var(--color-slate)', margin: '0' }} data-fr="Un web local où chaque bon professionnel est visible par ceux qui le cherchent, au bon moment, dans sa région." data-en="A local web where every good professional is visible to those searching, at the right moment, in their region.">Un web local où chaque bon professionnel est visible par ceux qui le cherchent, au bon moment, dans sa région.</p>
              </div>
              <div style={{ padding: 'var(--space-5) var(--space-4)', borderLeft: '0.5px solid var(--color-border-card)' }}>
                <div style={{ color: 'var(--color-deep-sea)', marginBottom: '20px' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2l4 -4" />
                    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
                  </svg>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: '500', fontSize: '18px', letterSpacing: '-0.3px', color: 'var(--color-mirage)', marginBottom: '10px' }} data-fr="Notre engagement" data-en="Our commitment">Notre engagement</div>
                <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'var(--color-slate)', margin: '0' }} data-fr="Des résultats mesurables chaque mois, sans engagement de durée. Vous restez pour la performance, jamais pour un contrat." data-en="Measurable results every month, no lock-in contract. You stay for the performance, never for a contract.">Des résultats mesurables chaque mois, sans engagement de durée. Vous restez pour la performance, jamais pour un contrat.</p>
              </div>
            </div>
            <div className="approach-photo" style={{ position: 'absolute', top: '-28px', right: '0', width: '36%', height: 'calc(100% + 56px)', zIndex: '1', clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)', background: 'var(--forest-chip)' }}>
              <Image src="/assets/img/about-approche-photo.webp" alt="Équipe Summit Local SEO au travail" className="photo-frame" fill sizes="(max-width: 860px) 100vw, 36vw" style={{ border: 'none' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}

      <section className="cta-band" data-reveal="hidden" style={{ backgroundImage: 'linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/cta-bg.jpg\')' }}>
        <div className="cta-inner">
          <h2 style={{ fontSize: '34px', letterSpacing: '-1.2px', lineHeight: '1.12' }} data-fr="Envie de discuter de votre visibilité ?" data-en="Want to talk about your visibility?">Envie de discuter de votre visibilité ?</h2>
          <p data-fr="Recevez un audit gratuit de votre présence locale. Réponse sous 48h, sans engagement." data-en="Get a free audit of your local presence. Reply within 48h, no commitment.">Recevez un audit gratuit de votre présence locale. Réponse sous 48h, sans engagement.</p>
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
