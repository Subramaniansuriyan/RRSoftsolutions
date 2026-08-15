import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroVisual from '@/components/HeroVisual';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden home-noise home-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100svh-4rem)] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center py-12 sm:py-16 lg:py-20">
        <div className="order-2 lg:order-1 relative z-10 max-w-xl">
          <p className="font-display text-navy-800 text-sm sm:text-base tracking-[0.18em] uppercase mb-5 home-animate-fade-up">
            RR Software Solutions
          </p>
          <div className="h-px w-16 bg-navy-800 mb-8 home-rule" aria-hidden />
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.35rem] leading-[1.12] text-navy-900 font-bold mb-6 home-animate-fade-up home-animate-delay-1">
            IT talent and technology direction, built to scale
          </h1>
          <p className="text-lg sm:text-xl text-navy-500 leading-relaxed mb-10 home-animate-fade-up home-animate-delay-2">
            Staffing, consulting, and recruitment outsourcing for U.S. companies that need
            dependable delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 home-animate-fade-up home-animate-delay-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-navy-800 text-white px-7 py-3.5 text-base font-semibold tracking-wide hover:bg-navy-900 transition-colors duration-200"
            >
              Talk to us
              <ArrowRight className="ml-2" size={18} aria-hidden />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center justify-center border border-navy-800 text-navy-800 px-7 py-3.5 text-base font-semibold tracking-wide hover:bg-navy-800 hover:text-white transition-colors duration-200"
            >
              Explore careers
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative home-animate-fade-in">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
