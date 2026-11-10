'use client';

import { useState } from 'react';

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>Full Name</span>
          <input required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>Email</span>
          <input type="email" required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white" placeholder="name@email.com" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>Phone</span>
          <input required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white" placeholder="+91..." />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          <span>Preferred Trek</span>
          <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white">
            <option>Kuari Pass & Pangarchulla Peak</option>
            <option>Hampta Pass & Chandratal Lake</option>
            <option>Winter Spiti Expedition</option>
            <option>Satopanth Trek</option>
          </select>
        </label>
      </div>

      <label className="block space-y-2 text-sm font-medium text-slate-700">
        <span>Message</span>
        <textarea rows="4" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-300 focus:bg-white" placeholder="Tell us about your preferred dates, group size, and travel needs." />
      </label>

      <button type="submit" className="w-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-orange-200 transition hover:-translate-y-0.5">
        Send Enquiry
      </button>

      {submitted ? <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">Your enquiry has been captured. We will contact you shortly.</p> : null}
    </form>
  );
}
