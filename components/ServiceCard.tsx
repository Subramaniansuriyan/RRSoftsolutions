import { ReactNode } from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefit: string;
}

export default function ServiceCard({ icon, title, description, benefit }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 border border-navy-200 hover:border-navy-500 transition-colors duration-200">
      <div className="text-navy-800 mb-4">{icon}</div>
      <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">{title}</h3>
      <p className="text-navy-500 mb-5 leading-relaxed">{description}</p>
      <div className="flex items-start border-t border-navy-100 pt-4">
        <CheckCircle size={20} className="mr-2 flex-shrink-0 mt-0.5 text-navy-700" />
        <p className="font-semibold text-navy-800">{benefit}</p>
      </div>
    </div>
  );
}
