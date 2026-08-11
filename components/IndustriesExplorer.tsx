'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { industries } from '@/content/industries';
import { getIndustryIcon } from '@/lib/industryIcons';

export default function IndustriesExplorer() {
  const [activeId, setActiveId] = useState(industries[0]?.id ?? '');
  const active = industries.find((i) => i.id === activeId) ?? industries[0];

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-10"
        role="tablist"
        aria-label="Industries"
      >
        {industries.map((industry) => {
          const isActive = industry.id === activeId;
          return (
            <button
              key={industry.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(industry.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border transition-colors ${
                isActive
                  ? 'bg-navy-800 text-white border-navy-800'
                  : 'bg-white text-navy-700 border-navy-200 hover:border-navy-500'
              }`}
            >
              {getIndustryIcon(industry.icon, 16)}
              {industry.shortTitle}
            </button>
          );
        })}
      </div>

      {active ? (
        <div
          key={active.id}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0 border border-navy-200 home-animate-fade-up"
        >
          <div className="bg-navy-800 text-white p-8 sm:p-10 flex flex-col justify-between min-h-[18rem]">
            <div>
              <div className="mb-6 text-white/90">{getIndustryIcon(active.icon, 36)}</div>
              <p className="text-xs tracking-[0.18em] uppercase text-white/60 mb-3">
                Industry focus
              </p>
              <h2 className="font-display text-3xl font-bold mb-4">{active.title}</h2>
              <p className="text-white/80 leading-relaxed">{active.description}</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center mt-8 text-sm font-semibold text-white hover:text-navy-100 transition-colors"
            >
              Talk about this industry
              <ArrowRight className="ml-2" size={16} aria-hidden />
            </Link>
          </div>
          <div className="bg-white p-8 sm:p-10 border-t lg:border-t-0 lg:border-l border-navy-200">
            <p className="text-xs tracking-[0.18em] uppercase text-navy-500 mb-3">
              Solution summary
            </p>
            <p className="font-display text-xl sm:text-2xl text-navy-900 leading-snug mb-8">
              {active.solution}
            </p>
            <ul className="space-y-3 text-navy-600 text-sm leading-relaxed">
              <li className="border-b border-navy-100 pb-3">
                Domain-aware delivery—not a one-size-fits-all template.
              </li>
              <li className="border-b border-navy-100 pb-3">
                Engineering, consulting, or staffing models based on what you need next.
              </li>
              <li>Houston team partnership with clear communication and ownership.</li>
            </ul>
          </div>
        </div>
      ) : null}

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-navy-100">
        {industries.map((industry) => (
          <button
            key={`card-${industry.id}`}
            type="button"
            onClick={() => setActiveId(industry.id)}
            className={`text-left border-b sm:border-r border-navy-100 p-6 transition-colors ${
              industry.id === activeId
                ? 'bg-navy-50'
                : 'bg-white hover:bg-navy-50/70'
            }`}
          >
            <div className="text-navy-700 mb-3">{getIndustryIcon(industry.icon, 24)}</div>
            <h3 className="font-display font-bold text-navy-900 mb-1">{industry.title}</h3>
            <p className="text-sm text-navy-500 line-clamp-2">{industry.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
