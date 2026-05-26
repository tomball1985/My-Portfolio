import { ArrowUpRight, Tag, ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useRef } from 'react'

type Filter = 'all' | 'brand' | 'demand' | 'product' | 'integrated'

const campaigns = [
  {
    title: 'Power to the Marketer',
    company: 'Emarsys',
    type: 'brand' as const,
    tags: ['Brand', 'Events', 'Hybrid', 'Global'],
    summary: 'Global brand campaign and hybrid festival platform combining in-person experience with virtual reach to drive brand awareness and pipeline generation across multiple years.',
    stats: [
      { label: 'Pipeline Generated', value: '£7.68M' },
      { label: 'Revenue Generated', value: '£1.45M' },
      { label: 'Recognition', value: 'Award-winning' },
    ],
    color: 'purple',
    images: [
      { src: '/campaigns/power-to-the-marketer/1.png', label: 'Power to the Marketer homepage' },
      { src: '/campaigns/power-to-the-marketer/2.png', label: 'Omnichannel platform overview' },
      { src: '/campaigns/power-to-the-marketer/3.jpeg', label: 'Shoptalk event promotion' },
      { src: '/campaigns/power-to-the-marketer/4.jpeg', label: 'Social campaign creative' },
      { src: '/campaigns/power-to-the-marketer/5.jpeg', label: 'Brand campaign asset' },
      { src: '/campaigns/power-to-the-marketer/hype-video.mp4', label: 'Festival hype video', type: 'video' as const },
      { src: '/campaigns/power-to-the-marketer/6.jpeg', label: 'Festival live event' },
      { src: '/campaigns/power-to-the-marketer/7.jpeg', label: 'Event branding' },
      { src: '/campaigns/power-to-the-marketer/8.jpeg', label: 'Campaign results' },
      { src: '/campaigns/power-to-the-marketer/9.jpeg', label: 'Paid media creative' },
    ],
  },
  {
    title: 'Omnichannel Difference',
    company: 'SAP Emarsys',
    type: 'integrated' as const,
    tags: ['Product', 'Integrated', 'Analyst', 'Global'],
    summary: 'Product-led integrated campaign focused on omnichannel marketing differentiation, combining analyst research, thought leadership, paid media and content syndication across regions.',
    stats: [
      { label: 'Pipeline Generated', value: '£671K' },
      { label: 'Revenue Generated', value: '£190K' },
      { label: 'Positioning', value: 'Analyst-led' },
    ],
    color: 'green',
    images: [
      { src: '/campaigns/omnichannel-difference/2.jpeg', label: 'Campaign creative' },
      { src: '/campaigns/omnichannel-difference/1.jpeg', label: 'Digital ads activation creative' },
      { src: '/campaigns/omnichannel-difference/3.jpeg', label: 'Thought leadership content' },
      { src: '/campaigns/omnichannel-difference/4.jpeg', label: 'Analyst research asset' },
      { src: '/campaigns/omnichannel-difference/5.jpeg', label: 'Content syndication' },
      { src: '/campaigns/omnichannel-difference/6.jpeg', label: 'Paid media creative' },
      { src: '/campaigns/omnichannel-difference/7.jpeg', label: 'Regional activation' },
      { src: '/campaigns/omnichannel-difference/8.jpeg', label: 'Campaign results' },
    ],
  },
  {
    title: 'Retail Renaissance & Retail Revival',
    company: 'Emarsys',
    type: 'demand' as const,
    tags: ['Demand Gen', 'Virtual Events', 'Hybrid'],
    summary: 'Award-winning hybrid event series that became a flagship demand generation program. Combined virtual and in-person formats to maximise reach and pipeline creation.',
    stats: [
      { label: 'Pipeline Created', value: '£3.31M' },
      { label: 'Revenue Generated', value: '£1.1M' },
      { label: 'Recognition', value: '2x industry awards' },
    ],
    color: 'purple',
    images: [
      { src: '/campaigns/retail-renaissance/0.jpeg', label: 'Retail Renaissance hero' },
      { src: '/campaigns/retail-renaissance/1.jpeg', label: 'Event branding' },
      { src: '/campaigns/retail-renaissance/2.jpeg', label: 'Event promotion' },
      { src: '/campaigns/retail-renaissance/3.jpeg', label: 'Speaker creative' },
      { src: '/campaigns/retail-renaissance/4.jpg', label: 'Event activation' },
      { src: '/campaigns/retail-renaissance/5.webp', label: 'Virtual event platform' },
      { src: '/campaigns/retail-renaissance/6.webp', label: 'Campaign creative' },
      { src: '/campaigns/retail-renaissance/7.png', label: 'Retail Revival on-demand' },
    ],
  },
  {
    title: 'Defining Digital Experience',
    company: 'Clicktale',
    type: 'integrated' as const,
    tags: ['Research', 'Influencer', 'Media Partnership'],
    summary: 'Research-led campaign featuring Brian Solis influencer partnership, CX Network media partnership, HotTopics video series and customer webinars.',
    stats: [
      { label: 'New Business Pipeline', value: '$1.87M' },
      { label: 'Impressions', value: '7M' },
      { label: 'MQLs', value: '320' },
    ],
    color: 'green',
    images: [
      { src: '/campaigns/defining-digital-experience/DX1.png', label: 'Research report' },
      { src: '/campaigns/defining-digital-experience/DX2.png', label: 'Brian Solis partnership' },
      { src: '/campaigns/defining-digital-experience/3.png', label: 'CX Network media' },
      { src: '/campaigns/defining-digital-experience/4.png', label: 'HotTopics video series' },
    ],
  },
  {
    title: 'Digital Body Language',
    company: 'Clicktale',
    type: 'demand' as const,
    tags: ['Product', 'Demand', 'Integrated'],
    summary: 'Product-led demand generation campaign elevating unique capability and landing new concept of digital body language through content, events and PR.',
    stats: [
      { label: 'Hand Raises', value: '30% uplift' },
      { label: 'Positioning', value: 'Global platform' },
      { label: 'Activation', value: 'Cross-functional' },
    ],
    color: 'purple',
    images: [
      { src: '/campaigns/digital-body-language/2.png', label: 'Campaign landing page' },
      { src: '/campaigns/digital-body-language/4.png', label: 'Campaign creative' },
      { src: '/campaigns/digital-body-language/5.png', label: 'Campaign creative' },
      { src: '/campaigns/digital-body-language/1.jpg', label: 'Brand creative' },
      { src: '/campaigns/digital-body-language/3.jpeg', label: 'Digital assets' },
    ],
  },
  {
    title: 'We Tell The Story',
    company: 'Clicktale',
    type: 'integrated' as const,
    tags: ['Brand', 'Product', 'Integrated'],
    summary: 'Re-brand and new product positioning including internal enablement and external launch aligned to SKO. Led to acquisition by ContentSquare.',
    stats: [
      { label: 'QoQ Pipeline Creation', value: '30% Increase' },
      { label: 'SKO Brand Survey', value: '95% Confidence' },
      { label: 'Product Page Dwell Time', value: '50% Uplift' },
    ],
    color: 'green',
    images: [
      { src: '/campaigns/we-tell-the-story/1.png', label: 'Re-brand creative' },
      { src: '/campaigns/we-tell-the-story/2.png', label: 'Product positioning asset' },
      { src: '/campaigns/we-tell-the-story/3.png', label: 'SKO enablement' },
      { src: '/campaigns/we-tell-the-story/4.png', label: 'Campaign asset' },
    ],
  },
  {
    title: 'Power of 2',
    company: 'ContentSquare',
    type: 'integrated' as const,
    tags: ['Brand', 'Integrated', 'M&A', 'PR', 'Customer'],
    summary: 'M&A campaign connected to announcement followed by customer-led communications, cross-sell and up-sell campaign across both Clicktale & ContentSquare customer bases.',
    stats: [
      { label: 'Announcement', value: 'M&A launch' },
      { label: 'Activation', value: 'Customer-led' },
      { label: 'Cross-sell & up-sell', value: 'Expansion' },
    ],
    color: 'purple',
    images: [
      { src: '/campaigns/power-of-2/1.png', label: 'M&A announcement creative' },
      { src: '/campaigns/power-of-2/2.png', label: 'Customer communications' },
    ],
  },
  {
    title: 'UnPredictions',
    company: 'Emarsys',
    type: 'demand' as const,
    tags: ['Content', 'Thought Leadership', 'Demand Gen'],
    summary: 'Annual predictions / counter-predictions thought leadership POV campaign designed to generate awareness and pipeline through provocative industry commentary.',
    stats: [
      { label: 'Pipeline Created', value: '£1.64M' },
      { label: 'Revenue Generated', value: '£1.2M' },
      { label: 'Engagement', value: 'Organic influencer' },
    ],
    color: 'green',
    images: [
      { src: '/campaigns/unpredictions/3.webp', label: 'Landing experience' },
      { src: '/campaigns/unpredictions/2.jpg', label: 'Social promotion' },
      { src: '/campaigns/unpredictions/4.jpeg', label: 'Campaign creative' },
      { src: '/campaigns/unpredictions/6.png', label: 'Digital activation' },
      { src: '/campaigns/unpredictions/7.jpg', label: 'Industry commentary' },
      { src: '/campaigns/unpredictions/8.jpg', label: 'Influencer engagement' },
      { src: '/campaigns/unpredictions/9.png', label: 'Demand generation asset' },
      { src: '/campaigns/unpredictions/10.png', label: 'Campaign results' },
    ],
  },
  {
    title: 'Mobile Wallet',
    company: 'SAP Emarsys',
    type: 'product' as const,
    tags: ['Product Launch', 'Integrated', 'Global'],
    summary: 'Integrated product launch campaign for a new mobile wallet capability focusing on existing customers. Leveraged at the top of funnel for short burst campaign across PR, demand gen & digital.',
    stats: [
      { label: 'Cross-sell Pipeline', value: '£533K ARR' },
      { label: 'NBS Revenue Generated', value: '£60K' },
      { label: 'ROAS', value: '4x' },
    ],
    color: 'purple',
    images: [
      { src: '/campaigns/mobile-wallet/2.gif', label: 'Product demo animation' },
      { src: '/campaigns/mobile-wallet/0.mp4', label: 'Mobile Wallet product video', type: 'video' as const },
      { src: '/campaigns/mobile-wallet/1.jpg', label: 'Mobile Wallet hero creative' },
      { src: '/campaigns/mobile-wallet/3.gif', label: 'Wallet pass experience' },
      { src: '/campaigns/mobile-wallet/4.gif', label: 'Customer journey animation' },
      { src: '/campaigns/mobile-wallet/5.jpeg', label: 'Campaign creative' },
      { src: '/campaigns/mobile-wallet/6.png', label: 'Product marketing asset' },
      { src: '/campaigns/mobile-wallet/7.mp4', label: 'Campaign launch video', type: 'video' as const },
      { src: '/campaigns/mobile-wallet/8.webp', label: 'Mobile Wallet feature visual' },
    ],
  },
  {
    title: 'Changing Britain Festival',
    company: 'Southbank Centre',
    type: 'brand' as const,
    tags: ['Consumer', 'Social', 'Brand'],
    summary: 'Consumer demand campaign (agency-side) delivering social-first and driving ticket sales for one of London\'s iconic cultural venues.',
    stats: [
      { label: 'Personalization', value: 'At scale' },
      { label: 'Online ticket sales', value: 'Record' },
      { label: 'The Drum', value: 'Award-winning' },
    ],
    color: 'green',
    images: [
      { src: '/campaigns/changing-britain/1.png', label: 'Social creative' },
    ],
  },
  {
    title: 'Customer Loyalty Index',
    company: 'SAP Emarsys',
    type: 'demand' as const,
    tags: ['Media', 'Thought Leadership', 'Digital'],
    summary: 'Multi-year serial thought leadership campaign integrated across PR, events, digital and demand.',
    stats: [
      { label: 'Influenced Pipeline', value: '£6.25M' },
      { label: 'Media Placements', value: '2,000+' },
      { label: 'Engagement', value: 'Partner & media' },
    ],
    color: 'purple',
    images: [
      { src: '/campaigns/customer-loyalty/4.png', label: 'Campaign creative' },
      { src: '/campaigns/customer-loyalty/1.jpg', label: 'Research report' },
      { src: '/campaigns/customer-loyalty/2.png', label: 'Media coverage' },
      { src: '/campaigns/customer-loyalty/3.webp', label: 'Event activation' },
      { src: '/campaigns/customer-loyalty/5.jpeg', label: 'Thought leadership asset' },
      { src: '/campaigns/customer-loyalty/6.jpeg', label: 'Paid media creative' },
    ],
  },
  {
    title: 'AI Power',
    company: 'SAP Emarsys',
    type: 'product' as const,
    tags: ['Brand', 'Positioning', 'Integrated', 'Global'],
    summary: 'Combining new product launch AI capabilities with thought leadership, events, digital and demand.',
    stats: [
      { label: 'Impressions', value: '10M' },
      { label: 'Engagements', value: '223K' },
      { label: 'Pipeline Created', value: '£670K' },
    ],
    color: 'green',
    images: [
      { src: '/campaigns/ai/1.jpeg', label: 'AI product launch hero' },
      { src: '/campaigns/ai/2.jpeg', label: 'Campaign creative' },
      { src: '/campaigns/ai/3.mp4', label: 'AI capabilities video', type: 'video' as const },
      { src: '/campaigns/ai/4.jpeg', label: 'Thought leadership content' },
      { src: '/campaigns/ai/5.jpeg', label: 'Event activation' },
      { src: '/campaigns/ai/6.webp', label: 'Digital campaign asset' },
      { src: '/campaigns/ai/7.png', label: 'Product marketing visual' },
      { src: '/campaigns/ai/8.jpeg', label: 'Demand generation creative' },
      { src: '/campaigns/ai/9.jpeg', label: 'Social media activation' },
      { src: '/campaigns/ai/10.jpeg', label: 'Campaign results' },
    ],
  },
  {
    title: 'Retail Talks',
    company: 'Emarsys',
    type: 'demand' as const,
    tags: ['Brand', 'Demand Gen', 'Customer Stories', 'Digital'],
    summary: 'Accelerated customer series blending real customer stories, strategic thinking and tactical execution for forward-thinking omnichannel retailers.',
    stats: [
      { label: 'Pipeline Created', value: '£1.29M' },
      { label: 'Revenue Generated', value: '£717K' },
      { label: 'Format', value: '10 episode series' },
    ],
    color: 'green',
    images: [
      { src: '/campaigns/retail-talks/4.jpg', label: 'Episode promotion' },
      { src: '/campaigns/retail-talks/3.webp', label: 'Series branding' },
      { src: '/campaigns/retail-talks/5.jpg', label: 'Series campaign asset' },
    ],
  },
  {
    title: 'Product Release & Use Case TOFU',
    company: 'SAP Emarsys',
    type: 'demand' as const,
    tags: ['Product Marketing', 'Demand Gen', 'Customer Stories', 'Digital'],
    summary: 'Built new layer of specific use case content and product release innovation to drive net new prospects.',
    stats: [
      { label: 'Pipeline Created', value: '£1.07M' },
      { label: 'Revenue Generated', value: '£785K' },
      { label: 'Model', value: 'Repeatable program' },
    ],
    color: 'purple',
    images: [
      { src: '/campaigns/product-release/2.png', label: 'Product release assets' },
      { src: '/campaigns/product-release/3.png', label: 'Use case content' },
      { src: '/campaigns/product-release/1.png', label: 'TOFU activation' },
    ],
  },
  {
    title: 'Customer Stories Rolling Thunder',
    company: 'SAP Emarsys',
    type: 'brand' as const,
    tags: ['Brand', 'Demand Gen', 'Customer Stories', 'Digital'],
    summary: 'Synchronized customer advocacy push across social, employee enablement and email to counter-market analyst wave miss.',
    stats: [
      { label: 'Demo Requests', value: '15% uplift' },
      { label: 'Impressions', value: '3M' },
      { label: 'Web Traffic', value: '30% increase' },
    ],
    color: 'green',
    images: [
      { src: '/campaigns/customer-stories/1714407130052.gif', label: 'Customer advocacy animation' },
      { src: '', label: 'Social activation' },
      { src: '', label: 'Employee enablement' },
    ],
  },
  {
    title: 'Kevin the Carrot',
    company: 'Aldi',
    type: 'brand' as const,
    tags: ['Brand', 'Customer Engagement', 'Social'],
    summary: 'Award-winning digital layer of multi-channel Christmas campaign for UK supermarket. Combining moment-driven organic social with highly impactful localized paid media.',
    stats: [
      { label: 'Ad Engagement', value: '50%' },
      { label: 'Press Coverage', value: '100+ articles' },
      { label: 'Recognition', value: 'Multi-award winning' },
    ],
    color: 'purple',
    images: [
      { src: '/campaigns/kevin-the-carrot/1.png', label: 'Christmas campaign creative' },
      { src: '/campaigns/kevin-the-carrot/2.png', label: 'Social engagement' },
      { src: '/campaigns/kevin-the-carrot/3.png', label: 'Paid media results' },
      { src: '/campaigns/kevin-the-carrot/4.png', label: 'Campaign creative' },
      { src: '/campaigns/kevin-the-carrot/5.png', label: 'Organic social content' },
      { src: '/campaigns/kevin-the-carrot/6.png', label: 'Localized paid media' },
      { src: '/campaigns/kevin-the-carrot/7.png', label: 'Brand activation' },
      { src: '/campaigns/kevin-the-carrot/8.png', label: 'Campaign results' },
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

/* ── Single-image/video viewer with hover arrows ── */

function ImageViewer({ images, colors, slideIdx, onSlideChange }: {
  images: { src: string; label: string; type?: 'video' }[]
  colors: typeof colorMap['purple']
  slideIdx: number
  onSlideChange: (idx: number) => void
}) {
  const item = images[slideIdx]
  const hasPrev = slideIdx > 0
  const hasNext = slideIdx < images.length - 1
  const videoRef = useRef<HTMLVideoElement>(null)
  const isVideo = item.type === 'video'

  return (
    <div className="group/viewer relative">
      {/* 16:9 aspect ratio container — white bg so images of any ratio sit uniformly */}
      <div className="relative aspect-video overflow-hidden bg-white">
        {!item.src ? (
          <div className={`w-full h-full ${colors.placeholderBg} flex flex-col items-center justify-center gap-3`}>
            <ImageIcon className="w-8 h-8 text-gray-300" />
            <span className="text-xs text-gray-400 text-center px-4 leading-relaxed">{item.label}</span>
          </div>
        ) : isVideo ? (
          <video
            ref={videoRef}
            src={item.src}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-contain bg-white"
          >
            <track kind="descriptions" label={item.label} />
          </video>
        ) : (
          <img src={item.src} alt={item.label} className="w-full h-full object-contain bg-white" />
        )}

        {/* Hover arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => { if (hasPrev) { videoRef.current?.pause(); onSlideChange(slideIdx - 1) } }}
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center shadow-sm transition-opacity ${
                hasPrev ? 'opacity-0 group-hover/viewer:opacity-100 hover:bg-white cursor-pointer' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button
              onClick={() => { if (hasNext) { videoRef.current?.pause(); onSlideChange(slideIdx + 1) } }}
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur border border-gray-200 flex items-center justify-center shadow-sm transition-opacity ${
                hasNext ? 'opacity-0 group-hover/viewer:opacity-100 hover:bg-white cursor-pointer' : 'opacity-0 pointer-events-none'
              }`}
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover/viewer:opacity-100 transition-opacity">
            {images.map((m, di) => (
              <button
                key={di}
                onClick={() => { videoRef.current?.pause(); onSlideChange(di) }}
                className={`transition-all rounded-full ${
                  slideIdx === di
                    ? `w-5 h-1.5 ${m.type === 'video' ? 'bg-red-400' : 'bg-white'}`
                    : `w-1.5 h-1.5 ${m.type === 'video' ? 'bg-red-300/60 hover:bg-red-300/80' : 'bg-white/60 hover:bg-white/80'}`
                }`}
                aria-label={m.type === 'video' ? `Video ${di + 1}` : `Image ${di + 1}`}
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

                  {/* Stats strip — tonal block */}
                  <div className={`${colors.statBg} mt-6 px-4 py-5`}>
                    <div className="grid grid-cols-3 gap-3">
                      {c.stats.map((s, j) => {
                        const sizeClass =
                          s.value.length > 18 ? 'text-sm' : s.value.length > 13 ? 'text-base' : 'text-lg'
                        return (
                          <div key={j} className="text-center">
                            <div className={`${sizeClass} font-extrabold tracking-tight ${colors.statText} leading-tight`}>
                              {s.value}
                            </div>
                            <div className="text-[11px] text-gray-500 mt-1.5 uppercase tracking-wider">
                              {s.label}
                            </div>
                          </div>
                        )
                      })}
                    </div>
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
