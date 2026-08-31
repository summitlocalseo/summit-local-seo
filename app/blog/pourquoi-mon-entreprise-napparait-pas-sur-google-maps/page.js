import Link from 'next/link';
import ScrollReveal from '../../../components/ScrollReveal';

const SITE_URL = 'https://www.summitseo.be';
const SLUG = 'pourquoi-mon-entreprise-napparait-pas-sur-google-maps';
const META_TITLE = "Pourquoi Mon Entreprise N'apparaît Pas sur Google Maps ?";
const H1_TEXT = "Pourquoi mon entreprise n'apparaît pas sur Google Maps ?";
const DESCRIPTION =
  "9 raisons courantes qui empêchent votre entreprise d'apparaître sur Google Maps, et comment les corriger. Guide pratique par Summit Local SEO.";

export const metadata = {
  title: { absolute: META_TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `/blog/${SLUG}` },
  openGraph: {
    title: META_TITLE,
    description: DESCRIPTION,
    url: `/blog/${SLUG}`,
    type: 'article',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: H1_TEXT,
  description: DESCRIPTION,
  author: { '@type': 'Organization', name: 'Summit Local SEO', url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: 'Summit Local SEO',
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/assets/img/hero-bg.jpg` },
  },
  datePublished: '2026-08-31',
  dateModified: '2026-08-31',
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
  url: `${SITE_URL}/blog/${SLUG}`,
};

export default function BlogPostPage() {
  return (
    <ScrollReveal>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero-dark hero-centered" style={{ backgroundImage: 'linear-gradient(90deg, rgba(7,70,68,0) 0%, rgba(7,70,68,0.55) 100%), linear-gradient(120deg, rgba(18,22,24,0.92) 0%, rgba(24,30,32,0.78) 48%, rgba(30,38,40,0.55) 100%), url(\'/assets/img/pricing-hero-bg.jpg\')', backgroundPosition: 'center 70%' }}>
        <div className="hero-inner">
          <span className="eyebrow" style={{ display: 'block', marginBottom: '14px' }}>Blog</span>
          <h1 style={{ fontSize: '38px', letterSpacing: '-1.4px', lineHeight: '1.1' }}>Pourquoi mon entreprise n'apparaît pas sur Google Maps ?</h1>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container-narrow" style={{ padding: '0' }}>
          <p className="long-copy" style={{ fontSize: '15px', lineHeight: '1.85', color: 'var(--color-ink)', margin: '0 0 32px' }}>
            Vous avez cherché votre propre entreprise sur Google et... rien. Pas de fiche, pas d'épingle sur la carte, ou pire — vous apparaissez, mais loin derrière vos concurrents. C'est l'une des frustrations les plus courantes chez les artisans et indépendants, et bonne nouvelle : dans la grande majorité des cas, le problème est identifiable et corrigeable. Voici les 9 raisons les plus fréquentes, et ce qu'il faut faire pour chacune.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' }}>1. Votre fiche Google Business Profile n'existe pas encore, ou n'a jamais été validée</h2>
          <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' }}>
            C'est la cause numéro un, et la plus simple à corriger. Si vous n'avez jamais créé ou revendiqué votre fiche Google Business Profile, il n'y a tout simplement rien à afficher. Rendez-vous sur google.com/business, créez ou revendiquez votre fiche, et complétez chaque section : horaires, catégorie, photos, description. Si vous n'êtes pas sûr par où commencer, un <Link href="/audit" style={{ color: 'var(--color-blaze)', fontWeight: '600' }}>audit gratuit</Link> permet de faire le point rapidement sur l'état actuel de votre fiche.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' }}>2. Votre fiche n'est pas vérifiée</h2>
          <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' }}>
            Avoir une fiche ne suffit pas — elle doit être vérifiée pour apparaître pleinement dans les résultats. Google propose plusieurs méthodes de vérification (courrier postal, téléphone, email, ou vidéo selon les cas). Si une méthode échoue, vous pouvez généralement en demander une autre depuis votre tableau de bord.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' }}>3. Vos informations sont incohérentes d'un site à l'autre</h2>
          <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' }}>
            Google compare vos informations (nom, adresse, téléphone) sur votre site web, vos réseaux sociaux, et les annuaires en ligne. Une adresse mal orthographiée sur Facebook ou un ancien numéro de téléphone qui traîne sur un annuaire suffisent à semer le doute. Faites une vérification complète : ces trois informations doivent être identiques, mot pour mot, partout où votre entreprise est mentionnée.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' }}>4. Vous avez choisi la mauvaise catégorie d'activité</h2>
          <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' }}>
            Une catégorie trop vague, ou simplement mal choisie, réduit fortement vos chances d'apparaître pour les recherches pertinentes. Prenez le temps de choisir la catégorie principale la plus précise possible, et ajoutez 2 à 3 catégories secondaires en lien avec vos services.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' }}>5. Votre fiche a été suspendue</h2>
          <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' }}>
            Si votre fiche a existé puis a disparu, il est possible que Google l'ait suspendue — souvent suite à un non-respect des règles (fausse adresse, catégories trompeuses) ou à des signalements répétés. Vous pouvez demander une réactivation via le formulaire officiel de Google, en fournissant des justificatifs (extrait BCE, facture, photo de votre local). Un <Link href="/audit" style={{ color: 'var(--color-blaze)', fontWeight: '600' }}>audit gratuit</Link> peut aussi vous aider à comprendre précisément pourquoi votre fiche a été suspendue et comment la réactiver correctement.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' }}>6. Vous avez plusieurs fiches en double</h2>
          <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' }}>
            Des fiches en double (souvent créées par erreur ou lors d'un déménagement) dispersent vos avis et votre visibilité entre plusieurs profils au lieu de les concentrer sur un seul. Recherchez votre entreprise sous plusieurs variantes de nom, et demandez à Google de fusionner les doublons trouvés.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' }}>7. Vous manquez d'avis clients, ou votre note est trop basse</h2>
          <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' }}>
            Le nombre et la qualité de vos avis influencent directement votre classement local. Une fiche avec 2 avis aura toujours plus de mal qu'une fiche avec 40 avis positifs, même si le service est identique. Demandez systématiquement un avis à vos clients satisfaits (un simple lien ou QR code à la fin d'une prestation fonctionne bien), et répondez avec professionnalisme aux avis négatifs plutôt que de les ignorer.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' }}>8. Votre fiche est inactive</h2>
          <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' }}>
            Une fiche qu'on ne touche jamais — pas de nouvelles photos, pas de publications, pas de mises à jour — envoie un signal de désintérêt à Google. Prenez l'habitude d'ajouter régulièrement des photos récentes et de publier de courtes actualités directement sur votre fiche.
          </p>

          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' }}>9. La concurrence locale est simplement plus forte</h2>
          <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' }}>
            Parfois, tout est correctement configuré, mais vos concurrents ont simplement investi plus tôt ou plus sérieusement dans leur référencement local. Dans ce cas, la solution n'est pas technique mais stratégique : mots-clés géolocalisés sur votre site, citations locales sur des annuaires reconnus, et un contenu qui parle spécifiquement de votre ville ou quartier. Si vous êtes basé à <Link href="/liege" style={{ color: 'var(--color-blaze)', fontWeight: '600' }}>Liège</Link>, l'un des marchés les plus disputés de Wallonie, cette dynamique de concurrence locale est encore plus marquée.
          </p>

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '0.5px solid var(--color-border-card)' }}>
            <p className="long-copy" style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0 0 24px' }}>
              Si vous avez vérifié ces neuf points et que votre entreprise reste invisible, ou si vous n'êtes simplement pas sûr par où commencer, un audit gratuit permet d'identifier en quelques minutes exactement ce qui bloque votre visibilité. Demandez votre audit gratuit dès maintenant.
            </p>
            <Link href="/audit" className="btn btn-primary">
              <span>Demander mon audit gratuit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
