import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCta from '@/components/PageCta';
import IndustriesExplorer from '@/components/IndustriesExplorer';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'RR Software Solutions provides technology solutions for healthcare, banking, IT, ecommerce, education, and manufacturing.',
};

export default function IndustriesPage() {
  return (
    <div className="bg-white text-navy-900">
      <PageHero
        eyebrow="Industries"
        title="Domain expertise that sharpens delivery"
        description="Specialized technology and talent approaches for sectors where compliance, uptime, and customer experience are non-negotiable."
        primaryCta={{ href: '/contact', label: 'Get in touch' }}
        secondaryCta={{ href: '/services', label: 'View services' }}
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Focus areas</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Deep domain expertise
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Select an industry to see how we approach challenges and the solutions we typically
              deliver.
            </p>
          </div>
          <IndustriesExplorer />
        </div>
      </section>

      <PageCta
        eyebrow="Not listed?"
        title="Your industry, our expertise"
        description="Don't see your sector called out? We work across verticals. Let's discuss how software, cloud, RCM, or staffing can help."
        primaryCta={{ href: '/contact', label: 'Get in touch' }}
        secondaryCta={{ href: '/about', label: 'About us' }}
        variant="navy"
      />
    </div>
  );
}
