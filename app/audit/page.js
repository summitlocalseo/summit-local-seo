import ScrollReveal from '../../components/ScrollReveal';
import AuditForm from '../../components/AuditForm';
import { FaqAccordionBoundary } from '../../components/FaqAccordion';

export const metadata = {
  title: { absolute: 'Audit Gratuit de Visibilité Locale — Summit SEO' },
  description:
    "Recevez gratuitement votre audit de visibilité locale sur Google. Analyse de votre fiche Google Business et plan d'action sous 48h, sans engagement.",
  alternates: { canonical: '/audit' },
  openGraph: {
    title: 'Audit Gratuit de Visibilité Locale — Summit SEO',
    description:
      "Recevez gratuitement votre audit de visibilité locale sur Google. Analyse de votre fiche Google Business et plan d'action sous 48h, sans engagement.",
    url: '/audit',
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Pourquoi mon entreprise n'apparaît pas sur Google Maps ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Plusieurs raisons possibles : votre fiche Google Business Profile n'est pas complètement optimisée, elle manque de mots-clés locaux, vous n'avez pas assez d'avis clients, ou vos informations (adresse, horaires, catégorie) sont incomplètes ou incohérentes. Un audit gratuit permet d'identifier exactement ce qui bloque votre visibilité.",
      },
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour voir des résultats en référencement local ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les premiers changements (fiche Google Business optimisée) peuvent avoir un impact en quelques semaines. Pour un classement stable et durable dans les résultats de recherche, comptez généralement entre 2 et 4 mois, selon la concurrence dans votre secteur et votre ville.',
      },
    },
    {
      '@type': 'Question',
      name: 'Le référencement local, est-ce que ça marche pour les petites entreprises et indépendants ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui — c'est même là que le référencement local a le plus d'impact, car vous n'êtes pas en concurrence avec des entreprises nationales, mais avec d'autres acteurs de votre région. Une fiche bien optimisée et quelques citations locales suffisent souvent à faire une vraie différence.",
      },
    },
  ],
};

