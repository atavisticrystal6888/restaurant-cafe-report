import { SECTIONS } from '../App'

export default function Sidebar({ active, onNavigate, isOpen }) {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-section-label">Business Plan</div>
      {SECTIONS.map((s, i) => (
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
