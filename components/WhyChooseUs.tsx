import { Check } from 'lucide-react';
import { whyChooseUsIntro, whyChooseUsPoints } from '@/content/whyChooseUs';

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Why RR</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-5">
          Why choose RR Software Solutions?
        </h2>
        <p className="text-lg text-navy-500 leading-relaxed">{whyChooseUsIntro}</p>
      </div>
      <ul className="space-y-5">
        {whyChooseUsPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-3 border-b border-navy-100 pb-5 last:border-0 last:pb-0">
            <span className="mt-0.5 flex-shrink-0 text-navy-700">
              <Check size={20} strokeWidth={2.25} aria-hidden />
            </span>
            <span className="text-navy-700 leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
