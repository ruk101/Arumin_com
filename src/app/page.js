'use client';

import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-black font-serif text-center overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none animate-gemstoneMagic"
        src="/home-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content Area */}
      <div className="z-20" data-aos='fade'>

        {/* Desktop Logo & Text */}
        <div className="hidden md:block">
          <Image
            src="/logo1.png"
            alt="Arumin Logo"
            width={300}
            height={300}
            className="mx-auto mb-6 transition duration-500 ease-in-out hover:drop-shadow-[0_0_25px_rgba(0,0,0,0.4)]"
          />
          <p className="text-base md:text-lg text-white leading-relaxed max-w-xl mx-auto mt-4 mb-10">
            A global supplier of ethical Ceylon sapphires, <br/>
            direct from the source
          </p>
        </div>

        {/* Mobile Logo & Text */}
<div className="block md:hidden">
  <Image
    src="/logo1.png"
    alt="Arumin Logo"
    width={180}  // ⬆️ Increased from 150
    height={180}
    className="mx-auto mb-4 transition duration-500 ease-in-out hover:drop-shadow-[0_0_20px_rgba(0,0,0,0.35)]"
  />
  <p className="text-sm text-white leading-normal max-w-xs mx-auto mt-2 mb-5">  {/* ⬆️ text-sm instead of text-xs */}
    A global supplier of ethical Ceylon sapphires, <br />
    direct from the source
  </p>
</div>


       {/* Desktop Button */}
<div className="relative w-full items-center justify-center my-6 hidden md:flex">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-full max-w-sm border-t border-gray-300 relative">
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-48 h-10 bg-gradient-to-r from-blue-300 via-pink-300 to-yellow-200 blur-xl opacity-50 rounded-full" />
    </div>
  </div>
  <Link href="/about" passHref>
    <button className="relative z-10 bg-white px-6 py-2 border border-black text-sm tracking-wider hover:bg-black hover:text-white transition">
      LEARN MORE
    </button>
  </Link>
</div>


       {/* Mobile Button */}
<div className="relative w-full items-center justify-center my-4 flex md:hidden">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-full max-w-[200px] border-t border-gray-300 relative">
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-blue-300 via-pink-300 to-yellow-200 blur-xl opacity-50 rounded-full" />
    </div>
  </div>
  <Link href="/about" passHref>
    <button className="relative z-10 bg-white px-4 py-1 text-xs border border-black tracking-wide hover:bg-black hover:text-white transition">
      LEARN MORE
    </button>
  </Link>
</div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInSlow {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInSlow {
          animation: fadeInSlow 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
