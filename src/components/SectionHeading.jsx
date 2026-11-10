export function SectionHeading({ eyebrow, title, description, align = 'left', centered = false }) {
  const center = centered || align === 'center';
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ridge-navy/60">{eyebrow}</p> : null}
      <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ridge-navy sm:text-4xl lg:text-5xl">{title}</h2>
      <span className={`mt-3 block h-1 w-16 rounded-full bg-ridge-yellow ${center ? 'mx-auto' : ''}`} />
      {description ? <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;
