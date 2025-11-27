import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { Code, LineChart, Cloud, DollarSign, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore our comprehensive range of IT services including custom software development, IT consulting, cloud management, RCM, and staffing solutions.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Custom Software Development',
      description:
        'We build tailored software solutions that address your unique business challenges. From web and mobile applications to enterprise systems, our developers create scalable, secure, and user-friendly applications using the latest technologies and best practices.',
      benefit: 'Get solutions perfectly aligned with your business goals and workflows',
    },
    {
      icon: <LineChart size={48} />,
      title: 'IT Consulting & Digital Transformation',
      description:
        'Navigate the digital landscape with confidence. Our consultants help you develop technology strategies, modernize legacy systems, and implement digital solutions that drive efficiency and innovation. We provide strategic guidance every step of the way.',
      benefit: 'Transform your business with strategic technology roadmaps',
    },
    {
      icon: <Cloud size={48} />,
      title: 'Cloud & Infrastructure Management',
      description:
        'Leverage the power of cloud computing with our comprehensive cloud services. We help you migrate, manage, and optimize your cloud infrastructure across AWS, Azure, and Google Cloud. Our solutions ensure scalability, security, and cost-effectiveness.',
      benefit: 'Achieve 99.9% uptime with scalable and secure cloud solutions',
    },
    {
      icon: <DollarSign size={48} />,
      title: 'Revenue Cycle Management (RCM)',
      description:
        'Optimize your healthcare revenue cycle with our specialized RCM solutions. We provide end-to-end services including medical billing, coding, claims management, and denial management to maximize your revenue while ensuring compliance with healthcare regulations.',
      benefit: 'Increase revenue collection by up to 30% and reduce claim denials',
    },
    {
      icon: <Users size={48} />,
      title: 'IT Staffing & Talent Acquisition',
      description:
        'Build high-performing teams with our IT staffing services. We connect you with top-tier technology professionals for contract, contract-to-hire, and permanent positions. Our rigorous vetting process ensures you get skilled professionals who fit your culture.',
      benefit: 'Access pre-vetted IT talent within 48 hours',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Comprehensive technology solutions designed to help your business thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                benefit={service.benefit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business objectives.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}

