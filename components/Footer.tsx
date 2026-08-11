import Link from 'next/link';
import Image from 'next/image';
import { Mail, Globe, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="RR Software Solutions"
                width={56}
                height={56}
                className="object-contain rounded-sm bg-white p-1"
              />
              <div>
                <h3 className="font-display text-base font-bold tracking-wide text-white">
                  RR Software Solutions
                </h3>
                <p className="text-xs tracking-[0.16em] uppercase text-navy-300 mt-0.5">
                  Build to scale
                </p>
              </div>
            </Link>
            <p className="text-navy-300 mb-5 text-sm leading-relaxed">
              Houston-based technology partner for software, cloud, healthcare revenue operations,
              and IT talent.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-navy-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="text-navy-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="text-navy-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold tracking-wide mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                ['/', 'Home'],
                ['/about', 'About'],
                ['/services', 'Services'],
                ['/industries', 'Industries'],
                ['/careers', 'Careers'],
                ['/contact', 'Contact'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-navy-300 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold tracking-wide mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center text-navy-300">
                <Mail size={16} className="mr-2 shrink-0" />
                <a
                  href="mailto:surya@rrsoftsolutions.net"
                  className="hover:text-white transition-colors"
                >
                  surya@rrsoftsolutions.net
                </a>
              </li>
              <li className="flex items-center text-navy-300">
                <Globe size={16} className="mr-2 shrink-0" />
                <a
                  href="https://www.rrsoftsolutions.net"
                  className="hover:text-white transition-colors"
                >
                  www.rrsoftsolutions.net
                </a>
              </li>
              <li className="flex items-center text-navy-300">
                <Phone size={16} className="mr-2 shrink-0" />
                <a href="tel:+14702130571" className="hover:text-white transition-colors">
                  +1 (470) 213-0571
                </a>
              </li>
            </ul>
            <p className="text-navy-300 text-sm mt-5 leading-relaxed">
              17350 State Hwy 249, Ste 220, Houston, TX 77064
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-navy-400 text-sm">
            &copy; {currentYear} RR Software Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
