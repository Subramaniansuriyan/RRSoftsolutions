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
    title: 'Healthcare & RCM',
    description:
      'We understand the unique challenges of healthcare organizations, from HIPAA awareness to revenue cycle optimization. Our work helps providers improve operations while protecting collections.',
    solution:
      'RCM support, EMR/EHR integration, patient portals, and healthcare analytics platforms.',
  },
  {
    id: 'banking',
    icon: 'building',
    shortTitle: 'Banking',
    title: 'Banking & Financial Services',
    description:
      'Secure, compliant financial technology for institutions modernizing cores, channels, and customer journeys without sacrificing control.',
    solution:
      'Core banking support, mobile banking, payments workflows, and fraud detection systems.',
  },
  {
    id: 'it',
    icon: 'monitor',
    shortTitle: 'IT & SaaS',
    title: 'IT & Technology',
    description:
      'We support product and platform teams with software delivery, DevOps automation, and cloud infrastructure so they can ship and scale faster.',
    solution:
      'SaaS platforms, APIs, microservices architecture, and cloud-native applications.',
  },
  {
    id: 'ecommerce',
    icon: 'cart',
    shortTitle: 'Retail',
    title: 'Ecommerce & Retail',
    description:
      'Omnichannel storefronts, inventory systems, and analytics that help retail teams compete online and in-store.',
    solution:
      'Custom ecommerce platforms, inventory management, POS systems, and customer analytics.',
  },
  {
    id: 'education',
    icon: 'graduation',
    shortTitle: 'Education',
    title: 'Education & Training',
    description:
      'Learning platforms and student systems that make programs more accessible and easier to run day to day.',
    solution:
      'LMS platforms, virtual classrooms, student portals, and educational content tools.',
  },
  {
    id: 'manufacturing',
    icon: 'package',
    shortTitle: 'Logistics',
    title: 'Manufacturing & Logistics',
    description:
      'Supply chain, warehouse, and tracking solutions that improve throughput and reduce operational waste.',
    solution:
      'ERP integrations, supply chain optimization, warehouse management, and real-time tracking.',
  },
];
