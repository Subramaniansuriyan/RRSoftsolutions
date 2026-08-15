export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Understand the Need',
    description:
      'We clarify roles, skills, hiring volume, and success criteria — whether you need one specialist, an extended team, or a managed recruiting engine.',
  },
  {
    step: 2,
    title: 'Source & Screen',
    description:
      'We source actively and passively, then technically screen candidates so your hiring managers only see people ready for a real conversation.',
  },
  {
    step: 3,
    title: 'Validate Fit',
    description:
      'You interview a shortlist or review a roadmap with structured feedback. We refine until the people and the plan feel right for the work.',
  },
  {
    step: 4,
    title: 'Deliver & Support',
    description:
      'We onboard talent, run pipeline reporting, or stay on as implementation support — with a named point of contact through ramp-up.',
  },
];
