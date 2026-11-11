import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { siteSettings } from '@/data/siteData';

const contacts = [
  { icon: 'fa-solid fa-phone', label: siteSettings.phone, href: `tel:${siteSettings.phone.replace(/\s+/g, '')}` },
  { icon: 'fa-solid fa-envelope', label: siteSettings.email, href: `mailto:${siteSettings.email}` },
  { icon: 'fa-solid fa-location-dot', label: siteSettings.address },
  { icon: 'fa-brands fa-instagram', label: '@ridgerunneradventures' },
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-ridge-navy text-white">
      <svg className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full text-white/[0.06]" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
        <path fill="currentColor" d="M0 160 L0 110 L120 40 L210 100 L330 20 L450 105 L560 55 L700 120 L820 30 L960 105 L1080 50 L1200 100 L1200 160 Z" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ridge-yellow">Get in touch</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Contact Us</h2>
            <p className="mt-3 text-slate-300">Let’s plan your next mountain journey.</p>
            <ul className="mt-8 space-y-4">
              {contacts.map((c) => (
                <li key={c.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ridge-yellow text-ridge-navy">
                    <i className={c.icon} aria-hidden="true" />
                  </span>
                  {c.href ? <a href={c.href} className="font-medium hover:text-ridge-yellow">{c.label}</a> : <span className="font-medium">{c.label}</span>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ridge-yellow">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><Link href="/treks" className="hover:text-white">Treks</Link></li>
              <li><Link href="/destinations" className="hover:text-white">Destinations</Link></li>
              <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-ridge-yellow">Company</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link></li>
              <li><Link href="/cancellation-policy" className="hover:text-white">Cancellation Policy</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-start gap-5">
            <Logo className="h-36 w-auto" />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteSettings.name}. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <a href={`https://wa.me/${siteSettings.whatsappNumber}`} target="_blank" rel="noreferrer" className="hover:text-ridge-yellow">
              <i className="fa-brands fa-whatsapp mr-2" aria-hidden="true" />WhatsApp us
            </a>
            <p>
              Created by{' '}
              <a href="https://deenxconsultancy.com" target="_blank" rel="noopener" className="font-semibold text-ridge-yellow hover:underline">deenxconsultancy.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
