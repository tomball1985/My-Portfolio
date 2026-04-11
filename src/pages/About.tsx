import {
  Lightbulb, Compass, Briefcase, Heart, ArrowRight, Layers,
  Database, BarChart3, Globe, TrendingUp, RefreshCw, ChevronRight,
  MonitorPlay
} from 'lucide-react'
import { useState } from 'react'

type Tab = 'beliefs' | 'principles' | 'frameworks' | 'experience'

const beliefs = [
  { title: 'Revenue Aligned', desc: 'Quantify revenue and pipeline impact. Marketing CREATES value and is not a cost-centre.' },
  { title: 'Systems Thinking + AI', desc: 'People. Process. Technology. AI will have a more immediate effect on the future of work than consumer behaviour.' },
  { title: 'Brand + Demand', desc: 'Brand and demand are not separate — they compound. Good product marketing is done on the tips of our skis.' },
  { title: 'Build a Demand Engine', desc: 'Content is the lifeblood. Customer flywheel. Community and experiences. GTM foundations and RevOps as multipliers.' },
  { title: 'Always in Beta', desc: 'Marketing to embrace always in beta — from individuals prompting and automations, to agents and agentic workflows with humans in the loop.' },
  { title: 'Product AND Market-ing Fit', desc: 'Unique product differentiation, balancing the truth with the current and the future roadmap. Help customers do their jobs better.' },
]

const fundamentals = [
  { icon: Database, title: 'TAM & ICP Alignment', desc: 'Data strategy & alignment across GTM to drive efficiency and measurable impact.' },
  { icon: BarChart3, title: 'Pipeline Council', desc: 'Global cadence to discuss effectiveness, resourcing and investment backed by data.' },
  { icon: Globe, title: 'Regional Rhythm', desc: 'Weekly sync with all GTM teams collaborating on pipeline creation & acceleration.' },
  { icon: Layers, title: 'RevOps Foundation', desc: 'Operational alignment including IT on data, technology, process, and enablement.' },
  { icon: TrendingUp, title: 'Insight & Reporting', desc: 'Multi-dimensional funnel reporting to assess creation, velocity and linear progression.' },
  { icon: RefreshCw, title: 'Iteration for Scale', desc: 'Test, learn and feedback loop across functions & regions allowing real experiments.' },
]

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

const timeline = [
  {
    period: '2019 — 2025',
    role: 'VP / Senior Director, Global Demand Generation',
    company: 'Emarsys / SAP Emarsys',
    highlights: [
      'Led global marketing through acquisition by SAP',
      'Built demand engine generating 154M pipeline ARR',
      'Managed 20% YoY budget reductions while maintaining 90% of targets',
      'Scaled team and programs across 10+ market units',
    ],
  },
  {
    period: '2017 — 2019',
    role: 'Marketing Director',
    company: 'Clicktale (acquired by Contentsquare)',
    highlights: [
      'B2B SaaS marketing for digital experience analytics',
      'Led marketing through acquisition by Contentsquare',
      'Built integrated campaigns generating $1.8M+ pipeline',
    ],
  },
  {
    period: '2008 — 2017',
    role: 'Various roles to Director',
    company: 'immediate future',
    highlights: [
      'Rode the wave of social media transformation',
      'Built brand, digital and new business marketing',
      'Worked across consumer and B2B clients',
    ],
  },
]

