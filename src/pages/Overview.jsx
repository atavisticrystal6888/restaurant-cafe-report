import { SectionHeader, Card, StatCard } from '../components/UI'
import { motion } from 'framer-motion'

export default function Overview({ navigate }) {
  return (
    <div>
      <SectionHeader icon="📊" title="Executive Overview" sub="Dual-format venue — Accessible restaurant + Premium themed cafe-bar in East Delhi" />

      <div className="stats-grid">
        <StatCard value="₹79L–2.06Cr" label="Total Investment Range" color="green" />
        <StatCard value="₹18–35L/mo" label="Profit at Maturity (Year 2+)" color="gold" />
        <StatCard value="3.5M+" label="Catchment Population" color="blue" />
        <StatCard value="6–15 mo" label="Breakeven Timeline" color="purple" />
      </div>

      <Card title="🎯 The Opportunity">
        <p>East Delhi (3.5M+ population, massive 15-30 demographic) has <strong>ZERO</strong> aesthetically-driven, Instagrammable, themed restaurant-cafes with a full bar. South Delhi has dozens. This concept fills that gap.</p>
        <h3 className="card-subtitle">The Model</h3>
        <p>Ground-floor botanical restaurant (₹1,800–2,000/2pax, families &amp; comfort food) + Rooftop garden cafe-bar (₹2,500–3,500/2pax, dates, friends, cocktails). Shared kitchen, separate vibes.</p>
        <h3 className="card-subtitle">The Numbers</h3>
        <p>₹79L–₹2.06Cr setup → ₹12–30L/month operating cost → Breakeven Month 6–15 → ₹18–35L/month profit at maturity (Year 2+)</p>
      </Card>

      <Card title="📌 Key Facts">
        <div className="table-wrap">
          <table>
            <thead><tr><th style={{width:180}}>Parameter</th><th>Detail</th></tr></thead>
            <tbody>
              <tr><td><strong>Concept</strong></td><td>Dual-format — Restaurant + Premium themed cafe-bar</td></tr>
              <tr><td><strong>Target</strong></td><td>15–30 age group, Middle to Upper-Middle class</td></tr>
              <tr><td><strong>Location</strong></td><td>Laxmi Nagar / Preet Vihar / NCR Corridor</td></tr>
              <tr><td><strong>Avg Spend</strong></td><td>₹1,800–2,000/2pax (Restaurant) · ₹2,500–3,500/2pax (Cafe-Bar)</td></tr>
              <tr><td><strong>Theme</strong></td><td>Botanical Garden + Rooftop Terrace (recommended)</td></tr>
              <tr><td><strong>Breakeven</strong></td><td>Month 6–15</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="⏳ Key Decisions Pending">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Decision</th><th>Options</th><th>Impact</th></tr></thead>
            <tbody>
              <tr><td><strong>Location</strong></td><td>Preet Vihar (safe) vs. Noida corridor (destination)</td><td>Traffic model, rent, license complexity</td></tr>
              <tr><td><strong>Theme</strong></td><td>Botanical+Terrace vs. Neo-Indian</td><td>Buildout cost, brand identity</td></tr>
              <tr><td><strong>Bar timing</strong></td><td>Open with bar Day 1 vs. Add later</td><td>Liquor license must precede opening</td></tr>
              <tr><td><strong>Business structure</strong></td><td>LLP (recommended) vs. Pvt Ltd</td><td>Compliance burden, flexibility</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📂 Report Sections">
        <div className="grid-2">
          <div>
            {[
              { id: 'idea', num: '01', t: 'Idea Validation', d: 'Core concept, gap analysis, differentiation' },
              { id: 'market', num: '02', t: 'Market Validation', d: 'Demand signals, supply gap, market size' },
              { id: 'competition', num: '03', t: 'Competitive Benchmarking', d: 'Competitors, gap matrix' },
              { id: 'location', num: '04', t: 'Feasibility & Location', d: 'Location deep-dive, property checklist' },
              { id: 'licensing', num: '05', t: 'Licensing & Regulatory', d: 'FSSAI, liquor license, all permits' },
              { id: 'costs', num: '06', t: 'Setup & Operations Cost', d: 'Investment, monthly costs, projections' },
            ].map(s => (
              <motion.div key={s.id} whileHover={{ x: 4 }} style={{ padding: '8px 0', borderBottom: '1px solid #eee', cursor: 'pointer' }} onClick={() => navigate(s.id)}>
                <span style={{ color: 'var(--green)', fontWeight: 600 }}>{s.num} — {s.t}</span><br />
                <small style={{ color: 'var(--text-light)' }}>{s.d}</small>
              </motion.div>
            ))}
          </div>
          <div>
            {[
              { id: 'themes', num: '07', t: 'Theme Options', d: '5 themes, design, recommendation' },
              { id: 'audience', num: '08', t: 'Audience Validation', d: 'Segmentation, validation methods' },
              { id: 'poc', num: '09', t: 'Proof of Concept', d: 'Pop-up strategy, cloud kitchen test' },
              { id: 'roadmap', num: '10', t: 'Execution Roadmap', d: 'Phase-wise timeline, milestones' },
              { id: 'risks', num: '11', t: 'Risk Matrix', d: 'Risk assessment, mitigations' },
              { id: 'operations', num: '12', t: 'Operations Playbook', d: 'Menu, bar, staffing, marketing' },
            ].map(s => (
              <motion.div key={s.id} whileHover={{ x: 4 }} style={{ padding: '8px 0', borderBottom: '1px solid #eee', cursor: 'pointer' }} onClick={() => navigate(s.id)}>
                <span style={{ color: 'var(--green)', fontWeight: 600 }}>{s.num} — {s.t}</span><br />
                <small style={{ color: 'var(--text-light)' }}>{s.d}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
