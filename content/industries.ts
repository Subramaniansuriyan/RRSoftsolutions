export type IndustryIconName =
  | 'heart'
  | 'building'
  | 'monitor'
  | 'cart'
  | 'graduation'
  | 'package';

export interface Industry {
  id: string;
  icon: IndustryIconName;
  title: string;
  shortTitle: string;
  description: string;
  solution: string;
}

export const industries: Industry[] = [
  {
    id: 'healthcare',
    icon: 'heart',
    shortTitle: 'Healthcare',
    title: 'Healthcare',
    description:
      'Healthcare organizations need IT talent who understand compliance, clinical systems, and delivery pressure. We staff and recruit for roles that keep operations moving.',
    solution:
      'IT staffing, contract-to-hire, and RPO for healthcare IT, EMR/EHR, and operations technology teams.',
  },
  {
    id: 'banking',
    icon: 'building',
    shortTitle: 'Banking',
    title: 'Banking & Financial Services',
    description:
      'Financial institutions modernizing cores and channels need screened specialists who can work inside regulated environments.',
    solution:
      'Direct hire and contract talent for core banking, payments, security, and digital channels — plus consulting on modernization roadmaps.',
  },
  {
    id: 'it',
    icon: 'monitor',
    shortTitle: 'IT & SaaS',
    title: 'IT & Technology',
    description:
      'Product and platform teams that need to ship faster without a six-month search for senior engineers.',
    solution:
      'Offshore delivery teams, staff augmentation, and RPO for engineering, DevOps, QA, and data roles.',
  },
  {
    id: 'ecommerce',
    icon: 'cart',
    shortTitle: 'Retail',
    title: 'Ecommerce & Retail',
    description:
      'Retail and ecommerce companies competing on experience need technology talent that can scale with seasonal hiring and new channels.',
    solution:
      'Flexible staffing and recruiting capacity for ecommerce, inventory, and customer-facing platforms.',
  },
  {
    id: 'education',
    icon: 'graduation',
    shortTitle: 'Education',
    title: 'Education & Training',
    description:
      'Institutions and training providers need reliable IT hiring without standing up a large internal recruiting bench.',
    solution:
      'Staffing and RPO for learning platforms, student systems, and campus technology teams.',
  },
  {
    id: 'manufacturing',
    icon: 'package',
    shortTitle: 'Logistics',
    title: 'Manufacturing & Logistics',
    description:
      'Operations-heavy companies need IT people who understand ERP, supply chain, and plant-floor constraints.',
    solution:
      'Contract, contract-to-hire, and consulting support for ERP, warehouse, and tracking systems.',
  },
];
