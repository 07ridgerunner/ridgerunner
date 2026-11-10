'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { siteSettings } from '@/data/siteData';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/treks', label: 'Treks' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ridge-navy/95 shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Link href="/" aria-label={siteSettings.name} onClick={() => setOpen(false)}>
          <Logo className="h-12 w-auto sm:h-[52px]" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative py-1 transition hover:text-ridge-yellow after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-ridge-yellow after:transition-all hover:after:w-full">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${siteSettings.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="btn-pulse hidden rounded-full bg-ridge-yellow px-6 py-2.5 text-sm font-bold text-ridge-navy shadow transition hover:-translate-y-0.5 hover:bg-ridge-yellow-dark sm:inline-block"
          >
            Enquire Now
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-white transition hover:bg-white/10 lg:hidden"
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu (outside header: backdrop-blur would trap position:fixed) */}
      <div
        className={`fixed inset-x-0 top-[65px] bottom-0 sm:top-[69px] z-40 overflow-y-auto bg-ridge-navy transition-all duration-300 lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-md flex-col px-6 py-6">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-bold text-white transition-all duration-500 hover:pl-2 hover:text-ridge-yellow ${open ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"}`}
            >
              {item.label}
              <i className="fa-solid fa-arrow-right text-sm text-ridge-yellow-dark" aria-hidden="true" />
            </Link>
          ))}
          <a
            href={`https://wa.me/${siteSettings.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 rounded-full bg-ridge-yellow py-3.5 text-center text-sm font-bold uppercase tracking-wider text-ridge-navy shadow"
          >
            Enquire Now
          </a>
          <a
            href={`tel:${siteSettings.phone.replace(/\s+/g, '')}`}
            className="mt-3 rounded-full border border-white/30 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white"
          >
            Call {siteSettings.phone}
          </a>
        </nav>
      </div>
    </>
  );
}

export default Header;
