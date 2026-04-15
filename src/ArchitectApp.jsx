import { useState, useCallback } from 'react'
import Sidebar from './components/Sidebar'
import PageFooter from './components/PageFooter'
import ArchitectOverview from './pages/architect/ArchitectOverview'
import ArchitectBrainstorming from './pages/architect/ArchitectBrainstorming'
import ArchitectValidation from './pages/architect/ArchitectValidation'
import ArchitectFinancials from './pages/architect/ArchitectFinancials'
import ArchitectGTM from './pages/architect/ArchitectGTM'
import ArchitectMoat from './pages/architect/ArchitectMoat'
import ArchitectIndustry from './pages/architect/ArchitectIndustry'
import ArchitectBusinessModel from './pages/architect/ArchitectBusinessModel'
import ArchitectCompetitors from './pages/architect/ArchitectCompetitors'
import ArchitectInvestor from './pages/architect/ArchitectInvestor'
import ArchitectMarketSizing from './pages/architect/ArchitectMarketSizing'
import ArchitectOperationsLegal from './pages/architect/ArchitectOperationsLegal'
import ArchitectStrategy from './pages/architect/ArchitectStrategy'

export const ARCHITECT_SECTIONS = [
  { id: 'overview', icon: '📊', label: 'Overview' },
  { id: 'brainstorming', icon: '💡', label: 'Brainstorming & Features' },
  { id: 'validation', icon: '✅', label: 'Validation' },
  { id: 'financials', icon: '💰', label: 'Financial Projections' },
  { id: 'gtm', icon: '🚀', label: 'Go-to-Market' },
  { id: 'moat', icon: '🏰', label: 'Competitive Moat' },
  { id: 'industry', icon: '🌍', label: 'Industry & Market Research' },
  { id: 'business-model', icon: '📋', label: 'Business Model & Strategy' },
  { id: 'competitors', icon: '⚔️', label: 'Competitive Intelligence' },
  { id: 'investor', icon: '💎', label: 'Financial & Investment' },
  { id: 'market-sizing', icon: '📐', label: 'Market Sizing & Opportunity' },
  { id: 'operations-legal', icon: '⚖️', label: 'Operations & Legal' },
  { id: 'strategy', icon: '🗺️', label: 'Strategic Planning' },
]

const PAGE_MAP = {
  overview: ArchitectOverview,
  brainstorming: ArchitectBrainstorming,
  validation: ArchitectValidation,
  financials: ArchitectFinancials,
  gtm: ArchitectGTM,
  moat: ArchitectMoat,
  industry: ArchitectIndustry,
  'business-model': ArchitectBusinessModel,
  competitors: ArchitectCompetitors,
  investor: ArchitectInvestor,
  'market-sizing': ArchitectMarketSizing,
  'operations-legal': ArchitectOperationsLegal,
  strategy: ArchitectStrategy,
}

export default function ArchitectApp() {
  const [active, setActive] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigate = useCallback((id) => {
    setActive(id)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const idx = ARCHITECT_SECTIONS.findIndex(s => s.id === active)
  const Page = PAGE_MAP[active] || ArchitectOverview

  return (
    <>
      <div className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`} onClick={() => setSidebarOpen(false)} />
      <Sidebar sections={ARCHITECT_SECTIONS} active={active} onNavigate={navigate} isOpen={sidebarOpen} label="Architect App" />
      <main className="main-content">
        <Page navigate={navigate} />
        <PageFooter
          onPrev={idx > 0 ? () => navigate(ARCHITECT_SECTIONS[idx - 1].id) : null}
          onNext={idx < ARCHITECT_SECTIONS.length - 1 ? () => navigate(ARCHITECT_SECTIONS[idx + 1].id) : null}
          prevLabel={idx > 0 ? ARCHITECT_SECTIONS[idx - 1].label : ''}
          nextLabel={idx < ARCHITECT_SECTIONS.length - 1 ? ARCHITECT_SECTIONS[idx + 1].label : ''}
        />
      </main>
    </>
  )
}
