import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, Globe, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with RR soft solutions. We are available across India, USA, and Middle East. Contact us for consultations and quotes.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'rahul@rrsoftsolutions.com',
      link: 'mailto:rahul@rrsoftsolutions.com',
    },
    {
      icon: <Globe size={24} />,
      label: 'Website',
      value: 'www.rrsoftwsolutions.com',
      link: 'https://www.rrsoftwsolutions.com',
    },
    { 
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+1 (470) 021-30571',
      link: 'tel:+1(470)021-30571',
    },
  ];

  const locations = [
    {
      region: 'India',
      description: 'Our primary development center and headquarters',
    },
    {
      region: 'USA',
      description: 'Serving clients across North America',
    },
    {
      region: 'Middle East',
      description: 'Supporting businesses in the Gulf region',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Let's discuss how we can help transform your business with technology.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Prefer to reach out directly? Use any of the contact methods below.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-indigo-600 mr-4">{info.icon}</div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">{info.label}</p>
                      <a
                        href={info.link}
                        className="text-gray-900 hover:text-indigo-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Locations */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="mr-2 text-indigo-600" size={24} />
                  Our Locations
                </h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg border border-indigo-100"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1">{location.region}</h4>
                      <p className="text-sm text-gray-600">{location.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need a custom software solution, IT consulting, or want to discuss 
            staffing options, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:rahul@rrsoftsolutions.com"
              className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
            >
              Schedule a Consultation
            </a>
            <a
              href="/services"
              className="inline-block bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

