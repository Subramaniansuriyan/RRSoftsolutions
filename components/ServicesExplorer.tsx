'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { services } from '@/content/services';
import { getServiceIcon } from '@/lib/serviceIcons';

export default function ServicesExplorer() {
  const [openId, setOpenId] = useState<string | null>(services[0]?.id ?? null);

  return (
    <div>
      <ul className="border-y border-navy-100">
        {services.map((offering) => {
          const isOpen = openId === offering.id;
          return (
            <li key={offering.id} className="border-b border-navy-100 last:border-b-0">
              <button
                type="button"
                className="w-full text-left grid grid-cols-1 sm:grid-cols-[3rem_1fr_auto] gap-3 sm:gap-6 items-center py-6 group"
                onClick={() => setOpenId(isOpen ? null : offering.id)}
                aria-expanded={isOpen}
              >
                <span
                  className={`pt-0.5 transition-colors ${
                    isOpen ? 'text-navy-800' : 'text-navy-500 group-hover:text-navy-700'
                  }`}
                >
                  {getServiceIcon(offering.icon, 28)}
                </span>
                <span>
                  <span className="font-display text-lg font-bold text-navy-900 block">
                    {offering.shortTitle}
                  </span>
                  <span className="text-navy-500 text-sm sm:hidden mt-1 block">
                    {offering.shortDescription}
                  </span>
                </span>
                <ChevronDown
                  size={20}
                  className={`text-navy-500 justify-self-end transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-navy-800' : ''
                  }`}
                  aria-hidden
                />
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-7 sm:pl-[3rem] sm:ml-6 max-w-2xl">
                    <p className="text-navy-500 leading-relaxed mb-3">
                      {offering.shortDescription}
                    </p>
                    <p className="text-sm text-navy-600 leading-relaxed mb-4">
                      {offering.benefit}
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-sm font-semibold text-navy-800 hover:text-navy-600 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-1.5" size={16} aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="mt-10">
        <Link
          href="/services"
          className="inline-flex items-center text-navy-800 font-semibold tracking-wide hover:text-navy-600 transition-colors"
        >
          Full service list
          <ArrowRight className="ml-2" size={18} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
