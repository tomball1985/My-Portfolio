import { ArrowUpRight, Tag, ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

type Filter = 'all' | 'brand' | 'demand' | 'product' | 'integrated'

const campaigns = [
  {
    title: 'Power to the Marketer',
    company: 'SAP Emarsys',
    type: 'brand' as const,
    tags: ['Brand Campaign', 'Events', 'Hybrid Festival'],
    summary: 'Global brand campaign and hybrid festival. Award-winning event series running across multiple years — combining in-person experiences with virtual reach to drive both brand and pipeline.',
    stats: [
      { label: 'Pipeline Generated', value: 'Multi-million' },
      { label: 'Format', value: 'Hybrid Festival' },
      { label: 'Scale', value: 'Global' },
    ],
    color: 'purple',
    images: [
      { src: '', label: 'Festival stage & branding' },
      { src: '', label: 'Event marketing materials' },
      { src: '', label: 'Campaign performance dashboard' },
    ],
  },
  {
    title: 'Omnichannel Difference',
    company: 'SAP Emarsys',
    type: 'integrated' as const,
    tags: ['Product Campaign', 'Content', 'Analyst'],
    summary: 'Product-led integrated campaign focused on omnichannel marketing differentiation. Combined thought leadership, analyst research, content syndication, and paid media across regions.',
    stats: [
      { label: 'Campaign Type', value: 'Product-led' },
      { label: 'Channels', value: 'Omnichannel' },
      { label: 'Regions', value: 'Global' },
    ],
    color: 'green',
    images: [
      { src: '', label: 'Campaign creative assets' },
      { src: '', label: 'Content syndication results' },
      { src: '', label: 'Regional activation' },
    ],
  },
  {
    title: 'Retail Renaissance / Revival',
    company: 'SAP Emarsys',
    type: 'demand' as const,
    tags: ['Virtual Events', 'Demand Gen', 'Webinar Series'],
    summary: 'Award-winning hybrid event series that became a flagship demand generation program. Combined virtual and in-person formats to maximise reach and pipeline creation.',
    stats: [
      { label: 'Awards', value: 'Multiple' },
      { label: 'Format', value: 'Hybrid' },
      { label: 'Impact', value: 'Pipeline + Brand' },
    ],
    color: 'purple',
    images: [
      { src: '', label: 'Event series branding' },
      { src: '', label: 'Virtual event platform' },
      { src: '', label: 'Award entries' },
    ],
  },
  {
    title: 'Defining Digital Experience',
    company: 'Clicktale',
    type: 'integrated' as const,
    tags: ['Research', 'Influencer', 'Media Partnership'],
    summary: 'Unique research report with Brian Solis influencer partnership, CX Network media partnership, HotTopics video series, and 3 customer webinars.',
    stats: [
      { label: 'New Business Pipeline', value: '$1.8M' },
      { label: 'Impressions', value: '7M' },
      { label: 'MQLs', value: '320' },
    ],
    color: 'green',
    images: [
      { src: '', label: 'Research report' },
      { src: '', label: 'Brian Solis partnership' },
      { src: '', label: 'CX Network media' },
      { src: '', label: 'HotTopics video series' },
    ],
  },
  {
    title: 'Digital Body Language',
    company: 'Clicktale',
    type: 'brand' as const,
    tags: ['Brand', 'Positioning', 'Creative'],
    summary: 'Brand positioning campaign for Clicktale telling the story of digital customer behaviour. Integrated across brand, product and demand to drive measurable results.',
    stats: [
      { label: 'Type', value: 'Brand Positioning' },
      { label: 'Approach', value: 'Brand x Product x Demand' },
      { label: 'Scope', value: 'Global' },
    ],
    color: 'purple',
    images: [
      { src: '', label: 'Brand creative' },
      { src: '', label: 'Campaign landing page' },
      { src: '', label: 'Digital assets' },
    ],
  },
  {
    title: 'UnPredictions',
    company: 'Emarsys',
    type: 'demand' as const,
    tags: ['Content', 'Thought Leadership', 'Demand Gen'],
    summary: 'Annual predictions / counter-predictions content campaign designed to generate awareness and pipeline through provocative thought leadership.',
    stats: [
      { label: 'Frequency', value: 'Annual' },
      { label: 'Type', value: 'Thought Leadership' },
      { label: 'Impact', value: 'Pipeline + Brand' },
    ],
    color: 'green',
    images: [
      { src: '', label: 'Report design' },
      { src: '', label: 'Social promotion' },
      { src: '', label: 'Landing experience' },
    ],
  },
  {
    title: 'Mobile Wallet',
    company: 'Emarsys',
    type: 'product' as const,
    tags: ['Product Launch', 'Integrated'],
    summary: 'Integrated product launch campaign for a new mobile wallet capability, combining product marketing, demand generation and customer marketing.',
    stats: [
      { label: 'Type', value: 'Product Launch' },
      { label: 'Approach', value: 'Integrated' },
      { label: 'Scope', value: 'Global' },
    ],
    color: 'purple',
    images: [
      { src: '', label: 'Product launch assets' },
      { src: '', label: 'Go-to-market plan' },
      { src: '', label: 'Customer marketing' },
    ],
  },
  {
    title: 'Southbank Centre',
    company: 'immediate future',
    type: 'brand' as const,
    tags: ['Consumer', 'Social', 'Brand'],
    summary: 'Consumer brand campaign from the agency side — social-first creative for one of London\'s iconic cultural venues.',
    stats: [
      { label: 'Sector', value: 'Consumer / Arts' },
      { label: 'Channel', value: 'Social-first' },
      { label: 'Type', value: 'Brand Campaign' },
    ],
    color: 'green',
    images: [
      { src: '', label: 'Social creative' },
      { src: '', label: 'Campaign performance' },
      { src: '', label: 'Brand assets' },
    ],
  },
]

const colorMap = {
  purple: {
    statBg: 'bg-purple-50',
    statText: 'text-[hsl(264,67%,52%)]',
    tagBg: 'bg-purple-50',
    tagText: 'text-[hsl(264,67%,52%)]',
    border: 'hover:border-[hsl(264,67%,52%)]/20',
    placeholderAccent: 'hsl(264,67%,52%)',
    placeholderBg: 'bg-purple-50/50',
  },
  green: {
    statBg: 'bg-emerald-50',
    statText: 'text-[hsl(152,55%,42%)]',
    tagBg: 'bg-emerald-50',
    tagText: 'text-[hsl(152,55%,42%)]',
    border: 'hover:border-[hsl(152,55%,42%)]/20',
    placeholderAccent: 'hsl(152,55%,42%)',
    placeholderBg: 'bg-emerald-50/50',
  },
}

/* ── Single-image viewer with hover arrows ── */

function ImageViewer({ images, colors, slideIdx, onSlideChange }: {
  images: { src: string; label: string }[]
  colors: typeof colorMap['purple']
  slideIdx: number
  onSlideChange: (idx: number) => void
}) {
  const img = images[slideIdx]
  const hasPrev = slideIdx > 0
  const hasNext = slideIdx < images.length - 1

  return (
    <div className="group/viewer relative">
      {/* 16:9 aspect ratio container */}
      <div className="relative aspect-video overflow-hidden">
        {img.src ? (
          <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full ${colors.placeholderBg} flex flex-col items-center justify-center gap-3`}>
            <ImageIcon className="w-8 h-8 text-gray-300" />
            <span className="text-xs text-gray-400 text-center px-4 leading-relaxed">{img.label}</span>
          </div>
        )}

        {/* Hover arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => hasPrev && onSlideChange(slideIdx - 1)}
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center shadow-sm transition-opacity ${
                hasPrev ? 'opacity-0 group-hover/viewer:opacity-100 hover:bg-white cursor-pointer' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => hasNext && onSlideChange(slideIdx + 1)}
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center shadow-sm transition-opacity ${
                hasNext ? 'opacity-0 group-hover/viewer:opacity-100 hover:bg-white cursor-pointer' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover/viewer:opacity-100 transition-opacity">
            {images.map((_, di) => (
              <button
                key={di}
                onClick={() => onSlideChange(di)}
                className={`transition-all rounded-full ${
                  slideIdx === di
                    ? 'w-5 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`Image ${di + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function Campaigns() {
  const [filter, setFilter] = useState<Filter>('all')
  const [slideIndices, setSlideIndices] = useState<Record<number, number>>({})

  const filtered = filter === 'all' ? campaigns : campaigns.filter(c => c.type === filter)

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-[hsl(152,55%,42%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Selected Work
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Campaigns</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            Key campaigns from across my career — integrated programs with measurable results, from product launches to global brand campaigns.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 overflow-x-auto">
          {([
            { key: 'all', label: 'All campaigns' },
            { key: 'brand', label: 'Brand' },
            { key: 'demand', label: 'Demand' },
            { key: 'product', label: 'Product' },
            { key: 'integrated', label: 'Integrated' },
          ] as { key: Filter; label: string }[]).map(f => (
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

      {/* Campaign cards */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((c, i) => {
              const colors = colorMap[c.color as 'purple' | 'green']
              return (
                <div
                  key={i}
                  className={`group rounded-xl border border-gray-100 ${colors.border} hover:shadow-lg transition-all overflow-hidden flex flex-col`}
                >
                  {/* Top bar */}
                  <div className="p-6 pb-0">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">{c.company}</span>
                      <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{c.title}</h3>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {c.tags.map((t, j) => (
                        <span key={j} className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-md bg-gray-50 text-gray-500">
                          <Tag className="w-3 h-3" /> {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{c.summary}</p>
                  </div>

                  {/* Stats strip */}
                  <div className="grid grid-cols-3 gap-px bg-gray-100 mt-6">
                    {c.stats.map((s, j) => (
                      <div key={j} className="bg-gray-50 p-4 text-center">
                        <div className={`text-sm font-bold ${colors.statText}`}>{s.value}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Image viewer */}
                  <div className="mt-auto">
                    <ImageViewer
                      images={c.images}
                      colors={colors}
                      slideIdx={slideIndices[i] ?? 0}
                      onSlideChange={(idx) => setSlideIndices(prev => ({ ...prev, [i]: idx }))}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16">No campaigns match this filter.</p>
          )}
        </div>
      </section>
    </div>
  )
}
