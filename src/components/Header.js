'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = scrolled
    ? 'bg-black text-white shadow-md'
    : 'bg-transparent text-white';

  const logoSrc = '/Arumin_marque_white.png';
  const iconColorClass = 'bg-white';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${headerClass}`}
    >
      {/* Logo */}
      <div className={`w-[100px] sm:w-[120px] z-50 ${isHome ? 'invisible' : ''}`}>
        <Link href="/">
          <Image
            src={logoSrc}
            alt="Arumin Logo"
            width={60}
            height={24}
            className="sm:w-[80px] sm:h-auto"
            priority
          />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="relative w-7 h-6 sm:w-8 sm:h-8 flex flex-col justify-center items-center z-50 group space-y-1 sm:space-y-1.5"
      >
        <span
          className={`h-0.5 w-7 sm:w-8 rounded-full transition-all duration-300 ease-in-out ${
            menuOpen ? 'rotate-45 translate-y-1.5 sm:translate-y-2.5' : ''
          } ${iconColorClass}`}
        />
        <span
          className={`h-0.5 w-7 sm:w-8 rounded-full transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-0' : ''
          } ${iconColorClass}`}
        />
        <span
          className={`h-0.5 w-7 sm:w-8 rounded-full transition-all duration-300 ease-in-out ${
            menuOpen ? '-rotate-45 -translate-y-1.5 sm:-translate-y-2.5' : ''
          } ${iconColorClass}`}
        />
      </button>

      {/* Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white/95 backdrop-blur-sm z-40 flex items-center justify-center transition-all duration-500 ease-out transform ${
          menuOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-10 text-xl font-medium text-gray-900">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/sustainability" onClick={() => setMenuOpen(false)}>
            Sustainability
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>

      {/* Optional fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </header>
  );
}
