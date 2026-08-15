export interface CalculatorRole {
  id: string;
  label: string;
  /** Illustrative baseline hourly USD for traditional domestic fully loaded cost */
  traditionalHourly: number;
}

export interface CalculatorLevel {
  id: string;
  label: string;
  /** Multiplier applied to baseline hourly rates */
  multiplier: number;
}

export const calculatorRoles: CalculatorRole[] = [
  { id: 'fullstack', label: 'Full Stack Engineer', traditionalHourly: 95 },
  { id: 'cloud', label: 'Cloud / DevOps Engineer', traditionalHourly: 105 },
  { id: 'data', label: 'Data / AI Engineer', traditionalHourly: 110 },
  { id: 'qa', label: 'QA Automation Engineer', traditionalHourly: 80 },
  { id: 'healthcare', label: 'Healthcare IT Specialist', traditionalHourly: 90 },
  { id: 'cyber', label: 'Cybersecurity Engineer', traditionalHourly: 108 },
  { id: 'salesforce', label: 'Salesforce Developer', traditionalHourly: 100 },
  { id: 'mobile', label: 'Mobile App Developer', traditionalHourly: 95 },
];

export const calculatorLevels: CalculatorLevel[] = [
  { id: 'junior', label: 'Junior (1–2 years)', multiplier: 0.7 },
  { id: 'mid', label: 'Intermediate (3–5 years)', multiplier: 1.0 },
  { id: 'senior', label: 'Senior (5–8 years)', multiplier: 1.3 },
  { id: 'expert', label: 'Principal / Expert (8+ years)', multiplier: 1.55 },
];

/** Typical billable hours used for monthly estimates */
export const HOURS_PER_MONTH = 160;

/**
 * RR-supported engagement as an illustrative share of traditional fully loaded cost.
 * Purely educational—not a live quote.
 */
export const RR_RATE_FACTOR = 0.58;

/** Extra traditional cost factors (benefits + overhead) as share of base pay hourly */
export const TRADITIONAL_BENEFITS_FACTOR = 0.12;
export const TRADITIONAL_OTHER_FACTOR = 0.08;

export interface CostBreakdown {
  hourlyPay: number;
  monthlyBase: number;
  benefits: number;
  other: number;
  total: number;
}

export function computeTraditionalCost(
  baseHourly: number,
  levelMultiplier: number
): CostBreakdown {
  const hourlyPay = baseHourly * levelMultiplier;
  const monthlyBase = hourlyPay * HOURS_PER_MONTH;
  const benefits = monthlyBase * TRADITIONAL_BENEFITS_FACTOR;
  const other = monthlyBase * TRADITIONAL_OTHER_FACTOR;
  return {
    hourlyPay,
    monthlyBase,
    benefits,
    other,
    total: monthlyBase + benefits + other,
  };
}

export function computeRrCost(
  baseHourly: number,
  levelMultiplier: number
): CostBreakdown {
  const traditional = computeTraditionalCost(baseHourly, levelMultiplier);
  const total = traditional.total * RR_RATE_FACTOR;
  const monthlyBase = traditional.monthlyBase * RR_RATE_FACTOR;
  const hourlyPay = traditional.hourlyPay * RR_RATE_FACTOR;
  return {
    hourlyPay,
    monthlyBase,
    benefits: 0,
    other: 0,
    total,
  };
}

export function formatUsd(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}
