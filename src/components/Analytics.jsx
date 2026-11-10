'use client';
import Script from 'next/script';
import { useEffect } from 'react';
import { captureTrackingParams } from '@/utils/travdx';

// Replace GA_ID and GADS_ID with your real IDs
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || 'AW-XXXXXXXXX';

export default function Analytics() {
  useEffect(() => {
    captureTrackingParams();
  }, []);

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          gtag('config', '${GADS_ID}');
        `}
      </Script>
    </>
  );
}

/**
 * Call this function to fire a Google Ads conversion event.
 * Use it on WhatsApp button clicks and call button clicks.
 *
 * Example usage in any component:
 *   import { fireConversion } from '@/components/Analytics';
 *   <button onClick={() => { fireConversion(); window.open(waLink) }}>
 */
export function fireConversion(label = 'whatsapp_click') {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GADS_ID}/REPLACE_WITH_CONVERSION_LABEL`,
      event_label: label,
    });
    // Also fire GA4 event
    window.gtag('event', label, {
      event_category: 'lead',
    });
  }
}
