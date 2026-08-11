'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/content/stats';

function parseStat(value: string): { target: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: Number(match[1]), suffix: match[2] };
}

function useCountUp(target: number, enabled: boolean, duration = 1400) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!enabled) return;
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [enabled, target, duration]);

  return count;
}

function StatItem({
  value,
  label,
  active,
  brand,
}: {
  value: string;
  label: string;
  active: boolean;
  brand: boolean;
}) {
  const { target, suffix } = parseStat(value);
  const count = useCountUp(target, active);

  return (
    <div className={brand ? 'text-left' : 'text-center'}>
      <div
        className={`font-display text-4xl sm:text-5xl font-bold mb-2 tabular-nums ${
          brand ? 'text-white' : 'text-navy-800'
        }`}
      >
        {active ? count : 0}
        {suffix}
      </div>
      <p className={`text-sm tracking-wide ${brand ? 'text-white/75' : 'text-navy-500'}`}>
        {label}
      </p>
    </div>
  );
}

interface StatsStripProps {
  variant?: 'light' | 'brand';
}

export default function StatsStrip({ variant = 'light' }: StatsStripProps) {
  const isBrand = variant === 'brand';
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
      {stats.map((stat) => (
        <StatItem
          key={stat.label}
          value={stat.value}
          label={stat.label}
          active={active}
          brand={isBrand}
        />
      ))}
    </div>
  );
}
