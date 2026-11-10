import Image from 'next/image';

// The logo artwork has white lettering, so use it on dark backgrounds.
export function Logo({ className = 'h-14 w-auto' }) {
  return (
    <Image
      src="/logo-ridge.png"
      alt="Ridge Runner Adventures — Dare to Dream, Dare to Explore"
      width={950}
      height={650}
      priority
      className={className}
    />
  );
}

export default Logo;
