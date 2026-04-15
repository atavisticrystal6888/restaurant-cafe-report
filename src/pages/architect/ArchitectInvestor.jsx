import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'

export default function ArchitectInvestor() {
  return (
    <div>
      <SectionHeader icon="💎" title="Financial & Investment Analysis" sub="Documents 21-25: Pitch narrative, funding landscape, financial model, valuations, exit strategy" />

      <Card title="🎤 Elevator Pitch">
        <div className="card-highlight" style={{ padding: 20, borderRadius: 12, background: 'var(--green-bg)', border: '2px solid var(--green)', marginBottom: 16 }}>
          <p style={{ fontSize: '1.1rem', fontWeight: 500, fontStyle: 'italic' }}>
            "Canva for home design — AI creates your dream room in 30 seconds, real architects help you build it."
          </p>
        </div>
        <h3 className="card-subtitle">Why Now — 4 Forces Converging</h3>
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🤖 Generative AI</strong><br />
            <small>Stable Diffusion + ControlNet make instant room design possible</small>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>📱 AR Democratized</strong><br />
            <small>Apple RoomPlan & LiDAR on mainstream phones</small>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>🇮🇳 India Digital</strong><br />
            <small>10B+ UPI transactions/month, digital-first generation</small>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>🏠 Post-COVID Home</strong><br />
            <small>WFH revolution drove unprecedented home investment</small>
          </div>
        </div>
      </Card>

      <Card title="📊 Market Opportunity (Slide 5)">
        <div className="stats-grid">
          <StatCard value="$5.5–6.5B" label="Global TAM" color="green" />
          <StatCard value="₹7,500 Cr" label="India SAM ($900M)" color="blue" />
          <StatCard value="406,889" label="Homes Delivered (Top 9 Cities)" color="gold" />
          <StatCard value="<2%" label="Digital Penetration" color="red" />
        </div>
      </Card>

      <Card title="💵 Funding Landscape (Doc 22)">
        <h3 className="card-subtitle">India Seed Investor Mapping (20+ Funds)</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Category</th><th>Notable Funds</th><th>Typical Check Size</th></tr></thead>
            <tbody>
              <tr><td><strong>Consumer Tech</strong></td><td>Sequoia Surge, Accel, Matrix Partners</td><td>₹2-10 Cr</td></tr>
              <tr><td><strong>PropTech Focus</strong></td><td>Fireside Ventures, India Quotient</td><td>₹1-5 Cr</td></tr>
              <tr><td><strong>AI/Deep Tech</strong></td><td>pi Ventures, Exfinity Ventures</td><td>₹2-8 Cr</td></tr>
              <tr><td><strong>Angel Networks</strong></td><td>Indian Angel Network, Mumbai Angels</td><td>₹25L-2 Cr</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">Typical Seed Terms</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li>Pre-money valuation: ₹10-25 Cr (for pre-revenue AI startups)</li>
          <li>Dilution: 15-25% at seed</li>
          <li>Board seat: Usually 1 investor seat at seed</li>
          <li>Anti-dilution: Weighted-average standard</li>
        </ul>
      </Card>

      <Card title="📈 Comparable Valuations (Doc 24)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Company</th><th>Valuation</th><th>Multiple</th><th>Stage</th></tr></thead>
            <tbody>
              <tr><td><strong>Livspace</strong></td><td>$1.2B</td><td>~8.5x revenue</td><td>Series F</td></tr>
              <tr><td><strong>Houzz</strong></td><td>$4.0B</td><td>~8-10x revenue</td><td>Series E</td></tr>
              <tr><td><strong>Canva</strong></td><td>$26B</td><td>~15x revenue</td><td>Late stage</td></tr>
              <tr><td><strong>PropTech median</strong></td><td>—</td><td>6-12x revenue</td><td>Various</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">Our Valuation Scenarios</h3>
        <BarChart data={[
          { label: 'Bear (Y3)', width: '30%', text: '₹150-250 Cr', color: 'linear-gradient(90deg, #922b21, #ec7063)' },
          { label: 'Base (Y3)', width: '60%', text: '₹350-500 Cr', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Bull (Y3)', width: '100%', text: '₹700-1,000 Cr', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
        ]} />
      </Card>

      <Card title="🚪 Exit Strategy (Doc 25)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Exit Path</th><th>Timeline</th><th>Potential Acquirers</th></tr></thead>
            <tbody>
              <tr><td><strong>Tier 1: Strategic Acquisition</strong></td><td>Year 3-5</td><td>Livspace, Houzz, Asian Paints Digital, Info Edge</td></tr>
              <tr><td><strong>Tier 2: Tech Acquisition</strong></td><td>Year 3-5</td><td>Google (Nest), Amazon (home), Jio Platforms</td></tr>
              <tr><td><strong>Tier 3: Acqui-hire Floor</strong></td><td>Year 2-3</td><td>Any PropTech/AI company (team value)</td></tr>
              <tr><td><strong>IPO Path</strong></td><td>Year 7-10</td><td>₹500+ Cr revenue threshold</td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
