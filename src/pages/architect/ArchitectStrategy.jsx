import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'

export default function ArchitectStrategy() {
  return (
    <div>
      <SectionHeader icon="🗺️" title="Strategic Planning" sub="Documents 32-35: Roadmap, risk assessment, scenario planning, brand positioning" />

      <Card title="📅 5-Phase Strategic Roadmap (Doc 32)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Phase</th><th>Period</th><th>Key Outcome</th><th>Budget</th></tr></thead>
            <tbody>
              <tr><td><strong>Phase 0: Foundation</strong></td><td>Month -3 to 0</td><td>Seed funding closed, team assembled</td><td>₹50L-1 Cr</td></tr>
              <tr><td><strong>Phase 1: Build & Launch</strong></td><td>Month 1-6</td><td>PMF signal: 50K users, ₹5L MRR</td><td>₹40-60L/mo</td></tr>
              <tr><td><strong>Phase 2: Grow & Monetize</strong></td><td>Month 7-12</td><td>₹19L+ MRR, 150K users</td><td>₹60-80L/mo</td></tr>
              <tr><td><strong>Phase 3: Series A</strong></td><td>Month 13-18</td><td>₹10 Cr ARR, 300K+ users</td><td>₹1-1.5 Cr/mo</td></tr>
              <tr><td><strong>Phase 4: Scale</strong></td><td>Month 19-24</td><td>Multi-city, approaching profitability</td><td>₹1.5-2.5 Cr/mo</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🚦 Phase 1 Go/No-Go Criteria">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">✅ Go Signals</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Target</th></tr></thead>
                <tbody>
                  <tr><td>Signups</td><td>&gt;50K</td></tr>
                  <tr><td>Free→Paid</td><td>&gt;3%</td></tr>
                  <tr><td>Designs/user</td><td>&gt;3 avg</td></tr>
                  <tr><td>Architects</td><td>&gt;500</td></tr>
                  <tr><td>Consultations</td><td>&gt;50/month</td></tr>
                  <tr><td>30-day retention</td><td>&gt;25%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">❌ No-Go Signals</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Alarm</th></tr></thead>
                <tbody>
                  <tr><td>Signups</td><td>&lt;20K</td></tr>
                  <tr><td>Free→Paid</td><td>&lt;1.5%</td></tr>
                  <tr><td>Designs/user</td><td>&lt;1</td></tr>
                  <tr><td>Architects</td><td>&lt;200</td></tr>
                  <tr><td>Consultations</td><td>&lt;10/month</td></tr>
                  <tr><td>30-day retention</td><td>&lt;15%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      <Card title="⚠️ Risk Assessment (Doc 33)">
        <h3 className="card-subtitle">Top 5 Critical Risks</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { risk: 'AI Design Quality', prob: '40-50%', score: 'critical', mitigation: 'Rule-based templates first, "inspiration only" framing, architect review layer' },
            { risk: 'Marketplace Cold Start', prob: '35-45%', score: 'critical', mitigation: 'Free listing, portfolio import, guarantee 5 free leads, 20 founding architects' },
            { risk: 'Livspace Self-Serve Launch', prob: '30-40%', score: 'high', mitigation: 'Move fast, build data moat, focus on underserved segments' },
            { risk: 'User Acquisition Cost Inflation', prob: '35-50%', score: 'high', mitigation: 'Content-first, referral program, developer partnerships' },
            { risk: 'AI Design Liability', prob: '15-25%', score: 'medium', mitigation: 'Strong disclaimers, block structural suggestions, liability insurance' },
          ].map((r, i) => (
            <div className="risk-item" key={i}>
              <div className={`risk-score ${r.score}`}>{i + 1}</div>
              <div style={{ flex: 1 }}>
                <strong>{r.risk}</strong> <span style={{ color: 'var(--text-light)', fontSize: '.85rem' }}>— Probability: {r.prob}</span>
                <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: 2 }}>{r.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="📊 Scenario Planning (Doc 34)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Scenario</th><th>Year 3 Revenue</th><th>Users</th><th>Valuation</th><th>Probability</th></tr></thead>
            <tbody>
              <tr style={{ background: '#f0faf4' }}><td><strong>🐂 Bull</strong></td><td>₹80-100 Cr</td><td>3M+</td><td>₹700-1,000 Cr</td><td>20%</td></tr>
              <tr><td><strong>📊 Base</strong></td><td>₹57.7 Cr</td><td>2M</td><td>₹350-500 Cr</td><td>50%</td></tr>
              <tr style={{ background: '#fff8f8' }}><td><strong>🐻 Bear</strong></td><td>₹15-25 Cr</td><td>500K</td><td>₹150-250 Cr</td><td>30%</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">Probability-Weighted Expected Value</h3>
        <BarChart data={[
          { label: 'Expected Revenue', width: '70%', text: '₹45-55 Cr (weighted)', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Expected Valuation', width: '65%', text: '₹350-450 Cr (weighted)', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
        ]} />
      </Card>

      <Card title="🎨 Brand Positioning (Doc 35)">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Brand Core</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
              <li><strong>Purpose:</strong> Democratize professional interior design for every Indian home</li>
              <li><strong>Vision:</strong> Platform where every homeowner transforms spaces with confidence</li>
              <li><strong>Mission:</strong> Make interior design accessible, affordable, enjoyable</li>
              <li><strong>Archetype:</strong> The Creator</li>
            </ul>
          </div>
          <div>
            <h3 className="card-subtitle">Positioning</h3>
            <div className="card-highlight" style={{ padding: 16, borderRadius: 10, background: 'var(--green-bg)', border: '1px solid var(--green)' }}>
              <p style={{ fontSize: '.95rem' }}>
                <strong>For:</strong> Indian homeowners (25-45)<br />
                <strong>Unlike:</strong> Livspace (expensive), Pinterest (inspiration only), local contractors (unreliable)<br />
                <strong>We are:</strong> Affordable AI-powered design + verified architect marketplace
              </p>
            </div>
          </div>
        </div>
        <h3 className="card-subtitle">Brand Voice</h3>
        <div className="grid-3">
          <div className="box box-green" style={{ borderRadius: 12, textAlign: 'center' }}>✓ Imaginative</div>
          <div className="box box-green" style={{ borderRadius: 12, textAlign: 'center' }}>✓ Empowering</div>
          <div className="box box-green" style={{ borderRadius: 12, textAlign: 'center' }}>✓ Approachable</div>
          <div className="box" style={{ borderRadius: 12, background: '#fff0f0', textAlign: 'center' }}>✗ NOT Elitist</div>
          <div className="box" style={{ borderRadius: 12, background: '#fff0f0', textAlign: 'center' }}>✗ NOT Technical</div>
          <div className="box" style={{ borderRadius: 12, background: '#fff0f0', textAlign: 'center' }}>✗ NOT Corporate</div>
        </div>
      </Card>
    </div>
  )
}
