import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCta from '@/components/PageCta';
import ServicesDirectory from '@/components/ServicesDirectory';
import ProcessSteps from '@/components/ProcessSteps';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Custom software, IT consulting, cloud infrastructure, healthcare RCM, and IT staffing from RR Software Solutions in Houston.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-navy-900">
      <PageHero
        eyebrow="Services"
        title="Technology and talent that deliver"
        description="Practical software, cloud, consulting, healthcare revenue operations, and staffing—for teams that need dependable delivery, not generic packages."
        primaryCta={{ href: '/contact', label: 'Discuss your needs' }}
        secondaryCta={{ href: '/#estimator', label: 'Staffing estimator' }}
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Catalog</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Explore our services
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Select a capability to read the full description, then browse the full list below.
            </p>
          </div>
          <ServicesDirectory />
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Engagement</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              How engagements run
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Hover or select a step—product delivery and staffing follow the same clear path.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <PageCta
        eyebrow="Build to scale"
        title="Ready to get started?"
        description="Tell us about your product backlog, cloud goals, revenue operations needs, or open roles—we will recommend a clear next step."
        primaryCta={{ href: '/contact', label: 'Contact us today' }}
        secondaryCta={{ href: '/industries', label: 'Industries we serve' }}
      />
    </div>
  );
}
