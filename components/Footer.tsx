import Link from 'next/link';
import Image from 'next/image';
import { Mail, Globe, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo_new.png"
                alt="RR soft solutions"
                width={60}
                height={60}
                className="object-contain brightness-0 invert"
              />
              <h3 className="text-xl font-bold text-indigo-400">
                soft solutions
              </h3>
            </Link>
            <p className="text-gray-400 mb-4">
              Empowering businesses through technology and people. Turning ideas into digital reality.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:rahul@rrsoftsolutions.com" className="hover:text-indigo-400">
                  rahul@rrsoftsolutions.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Globe size={16} className="mr-2" />
                <a href="https://www.rrsoftwsolutions.com" className="hover:text-indigo-400">
                  www.rrsoftwsolutions.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:+919176673736" className="hover:text-indigo-400">
                  +1 (470) 021-30571
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-400 text-sm">
                <strong>Offices:</strong> India, USA, Middle East
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} RR Soft Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

