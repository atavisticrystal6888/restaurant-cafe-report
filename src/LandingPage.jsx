import { motion } from 'framer-motion'

const projects = [
  {
    id: 'cafe-report',
    icon: '🏪',
    title: 'Restaurant-cum-Cafe',
    subtitle: 'Business Plan — East Delhi / NCR',
    description: 'Dual-format venue — accessible restaurant + premium themed cafe-bar. Full business plan with feasibility, financials, and execution roadmap.',
    stats: [
      { label: 'Investment', value: '₹79L–2.06Cr' },
      { label: 'Monthly Profit', value: '₹18–35L' },
      { label: 'Breakeven', value: '6–15 months' },
    ],
    tags: ['F&B', 'Restaurant', 'Cafe-Bar', 'East Delhi'],
    color: '#2d6a4f',
    gradient: 'linear-gradient(135deg, #1a7a4e, #52b788)',
  },
  {
    id: 'architect-app',
    icon: '🏠',
    title: 'Architect App',
    subtitle: 'AI-Powered Design Platform',
    description: '"Canva meets Houzz meets AR" — AI spatial measurement, intelligent design generation, and professional architect marketplace. 35-document deep research.',
    stats: [
      { label: 'Market Size', value: '$5.5–6.5B' },
      { label: 'Year 3 Revenue', value: '₹57.7 Cr' },
      { label: 'India SAM', value: '₹7,500 Cr' },
    ],
    tags: ['AI/ML', 'PropTech', 'Marketplace', 'SaaS'],
    color: '#1a5276',
    gradient: 'linear-gradient(135deg, #1a5276, #5dade2)',
  },
]

export default function LandingPage({ onSelectProject }) {
  return (
    <div className="landing-page">
      <motion.div
        className="landing-hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
      >
        <div className="landing-hero-icon">💡</div>
        <h1 className="landing-hero-title">Brainstorm Ideas</h1>
        <p className="landing-hero-sub">Deep-research business plans & market analysis for startup ideas</p>
      </motion.div>

      <div className="landing-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="landing-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .4, delay: i * .15 }}
            whileHover={{ y: -6, boxShadow: '0 16px 48px rgba(0,0,0,.12)' }}
            onClick={() => onSelectProject(p.id)}
          >
            <div className="landing-card-header" style={{ background: p.gradient }}>
              <span className="landing-card-icon">{p.icon}</span>
              <div>
                <h2 className="landing-card-title">{p.title}</h2>
                <p className="landing-card-subtitle">{p.subtitle}</p>
              </div>
            </div>
            <div className="landing-card-body">
              <p className="landing-card-desc">{p.description}</p>
              <div className="landing-card-stats">
                {p.stats.map(s => (
                  <div key={s.label} className="landing-stat">
                    <div className="landing-stat-value" style={{ color: p.color }}>{s.value}</div>
                    <div className="landing-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="landing-card-tags">
                {p.tags.map(t => (
                  <span key={t} className="landing-tag" style={{ borderColor: p.color, color: p.color }}>{t}</span>
                ))}
              </div>
              <button className="landing-card-btn" style={{ background: p.gradient }}>
                View Full Report →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="landing-footer">
        <p>Research & analysis powered by deep market intelligence</p>
      </div>
    </div>
  )
}
