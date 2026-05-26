import React, { useState, useEffect } from 'react'
import './index.css'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Engines } from './pages/Engines'
import { Campaigns } from './pages/Campaigns'
import { Projects } from './pages/Projects'
import { Teams } from './pages/Teams'
import { About } from './pages/About'
import { Connect } from './pages/Connect'

type Route = 'home' | 'engines' | 'campaigns' | 'projects' | 'teams' | 'about' | 'connect'

function getRoute(): Route {
  const hash = window.location.hash.replace('#', '') || 'home'
  const valid: Route[] = ['home', 'engines', 'campaigns', 'projects', 'teams', 'about', 'connect']
  return valid.includes(hash as Route) ? (hash as Route) : 'home'
}

function App() {
  const [route, setRoute] = useState<Route>(getRoute)

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      const anchor = sessionStorage.getItem('pendingAnchor')
      if (anchor) {
        sessionStorage.removeItem('pendingAnchor')
        setTimeout(() => {
          document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const navigate = (r: Route, anchor?: string) => {
    if (anchor) sessionStorage.setItem('pendingAnchor', anchor)
    window.location.hash = r
  }

  const pages: Record<Route, React.JSX.Element> = {
    home: <Home navigate={navigate} />,
    engines: <Engines navigate={navigate} />,
    campaigns: <Campaigns />,
    projects: <Projects />,
    teams: <Teams navigate={navigate} />,
    about: <About navigate={navigate} />,
    connect: <Connect />,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav route={route} navigate={navigate} />
      <main className="flex-1">
        {pages[route]}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}

export default App
