import Link from 'next/link';

export function DestinationCard({ destination }) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-md"
    >
      <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110" style={{ backgroundImage: `url("${destination.image}")` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-ridge-navy/90 via-ridge-navy/20 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 text-white">
        <h3 className="font-display text-3xl font-bold">{destination.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-white/80">{destination.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ridge-yellow">
          Explore region <i className="fa-solid fa-arrow-right transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export default DestinationCard;
