type Route = 'home' | 'engines' | 'campaigns' | 'projects' | 'teams' | 'about' | 'connect'

export function Footer({ navigate }: { navigate: (r: Route) => void }) {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-[hsl(264,67%,52%)] flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: 'Space Grotesk' }}>TB</span>
              </div>
              <span className="text-white font-semibold text-lg" style={{ fontFamily: 'Space Grotesk' }}>
                Tom Ball
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              I build marketing engines that fuel revenue growth and the teams (human + agent) that run them.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigate</h4>
            <div className="grid grid-cols-2 gap-2">
              {(['home', 'engines', 'campaigns', 'projects', 'teams', 'about', 'connect'] as Route[]).map(r => (
                <button
                  key={r}
                  onClick={() => navigate(r)}
                  className="text-left text-sm hover:text-white transition-colors capitalize"
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Connect</h4>
            <div className="space-y-2 text-sm">
              <a href="https://linkedin.com/in/tomball" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://substack.com/@tomball" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                Substack
              </a>
              <button onClick={() => navigate('connect')} className="block hover:text-white transition-colors">
                Get in touch
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-xs text-gray-500">
          Tom Ball {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}
