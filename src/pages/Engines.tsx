import { useState } from 'react'
import {
  Database, BarChart3, Users, RefreshCw, Globe, Layers,
  Target, Megaphone, Mail, MonitorPlay, Search, TrendingUp,
  ChevronRight, ChevronLeft, Sparkles, Mic2, UserCircle, Share2,
  type LucideIcon
} from 'lucide-react'

/* ── Capability layers ── */

const capabilityLayers: {
  layer: string
  color: string
  bgColor: string
  items: { icon: LucideIcon; label: string }[]
}[] = [
  {
    layer: 'Strategy',
    color: 'text-[hsl(264,67%,52%)]',
    bgColor: 'bg-purple-50',
    items: [
      { icon: Sparkles, label: 'Brand' },
      { icon: Target, label: 'Product Marketing' },
      { icon: TrendingUp, label: 'Demand Generation' },
      { icon: Mic2, label: 'PR & Analyst' },
    ],
  },
  {
    layer: 'Fuel',
    color: 'text-[hsl(152,55%,42%)]',
    bgColor: 'bg-emerald-50',
    items: [
      { icon: Layers, label: 'Content' },
      { icon: Users, label: 'Customer Advocacy' },
      { icon: MonitorPlay, label: 'Community & Events' },
      { icon: UserCircle, label: 'SME & Exec' },
    ],
  },
  {
    layer: 'Motion',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    items: [
      { icon: Search, label: 'Digital Inbound' },
      { icon: Globe, label: 'Field Marketing' },
      { icon: Target, label: 'ABM' },
      { icon: Megaphone, label: 'Outbound' },
    ],
  },
  {
    layer: 'Distribution',
    color: 'text-gray-700',
    bgColor: 'bg-gray-100',
    items: [
      { icon: Mail, label: 'Owned' },
      { icon: Share2, label: 'Earned' },
      { icon: BarChart3, label: 'Paid' },
      { icon: UserCircle, label: 'HUMAN' },
    ],
  },
]

/* ── Fundamentals ── */

const fundamentals = [
  { icon: Database, title: 'TAM & ICP Alignment', desc: 'Data strategy & alignment across GTM to drive efficiency and measurable impact.' },
  { icon: BarChart3, title: 'Pipeline Council', desc: 'Global cadence to discuss effectiveness, resourcing and investment backed by data.' },
  { icon: Globe, title: 'Regional Rhythm', desc: 'Weekly sync with all GTM teams collaborating on pipeline creation & acceleration.' },
  { icon: Layers, title: 'RevOps Foundation', desc: 'Operational alignment including IT on data, technology, process, and enablement.' },
  { icon: TrendingUp, title: 'Insight & Reporting', desc: 'Multi-dimensional funnel reporting to assess creation, velocity and linear progression.' },
  { icon: RefreshCw, title: 'Iteration for Scale', desc: 'Test, learn and feedback loop across functions & regions allowing real experiments.' },
]

/* ── Always-on tiers ── */

const alwaysOn = [
  {
    level: 'Always On', color: 'bg-[hsl(264,67%,52%)]', label: 'Centrally managed',
    desc: 'Economies of scale, cost efficiencies, increased ROI & need for deep expertise.',
    channels: ['Global Campaigns', 'PPC', 'SEO', 'Content Syndication', 'Social Media', 'Global Webinars'],
  },
  {
    level: 'Planned', color: 'bg-[hsl(152,55%,42%)]', label: 'Centrally supported',
    desc: 'Enablement or execution, regionally augmented with local program / campaign activity.',
    channels: ['Regional Campaigns', 'Tentpole Events', 'Media Partnerships', 'ABM', 'Outbound Plays'],
  },
  {
    level: 'Tactical', color: 'bg-gray-600', label: 'Centrally guided',
    desc: 'Target audience build, account selection, data cleaning and wrapping into wider global activity.',
    channels: ['Small Events', 'Virtual Events', 'Partner Webinars', 'Direct Mail', 'Local ABM'],
  },
]

/* ── Engine examples (tabbed) ── */

