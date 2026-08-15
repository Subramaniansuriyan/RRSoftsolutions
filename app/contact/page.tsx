import { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Globe, Phone, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import PageCta from '@/components/PageCta';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with RR Software Solutions. Based in Houston, TX — contact us for IT staffing, consulting, and RPO.',
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'surya@rrsoftsolutions.net',
    link: 'mailto:surya@rrsoftsolutions.net',
    hint: 'Best for project briefs and resumes',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (470) 213-0571',
    link: 'tel:+14702130571',
    hint: 'Weekdays, business hours',
  },
  {
    icon: Globe,
    label: 'Website',
    value: 'www.rrsoftsolutions.net',
    link: 'https://www.rrsoftsolutions.net',
    hint: 'Explore services and industries',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-navy-900">
      <PageHero
        eyebrow="Contact"
        title="Start a conversation"
        description="Whether you need IT staffing, a technology roadmap, or RPO support — reach our Houston team and we will respond within one business day."
        primaryCta={{ href: 'mailto:surya@rrsoftsolutions.net', label: 'Email us' }}
        secondaryCta={{ href: '/services', label: 'View services' }}
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Message</p>
              <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
                Send us a note
              </h2>
              <p className="text-navy-500 mb-8 leading-relaxed">
                Share a bit about your project or hiring need. Validation runs live as you type;
                required fields are marked with an asterisk.
              </p>
              <ContactForm />
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Direct</p>
              <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
                Get in touch
              </h2>
              <p className="text-navy-500 mb-8 leading-relaxed">
                Prefer email or phone? Use the channels below—each opens your default app.
              </p>

              <ul className="border border-navy-200 divide-y divide-navy-100 mb-10">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <li key={info.label}>
                      <a
                        href={info.link}
                        className="flex items-start gap-4 p-5 sm:p-6 hover:bg-navy-50 transition-colors group"
                      >
                        <span className="text-navy-800 mt-0.5">
                          <Icon size={22} aria-hidden />
                        </span>
                        <span>
                          <span className="text-xs tracking-[0.16em] uppercase text-navy-500 block mb-1">
                            {info.label}
                          </span>
                          <span className="font-semibold text-navy-900 group-hover:text-navy-700 transition-colors block">
                            {info.value}
                          </span>
                          <span className="text-sm text-navy-500 mt-1 block">{info.hint}</span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="bg-navy-800 text-white p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold mb-3 flex items-center gap-2">
                  <MapPin size={22} aria-hidden />
                  Our office
                </h3>
                <p className="text-xs tracking-[0.16em] uppercase text-white/60 mb-2">
                  USA — Houston, TX
                </p>
                <p className="text-white/90 leading-relaxed">
                  17350 State Hwy 249, Ste 220
                  <br />
                  Houston, TX 77064
                </p>
                <Link
                  href="https://maps.google.com/?q=17350+State+Hwy+249+Ste+220+Houston+TX+77064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-5 text-sm font-semibold text-white underline underline-offset-4 hover:text-navy-100"
                >
                  Open in maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Next step"
        title="Ready to start?"
        description="Schedule a consultation by email, or review our full service list before you reach out."
        primaryCta={{ href: 'mailto:surya@rrsoftsolutions.net', label: 'Schedule a consultation' }}
        secondaryCta={{ href: '/services', label: 'View our services' }}
        variant="navy"
      />
    </div>
  );
}
