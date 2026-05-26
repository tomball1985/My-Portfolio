import {
  Compass, Briefcase, Heart, ArrowRight, Layers,
  Database, BarChart3, Globe, TrendingUp, RefreshCw, ChevronRight,
  MonitorPlay, Users, Play
} from 'lucide-react'
import { LinkedinIcon } from '../components/ui/linkedin-icon'
import { PolaroidGallery } from '../components/PolaroidGallery'
import { useEffect, useState } from 'react'

type Route = 'home' | 'engines' | 'campaigns' | 'projects' | 'teams' | 'about' | 'connect'
type Tab = 'principles' | 'frameworks' | 'leadership' | 'experience' | 'outside'

const principles: { title: string; image: string; desc: string }[] = [
  { title: 'Revenue Aligned', image: '/Core_Principles_Images/65.jpg', desc: 'Speak the language of the board — ARR, NRR, CAC, pipeline. Marketing CREATES value, it is not a cost-centre. OKRs cascade from company-level metrics down to programs and individuals.' },
  { title: 'Systems Thinking & AI', image: '/Core_Principles_Images/69.jpg', desc: 'People. Process. Technology. How work gets done is a differentiator now - from individuals prompting to agentic workflows with humans in the loop. Always in beta.' },
  { title: 'Brand <> Demand', image: '/Core_Principles_Images/74.jpg', desc: 'Brand and demand compound — they feed each other. A trusted brand with product-market fit is a multiplier for every demand activity, and brand equity goes far beyond a logo.' },
  { title: 'Product AND Marketing Fit', image: '/Core_Principles_Images/75.jpg', desc: 'Product market-fit alone is not enough. Build a real two-way relationship with product — advocate for the customer, frame solutions in their language, ride on the tips of your skis whilst retaining product truth.' },
  { title: 'Demand Engine', image: '/Core_Principles_Images/78.jpg', desc: 'Build end-to-end. Start with fundamentals, and then add the programs that match your audience, ICP, growth stage and GTM motion. Measure the loops.' },
  { title: 'Content = Lifeblood', image: '/Core_Principles_Images/79.jpg', desc: 'Content is the fuel for the engine and the lifeblood of the team. Everyone in marketing creates it. Format, audience and channel matter — relentlessly help the customer do their job better, including them making it easy to do their research, evaluate and buy.' },
  { title: 'Customer Flywheel', image: '/Core_Principles_Images/80.jpg', desc: 'Get close to the customer. Capture and share understanding across the business in digestible formats. Hero the customer at every opportunity, elevate them, connect them with their peers.' },
  { title: 'Community + Experiences', image: '/Core_Principles_Images/81.jpg', desc: 'Emotion creates memory; memory shapes perception. Repeated, human, sensory experiences — build community-worthy momentum in-person and online.' },
  { title: 'GTM Foundations & RevOps', image: '/Core_Principles_Images/82.jpg', desc: 'Partner to build the GTMOS and decide based on data. From lead-to-cash definitions through to dashboards GTM trusts. Data layer first, workflow & AI to multiply.' },
  { title: 'Human to Human', image: '/Core_Principles_Images/83.jpg', desc: 'We market and sell to humans (for now). Stand out, stimulate emotion, ask "would XXX really care?". Bring taste, humour and low ego — stress-test with real customers.' },
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

const leadershipValues = [
  { title: 'Senior Leadership Team', description: 'Member of the Marketing XLT and Emarsys XSLT (extended SLT) at SAP Emarsys, reporting directly to the CMO. Earlier in career: youngest operational board member at immediate future, the London digital agency. Senior leadership exposure across both agency and SaaS sides of the industry.' },
  { title: 'Revenue Accountable', description: 'Joint accountability with Revenue for pipeline targets, and net new ARR. Annual and quarterly pipeline forecasting in partnership with revenue operations and finance, underpinned by demand waterfall design, lead scoring, and stage-conversion diagnostics.' },
  { title: 'High-Growth Operating', description: 'Two companies from Series B/C through to exit: Clicktale (Series C → exit, KKR-owned), Contentsquare (Series C, now scaled), and SAP Emarsys ($98M → $176M ARR, Series B → exit). Pattern of leading marketing through scale-up and successful liquidity events.' },
  { title: 'Finance & Budget Management', description: 'Trusted relationship with the CFO, finance and procurement. Experience managing and optimizing against pipeline efficiency, CAC:LTV and in agency life, EBITDA. Direct responsibility for 2M+ programs budget, people and strategic decision on technology deployment across all of marketing. Navigated YoY budget reductions whilst delivering double-digit YoY pipeline efficiency.' },
  { title: 'Board Experience', description: "Multi-year board-level exposure across SaaS and private-equity ownership contexts. Content preparation and presence at SAP's 3-in-a-box GTM leadership model (Revenue, Marketing, Product & Engineering) — translating marketing performance and plans into the language commercial leadership operates in. Earlier: board-level reporting during KKR's PE ownership of Clicktale, including the run-in to the Contentsquare acquisition." },
  { title: 'Cross-Functional Executive Partnership', description: 'Senior strategic partner to revenue, customer success, product, and IT leadership. Marketing decisions stress-tested across functions before they ship. Recommended by three CROs, two CSOs, and a COO on cross-functional credibility specifically. Project lead for a number of transformation, technology and big impact initiatives — both internally and externally.' },
  { title: 'Brand & Product Positioning', description: 'Multiple successive brand and product repositionings — most recently from Emarsys to SAP through a phased integration, previously through the Clicktale–Contentsquare merger and a proposition rebuild at Clicktale. Accountable for creative process, senior stakeholder buy-in, message housing, and internal/external rollout. I have worked in-house and in partnership with external agencies not withstanding years of agency experience working on brand, creative and communications clients.' },
  { title: 'GTM Strategy', description: "Lead author of SAP Emarsys' marketing GTM strategy, developed in partnership with product marketing and revenue leadership. Joint definition of TAM, ICP, and priority segments; investment allocation across global programs and regional motions; channel mix, capability investment, and the three-year roadmap." },
  { title: 'Org Structure & Development', description: "Led team integrations, operating model resets, and budget rationalisations through multiple cycles: post-acquisition integration at Contentsquare, the demand gen rebuild at Clicktale, and a 30% budget cut at SAP Emarsys absorbed without dropping pipeline targets. Cut what wasn't working, redeployed what was, kept teams intact through change." },
  { title: 'Global Talent Leadership', description: 'Up to 12 direct-line reports in multiple disciplines across EMEA, North America, and APAC. Weekly 1-1s, monthly mentoring and quarterly OKRs along with growth plans for various team members promoted into senior roles across both SaaS and agency tenures.' },
  { title: 'MarTech & AI Strategy', description: 'Owned the martech stack vision and replatforming roadmap. Migrations led: Hubspot → Marketo, GoToMeeting → On24, plus core stack optimization Clearbit, LeanData, Dreamdata, GA4. Currently leading human + AI orchestration of the demand engine — the modernisation thread that earned the GTM Strategy & Transformation remit.' },
  { title: 'Company-Wide OKR Ownership', description: 'Co-author of company-level OKRs working for CEO as part of XSLT. Translate strategy into measurable marketing objectives that ladder to revenue, retention, and transformation outcomes — and make them legible to the board.' },
  { title: 'M&A Integration', description: "Twice in senior leadership through acquisition transitions: post-Clicktale acquisition by Contentsquare in 2019, and currently leading marketing's contribution to Emarsys' integration into SAP. Operating model design, demand waterfall redesign, brand and digital governance, corporate communications, evolved product messaging and stakeholder alignment across GTM and C-Suite." },
]

const recommendationQuotes = [
  {
    quote: "He's the kind of leader who raises the bar quietly: by how he frames challenges, how he develops people, and how he connects team execution back to business outcomes.",
    attribution: 'Former direct report · Global Marketing, B2B SaaS',
    theme: 'leadership · raises the bar',
  },
  {
    quote: "Tom's skill is to connect different areas and objectives and align them to a plan that allows everyone to understand the message and focus.",
    attribution: 'Former senior leader · CX & CRM, Enterprise SaaS',
    theme: 'clarity · alignment',
  },
  {
    quote: 'Tom is very effective at setting the direction, connecting the people, and clearing the way in order to turn the needle in the right direction.',
    attribution: 'Former direct report · MarTech & GTM Ops',
    theme: 'direction · clearing the way',
  },
  {
    quote: 'When you have somebody like Tom in your marketing team, he really becomes the bridge between Sales and Marketing.',
    attribution: 'Former CRO · CX SaaS',
    theme: 'bridge · sales & marketing',
  },
  {
    quote: "Many marketers claim to drive 'digital transformation', but Tom lives and breathes it.",
    attribution: 'Former direct report · Demand Gen, B2B SaaS',
    theme: 'digital transformation',
  },
  {
    quote: 'He reinvented the way we were going about demand generation and the results that followed were remarkable.',
    attribution: 'Former CEO · B2B SaaS',
    theme: 'reinvention · results',
  },
  {
    quote: "Tom doesn't just think in terms of leads or campaigns; he looks at how strategy, technology, data, and people all fit together.",
    attribution: 'Former colleague · Enterprise sales leadership',
    theme: 'systems thinker',
  },
  {
    quote: "He doesn't just get the job done—he builds scalable, repeatable processes that deliver measurable impact.",
    attribution: 'Former peer · Product Marketing, Martech',
    theme: 'scalable · measurable',
  },
  {
    quote: 'He is a super creative, smart marketer who excels as brand/product messaging and building brand recognition.',
    attribution: 'Former peer · Brand & Product Marketing',
    theme: 'brand · messaging',
  },
  {
    quote: 'Tom is an inspirational leader, a fantastically creative strategist, and has the widest knowledge of the digital landscape of anyone I have worked with.',
    attribution: 'Former senior leader · Digital agency',
    theme: 'inspirational · creative strategist',
  },
]

type TimelineEntry = {
  period: string
  role: string
  company: string
  context?: string
  highlights: string[]
}

const timeline: TimelineEntry[] = [
  {
    period: 'Aug 2025 — Present',
    role: 'VP Marketing — GTM Strategy & Transformation, Engagement Cloud',
    company: 'SAP',
    context: 'Mid-market / Enterprise B2B SaaS · Martech · Series B → Exit · $98M → $176M ARR',
    highlights: [
      'Senior leadership role reporting directly to the CMO; member of the Marketing XLT and the Engagement Cloud XSLT.',
      'Strategic driver across GTM planning, integration and marketing transformation, aligned with SAP global marketing and CX solution GTM.',
      "Leading marketing's contribution to Engagement Cloud's integration journey within SAP, including operating model and planning alignment.",
      'Oversee global marketing planning and change initiatives spanning the full marketing organisation.',
      'Partner with revenue, product and IT leadership on company-wide transformation work-streams.',
    ],
  },
  {
    period: 'Jan 2020 — Aug 2025',
    role: 'Global VP Demand Generation',
    company: 'Emarsys (Acquired by SAP)',
    context: 'Mid-market / Enterprise B2B SaaS · Martech · Direct team of 10 (extended 16) · 7 regional field marketing & SDR teams',
    highlights: [
      'Hit 45% marketing-sourced pipeline targets every year for 5 consecutive years, generating $154M ARR pipeline and $32M ARR closed-won.',
      'Built a Demand Gen Center of Excellence from scratch to 10 FTE, supporting 7 regions across web, organic search, PPC, paid media, social, email, nurture, webinar, content syndication and direct mail.',
      'Redeveloped the company website with new messaging, driving a 21% increase in high-intent inbound and 5% lift in site conversion.',
      'Delivered double-digit YoY pipeline efficiency growth from an always-on paid media engine while absorbing a 30% budget cut.',
      'Led the multi-award-winning digital festival "Retail Renaissance," evolved into an annual hybrid brand event generating $1.6M ARR.',
    ],
  },
  {
    period: 'Jul 2019 — Dec 2019',
    role: 'Global VP Demand Gen & Digital Marketing',
    company: 'Contentsquare',
    context: 'Mid-market / Enterprise B2B SaaS · CX · Series C · ~$65M ARR · Post-acquisition integration',
    highlights: [
      "Selected to lead the newly formed global demand centre following Contentsquare's acquisition of Clicktale.",
      'Led cross-functional change projects across the combined organisation, including demand waterfall redesign.',
      'Drove CRM and marketing automation migration as a core post-acquisition integration work-stream.',
      'Project-led a new global website to align messaging and brand for the merged entity.',
      'Supported regional teams in executing global and local demand programs throughout the integration period.',
    ],
  },
  {
    period: 'Jul 2017 — Jul 2019',
    role: 'Director, Global Demand Gen, Digital & Content',
    company: 'Clicktale (Acquired by ContentSquare)',
    context: 'Mid-market / Enterprise B2B SaaS · CX · Series C → Exit · $18M → $26M ARR · Direct team of 5 (extended 11) · Enterprise focus across NA & EMEA',
    highlights: [
      'Generated $33M ARR in marketing-sourced pipeline across 2017–2018 with 63% demand gen contribution.',
      'Delivered $6.7M ARR in revenue through the demand gen motion across the same period.',
      'Built a webinar program generating $1.4M ARR (10x ROI) and $13M ARR in influenced pipeline.',
      'Created a new lead nurture program generating $900K ARR revenue, $7.5M ARR influenced revenue and $20M ARR influenced pipeline.',
      'Rebuilt paid media strategy to deliver a 65% reduction in cost-per-quality-lead and 38% reduction in cost-per-MQL.',
    ],
  },
  {
    period: 'Jan 2017 — Jul 2019',
    role: 'GTM, Demand Gen & Digital Advisor',
    company: 'Freelance / Independent',
    context: 'Consultative services to B2B SaaS & services clients · concurrent with Clicktale role',
    highlights: [
      'Delivered consultative GTM, demand gen and digital advisory across B2B SaaS and B2B services clients.',
      'Aeris Communications (IoT cloud technology) — social selling training for global SDR and marketing teams.',
      'Brainloop (B2B SaaS) & IFS (ERP cloud technology) — digital demand gen strategy and execution.',
      'Octopus Group & Seven (B2B agencies) — digital demand gen and content strategy and execution.',
      'Acted as a flexible, fractional demand gen leader — adapting playbooks for early-stage and scaling B2B SaaS clients.',
    ],
  },
  {
    period: 'Aug 2016 — Dec 2016',
    role: 'Associate Digital Director',
    company: 'Weber Shandwick, London',
    context: 'Leading PR & Communications agency',
    highlights: [
      'Associate Digital Director at Weber Shandwick London, a leading global PR & Communications agency.',
      'Led digital strategy and execution across consumer and B2B accounts including Aldi UK, Nespresso EMEA, Centrica (British Gas) and Project Literature.',
      'Contributed to the multi-award-winning Aldi "Kevin the Carrot" 2017 Christmas campaign.',
      'Drove integration of digital, social and content strategy alongside earned-media specialists.',
      'Developed digital programs for global brands operating across multi-market and multi-language footprints.',
    ],
  },
  {
    period: 'Oct 2014 — Aug 2016',
    role: 'Strategy Director',
    company: 'immediate future, London',
    context: 'Digital & social media agency',
    highlights: [
      'Strategy Director at immediate future, a London-based digital and social media agency.',
      'Led strategy across a portfolio of B2B brands including Thomson Reuters, IBM, Orange Business, Sage, Fujitsu, Motorola Solutions and Basware.',
      'Delivered award-winning campaigns and earned multiple nominations and wins for work with Thomson Reuters, IBM and Orange Business.',
      'Set strategic direction across paid, owned and earned digital and social channels for B2B and consumer accounts.',
      'Worked on consumer brands including Cineworld, Interflora, Pearson, Southbank Centre and Lastminute.com.',
    ],
  },
]

export function About({ navigate }: { navigate: (r: Route) => void }) {
  const [tab, setTab] = useState<Tab>('principles')
  const [activePrincipleIdx, setActivePrincipleIdx] = useState(0)
  const [activeValueIdx, setActiveValueIdx] = useState<number | null>(null)
  const [valueCols, setValueCols] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.matchMedia('(min-width: 1024px)').matches) setValueCols(3)
      else if (window.matchMedia('(min-width: 640px)').matches) setValueCols(2)
      else setValueCols(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <div>
      {/* Header — left text + right video placeholder */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                Marketing Leader
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About me</h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                Here's more about me in work and outside. My core principles for building successful marketing teams, leadership experience across 15+ years in marketing, favourite frameworks I like to deploy and what makes me tick in everyday life.
              </p>
            </div>

            {/* Right — Hero image */}
            <div className="relative">
              <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl shadow-purple-200/50">
                <img
                  src="/About/1707408878954.jpeg"
                  alt="Tom Ball"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[hsl(152,55%,42%)]/10 blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[hsl(264,67%,52%)]/10 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Tab toggle — 3 tabs */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2">
          <button
            onClick={() => setTab('principles')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'principles' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Compass className="w-4 h-4" /> Core Marketing Principles
          </button>
          <button
            onClick={() => setTab('leadership')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'leadership' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users className="w-4 h-4" /> Leadership Experience
          </button>
          <button
            onClick={() => setTab('frameworks')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'frameworks' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Layers className="w-4 h-4" /> Favourite Frameworks
          </button>
          <button
            onClick={() => setTab('experience')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'experience' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Briefcase className="w-4 h-4" /> Career Timeline
          </button>
          <button
            onClick={() => setTab('outside')}
            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              tab === 'outside' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart className="w-4 h-4" /> Outside Work
          </button>
        </div>
      </section>

      {/* Tab content */}
      {tab === 'principles' && (
        <section id="core-principles" className="py-16 bg-white scroll-mt-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Marketing Principles
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">10 core concepts</h2>
            <p className="text-gray-500 mb-10 max-w-xl">The way I approach bringing marketing to life and creating value.</p>

            <div className="grid md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] gap-6 items-start">
              {/* Left — detail */}
              <div className="rounded-xl border border-gray-100 bg-white p-8 md:sticky md:top-32">
                <div className="text-xs font-semibold text-[hsl(264,67%,52%)] tracking-wider uppercase mb-5">
                  Principle {String(activePrincipleIdx + 1).padStart(2, '0')}
                </div>
                <div className="aspect-video rounded-lg overflow-hidden mb-5 bg-gray-100">
                  <img
                    src={principles[activePrincipleIdx].image}
                    alt={principles[activePrincipleIdx].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">{principles[activePrincipleIdx].desc}</p>
                <button
                  type="button"
                  disabled
                  className="mt-6 inline-flex items-center gap-2.5 px-5 py-3 bg-[hsl(264,67%,52%)] text-white text-sm font-semibold rounded-lg shadow-sm shadow-purple-200 cursor-default"
                >
                  <Play className="w-4 h-4 fill-white" />
                  Coming soon
                </button>
              </div>

              {/* Right — numbered list */}
              <div className="rounded-xl border border-gray-100 bg-white overflow-hidden">
                {principles.map((p, i) => {
                  const active = i === activePrincipleIdx
                  const selectRow = () => setActivePrincipleIdx(i)
                  return (
                    <div
                      key={i}
                      role="button"
                      tabIndex={0}
                      onMouseEnter={selectRow}
                      onFocus={selectRow}
                      onClick={selectRow}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          selectRow()
                        }
                      }}
                      className={`w-full grid grid-cols-[44px,1fr,auto] items-center gap-3 px-4 py-3 text-left border-l-2 transition-colors cursor-pointer ${
                        active
                          ? 'border-[hsl(264,67%,52%)] bg-purple-50/60'
                          : 'border-transparent hover:bg-gray-50'
                      }`}
                    >
                      <span
                        className={`text-sm font-medium ${active ? 'text-[hsl(264,67%,52%)]' : 'text-gray-400'}`}
                        style={{ fontFamily: 'Space Grotesk' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className={`text-sm font-semibold ${active ? 'text-[hsl(264,67%,52%)]' : 'text-gray-900'}`}>
                        {p.title}
                      </span>
                      <button
                        type="button"
                        disabled
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[hsl(264,67%,52%)] text-white text-xs font-semibold rounded-md shadow-sm cursor-default"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        Coming soon
                      </button>
                    </div>
                  )
                })}
              </div>
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
              <div className="rounded-xl bg-white border border-gray-200 overflow-hidden">
                <img
                  src="/frameworks/Signal_Framework_2.png"
                  alt="Full funnel signal map across signals, tech stack, content and channels"
                  className="w-full h-auto block"
                />
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
              <div className="rounded-xl bg-white border border-gray-200 overflow-hidden">
                <img
                  src="/frameworks/Audience_First_Framework.png"
                  alt="Audience-first Marketing — relevance at scale content distribution framework"
                  className="w-full h-auto block"
                />
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

      {tab === 'leadership' && (
        <>
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Leadership Experience
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Key credentials</h2>
            <p className="text-gray-500 mb-10 max-w-xl">Thirteen areas of leadership scope and capability built up across SaaS and agency tenures. Click any card to read more.</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(() => {
                const out: React.ReactNode[] = []
                const activeRow = activeValueIdx == null ? -1 : Math.floor(activeValueIdx / valueCols)
                leadershipValues.forEach((v, i) => {
                  const isActive = i === activeValueIdx
                  out.push(
                    <button
                      key={`card-${i}`}
                      onClick={() => setActiveValueIdx(isActive ? null : i)}
                      className={`text-left border rounded-xl bg-white p-5 flex flex-col justify-between min-h-[130px] transition-all ${
                        isActive
                          ? 'border-[hsl(264,67%,52%)] bg-purple-50/60'
                          : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
                      }`}
                    >
                      <span
                        className={`text-sm tabular-nums font-semibold ${isActive ? 'text-[hsl(264,67%,52%)]' : 'text-gray-400'}`}
                        style={{ fontFamily: 'Space Grotesk' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3
                        className="font-bold text-base text-gray-900 leading-snug mt-3"
                        style={{ fontFamily: 'Space Grotesk' }}
                      >
                        {v.title}
                      </h3>
                      <span className="text-xs text-gray-400 mt-3 flex items-center justify-between">
                        <span>{isActive ? 'click to close' : 'click to reveal'}</span>
                        <span
                          className={`text-lg leading-none ${isActive ? 'text-[hsl(264,67%,52%)]' : 'text-gray-300'}`}
                        >
                          {isActive ? '−' : '+'}
                        </span>
                      </span>
                    </button>
                  )

                  const rowOfThisCard = Math.floor(i / valueCols)
                  const isLastInRow = (i + 1) % valueCols === 0 || i === leadershipValues.length - 1
                  if (isLastInRow && rowOfThisCard === activeRow && activeValueIdx != null) {
                    const a = leadershipValues[activeValueIdx]
                    out.push(
                      <div key={`strip-${i}`} className="sm:col-span-2 lg:col-span-3">
                        <div className="rounded-xl p-6 border bg-purple-50/60 border-purple-100">
                          <div
                            className="text-xs font-semibold tracking-wide uppercase mb-2 text-[hsl(264,67%,52%)]"
                            style={{ fontFamily: 'Space Grotesk' }}
                          >
                            {String(activeValueIdx + 1).padStart(2, '0')} · {a.title}
                          </div>
                          <p className="text-gray-700 leading-relaxed">{a.description}</p>
                        </div>
                      </div>
                    )
                  }
                })
                return out
              })()}
            </div>
          </div>
        </section>

        {/* Word cloud — themes from recommendations */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Leadership Experience
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Style and Characteristics</h2>
            <p className="text-gray-500 mb-10 max-w-xl">
              Recurring traits and qualities pulled from my LinkedIn recommendations - colleagues, managers, peers and clients in their own words.
            </p>
            <div className="rounded-xl bg-white border border-gray-100 p-6 md:p-10 flex items-center justify-center">
              <img
                src="/About/tom-ball-leadership-word-cloud.svg"
                alt="Word cloud of recurring themes from Tom Ball's LinkedIn recommendations — passionate, strategic, collaborative, knowledgeable, energy, creative, driven, decisive, builder, bridge, connector, trusted, inspiring, clarity"
                className="w-full max-w-3xl h-auto"
              />
            </div>
          </div>
        </section>

        {/* In their words — extracted quotes */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Leadership Experience
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What My Colleagues Say</h2>
            <p className="text-gray-500 mb-10 max-w-xl">
              Here's what my colleagues say about my leadership.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {recommendationQuotes.map((q, i) => (
                <figure key={i} className="rounded-xl bg-gray-50 border border-gray-100 p-7 flex flex-col">
                  <div
                    className="text-[hsl(264,67%,52%)] leading-none mb-4"
                    style={{ fontFamily: 'Space Grotesk', fontSize: '2.5rem' }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </div>
                  <blockquote className="text-gray-800 leading-relaxed mb-5 flex-1">
                    {q.quote}
                  </blockquote>
                  <figcaption className="border-t border-gray-100 pt-4">
                    <div className="text-sm font-semibold text-gray-900">{q.attribution}</div>
                    <div className="text-xs text-[hsl(264,67%,52%)] tracking-wide uppercase font-semibold mt-1">
                      {q.theme}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* View more on LinkedIn — under the grid */}
            <div className="mt-10 flex justify-center">
              <a
                href="https://www.linkedin.com/in/tomball1985/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[hsl(264,67%,52%)] bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                View more on LinkedIn
              </a>
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                Career Timeline
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Job experience</h2>
              <p className="text-gray-500 mb-12 max-w-xl">High-level breakdown of my roles, responsibilities and achievements.</p>
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
                      <p className="text-sm text-[hsl(264,67%,52%)] font-medium mb-2">{t.company}</p>
                      {t.context && (
                        <p className="text-xs text-gray-400 mb-4 leading-relaxed">{t.context}</p>
                      )}
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

              {/* View more on LinkedIn — under the timeline */}
              <div className="mt-10 flex justify-center">
                <a
                  href="https://www.linkedin.com/in/tomball1985/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[hsl(264,67%,52%)] bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  View more on LinkedIn
                </a>
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

      {tab === 'outside' && <PolaroidGallery />}

      {/* Fixed CTA — always visible below tabs */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
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
