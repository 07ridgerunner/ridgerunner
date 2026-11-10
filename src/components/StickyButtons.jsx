'use client';

const WHATSAPP =
  'https://wa.me/919682300904?text=Hi%2C%20I%20want%20to%20book%20a%20Kashmir%20tour%20package.%20Please%20send%20me%20options.';
const PHONE = 'tel:+919682300904';

export default function StickyButtons() {
  return (
    <>
      {/* WhatsApp Button (Right) */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab fixed bottom-6 right-5 z-[9999] w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      >
        <i className="fab fa-whatsapp text-3xl" />
      </a>

      {/* Call Button (Left) */}
      <a
        href={PHONE}
        className="wa-fab fixed bottom-6 left-5 z-[9999] w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      >
        <i className="fas fa-phone-alt text-xl" />
      </a>
    </>
  );
}
