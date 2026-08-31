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

const h2Style = { fontFamily: 'var(--font-display)', fontWeight: '600', fontSize: '22px', letterSpacing: '-0.5px', lineHeight: '1.25', color: 'var(--color-mirage)', margin: '40px 0 12px' };
const pStyle = { fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0' };
const linkStyle = { color: 'var(--color-blaze)', fontWeight: '600' };

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
          <span className="eyebrow" style={{ display: 'block', marginBottom: '14px' }} data-fr="Blog" data-en="Blog">Blog</span>
          <h1 style={{ fontSize: '38px', letterSpacing: '-1.4px', lineHeight: '1.1' }} data-fr={H1_TEXT} data-en="Why doesn't my business show up on Google Maps?">{H1_TEXT}</h1>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="section-off" data-reveal="hidden" style={{ padding: 'var(--space-7) var(--space-6)' }}>
        <div className="container-narrow" style={{ padding: '0' }}>
          <p
            className="long-copy"
            style={{ fontSize: '15px', lineHeight: '1.85', color: 'var(--color-ink)', margin: '0 0 32px' }}
            data-fr="Vous avez cherché votre propre entreprise sur Google et... rien. Pas de fiche, pas d'épingle sur la carte, ou pire — vous apparaissez, mais loin derrière vos concurrents. C'est l'une des frustrations les plus courantes chez les artisans et indépendants, et bonne nouvelle : dans la grande majorité des cas, le problème est identifiable et corrigeable. Voici les 9 raisons les plus fréquentes, et ce qu'il faut faire pour chacune."
            data-en="You searched for your own business on Google and... nothing. No listing, no pin on the map, or worse — you show up, but far behind your competitors. This is one of the most common frustrations among tradespeople and independents, and the good news is: in the vast majority of cases, the problem is identifiable and fixable. Here are the 9 most common reasons, and what to do about each one."
          >
            Vous avez cherché votre propre entreprise sur Google et... rien. Pas de fiche, pas d'épingle sur la carte, ou pire — vous apparaissez, mais loin derrière vos concurrents. C'est l'une des frustrations les plus courantes chez les artisans et indépendants, et bonne nouvelle : dans la grande majorité des cas, le problème est identifiable et corrigeable. Voici les 9 raisons les plus fréquentes, et ce qu'il faut faire pour chacune.
          </p>

          <h2 style={h2Style} data-fr="1. Votre fiche Google Business Profile n'existe pas encore, ou n'a jamais été validée" data-en="1. Your Google Business Profile doesn't exist yet, or was never claimed">1. Votre fiche Google Business Profile n'existe pas encore, ou n'a jamais été validée</h2>
          <p className="long-copy" style={pStyle}>
            <span data-fr="C'est la cause numéro un, et la plus simple à corriger. Si vous n'avez jamais créé ou revendiqué votre fiche Google Business Profile, il n'y a tout simplement rien à afficher. Rendez-vous sur google.com/business, créez ou revendiquez votre fiche, et complétez chaque section : horaires, catégorie, photos, description. Si vous n'êtes pas sûr par où commencer, un " data-en="This is the number one cause, and the easiest to fix. If you've never created or claimed your Google Business Profile, there's simply nothing to display. Go to google.com/business, create or claim your profile, and fill out every section: hours, category, photos, description. If you're not sure where to start, a ">C'est la cause numéro un, et la plus simple à corriger. Si vous n'avez jamais créé ou revendiqué votre fiche Google Business Profile, il n'y a tout simplement rien à afficher. Rendez-vous sur google.com/business, créez ou revendiquez votre fiche, et complétez chaque section : horaires, catégorie, photos, description. Si vous n'êtes pas sûr par où commencer, un </span>
            <Link href="/audit" style={linkStyle}><span data-fr="audit gratuit" data-en="free audit">audit gratuit</span></Link>
            <span data-fr=" permet de faire le point rapidement sur l'état actuel de votre fiche." data-en=" lets you quickly assess the current state of your profile."> permet de faire le point rapidement sur l'état actuel de votre fiche.</span>
          </p>

          <h2 style={h2Style} data-fr="2. Votre fiche n'est pas vérifiée" data-en="2. Your profile isn't verified">2. Votre fiche n'est pas vérifiée</h2>
          <p
            className="long-copy"
            style={pStyle}
            data-fr="Avoir une fiche ne suffit pas — elle doit être vérifiée pour apparaître pleinement dans les résultats. Google propose plusieurs méthodes de vérification (courrier postal, téléphone, email, ou vidéo selon les cas). Si une méthode échoue, vous pouvez généralement en demander une autre depuis votre tableau de bord."
            data-en="Having a profile isn't enough — it needs to be verified to appear fully in results. Google offers several verification methods (postcard, phone, email, or video depending on the case). If one method fails, you can generally request another from your dashboard."
          >
            Avoir une fiche ne suffit pas — elle doit être vérifiée pour apparaître pleinement dans les résultats. Google propose plusieurs méthodes de vérification (courrier postal, téléphone, email, ou vidéo selon les cas). Si une méthode échoue, vous pouvez généralement en demander une autre depuis votre tableau de bord.
          </p>

          <h2 style={h2Style} data-fr="3. Vos informations sont incohérentes d'un site à l'autre" data-en="3. Your information is inconsistent across different sites">3. Vos informations sont incohérentes d'un site à l'autre</h2>
          <p
            className="long-copy"
            style={pStyle}
            data-fr="Google compare vos informations (nom, adresse, téléphone) sur votre site web, vos réseaux sociaux, et les annuaires en ligne. Une adresse mal orthographiée sur Facebook ou un ancien numéro de téléphone qui traîne sur un annuaire suffisent à semer le doute. Faites une vérification complète : ces trois informations doivent être identiques, mot pour mot, partout où votre entreprise est mentionnée."
            data-en="Google compares your information (name, address, phone number) across your website, social media, and online directories. A misspelled address on Facebook or an old phone number lingering on a directory is enough to raise doubt. Do a full check: these three pieces of information must be identical, word for word, everywhere your business is mentioned."
          >
            Google compare vos informations (nom, adresse, téléphone) sur votre site web, vos réseaux sociaux, et les annuaires en ligne. Une adresse mal orthographiée sur Facebook ou un ancien numéro de téléphone qui traîne sur un annuaire suffisent à semer le doute. Faites une vérification complète : ces trois informations doivent être identiques, mot pour mot, partout où votre entreprise est mentionnée.
          </p>

          <h2 style={h2Style} data-fr="4. Vous avez choisi la mauvaise catégorie d'activité" data-en="4. You've chosen the wrong business category">4. Vous avez choisi la mauvaise catégorie d'activité</h2>
          <p
            className="long-copy"
            style={pStyle}
            data-fr="Une catégorie trop vague, ou simplement mal choisie, réduit fortement vos chances d'apparaître pour les recherches pertinentes. Prenez le temps de choisir la catégorie principale la plus précise possible, et ajoutez 2 à 3 catégories secondaires en lien avec vos services."
            data-en="A category that's too vague, or simply the wrong one, significantly reduces your chances of appearing in relevant searches. Take the time to choose the most precise primary category possible, and add 2 to 3 secondary categories related to your services."
          >
            Une catégorie trop vague, ou simplement mal choisie, réduit fortement vos chances d'apparaître pour les recherches pertinentes. Prenez le temps de choisir la catégorie principale la plus précise possible, et ajoutez 2 à 3 catégories secondaires en lien avec vos services.
          </p>

          <h2 style={h2Style} data-fr="5. Votre fiche a été suspendue" data-en="5. Your profile has been suspended">5. Votre fiche a été suspendue</h2>
          <p className="long-copy" style={pStyle}>
            <span data-fr="Si votre fiche a existé puis a disparu, il est possible que Google l'ait suspendue — souvent suite à un non-respect des règles (fausse adresse, catégories trompeuses) ou à des signalements répétés. Vous pouvez demander une réactivation via le formulaire officiel de Google, en fournissant des justificatifs (extrait BCE, facture, photo de votre local). Un " data-en="If your profile existed and then disappeared, Google may have suspended it — often due to a policy violation (fake address, misleading categories) or repeated reports. You can request reinstatement through Google's official form, providing supporting documents (business registration, invoice, photo of your premises). A ">Si votre fiche a existé puis a disparu, il est possible que Google l'ait suspendue — souvent suite à un non-respect des règles (fausse adresse, catégories trompeuses) ou à des signalements répétés. Vous pouvez demander une réactivation via le formulaire officiel de Google, en fournissant des justificatifs (extrait BCE, facture, photo de votre local). Un </span>
            <Link href="/audit" style={linkStyle}><span data-fr="audit gratuit" data-en="free audit">audit gratuit</span></Link>
            <span data-fr=" peut aussi vous aider à comprendre précisément pourquoi votre fiche a été suspendue et comment la réactiver correctement." data-en=" can also help you understand exactly why your profile was suspended and how to reinstate it correctly."> peut aussi vous aider à comprendre précisément pourquoi votre fiche a été suspendue et comment la réactiver correctement.</span>
          </p>

          <h2 style={h2Style} data-fr="6. Vous avez plusieurs fiches en double" data-en="6. You have multiple duplicate listings">6. Vous avez plusieurs fiches en double</h2>
          <p
            className="long-copy"
            style={pStyle}
            data-fr="Des fiches en double (souvent créées par erreur ou lors d'un déménagement) dispersent vos avis et votre visibilité entre plusieurs profils au lieu de les concentrer sur un seul. Recherchez votre entreprise sous plusieurs variantes de nom, et demandez à Google de fusionner les doublons trouvés."
            data-en="Duplicate listings (often created by mistake or after a move) split your reviews and visibility across several profiles instead of concentrating them on one. Search for your business under several name variations, and ask Google to merge any duplicates you find."
          >
            Des fiches en double (souvent créées par erreur ou lors d'un déménagement) dispersent vos avis et votre visibilité entre plusieurs profils au lieu de les concentrer sur un seul. Recherchez votre entreprise sous plusieurs variantes de nom, et demandez à Google de fusionner les doublons trouvés.
          </p>

          <h2 style={h2Style} data-fr="7. Vous manquez d'avis clients, ou votre note est trop basse" data-en="7. You don't have enough reviews, or your rating is too low">7. Vous manquez d'avis clients, ou votre note est trop basse</h2>
          <p
            className="long-copy"
            style={pStyle}
            data-fr="Le nombre et la qualité de vos avis influencent directement votre classement local. Une fiche avec 2 avis aura toujours plus de mal qu'une fiche avec 40 avis positifs, même si le service est identique. Demandez systématiquement un avis à vos clients satisfaits (un simple lien ou QR code à la fin d'une prestation fonctionne bien), et répondez avec professionnalisme aux avis négatifs plutôt que de les ignorer."
            data-en="The number and quality of your reviews directly influence your local ranking. A profile with 2 reviews will always struggle more than one with 40 positive reviews, even if the service is identical. Systematically ask satisfied customers for a review (a simple link or QR code at the end of a job works well), and respond professionally to negative reviews instead of ignoring them."
          >
            Le nombre et la qualité de vos avis influencent directement votre classement local. Une fiche avec 2 avis aura toujours plus de mal qu'une fiche avec 40 avis positifs, même si le service est identique. Demandez systématiquement un avis à vos clients satisfaits (un simple lien ou QR code à la fin d'une prestation fonctionne bien), et répondez avec professionnalisme aux avis négatifs plutôt que de les ignorer.
          </p>

          <h2 style={h2Style} data-fr="8. Votre fiche est inactive" data-en="8. Your profile is inactive">8. Votre fiche est inactive</h2>
          <p
            className="long-copy"
            style={pStyle}
            data-fr="Une fiche qu'on ne touche jamais — pas de nouvelles photos, pas de publications, pas de mises à jour — envoie un signal de désintérêt à Google. Prenez l'habitude d'ajouter régulièrement des photos récentes et de publier de courtes actualités directement sur votre fiche."
            data-en="A profile that's never touched — no new photos, no posts, no updates — signals disinterest to Google. Get into the habit of regularly adding recent photos and publishing short updates directly on your profile."
          >
            Une fiche qu'on ne touche jamais — pas de nouvelles photos, pas de publications, pas de mises à jour — envoie un signal de désintérêt à Google. Prenez l'habitude d'ajouter régulièrement des photos récentes et de publier de courtes actualités directement sur votre fiche.
          </p>

          <h2 style={h2Style} data-fr="9. La concurrence locale est simplement plus forte" data-en="9. Local competition is simply stronger">9. La concurrence locale est simplement plus forte</h2>
          <p className="long-copy" style={pStyle}>
            <span data-fr="Parfois, tout est correctement configuré, mais vos concurrents ont simplement investi plus tôt ou plus sérieusement dans leur référencement local. Dans ce cas, la solution n'est pas technique mais stratégique : mots-clés géolocalisés sur votre site, citations locales sur des annuaires reconnus, et un contenu qui parle spécifiquement de votre ville ou quartier. Si vous êtes basé à " data-en="Sometimes everything is set up correctly, but your competitors have simply invested earlier or more seriously in their local SEO. In that case, the solution isn't technical but strategic: geo-targeted keywords on your site, local citations on recognized directories, and content that speaks specifically to your city or neighbourhood. If you're based in ">Parfois, tout est correctement configuré, mais vos concurrents ont simplement investi plus tôt ou plus sérieusement dans leur référencement local. Dans ce cas, la solution n'est pas technique mais stratégique : mots-clés géolocalisés sur votre site, citations locales sur des annuaires reconnus, et un contenu qui parle spécifiquement de votre ville ou quartier. Si vous êtes basé à </span>
            <Link href="/liege" style={linkStyle}>Liège</Link>
            <span data-fr=", l'un des marchés les plus disputés de Wallonie, cette dynamique de concurrence locale est encore plus marquée." data-en=", one of Wallonia's most contested markets, this local competition dynamic is even more pronounced.">, l'un des marchés les plus disputés de Wallonie, cette dynamique de concurrence locale est encore plus marquée.</span>
          </p>

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '0.5px solid var(--color-border-card)' }}>
            <p
              className="long-copy"
              style={{ fontSize: '14.5px', lineHeight: '1.8', color: 'var(--color-slate)', margin: '0 0 24px' }}
              data-fr="Si vous avez vérifié ces neuf points et que votre entreprise reste invisible, ou si vous n'êtes simplement pas sûr par où commencer, un audit gratuit permet d'identifier en quelques minutes exactement ce qui bloque votre visibilité. Demandez votre audit gratuit dès maintenant."
              data-en="If you've checked all nine of these points and your business is still invisible, or if you're simply not sure where to start, a free audit can identify exactly what's blocking your visibility in just a few minutes. Request your free audit now."
            >
              Si vous avez vérifié ces neuf points et que votre entreprise reste invisible, ou si vous n'êtes simplement pas sûr par où commencer, un audit gratuit permet d'identifier en quelques minutes exactement ce qui bloque votre visibilité. Demandez votre audit gratuit dès maintenant.
            </p>
            <Link href="/audit" className="btn btn-primary">
              <span data-fr="Demander mon audit gratuit" data-en="Request my free audit">Demander mon audit gratuit</span>
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
