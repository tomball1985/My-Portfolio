import React, { useState, useEffect, useCallback } from 'react'
import {
  ArrowRight, TrendingUp, Users, Target, Zap, BarChart3,
  Layers, Briefcase,
} from 'lucide-react'

type Route = 'home' | 'engines' | 'campaigns' | 'projects' | 'teams' | 'about' | 'connect'

/* ── Helpers ── */

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ── Core beliefs carousel data ── */

interface Belief {
  title: string
  accent: string
  iconBg: string
  svg: React.JSX.Element
}

const beliefs: Belief[] = [
  {
    title: 'Revenue Aligned',
    accent: 'from-pink-500 to-purple-600',
    iconBg: 'bg-pink-500/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <circle cx="60" cy="40" r="28" stroke="url(#ra1)" strokeWidth="2.5" opacity="0.3" />
        <circle cx="60" cy="40" r="18" stroke="url(#ra1)" strokeWidth="2" opacity="0.5" />
        <circle cx="60" cy="40" r="6" fill="url(#ra1)" />
        <path d="M30 55 L50 35 L70 42 L90 20" stroke="url(#ra1)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="90" cy="20" r="3" fill="#ec4899" />
        <text x="86" y="16" fill="#ec4899" fontSize="8" fontWeight="bold">$</text>
        <defs><linearGradient id="ra1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ec4899"/><stop offset="1" stopColor="#9333ea"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'Brand <> Demand',
    accent: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <circle cx="44" cy="40" r="22" stroke="#a855f7" strokeWidth="2" opacity="0.6" />
        <circle cx="76" cy="40" r="22" stroke="#ec4899" strokeWidth="2" opacity="0.6" />
        <path d="M58 25 Q60 40 58 55" stroke="url(#bd1)" strokeWidth="2.5" opacity="0.8" />
        <path d="M62 25 Q60 40 62 55" stroke="url(#bd1)" strokeWidth="2.5" opacity="0.8" />
        <text x="30" y="43" fill="#a855f7" fontSize="7" fontWeight="bold" opacity="0.7">BRAND</text>
        <text x="67" y="43" fill="#ec4899" fontSize="7" fontWeight="bold" opacity="0.7">DEMAND</text>
        <path d="M54 38 L66 38 M54 42 L66 42" stroke="url(#bd1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
        <defs><linearGradient id="bd1" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#a855f7"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'Product AND Market-ing Fit',
    accent: 'from-indigo-500 to-pink-500',
    iconBg: 'bg-indigo-500/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <rect x="20" y="22" width="32" height="36" rx="4" stroke="#6366f1" strokeWidth="2" opacity="0.6" />
        <rect x="68" y="22" width="32" height="36" rx="4" stroke="#ec4899" strokeWidth="2" opacity="0.6" />
        <text x="26" y="44" fill="#6366f1" fontSize="6.5" fontWeight="bold" opacity="0.7">PRODUCT</text>
        <text x="72" y="44" fill="#ec4899" fontSize="6.5" fontWeight="bold" opacity="0.7">MARKET</text>
        <path d="M52 32 L68 32 M52 40 L68 40 M52 48 L68 48" stroke="url(#pmf1)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
        <path d="M56 36 L64 36 M56 44 L64 44" stroke="url(#pmf1)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="60" cy="40" r="3" fill="url(#pmf1)" opacity="0.8" />
        <defs><linearGradient id="pmf1" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#6366f1"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'Systems Thinking & AI',
    accent: 'from-purple-500 to-indigo-600',
    iconBg: 'bg-purple-500/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <circle cx="60" cy="40" r="8" stroke="url(#st1)" strokeWidth="2" />
        <circle cx="35" cy="22" r="5" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
        <circle cx="85" cy="22" r="5" stroke="#4f46e5" strokeWidth="1.5" opacity="0.6" />
        <circle cx="35" cy="58" r="5" stroke="#a855f7" strokeWidth="1.5" opacity="0.6" />
        <circle cx="85" cy="58" r="5" stroke="#4f46e5" strokeWidth="1.5" opacity="0.6" />
        <line x1="40" y1="25" x2="53" y2="35" stroke="#a855f7" strokeWidth="1.5" opacity="0.4" />
        <line x1="80" y1="25" x2="67" y2="35" stroke="#4f46e5" strokeWidth="1.5" opacity="0.4" />
        <line x1="40" y1="55" x2="53" y2="45" stroke="#a855f7" strokeWidth="1.5" opacity="0.4" />
        <line x1="80" y1="55" x2="67" y2="45" stroke="#4f46e5" strokeWidth="1.5" opacity="0.4" />
        <line x1="35" y1="27" x2="35" y2="53" stroke="#a855f7" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <line x1="85" y1="27" x2="85" y2="53" stroke="#4f46e5" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <line x1="40" y1="22" x2="80" y2="22" stroke="url(#st1)" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <line x1="40" y1="58" x2="80" y2="58" stroke="url(#st1)" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <text x="54" y="43" fill="url(#st1)" fontSize="8" fontWeight="bold">AI</text>
        <defs><linearGradient id="st1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a855f7"/><stop offset="1" stopColor="#4f46e5"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'Demand Engine',
    accent: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <circle cx="60" cy="40" r="24" stroke="url(#de1)" strokeWidth="2" opacity="0.3" />
        <circle cx="60" cy="40" r="16" stroke="url(#de1)" strokeWidth="2" opacity="0.5" />
        <circle cx="60" cy="40" r="8" fill="url(#de1)" opacity="0.3" />
        <path d="M60 16 L60 10 M60 64 L60 70 M36 40 L30 40 M84 40 L90 40" stroke="url(#de1)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <path d="M56 36 L64 40 L56 44 Z" fill="url(#de1)" />
        <path d="M44 28 L48 32" stroke="url(#de1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M76 28 L72 32" stroke="url(#de1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M44 52 L48 48" stroke="url(#de1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <path d="M76 52 L72 48" stroke="url(#de1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <defs><linearGradient id="de1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a855f7"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'Content = Lifeblood',
    accent: 'from-pink-500 to-red-500',
    iconBg: 'bg-pink-500/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <path d="M60 22 C60 22, 48 12, 38 22 C28 32, 38 46, 60 62 C82 46, 92 32, 82 22 C72 12, 60 22, 60 22Z" stroke="url(#cl1)" strokeWidth="2.5" opacity="0.6" />
        <path d="M60 30 C60 30, 52 24, 46 30 C40 36, 46 44, 60 54 C74 44, 80 36, 74 30 C68 24, 60 30, 60 30Z" stroke="url(#cl1)" strokeWidth="1.5" opacity="0.4" />
        <path d="M50 38 L55 38 M52 34 L52 42" stroke="url(#cl1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M60 38 L70 38" stroke="url(#cl1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <path d="M60 42 L68 42" stroke="url(#cl1)" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <circle cx="60" cy="40" r="2" fill="url(#cl1)" opacity="0.8" />
        <defs><linearGradient id="cl1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ec4899"/><stop offset="1" stopColor="#ef4444"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'Customer Flywheel',
    accent: 'from-purple-600 to-pink-500',
    iconBg: 'bg-purple-500/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <circle cx="60" cy="40" r="26" stroke="url(#cf1)" strokeWidth="2" opacity="0.2" />
        <path d="M60 14 A26 26 0 0 1 86 40" stroke="url(#cf1)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M86 40 A26 26 0 0 1 60 66" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
        <path d="M60 66 A26 26 0 0 1 34 40" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
        <path d="M34 40 A26 26 0 0 1 60 14" stroke="#9333ea" strokeWidth="2.5" strokeLinecap="round" opacity="0.3" />
        <polygon points="84,34 90,40 84,46" fill="url(#cf1)" opacity="0.8" />
        <polygon points="66,64 60,70 54,64" fill="#ec4899" opacity="0.6" />
        <polygon points="36,46 30,40 36,34" fill="#a855f7" opacity="0.4" />
        <circle cx="60" cy="40" r="10" stroke="url(#cf1)" strokeWidth="1.5" opacity="0.5" />
        <circle cx="60" cy="40" r="3" fill="url(#cf1)" />
        <defs><linearGradient id="cf1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#9333ea"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'Community & Experiences',
    accent: 'from-purple-500 to-pink-500',
    iconBg: 'bg-purple-500/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <circle cx="60" cy="30" r="6" stroke="url(#ce1)" strokeWidth="2" />
        <circle cx="40" cy="48" r="5" stroke="#a855f7" strokeWidth="1.5" opacity="0.7" />
        <circle cx="80" cy="48" r="5" stroke="#ec4899" strokeWidth="1.5" opacity="0.7" />
        <circle cx="30" cy="34" r="4" stroke="#a855f7" strokeWidth="1.5" opacity="0.5" />
        <circle cx="90" cy="34" r="4" stroke="#ec4899" strokeWidth="1.5" opacity="0.5" />
        <line x1="54" y1="32" x2="44" y2="44" stroke="url(#ce1)" strokeWidth="1.5" opacity="0.4" />
        <line x1="66" y1="32" x2="76" y2="44" stroke="url(#ce1)" strokeWidth="1.5" opacity="0.4" />
        <line x1="36" y1="38" x2="38" y2="44" stroke="#a855f7" strokeWidth="1" opacity="0.3" />
        <line x1="84" y1="38" x2="82" y2="44" stroke="#ec4899" strokeWidth="1" opacity="0.3" />
        <line x1="45" y1="48" x2="75" y2="48" stroke="url(#ce1)" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
        <path d="M48 60 Q60 68 72 60" stroke="url(#ce1)" strokeWidth="1.5" opacity="0.5" strokeLinecap="round" />
        <circle cx="60" cy="30" r="2.5" fill="url(#ce1)" opacity="0.6" />
        <defs><linearGradient id="ce1" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#a855f7"/><stop offset="1" stopColor="#ec4899"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'GTM Foundation & RevOps',
    accent: 'from-pink-500 to-purple-600',
    iconBg: 'bg-pink-500/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <rect x="30" y="52" width="60" height="8" rx="2" stroke="url(#gr1)" strokeWidth="2" opacity="0.6" />
        <rect x="36" y="40" width="48" height="8" rx="2" stroke="url(#gr1)" strokeWidth="1.5" opacity="0.5" />
        <rect x="42" y="28" width="36" height="8" rx="2" stroke="url(#gr1)" strokeWidth="1.5" opacity="0.4" />
        <polygon points="60,14 72,24 48,24" stroke="url(#gr1)" strokeWidth="1.5" fill="url(#gr1)" fillOpacity="0.15" />
        <line x1="60" y1="14" x2="60" y2="60" stroke="url(#gr1)" strokeWidth="1" opacity="0.2" strokeDasharray="2 2" />
        <circle cx="60" cy="18" r="2" fill="url(#gr1)" opacity="0.8" />
        <text x="40" y="58" fill="url(#gr1)" fontSize="5.5" fontWeight="bold" opacity="0.5">FOUNDATION</text>
        <defs><linearGradient id="gr1" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ec4899"/><stop offset="1" stopColor="#9333ea"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    title: 'Remember the Humans',
    accent: 'from-purple-400 to-pink-400',
    iconBg: 'bg-purple-400/20',
    svg: (
      <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
        <circle cx="48" cy="32" r="8" stroke="url(#rh1)" strokeWidth="2" opacity="0.6" />
        <path d="M48 40 Q48 52 48 56" stroke="url(#rh1)" strokeWidth="2" opacity="0.5" />
        <path d="M40 46 L48 44 L56 46" stroke="url(#rh1)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <circle cx="72" cy="32" r="8" stroke="url(#rh1)" strokeWidth="2" opacity="0.6" />
        <path d="M72 40 Q72 52 72 56" stroke="url(#rh1)" strokeWidth="2" opacity="0.5" />
        <path d="M64 46 L72 44 L80 46" stroke="url(#rh1)" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        <path d="M56 38 L64 38" stroke="url(#rh1)" strokeWidth="2" opacity="0.3" />
        <path d="M52 62 Q60 70 68 62" stroke="url(#rh1)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        <circle cx="45" cy="30" r="1.5" fill="url(#rh1)" opacity="0.5" />
        <circle cx="51" cy="30" r="1.5" fill="url(#rh1)" opacity="0.5" />
        <circle cx="69" cy="30" r="1.5" fill="url(#rh1)" opacity="0.5" />
        <circle cx="75" cy="30" r="1.5" fill="url(#rh1)" opacity="0.5" />
        <defs><linearGradient id="rh1" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#c084fc"/><stop offset="1" stopColor="#f472b6"/></linearGradient></defs>
      </svg>
    ),
  },
]

/* ── Company logos ── */
import { logos } from '../logoData'

/* ── Component ── */

export function Home({ navigate }: { navigate: (r: Route) => void }) {
  const [beliefIdx, setBeliefIdx] = useState(0)

  const nextBelief = useCallback(() => {
    setBeliefIdx(i => (i + 1) % beliefs.length)
  }, [])

  useEffect(() => {
    const t = setInterval(nextBelief, 3200)
    return () => clearInterval(t)
  }, [nextBelief])

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50/30" />
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                Revenue Marketing Leader
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                Hi, I'm{' '}
                <span className="text-[hsl(264,67%,52%)]">Tom</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                I build marketing engines that create measurable pipeline and revenue. 15+ years across B2B SaaS &amp; Service — from startup, scale up and through acquisition to scale at SAP.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo('how-i-build')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(264,67%,52%)] text-white font-medium rounded-lg hover:bg-[hsl(264,67%,46%)] transition-colors"
                >
                  See how I build <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo('ethos')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  About me
                </button>
              </div>
            </div>

            {/* Hero photo */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-purple-200/50">
                <img
                  src="/tom-hero.gif"
                  alt="Tom Ball waving"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[hsl(152,55%,42%)]/10 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[hsl(264,67%,52%)]/10 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Logo strip ─── */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center mb-6 font-semibold">Companies I have worked with</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-4">
            {logos.map(l => {
              const aspect = l.w / 80
              // Square / narrow logos get taller max-h so they aren't tiny
              // Wide logos get a wider max-w so they aren't squished
              const maxH = aspect < 2 ? 36 : aspect < 2.5 ? 30 : 26
              const maxW = aspect > 5 ? 140 : 120
              return (
                <div key={l.name} className="flex items-center justify-center h-10">
                  <img
                    src={l.src}
                    alt={l.name}
                    className="w-auto opacity-50 hover:opacity-80 transition-opacity object-contain"
                    style={{ maxHeight: `${maxH}px`, maxWidth: `${maxW}px` }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Impact at a glance ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Impact at a glance</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Highlights from 5 years leading marketing at SAP Emarsys, navigating acquisition, integration, and 20% YoY budget reductions.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '154M',  label: 'Marketing Sourced Pipeline ARR',       icon: TrendingUp },
              { value: '32M',   label: 'Marketing Sourced Net New ARR',        icon: Target },
              { value: '45%',   label: 'Avg. Marketing Contribution to Revenue', icon: Zap },
              { value: '4x',    label: 'Pipeline Coverage Target Maintained',       icon: Layers },
              { value: '99M',   label: 'Inbound Pipeline ARR over 5 years',    icon: BarChart3 },
              { value: '21M',   label: 'Inbound Sourced Net New ARR',          icon: TrendingUp },
              { value: '68%',   label: 'Average Inbound Contribution to Pipeline', icon: BarChart3 },
              { value: '2.7x',  label: 'Revenue Return on Digital Investment', icon: Zap },
            ].map((s, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 text-center group hover:bg-white hover:shadow-lg hover:shadow-gray-100 transition-all border border-transparent hover:border-gray-100">
                <s.icon className="w-5 h-5 text-[hsl(264,67%,52%)] mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Space Grotesk' }}>{s.value}</div>
                <div className="text-xs text-gray-500 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How I Build ─── */}
      <section id="how-i-build" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left — title & supporting text */}
            <div className="md:sticky md:top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                How I Build
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Growth</h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-md">
                Explore my approach to generating repeatable impact with real examples from my day-to-day work in B2B SaaS &amp; Service companies.
              </p>
            </div>

            {/* Right — 2×2 card grid */}
            <div className="grid grid-cols-2 gap-5">
              {/* Engines */}
              <button
                onClick={() => navigate('engines')}
                className="group text-left bg-white rounded-xl p-6 border border-gray-100 hover:border-[hsl(264,67%,52%)]/30 hover:shadow-lg hover:shadow-purple-100/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5 text-[hsl(264,67%,52%)]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">Engines</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  The systems, frameworks, and methodologies I've built — from demand waterfalls to always-on programs.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(264,67%,52%)] group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              {/* Campaigns */}
              <button
                onClick={() => navigate('campaigns')}
                className="group text-left bg-white rounded-xl p-6 border border-gray-100 hover:border-[hsl(152,55%,42%)]/30 hover:shadow-lg hover:shadow-green-100/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                  <Target className="w-5 h-5 text-[hsl(152,55%,42%)]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">Campaigns</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  Integrated campaign examples with results — from product launches to global brand campaigns.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[hsl(152,55%,42%)] group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              {/* Projects */}
              <button
                onClick={() => navigate('projects')}
                className="group text-left bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">Projects</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  Operational and change projects — MAP migrations, SAP integration, and strategic transformations.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              {/* Teams */}
              <button
                onClick={() => navigate('teams')}
                className="group text-left bg-white rounded-xl p-6 border border-gray-100 hover:border-amber-200 hover:shadow-lg hover:shadow-amber-50/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1.5">Teams</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                  How I build and lead teams — from agency roots and rugby culture to human + AI operating models.
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Ethos ─── */}
      <section id="ethos" className="bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-[hsl(264,67%,72%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                How I Think
              </div>
              <h2 className="text-3xl font-bold mb-4">Core Principles</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                The way I think about bringing marketing to life and creating value. How I approach revenue alignment, systems thinking, brand and demand integration, and building engines that scale.
              </p>

              {/* CTA */}
              <button
                onClick={() => scrollTo('ethos-carousel')}
                className="flex items-center gap-2 text-sm font-medium transition-colors group"
              >
                <span className="text-white">Watch the video</span>
                <ArrowRight className="w-4 h-4 text-[hsl(264,67%,52%)] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Rotating beliefs carousel */}
            <div id="ethos-carousel" className="scroll-mt-20">
              <div className="relative aspect-video rounded-xl bg-gray-800 border border-gray-700 overflow-hidden">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${beliefs[beliefIdx].accent}`} />
                {/* SVG illustration */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="w-3/4 h-3/4">
                    {beliefs[beliefIdx].svg}
                  </div>
                </div>
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-end px-8 pb-6">
                  <p
                    className="text-xl md:text-2xl font-bold text-white leading-snug transition-opacity duration-500"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    {beliefs[beliefIdx].title}
                  </p>
                  <div className="absolute bottom-3 right-4 text-[10px] text-gray-600">
                    {String(beliefIdx + 1).padStart(2, '0')} / {beliefs.length}
                  </div>
                </div>
                {/* Decorative gradient orb */}
                <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${beliefs[beliefIdx].accent} opacity-20 blur-2xl transition-all duration-700`} />
              </div>
              {/* Progress dots */}
              <div className="flex items-center justify-center gap-1.5 mt-4">
                {beliefs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setBeliefIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === beliefIdx ? 'bg-[hsl(264,67%,52%)] w-4' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-[hsl(264,67%,52%)] rounded-full mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            What are you building?
          </h2>
          <p className="text-gray-500 mb-8">
            If you are a GTM leader, portfolio or investment professional or fellow marketer.
          </p>
          <button
            onClick={() => navigate('connect')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(264,67%,52%)] text-white font-medium rounded-lg hover:bg-[hsl(264,67%,46%)] transition-colors"
          >
            Let's Connect <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}