const engines = [
  {
    id: 'emarsys',
    company: 'SAP Emarsys',
    period: '2019 — 2025',
    headline: 'From startup demand gen to enterprise-scale revenue engine through acquisition and SAP integration',
    intro: 'Led global demand generation through acquisition, SAP integration, and enterprise transformation. Built from startup marketing to enterprise-scale programs across 10+ market units with 20% YoY budget reductions while maintaining 90% of targets.',
    capabilities: ['Brand', 'Product Marketing', 'Demand Generation', 'Content', 'Community & Events', 'Digital Inbound', 'Field Marketing', 'ABM', 'Outbound', 'Owned', 'Paid', 'HUMAN'],
    slides: [
      { label: 'Pipeline & Revenue Achievements', placeholder: 'Pipeline overview with 154M sourced pipeline, 32M net new ARR, 45% marketing contribution' },
      { label: 'Always-on Engine', placeholder: 'Layered demand engine showing always-on, planned, and tactical tiers' },
      { label: 'Integrated Campaign Calendar', placeholder: 'H1 2024 integrated plan showing global campaigns, events, and digital programs' },
      { label: 'Inbound Impact Model', placeholder: 'Two-stream inbound approach — hand-raise vs. marketing signals' },
      { label: 'Regional Performance', placeholder: 'Paid media breakdown by region with targets vs. actuals across all metrics' },
    ],
  },
  {
    id: 'clicktale',
    company: 'Clicktale / Contentsquare',
    period: '2017 — 2019',
    headline: 'Building a B2B demand engine for digital experience analytics through to acquisition',
    intro: 'B2B specialism in digital experience analytics. Built the marketing engine from the ground up and led through acquisition by Contentsquare. Created integrated campaigns that combined brand, content, and demand generation.',
    capabilities: ['Brand', 'Product Marketing', 'Demand Generation', 'PR & Analyst', 'Content', 'Digital Inbound', 'ABM', 'Owned', 'Earned', 'Paid'],
    slides: [
      { label: 'Defining Digital Experience Campaign', placeholder: '$1.8M pipeline, 7M impressions, 320 MQLs — Brian Solis partnership + research report' },
      { label: 'Digital Body Language', placeholder: 'Brand positioning campaign — integrated across brand, product and demand' },
      { label: 'Inbound Engine', placeholder: 'Inbound pipeline and revenue performance across channels' },
    ],
  },
  {
    id: 'immediate',
    company: 'immediate future',
    period: '2008 — 2017',
    headline: 'Riding the social media wave — building brand, digital, and new business for a leading agency',
    intro: 'Grew from entry level through to director across almost a decade at the forefront of social media transformation. Built brand, digital and new business marketing — working across consumer and B2B clients including Southbank Centre, and multiple global brands.',
    capabilities: ['Brand', 'Content', 'Community & Events', 'SME & Exec', 'Digital Inbound', 'Owned', 'Earned', 'HUMAN'],
    slides: [
      { label: 'Southbank Centre Campaign', placeholder: 'Consumer social-first brand campaign for one of London\'s iconic cultural venues' },
      { label: 'Agency Growth', placeholder: 'New business and brand marketing driving agency growth through the social media era' },
      { label: 'Client Portfolio', placeholder: 'B2B and consumer client work across social, digital, and brand' },
    ],
  },
]

/* ── Reusable: capability tag colour lookup ── */

function capTagColor(label: string) {
  for (const layer of capabilityLayers) {
    if (layer.items.some(i => i.label === label)) {
      return { text: layer.color, bg: layer.bgColor }
    }
  }
  return { text: 'text-gray-600', bg: 'bg-gray-100' }
}

function capTagIcon(label: string): LucideIcon | null {
  for (const layer of capabilityLayers) {
    const found = layer.items.find(i => i.label === label)
    if (found) return found.icon
  }
  return null
}

/* ── Main component ── */

