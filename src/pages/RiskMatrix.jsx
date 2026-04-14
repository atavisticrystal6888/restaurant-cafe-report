import { SectionHeader, Card, Accordion } from '../components/UI'

const risks = [
  { id: 'R1', title: 'Liquor License Delay/Rejection', impact: 5, prob: 4, score: 20, level: 'critical', desc: 'Without liquor, 60-70% of profit margin disappears' },
  { id: 'R2', title: 'Construction Cost Overrun (20-40%)', impact: 4, prob: 4, score: 16, level: 'high', desc: '80% of restaurant build-outs exceed budget' },
  { id: 'R3', title: 'Wrong Location Selection', impact: 5, prob: 3, score: 15, level: 'high', desc: 'The ONE decision you can\'t change' },
  { id: 'R4', title: 'Key Staff Attrition', impact: 4, prob: 3, score: 12, level: 'medium', desc: 'Chef or manager leaves = quality drops' },
  { id: 'R5', title: 'Low Footfall in First 6 Months', impact: 4, prob: 3, score: 12, level: 'medium', desc: '₹2-5L/month losses possible' },
  { id: 'R6', title: 'Cash Flow Crunch (M3-M8)', impact: 4, prob: 3, score: 12, level: 'medium', desc: 'Low revenue + fixed costs' },
  { id: 'R7', title: 'Regulatory Harassment', impact: 3, prob: 4, score: 12, level: 'medium', desc: 'Missing paperwork or inspector visits' },
  { id: 'R8', title: 'Negative Online Reviews Early', impact: 3, prob: 3, score: 9, level: 'medium', desc: 'Sub-4.0 Zomato = dramatic footfall drop' },
  { id: 'R9', title: 'Partner/Investor Disputes', impact: 4, prob: 2, score: 8, level: 'low', desc: 'Written agreement with exit clauses' },
  { id: 'R10', title: 'Economic Downturn / Pandemic', impact: 5, prob: 1, score: 5, level: 'low', desc: 'Pivot to cloud kitchen if needed' },
]

export default function RiskMatrix() {
  return (
    <div>
      <SectionHeader icon="⚠️" title="Risk Matrix" sub="Every threat mapped, measured, and mitigated" />

      <Card title="🔥 Risk Register">
        {risks.map(r => (
          <div className="risk-item" key={r.id}>
            <div className={`risk-score ${r.level}`}>{r.score}</div>
            <div>
              <strong>{r.id} — {r.title}</strong><br/>
              <span style={{fontSize:'.85rem',color:'var(--text-light)'}}>Impact: {r.impact} · Probability: {r.prob} · {r.desc}</span>
            </div>
          </div>
        ))}
      </Card>

      <Card title="🛡️ Key Mitigations">
        <Accordion title="R1 — Liquor License: 4 mitigations + fallback" defaultOpen>
          <ul style={{fontSize:'.88rem',paddingLeft:18}}>
            <li>Verify zone + proximity compliance BEFORE signing lease</li>
            <li>Engage consultant with proven track record</li>
            <li>File application as early as Phase 1 (Month 4)</li>
            <li>Consider NCR (UP) where process is faster</li>
            <li><strong>Fallback:</strong> Launch as cafe-restaurant first; serve mocktails</li>
          </ul>
        </Accordion>
        <Accordion title="R2 — Cost Overrun: Budget controls">
          <ul style={{fontSize:'.88rem',paddingLeft:18}}>
            <li>Get 3 contractor quotes; choose value, not cheapest</li>
            <li>Fixed-price contracts with penalty clauses</li>
            <li>15-20% contingency buffer</li>
            <li>Freeze design after 3D approvals — NO changes during build</li>
            <li>Daily site visits during build-out</li>
          </ul>
        </Accordion>
        <Accordion title="R3 — Location: 6-step verification">
          <ul style={{fontSize:'.88rem',paddingLeft:18}}>
            <li>60 days minimum on property search</li>
            <li>Count footfall + traffic at each site (Fri-Sun)</li>
            <li>Google Maps: parking, transit, competitors</li>
            <li>Talk to neighboring shopkeepers</li>
            <li>Verify ALL compliance before signing</li>
            <li>Negotiate 6-month exit clause</li>
          </ul>
        </Accordion>
        <Accordion title="R4-R8 — Operational risks">
          <ul style={{fontSize:'.88rem',paddingLeft:18}}>
            <li><strong>Staff:</strong> Competitive pay + documented SOPs + cross-training</li>
            <li><strong>Footfall:</strong> Pre-launch audience building + aggressive launch marketing</li>
            <li><strong>Cash flow:</strong> 3-month reserve + supplier credit + overdraft facility</li>
            <li><strong>Regulatory:</strong> 100% paperwork before opening + compliance consultant</li>
            <li><strong>Reviews:</strong> 2-week soft launch + respond to every review in 24hrs</li>
          </ul>
        </Accordion>
      </Card>
    </div>
  )
}
