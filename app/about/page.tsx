import { Metadata } from 'next';
import { Target, Eye, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about RR soft solutions - combining human creativity with cutting-edge technology to help businesses grow.',
};

export default function AboutPage() {
  const industries = [
    'Healthcare & RCM',
    'Banking & Financial Services',
    'IT & Technology',
    'Ecommerce & Retail',
    'Education & Training',
    'Manufacturing & Logistics',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Combining human creativity with cutting-edge technology to empower businesses worldwide.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              Who We Are
            </h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                RR soft solutions is a leading technology services company dedicated to 
                empowering businesses through innovative software solutions and strategic IT consulting. 
                With a global presence spanning India, USA, and the Middle East, we bring together 
                talented professionals who are passionate about solving complex business challenges.
              </p>
              <p>
                Our team combines deep technical expertise with industry knowledge to deliver 
                solutions that drive real business value. We don't just write code—we create 
                intelligent systems that help organizations work smarter, serve their customers 
                better, and grow faster.
              </p>
              <p>
                Founded with a vision to bridge the gap between technology and business needs, 
                we've grown into a trusted partner for companies across multiple industries. 
                Our success is built on a foundation of technical excellence, customer focus, 
                and a commitment to delivering results that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <Eye size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted technology partner for businesses worldwide, known for 
                innovation, excellence, and the ability to turn complex challenges into 
                elegant solutions.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <Target size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses through cutting-edge technology solutions, exceptional 
                talent, and strategic guidance that drives sustainable growth and competitive 
                advantage.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-indigo-600 mb-4">
                <Globe size={48} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <p className="text-gray-600">
                We combine human creativity with cutting-edge technology, focusing on 
                understanding your unique needs and delivering solutions that create 
                measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our expertise spans multiple industries, allowing us to bring deep domain knowledge 
            and best practices to every project we undertake.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-100 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Why Choose RR soft solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <p className="text-indigo-100">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-indigo-100">Successful Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200+</div>
              <p className="text-indigo-100">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">3</div>
              <p className="text-indigo-100">Global Offices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

