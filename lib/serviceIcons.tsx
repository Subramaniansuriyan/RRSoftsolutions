import { LineChart, Users, UserSearch, type LucideIcon } from 'lucide-react';
import type { ServiceIconName } from '@/content/services';

const iconMap: Record<ServiceIconName, LucideIcon> = {
  users: Users,
  lineChart: LineChart,
  userSearch: UserSearch,
};

export function getServiceIcon(name: ServiceIconName, size = 40) {
  const Icon = iconMap[name];
  return <Icon size={size} />;
}
