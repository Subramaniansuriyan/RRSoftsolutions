'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '@/content/services';
import { getServiceIcon } from '@/lib/serviceIcons';

export default function ServicesDirectory() {
  const [activeId, setActiveId] = useState(services[0]?.id ?? '');

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (services.some((s) => s.id === hash)) {
        setActiveId(hash);
      }
    };
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const active = services.find((s) => s.id === activeId) ?? services[0];

  const selectService = (id: string) => {
    setActiveId(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  if (!active) return null;

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="tablist"
        aria-label="Services"
      >
        {services.map((service) => {
          const isActive = service.id === activeId;
          return (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => selectService(service.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border transition-colors ${
                isActive
                  ? 'bg-navy-800 text-white border-navy-800'
                  : 'bg-white text-navy-700 border-navy-200 hover:border-navy-500'
              }`}
            >
              {getServiceIcon(service.icon, 16)}
              {service.shortTitle}
            </button>
          );
        })}
      </div>

      <article
        key={active.id}
        id={active.id}
        className="border border-navy-200 bg-white p-6 sm:p-8 lg:p-10 home-animate-fade-up scroll-mt-24"
      >
        <div className="text-navy-800 mb-5">{getServiceIcon(active.icon, 36)}</div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
          {active.title}
        </h2>
        <p className="text-navy-500 leading-relaxed text-lg mb-4">{active.description}</p>
        <p className="text-navy-800 font-semibold mb-10">{active.shortDescription}</p>

        <h3 className="font-display text-xl font-bold text-navy-900 mb-6">
          {active.linesHeading}
        </h3>
        <ul className="space-y-6 mb-12">
          {active.lines.map((line) => (
            <li key={line.title} className="border-b border-navy-100 pb-6 last:border-0 last:pb-0">
              <h4 className="font-display font-bold text-navy-900 mb-2">{line.title}</h4>
              <p className="text-navy-500 leading-relaxed">{line.description}</p>
            </li>
          ))}
        </ul>

        <h3 className="font-display text-xl font-bold text-navy-900 mb-5">
          {active.whyHeading}
        </h3>
        <ul className="space-y-4 mb-10">
          {active.whyPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <Check size={20} className="text-navy-700 shrink-0 mt-0.5" aria-hidden />
              <span className="text-navy-700 leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-3">
          {active.ctas.map((cta, index) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={
                index === 0
                  ? 'inline-flex items-center justify-center bg-navy-800 text-white px-6 py-3 font-semibold tracking-wide hover:bg-navy-900 transition-colors'
                  : 'inline-flex items-center justify-center border border-navy-800 text-navy-800 px-6 py-3 font-semibold tracking-wide hover:bg-navy-800 hover:text-white transition-colors'
              }
            >
              {cta.label}
              {index === 0 ? <ArrowRight className="ml-2" size={18} aria-hidden /> : null}
            </Link>
          ))}
        </div>
      </article>
    </div>
  );
}
