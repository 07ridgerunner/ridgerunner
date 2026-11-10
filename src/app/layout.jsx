import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';
import ScrollReveal from '@/components/ScrollReveal';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.ridgerunneradventures.com'),
  title: {
    template: '%s | Ridge Runner Adventures',
    default: 'Ridge Runner Adventures | Himalayan Treks & Guided Expeditions',
  },
  description:
    'Ridge Runner Adventures design premium Himalayan trekking experiences across Uttarakhand, Himachal Pradesh and Spiti with expert guides, flexible batches and memorable mountain journeys.',
  keywords:
    'Himalayan trekking, Uttarakhand treks, Himachal trekking, Spiti expedition, guided mountain journeys',
  openGraph: {
    title: 'Ridge Runner Adventures',
    description:
      'Premium Himalayan trekking experiences, iconic ridge walks, and guided expeditions across India’s highest trails.',
    type: 'website',
    url: 'https://www.ridgerunneradventures.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ridge Runner Adventures',
    description: 'Explore curated Himalayan journeys with Ridge Runner Adventures.',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Ridge Runner Adventures',
  description:
    'Himalayan trekking agency offering guided mountain journeys, ridge walks and adventure expeditions across Uttarakhand, Himachal Pradesh and Spiti.',
  url: 'https://www.ridgerunneradventures.com',
  telephone: '+91-98765-43210',
  email: 'hello@ridgerunneradventures.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Manali',
    addressLocality: 'Manali',
    addressRegion: 'Himachal Pradesh',
    addressCountry: 'IN',
  },
  areaServed: ['Uttarakhand', 'Himachal Pradesh', 'Spiti Valley'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${dmSans.variable}`}>
      <head>
        {/* Google Tag Manager - Required by User */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N6D7PVSM');`,
          }}
        />
        {/* End Google Tag Manager */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased font-body font-normal">
        {/* Google Tag Manager (noscript) - Required by User */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N6D7PVSM"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Analytics />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
