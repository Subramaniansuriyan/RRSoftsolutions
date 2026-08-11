'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/content/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  useEffect(() => {
    if (paused || total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + total) % total);
  };

  const current = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
        <blockquote className="border-t border-navy-200 pt-8 min-h-[14rem] sm:min-h-[12rem]">
          <p
            key={current.id}
            className="text-navy-700 text-xl sm:text-2xl leading-relaxed font-display mb-10 home-animate-fade-up"
          >
            &ldquo;{current.quote}&rdquo;
          </p>
          <footer className="flex items-center gap-4">
            <div
              className="w-12 h-12 bg-navy-800 text-white flex items-center justify-center font-semibold text-xs tracking-wide"
              aria-hidden
            >
              {current.initials}
            </div>
            <div>
              <cite className="not-italic font-semibold text-navy-900 block text-lg">
                {current.name}
              </cite>
              <span className="text-sm text-navy-500">{current.role}</span>
            </div>
          </footer>
        </blockquote>

        <div className="flex items-center gap-3 lg:pb-2">
          <button
            type="button"
            onClick={() => go(-1)}
            className="h-11 w-11 border border-navy-300 text-navy-800 hover:bg-navy-800 hover:text-white hover:border-navy-800 transition-colors inline-flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="h-11 w-11 border border-navy-300 text-navy-800 hover:bg-navy-800 hover:text-white hover:border-navy-800 transition-colors inline-flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-2 mt-8" role="tablist" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-10 bg-navy-800' : 'w-2 bg-navy-200 hover:bg-navy-400'
            }`}
          />
        ))}
      </div>

      {/* Secondary peek grid on large screens for browsability */}
      <div className="hidden md:grid grid-cols-2 gap-6 mt-14">
        {testimonials.map((item, i) => (
          <button
            key={`peek-${item.id}`}
            type="button"
            onClick={() => setIndex(i)}
            className={`text-left p-5 border transition-all duration-200 ${
              i === index
                ? 'border-navy-800 bg-navy-50'
                : 'border-navy-100 hover:border-navy-300'
            }`}
          >
            <p className="text-sm text-navy-600 line-clamp-2 mb-3">&ldquo;{item.quote}&rdquo;</p>
            <span className="text-sm font-semibold text-navy-900">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
