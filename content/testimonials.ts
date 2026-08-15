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
      'Open requisitions were stalling delivery every week. RR Software Solutions sent screened, interview-ready engineers — we filled two senior roles without a six-month search.',
    name: 'Elena K.',
    role: 'VP Engineering, B2B SaaS company',
    initials: 'EK',
  },
  {
    id: '2',
    quote:
      'Consulting engagements often end with a report. Here we left with a prioritized roadmap and engineers who could start the first sprint the following week.',
    name: 'Marcus T.',
    role: 'CIO, mid-market manufacturing firm',
    initials: 'MT',
  },
  {
    id: '3',
    quote:
      'Hiring volume outpaced our internal recruiters. Their RPO team ran sourcing and screening under our brand so managers only sat in final-round interviews.',
    name: 'Priya M.',
    role: 'Director of Talent, regional healthcare group',
    initials: 'PM',
  },
  {
    id: '4',
    quote:
      'The contractor they placed fit our stack immediately and mentored two juniors along the way. Contract terms were clear from day one — including the path to convert.',
    name: 'James R.',
    role: 'IT Director, multi-site operations',
    initials: 'JR',
  },
];
