import {
  Heart,
  Building2,
  Monitor,
  ShoppingCart,
  GraduationCap,
  Package,
  type LucideIcon,
} from 'lucide-react';
import type { IndustryIconName } from '@/content/industries';

const iconMap: Record<IndustryIconName, LucideIcon> = {
  heart: Heart,
  building: Building2,
  monitor: Monitor,
  cart: ShoppingCart,
  graduation: GraduationCap,
  package: Package,
};

export function getIndustryIcon(name: IndustryIconName, size = 28) {
  const Icon = iconMap[name];
  return <Icon size={size} />;
}
