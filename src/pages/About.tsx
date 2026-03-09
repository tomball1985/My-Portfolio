import { Briefcase, Heart, ArrowRight } from 'lucide-react'
import { useState } from 'react'

type Tab = 'work' | 'personal'

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

const beliefs = [
  { title: 'Revenue Aligned', desc: 'Quantify revenue and pipeline impact. Marketing CREATES value and is not a cost-centre.' },
  { title: 'Systems Thinking + AI', desc: 'People. Process. Technology. AI will have a more immediate effect on the future of work than consumer behaviour.' },
  { title: 'Brand + Demand', desc: 'Brand and demand are not separate — they compound. Good product marketing is done on the tips of our skis.' },
  { title: 'Build a Demand Engine', desc: 'Content is the lifeblood. Customer flywheel. Community and experiences. GTM foundations and RevOps as multipliers.' },
  { title: 'Always in Beta', desc: 'Marketing to embrace always in beta — from individuals prompting and automations, to agents and agentic workflows with humans in the loop.' },
  { title: 'Product AND Market-ing Fit', desc: 'Unique product differentiation, balancing the truth with the current and the future roadmap. Help customers do their jobs better.' },
]

export function About() {
  const [tab, setTab] = useState<Tab>('work')

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About me</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Revenue marketing leader with 15+ years building demand engines, brand campaigns, and high-performing teams across B2B SaaS.
          </p>
        </div>
      </section>

      {/* Tab toggle */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2">
          <button
            onClick={() => setTab('work')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'work' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Briefcase className="w-4 h-4" /> Me at work
          </button>
          <button
            onClick={() => setTab('personal')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'personal' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart className="w-4 h-4" /> Me outside work
          </button>
        </div>
      </section>

      {tab === 'work' ? (
        <>
          {/* Career timeline */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-10">Career journey</h2>
              <div className="space-y-0">
                {timeline.map((t, i) => (
                  <div key={i} className="relative grid md:grid-cols-[200px,1fr] gap-6 pb-12">
                    {/* Timeline line */}
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

          {/* Core beliefs */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Core beliefs</h2>
              <p className="text-gray-500 mb-10 max-w-xl">The way I think about bringing marketing to life and creating value.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {beliefs.map((b, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
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

          {/* Roles */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">How I operate</h2>
              <div className="flex flex-wrap gap-3">
                {['Leadership', 'Programme Lead', 'Strategy', 'Creative Direction', 'Execution', 'Analyst'].map((role, i) => (
                  <div key={i} className="px-5 py-3 rounded-lg bg-gray-50 border border-gray-100 text-sm font-medium text-gray-700">
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Personal section */
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Outside of work</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Beyond the world of B2B marketing, I'm driven by curiosity and staying active. Whether it's exploring new places, keeping fit, or just spending quality time with family and friends — I believe the best ideas often come from stepping away from the screen.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['Travel', 'Fitness', 'Family', 'Music', 'Football', 'Food & Cooking'].map((interest, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-gray-100">
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
      )}
    </div>
  )
}
