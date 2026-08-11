'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Code, Cloud, LineChart, Users, DollarSign, ArrowUpRight } from 'lucide-react';

const SCENES = [
  {
    id: 'build',
    label: 'Build',
    title: 'Product engineering',
    description: 'Web, mobile, and enterprise systems shaped around real workflows.',
    href: '/services',
    icon: Code,
    image: '/hero-team.jpg',
  },
  {
    id: 'scale',
    label: 'Scale',
    title: 'Cloud & operations',
    description: 'Infrastructure that stays stable when traffic and teams grow.',
    href: '/services',
    icon: Cloud,
    image: '/hero-workspace.jpg',
  },
  {
    id: 'staff',
    label: 'Staff',
    title: 'IT talent on demand',
    description: 'Screened engineers and specialists ready for delivery.',
    href: '/contact',
    icon: Users,
    image: '/hero-team.jpg',
  },
  {
    id: 'grow',
    label: 'Grow',
    title: 'Consulting & RCM',
    description: 'Roadmaps and healthcare revenue support that move the numbers.',
    href: '/services',
    icon: LineChart,
    image: '/hero-workspace.jpg',
  },
] as const;

export default function HeroVisual() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % SCENES.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotion || !panelRef.current) return;
      const rect = panelRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setOffset({ x, y });
    },
    [reduceMotion]
  );

  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  const scene = SCENES[active];
  const Icon = scene.icon;

  return (
    <div
      ref={panelRef}
      className="relative w-full"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={() => setPaused(true)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
      }}
    >
      <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:mx-0 lg:inset-y-[-12%] lg:left-0 lg:right-[-50vw] bg-navy-800" aria-hidden />

      <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] w-full max-h-[32rem] lg:max-h-none overflow-hidden">
        {/* Parallax image stack */}
        {SCENES.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === active ? 'opacity-100' : 'opacity-0'
            }`}
            style={
              i === active
                ? {
                    transform: `translate(${offset.x * 10}px, ${offset.y * 8}px) scale(1.06)`,
                    transition: reduceMotion ? undefined : 'transform 0.2s ease-out, opacity 0.7s ease',
                  }
                : undefined
            }
            aria-hidden={i !== active}
          >
            <Image
              src={s.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Navy overlays for brand palette */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/55 to-navy-800/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-soft-light"
          style={{
            background: `radial-gradient(circle at ${50 + offset.x * 20}% ${45 + offset.y * 15}%, rgba(255,255,255,0.22), transparent 55%)`,
          }}
          aria-hidden
        />

        {/* Interactive scene content */}
        <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7 lg:p-8">
          <div className="flex flex-wrap gap-2">
            {SCENES.map((s, i) => {
              const TabIcon = s.icon;
              const isActive = i === active;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 border ${
                    isActive
                      ? 'bg-white text-navy-900 border-white'
                      : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                  }`}
                  aria-pressed={isActive}
                >
                  <TabIcon size={14} aria-hidden />
                  {s.label}
                </button>
              );
            })}
          </div>

          <div
            className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 max-w-sm border border-white/40 shadow-lg transition-transform duration-200"
            style={
              reduceMotion
                ? undefined
                : { transform: `translate(${offset.x * -6}px, ${offset.y * -4}px)` }
            }
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="flex h-10 w-10 items-center justify-center bg-navy-800 text-white shrink-0">
                <Icon size={20} aria-hidden />
              </span>
              <div>
                <p className="text-[0.65rem] tracking-[0.18em] uppercase text-navy-500 mb-1">
                  Focus
                </p>
                <h2 className="font-display text-xl font-bold text-navy-900 leading-snug">
                  {scene.title}
                </h2>
              </div>
            </div>
            <p className="text-sm text-navy-500 leading-relaxed mb-4">{scene.description}</p>
            <Link
              href={scene.href}
              className="inline-flex items-center text-sm font-semibold text-navy-800 hover:text-navy-600 transition-colors"
            >
              Explore
              <ArrowUpRight className="ml-1" size={16} aria-hidden />
            </Link>
          </div>

          {/* Progress dots */}
          <div className="flex gap-2" role="tablist" aria-label="Hero scenes">
            {SCENES.map((s, i) => (
              <button
                key={`dot-${s.id}`}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show ${s.label}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Corner brand chip */}
        <div className="absolute top-5 right-5 sm:top-7 sm:right-7 hidden sm:flex items-center gap-2 bg-navy-900/70 text-white text-[0.65rem] tracking-[0.16em] uppercase px-3 py-1.5 border border-white/15">
          <DollarSign size={12} aria-hidden />
          Build to scale
        </div>
      </div>
    </div>
  );
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}
