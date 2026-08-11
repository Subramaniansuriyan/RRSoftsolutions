import Hero from '@/components/Hero';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StaffingCalculator from '@/components/StaffingCalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSteps from '@/components/ProcessSteps';
import StatsStrip from '@/components/StatsStrip';
import Testimonials from '@/components/Testimonials';
import ServicesExplorer from '@/components/ServicesExplorer';

export default function Home() {
  return (
    <div className="bg-white text-navy-900">
      <Hero />

      <section className="py-20 sm:py-28 border-t border-navy-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Capabilities</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              What we do
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Expand a capability to see how we help—click any row to dig in.
            </p>
          </div>
          <ServicesExplorer />
        </div>
      </section>

      <section id="estimator" className="py-20 sm:py-28 bg-navy-50 home-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Staffing</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Cost estimator
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Pick a role and level—totals update instantly for a side-by-side comparison.
            </p>
          </div>
          <div className="max-w-4xl">
            <StaffingCalculator />
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
          <div className="max-w-2xl mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Engagement</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              How we work
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Hover or select a step to walk through the engagement path.
            </p>
          </div>
          <ProcessSteps />
          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center text-navy-800 font-semibold tracking-wide hover:text-navy-600 transition-colors"
            >
              Start a conversation
              <ArrowRight className="ml-2" size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 home-band-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsStrip variant="brand" />
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Proof</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              What clients say
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Browse quotes with the controls—or let the carousel advance on its own.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="py-20 sm:py-28 border-t border-navy-100 home-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-display text-xs tracking-[0.2em] uppercase text-navy-500 mb-4">
              Build to scale
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              Ready for the next system—or the next hire?
            </h2>
            <p className="text-lg text-navy-500 mb-10 leading-relaxed">
              Tell us about your roadmap, delivery pressure, or open roles. We will recommend a
              clear next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-navy-800 text-white px-7 py-3.5 font-semibold tracking-wide hover:bg-navy-900 transition-colors"
              >
                Get started
                <ArrowRight className="ml-2" size={18} aria-hidden />
              </Link>
              <Link
                href="/#estimator"
                className="inline-flex items-center justify-center border border-navy-800 text-navy-800 px-7 py-3.5 font-semibold tracking-wide hover:bg-navy-800 hover:text-white transition-colors"
              >
                Try the estimator
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
