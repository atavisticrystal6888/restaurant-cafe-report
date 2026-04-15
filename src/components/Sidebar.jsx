export default function Sidebar({ sections, active, onNavigate, isOpen, label = 'Navigation' }) {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-section-label">{label}</div>
      {sections.map((s, i) => (
        <a
          key={s.id}
          className={`nav-link ${active === s.id ? 'active' : ''}`}
          onClick={() => onNavigate(s.id)}
        >
          <span className="nav-icon">{s.icon}</span>
          <span>{s.label}</span>
          <span className="nav-progress">{String(i).padStart(2, '0')}</span>
        </a>
      ))}
    </nav>
  )
}
