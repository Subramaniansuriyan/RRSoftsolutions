export type ServiceIconName =
  | 'code'
  | 'lineChart'
  | 'cloud'
  | 'dollarSign'
  | 'users';

export interface Service {
  id: string;
  icon: ServiceIconName;
  shortTitle: string;
  title: string;
  shortDescription: string;
  description: string;
  benefit: string;
}

export const services: Service[] = [
  {
    id: 'software',
    icon: 'code',
    shortTitle: 'Software Development',
    title: 'Custom Software Development',
    shortDescription: 'Applications built around your workflows, not generic templates.',
    description:
      'We design and ship web, mobile, and enterprise systems that fit how your teams already work. From early architecture choices to launch and handover, we use proven engineering practices so products stay maintainable as you grow.',
    benefit: 'Ship software that matches your goals, processes, and long-term roadmap',
  },
  {
    id: 'consulting',
    icon: 'lineChart',
    shortTitle: 'IT Consulting',
    title: 'IT Consulting & Digital Transformation',
    shortDescription: 'Clear technology direction for modernization and growth.',
    description:
      'Our consultants help you prioritize where technology moves the needle—legacy modernization, platform choices, and operating models. You get practical roadmaps and guidance through delivery, not slide decks that sit unused.',
    benefit: 'Move from ideas to an actionable technology plan your team can execute',
  },
  {
    id: 'cloud',
    icon: 'cloud',
    shortTitle: 'Cloud Management',
    title: 'Cloud & Infrastructure Management',
    shortDescription: 'Secure, scalable environments on major cloud platforms.',
    description:
      'We plan migrations, harden environments, and manage day-to-day infrastructure on AWS, Azure, and Google Cloud. Focus stays on reliability, cost control, and security posture appropriate to your industry.',
    benefit: 'Run on infrastructure designed for scale, resilience, and lower operational risk',
  },
  {
    id: 'rcm',
    icon: 'dollarSign',
    shortTitle: 'RCM',
    title: 'Revenue Cycle Management (RCM)',
    shortDescription: 'Healthcare revenue operations that protect cash flow.',
    description:
      'For healthcare organizations, we support billing operations, coding accuracy, claims workflow, and denial follow-up. The goal is cleaner submissions, faster payment cycles, and compliance-minded processes.',
    benefit: 'Improve collections performance and reduce preventable claim leakage',
  },
  {
    id: 'staffing',
    icon: 'users',
    shortTitle: 'Staffing',
    title: 'IT Staffing & Talent Acquisition',
    shortDescription: 'Contract, contract-to-hire, and permanent technology talent.',
    description:
      'We source, screen, and present engineers and specialists who fit your stack and culture—for short-term projects or lasting hires. Vetting covers skills, communication, and readiness for real delivery.',
    benefit: 'Access carefully screened IT professionals on a timeline that matches your need',
  },
];
