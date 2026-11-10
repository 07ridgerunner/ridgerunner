'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 700, suffix: '+', label: 'Happy Travelers', icon: <i className="fas fa-users" /> },
  { number: 4.8, suffix: '★', label: 'Google Rating', icon: <i className="fas fa-star" />, decimal: true },
  { number: 10, suffix: '+', label: 'Years in Kashmir', icon: <i className="fas fa-calendar-check" /> },
  { number: 100, suffix: '%', label: 'No Hidden Charges', icon: <i className="fas fa-shield-halved" /> },
];

function CountUp({ target, suffix, decimal, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1600;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(decimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [active, target, decimal]);

  return (
    <span className="font-display text-4xl sm:text-5xl font-bold text-white">
      {decimal ? count.toFixed(1) : count}
      <span className="text-gold-400">{suffix}</span>
    </span>
  );
}

export default function StatsStrip() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-8 px-4 bg-gradient-to-r from-kashmir-900 via-kashmir-800 to-kashmir-900"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-2xl mb-1 text-gold-400">{s.icon}</div>
            <CountUp target={s.number} suffix={s.suffix} decimal={s.decimal} active={active} />
            <p className="text-blue-200 text-sm mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
