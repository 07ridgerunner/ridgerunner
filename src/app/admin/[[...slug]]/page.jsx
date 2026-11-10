import Link from 'next/link';
import { AdminDashboard } from '@/components/AdminDashboard';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { siteSettings, treks } from '@/data/siteData';

export function generateStaticParams() {
  return [
    { slug: ['login'] },
    { slug: ['dashboard'] },
    { slug: ['treks'] },
    { slug: ['batches'] },
    { slug: ['enquiries'] },
    { slug: ['blog'] },
    { slug: ['seo'] },
    { slug: ['settings'] },
  ];
}

const adminSections = {
  login: {
    title: 'Admin login',
    description: 'Sign in to access content, batch planning, enquiries, and reporting.',
    action: 'Sign in',
  },
  dashboard: {
    title: 'Dashboard',
    description: 'Track enquiries, route performance and upcoming season activity.',
    action: 'View analytics',
  },
  treks: {
    title: 'Trek management',
    description: 'Craft route pages, manage featured listings and maintain trek content.',
    action: 'Open treks',
  },
  batches: {
    title: 'Batch management',
    description: 'Review departure planning, scheduled departures and route availability.',
    action: 'Manage batches',
  },
  enquiries: {
    title: 'Enquiries',
    description: 'Track traveler interest, notes, assignments and follow-up status.',
    action: 'Manage leads',
  },
  blog: {
    title: 'Blog management',
    description: 'Publish route stories, travel guidance and destination insights.',
    action: 'Manage articles',
  },
  seo: {
    title: 'SEO & content',
    description: 'Review page metadata, structured data and crawling checks.',
    action: 'Audit SEO',
  },
  settings: {
    title: 'Site settings',
    description: 'Manage contact details, business hours and digital presence.',
    action: 'Review settings',
  },
};

export default function AdminPage({ params }) {
  const slug = params?.slug?.[0] || 'dashboard';
  const section = adminSections[slug] || adminSections.dashboard;

  return (
    <>
      <Header />
      <main className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {slug === 'login' ? (
            <div className="mx-auto max-w-lg rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Admin access</p>
              <h1 className="mt-4 font-display text-4xl font-bold text-slate-900">{section.title}</h1>
              <p className="mt-3 text-sm text-slate-600">{section.description}</p>
              <form className="mt-8 space-y-4">
                <label className="block text-sm font-medium text-slate-700">
                  <span>Email</span>
                  <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-300 focus:bg-white" placeholder="admin@ridgerunneradventures.com" />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                  <span>Password</span>
                  <input type="password" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-300 focus:bg-white" placeholder="••••••••" />
                </label>
                <Link href="/admin/dashboard" className="mt-2 inline-flex w-full justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-700">{section.action}</Link>
              </form>
            </div>
          ) : slug === 'dashboard' ? (
            <AdminDashboard />
          ) : (
            <div className="space-y-6">
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">{section.title}</p>
                <h1 className="mt-3 font-display text-4xl font-bold text-slate-900">{section.title}</h1>
                <p className="mt-4 max-w-2xl text-slate-600">{section.description}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="font-display text-3xl font-semibold text-slate-900">Overview</h2>
                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    <p>• {treks.length} published route records</p>
                    <p>• {siteSettings.name} brand and contact details configured</p>
                    <p>• Custom route management and editorial workflows available</p>
                  </div>
                </div>

                <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="font-display text-3xl font-semibold text-slate-900">Recommended next actions</h2>
                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    <li>• Review multi-day route pages and itineraries</li>
                    <li>• Confirm upcoming departure windows and availability</li>
                    <li>• Audit campaign and enquiry tracking for conversion performance</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
