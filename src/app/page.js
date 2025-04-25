'use client'

import { useState, useRef } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
  
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
  
    setError('');
    setIsLoading(true);
  
    // Submit using fetch instead of form redirect
    try {
      await fetch("https://formsubmit.co/ajax/info@arumin.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          email: email,
          _captcha: false
        })
      });
  
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
      emailRef.current.value = '';
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  
    setIsLoading(false);
  };
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 text-center relative">
      {/* Logo */}
      <img src="/logo1.png" alt="Arumin Logo" className="w-48 md:w-56 mb-10" />

      {/* Tagline */}
      <p className="italic text-2xl text-gray-300 mb-20">
        Rarity, Responsibly Yours.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-start gap-8 mt-8"
      >
        <p className="text-gray-400 text-lg md:w-1/2">
          Be among the first invited to experience Arumin.
        </p>

        <div className="flex flex-col gap-3 w-full md:w-1/2">
          <input
            ref={emailRef}
            type="email"
            required
            placeholder="Your email"
            className="border-b border-gray-600 bg-transparent px-4 pt-1 pb-0 text-base text-white placeholder:text-gray-400 italic focus:outline-none w-full"
          />
         <button
  type="submit"
  disabled={isLoading}
  className="border border-white px-6 py-2 text-base text-white hover:bg-white hover:text-black transition disabled:opacity-50"
>
  {isLoading ? 'Sending…' : 'Request Access'}
</button>

        </div>
      </form>

      {/* Popup */}
      {showPopup && (
        <div className="fixed bottom-24 bg-white text-black px-6 py-3 rounded shadow-xl opacity-95 backdrop-blur-sm transition-all duration-500 animate-fade-in"
>

          ✅ Thank you! Your request has been received.
        </div>
      )}

      {/* Footer */}
      <footer className="absolute bottom-6 text-sm text-gray-500">
        © Arumin. All rights reserved.
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
