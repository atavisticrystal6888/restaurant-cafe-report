import { useState, useCallback } from 'react'
import Sidebar from './components/Sidebar'
import PageFooter from './components/PageFooter'
import Overview from './pages/Overview'
import IdeaValidation from './pages/IdeaValidation'
import MarketValidation from './pages/MarketValidation'
import CompetitiveBenchmarking from './pages/CompetitiveBenchmarking'
import FeasibilityLocation from './pages/FeasibilityLocation'
import Licensing from './pages/Licensing'
import SetupCosts from './pages/SetupCosts'
import ThemeOptions from './pages/ThemeOptions'
import AudienceValidation from './pages/AudienceValidation'
import ProofOfConcept from './pages/ProofOfConcept'
import ExecutionRoadmap from './pages/ExecutionRoadmap'
import RiskMatrix from './pages/RiskMatrix'
import OperationsPlaybook from './pages/OperationsPlaybook'
import ConsolidatedReport from './pages/ConsolidatedReport'

export const CAFE_SECTIONS = [
  { id: 'consolidated', icon: '📄', label: 'Optimized Report (No-Bar)' },
  { id: 'overview', icon: '📊', label: 'Executive Overview' },
  { id: 'idea', icon: '💡', label: 'Idea Validation' },
  { id: 'market', icon: '📈', label: 'Market Validation' },
  { id: 'competition', icon: '🏆', label: 'Competitive Benchmarking' },
  { id: 'location', icon: '📍', label: 'Feasibility & Location' },
  { id: 'licensing', icon: '📜', label: 'Licensing & Regulatory' },
  { id: 'costs', icon: '💰', label: 'Setup & Operations Cost' },
  { id: 'themes', icon: '🎨', label: 'Theme Options' },
  { id: 'audience', icon: '🎯', label: 'Audience Validation' },
  { id: 'poc', icon: '✅', label: 'Proof of Concept' },
  { id: 'roadmap', icon: '🗺️', label: 'Execution Roadmap' },
  { id: 'risks', icon: '⚠️', label: 'Risk Matrix' },
  { id: 'operations', icon: '📋', label: 'Operations Playbook' },
]

const PAGE_MAP = {
  consolidated: ConsolidatedReport,
  overview: Overview,
  idea: IdeaValidation,
  market: MarketValidation,
  competition: CompetitiveBenchmarking,
  location: FeasibilityLocation,
  licensing: Licensing,
  costs: SetupCosts,
  themes: ThemeOptions,
  audience: AudienceValidation,
  poc: ProofOfConcept,
  roadmap: ExecutionRoadmap,
  risks: RiskMatrix,
  operations: OperationsPlaybook,
}

export default function CafeApp() {
  const [active, setActive] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigate = useCallback((id) => {
    setActive(id)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const idx = CAFE_SECTIONS.findIndex(s => s.id === active)
  const Page = PAGE_MAP[active] || Overview

  return (
    <>
      <div className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`} onClick={() => setSidebarOpen(false)} />
      <Sidebar sections={CAFE_SECTIONS} active={active} onNavigate={navigate} isOpen={sidebarOpen} label="Business Plan" />
      <main className="main-content">
        <Page navigate={navigate} />
        <PageFooter
          onPrev={idx > 0 ? () => navigate(CAFE_SECTIONS[idx - 1].id) : null}
          onNext={idx < CAFE_SECTIONS.length - 1 ? () => navigate(CAFE_SECTIONS[idx + 1].id) : null}
          prevLabel={idx > 0 ? CAFE_SECTIONS[idx - 1].label : ''}
          nextLabel={idx < CAFE_SECTIONS.length - 1 ? CAFE_SECTIONS[idx + 1].label : ''}
        />
      </main>
    </>
  )
}
