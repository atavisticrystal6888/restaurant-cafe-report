import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'

export default function ArchitectMarketSizing() {
  return (
    <div>
      <SectionHeader icon="📐" title="Market Sizing & Opportunity" sub="Documents 26-28: TAM/SAM/SOM deep dive, India city maps, adjacent opportunities" />

      <div className="stats-grid">
        <StatCard value="$16.5–24B" label="Global TAM (Broad)" color="green" />
        <StatCard value="₹7,500 Cr" label="India SAM ($900M)" color="blue" />
        <StatCard value="₹57.7 Cr" label="Year 3 SOM" color="gold" />
        <StatCard value="20+" label="Cities Mapped" color="purple" />
      </div>

      <Card title="📊 TAM → SAM → SOM (Doc 26)">
        <BarChart data={[
          { label: 'TAM (Global)', width: '100%', text: '$16.5-24B', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'SAM (India)', width: '35%', text: '₹7,500 Cr ($900M)', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'SOM Year 1', width: '2%', text: '₹3 Cr', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'SOM Year 3', width: '5%', text: '₹57.7 Cr', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
        ]} />
      </Card>

      <Card title="🏙️ India City Market Maps (Doc 27)">
        <p>20+ cities scored on 5 dimensions for launch priority.</p>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Tier</th><th>Cities</th><th>Strategy</th></tr></thead>
            <tbody>
              <tr><td><span className="badge badge-green">Tier 1 Launch</span></td><td><strong>Bangalore, Mumbai, Delhi-NCR</strong></td><td>Day 1 launch — highest digital adoption, architect density, real estate activity</td></tr>
              <tr><td><span className="badge badge-blue">Tier 2 Expand</span></td><td><strong>Hyderabad, Pune, Chennai</strong></td><td>Month 6-12 expansion — strong tech markets, growing RE</td></tr>
              <tr><td><span className="badge badge-yellow">Tier 3 Growth</span></td><td><strong>Ahmedabad, Kolkata, Jaipur, Kochi</strong></td><td>Month 12-18 — regional demand, less competition</td></tr>
              <tr><td><span className="badge badge-yellow">Tier 4 Scale</span></td><td><strong>Chandigarh, Lucknow, Indore, Coimbatore</strong></td><td>Month 18+ — Tier 2 city opportunities</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">5 Scoring Dimensions</h3>
        <div className="grid-3" style={{ marginTop: 8 }}>
          <div className="box box-green" style={{ borderRadius: 12, textAlign: 'center' }}>📱 Digital Adoption</div>
          <div className="box box-purple" style={{ borderRadius: 12, textAlign: 'center' }}>🏗️ RE Activity</div>
          <div className="box box-yellow" style={{ borderRadius: 12, textAlign: 'center' }}>📐 Architect Density</div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff', textAlign: 'center' }}>💰 Income Levels</div>
          <div className="box box-green" style={{ borderRadius: 12, textAlign: 'center' }}>🏢 Competition Gap</div>
        </div>
      </Card>

      <Card title="🔮 Adjacent Opportunities (Doc 28)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Opportunity</th><th>TAM Potential</th><th>Timeline</th><th>Fit</th></tr></thead>
            <tbody>
              <tr><td><strong>Virtual Staging</strong></td><td>₹500-800 Cr</td><td>Year 1-2</td><td><span className="badge badge-green">High — uses core AI</span></td></tr>
              <tr><td><strong>Affiliate Commerce</strong></td><td>₹2,000+ Cr</td><td>Year 1-2</td><td><span className="badge badge-green">High — natural extension</span></td></tr>
              <tr><td><strong>Commercial Interiors</strong></td><td>₹3,000+ Cr</td><td>Year 2-3</td><td><span className="badge badge-blue">Medium — different UX</span></td></tr>
              <tr><td><strong>Smart Home</strong></td><td>₹1,500+ Cr</td><td>Year 3-4</td><td><span className="badge badge-blue">Medium — IoT integration</span></td></tr>
              <tr><td><strong>International (SEA/ME)</strong></td><td>$2-4B</td><td>Year 3-5</td><td><span className="badge badge-blue">Medium — localization needed</span></td></tr>
              <tr><td><strong>White-label API</strong></td><td>₹500+ Cr</td><td>Year 2-3</td><td><span className="badge badge-green">High — monetize tech</span></td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
