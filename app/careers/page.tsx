import { Metadata } from 'next';
import Link from 'next/link';
import { Users, TrendingUp, Heart, Globe, Lightbulb, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join RR soft solutions and be part of a team that values innovation, growth, and excellence. Explore career opportunities with us.',
};

export default function CareersPage() {
  const benefits = [
    {
      icon: <TrendingUp size={40} />,
      title: 'Career Growth',
      description: 'Continuous learning opportunities and clear career advancement paths.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Work-Life Balance',
      description: 'Flexible working hours and remote work options to maintain healthy balance.',
    },
    {
      icon: <Globe size={40} />,
      title: 'Global Exposure',
      description: 'Work with international clients and collaborate with teams across the globe.',
    },
    {
      icon: <Lightbulb size={40} />,
      title: 'Innovation Culture',
      description: 'Freedom to explore new technologies and implement creative solutions.',
    },
    {
      icon: <Award size={40} />,
      title: 'Competitive Benefits',
      description: 'Attractive compensation packages and comprehensive benefits.',
    },
    {
      icon: <Users size={40} />,
      title: 'Collaborative Team',
      description: 'Work alongside talented professionals in a supportive environment.',
    },
  ];

  const openRoles = [
    'Software Engineers',
    'Full Stack Developers',
    'Cloud Architects',
    'DevOps Engineers',
    'UI/UX Designers',
    'Project Managers',
    'Business Analysts',
    'QA Engineers',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Build your career with a company that values innovation, growth, and excellence.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At RR soft solutions, we believe our people are our greatest asset. 
              We create an environment where talent thrives and innovation flourishes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-indigo-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Culture
            </h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                We foster a culture of collaboration, creativity, and continuous learning. 
                Our team members are encouraged to take ownership, share ideas, and grow 
                both professionally and personally.
              </p>
              <p>
                From day one, you'll work on challenging projects that make a real impact. 
                Whether you're building cutting-edge applications, architecting cloud solutions, 
                or solving complex business problems, your work will matter.
              </p>
              <p>
                We celebrate diversity and believe that different perspectives make us stronger. 
                Our inclusive environment welcomes professionals from all backgrounds who share 
                our passion for excellence and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Open Positions
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Current openings include:
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {openRoles.map((role, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-100 text-center"
                >
                  <p className="font-semibold text-gray-900">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Don't see a specific role listed? We're always interested in meeting talented 
            professionals. Send us your resume and let's talk about how you can contribute 
            to our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:surya@rrsoftsolutions.net?subject=Career Opportunity"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-200"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

