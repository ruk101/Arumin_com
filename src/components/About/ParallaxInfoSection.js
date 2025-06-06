'use client';
import React, { useEffect, useState, useRef } from 'react';

const HeroParallaxSection = () => {
  const [step, setStep] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    let canScroll = true;
    let touchStartY = 0;
    let touchDelta = 0;

    const scrollStep = (deltaY) => {
      canScroll = false;

      // ✅ Add delay depending on the step (slower when entering step 2)
      const delay = step === 0 ? 1200 : 2500;
      setTimeout(() => {
        canScroll = true;
      }, delay);

      if (deltaY > 30) {
        if (step < 1) {
          setStep((prev) => prev + 1);
        } else {
          setStep(2);
          setScrollLocked(false);
          document.body.style.overflow = 'auto';

          const nextElement = sectionRef.current?.nextElementSibling;
          if (nextElement) {
            setTimeout(() => {
              nextElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }
      } else if (deltaY < -30 && step > 0) {
        setStep((prev) => prev - 1);
      }
    };

    const handleWheel = (e) => {
      if (!scrollLocked || !canScroll) return;
      e.preventDefault();
      scrollStep(e.deltaY);
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!scrollLocked || !canScroll) return;
      touchDelta = touchStartY - e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (!scrollLocked || !canScroll) return;
      scrollStep(touchDelta);
    };

    if (scrollLocked) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('touchstart', handleTouchStart, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = 'auto';
    };
  }, [step, scrollLocked]);

  // ✅ Reset scroll step when section reappears
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && step >= 2) {
          setStep(1);
          setScrollLocked(true);
          document.body.style.overflow = 'hidden';

          // Scroll to top of hero section
          sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [step]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-fixed bg-center bg-cover text-white px-6 md:px-20 h-screen"
      style={{ backgroundImage: "url('/AboutUs-one.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0 pointer-events-none" />

      {/* Content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto text-left md:text-center h-full px-4 overflow-hidden flex items-start md:items-center justify-center ${
          step === 0 ? 'pt-28 md:pt-0' : 'pt-0'
        }`}
      >
        <div
          key={step}
          className="animate-fade-in transition-opacity duration-[2000ms] ease-in-out opacity-0 h-full flex items-center justify-center w-full"
        >
          <div className="overflow-y-auto max-h-[90vh] w-full space-y-6 pb-10 px-2">
            {step === 0 && (
              <p className="font-garamond text-lg md:text-2xl leading-relaxed font-light">
                At the core of Arumin is a curated selection of some of the finest Ceylon sapphires in the world,
                sourced with integrity, cut with precision, and offered with full traceability.
              </p>
            )}

            {step >= 1 && (
              <>
                <div className="space-y-4 text-sm md:text-base leading-relaxed">
                  <p>
                    <span className="font-semibold italic">Our role in Sri Lanka.</span> Through active collaboration with local stakeholders,
                    Arumin works to ensure that the sapphire trade delivers lasting value to the country’s economy
                    and strengthens its global presence.
                  </p>
                  <p>
                    Our approach balances the preservation of heritage with the creation of tangible, long-term impact.
                  </p>
                </div>

                <div className="space-y-4 text-sm md:text-base leading-relaxed">
                  <p>
                    <span className="font-semibold italic">Partnerships Built on Shared Value.</span> We partner with select brands that share our commitment to ethical sourcing,
                    transparent practices, and community upliftment.
                  </p>
                  <p>
                    Every relationship is built on aligned values, ensuring that our partners are able to access exceptional Ceylon sapphires
                    with the transparency, trust, and enduring value needed to strengthen their own creations.
                  </p>
                </div>

                <p className="text-sm md:text-base leading-relaxed">
                  <span className="font-semibold italic">Redefining the Trade.</span> Arumin represents a new approach to the Ceylon sapphire trade:
                  one built on provenance, responsibility, and a commitment to ensuring that the true value of each stone uplifts its place of origin.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Fade animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 2s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroParallaxSection;
