'use client';

import { useState } from 'react';
import { processSteps } from '@/content/process';

export default function ProcessSteps() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-1 mb-10 overflow-x-auto pb-1" role="tablist" aria-label="Engagement steps">
        {processSteps.map((item, i) => (
          <button
            key={item.step}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`shrink-0 flex-1 min-w-[4.5rem] h-1.5 transition-colors duration-300 ${
              active === i ? 'bg-navy-800' : 'bg-navy-200 hover:bg-navy-300'
            }`}
            aria-label={`Step ${item.step}: ${item.title}`}
          />
        ))}
      </div>

      <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
        {processSteps.map((item, i) => {
          const isActive = active === i;
          return (
            <li key={item.step}>
              <button
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`w-full text-left p-5 border transition-all duration-300 h-full ${
                  isActive
                    ? 'bg-navy-800 text-white border-navy-800 scale-[1.02]'
                    : 'bg-white text-navy-900 border-navy-200 hover:border-navy-400'
                }`}
              >
                <span
                  className={`font-display text-4xl font-bold leading-none block mb-3 ${
                    isActive ? 'text-white/30' : 'text-navy-100'
                  }`}
                >
                  {String(item.step).padStart(2, '0')}
                </span>
                <h3
                  className={`font-display text-lg font-bold mb-2 ${
                    isActive ? 'text-white' : 'text-navy-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isActive ? 'text-white/80' : 'text-navy-500'
                  }`}
                >
                  {item.description}
                </p>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