export function About() {
  const [tab, setTab] = useState<Tab>('beliefs')

  return (
    <div>
      {/* Header — left text + right video placeholder */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About me</h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Revenue marketing leader with 15+ years building demand engines, brand campaigns, and high-performing teams across B2B SaaS.
              </p>
            </div>

            {/* Right — YouTube embed placeholder */}
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center border border-gray-300">
              <div className="text-center text-gray-400">
                <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-sm font-medium">YouTube video coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab toggle — 3 tabs */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2">
          <button
            onClick={() => setTab('beliefs')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'beliefs' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Lightbulb className="w-4 h-4" /> Core Beliefs
          </button>
          <button
            onClick={() => setTab('principles')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'principles' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Compass className="w-4 h-4" /> Core Principles
          </button>
          <button
            onClick={() => setTab('frameworks')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'frameworks' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Layers className="w-4 h-4" /> Frameworks
          </button>
          <button
            onClick={() => setTab('experience')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'experience' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Briefcase className="w-4 h-4" /> Experience
          </button>
        </div>
      </section>

      {/* Tab content */}
      {tab === 'beliefs' && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Core Beliefs</h2>
            <p className="text-gray-500 mb-10 max-w-xl">The way I think about bringing marketing to life and creating value.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {beliefs.map((b, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-[hsl(264,67%,52%)]" style={{ fontFamily: 'Space Grotesk' }}>{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {tab === 'principles' && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Core Principles</h2>
            <p className="text-gray-500 mb-10 max-w-xl">The operating principles that guide how I work and lead.</p>
            {/* Placeholder — add your content here */}
            <div className="bg-gray-50 rounded-xl border border-dashed border-gray-300 p-12 text-center">
              <p className="text-gray-400 text-sm font-medium">Content coming soon — add your core principles here.</p>
            </div>
          </div>
        </section>
      )}

      {tab === 'frameworks' && (
        <>
          {/* Fundamentals */}
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

          {/* Always-on engine */}
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

          {/* Inbound impact model */}
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

          {/* Full Funnel Signal Map */}
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

          {/* Audience-first Marketing */}
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

          {/* OIA Kaizen Style Optimization */}
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
        </>
      )}

      {tab === 'experience' && (
        <>
          {/* Career timeline */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-10">Career Journey</h2>
              <div className="space-y-0">
                {timeline.map((t, i) => (
                  <div key={i} className="relative grid md:grid-cols-[200px,1fr] gap-6 pb-12">
                    {i < timeline.length - 1 && (
                      <div className="hidden md:block absolute left-[200px] top-3 bottom-0 w-px bg-gray-100 ml-6" />
                    )}
                    <div className="md:text-right">
                      <span className="text-sm text-gray-400 font-medium">{t.period}</span>
                    </div>
                    <div className="relative md:pl-12">
                      <div className="hidden md:block absolute left-0 top-1.5 w-3 h-3 rounded-full bg-[hsl(264,67%,52%)] ring-4 ring-purple-50" />
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{t.role}</h3>
                      <p className="text-sm text-[hsl(264,67%,52%)] font-medium mb-3">{t.company}</p>
                      <div className="space-y-2">
                        {t.highlights.map((h, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <ArrowRight className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-500">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How I operate */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">How I Operate</h2>
              <div className="flex flex-wrap gap-3">
                {['Leadership', 'Programme Lead', 'Strategy', 'Creative Direction', 'Execution', 'Analyst'].map((role, i) => (
                  <div key={i} className="px-5 py-3 rounded-lg bg-white border border-gray-100 text-sm font-medium text-gray-700">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Fixed section — Me outside of work (always visible below tabs) */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Outside of work</h3>
              <p className="text-gray-500 leading-relaxed mb-6">
                Beyond the world of B2B marketing, I'm driven by curiosity and staying active. Whether it's exploring new places, keeping fit, or just spending quality time with family and friends — I believe the best ideas often come from stepping away from the screen.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['Travel', 'Fitness', 'Family', 'Music', 'Football', 'Food & Cooking'].map((interest, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <Heart className="w-4 h-4 text-[hsl(152,55%,42%)]" />
                    <span className="text-sm font-medium text-gray-700">{interest}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center py-12">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[hsl(264,67%,52%)] to-[hsl(152,55%,42%)] mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Space Grotesk' }}>TB</span>
              </div>
              <p className="text-gray-400 text-sm">More about my personality, passions, hobbies and life outside of the professional sphere — video coming soon.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
