import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Tabs({ tabs, children }) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div className="tabs">
        {tabs.map((t, i) => (
          <button key={i} className={`tab-btn ${active === i ? 'active' : ''}`} onClick={() => setActive(i)}>{t}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .2 }}>
          {Array.isArray(children) ? children[active] : children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="accordion-item">
      <button className="accordion-btn" onClick={() => setOpen(o => !o)}>
        {title}
        <span className={`accordion-arrow ${open ? 'open' : ''}`}>▼</span>
      </button>
      <div className="accordion-content" style={{ maxHeight: open ? 1200 : 0, opacity: open ? 1 : 0 }}>
        <div className="accordion-inner">{children}</div>
      </div>
    </div>
  )
}

export function StatCard({ value, label, color = 'green' }) {
  return (
    <motion.div className={`stat-card ${color}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .4 }}>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </motion.div>
  )
}

export function BarChart({ data }) {
  return (
    <div>
      {data.map((d, i) => (
        <div className="bar-row" key={i}>
          <div className="bar-label">{d.label}</div>
          <div className="bar-track">
            <motion.div
              className="bar-fill"
              style={{ background: d.color || 'var(--green)' }}
              initial={{ width: 0 }}
              animate={{ width: d.width }}
              transition={{ duration: .7, delay: i * .06 }}
            >
              {d.text}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ScoreDots({ label, filled, total = 5, suffix }) {
  return (
    <div className="score-row">
      <span style={{ width: 70 }}>{label}</span>
      <div className="score-dots">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={`dot ${i < filled ? 'filled' : ''}`} />
        ))}
      </div>
      {suffix && <span>{suffix}</span>}
    </div>
  )
}

export function SectionHeader({ icon, title, sub }) {
  return (
    <>
      <motion.div className="section-header" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .3 }}>
        <span className="section-icon">{icon}</span>
        <h1 className="section-title">{title}</h1>
      </motion.div>
      {sub && <p className="section-sub">{sub}</p>}
    </>
  )
}

export function Card({ title, children, className = '', highlight, warning }) {
  const cls = `card ${highlight ? 'card-highlight' : ''} ${warning ? 'card-warning' : ''} ${className}`
  return (
    <motion.div className={cls} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>
      {title && <h2 className="card-title">{title}</h2>}
      {children}
    </motion.div>
  )
}
