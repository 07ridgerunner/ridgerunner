'use client';

import { useState } from 'react';
import { siteSettings } from '@/data/siteData';

const field =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ridge-navy outline-none transition placeholder:text-slate-400 focus:border-ridge-yellow focus:ring-2 focus:ring-ridge-yellow/30';

export function BookingForm({ treks = [], defaultTrek = '' }) {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const text = [
      'New trek enquiry',
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      `Trek: ${d.trek}`,
      d.date ? `Preferred date: ${d.date}` : null,
      d.people ? `People: ${d.people}` : null,
      d.message ? `Message: ${d.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(`https://wa.me/${siteSettings.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3 rounded-3xl bg-white p-5 shadow-lg ring-1 ring-slate-100 sm:p-7">
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Your Name *" className={field} />
        <input name="email" type="email" required placeholder="Email Address *" className={field} />
        <input name="phone" type="tel" required placeholder="Phone Number *" className={field} />
        <select name="trek" required defaultValue={defaultTrek} className={field}>
          <option value="" disabled>Select Trek *</option>
          {treks.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <input name="date" type="date" aria-label="Preferred date" className={field} />
        <select name="people" defaultValue="" className={field}>
          <option value="" disabled>Number of People</option>
          {['1', '2', '3-5', '6-10', '10+'].map((n) => (
            <option key={n}>{n}</option>
          ))}
        </select>
      </div>
      <textarea name="message" rows="3" placeholder="Your Message (Optional)" className={field} />
      <button type="submit" className="w-full rounded-full bg-ridge-yellow py-3.5 text-sm font-bold uppercase tracking-wider text-ridge-navy shadow transition hover:-translate-y-0.5 hover:bg-ridge-yellow-dark">
        Submit Enquiry <i className="fa-solid fa-arrow-right ml-1" aria-hidden="true" />
      </button>
      {sent ? <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">WhatsApp khul gaya hai — wahan message send karke enquiry complete karein.</p> : null}
    </form>
  );
}

export default BookingForm;
