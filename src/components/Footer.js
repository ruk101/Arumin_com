'use client';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <footer
      className={`absolute bottom-6 w-full text-center text-xs tracking-wide ${
        isHome ? 'text-white' : 'text-black'
      }`}
    >
      © 2025 Arumin
    </footer>
  );
}
