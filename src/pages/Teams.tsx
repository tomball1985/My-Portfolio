import { ArrowRight, Quote, Linkedin } from 'lucide-react'

/* ── Team beliefs (moved from Projects) ── */

const beliefs = [
  'Partners to each other. Within marketing. Outside of marketing.',
  'One person cannot be the expert in everything',
  'Lead by example, wherever possible',
  'Strong opinions, weakly held',
  'KPIs that map to team\'s daily tasks',
  'Communication cadences that create room for discussion & clarity',
  'Operational backbone — system of record and key information',
  'Ruthless prioritisation',
  'Strong data foundation as a guide — to inform decisions',
  'Move at pace, doesn\'t mean change the goalposts every 5 minutes',
]

/* ── Testimonials — pull from LinkedIn recommendations ── */

const testimonials = [
  {
    quote: 'Add your first LinkedIn recommendation here — a quote from a direct report or team member about what it\'s like working with Tom.',
    name: 'Team Member Name',
    role: 'Role / Title',
    relationship: 'Reported to Tom at SAP Emarsys',
  },
  {
    quote: 'Add a second recommendation — ideally from someone in a different function or seniority level to show range.',
    name: 'Colleague Name',
    role: 'Role / Title',
    relationship: 'Worked alongside Tom at Emarsys',
  },
  {
    quote: 'A third recommendation — perhaps from a peer, cross-functional partner, or senior stakeholder.',
    name: 'Peer / Leader Name',
    role: 'Role / Title',
    relationship: 'Cross-functional partner at SAP',
  },
  {
    quote: 'A fourth recommendation — consider one from an earlier role at Clicktale or immediate future for career breadth.',
    name: 'Former Colleague',
    role: 'Role / Title',
    relationship: 'Worked with Tom at Clicktale',
  },
]

/* ── Main component ── */

export function Teams() {
  return (
    <div>
      {/* ── Header ── */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 text-[hsl(264,67%,52%)] text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            How I Build
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Teams</h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            As an ex-rugby player, I love teaming. I get energy from building great bodies of work which drive outcomes, together. My agency roots means I have always thought about how people, process & technology come together. Now with AI the teams need to be human AND agent.
          </p>
        </div>
      </section>

      {/* ── Team beliefs ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Team beliefs</h2>
          <p className="text-gray-500 mb-8 max-w-xl">The principles I lead by — how I build teams and how we operate together.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {beliefs.map((belief, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                <ArrowRight className="w-4 h-4 text-[hsl(264,67%,52%)] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 leading-snug">{belief}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What my teams say about me ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">What my teams say about me</h2>
              <p className="text-gray-500 max-w-xl">Recommendations from people I've worked with — pulled from my LinkedIn profile.</p>
            </div>
            <a
              href="https://www.linkedin.com/in/tomball1985/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[hsl(264,67%,52%)] bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              View all on LinkedIn
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all relative"
              >
                {/* Quote mark */}
                <Quote className="w-8 h-8 text-purple-100 absolute top-6 right-6" />

                {/* Quote text */}
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10 italic">
                  "{t.quote}"
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(264,67%,52%)] to-[hsl(264,67%,62%)] flex items-center justify-center">
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
            ))}
          </div>

          {/* Mobile LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/tomball1985/"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden flex items-center justify-center gap-2 mt-8 px-4 py-3 text-sm font-medium text-[hsl(264,67%,52%)] bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            View all recommendations on LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