export default function AuditPage() {
  return (
    <ScrollReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* DARK HERO */}

      <section className="hero-dark" style={{ paddingBottom: '130px', backgroundImage: 'linear-gradient(90deg, rgba(7,70,68,0) 0%, rgba(7,70,68,0.55) 100%), linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/audit-hero.jpg\')' }}>
        <div className="hero-inner">
          <span className="eyebrow" data-fr="Audit gratuit" data-en="Free audit">Audit gratuit</span>
          <h1 data-fr="Recevez votre audit de visibilité locale." data-en="Get your local visibility audit.">Recevez votre audit de visibilité locale.</h1>
          <p className="hero-sub" data-fr="Remplissez le formulaire. Nous analysons votre présence sur Google et vous envoyons un plan d'action concret sous 48 heures ouvrables, sans engagement." data-en="Fill in the form. We analyze your presence on Google and send you a concrete action plan within 48 business hours, no commitment.">Remplissez le formulaire. Nous analysons votre présence sur Google et vous envoyons un plan d'action concret sous 48 heures ouvrables, sans engagement.</p>
        </div>
      </section>

      {/* STEPS + FORM */}

      <section className="section-off" data-reveal="hidden" style={{ padding: '0 var(--space-6) var(--space-7)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 'var(--space-6)', alignItems: 'start', padding: '0' }}>
          {/* form card overlapping the hero — visually second on desktop (original design), first on phones */}
          <div className="audit-form-col" style={{ marginTop: '-94px', position: 'relative', zIndex: '3' }}>
            <div className="audit-form-card" data-form-wrapper>
              <div className="audit-form-header">
                <span className="icon-badge">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
                  </svg>
                </span>
                <p data-fr="Décrivez votre activité en quelques mots, nous préparons votre audit sous 48h." data-en="Tell us a few words about your business, we'll prepare your audit within 48h.">Décrivez votre activité en quelques mots, nous préparons votre audit sous 48h.</p>
              </div>
              <div className="audit-form-body">
                <AuditForm />
              </div>
            </div>
          </div>
          {/* next steps — visually first on desktop (original design), second on phones */}
          <div className="audit-steps-col" style={{ paddingTop: '64px' }}>
            <span className="eyebrow" data-fr="Prochaines étapes" data-en="Next steps">Prochaines étapes</span>
            <h2 style={{ fontSize: '30px', letterSpacing: '-1.1px', lineHeight: '1.1', margin: '12px 0 0' }} data-fr="Et ensuite ?" data-en="What happens next?">Et ensuite ?</h2>
            <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-slate)', margin: '14px 0 0', maxWidth: '300px' }} data-fr="Vous êtes à un pas d'une meilleure visibilité locale." data-en="You're one step closer to better local visibility.">Vous êtes à un pas d'une meilleure visibilité locale.</p>
            <div className="steps" style={{ marginTop: '36px' }}>
              <div className="step" data-reveal="hidden">
                <div className="step-marker">
                  <span className="step-num">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M17 21H7a2 2 0 0 1 -2 -2V5a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                      <path d="M9 13h6M9 17h6M9 9h1" />
                    </svg>
                  </span>
                  <span className="step-line" data-line-reveal="hidden" />
                </div>
                <div className="step-body">
                  <div className="step-title" data-fr="Nous préparons votre audit" data-en="We prepare your audit">Nous préparons votre audit</div>
                  <p className="step-text" data-fr="Analyse de votre fiche Google, de vos positions et de vos concurrents locaux, livrée sous 48h." data-en="Analysis of your Google profile, your rankings and your local competitors, delivered within 48h.">Analyse de votre fiche Google, de vos positions et de vos concurrents locaux, livrée sous 48h.</p>
                </div>
              </div>
              <div className="step" data-reveal="hidden">
                <div className="step-marker">
                  <span className="step-num">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16v11H8l-4 4z" />
                      <path d="M8 9h8M8 12h5" />
                    </svg>
                  </span>
                  <span className="step-line" data-line-reveal="hidden" />
                </div>
                <div className="step-body">
                  <div className="step-title" data-fr="Nous en discutons ensemble" data-en="We discuss it together">Nous en discutons ensemble</div>
                  <p className="step-text" data-fr="Un échange clair, par téléphone ou visio, pour présenter le plan d'action. Sans jargon." data-en="A clear conversation, by phone or video, to walk you through the action plan. No jargon.">Un échange clair, par téléphone ou visio, pour présenter le plan d'action. Sans jargon.</p>
                </div>
              </div>
              <div className="step" data-reveal="hidden">
                <div className="step-marker">
                  <span className="step-num">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 20V10M10 20V4M16 20v-7M4 10l6 -6l4 3l6 -5" />
                      <path d="M16 2h4v4" />
                    </svg>
                  </span>
                </div>
                <div className="step-body">
                  <div className="step-title" data-fr="On lance le référencement" data-en="We start the SEO">On lance le référencement</div>
                  <p className="step-text" data-fr="Dès validation, on optimise votre visibilité et vous suivez les résultats chaque mois." data-en="Once approved, we optimize your visibility and you track the results every month.">Dès validation, on optimise votre visibilité et vous suivez les résultats chaque mois.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <FaqAccordionBoundary>
      <section className="section-white" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.82fr 1.18fr', gap: 'var(--space-6)', alignItems: 'start', padding: '0' }}>
          <div>
            <span className="eyebrow" data-fr="Questions fréquentes" data-en="Frequently asked">Questions fréquentes</span>
            <h2 style={{ fontSize: '32px', letterSpacing: '-1px', margin: '14px 0 0' }} data-fr="Vos questions sur l'audit et le référencement local." data-en="Your questions about the audit and local SEO.">Vos questions sur l'audit et le référencement local.</h2>
            <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'var(--color-slate)', margin: '16px 0 0', maxWidth: '300px' }} data-fr="Vous ne trouvez pas votre réponse ? Écrivez-nous, on vous répond sous 48h." data-en="Can't find your answer? Write to us and we'll reply within 48h.">Vous ne trouvez pas votre réponse ? Écrivez-nous, on vous répond sous 48h.</p>
          </div>
          <div className="faq-list" style={{ borderTop: '0.5px solid var(--color-border-card)' }}>
            <div className="faq-item" data-reveal="hidden">
              <button className="faq-question">
                <span data-fr="Pourquoi mon entreprise n'apparaît pas sur Google Maps ?" data-en="Why doesn't my business show up on Google Maps?">Pourquoi mon entreprise n'apparaît pas sur Google Maps ?</span>
                <span className="faq-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p data-fr="Plusieurs raisons possibles : votre fiche Google Business Profile n'est pas complètement optimisée, elle manque de mots-clés locaux, vous n'avez pas assez d'avis clients, ou vos informations (adresse, horaires, catégorie) sont incomplètes ou incohérentes. Un audit gratuit permet d'identifier exactement ce qui bloque votre visibilité." data-en="There are several possible reasons: your Google Business Profile isn't fully optimized, it's missing local keywords, you don't have enough customer reviews, or your information (address, hours, category) is incomplete or inconsistent. A free audit identifies exactly what's blocking your visibility.">Plusieurs raisons possibles : votre fiche Google Business Profile n'est pas complètement optimisée, elle manque de mots-clés locaux, vous n'avez pas assez d'avis clients, ou vos informations (adresse, horaires, catégorie) sont incomplètes ou incohérentes. Un audit gratuit permet d'identifier exactement ce qui bloque votre visibilité.</p>
              </div>
            </div>
            <div className="faq-item" data-reveal="hidden" style={{ transitionDelay: '80ms' }}>
              <button className="faq-question">
                <span data-fr="Combien de temps faut-il pour voir des résultats en référencement local ?" data-en="How long does it take to see results from local SEO?">Combien de temps faut-il pour voir des résultats en référencement local ?</span>
                <span className="faq-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p data-fr="Les premiers changements (fiche Google Business optimisée) peuvent avoir un impact en quelques semaines. Pour un classement stable et durable dans les résultats de recherche, comptez généralement entre 2 et 4 mois, selon la concurrence dans votre secteur et votre ville." data-en="The first changes (an optimized Google Business Profile) can have an impact within a few weeks. For a stable, lasting ranking in search results, expect generally 2 to 4 months, depending on competition in your industry and city.">Les premiers changements (fiche Google Business optimisée) peuvent avoir un impact en quelques semaines. Pour un classement stable et durable dans les résultats de recherche, comptez généralement entre 2 et 4 mois, selon la concurrence dans votre secteur et votre ville.</p>
              </div>
            </div>
            <div className="faq-item" data-reveal="hidden" style={{ transitionDelay: '160ms' }}>
              <button className="faq-question">
                <span data-fr="Le référencement local, est-ce que ça marche pour les petites entreprises et indépendants ?" data-en="Does local SEO work for small businesses and independents?">Le référencement local, est-ce que ça marche pour les petites entreprises et indépendants ?</span>
                <span className="faq-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6l6 -6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p data-fr="Oui — c'est même là que le référencement local a le plus d'impact, car vous n'êtes pas en concurrence avec des entreprises nationales, mais avec d'autres acteurs de votre région. Une fiche bien optimisée et quelques citations locales suffisent souvent à faire une vraie différence." data-en="Yes — that's actually where local SEO has the most impact, since you're not competing with national companies, but with other players in your region. A well-optimized profile and a few local citations are often enough to make a real difference.">Oui — c'est même là que le référencement local a le plus d'impact, car vous n'êtes pas en concurrence avec des entreprises nationales, mais avec d'autres acteurs de votre région. Une fiche bien optimisée et quelques citations locales suffisent souvent à faire une vraie différence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FaqAccordionBoundary>
    </ScrollReveal>
  );
}
