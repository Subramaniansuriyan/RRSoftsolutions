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
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-start text-green-600">
        <CheckCircle size={20} className="mr-2 flex-shrink-0 mt-1" />
        <p className="font-semibold text-gray-700">{benefit}</p>
      </div>
    </div>
  );
}

