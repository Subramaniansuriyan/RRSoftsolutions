'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  TrendingUp,
  Heart,
  Globe,
  Lightbulb,
  Award,
  ArrowRight,
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Clear skills ladders, mentorship, and project variety that stretch your craft.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Flexible arrangements so strong delivery and personal commitments can coexist.',
  },
  {
    icon: Globe,
    title: 'Meaningful Clients',
    description: 'Collaborate with U.S. hiring managers and IT leaders on staffing, consulting, and RPO work.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Culture',
    description: 'Room to try better tools and approaches when they improve outcomes.',
  },
  {
    icon: Award,
    title: 'Competitive Benefits',
    description: 'Fair compensation packages matched to your experience and impact.',
  },
  {
    icon: Users,
    title: 'Collaborative Team',
    description: 'Work with practitioners who value clear writing, honest estimates, and respect.',
  },
];

const openRoles = [
  'Software Engineers',
  'Full Stack Developers',
  'Cloud Architects',
  'DevOps Engineers',
  'UI/UX Designers',
  'Project Managers',
  'Business Analysts',
  'QA Engineers',
];

export default function CareersInteractive() {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [selectedRole, setSelectedRole] = useState(openRoles[0]);

  const ActiveIcon = benefits[activeBenefit].icon;

  return (
    <>
      <section className="py-20 sm:py-28 bg-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Benefits</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Why work with us?
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Select a theme to see how we support people—not just fill slots.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                const isActive = i === activeBenefit;
                return (
                  <button
                    key={benefit.title}
                    type="button"
                    onClick={() => setActiveBenefit(i)}
                    onMouseEnter={() => setActiveBenefit(i)}
                    className={`text-left p-5 border transition-all duration-200 ${
                      isActive
                        ? 'bg-navy-800 text-white border-navy-800'
                        : 'bg-white text-navy-900 border-navy-200 hover:border-navy-400'
                    }`}
                  >
                    <Icon
                      size={22}
                      className={isActive ? 'text-white mb-3' : 'text-navy-700 mb-3'}
                      aria-hidden
                    />
                    <h3 className="font-display font-bold text-base mb-1">{benefit.title}</h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isActive ? 'text-white/80' : 'text-navy-500'
                      }`}
                    >
                      {benefit.description}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="bg-white border border-navy-200 p-8 sm:p-10 flex flex-col justify-center min-h-[16rem]">
              <div className="text-navy-800 mb-5">
                <ActiveIcon size={36} aria-hidden />
              </div>
              <p className="text-xs tracking-[0.18em] uppercase text-navy-500 mb-2">Focus</p>
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-3">
                {benefits[activeBenefit].title}
              </h3>
              <p className="text-navy-500 leading-relaxed text-lg">
                {benefits[activeBenefit].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs tracking-[0.2em] uppercase text-navy-500 mb-3">Openings</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Roles we hire for
            </h2>
            <p className="text-lg text-navy-500 leading-relaxed">
              Select a role of interest—your application note will reference it when you reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {openRoles.map((role) => {
              const isSelected = role === selectedRole;
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`px-4 py-4 text-sm font-semibold border text-left transition-colors ${
                    isSelected
                      ? 'bg-navy-800 text-white border-navy-800'
                      : 'bg-white text-navy-800 border-navy-200 hover:border-navy-500'
                  }`}
                >
                  {role}
                </button>
              );
            })}
          </div>

          <div className="border border-navy-200 bg-navy-50 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.18em] uppercase text-navy-500 mb-2">Selected</p>
              <p className="font-display text-xl font-bold text-navy-900">{selectedRole}</p>
              <p className="text-navy-500 text-sm mt-1">
                Share your profile even if titles differ—we match skills to need.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-navy-800 text-white px-6 py-3 font-semibold tracking-wide hover:bg-navy-900 transition-colors"
              >
                Get in touch
                <ArrowRight className="ml-2" size={16} aria-hidden />
              </Link>
              <a
                href={`mailto:surya@rrsoftsolutions.net?subject=${encodeURIComponent(
                  `Career opportunity — ${selectedRole}`
                )}`}
                className="inline-flex items-center justify-center border border-navy-800 text-navy-800 px-6 py-3 font-semibold tracking-wide hover:bg-navy-800 hover:text-white transition-colors"
              >
                Email resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
