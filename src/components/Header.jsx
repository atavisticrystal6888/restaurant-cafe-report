const PROJECT_INFO = {
  'cafe-report': { icon: '🏪', title: 'Restaurant-cum-Cafe', tagline: 'Business Plan — East Delhi / NCR' },
  'architect-app': { icon: '🏠', title: 'Architect App', tagline: 'AI-Powered Design Platform' },
}

export default function Header({ project, onToggleSidebar, onGoHome }) {
  const info = project ? PROJECT_INFO[project] : null

  return (
    <header className="header">
      {project && (
        <button className="hamburger" onClick={onToggleSidebar} aria-label="Menu">
          <span /><span /><span />
        </button>
      )}
      <div className="header-logo" style={{ cursor: 'pointer' }} onClick={onGoHome}>
        {info ? (
          <>
            {info.icon} <span>{info.title}</span>
          </>
        ) : (
          <>
            💡 <span>Brainstorm Ideas</span>
          </>
        )}
      </div>
      {info && <div className="header-tagline">{info.tagline}</div>}
      {project && (
        <div className="header-right">
          <button className="header-home-btn" onClick={onGoHome} title="Back to Home">
            ← Home
          </button>
        </div>
      )}
    </header>
  )
}
