import { useState } from 'react'
import {
  CheckCircle2, Settings, Workflow, Database, Monitor, Sparkles,
  Globe, BarChart3, Target, Layers, TrendingUp, Bot, Megaphone,
  Tag as TagIcon, ArrowUpRight, X,
  BookOpen, Users, Mic, Share2, Star, Compass, Link, Map,
  Calculator, Mail, Calendar, Building, PlayCircle, Video,
  RefreshCw, Headphones, Lightbulb, Filter, Eye, Wrench,
  PieChart, FileText, Radio, Code, Search, Zap, Youtube,
  ArrowDownUp, LayoutDashboard, Library,
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

const categoryColors: Record<Exclude<Filter, 'all'>, {
  tagBg: string; tagText: string; bannerBg: string; accent: string
  accentLight: string; accentLightHover: string
  slideGradient: string; slideAccent: string
}> = {
  brand: {
    tagBg: 'bg-purple-50', tagText: 'text-[hsl(264,67%,52%)]',
    bannerBg: 'bg-gradient-to-r from-purple-50 to-purple-100/60',
    accent: 'hsl(264,67%,52%)',
    accentLight: 'bg-purple-50 text-purple-700 border-purple-200',
    accentLightHover: 'hover:bg-purple-100',
    slideGradient: 'linear-gradient(135deg, #2d1b69 0%, #4c1d95 40%, #6d28d9 100%)',
    slideAccent: '#a78bfa',
  },
  gtm: {
    tagBg: 'bg-blue-50', tagText: 'text-blue-600',
    bannerBg: 'bg-gradient-to-r from-blue-50 to-blue-100/60',
    accent: '#2563eb',
    accentLight: 'bg-blue-50 text-blue-700 border-blue-200',
    accentLightHover: 'hover:bg-blue-100',
    slideGradient: 'linear-gradient(135deg, #1e3a5f 0%, #1e40af 40%, #3b82f6 100%)',
    slideAccent: '#93c5fd',
  },
  demand: {
    tagBg: 'bg-emerald-50', tagText: 'text-[hsl(152,55%,42%)]',
    bannerBg: 'bg-gradient-to-r from-emerald-50 to-emerald-100/60',
    accent: '#059669',
    accentLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    accentLightHover: 'hover:bg-emerald-100',
    slideGradient: 'linear-gradient(135deg, #064e3b 0%, #047857 40%, #10b981 100%)',
    slideAccent: '#6ee7b7',
  },
  revops: {
    tagBg: 'bg-amber-50', tagText: 'text-amber-600',
    bannerBg: 'bg-gradient-to-r from-amber-50 to-amber-100/60',
    accent: '#d97706',
    accentLight: 'bg-amber-50 text-amber-700 border-amber-200',
    accentLightHover: 'hover:bg-amber-100',
    slideGradient: 'linear-gradient(135deg, #78350f 0%, #b45309 40%, #f59e0b 100%)',
    slideAccent: '#fcd34d',
  },
  ai: {
    tagBg: 'bg-indigo-50', tagText: 'text-indigo-600',
    bannerBg: 'bg-gradient-to-r from-indigo-50 to-indigo-100/60',
    accent: '#4f46e5',
    accentLight: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    accentLightHover: 'hover:bg-indigo-100',
    slideGradient: 'linear-gradient(135deg, #312e81 0%, #4338ca 40%, #6366f1 100%)',
    slideAccent: '#a5b4fc',
  },
}

/* ── Project data ── */

interface Project {
  icon: LucideIcon
  title: string
  category: Exclude<Filter, 'all'>
  categoryLabel: string
  desc: string
  outcomes: string[]
  tags: string[]
  hasSlide: boolean
}

const projects: Project[] = [
  /* ── Brand ── */
  {
    icon: Sparkles,
    title: 'SAP Emarsys Brand Evolution',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Navigated the brand journey from independent Emarsys through acquisition to SAP Emarsys — managing three distinct brand phases, positioning, and visual identity across global channels and market units.',
    outcomes: [
      'Managed brand evolution across 3 distinct phases',
      'Led 120-page website redevelopment across 5 languages',
      'Delivered rebrand and visual refresh aligned to SAP guidelines',
      'Brand campaign evolved into company-wide positioning',
    ],
    tags: ['Brand Architecture', 'Post-Acquisition Rebrand', 'Global Positioning', 'Visual Identity', 'Multi-Phase Transformation'],
    hasSlide: true,
  },
  {
    icon: Megaphone,
    title: '\u201CThe Only Omnichannel Customer Engagement Platform\u201D Messaging & Positioning Platform',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Led implementation of new messaging platform across website, digital platforms, campaigns, and sales enablement — working with cross-functional senior leadership team.',
    outcomes: [
      'Emarsys record-breaking years in 2020 and 2021',
      'Sales enablement training',
      'Analyst leadership positions in Gartner and Forrester',
      'Competitor adoption of \u201Comnichannel\u201D messaging',
    ],
    tags: ['Messaging Platform', 'Competitive Positioning', 'Sales Enablement', 'Analyst Recognition', 'Category Leadership'],
    hasSlide: true,
  },
  {
    icon: BookOpen,
    title: '\u201CWe Tell the Story\u2026\u201D Messaging & Positioning Platform',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Evolution of Clicktale messaging pre-acquisition. Led creative, concepting, and implementation across brand platforms and external-facing content through digital and events.',
    outcomes: [
      'Messaging that contributed to ContentSquare acquisition',
      'Analyst praise through interviews and published reports',
      'Impactful new event creative and SME-led delivery',
      'Human visuals replaced stock imagery',
    ],
    tags: ['Brand Storytelling', 'Pre-Acquisition Positioning', 'Creative Direction', 'Event-Led Messaging', 'Visual Transformation'],
    hasSlide: true,
  },
  {
    icon: Users,
    title: '\u201CThe Power of 2\u201D M&A Messaging',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Developed cross-company messaging strategy for the Contentsquare acquisition of Clicktale — creating internal and external communications that positioned the merger as a strategic doubling of ARR and geographic expansion into North America.',
    outcomes: [
      'Developed unified M&A messaging across two C-level teams',
      'Delivered PR, press release, and social media announcement plan',
      'Managed website migration and co-branded communications',
      'Created phased integration plan bringing properties under one roof',
    ],
    tags: ['M&A Communications', 'Executive Stakeholder Alignment', 'Cross-Company Messaging', 'PR & Press Strategy', 'Integration Planning'],
    hasSlide: true,
  },
  {
    icon: Mic,
    title: 'Dr Liraz Margalit — Subject Matter Expert Coaching & Development',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Partnered with behavioural psychology PhD to develop and amplify thought leadership — translating academic insight into market-ready content, keynote presentations, webinar series, and influencer collaborations across digital experience.',
    outcomes: [
      'Built keynote-to-webinar content engine generating pipeline',
      'Co-created \u2018digital body language\u2019 narrative for CX market',
      'Partnered with Brian Solis to amplify reach and credibility',
      'Distributed via paid media, email, social, and CX Network',
    ],
    tags: ['Thought Leadership', 'Influencer Collaboration', 'Keynote-to-Pipeline', 'Digital Body Language', 'SME Amplification'],
    hasSlide: true,
  },
  {
    icon: Share2,
    title: 'Employee Advocacy via LinkedIn Recommended Content',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Leveraged LinkedIn\u2019s Recommended Content feature to scale employee advocacy — curating a back-catalogue of customer stories and product moments for one-click sharing, introduced around a key release moment to drive adoption.',
    outcomes: [
      'Scaled employee advocacy without new tooling investment',
      'Back-catalogue of customer stories and product moments curated',
      'One-click share adoption launched around release moment',
      'Integrated into ongoing content distribution rhythm',
    ],
    tags: ['Employee Advocacy', 'LinkedIn Amplification', 'Zero-Cost Innovation', 'Content Distribution', 'Organic Reach Scaling'],
    hasSlide: true,
  },
  {
    icon: Star,
    title: 'Customer Story Pipeline & Review Engine',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Built an operational engine for sourcing, managing, and scaling customer stories and reviews — from G2 and Gartner Peer Review through to full customer stories, event participation, and references, coordinated across CSM and marketing teams.',
    outcomes: [
      '30% YoY uplift in customer story creation',
      '50% increase across all customer participation formats',
      'Contributed to successful Gartner analyst placement',
      'Unified request flow reducing customer communication overlap',
    ],
    tags: ['Customer Advocacy Engine', 'G2 & Gartner Reviews', 'Analyst Placement', 'Reference Management', 'Story Pipeline'],
    hasSlide: true,
  },
  {
    icon: Layers,
    title: 'Omnichannel Capability Pages',
    category: 'brand',
    categoryLabel: 'Brand',
    desc: 'Deepened product marketing across nine channel capabilities on the website — collaborating with product owners on feature-level messaging, aligning customer stories to channel use cases, and using keyword research to optimise structure.',
    outcomes: [
      '9 capability pages built with feature-level depth',
      'Customer stories realigned to channel-specific use cases',
      'Keyword research driving content structure and grouping',
      'Product and marketing alignment on external messaging',
    ],
    tags: ['Product-Led Content', 'Omnichannel Messaging', 'Channel Capability Depth', 'Keyword-Led Architecture', 'Product-Marketing Alignment'],
    hasSlide: true,
  },
  /* ── GTM Strategy ── */
  {
    icon: Globe,
    title: 'Regional GTM Expansion',
    category: 'gtm',
    categoryLabel: 'GTM Strategy',
    desc: 'Scaled from centralised global marketing to supporting 10+ SAP market units with localised go-to-market programs — partnering with regional revenue teams to build and accelerate demand across geographies.',
    outcomes: [
      'Aligned to SAP territories and 10 new market units',
      '125% expansion in market unit coverage',
      'Established regional + global planning and execution model',
      'Per-region inbound planning and actuals reporting',
    ],
    tags: ['Regional GTM', 'Market Unit Scaling', 'Localised Demand', 'Revenue Partnership', 'Global-to-Local Execution'],
    hasSlide: true,
  },
  {
    icon: Target,
    title: 'TAM Expansion & ICP Alignment',
    category: 'gtm',
    categoryLabel: 'GTM Strategy',
    desc: 'Led data strategy and cross-functional alignment to sharpen targeting and drive measurable impact — from ideal customer profile definition through account selection and industry segmentation.',
    outcomes: [
      'Defined ICP and account selection criteria',
      'Aligned marketing and sales on target accounts',
      '300% expansion in industry verticalisation',
      '35% increase in enterprise average selling price',
    ],
    tags: ['ICP Definition', 'Account Selection', 'Industry Verticalisation', 'Enterprise ASP Growth', 'Data-Led Targeting'],
    hasSlide: true,
  },
  {
    icon: Compass,
    title: 'Red Badger — Brand-to-Demand Strategy Build',
    category: 'gtm',
    categoryLabel: 'GTM Strategy',
    desc: 'Engaged in freelance capacity to translate an internal brand platform into an externally facing demand and content strategy — delivering a two-year activation plan built through workshops, customer insight, and SME-led content.',
    outcomes: [
      'Delivered two-year demand and content activation plan',
      'Built thematic content calendar with cadences and tactics',
      'Established internal working groups and SME-led approach',
      'Workshop-led strategy grounded in ICP and customer outcomes',
    ],
    tags: ['Brand-to-Demand', 'Strategic Advisory', 'Workshop-Led Planning', 'Content Strategy', 'Two-Year Activation'],
    hasSlide: true,
  },
  {
    icon: Link,
    title: 'Regional Top-of-Funnel Interlock Program',
    category: 'gtm',
    categoryLabel: 'GTM Strategy',
    desc: 'Established structured regional cadences connecting global demand gen with field marketing, SDRs, sales leadership, partner managers, and customer teams — driving coordinated top-of-funnel execution across signals, events, and content.',
    outcomes: [
      'Cross-functional regional cadence across 5 stakeholder groups',
      'Signal-to-action loop from marketing engagement to SDR outreach',
      'Account-level trending and engagement insights surfaced',
      'Unified forum for content, events, and product release comms',
    ],
    tags: ['Regional Revenue Interlock', 'Signal-to-Action', 'Cross-Functional Cadence', 'Pipeline Acceleration', 'Sales-Marketing Alignment'],
    hasSlide: true,
  },
  {
    icon: Map,
    title: 'Global Digital Planning Framework',
    category: 'gtm',
    categoryLabel: 'GTM Strategy',
    desc: 'Built a semester-based digital planning framework — mapping investment by channel, region, and objective with funnel modelling, audience sizing, and real-time budget reallocation across brand, always-on, and campaign layers.',
    outcomes: [
      'Semester planning model split by brand, always-on, and campaign',
      'Funnel-based spend mapping by channel, region, and objective',
      'Real-time budget reallocation based on in-market performance',
      'Regional weighting tied to bookings targets and priorities',
    ],
    tags: ['Global Digital Planning', 'Semester Budget Framework', 'Channel-Level Modelling', 'Regional Investment Weighting', 'Real-Time Reallocation'],
    hasSlide: true,
  },
  {
    icon: Calculator,
    title: 'Global Marketing Investment Framework',
    category: 'gtm',
    categoryLabel: 'GTM Strategy',
    desc: 'Created an annual investment planning framework — modelling from bookings target down through 4x pipeline coverage, opportunity splits by region, and field vs. global contribution, adjusted for language, market access, and execution capacity.',
    outcomes: [
      'Bookings-to-MQL waterfall model by region and globally',
      'Field vs. global opportunity contribution framework',
      'Annually refined with updated ASP and regional priorities',
      'Adjusted for language, market access, and digital capability',
    ],
    tags: ['Investment Framework', 'Bookings-to-Pipeline Waterfall', 'Regional Modelling', 'Field vs. Global Splits', 'Annual Planning Rigour'],
    hasSlide: true,
  },
  {
    icon: ArrowDownUp,
    title: 'Annual Marketing OKR Cascade',
    category: 'gtm',
    categoryLabel: 'GTM Strategy',
    desc: 'Designed and led the annual marketing OKR process — cascading from company goals through 3\u20135 marketing objectives into team and individual targets, with measurable KPIs tracked through marketing operations and cross-functional reporting.',
    outcomes: [
      'Company-to-individual OKR cascade across all marketing teams',
      'Consistent pipeline and revenue target achievement YoY',
      'KPI tracking built collaboratively with marketing operations',
      'Individual goal visibility connected to company objectives',
    ],
    tags: ['OKR Cascade', 'Company-to-Individual Alignment', 'Marketing Leadership', 'Revenue Goal Architecture', 'KPI Governance'],
    hasSlide: true,
  },
  /* ── Demand Programs ── */
  {
    icon: Layers,
    title: 'Always-On Engine Architecture',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Designed and operationalised a layered demand engine — from centrally managed global always-on programs through planned regional campaigns to tactical local execution.',
    outcomes: [
      'Three-tier model: always-on, planned, tactical',
      'Centrally managed economies of scale',
      'Regionally augmented with local campaigns',
      'Integrated digital, events, and content programs',
    ],
    tags: ['Always-On Demand', 'Layered Program Design', 'Global-Local Model', 'Scalable Execution', 'Channel Integration'],
    hasSlide: true,
  },
  {
    icon: TrendingUp,
    title: 'Inbound Impact Model',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Created a two-stream inbound approach separating high-intent hand-raisers from marketing signal-based leads — with differentiated SLAs, routing logic, and performance measurement.',
    outcomes: [
      'Two-stream model: hand-raise + signals',
      '68% of marketing revenue sourced from inbound',
      'Tight SLA model for demos and signal-based leads',
      'YoY increase in signal-based outbound opp creation',
    ],
    tags: ['Inbound Architecture', 'Hand-Raise Conversion', 'Signal-Based Leads', 'SLA Design', 'Revenue Attribution'],
    hasSlide: true,
  },
  {
    icon: Globe,
    title: 'China Market Expansion',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Accelerated digital infrastructure to support growth in niche China segment in Mandarin on a 6-week turnaround.',
    outcomes: [
      'Microsite development in Mandarin',
      'Locally adapted product messaging and customer stories',
      'New pipeline generated from new segment',
      'Baidu optimisation and paid media launch',
    ],
    tags: ['Market Expansion', 'Mandarin Localisation', 'Rapid Turnaround', 'New Segment Pipeline', 'Baidu Optimisation'],
    hasSlide: true,
  },
  {
    icon: Mail,
    title: 'Direct Mail Global Program Build',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Implemented Sendoso to support global and regional direct mail activations within SAP compliance and regulation - for pipeline creation, acceleration, customer communication and internal employee incentives.',
    outcomes: [
      'Company-wide employee gifting capability',
      'ABM workflows and activation for customers and prospects',
      'Integrated with Marketo, Salesforce, and marketing attribution',
      'Budget management > customer activation',
    ],
    tags: ['Direct Mail', 'ABM Activation', 'Sendoso', 'Pipeline Acceleration', 'Compliance-Led Execution'],
    hasSlide: true,
  },
  {
    icon: Calendar,
    title: 'Event Follow-Up Program Optimisation',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Delivered improved reporting framework and workflow for marketing and SDR follow-up to scaled global digital events. Better capture of in-event activity, follow up segmentation and integration through Marketo, Salesforce and Outreach.',
    outcomes: [
      'New repeatable approach to Tentpole event follow up',
      'YoY uplift in MQL-to-SAL conversion from global digital events',
      'Increase in event-attributed pipeline and revenue',
      'Uplift in global digital event influenced revenue',
    ],
    tags: ['Event Follow-Up', 'MQL-to-SAL Conversion', 'Workflow Optimisation', 'Tentpole Events', 'Influenced Revenue'],
    hasSlide: true,
  },
  {
    icon: Building,
    title: 'Virtual Festival Infrastructure',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Built repeatable hybrid festival infrastructure in 90 days — spanning registration, multi-language content delivery, and real-time reporting across ON24, Marketo, Salesforce, and the website for global multi-timezone execution.',
    outcomes: [
      'Delivered first hybrid festival build in under 90 days',
      'Created reusable infrastructure deployed across 3\u20134 years',
      'Real-time \u2018banana report\u2019 tracking registrations to target',
      'Enabled decentralised execution across global marketing teams',
    ],
    tags: ['Event Infrastructure', '90-Day Delivery', 'Multi-Language Execution', 'Real-Time Analytics', 'Scalable Frameworks'],
    hasSlide: true,
  },
  {
    icon: PlayCircle,
    title: '3-Minute Interactive Demo',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Created a gated interactive product demo that filled the conversion gap between content consumption and sales-led demos — becoming one of the highest-converting assets on the Emarsys website and a key driver in the paid media strategy.',
    outcomes: [
      'Highest-converting mid-funnel asset on the website',
      'Directly attributed to open opportunities from first touch',
      'Anchor asset for PPC strategy and keyword experimentation',
      '5 iterations refined across gated, ungated, and SDR use cases',
    ],
    tags: ['Conversion Architecture', 'Mid-Funnel Asset', 'PPC Anchor Strategy', 'Value Exchange', 'Gated Content Innovation'],
    hasSlide: true,
  },
  {
    icon: Video,
    title: 'Product Hub & On-Demand Video Library',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Evolved the gated 3-minute demo model into an ungated product hub — aggregating capability videos, product releases, and help content with Wistia-powered tracking and an embedded contact request converting hundreds monthly.',
    outcomes: [
      'Hundreds of product hub conversions per month',
      'Average 2+ video views per user with binge-watch signals',
      'Replaced 3-minute demo as primary website CTA',
      'Embedded contact request form driving net-new demo pipeline',
    ],
    tags: ['Product Hub', 'Video-Led Conversion', 'On-Demand Strategy', 'Wistia Analytics', 'Ungated Experience Design'],
    hasSlide: true,
  },
  {
    icon: RefreshCw,
    title: 'Retail Talks Content Flywheel',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Designed a content flywheel model around the Retail Talks webinar series — repurposing customer-led sessions into blog series, email campaigns, social content, clipping assets, and full customer stories for the website.',
    outcomes: [
      'Single session repurposed across 6+ distribution channels',
      'Customer-hero storytelling driving authentic engagement',
      'Transcript-to-asset pipeline for blog, email, and social',
      'Flywheel fed customer story pipeline on the website',
    ],
    tags: ['Content Flywheel', 'Customer-Led Storytelling', 'Multi-Channel Repurposing', 'Transcript-to-Asset Pipeline', 'Webinar Leverage'],
    hasSlide: true,
  },
  {
    icon: Monitor,
    title: 'Webinar Program — Emarsys',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Built and operationalised an end-to-end webinar program across three tiers — third-party, first-party, and partner-led — with standardised workflows spanning content creation, promotion, enablement, on-demand distribution, and follow-up.',
    outcomes: [
      'Three-tier webinar model: third-party, first-party, partner',
      'End-to-end workflow from planning to on-demand in Monday.com',
      'Pre-during-post content kits for SDR and marketing teams',
      'Decentralised execution across Field and Partner Marketing',
    ],
    tags: ['Webinar Program Design', 'Three-Tier Model', 'End-to-End Workflow', 'SDR Content Kits', 'Decentralised Execution'],
    hasSlide: true,
  },
  {
    icon: Headphones,
    title: 'Webinar Program — Clicktale',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Developed a webinar strategy focused on database growth through third-party media partnerships — pairing internal SMEs with customers and external influencers, then repurposing content back through owned channels for maximum reach.',
    outcomes: [
      'Media owner partnerships driving opted-in database growth',
      'SME + customer + influencer webinar format established',
      'Content repurposed from third-party back into owned channels',
      'Partner co-webinar series with shared registration and follow-up',
    ],
    tags: ['Database Growth Strategy', 'Third-Party Media', 'Co-Marketing', 'Influencer Webinars', 'Owned Channel Amplification'],
    hasSlide: true,
  },
  {
    icon: Users,
    title: 'LinkedIn Audience Targeting Framework',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Developed a periodic audience targeting methodology linked to annual TAM planning — refining job titles, industries, technographics, and exclusions in collaboration with regional revenue leaders and enrichment from DreamData and Clearbit.',
    outcomes: [
      'TAM-to-audience pipeline aligned with revenue planning',
      'Job title targeting refined from opportunity and close data',
      'Customer and locked-account exclusions via DreamData',
      'Retargeting streams built for open opportunity acceleration',
    ],
    tags: ['Audience Targeting', 'TAM-to-Campaign Pipeline', 'Technographic Segmentation', 'Account Exclusion Strategy', 'Revenue-Led Planning'],
    hasSlide: true,
  },
  {
    icon: Lightbulb,
    title: 'Thought Leader Ads Experimentation',
    category: 'demand',
    categoryLabel: 'Demand Programs',
    desc: 'Ran structured experiments with LinkedIn Thought Leader Ads — testing regional SMEs, industry specialists, and external influencers against targeted audiences to drive higher engagement and optimise the organic-to-sponsored workflow.',
    outcomes: [
      'Higher engagement rates versus standard sponsored content',
      'Industry-specialist targeting outperforming generic creative',
      'External influencer partnerships including Mark Ritson',
      'Organic-to-sponsored post workflow optimised for scale',
    ],
    tags: ['Thought Leader Ads', 'Influencer Partnerships', 'Organic-to-Sponsored', 'Industry Targeting', 'Engagement Experimentation'],
    hasSlide: true,
  },
  /* ── Rev & Marketing Ops ── */
  {
    icon: Database,
    title: 'MAP Migration: HubSpot to Marketo',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Led migration from HubSpot to Marketo as the primary marketing automation platform — including data migration, workflow rebuild, Salesforce integration, and cross-team enablement.',
    outcomes: [
      'Full platform migration with zero data loss',
      'Rebuilt automated workflows and scoring models',
      'Integrated with Salesforce and reporting stack',
      'Enabled team on new platform capabilities',
    ],
    tags: ['MAP Migration', 'Marketing Automation', 'Salesforce Integration', 'Workflow Rebuild', 'Platform Enablement'],
    hasSlide: true,
  },
  {
    icon: Settings,
    title: 'SAP Integration & Operating Model',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Navigated acquisition transition from independent Emarsys to SAP Emarsys — aligning team structure, go-to-market model, and operating rhythms within SAP\u2019s enterprise governance framework.',
    outcomes: [
      'Maintained 100% of targets during transition',
      'Adapted to 20% YoY budget reductions',
      'Integrated into SAP processes and governance',
      'Stabilised marketing performance post-acquisition',
    ],
    tags: ['Post-Acquisition Integration', 'Operating Model Design', 'Budget Resilience', 'Enterprise Governance', 'Change Management'],
    hasSlide: true,
  },
  {
    icon: BarChart3,
    title: 'Pipeline Council & Funnel Measurement',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Established a global pipeline council cadence and multi-dimensional funnel reporting framework — assessing creation, velocity, and linear progression to drive data-led decision-making across marketing and sales.',
    outcomes: [
      'Global cadence on effectiveness and resourcing',
      'Built multi-dimensional funnel reporting',
      'Regional performance benchmarking model',
      'Maintained 4x coverage and MSO contribution',
    ],
    tags: ['Pipeline Governance', 'Funnel Reporting', 'Coverage Management', 'Revenue Cadence', 'Data-Led Decisions'],
    hasSlide: true,
  },
  {
    icon: Target,
    title: '3D Lead Scoring',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Designed framework for firmographic, demographic, and behavioural scoring and led implementation. Delivered phased improvements aligned to evolving ICP definition and implemented enrichment tool Clearbit.',
    outcomes: [
      'Increased MQL conversion YoY',
      'Reduced digital customer acquisition cost YoY',
      'Foundation for program and event analysis based on HQL',
      'Enabled SDR team and improved real-time queue reports',
    ],
    tags: ['Lead Scoring', 'Firmographic + Behavioural', 'Clearbit Enrichment', 'MQL Conversion', 'SDR Enablement'],
    hasSlide: true,
  },
  {
    icon: Filter,
    title: 'Demand Waterfall Implementation',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Drove revenue alignment on funnel stage definitions, hand-offs, and SLAs with implementation through Marketo and Salesforce.',
    outcomes: [
      'Foundation for planning and forecast model',
      'Aligned attribution model across 4 departments',
      'Consistent 45% marketing contribution YoY',
      'Documented and enabled cascading from SLT',
    ],
    tags: ['Demand Waterfall', 'Funnel Alignment', 'Revenue Attribution', 'Cross-Departmental SLAs', 'Forecast Foundation'],
    hasSlide: true,
  },
  {
    icon: LayoutDashboard,
    title: 'Global & Regional Marketing Dashboards',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Executed global + 4 key regional dashboards covering inbound, digital, and event program activity — with views on volume, conversion, and pipeline creation.',
    outcomes: [
      'Built 60 Salesforce reports',
      'Delivered 5 dashboards with charting and filters',
      'Enablement delivered to marketing team and senior executives',
      'Program, channel & campaign views from lead-to-opportunity',
    ],
    tags: ['Marketing Dashboards', 'Salesforce Reporting', 'Executive Visibility', 'Regional Performance', 'Lead-to-Opportunity'],
    hasSlide: true,
  },
  {
    icon: Eye,
    title: 'Video Scoring & Engagement Tracking',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Integrated Wistia video engagement data into Marketo and Salesforce — enabling behavioural scoring on video consumption at 25%, 50%, 75%, and 100% thresholds to enrich lead scoring and surface high-intent prospects.',
    outcomes: [
      'Video watch triggers integrated into lead scoring model',
      'Campaigns built in Marketo and Salesforce per video asset',
      '25% watch threshold qualifying behavioural engagement',
      'New value-exchange hubs created using Wistia capabilities',
    ],
    tags: ['Video Scoring', 'Behavioural Lead Scoring', 'Engagement Thresholds', 'Martech Integration', 'Intent Signals'],
    hasSlide: true,
  },
  {
    icon: Wrench,
    title: 'Demand Centre of Excellence Operating System',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Architected the operating system for a global demand centre of excellence — spanning 8 digital channels, regional cadences, prioritisation workflows, and a centralised content request board (CARB) integrated through Monday.com.',
    outcomes: [
      '8-channel demand engine: web, SEO, PPC, email, social + more',
      'CARB (Content Access Request Board) for cross-team requests',
      'Regional cadences at weekly, bi-weekly, and monthly rhythms',
      'Workflows extended into SAP channels and enablement portals',
    ],
    tags: ['Centre of Excellence', '8-Channel Demand Engine', 'Content Operations', 'Workflow Automation', 'Cross-Functional Orchestration'],
    hasSlide: true,
  },
  {
    icon: Library,
    title: 'Customer Story Library & Enablement Hub',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Built a searchable, filterable customer story library using embedded Airtable — centralising quotes, use cases, capabilities, and outcomes from webinars, events, and interviews to replace underperforming SharePoint and Jira enablement.',
    outcomes: [
      'Centralised library replacing fragmented enablement tools',
      'Searchable by use case, capability, feature, and outcome',
      'Enriched with transcript content from interviews and webinars',
      'V2 in development with AI-powered search and retrieval',
    ],
    tags: ['Enablement Hub', 'Searchable Use Case Library', 'Airtable', 'AI-Powered Search', 'Knowledge Centralisation'],
    hasSlide: true,
  },
  {
    icon: Workflow,
    title: 'Program & Pipeline Efficiency Model',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Introduced a cost-to-pipeline efficiency framework — measuring program and campaign performance across leads, MQLs, opportunities, and pipeline created versus spend on a semester basis to inform planning and budget allocation.',
    outcomes: [
      'Cost-per-dollar-of-pipeline ratio across all programs',
      'Semester-based performance reviews for events and digital',
      'Cost-per-HQL metric replacing volume-based cost-per-lead',
      'ICP scoring via Clearbit layered into efficiency analysis',
    ],
    tags: ['Pipeline Efficiency', 'Cost-to-Pipeline Ratio', 'Program ROI', 'HQL Economics', 'Budget-to-Outcome Analysis'],
    hasSlide: true,
  },
  {
    icon: TrendingUp,
    title: 'Split Funnel Analysis & Optimisation',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Developed a repeatable methodology for splitting the funnel by intent tier — separating hand-raise, high-intent, and education-stage leads to isolate true conversion drivers and clarify the correlative impact of advertising investment.',
    outcomes: [
      'Three-tier funnel split: hand-raise, high-intent, education',
      'Correlative analysis of ad spend on high-intent conversion',
      'Clearer internal alignment on demand gen vs. inbound',
      'Repeatable audit methodology applied across multiple cycles',
    ],
    tags: ['Funnel Segmentation', 'Intent-Tier Analysis', 'Hand-Raise vs. Signal', 'Ad Spend Correlation', 'Conversion Forensics'],
    hasSlide: true,
  },
  {
    icon: PieChart,
    title: 'Paid Media Performance Dashboards',
    category: 'revops',
    categoryLabel: 'Rev & Marketing Ops',
    desc: 'Consolidated real-time paid media reporting across LinkedIn, Meta, Google, and organic channels into Looker Studio dashboards — with KPI tracking, regional breakdowns, spend pacing, and self-serve access for cross-functional stakeholders.',
    outcomes: [
      'Unified dashboard across LinkedIn, Meta, Google, and organic',
      'Real-time spend pacing and KPI tracking by region',
      'Self-serve access for field, product, and digital teams',
      'Reduced ad-hoc reporting requests across stakeholders',
    ],
    tags: ['Paid Media Dashboards', 'Looker Studio', 'Real-Time Spend Pacing', 'Self-Serve Reporting', 'Cross-Platform Visibility'],
    hasSlide: true,
  },
  /* ── AI & Technology ── */
  {
    icon: Monitor,
    title: 'Hybrid Events Platform',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Built a re-skinnable hybrid event hub supporting multiple event formats and always-on on-demand content — enabling a scalable global event strategy across in-person and virtual experiences.',
    outcomes: [
      'Re-skinnable hub for multiple event formats',
      'Multi-event and on-demand capability',
      'Timezone-spanning agenda across 4 regions',
      'Award-winning hybrid festival format',
    ],
    tags: ['Hybrid Events', 'Scalable Event Platform', 'On-Demand Content', 'Multi-Format Delivery', 'Award-Winning Execution'],
    hasSlide: true,
  },
  {
    icon: Globe,
    title: 'Website Redevelopment',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Led 120-page in-house website rebuild across four languages — including 3-minute interactive demo, re-skinnable event hub, integrated partner ecosystem hub, and brand refresh aligned to SAP positioning.',
    outcomes: [
      '120-page site redeveloped in-house',
      '5 language localisations delivered',
      'New product imagery + capability videos',
      'Back-end integrated partner ecosystem hub',
    ],
    tags: ['Website Rebuild', 'Multi-Language', 'In-House Development', 'Partner Ecosystem', 'Product Storytelling'],
    hasSlide: true,
  },
  {
    icon: Bot,
    title: 'AI-Augmented Marketing Ops',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Integrated AI agents into marketing operations — redesigning workflows, operating model, and campaign execution to blend human expertise with agent-based automation at scale.',
    outcomes: [
      'AI-assisted content and workflows',
      'Prompt library for multi-LLM use',
      'Campaign UTM builder app',
      'Adapting for SAP compliance',
    ],
    tags: ['AI-Augmented Ops', 'Agent-Based Automation', 'Prompt Engineering', 'Workflow Redesign', 'Operational Innovation'],
    hasSlide: true,
  },
  {
    icon: FileText,
    title: 'SEO Content Scaling with AI',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Ran pilot project leveraging AI for content creation — scaling high-quality article production from webinar transcripts targeting priority keywords.',
    outcomes: [
      'Reduced time-to-creation on blog content by 300%',
      'Produced 60x articles generating incremental organic traffic',
      'Rich voice-of-customer insights at AI scale',
      'Refreshed glossary hub in 75% less time',
    ],
    tags: ['AI Content Scaling', 'SEO-Led Production', 'Transcript Repurposing', 'Organic Traffic Growth', 'Time-to-Publish'],
    hasSlide: true,
  },
  {
    icon: Radio,
    title: 'Signal-Based Demand Evolution',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Delivered new capability to support account-based motions — centralised signal solution, alerts and notifications, integration into regional top-of-funnel rhythms and outbound play content creation.',
    outcomes: [
      'Aggregated signals across anonymous website, G2 buyer research, and LinkedIn',
      'Pipeline generated from previously un-surfaced signals',
      'Revenue from signal-assisted outbound',
    ],
    tags: ['Signal Aggregation', 'Account-Based Motions', 'Intent Data', 'Outbound Enablement', 'Revenue Signals'],
    hasSlide: true,
  },
  {
    icon: Code,
    title: 'GA4, Tagging & UTM Rebuild',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Ran implementation project for re-building Google Tag Manager in-line with necessary migration to GA4, alongside cookie privacy compliance alignment. Collaborative project between marketing, SAP global marketing ops, IT and legal.',
    outcomes: [
      'Upgraded event triggers & taxonomy in GA',
      'New framework implemented through analytics, MAP & CRM',
      'New cookie banner and cookie management',
      'Adjusted terms & privacy management published to website',
    ],
    tags: ['GA4 Migration', 'Tag Management', 'Cookie Compliance', 'Cross-Functional Governance', 'Privacy Alignment'],
    hasSlide: true,
  },
  {
    icon: Sparkles,
    title: 'Multi-Touch Attribution Implementation',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Integrated new capability for MTA with a focus on influenced revenue with weighted modelling through Salesforce via Full Circle Insights.',
    outcomes: [
      'Enterprise-level marketing reporting',
      'Activity weighted attribution from email > handraise',
      'New reporting in Salesforce & dashboards for SLT',
      'Worked with IT to implement view on campaign object',
    ],
    tags: ['Multi-Touch Attribution', 'Influenced Revenue', 'Weighted Modelling', 'Full Circle Insights', 'SLT Reporting'],
    hasSlide: true,
  },
  {
    icon: Search,
    title: 'AEO & AI Search Optimisation',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Pioneered answer engine optimisation strategy for LLM-driven search — introducing machine-readable sitemaps, LLM-specific crawl pages, FAQ structures, schema enhancements, and accelerated blog content targeting zero-click discovery.',
    outcomes: [
      'LLM-specific directory and sitemap pages introduced',
      'Schema and XML sitemap restructured for machine readability',
      'FAQ-led content strategy across product and blog pages',
      'Glossary hub driving zero-click keyword heritage',
    ],
    tags: ['Answer Engine Optimisation', 'LLM Discoverability', 'Zero-Click Strategy', 'Schema & Sitemap', 'AI-First SEO'],
    hasSlide: true,
  },
  {
    icon: Zap,
    title: 'Account Signal-to-Outbound Transformation',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Evolved from lead-based to account-based demand motions — implementing DreamData for aggregated signal visibility across LinkedIn, G2, anonymous web, and first-party data to power SDR outbound and paid media retargeting.',
    outcomes: [
      'Aggregated account signals across 5+ data sources',
      'DreamData reports enabling SDR prioritisation by region and segment',
      'Retargeting audiences built from account engagement data',
      'Dual-funnel transformation supporting enterprise growth',
    ],
    tags: ['Account-Based Transformation', 'Signal Aggregation', 'DreamData', 'Enterprise Demand', 'Retargeting Architecture'],
    hasSlide: true,
  },
  {
    icon: Video,
    title: 'YouTube Channel Revitalisation',
    category: 'ai',
    categoryLabel: 'AI & Technology',
    desc: 'Revitalised an underloved YouTube channel by repurposing hundreds of hours of webinar content — using AI for transcript-to-metadata workflows, keyword-led titling, and a refreshed visual identity to drive discoverability and subscriber growth.',
    outcomes: [
      '300% growth in YouTube views post-revitalisation',
      '200% increase in subscriber growth',
      'AI-powered transcript-to-title and description workflow',
      'New visual identity with thumbnail system by content type',
    ],
    tags: ['YouTube Revitalisation', 'AI-Powered Metadata', '300% View Growth', 'Video SEO', 'Content Discoverability'],
    hasSlide: true,
  },
]

/* ── Dummy 16:9 slide visual ── */

function DummySlide({ title, category, compact }: { title: string; category: Exclude<Filter, 'all'>; compact?: boolean }) {
  const c = categoryColors[category]
  return (
    <div
      className="w-full rounded-lg overflow-hidden shadow-lg relative"
      style={{ aspectRatio: '16/9', background: c.slideGradient }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: c.slideAccent }} />
      {/* Content */}
      <div
        className="h-full flex flex-col justify-between"
        style={{ padding: compact ? '8% 8%' : '8% 10%' }}
      >
        <div>
          {/* Logo placeholder */}
          <div className="flex items-center gap-2" style={{ marginBottom: compact ? '8%' : '10%' }}>
            <div
              className="rounded-md flex items-center justify-center"
              style={{
                width: compact ? 20 : 28, height: compact ? 20 : 28,
                background: 'rgba(255,255,255,0.15)',
              }}
            >
              <span
                className="font-bold"
                style={{ color: c.slideAccent, fontSize: compact ? 10 : 14, fontFamily: 'Space Grotesk' }}
              >
                TB
              </span>
            </div>
            <span
              className="font-medium tracking-wider"
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: compact ? 8 : 11 }}
            >
              TOM BALL
            </span>
          </div>
          {/* Title */}
          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: 'Space Grotesk',
              fontSize: compact ? 'clamp(10px, 2.5vw, 16px)' : 'clamp(14px, 3vw, 28px)',
              marginBottom: compact ? '4%' : '6%',
              maxWidth: '80%',
            }}
          >
            {title}
          </h2>
          {/* Skeleton bars */}
          <div className="flex flex-col" style={{ gap: compact ? 4 : 6 }}>
            <div className="rounded" style={{ height: compact ? 4 : 6, width: '60%', background: 'rgba(255,255,255,0.12)' }} />
            <div className="rounded" style={{ height: compact ? 4 : 6, width: '45%', background: 'rgba(255,255,255,0.08)' }} />
            <div className="rounded" style={{ height: compact ? 4 : 6, width: '35%', background: 'rgba(255,255,255,0.05)' }} />
          </div>
        </div>
        {/* Bottom: mini chart + stats */}
        <div className="flex items-end mt-auto" style={{ gap: compact ? '6%' : '8%' }}>
          <div className="flex items-end" style={{ gap: compact ? 2 : 3, height: compact ? 24 : 40 }}>
            {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
              <div
                key={i}
                className="rounded-sm transition-all"
                style={{
                  width: compact ? 4 : 6,
                  height: `${h}%`,
                  background: i === 5 ? c.slideAccent : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>
          <div className="flex" style={{ gap: compact ? 8 : 16 }}>
            {['Pipeline', 'Conversion', 'ROI'].map((label, i) => (
              <div key={i} className="text-center">
                <div className="font-bold" style={{ color: c.slideAccent, fontSize: compact ? 8 : 14, fontFamily: 'Space Grotesk' }}>
                  {['€12.4M', '34%', '2.8x'][i]}
                </div>
                <div className="uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)', fontSize: compact ? 6 : 9 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Lightbox modal ── */

function SlideModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-[90%] max-w-[960px] z-10"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white bg-white/15 border-0 rounded-lg w-8 h-8 flex items-center justify-center cursor-pointer hover:bg-white/25 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <DummySlide title={project.title} category={project.category} />
        <div className="text-center mt-3">
          <span className="text-white/60 text-sm">{project.title} — slide preview</span>
        </div>
      </div>
    </div>
  )
}

/* ── Main component ── */

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const [preview, setPreview] = useState<Project | null>(null)
  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <div>
      {/* Lightbox */}
      {preview && <SlideModal project={preview} onClose={() => setPreview(null)} />}

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
              <div key={i} className="group rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all overflow-hidden bg-white">
                {/* Category header banner */}
                <div className={`${colors.bannerBg} px-6 py-3 border-b border-gray-100 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${colors.tagBg} border border-gray-100 flex items-center justify-center`}>
                      <p.icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${colors.tagText}`}>{p.categoryLabel}</span>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Space Grotesk' }}>{p.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Body: 45/55 split */}
                <div className="grid" style={{ gridTemplateColumns: '45% 55%' }}>
                  {/* Left: description + tags */}
                  <div className="p-6 flex flex-col">
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.tags.map((t, j) => (
                        <span key={j} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-gray-50 text-gray-500">
                          <TagIcon className="w-3 h-3" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: outcomes */}
                  <div className="bg-gray-50 p-6 border-l border-gray-100 flex flex-col justify-start">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Key outcomes</h4>
                    <div className="space-y-3">
                      {p.outcomes.map((o, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[hsl(152,55%,42%)] shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 leading-snug">{o}</span>
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
