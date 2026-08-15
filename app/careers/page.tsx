import { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PageCta from '@/components/PageCta';
import ProcessSteps from '@/components/ProcessSteps';
import CareersInteractive from '@/components/CareersInteractive';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join RR Software Solutions. Explore career paths in recruiting, consulting, and IT delivery with a Houston-based talent partner.',
};

export default function CareersPage() {
  return (
    <div className="bg-white text-navy-900">
      <PageHero
        eyebrow="Careers"
        title="Join a team that builds to scale"
        description="Join recruiters, consultants, and delivery leads who help U.S. companies hire and modernize — whether you join full-time or through our staffing network."
        primaryCta={{ href: '/contact', label: 'Get in touch' }}
        secondaryCta={{
          href: 'mailto:surya@rrsoftsolutions.net?subject=Career%20Opportunity',
          label: 'Send your resume',
        }}
      />

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Process</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Path for talent
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Whether you join as a teammate or take a client engagement through us, we keep the
              process straightforward. Hover or select a step.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <CareersInteractive />

      <section className="py-20 sm:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Culture</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              How we work together
            </h2>
          </div>
          <div className="max-w-3xl space-y-5 text-lg text-navy-500 leading-relaxed">
            <p>
              Collaboration is the default. We document decisions, share context early, and expect
              everyone—from juniors to leads—to ask good questions.
            </p>
            <p>
              Work ranges from filling a single specialist role to running RPO through a hiring
              surge. You will see the impact of the people you place and the roadmaps you shape.
            </p>
            <p>
              Diverse backgrounds strengthen our delivery. We welcome professionals who care about
              craft, reliability, and treating clients and colleagues well.
            </p>
          </div>
        </div>
      </section>

      <PageCta
        eyebrow="Build to scale"
        title="Ready to make an impact?"
        description="Send a resume or note about the work you want next. We will reply with next steps or an honest assessment of fit."
        primaryCta={{ href: '/contact', label: 'Get in touch' }}
        secondaryCta={{
          href: 'mailto:surya@rrsoftsolutions.net?subject=Career%20Opportunity',
          label: 'Send your resume',
        }}
        variant="navy"
      />
    </div>
  );
}
