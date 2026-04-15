import { useState, useCallback } from 'react'
import Header from './components/Header'
import LandingPage from './LandingPage'
import CafeApp from './CafeApp'
import ArchitectApp from './ArchitectApp'

export default function App() {
  const [currentProject, setCurrentProject] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const goHome = useCallback(() => {
    setCurrentProject(null)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const selectProject = useCallback((id) => {
    setCurrentProject(id)
    setSidebarOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!currentProject) {
    return (
      <>
        <Header
          project={null}
          onToggleSidebar={() => setSidebarOpen(p => !p)}
          onGoHome={goHome}
        />
        <LandingPage onSelectProject={selectProject} />
      </>
    )
  }

  return (
    <>
      <Header
        project={currentProject}
        onToggleSidebar={() => setSidebarOpen(p => !p)}
        onGoHome={goHome}
      />
      {currentProject === 'cafe-report' && <CafeApp />}
      {currentProject === 'architect-app' && <ArchitectApp />}
    </>
  )
}
