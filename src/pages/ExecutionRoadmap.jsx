import { SectionHeader, Card } from '../components/UI'

const phases = [
  { title: 'Phase 0 — Validate', time: 'Month 1–3', desc: 'Google Trends, Instagram page, survey, cloud kitchen, pop-up, excise verification. GO/NO-GO decision.', budget: '₹3.5–6.5L · Risk: LOW' },
  { title: 'Phase 1 — Legal & Entity Setup', time: 'Month 4–5', desc: 'Register LLP, bank account, GST, FSSAI, START LIQUOR LICENSE, trademark, engage lawyer & CA.', budget: '₹5–12L · Risk: MEDIUM' },
  { title: 'Phase 2 — Location Lock', time: 'Month 6–8', desc: 'Short-list properties, site visits, due diligence, negotiate lease, sign + pay deposit.', budget: '₹10–30L · Risk: MEDIUM' },
  { title: 'Phase 3 — Design & Planning', time: 'Month 9–10', desc: 'Hire designer, 3D renders, MEP planning, kitchen layout, menu development.', budget: '₹5–10L · Risk: LOW' },
  { title: 'Phase 4 — Build-Out ⚠️', time: 'Month 11–14', desc: 'Civil work, electrical/plumbing/HVAC, kitchen + bar installation, interior finishing, furniture, tech.', budget: '₹40–90L · Risk: HIGH' },
  { title: 'Phase 5 — Hire & Train', time: 'Month 15–16', desc: 'Hire all staff. 2-week intensive training. Mock service runs.', budget: '₹5–12L · Risk: MEDIUM' },
  { title: 'Phase 6 — Soft Launch', time: 'Month 17–18', desc: 'Friends & family nights, influencer preview, limited hours → full hours, begin delivery.', budget: '₹5–10L · Risk: MEDIUM' },
  { title: 'Phase 7 — Grand Opening 🎉', time: 'Month 19+', desc: 'Grand opening event, PR push, Google Ads, Zomato partnership, weekly P&L reviews.', budget: '₹3–8L' },
]

export default function ExecutionRoadmap() {
  return (
    <div>
      <SectionHeader icon="🗺️" title="Execution Roadmap" sub="From idea to inauguration — 18-24 months" />

      <Card title="📅 Master Timeline">
        <div className="timeline">
          {phases.map((p, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="phase-title">{p.title}</div>
              <div className="phase-time">{p.time}</div>
              <div className="phase-desc">{p.desc}</div>
              <div className="phase-budget">{p.budget}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card warning title="⚠️ Critical Path Items">
        <p style={{fontSize:'.9rem'}}>These determine your launch date. Delay any = entire project delays.</p>
        <ol style={{fontSize:'.9rem',paddingLeft:18,marginTop:8}}>
          <li><strong>Liquor License</strong> — 6-12 months (start Month 4)</li>
          <li><strong>Property Lock</strong> — 2-3 months (Month 6-8)</li>
          <li><strong>Build-Out</strong> — 3-4 months (Month 11-14)</li>
          <li><strong>Head Chef Hire</strong> — 1-2 months (Month 9-10)</li>
        </ol>
      </Card>
    </div>
  )
}
