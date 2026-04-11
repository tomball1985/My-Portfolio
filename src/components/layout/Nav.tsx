import { useState, useRef, useEffect } from 'react'
import { Zap, Target, Briefcase, Users, ChevronDown } from 'lucide-react'

type Route = 'home' | 'engines' | 'campaigns' | 'projects' | 'teams' | 'about' | 'connect'

const portfolioPages: Route[] = ['engines', 'campaigns', 'projects', 'teams']

const portfolioItems: { label: string; route: Route; icon: typeof Zap; color: string; bg: string }[] = [
  { label: 'Engines',   route: 'engines',   icon: Zap,       color: 'text-[hsl(264,67%,52%)]', bg: 'bg-purple-50' },
  { label: 'Campaigns', route: 'campaigns', icon: Target,    color: 'text-[hsl(152,55%,42%)]', bg: 'bg-emerald-50' },
  { label: 'Projects',  route: 'projects',  icon: Briefcase, color: 'text-blue-600',            bg: 'bg-blue-50' },
  { label: 'Teams',     route: 'teams',     icon: Users,     color: 'text-amber-600',           bg: 'bg-amber-50' },
]

export function Nav({ route, navigate }: { route: Route; navigate: (r: Route) => void }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  /* Close dropdown when clicking outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const openDropdown = () => {
    clearTimeout(timeoutRef.current)
    setDropdownOpen(true)
  }
  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150)
  }

  const isPortfolioActive = portfolioPages.includes(route)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => navigate('home')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-[hsl(264,67%,52%)] flex items-center justify-center">
            <span className="text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk' }}>TB</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900" style={{ fontFamily: 'Space Grotesk' }}>
            Tom Ball
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {/* Home */}
          <button
            onClick={() => navigate('home')}
            className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
              route === 'home'
                ? 'text-[hsl(264,67%,52%)] bg-purple-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Home
          </button>

          {/* My Portfolio — with dropdown */}
          <div ref={dropdownRef} className="relative" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <button
              onClick={() => setDropdownOpen(o => !o)}
              className={`inline-flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                isPortfolioActive
                  ? 'text-[hsl(264,67%,52%)] bg-purple-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              My Portfolio
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl border border-gray-100 shadow-lg shadow-gray-100/50 py-2 z-50">
                {portfolioItems.map(item => (
                  <button
                    key={item.route}
                    onClick={() => { navigate(item.route); setDropdownOpen(false) }}
                    className={`flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors ${
                      route === item.route
                        ? 'text-[hsl(264,67%,52%)] bg-purple-50/50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-md ${item.bg} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* About */}
          <button
            onClick={() => navigate('about')}
            className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
              route === 'about'
                ? 'text-[hsl(264,67%,52%)] bg-purple-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            About
          </button>

          {/* Connect */}
          <button
            onClick={() => navigate('connect')}
            className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
              route === 'connect'
                ? 'text-[hsl(264,67%,52%)] bg-purple-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Connect
          </button>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-6 py-3 space-y-1">
          <button
            onClick={() => { navigate('home'); setMobileOpen(false) }}
            className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-md ${
              route === 'home' ? 'text-[hsl(264,67%,52%)] bg-purple-50' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Home
          </button>
          <div className="px-3 pt-3 pb-1 text-[10px] font-semibold text-gray-400 uppercase tracking-widest">My Portfolio</div>
          {portfolioItems.map(item => (
            <button
              key={item.route}
              onClick={() => { navigate(item.route); setMobileOpen(false) }}
              className={`flex items-center gap-3 w-full text-left px-3 py-2.5 text-sm font-medium rounded-md ${
                route === item.route ? 'text-[hsl(264,67%,52%)] bg-purple-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <div className={`w-6 h-6 rounded-md ${item.bg} flex items-center justify-center shrink-0`}>
                <item.icon className={`w-3 h-3 ${item.color}`} />
              </div>
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { navigate('about'); setMobileOpen(false) }}
            className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-md ${
              route === 'about' ? 'text-[hsl(264,67%,52%)] bg-purple-50' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            About
          </button>
          <button
            onClick={() => { navigate('connect'); setMobileOpen(false) }}
            className={`block w-full text-left px-3 py-2.5 text-sm font-medium rounded-md ${
              route === 'connect' ? 'text-[hsl(264,67%,52%)] bg-purple-50' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            Connect
          </button>
        </nav>
      )}
    </header>
  )
}
