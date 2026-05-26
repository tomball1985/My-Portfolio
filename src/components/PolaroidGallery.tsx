import { useMemo, useState } from 'react'
import { MapPin, Heart, Utensils, Activity, Compass, Star, Lightbulb } from 'lucide-react'
import { outsideMoments, type OutsideCategory, type OutsideMoment } from '../outsideWorkData'

// Per-category icon + chip styling. Extend this if you add new categories
// to the OutsideCategory union in outsideWorkData.ts.
const CATEGORY_STYLE: Record<OutsideCategory, {
  icon: React.ComponentType<{ className?: string }>
  bg: string
  text: string
}> = {
  Travel:   { icon: MapPin,    bg: 'bg-purple-50',  text: 'text-[hsl(264,67%,52%)]' },
  Family:   { icon: Heart,     bg: 'bg-rose-50',    text: 'text-rose-600' },
  Hobbies:  { icon: Compass,   bg: 'bg-emerald-50', text: 'text-[hsl(152,55%,42%)]' },
  Sport:    { icon: Activity,  bg: 'bg-orange-50',  text: 'text-orange-600' },
  Food:     { icon: Utensils,  bg: 'bg-amber-50',   text: 'text-amber-700' },
  Places:   { icon: MapPin,    bg: 'bg-sky-50',     text: 'text-sky-700' },
  Likes:    { icon: Star,      bg: 'bg-yellow-50',  text: 'text-yellow-700' },
  Learning: { icon: Lightbulb, bg: 'bg-teal-50',    text: 'text-teal-700' },
}

// Five tilt presets cycled by id, so the layout is stable but feels scattered.
const ROTATIONS = ['-rotate-3', '-rotate-1', 'rotate-1', 'rotate-2', '-rotate-2'] as const
const tiltFor = (id: number) => ROTATIONS[id % ROTATIONS.length]

// Two tape-angle presets so the masking tape doesn't all lean the same way.
const TAPE_ANGLES = ['-rotate-3', 'rotate-2'] as const
const tapeFor = (id: number) => TAPE_ANGLES[id % TAPE_ANGLES.length]

type Filter = 'All' | OutsideCategory

export function PolaroidGallery() {
  const [filter, setFilter] = useState<Filter>('All')

  // Which categories actually appear in the data — drives the filter row.
  const categories = useMemo<Filter[]>(() => {
    const seen = new Set<OutsideCategory>()
    outsideMoments.forEach(m => seen.add(m.category))
    return ['All', ...Array.from(seen)]
  }, [])

  const filtered = filter === 'All'
    ? outsideMoments
    : outsideMoments.filter(m => m.category === filter)

  return (
    <section className="py-16 bg-[#faf7f2]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Outside Work
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">From the camera roll</h2>
          <p className="text-gray-500 leading-relaxed">
            A handful of moments from outside work — places I keep going back to, hobbies that
            keep me sane, the people I spend time with, and the small things I'd defend in a
            debate. Hover any photo to read it.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(c => {
            const active = filter === c
            return (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full tracking-wide uppercase transition-colors ${
                  active
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>

        {/* Scrapbook grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-14 gap-x-6 md:gap-x-10">
          {filtered.map(m => (
            <Polaroid key={m.id} moment={m} />
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-16 text-center text-gray-500"
          style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive', fontSize: '1.4rem' }}
        >
          More to come — life keeps adding pages.
        </p>
      </div>
    </section>
  )
}

function Polaroid({ moment }: { moment: OutsideMoment }) {
  const style = CATEGORY_STYLE[moment.category]
  const Icon = style.icon

  return (
    <figure
      className={`bg-white p-3 pb-6 shadow-md shadow-stone-300/60 ${tiltFor(moment.id)} hover:rotate-0 hover:scale-105 hover:z-10 hover:shadow-xl hover:shadow-stone-400/50 transition-all duration-300 relative`}
    >
      {/* Masking tape */}
      <span
        aria-hidden="true"
        className={`absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-amber-100/80 ${tapeFor(moment.id)} shadow-sm`}
      />

      {/* Photo */}
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={moment.image}
          alt={moment.caption}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category chip */}
      <span
        className={`absolute top-5 right-5 inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${style.bg} ${style.text} shadow-sm`}
      >
        <Icon className="w-2.5 h-2.5" />
        {moment.category}
      </span>

      {/* Handwritten caption */}
      <figcaption
        className="mt-4 px-1 text-gray-700 leading-snug"
        style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive', fontSize: '1.15rem', lineHeight: 1.25 }}
      >
        {moment.caption}
      </figcaption>
    </figure>
  )
}
