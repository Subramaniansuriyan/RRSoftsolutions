export type ServiceIconName = 'users' | 'lineChart' | 'userSearch';

export interface ServiceLine {
  title: string;
  description: string;
}

export interface ServiceCta {
  href: string;
  label: string;
}

export interface Service {
  id: string;
  icon: ServiceIconName;
  shortTitle: string;
  title: string;
  shortDescription: string;
  description: string;
  linesHeading: string;
  lines: ServiceLine[];
  whyHeading: string;
  whyPoints: string[];
  ctas: ServiceCta[];
  metaDescription: string;
}

export const services: Service[] = [
  {
    id: 'staffing',
    icon: 'users',
    shortTitle: 'IT Staffing',
    title: 'IT Staffing & Talent Acquisition',
    shortDescription:
      'Contract, contract-to-hire, and permanent technology talent — built around U.S. delivery.',
    description:
      'Hiring technology talent on your own timeline is hard — good candidates move fast, and open requisitions cost you delivery time every week they sit unfilled. RR Software Solutions gives U.S. companies a faster, more flexible way to staff IT roles, whether that means an extended delivery team, a single specialist, or a direct hire. Every candidate is technically screened before you ever see a resume, so your team spends time interviewing, not filtering.',
    linesHeading: 'Core service lines',
    lines: [
      {
        title: 'Offshore / Dedicated Delivery Teams',
        description:
          'Extended engineering teams based in India, working on U.S. time-zone overlap with a named delivery lead and single point of contact. Built for companies that want senior technical depth at a materially lower fully-loaded cost, without managing overseas hiring or infrastructure directly.',
      },
      {
        title: 'Direct Hire / Permanent Placement',
        description:
          'Full-cycle search and placement for permanent technology roles, with a clearly stated fee structure agreed upfront. We source, screen, and present a shortlist so your team interviews only qualified candidates.',
      },
      {
        title: 'Contract-to-Hire',
        description:
          "The most common bridge between short-term staff augmentation and a full-time hire. Bring someone on to prove fit on real work, then convert to permanent when you're ready — with the contract terms defined from day one.",
      },
      {
        title: 'Project-Based / SOW Delivery',
        description:
          'Managed delivery against a defined scope and milestones, distinct from staff augmentation. A named team is accountable for outcomes, not just hours — suited to discrete builds, migrations, or time-boxed initiatives.',
      },
      {
        title: 'Payrolling / Vendor-of-Record (VOR)',
        description:
          "Already found your candidate? We handle employment, payroll, compliance, and benefits administration so you can onboard someone you've sourced without adding them to your own payroll.",
      },
    ],
    whyHeading: 'Why U.S. companies work with RR for staffing',
    whyPoints: [
      'Pre-vetted technical talent — reduce time-to-fill without lowering the bar',
      'Transparent, stated rate and fee structures, no hidden markups',
      'Flexible engagement models that scale up or down with your hiring plan',
      'A single point of accountability across offshore and domestic placements',
    ],
    ctas: [
      { href: '/contact', label: 'Discuss your staffing needs' },
      { href: '/#estimator', label: 'Try the cost estimator' },
    ],
    metaDescription:
      'IT staffing for U.S. companies — offshore delivery teams, direct hire, contract-to-hire, SOW delivery, and payrolling from RR Software Solutions.',
  },
  {
    id: 'consulting',
    icon: 'lineChart',
    shortTitle: 'IT Consulting',
    title: 'IT Consulting & Digital Transformation',
    shortDescription: 'Clear technology direction for modernization and growth.',
    description:
      "Most consulting engagements end with a slide deck. Ours end with a prioritized roadmap and, when you need it, the engineers to start executing it the following week. RR Software Solutions works with U.S. businesses to assess current systems, identify what's slowing the team down, and build a practical plan for modernization — grounded in your actual constraints, not generic best practices.",
    linesHeading: "What's included",
    lines: [
      {
        title: 'Technology & Systems Assessment',
        description:
          "A structured review of your current stack, workflows, and technical debt to identify what's working, what's at risk, and what's blocking growth.",
      },
      {
        title: 'Digital Transformation Strategy',
        description:
          'A prioritized roadmap for modernization, migration, or process automation — sequenced around business impact and delivery capacity, not a one-size-fits-all framework.',
      },
      {
        title: 'Technology Advisory',
        description:
          "Ongoing, practical guidance on architecture decisions, build-vs-buy calls, and vendor evaluation from consultants who've shipped the systems they're advising on.",
      },
      {
        title: 'Implementation Support',
        description:
          "Where most consultants stop, we can continue: pairing strategy with the engineering resources to execute it, so recommendations don't stall for lack of hands.",
      },
    ],
    whyHeading: 'Why U.S. companies work with RR for consulting',
    whyPoints: [
      'Recommendations grounded in a review of your actual systems and team — not generic slideware',
      'A roadmap you can execute, with delivery capacity available if you need it',
      "Responsive engagement — decisions don't stall waiting on a vendor",
    ],
    ctas: [{ href: '/contact', label: 'Discuss your roadmap' }],
    metaDescription:
      'IT consulting for U.S. businesses — technology roadmaps, modernization strategy, and digital transformation from RR Software Solutions.',
  },
  {
    id: 'rpo',
    icon: 'userSearch',
    shortTitle: 'RPO',
    title: 'Recruitment Process Outsourcing (RPO)',
    shortDescription: 'Your hiring engine, managed end-to-end.',
    description:
      'When hiring volume outpaces your internal recruiting capacity, RPO gives U.S. companies a way to scale the hiring engine itself — not just fill one role at a time. RR Software Solutions manages sourcing, screening, and pipeline development on your behalf, acting as an extension of your talent team so your hiring managers only see qualified, interview-ready candidates.',
    linesHeading: "What's included",
    lines: [
      {
        title: 'Full-Cycle Sourcing & Screening',
        description:
          'Active and passive candidate sourcing, technical and cultural screening, and pipeline management for one role, one department, or your full IT hiring function.',
      },
      {
        title: 'Scalable Recruiting Capacity',
        description:
          'Flex recruiting bandwidth up during hiring surges (new office, funding round, project ramp-up) without a permanent headcount commitment.',
      },
      {
        title: 'Employer Brand & Candidate Experience',
        description:
          'Consistent, professional candidate communication and process management under your brand, protecting your reputation with every applicant.',
      },
      {
        title: 'Hiring Process & Reporting',
        description:
          'Transparent pipeline visibility, time-to-fill metrics, and process recommendations so leadership can see hiring performance, not just headcount filled.',
      },
    ],
    whyHeading: 'Why U.S. companies work with RR for RPO',
    whyPoints: [
      'Recruiting capacity that flexes with hiring volume, not fixed internal headcount',
      'Faster time-to-fill through dedicated, always-on sourcing',
      'Your hiring managers focus on final-round interviews, not resume screening',
    ],
    ctas: [{ href: '/contact', label: 'Talk to us about RPO' }],
    metaDescription:
      'RPO for U.S. companies — outsourced sourcing, screening, and pipeline management for IT hiring, from RR Software Solutions.',
  },
];
