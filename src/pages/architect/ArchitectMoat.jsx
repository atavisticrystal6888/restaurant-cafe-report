import { SectionHeader, Card, ScoreDots, BarChart } from '../../components/UI'

export default function ArchitectMoat() {
  return (
    <div>
      <SectionHeader icon="🏰" title="Competitive Moat" sub="7-dimension moat analysis, threat assessment, and defensibility timeline" />

      <Card title="🛡️ Moat Framework — 7 Dimensions">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Dimension</th><th>Rating</th><th>Strength</th><th>Timeline</th></tr></thead>
            <tbody>
              <tr><td><strong>Data Network Effects</strong></td><td>★★★★★</td><td><span className="badge badge-green">Strongest</span></td><td>Month 6+</td></tr>
              <tr><td><strong>Two-Sided Marketplace</strong></td><td>★★★★☆</td><td><span className="badge badge-green">Strong</span></td><td>Month 12+</td></tr>
              <tr><td><strong>AI Model Superiority</strong></td><td>★★★★☆</td><td><span className="badge badge-green">Strong</span></td><td>Month 6+</td></tr>
              <tr><td><strong>Switching Costs</strong></td><td>★★★☆☆</td><td><span className="badge badge-blue">Moderate</span></td><td>Month 12+</td></tr>
              <tr><td><strong>Brand & Trust</strong></td><td>★★★☆☆</td><td><span className="badge badge-blue">Moderate</span></td><td>Month 18+</td></tr>
              <tr><td><strong>Integration Lock-in</strong></td><td>★★☆☆☆</td><td><span className="badge badge-yellow">Future</span></td><td>Month 24+</td></tr>
              <tr><td><strong>Regulatory/Compliance</strong></td><td>★★☆☆☆</td><td><span className="badge badge-yellow">Future</span></td><td>Month 18+</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📊 Moat 1: Data Network Effects (★★★★★)">
        <p><strong>Strongest moat — compound advantage over time.</strong></p>
        <h3 className="card-subtitle">Data Assets That Compound</h3>
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🏠 Room Database</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Every scan/upload adds to India-specific room dimension data (no competitor has this)</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>🎨 Design Preferences</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Style choices, budget preferences, regional tastes — AI gets better with each user</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>⭐ Architect Ratings</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Verified reviews create trust signals that are hard to replicate</p>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>💰 Pricing Intelligence</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Material costs, contractor rates, city-level pricing data</p>
          </div>
        </div>
      </Card>

      <Card title="🤝 Moat 2: Two-Sided Marketplace (★★★★☆)">
        <p><strong>Tipping point:</strong> ~500 architects × 50K consumers = self-sustaining marketplace</p>
        <h3 className="card-subtitle">Network Effect Dynamics</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li>More consumers → More architects want to list → Better selection → More consumers</li>
          <li>Reviews & ratings create trust that new entrants can't replicate</li>
          <li>Cold-start strategy: free listings, portfolio import, guaranteed 5 free leads</li>
          <li><strong>Defensibility:</strong> Once tipped, new entrants face chicken-and-egg problem</li>
        </ul>
      </Card>

      <Card title="🤖 Moat 3: AI Model Superiority (★★★★☆)">
        <h3 className="card-subtitle">India-Specific Training Advantages</h3>
        <div className="grid-2">
          <div>
            <ScoreDots label="Vastu AI" filled={5} suffix="India-specific" />
            <ScoreDots label="Budget AI" filled={4} suffix="₹-aware pricing" />
            <ScoreDots label="Style AI" filled={4} suffix="Regional tastes" />
            <ScoreDots label="Room AI" filled={4} suffix="Indian layouts" />
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
              <li><strong>Vastu intelligence</strong> — huge demand, no competitor does this well</li>
              <li><strong>Budget-aware design</strong> — ₹5L vs ₹50L produces different outputs</li>
              <li><strong>Regional adaptation</strong> — Kerala ≠ Punjab home styles</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="📊 Moat Strength Over Time">
        <BarChart data={[
          { label: 'Month 6', width: '25%', text: 'Data + AI moats forming', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Month 12', width: '50%', text: '+ Marketplace tipping', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Month 18', width: '70%', text: '+ Brand & switching costs', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Month 24', width: '90%', text: '+ Integration & ecosystem', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
        ]} />
      </Card>

      <Card title="⚔️ Threat Assessment" warning>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Threat</th><th>Severity</th><th>Response</th></tr></thead>
            <tbody>
              <tr><td><strong>Livspace launches self-serve</strong></td><td><span className="badge badge-red">High</span></td><td>Move fast, build data moat, focus on underserved segments</td></tr>
              <tr><td><strong>Big tech enters (Jio/Tata)</strong></td><td><span className="badge badge-yellow">Medium</span></td><td>Vertical depth beats horizontal breadth</td></tr>
              <tr><td><strong>AI-native competitor</strong></td><td><span className="badge badge-yellow">Medium</span></td><td>India-specific data + marketplace creates dual moat</td></tr>
              <tr><td><strong>Asian Paints expands digital</strong></td><td><span className="badge badge-yellow">Medium</span></td><td>Partnership opportunity &gt; competitor threat</td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
