import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden home-band-navy text-white">
      <div className="absolute inset-0 home-grid opacity-20 pointer-events-none" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {eyebrow ? (
          <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-4 home-animate-fade-up">
            {eyebrow}
          </p>
        ) : null}
        <div className="h-px w-14 bg-white/50 mb-7 home-rule" aria-hidden />
        <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight max-w-3xl mb-5 home-animate-fade-up home-animate-delay-1">
          {title}
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed home-animate-fade-up home-animate-delay-2">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 home-animate-fade-up home-animate-delay-3">
            {primaryCta ? (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center bg-white text-navy-900 px-7 py-3.5 text-base font-semibold tracking-wide hover:bg-navy-50 transition-colors"
              >
                {primaryCta.label}
                <ArrowRight className="ml-2" size={18} aria-hidden />
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center border border-white/70 text-white px-7 py-3.5 text-base font-semibold tracking-wide hover:bg-white hover:text-navy-900 transition-colors"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