export function Engines() {
  const [activeEngine, setActiveEngine] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  const engine = engines[activeEngine]

  const nextSlide = () => setActiveSlide(s => (s + 1) % engine.slides.length)
  const prevSlide = () => setActiveSlide(s => (s - 1 + engine.slides.length) % engine.slides.length)

  return (
    <div>
      {/* ── Header ── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            How I Build
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Engines</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Here's how I approach the building of repeatable systems which elevate brand, deliver differentiated messaging, distribute content and drive growth.
          </p>
        </div>
      </section>

      {/* ── Core Capabilities (layered) ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">Core Capabilities</h2>
          <div className="space-y-3">
            {capabilityLayers.map((layer, li) => {
              const barColor = layer.bgColor === 'bg-purple-50' ? 'bg-[hsl(264,67%,52%)]' : layer.bgColor === 'bg-emerald-50' ? 'bg-[hsl(152,55%,42%)]' : layer.bgColor === 'bg-blue-50' ? 'bg-blue-500' : 'bg-gray-400'
              return (
                <div key={li} className="flex items-center gap-4">
                  {/* Layer label — fixed width, left-aligned */}
                  <div className="w-28 shrink-0 flex items-center gap-2">
                    <div className={`w-5 h-0.5 rounded-full ${barColor}`} />
                    <span className={`text-[11px] font-bold uppercase tracking-widest ${layer.color} whitespace-nowrap`}>{layer.layer}</span>
                  </div>
                  {/* 4 capability cards fill the remaining space */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 flex-1">
                    {layer.items.map((item, ii) => (
                      <div
                        key={ii}
                        className={`flex items-center gap-2.5 px-3 py-3 rounded-lg border border-gray-100 ${layer.bgColor}/40 hover:${layer.bgColor} transition-all`}
                      >
                        <div className={`w-7 h-7 rounded-md ${layer.bgColor} flex items-center justify-center shrink-0`}>
                          <item.icon className={`w-3.5 h-3.5 ${layer.color}`} />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Engine examples (tabbed full-width) ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Where I've built these engines</h2>

          {/* Tabs */}
          <div className="flex gap-2 mb-10 border-b border-gray-100 pb-0">
            {engines.map((e, i) => (
              <button
                key={e.id}
                onClick={() => { setActiveEngine(i); setActiveSlide(0) }}
                className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
                  activeEngine === i
                    ? 'border-[hsl(264,67%,52%)] text-[hsl(264,67%,52%)]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
                }`}
              >
                {e.company}
              </button>
            ))}
          </div>

          {/* Active engine content */}
          <div className="space-y-8">
            {/* Top section: intro + meta */}
            <div className="grid md:grid-cols-[1fr,280px] gap-8">
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-2">{engine.period}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">{engine.headline}</h3>
                <p className="text-gray-500 leading-relaxed">{engine.intro}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Core capabilities used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {engine.capabilities.map((cap, ci) => {
                      const colors = capTagColor(cap)
                      const Icon = capTagIcon(cap)
                      return (
                        <span
                          key={ci}
                          className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md ${colors.bg} ${colors.text}`}
                        >
                          {Icon && <Icon className="w-3 h-3" />}
                          {cap}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Image carousel placeholder */}
            <div className="relative">
              <div className="aspect-[16/8] rounded-xl bg-gray-50 border border-gray-200 overflow-hidden relative">
                {/* Slide content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <MonitorPlay className="w-6 h-6 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{engine.slides[activeSlide].label}</h4>
                  <p className="text-sm text-gray-400 max-w-md">{engine.slides[activeSlide].placeholder}</p>
                  <p className="text-xs text-gray-300 mt-4">Slide {activeSlide + 1} of {engine.slides.length} — drop your HTML recreations here</p>
                </div>

                {/* Nav arrows */}
                {engine.slides.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </>
                )}
              </div>

              {/* Slide indicators */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {engine.slides.map((s, si) => (
                  <button
                    key={si}
                    onClick={() => setActiveSlide(si)}
                    className={`transition-all ${
                      activeSlide === si
                        ? 'w-8 h-2 rounded-full bg-[hsl(264,67%,52%)]'
                        : 'w-2 h-2 rounded-full bg-gray-200 hover:bg-gray-300'
                    }`}
                    aria-label={s.label}
                  />
                ))}
              </div>

              {/* Slide label strip */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {engine.slides.map((s, si) => (
                  <button
                    key={si}
                    onClick={() => setActiveSlide(si)}
                    className={`whitespace-nowrap text-xs px-3 py-1.5 rounded-md border transition-colors ${
                      activeSlide === si
                        ? 'bg-purple-50 border-[hsl(264,67%,52%)]/30 text-[hsl(264,67%,52%)] font-semibold'
                        : 'bg-gray-50 border-gray-100 text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Frameworks: Fundamentals ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Frameworks
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Fundamentals for driving pipeline & revenue</h2>
          <p className="text-gray-500 mb-10 max-w-xl">The operational rhythm and structural foundations that make everything else work.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {fundamentals.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-[hsl(264,67%,52%)]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Frameworks: Always-on engine ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Frameworks
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Building the always-on engine</h2>
          <p className="text-gray-500 mb-10 max-w-xl">A layered approach from highly scalable global programs down to tactical, regionally-led activity.</p>
          <div className="space-y-4">
            {alwaysOn.map((tier, i) => (
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden bg-white">
                <div className="flex items-stretch">
                  <div className={`${tier.color} w-1.5 shrink-0`} />
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md text-white ${tier.color}`}>
                        {tier.level}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-300" />
                      <span className="font-semibold text-gray-900">{tier.label}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{tier.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {tier.channels.map((ch, j) => (
                        <span key={j} className="text-xs px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md border border-gray-100">{ch}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Frameworks: Inbound impact model ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Frameworks
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Inbound impact model</h2>
          <p className="text-gray-500 mb-10 max-w-xl">Two-stream inbound approach separating high-intent hand-raisers from marketing signal-based leads.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="w-3 h-3 rounded-full bg-[hsl(264,67%,52%)] mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Hand Raise & High Intent</h3>
              <p className="text-sm text-gray-500 mb-4">Demo requests, product discovery, pricing inquiries — routed directly to sales with tight SLA.</p>
              <div className="flex flex-wrap gap-2">
                {['Organic', 'PPC'].map(c => (
                  <span key={c} className="text-xs px-2.5 py-1 bg-purple-50 text-[hsl(264,67%,52%)] rounded-md">{c}</span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="w-3 h-3 rounded-full bg-[hsl(152,55%,42%)] mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 text-lg">Marketing Signals</h3>
              <p className="text-sm text-gray-500 mb-4">Lead and account-level interactions — prioritised and queued by marketing for sales with varying SLAs.</p>
              <div className="flex flex-wrap gap-2">
                {['Events', 'Content', 'Webinar', 'Paid', 'First Party Intent', 'Third Party Signal'].map(c => (
                  <span key={c} className="text-xs px-2.5 py-1 bg-emerald-50 text-[hsl(152,55%,42%)] rounded-md">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Frameworks: Full Funnel Signal Map ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Frameworks
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Full Funnel Signal Map</h2>
          <p className="text-gray-500 mb-10 max-w-xl">Visualization of the signals, tech stack, content and channels through the funnel — the basis of the playbook for Allbound activation.</p>
          <div className="aspect-video rounded-xl bg-white border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MonitorPlay className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-400">Full funnel signal map visual</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Frameworks: Audience-first Marketing ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Frameworks
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Audience-first Marketing</h2>
          <p className="text-gray-500 mb-10 max-w-xl">Here's how I bring personas or buying groups to life. Forcing thinking through the lens of the fundamentals below, helps the adoption of social-led marketing.</p>
          <div className="aspect-video rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MonitorPlay className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-400">Audience-first framework visual</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Frameworks: OIA Kaizen Style Optimization ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Frameworks
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">"OIA" Kaizen Style Optimization Framework</h2>
          <p className="text-gray-500 mb-10 max-w-xl">Observation, implication, action. Simple framework I have used from my agency strategy days applied to program and channel optimization.</p>
          <div className="aspect-video rounded-xl bg-white border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MonitorPlay className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-sm text-gray-400">OIA optimization framework visual</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
