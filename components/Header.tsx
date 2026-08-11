'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-navy-100 fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 min-w-0">
            <Image
              src="/logo.png"
              alt="RR Software Solutions"
              width={48}
              height={48}
              className="object-contain h-11 w-11"
              priority
            />
            <span className="hidden sm:block font-display text-sm font-bold tracking-wide text-navy-800 truncate">
              RR Software Solutions
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy-600 hover:text-navy-900 transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-navy-800 text-white px-4 py-2 text-sm font-semibold tracking-wide hover:bg-navy-900 transition-colors duration-200"
            >
              Hire talent
            </Link>
          </div>

          <button
            className="md:hidden text-navy-800 hover:text-navy-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-navy-100 mt-1 pt-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-navy-700 hover:text-navy-900 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-navy-800 text-white px-4 py-2.5 font-semibold tracking-wide hover:bg-navy-900 transition-colors duration-200 text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire talent
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
