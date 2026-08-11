import { ReactNode } from 'react';

interface IndustryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  solution: string;
}

export default function IndustryCard({ icon, title, description, solution }: IndustryCardProps) {
  return (
    <div className="bg-white p-8 border border-navy-200 hover:border-navy-500 transition-colors duration-200 h-full flex flex-col">
      <div className="text-navy-800 mb-4">{icon}</div>
      <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">{title}</h3>
      <p className="text-navy-500 mb-5 leading-relaxed flex-1">{description}</p>
      <div className="pt-4 border-t border-navy-100">
        <p className="text-xs tracking-[0.16em] uppercase font-semibold text-navy-600 mb-2">
          Solution summary
        </p>
        <p className="text-sm text-navy-700 leading-relaxed">{solution}</p>
      </div>
    </div>
  );
}
