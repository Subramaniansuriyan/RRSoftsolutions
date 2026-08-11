export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'RR soft solutions rebuilt a critical internal portal on a deadline we thought was unrealistic. The team stayed transparent on risk and still hit launch without drama.',
    name: 'Priya M.',
    role: 'Director of Operations, regional healthcare group',
    initials: 'PM',
  },
  {
    id: '2',
    quote:
      'Their RCM support cleaned up our denial backlog and gave our billing leads tooling they actually use every week. Collections improved within the first quarter.',
    name: 'James R.',
    role: 'Revenue Cycle Lead, multi-site clinic network',
    initials: 'JR',
  },
  {
    id: '3',
    quote:
      'We needed senior cloud help without a six-month hiring hunt. The contractor they placed fit our stack immediately and mentored two juniors along the way.',
    name: 'Elena K.',
    role: 'VP Engineering, B2B SaaS company',
    initials: 'EK',
  },
  {
    id: '4',
    quote:
      'Consulting engagements often end with a report. Here we left with a prioritized roadmap and engineers who could start the first sprint the following week.',
    name: 'Marcus T.',
    role: 'CIO, mid-market manufacturing firm',
    initials: 'MT',
  },
];
