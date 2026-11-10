'use client';

import { useState } from 'react';

export function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition ${isOpen ? 'ring-ridge-yellow' : 'ring-slate-100'}`}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-xl font-bold text-ridge-navy sm:px-6 sm:py-5"
            >
              <span>{item.question}</span>
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm transition ${isOpen ? 'bg-ridge-yellow text-ridge-navy' : 'bg-ridge-sky text-ridge-navy'}`}>
                <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'}`} aria-hidden="true" />
              </span>
            </button>
            {isOpen ? <p className="px-5 pb-5 text-[15px] leading-7 text-slate-600 sm:px-6">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}

export default FAQAccordion;
