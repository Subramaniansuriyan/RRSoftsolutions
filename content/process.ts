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
      'We clarify goals, constraints, skills, and success criteria—whether you are staffing a team or starting a software engagement.',
  },
  {
    step: 2,
    title: 'Match & Design',
    description:
      'We shortlist people or shape a technical approach, then align on scope, timeline, and how we will work together day to day.',
  },
  {
    step: 3,
    title: 'Validate Fit',
    description:
      'You evaluate candidates or prototypes with structured feedback. We refine until the direction and people feel right for the work.',
  },
  {
    step: 4,
    title: 'Deliver & Support',
    description:
      'We onboard talent or ship in increments, stay available through ramp-up, and keep improvements moving after go-live.',
  },
];
