import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PageCtaProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  variant?: 'light' | 'navy';
}

export default function PageCta({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  variant = 'light',
}: PageCtaProps) {
  const isNavy = variant === 'navy';

  return (
    <section
      className={
        isNavy
          ? 'py-20 sm:py-28 home-band-navy text-white'
          : 'py-20 sm:py-28 border-t border-navy-100 home-noise'
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p
              className={`font-display text-xs tracking-[0.2em] uppercase mb-4 ${
                isNavy ? 'text-white/70' : 'text-navy-500'
              }`}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
              isNavy ? 'text-white' : 'text-navy-900'
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-lg mb-10 leading-relaxed ${
              isNavy ? 'text-white/80' : 'text-navy-500'
            }`}
          >
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href={primaryCta.href}
              className={
                isNavy
                  ? 'inline-flex items-center justify-center bg-white text-navy-900 px-7 py-3.5 font-semibold tracking-wide hover:bg-navy-50 transition-colors'
                  : 'inline-flex items-center justify-center bg-navy-800 text-white px-7 py-3.5 font-semibold tracking-wide hover:bg-navy-900 transition-colors'
              }
            >
              {primaryCta.label}
              <ArrowRight className="ml-2" size={18} aria-hidden />
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className={
                  isNavy
                    ? 'inline-flex items-center justify-center border border-white/70 text-white px-7 py-3.5 font-semibold tracking-wide hover:bg-white hover:text-navy-900 transition-colors'
                    : 'inline-flex items-center justify-center border border-navy-800 text-navy-800 px-7 py-3.5 font-semibold tracking-wide hover:bg-navy-800 hover:text-white transition-colors'
                }
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
