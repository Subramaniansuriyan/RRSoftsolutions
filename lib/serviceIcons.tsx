import {
  Code,
  LineChart,
  Cloud,
  DollarSign,
  Users,
  type LucideIcon,
} from 'lucide-react';
import type { ServiceIconName } from '@/content/services';

const iconMap: Record<ServiceIconName, LucideIcon> = {
  code: Code,
  lineChart: LineChart,
  cloud: Cloud,
  dollarSign: DollarSign,
  users: Users,
};

export function getServiceIcon(name: ServiceIconName, size = 40) {
  const Icon = iconMap[name];
  return <Icon size={size} />;
}
