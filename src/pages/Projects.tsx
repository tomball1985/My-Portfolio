import { useState } from 'react'
import {
  CheckCircle2, Settings, Workflow, Database, Monitor, Sparkles,
  Globe, BarChart3, Target, Layers, TrendingUp, Bot, Megaphone,
  type LucideIcon
} from 'lucide-react'

/* ── Filter types ── */

type Filter = 'all' | 'brand' | 'gtm' | 'demand' | 'revops' | 'ai'

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All projects' },
  { key: 'brand', label: 'Brand' },
  { key: 'gtm', label: 'GTM Strategy' },
  { key: 'demand', label: 'Demand Programs' },
  { key: 'revops', label: 'Rev & Marketing Ops' },
  { key: 'ai', label: 'AI & Technology' },
]

/* ── Category colour map ── */

const categoryColors: Record<Exclude<Filter, 'all'>, { tagBg: string; tagText: string; bannerBg: string }> = {
  brand:  { tagBg: 'bg-purple-50',  tagText: 'text-[hsl(264,67%,52%)]',  bannerBg: 'bg-gradient-to-r from-purple-50 to-purple-100/60' },
  gtm:    { tagBg: 'bg-blue-50',    tagText: 'text-blue-600',             bannerBg: 'bg-gradient-to-r from-blue-50 to-blue-100/60' },
  demand: { tagBg: 'bg-emerald-50', tagText: 'text-[hsl(152,55%,42%)]',  bannerBg: 'bg-gradient-to-r from-emerald-50 to-emerald-100/60' },
  revops: { tagBg: 'bg-amber-50',   tagText: 'text-amber-600',            bannerBg: 'bg-gradient-to-r from-amber-50 to-amber-100/60' },
  ai:     { tagBg: 'bg-indigo-50',  tagText: 'text-indigo-600',           bannerBg: 'bg-gradient-to-r from-indigo-50 to-indigo-100/60' },
}

/* ── Project data ── */

interface Project {
  icon: LucideIcon
  title: string
  category: Exclude<Filter, 'all'>
  categoryLabel: string
  desc: string
  outcomes: string[]
}

