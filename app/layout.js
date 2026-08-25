import { DM_Sans, Inter } from 'next/font/google';
import './tokens.css';
import './styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// NOTE: placeholder domain — update once the site is actually hosted (see summary flag).
const SITE_URL = 'https://www.summitlocalseo.be';

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Summit Local SEO — Référencement Local en Wallonie',
    template: '%s | Summit Local SEO',
  },
  description:
    "Summit aide les artisans et indépendants de Liège, Charleroi et Namur à se classer #1 sur Google. Audit de visibilité locale gratuit, sans engagement.",
  openGraph: {
    siteName: 'Summit Local SEO',
    locale: 'fr_BE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Summit Local SEO',
      url: SITE_URL,
      logo: `${SITE_URL}/assets/img/hero-bg.jpg`,
      email: 'summitseo.be@gmail.com',
      telephone: '+32492921040',
      areaServed: ['Liège', 'Charleroi', 'Namur', 'Wallonie'],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+32492921040',
        email: 'summitseo.be@gmail.com',
        contactType: 'customer service',
        areaServed: 'BE',
        availableLanguage: ['French', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Summit Local SEO',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'fr-BE',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
