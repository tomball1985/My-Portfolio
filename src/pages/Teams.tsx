import { useState } from 'react'
import { ArrowRight, Quote, RotateCw, ChevronDown } from 'lucide-react'
import { LinkedinIcon } from '../components/ui/linkedin-icon'

type Route = 'home' | 'engines' | 'campaigns' | 'projects' | 'teams' | 'about' | 'connect'

/* ── Team Values (v6) ── */

const values: { headline: string; description: string }[] = [
  { headline: 'We win as one.', description: 'Marketing is winning when the whole business is growing. Partnering as equals and multipliers, not order takers.' },
  { headline: 'We put our customer at the heart.', description: 'Of our messaging, content, creative, events, programs and experiences. Always.' },
  { headline: 'We speak from the source of truth.', description: 'We develop the revenue foundation and communicate using the language (and calculations) that matter.' },
  { headline: 'We bring passion and curiosity.', description: 'For solving, evolving and growing — nothing stays the same. Always in BETA.' },
  { headline: 'We work in the open.', description: 'Context lives in the team, not in heads. We share our work with each other and our partners.' },
  { headline: 'We drive and own outcomes.', description: 'Take responsibility for the results of our work — good or bad. We measure to improve, celebrate the green and embrace the red.' },
  { headline: 'We build the system to ship and scale.', description: 'AI-first by default. Repeatable work belongs to the system — human time goes to relationships, creativity and judgement.' },
  { headline: 'We ruthlessly and regularly prioritise.', description: "The courage to kill what's not working, double down on what is, with the patience to wait and see." },
  { headline: 'We look after each other.', description: "Hard work, not hard on each other. We protect the team's energy as actively as we protect the work." },
  { headline: "We're not saving lives.", description: 'We take the work seriously, not ourselves. We keep the energy high, the temperament calm and the ego low.' },
]

const pad2 = (n: number) => String(n).padStart(2, '0')

/* ── Testimonials — pull from LinkedIn recommendations ── */

