import { useState, useEffect, useCallback } from 'react'
import {
  ArrowRight, TrendingUp, Users, Target, Zap, BarChart3,
  Globe, Layers, Bot, Briefcase,
} from 'lucide-react'

type Route = 'home' | 'engines' | 'campaigns' | 'projects' | 'teams' | 'about' | 'connect'

/* ── Helpers ── */

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/* ── Core beliefs carousel data ── */

interface Belief {
  title: string
  accent: string          // tailwind gradient classes
  iconBg: string
}

const beliefs: Belief[] = [
  { title: 'Revenue Aligned.',                                accent: 'from-pink-500 to-purple-600',   iconBg: 'bg-pink-500/20' },
  { title: '...quantify revenue and pipeline impact...',      accent: 'from-pink-500 to-purple-600',   iconBg: 'bg-pink-500/20' },
  { title: '...marketing CREATES value and is not a cost-centre...', accent: 'from-pink-500 to-purple-600', iconBg: 'bg-pink-500/20' },
  { title: '...cascade from company level goals and business metrics...', accent: 'from-pink-500 to-purple-600', iconBg: 'bg-pink-500/20' },
  { title: 'Systems thinking + AI',                           accent: 'from-purple-500 to-indigo-600', iconBg: 'bg-purple-500/20' },
  { title: 'Brand <> Demand.',                                accent: 'from-purple-500 to-pink-500',   iconBg: 'bg-purple-500/20' },
  { title: 'Product AND Market-ing Fit.',                     accent: 'from-indigo-500 to-pink-500',   iconBg: 'bg-indigo-500/20' },
  { title: 'Build a Demand Engine.',                          accent: 'from-purple-500 to-pink-500',   iconBg: 'bg-purple-500/20' },
  { title: 'Content = Lifeblood.',                            accent: 'from-pink-500 to-red-500',      iconBg: 'bg-pink-500/20' },
  { title: 'Customer FLYwheel.',                              accent: 'from-purple-600 to-pink-500',   iconBg: 'bg-purple-500/20' },
  { title: 'Community + Experiences.',                        accent: 'from-purple-500 to-pink-500',   iconBg: 'bg-purple-500/20' },
  { title: 'GTM Foundations + Rev Ops.',                      accent: 'from-pink-500 to-purple-600',   iconBg: 'bg-pink-500/20' },
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

            {/* Photo placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[hsl(264,67%,52%)] to-[hsl(264,67%,38%)] overflow-hidden shadow-2xl shadow-purple-200/50">
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="w-full h-full bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                      <p className="text-sm font-bold text-gray-900">Tom Ball</p>
                      <p className="text-xs text-gray-500">Marketing Leader. London, UK</p>
                    </div>
                  </div>
                </div>
                {/* Placeholder silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
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
          <div className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap">
            {logos.map(l => (
              <img
                key={l.name}
                src={l.src}
                alt={l.name}
                className="h-6 md:h-8 w-auto opacity-50 hover:opacity-80 transition-opacity object-contain"
                style={{ maxWidth: '140px' }}
              />
            ))}
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
              <h2 className="text-3xl font-bold mb-4">Ethos</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                The way I think about bringing marketing to life and creating value. How I approach revenue alignment, systems thinking, brand and demand integration, and building engines that scale.
              </p>

              {/* Text links */}
              <div className="space-y-3">
                <button
                  onClick={() => scrollTo('ethos-carousel')}
                  className="flex items-center gap-2 text-sm font-medium transition-colors group"
                >
                  <span className="text-white">My core beliefs</span>
                  <ArrowRight className="w-4 h-4 text-[hsl(264,67%,52%)] group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('about')}
                  className="flex items-center gap-2 text-sm font-medium transition-colors group"
                >
                  <span className="text-white">Me inside work</span>
                  <ArrowRight className="w-4 h-4 text-[hsl(264,67%,52%)] group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('about')}
                  className="flex items-center gap-2 text-sm font-medium transition-colors group"
                >
                  <span className="text-white">Me outside work</span>
                  <ArrowRight className="w-4 h-4 text-[hsl(264,67%,52%)] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Rotating beliefs carousel */}
            <div id="ethos-carousel" className="scroll-mt-20">
              <div className="relative aspect-video rounded-xl bg-gray-800 border border-gray-700 overflow-hidden">
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${beliefs[beliefIdx].accent}`} />
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-start justify-center px-8">
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