const projects: Project[] = [
  /* ── Brand ── */
  {
    icon: Sparkles,
    title: 'SAP Emarsys Brand Evolution',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Navigated the brand journey from independent Emarsys through acquisition to SAP Emarsys — managing three distinct brand phases, positioning, and visual identity across all channels and market units.',
    outcomes: [
      'Managed brand evolution across 3 phases',
      'Led 120-page website redevelopment in 4 languages',
      'Re-brand + visual refresh aligned to SAP guidelines',
      'Brand campaign evolved into company positioning',
    ],
  },
  {
    icon: Megaphone,
    title: 'Product Positioning & Messaging',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Deeply collaborative initiatives across product marketing and brand to define omnichannel customer engagement positioning — from messaging framework through to campaign execution and market differentiation.',
    outcomes: [
      'Defined omnichannel positioning framework',
      'Aligned brand, product and demand messaging',
      'Integrated PR, analyst and thought leadership',
      'Executed across multiple product-led campaigns',
    ],
  },
  /* ── GTM Strategy ── */
  {
    icon: Globe,
    title: 'Regional GTM Expansion',
    category: 'gtm',
    categoryLabel: 'GTM Strategy',
    desc: 'Expanded from centralised global marketing to supporting 10+ SAP market units with localised go-to-market programs — partnering with regional revenue teams to build and accelerate demand across geographies.',
    outcomes: [
      'Aligned to SAP territories and 10 new market units',
      '125% market unit expansion in coverage',
      'Regional + global planning and execution model',
      'Per-region inbound planning & actuals reporting',
    ],
  },
  {
    icon: Target,
    title: 'TAM & ICP Alignment',
    category: 'gtm',
    categoryLabel: 'GTM Strategy',
    desc: 'Led data strategy and alignment across go-to-market functions to sharpen targeting, drive efficiency, and create measurable impact — from ideal customer profile definition through to account selection and segmentation.',
    outcomes: [
      'Defined ICP and account selection criteria',
      'Aligned marketing and sales on target accounts',
      '300% industry verticalization expansion',
      '35% increase in average selling price to enterprise',
    ],
  },
  /* ── Demand Programs ── */
  {
    icon: Workflow,
    title: 'Demand Gen Engine Build',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Built the complete demand generation engine from the ground up — team structure, roles & responsibilities, demand waterfall, measurement framework, and RevOps alignment.',
    outcomes: [
      'Aligned marketing to pipeline & revenue metrics',
      'Developed demand waterfall methodology',
      'Built central DG team with clear roles',
      'Advanced measurement of digital and full funnel',
    ],
  },
  {
    icon: Layers,
    title: 'Always-on Engine Architecture',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Designed and operationalised a layered demand engine — from highly scalable centrally managed global programs through to planned regional campaigns and tactical locally-led activity.',
    outcomes: [
      'Three-tier model: always-on, planned, tactical',
      'Centrally managed economies of scale for global programs',
      'Regionally augmented with local campaign activity',
      'Integrated digital, events, and content programs',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Inbound Impact Model',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Created a two-stream inbound approach separating high-intent hand-raisers from marketing signal-based leads — with differentiated SLAs, routing, and measurement for each stream.',
    outcomes: [
      'Two-stream model: hand-raise + marketing signals',
      '99M inbound pipeline ARR over 5 years',
      '68% of marketing revenue from inbound',
      'Tight SLA on demo requests, varying for signals',
    ],
  },
  /* ── Rev & Marketing Ops ── */
  {
    icon: Database,
    title: 'MAP Migration: HubSpot to Marketo',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Led migration from HubSpot to Marketo as marketing automation platform — including data migration, workflow rebuild, integration with Salesforce, and team enablement.',
    outcomes: [
      'Full platform migration with zero data loss',
      'Rebuilt all automated workflows and scoring models',
      'Integrated with Salesforce and reporting stack',
      'Trained team on new platform capabilities',
    ],
  },
  {
    icon: Settings,
    title: 'SAP Integration & Operating Model',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Navigated the full acquisition journey from independent Emarsys to SAP Emarsys — including team restructuring, new go-to-market alignment, and operating within SAP\'s enterprise framework while maintaining marketing targets.',
    outcomes: [
      'Maintained 90% of targets through transition',
      'Adapted to 20% YoY budget reductions',
      'Integrated into SAP processes and governance',
      'Constant optimization between global and regional',
    ],
  },
  {
    icon: BarChart3,
    title: 'Pipeline Council & Measurement',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Established a global pipeline council cadence and multi-dimensional funnel reporting to assess creation, velocity, and linear progression — creating data-driven decision-making across marketing and sales.',
    outcomes: [
      'Global cadence on effectiveness & resourcing',
      'Multi-dimensional funnel reporting built',
      'Regional performance benchmarking',
      'Returned 2x revenue from digital investment',
    ],
  },
  /* ── AI & Technology ── */
  {
    icon: Monitor,
    title: 'Hybrid Events Platform',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Built a re-skinnable festival hub supporting multiple events and on-demand content. Enabled always-hybrid event strategy combining in-person and virtual experiences.',
    outcomes: [
      'Re-skinnable hub for multiple event formats',
      'Multi-event + on-demand capability',
      'Supported global and regional events',
      'Award-winning hybrid festival format',
    ],
  },
  {
    icon: Globe,
    title: 'Website Redevelopment',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: '120-page in-house website rebuild across 4 languages — including 3-minute demo, re-skinnable festival hub, back-end integrated partner hub, and re-brand with visual refresh aligned to SAP Emarsys positioning.',
    outcomes: [
      '120-page site redeveloped in-house',
      '4 language localisations',
      '3-minute interactive demo experience',
      'Back-end integrated partner ecosystem hub',
    ],
  },
  {
    icon: Sparkles,
    title: 'Account-Based Maturity Programme',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Developed and implemented account-based marketing maturity model — from basic targeting through to full ABM with personalised multi-channel programmes, dynamic targeting, and sales integration.',
    outcomes: [
      'Defined ABM maturity levels and roadmap',
      'Built account insights and enrichment capabilities',
      'Integrated with sales outbound workflows',
      'Dynamic personalisation across channels',
    ],
  },
  {
    icon: Bot,
    title: 'AI-augmented Marketing Ops',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Pioneering the integration of AI agents into marketing operations — rethinking how people, process and technology come together with human and agent teams to drive efficiency and creativity at scale.',
    outcomes: [
      'AI-assisted content and campaign workflows',
      'Agent-based automation experiments',
      'Human + AI team operating model design',
      'Exploring AI across the full marketing stack',
    ],
  },
]

/* ── Main component ── */

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            How I Build
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Operational and change management projects — the less visible but critical work that enables everything else. Technology migrations, team builds, and strategic transformations.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                filter === f.key
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects list */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {filtered.map((p, i) => {
            const colors = categoryColors[p.category]
            return (
              <div key={i} className="group rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all overflow-hidden">
                <div className="grid md:grid-cols-[1fr,320px]">
                  {/* Content + banner */}
                  <div className="p-8 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                        <p.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <span className={`text-xs font-semibold uppercase tracking-wider ${colors.tagText}`}>{p.categoryLabel}</span>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">{p.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                    {/* Placeholder image banner — fills remaining space */}
                    <div className={`${colors.bannerBg} rounded-lg mt-auto flex items-center justify-center gap-2 py-4`}>
                      <Monitor className="w-4 h-4 text-gray-300" />
                      <span className="text-xs text-gray-400 italic">Slide preview — placeholder</span>
                    </div>
                  </div>

                  {/* Outcomes */}
                  <div className="bg-gray-50 p-8 border-l border-gray-100">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Key outcomes</h4>
                    <div className="space-y-3">
                      {p.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(152,55%,42%)] shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600 leading-snug">{o}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16">No projects match this filter.</p>
          )}
        </div>
      </section>
    </div>
  )
}