const testimonials = [
  {
    label: 'Direct Report',
    quote: `I worked with Tom through an M&A org where clarity of leadership really mattered, and he consistently brought a level of perspective that extended well beyond his remit. Tom leads with intent. He has a strong instinct for where the business needs to go, and the confidence to make deliberate choices about what not to do, something that's increasingly rare in high-growth environments. Rather than chasing incremental gains, he focuses on building durable foundations that enable teams, systems, and strategy to scale together. What I valued most was his ability to engage as a true partner across the organisation. Tom invites challenge, synthesises diverse viewpoints, and then sets a clear course forward. That combination of openness and decisiveness creates trust not just within his team, but across senior stakeholders. He's the kind of leader who raises the bar quietly: by how he frames challenges, how he develops people, and how he connects team execution back to business outcomes. The impact of his leadership is evident not only in results, but in the maturity and confidence of the teams he leads. It has been an immense pleasure working with Tom, one that will stay with me throughout my career and envy future teams working under his leadership.`,
    name: 'Jaz Khangura',
    role: 'Global Marketing Director | ABM | Demand Generation',
    relationship: 'Reported to Tom directly',
  },
  {
    label: 'Direct Report',
    quote: `I worked with Tom within the demand generation team at Emarsys, and later as his role evolved to GTM transformation. I experience marketing as one of the fastest moving functions in a business; it requires rapid decision making, unambiguous course charting and coordinated execution, all with imperfect information. To these ends, Tom is very effective at setting the direction, connecting the people, and clearing the way in order to turn the needle in the right direction. I also admire his dedication, it's my perception that he cares deeply about delivering great marketing. I see that he delights in executions that are technically and conceptually excellent as well as performance driving, which demonstrates a passion for the discipline as a whole. In a role as a technologist / systems SME, one of the common challenges I face is to articulate the nuance and detail that could derail a project to a stakeholder at the correct level of depth for both the person and the issue. Too shallow and the implications are not understood, too deep and you're effectively speaking a different language. With credit to Tom, he gets hands on to really understand the different moving parts of a go-to-market engine. It is this depth and breadth which helps to run a high performing team, holding dialogue with different subject matter experts at the right level, to be able to spot blockers (and opportunities) that other leaders might miss.`,
    name: 'Adam Freeman',
    role: 'GTM, AI and Marketing Operations | 3x Marketo Certified Expert',
    relationship: 'Reported to Tom directly',
  },
  {
    label: 'Revenue Leader',
    quote: `I had the pleasure of working with Tom during our time at Emarsys/SAP. Tom was pivotal in building a best in class marketing strategy and in fostering a strong, collaborative working relationship between marketing and sales. What really stood out to me was how well Tom understood sales. He genuinely listened to feedback from SDRs and sales leaders and was always willing to adjust marketing approaches based on what was actually happening on the ground. That focus on alignment and shared goals made a real difference - both in the trust between the teams and in the results we delivered. Tom doesn't just think in terms of leads or campaigns; he looks at how strategy, technology, data, and people all fit together. I personally learned a lot from Tom during our time working together and hope our professional paths cross again in the future.`,
    name: 'Alistair Brand',
    role: 'Business Development Director - UK',
    relationship: 'Senior to Tom at Emarsys/SAP',
  },
  {
    label: 'Direct Report',
    quote: `I first worked with Tom as a client of the agency we had engaged; a few years later when I got the opportunity to work for Tom I jumped at the chance and never looked back. Many marketers claim to drive 'digital transformation', but Tom lives and breathes it. He inherently knows how to ideate, test, learn, scale, iterate and finess digital programmes, but his absolute skill in bringing people with him on that journey is admirable. From marketing teams to creative, to sales and finance, there isn't a silo Tom isn't ready to break, yet his natural storytelling ability and charm mean everyone is better for joining his extended team. He seamlessly blends being a creative, with being data driven, and he's a team builder who cares about his people, their development and success. Tom has a way of lifting everyone up around him; being it through results and revenue, career development or just pure energy and passion for his craft. I highly recommend if you can find a way to work with him/ for him/ alongside him, you do; I promise you'll be a better marketer for it, I know I am.`,
    name: 'Laura Brown',
    role: 'Marketing Leader | Demand Generator | Revenue & Growth Driver',
    relationship: 'Reported to Tom directly',
  },
  {
    label: 'Marketing Leadership',
    quote: `It's rare to find a leader like Tom Ball—someone who combines hard work, strategic vision, and a relentless drive for excellence. As VP of Demand Generation at SAP Emarsys, Tom sets a high bar, not just for himself but for his entire team, inspiring everyone to bring their best every day. Tom's approach to marketing is a perfect blend of scrappy ingenuity and methodical execution. He doesn't just get the job done—he builds scalable, repeatable processes that deliver measurable impact. His data-driven mindset ensures that every hypothesis is grounded in insight, and every decision is aimed at driving results. One of Tom's standout qualities is his collaborative nature. He understands the critical intersection between marketing and sales, fostering seamless partnerships that align goals and deliver success across teams. Tom is also never satisfied with the status quo—he constantly challenges processes and ideas to uncover new opportunities and make things better, whether it's through innovative campaigns or operational efficiencies. If you're looking for someone who exemplifies what it means to lead with vision, rigor, and a commitment to continuous improvement, Tom is that person. I've seen firsthand how his approach drives not only results but also elevates the performance of those around him.`,
    name: 'Kelsey Jones',
    role: 'Product Marketing Leader',
    relationship: 'Worked with Tom on the same team',
  },
  {
    label: 'GTM Leader',
    quote: `Tom has a quality that makes him standout, he's just easy to work with and he's clear on his objectives. Plenty of people are smart and there's plenty of people who know their own area, Tom's skill is to connect different areas and objectives and align them to a plan that allows everyone to understand the message and focus. This is one of the key reasons he and the team have been successful in driving engagement and growth with small budgets and big impacts and earning the right to have bigger budgets to make bigger impacts. Can't wait to see how he keep developing the team and the business.`,
    name: 'Alex Timlin',
    role: 'Chief CRM and Customer Experience Expert at SAP',
    relationship: 'Senior to Tom at SAP Emarsys',
  },
  {
    label: 'C-Suite',
    quote: `I am delighted to recommend Tom Ball for his exceptional work as a digital marketing and demand generation expert. I had the pleasure of working with Tom at Emarsys and was thoroughly impressed by his dedication and ingenuity. Tom has a deep understanding of demand generation and is always striving to find new and innovative ways to generate leads and drive revenue. When we worked together at Emarsys, he reinvented the way we were going about demand generation and the results that followed were remarkable. Tom's efforts helped us achieve unprecedented levels of engagement with our target audience and drive significant revenue growth. Tom is an excellent communicator and a skilled marketer who is always willing to share his knowledge and expertise with others. He is a collaborative team player who is able to work with a variety of stakeholders to achieve common goals. Overall, Tom would be an invaluable asset to any organization looking for a talented and results-driven digital marketer with a focus on demand generation. I highly recommend him without hesitation.`,
    name: 'Ohad Hecht',
    role: 'CEO at Emplifi | Global SaaS Operator | Advisor & Investor',
    relationship: 'Senior to Tom at Emarsys',
  },
  {
    label: 'C-Suite',
    quote: `When you have somebody like Tom in your marketing team, he really becomes the bridge between Sales and Marketing. He takes the job super seriously and with the utmost passion. We scaled countless marketing projects globally after testing on smaller scale with a transformative impact on Emarsys' results - ultimately the journey toward the SAP acquisition couldn't have happened without the new things Tom added to our marketing mix which took us to the next level. I'd would love the opportunity to work with Tom again, it would be guaranteed accretive results!`,
    name: 'Grant Coleman',
    role: 'CRO @ Uberall',
    relationship: 'Senior to Tom at Emarsys',
  },
  {
    label: 'GTM Leader',
    quote: `Tom joined Emarsys and was fundamental to the changes i saw happen across our Demand Generation function. Tom not only joined with a fundamental knowledge of how to transform Demand Gen for a SAAS business, but a playbook for doing this at rapid pace with guardrails to ensure performance KPI's were also achieved. During our time together we worked closely to build the Demand Generation team and i can safely say my team would not have overperformed like they had without him in our business.`,
    name: 'Zach Hemmant-Low',
    role: 'Chief Sales Officer - Rossum.ai',
    relationship: 'Worked with Tom on the same team at Emarsys',
  },
  {
    label: 'C-Suite',
    quote: `From the moment Tom joined Emarsys it was clear our demand gen was going to level up and quickly. Tom and his teams were instrumental to achieving our growth.`,
    name: 'Andrew Fullerton',
    role: 'COO - Rossum',
    relationship: 'Senior to Tom at Emarsys',
  },
]

