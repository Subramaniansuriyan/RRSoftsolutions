import { Metadata } from 'next';
import IndustryCard from '@/components/IndustryCard';
import { Heart, Building2, Monitor, ShoppingCart, GraduationCap, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'RR soft solutions provides specialized technology solutions for healthcare, banking, IT, ecommerce, education, and manufacturing industries.',
};

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Heart size={48} />,
      title: 'Healthcare & RCM',
      description:
        'We understand the unique challenges of healthcare organizations, from HIPAA compliance to revenue cycle optimization. Our solutions help healthcare providers improve patient care while maximizing revenue.',
      solution:
        'End-to-end RCM solutions, EMR/EHR integration, patient portals, and healthcare analytics platforms.',
    },
    {
      icon: <Building2 size={48} />,
      title: 'Banking & Financial Services',
      description:
        'Deliver secure, compliant, and innovative financial technology solutions. We help banks and financial institutions modernize their systems, improve customer experience, and meet regulatory requirements.',
      solution:
        'Core banking systems, mobile banking apps, payment gateways, and fraud detection systems.',
    },
    {
      icon: <Monitor size={48} />,
      title: 'IT',
      description:
        'Support technology companies with cutting-edge software development, DevOps automation, and cloud infrastructure. We help IT firms scale their operations and deliver better products to their customers.',
      solution:
        'SaaS platforms, API development, microservices architecture, and cloud-native applications.',
    },
    {
      icon: <ShoppingCart size={48} />,
      title: 'Ecommerce & Retail',
      description:
        'Transform retail experiences with omnichannel solutions, inventory management systems, and personalized shopping experiences. We help retailers compete in the digital marketplace.',
      solution:
        'Custom ecommerce platforms, inventory management, POS systems, and customer analytics.',
    },
    {
      icon: <GraduationCap size={48} />,
      title: 'Education & Training',
      description:
        'Empower educational institutions with learning management systems, virtual classrooms, and student information systems. We make education more accessible and effective through technology.',
      solution:
        'LMS platforms, virtual classrooms, student portals, and educational content management systems.',
    },
    {
      icon: <Package size={48} />,
      title: 'Manufacturing & Logistics',
      description:
        'Optimize operations with supply chain management solutions, warehouse management systems, and IoT integration. We help manufacturers improve efficiency and reduce costs.',
      solution:
        'ERP systems, supply chain optimization, warehouse management, and real-time tracking solutions.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Specialized solutions tailored to the unique needs of your industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Deep Domain Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our industry-specific knowledge allows us to deliver solutions that address 
              your unique challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                solution={industry.solution}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Industry, Our Expertise
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't see your industry listed? We work with businesses across all sectors. 
            Let's discuss how we can help you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

