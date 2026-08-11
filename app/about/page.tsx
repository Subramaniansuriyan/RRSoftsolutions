import { Metadata } from 'next';
import Link from 'next/link';
import { Target, Eye, Compass, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import StatsStrip from '@/components/StatsStrip';
import WhyChooseUs from '@/components/WhyChooseUs';
import { industries } from '@/content/industries';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about RR Software Solutions — a Houston technology partner for software, cloud, healthcare RCM, and IT staffing.',
};

const pillars = [
  {
    icon: Eye,
    title: 'Our Vision',
    body: 'To be the trusted technology and talent partner companies call when the work has to hold up under real operational pressure.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    body: 'To help businesses modernize systems and strengthen teams with honest advice, skilled people, and delivery that respects both budget and quality.',
  },
  {
    icon: Compass,
    title: 'Our Approach',
    body: 'Understand the workflow first. Choose tools and people second. Measure success by outcomes your stakeholders can see—not features left unused.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-navy-900">
      <PageHero
        eyebrow="About"
        title="A Houston partner built to scale with you"
        description="Engineering craft and careful talent matching so businesses can grow with confidence—software, cloud, healthcare revenue operations, and staffing."
        primaryCta={{ href: '/contact', label: 'Talk to us' }}
        secondaryCta={{ href: '/services', label: 'Our services' }}
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Company</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Who we are
            </h2>
          </div>
          <div className="max-w-3xl space-y-5 text-lg text-navy-500 leading-relaxed">
            <p>
              RR Software Solutions is a technology services company focused on practical outcomes:
              software that ships, cloud environments that stay stable, healthcare revenue processes
              that protect collections, and staffing that fills real skill gaps.
            </p>
            <p>
              Based in Houston, Texas, we work with mid-market and growth-stage organizations that
              need a partner who communicates plainly and follows through. Our people bring domain
              familiarity alongside technical skill—especially in regulated and high-stakes delivery
              contexts.
            </p>
            <p>
              Relationships matter here. Long-term clients stay because we listen, adjust when
              priorities shift, and treat every engagement as a shared responsibility—not a ticket
              queue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-navy-50 home-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Principles</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Vision, mission, approach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-navy-200 bg-white">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`p-8 sm:p-10 ${
                    index < pillars.length - 1 ? 'border-b md:border-b-0 md:border-r border-navy-200' : ''
                  }`}
                >
                  <Icon className="text-navy-800 mb-5" size={32} aria-hidden />
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-navy-500 leading-relaxed">{pillar.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhyChooseUs />
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Markets</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                Industries we serve
              </h2>
              <p className="text-lg text-navy-500 leading-relaxed">
                Domain context makes delivery sharper—especially where compliance, uptime, and
                customer experience matter.
              </p>
            </div>
            <Link
              href="/industries"
              className="inline-flex items-center text-navy-800 font-semibold tracking-wide hover:text-navy-600 transition-colors shrink-0"
            >
              Explore industries
              <ArrowRight className="ml-2" size={18} aria-hidden />
            </Link>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-navy-200">
            {industries.map((industry) => (
              <li
                key={industry.id}
                className="border-b sm:border-r border-navy-200 p-6 bg-white hover:bg-navy-50 transition-colors"
              >
                <p className="font-display font-bold text-navy-900">{industry.title}</p>
                <p className="text-sm text-navy-500 mt-2 line-clamp-2">{industry.solution}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20 home-band-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-10">By the numbers</p>
          <StatsStrip variant="brand" />
        </div>
      </section>
    </div>
  );
}
