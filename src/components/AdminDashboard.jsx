import Link from 'next/link';
import { adminMetrics, quickAdminLinks } from '@/data/siteData';

export function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">Overview</p>
          <h1 className="mt-2 font-display text-4xl font-bold text-slate-900">Admin dashboard</h1>
        </div>
        <Link href="/admin/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">Log out</Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {adminMetrics.map((metric) => (
          <div key={metric.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className={`mb-5 h-1.5 rounded-full bg-gradient-to-r ${metric.accent}`} />
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-3 text-3xl font-bold text-slate-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-3xl font-semibold text-slate-900">Quick access</h2>
        <div className="mt-5 flex flex-wrap gap-3">
          {quickAdminLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-sky-100 hover:text-sky-700">{item.label}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
