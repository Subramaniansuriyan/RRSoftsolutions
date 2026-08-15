import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCta from '@/components/PageCta';
import ServicesDirectory from '@/components/ServicesDirectory';
import ProcessSteps from '@/components/ProcessSteps';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'IT staffing, IT consulting, and RPO for U.S. companies — offshore delivery teams, direct hire, contract-to-hire, and managed recruiting from RR Software Solutions.',
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-navy-900">
      <PageHero
        eyebrow="Services"
        title="IT talent and technology direction, built to scale"
        description="Staffing, consulting, and recruitment outsourcing for U.S. companies that need dependable delivery — not another vendor in the rotation."
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
              Select IT Staffing, IT Consulting, or RPO to read the full offering.
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
              Hover or select a step — staffing, consulting, and RPO follow a clear path.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <PageCta
        eyebrow="Build to scale"
        title="Ready to get started?"
        description="Tell us about open roles, hiring volume, or a technology roadmap — we will recommend a clear next step."
        primaryCta={{ href: '/contact', label: 'Discuss your needs' }}
        secondaryCta={{ href: '/#estimator', label: 'Try the estimator' }}
      />
    </div>
  );
}
