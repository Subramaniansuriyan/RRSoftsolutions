'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { services } from '@/content/services';
import { getServiceIcon } from '@/lib/serviceIcons';

export default function ServicesDirectory() {
  const [activeId, setActiveId] = useState(services[0]?.id ?? '');

  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,14rem)_1fr] gap-8 lg:gap-12">
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1" role="tablist">
        {services.map((service) => {
          const isActive = service.id === activeId;
          return (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(service.id)}
              className={`shrink-0 text-left px-4 py-3 border text-sm font-semibold tracking-wide transition-colors ${
                isActive
                  ? 'bg-navy-800 text-white border-navy-800'
                  : 'bg-white text-navy-700 border-navy-200 hover:border-navy-500'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span className={isActive ? 'text-white' : 'text-navy-600'}>
                  {getServiceIcon(service.icon, 18)}
                </span>
                {service.shortTitle}
              </span>
            </button>
          );
        })}
      </div>

      {active ? (
        <article
          key={active.id}
          className="border border-navy-200 bg-white p-6 sm:p-8 lg:p-10 home-animate-fade-up"
        >
          <div className="text-navy-800 mb-5">{getServiceIcon(active.icon, 36)}</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
            {active.title}
          </h2>
          <p className="text-navy-500 leading-relaxed text-lg mb-6">{active.description}</p>
          <div className="flex items-start gap-3 border-t border-navy-100 pt-5 mb-8">
            <CheckCircle className="text-navy-700 shrink-0 mt-0.5" size={20} aria-hidden />
            <p className="font-semibold text-navy-800 leading-relaxed">{active.benefit}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center bg-navy-800 text-white px-6 py-3 font-semibold tracking-wide hover:bg-navy-900 transition-colors"
          >
            Discuss this service
            <ArrowRight className="ml-2" size={18} aria-hidden />
          </Link>
        </article>
      ) : null}

      {/* Full list for scanability */}
      <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-navy-100 mt-4 pt-10">
        {services.map((service) => (
          <button
            key={`list-${service.id}`}
            type="button"
            onClick={() => setActiveId(service.id)}
            className={`text-left border-b border-navy-100 py-6 pr-6 transition-colors group ${
              service.id === activeId ? 'bg-navy-50' : 'hover:bg-navy-50/60'
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="text-navy-700 pt-0.5">{getServiceIcon(service.icon, 24)}</span>
              <div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-1 group-hover:text-navy-700">
                  {service.title}
                </h3>
                <p className="text-sm text-navy-500 leading-relaxed">{service.shortDescription}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
