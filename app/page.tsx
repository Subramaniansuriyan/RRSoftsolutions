import Hero from '@/components/Hero';
import Link from 'next/link';
import { Code, LineChart, Cloud, FileText, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  const coreOfferings = [
    {
      icon: <Code size={40} />,
      title: 'Software Development',
      description: 'Custom solutions tailored to your business needs',
    },
    {
      icon: <LineChart size={40} />,
      title: 'IT Consulting',
      description: 'Strategic guidance for digital transformation',
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud Management',
      description: 'Scalable and secure cloud infrastructure',
    },
    {
      icon: <FileText size={40} />,
      title: 'RCM',
      description: 'Revenue cycle management solutions',
    },
    {
      icon: <Users size={40} />,
      title: 'Staffing',
      description: 'Top IT talent for your team',
    },
  ];

  return (
    <div>
      <Hero />

      {/* About Summary Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              At RR soft solutions, we believe technology is more than code—it's about 
              creating smarter ways to help people and businesses grow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {coreOfferings.map((offering, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-indigo-600 flex justify-center mb-4">
                  {offering.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {offering.title}
                </h3>
                <p className="text-gray-600 text-sm">{offering.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              Explore Our Services
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Ready to transform your business with technology? Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/about"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
