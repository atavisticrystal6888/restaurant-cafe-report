import { SectionHeader, Card, StatCard } from '../components/UI'

export default function ProofOfConcept() {
  return (
    <div>
      <SectionHeader icon="✅" title="Proof of Concept" sub="Go / No-Go — the final check before committing capital" />

      <Card title="🚦 Go / No-Go Metrics">
        <div className="table-wrap"><table>
          <thead><tr><th>#</th><th>Metric</th><th>🟢 GO Threshold</th><th>🔴 NO-GO Signal</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Instagram Pre-Launch</td><td>2,000+ followers in 30 days</td><td>{'<'}500 followers despite ₹15K spend</td></tr>
            <tr><td>2</td><td>Survey Intent</td><td>70%+ "would visit"</td><td>{'<'}40% positive intent</td></tr>
            <tr><td>3</td><td>Willingness to Pay</td><td>Avg WTP ≥ ₹1,500/head</td><td>WTP {'<'} ₹800/head</td></tr>
            <tr><td>4</td><td>Pop-Up Turnout</td><td>100+ covers in 1-2 days</td><td>{'<'}50 with ₹50K marketing</td></tr>
            <tr><td>5</td><td>Cloud Kitchen</td><td>15+ orders/day, 4.2+ rating</td><td>{'<'}5 orders/day after 30 days</td></tr>
            <tr><td>6</td><td>Location</td><td>Compliant property secured</td><td>No property after 60 days</td></tr>
          </tbody>
        </table></div>
        <div style={{marginTop:14,fontSize:'.9rem',display:'flex',flexWrap:'wrap',gap:12}}>
          <span><strong>6/6 GREEN</strong> → 🟢🟢🟢 Full Commitment</span>
          <span><strong>5/6</strong> → 🟢🟡 Proceed</span>
          <span><strong>4/6</strong> → 🟡🟡 Conditional</span>
          <span><strong>≤3</strong> → 🔴🔴 Do Not Proceed</span>
        </div>
      </Card>

      <Card title="💰 Phase 0 Budget">
        <div className="table-wrap"><table>
          <thead><tr><th>Activity</th><th>Budget</th><th>Month</th></tr></thead>
          <tbody>
            <tr><td>Instagram content + ads</td><td>₹17-20K</td><td>M1</td></tr>
            <tr><td>Survey incentives</td><td>₹8-10K</td><td>M1-M2</td></tr>
            <tr><td>Excise consultant</td><td>₹5-10K</td><td>M1</td></tr>
            <tr><td>Cloud kitchen setup + ops</td><td>₹2-4L</td><td>M2-M3</td></tr>
            <tr><td>Pop-up event (all-in)</td><td>₹1-2L</td><td>M2</td></tr>
            <tr style={{fontWeight:700}}><td>TOTAL Phase 0</td><td>₹3.5L – ₹6.5L</td><td>3 months</td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card highlight>
        <div style={{textAlign:'center',padding:'12px 0'}}>
          <p style={{fontSize:'1.1rem',fontWeight:600,color:'var(--green)'}}>Total investment at risk: {'<'} 5% of total budget</p>
          <p style={{fontSize:'.9rem',color:'var(--text-light)'}}>Validated demand with real data, tested menu + pricing, 2,000+ audience built, and confidence to commit ₹1-2Cr — or decision to pivot.</p>
        </div>
      </Card>
    </div>
  )
}