/* ── Main component ── */

export function Teams({ navigate }: { navigate: (r: Route) => void }) {
  const [flipped, setFlipped] = useState<Set<number>>(new Set())
  const toggleFlip = (i: number) =>
    setFlipped((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  const [expandedQuote, setExpandedQuote] = useState<Set<number>>(new Set())
  const toggleQuote = (i: number) =>
    setExpandedQuote((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  const QUOTE_TRUNCATE_THRESHOLD = 320
  return (
    <div>
      {/* ── Header ── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left — text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                How I Build
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Teams</h1>
              <p className="text-lg text-gray-500 leading-relaxed">
                As an ex-rugby player, I love teaming. I get energy from building great bodies of work which drive outcomes, together. My agency roots means I have always thought about how people, process & technology come together. Now with AI the teams need to be human AND agent.
              </p>
            </div>

            {/* Right — image */}
            <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <img
                src="/About/1700223814787.jpeg"
                alt="Tom with his team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Values ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Team Values</h2>
          <p className="text-gray-500 mb-8 max-w-xl">The principles I lead by — how I build teams and how we operate together. Click any card to reveal what it means in practice.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => {
              const isFlipped = flipped.has(i)
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => toggleFlip(i)}
                  aria-pressed={isFlipped}
                  className="relative h-60 perspective-1000 text-left group"
                >
                  <div
                    className={`relative w-full h-full preserve-3d transition-transform duration-500 ${
                      isFlipped ? 'rotate-y-180' : ''
                    }`}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden bg-white border border-gray-100 group-hover:border-gray-200 group-hover:shadow-md transition-all rounded-xl p-5 flex flex-col justify-between">
                      <span className="text-xs font-semibold tabular-nums text-gray-400">{pad2(i + 1)}</span>
                      <h3 className="font-bold text-gray-900 text-lg leading-snug">{v.headline}</h3>
                      <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-[hsl(264,67%,52%)] transition-colors">
                        <RotateCw className="w-3 h-3" />
                        click to reveal
                      </span>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-purple-50 border border-purple-100 rounded-xl p-5 flex flex-col justify-between">
                      <span className="text-xs font-semibold tracking-wide uppercase text-[hsl(264,67%,52%)]">
                        {pad2(i + 1)} · {v.headline.replace(/\.$/, '')}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">{v.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                        <RotateCw className="w-3 h-3" />
                        click to flip back
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}

            {/* CTA — fills the 2-column gap on the 4th row (lg) */}
            <button
              type="button"
              onClick={() => navigate('projects')}
              className="group sm:col-span-2 lg:col-span-2 h-60 rounded-xl p-6 flex flex-col justify-between text-left text-white bg-gradient-to-br from-[hsl(264,67%,52%)] to-[hsl(264,67%,62%)] hover:shadow-lg hover:shadow-purple-200 transition-all"
            >
              <div>
                <span className="inline-block px-2.5 py-1 bg-white/20 text-white text-[10px] font-semibold rounded-md uppercase tracking-wide">
                  See it in action
                </span>
                <h3 className="text-2xl font-bold mt-3 leading-tight">Check out my teams in action</h3>
                <p className="text-purple-100 mt-2 text-sm max-w-md">
                  Programs, brands and rev-ops projects shipped with the teams I've built.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                Browse projects <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── What my teams say about me ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Team Talk</h2>
            <p className="text-gray-500 max-w-xl">Snapshot of recommendations from people I've worked with in different capacities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {testimonials.map((t, i) => {
              const isLong = t.quote.length > QUOTE_TRUNCATE_THRESHOLD
              const isExpanded = expandedQuote.has(i)
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all relative flex flex-col min-h-[480px]"
                >
                  {/* Quote mark */}
                  <Quote className="w-8 h-8 text-purple-100 absolute top-6 right-6" />

                  {/* Relationship label */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-5 tracking-wide uppercase self-start">
                    {t.label}
                  </div>

                  {/* Quote area — grows to fill, attribution stays pinned below */}
                  <div className="flex-1 flex flex-col mb-6 relative z-10">
                    <p className={`text-gray-600 leading-relaxed italic ${isLong && !isExpanded ? 'line-clamp-6' : ''}`}>
                      "{t.quote}"
                    </p>
                    {isLong && (
                      <button
                        type="button"
                        onClick={() => toggleQuote(i)}
                        aria-expanded={isExpanded}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[hsl(264,67%,52%)] hover:underline self-start"
                      >
                        {isExpanded ? 'Show less' : 'Read full'}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Attribution — always pinned to the bottom */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(264,67%,52%)] to-[hsl(264,67%,62%)] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xs">
                        {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                      <p className="text-xs text-gray-400">{t.relationship}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View all on LinkedIn — under the grid */}
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.linkedin.com/in/tomball1985/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[hsl(264,67%,52%)] bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              View all on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── "Are you building a team?" CTA banner ── */}
      <section className="relative py-24 border-t border-gray-100 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/About/IMG_4347.PNG')",
            backgroundSize: '135% auto',
            backgroundPosition: 'center 25%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-[hsl(264,40%,15%)]/80 to-gray-900/90" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-1 bg-[hsl(264,67%,62%)] rounded-full mx-auto mb-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4" style={{ fontFamily: 'Space Grotesk' }}>
            Are you building a team?
          </h2>
          <p className="text-gray-200 mb-8">
            If you are a GTM leader, portfolio or investment professional or fellow marketer.
          </p>
          <button
            onClick={() => navigate('connect')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[hsl(264,67%,52%)] text-white font-medium rounded-lg hover:bg-[hsl(264,67%,46%)] transition-colors shadow-lg shadow-purple-900/40"
          >
            Let's Connect <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  )
}
