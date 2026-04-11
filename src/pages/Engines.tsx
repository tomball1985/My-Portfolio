import { useState } from 'react'
import {
  BarChart3, Users, Globe, Layers,
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

/* ── Engine examples (tabbed) ── */

const engines = [
  {
    id: 'emarsys',
    company: 'Emarsys to SAP',
    period: '2020 — 2025',
    headline: 'From scale up mid-market to enterprise-scale marketing engine through acquisition and SAP integration',
    intro: 'Led global demand generation through acquisition, SAP integration, and enterprise transformation. Built from event-led, regional marketing to global enterprise-scale programs across 10+ market units navigating  20% YoY budget reductions and integration headwinds while maintaining growth targets.',
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
    company: 'Clicktale to Contentsquare',
    period: '2017 — 2019',
    headline: 'Shaking up a category with provocative positioning and a global marketing demand engine - from series C to acquisition',
    intro: 'Clicktale punched above its weight, shaking up UX analytics with digital body language and landing experience analytics as a category. The digital-first global marketing engine drove demand and revenue with an enterprise customer base and created the dent in North America that led to acquisition by ContentSquare.',
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
    period: '2014 — 2016',
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

type Route = 'home' | 'engines' | 'campaigns' | 'projects' | 'teams' | 'about' | 'connect'

export function Engines({ navigate }: { navigate: (r: Route) => void }) {
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
            Here are the multi-faceted marketing engines I've had the pleasure of driving. Two B2B SaaS from series funding to exit, merger and post-acquisition — $25M to $175M ARR — along with a scrappy bootstrapped agency from $500K to $2M.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Under the hood</h2>

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

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-[hsl(264,67%,52%)] rounded-full mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            Should we be building together?
          </h2>
          <p className="text-gray-500 mb-8">
            If you are a SaaS CEO, CMO or investment professional.
          </p>
          <button
            onClick={() => navigate('connect')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(264,67%,52%)] text-white font-medium rounded-lg hover:bg-[hsl(264,67%,46%)] transition-colors"
          >
            Let's Connect <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}
