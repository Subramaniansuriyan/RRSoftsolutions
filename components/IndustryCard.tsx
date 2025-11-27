import { ReactNode } from 'react';

interface IndustryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  solution: string;
}

export default function IndustryCard({ icon, title, description, solution }: IndustryCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="pt-4 border-t border-gray-200">
        <p className="text-sm font-semibold text-indigo-600 mb-1">Solution Summary</p>
        <p className="text-sm text-gray-700">{solution}</p>
      </div>
    </div>
  );
}

