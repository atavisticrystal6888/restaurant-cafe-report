import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'

export default function ArchitectBusinessModel() {
  return (
    <div>
      <SectionHeader icon="📋" title="Business Model & Strategy" sub="Documents 12-16: Business Model Canvas, pricing, revenue models, marketplace economics, platform strategy" />

      <Card title="🎯 Value Propositions">
        <div className="grid-3">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🏡 Homeowners</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>"See your dream home before you build it"</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>📐 Architects</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>"Your clients are looking for you"</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>🏢 Developers</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>"Sell the lifestyle, not just the floor plan"</p>
          </div>
        </div>
      </Card>

      <Card title="💵 5 Revenue Streams">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Stream</th><th>Year 1</th><th>Year 3</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><strong>Consumer Subscriptions</strong></td><td>54%</td><td>35%</td><td>Freemium → Pro → Premium tiers</td></tr>
              <tr><td><strong>Architect Subscriptions</strong></td><td>20%</td><td>10%</td><td>Listing, lead access, tools</td></tr>
              <tr><td><strong>Consultation Commissions</strong></td><td>19%</td><td>25%</td><td>15-20% take-rate on bookings</td></tr>
              <tr><td><strong>Affiliate Commerce</strong></td><td>7%</td><td>20%</td><td>Product recommendations & links</td></tr>
              <tr><td><strong>Enterprise B2B</strong></td><td>0%</td><td>10%</td><td>Developer & corporate packages</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💰 Pricing Tiers (Doc 13)">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Consumer Pricing</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Tier</th><th>Price</th><th>Features</th></tr></thead>
                <tbody>
                  <tr><td><strong>Free</strong></td><td>₹0</td><td>Basic room scan, 1 design/month</td></tr>
                  <tr><td><strong>Plus</strong></td><td>₹299/mo</td><td>Unlimited designs, HD renders</td></tr>
                  <tr><td><strong>Pro</strong></td><td>₹799/mo</td><td>3D walkthroughs, priority support</td></tr>
                  <tr><td><strong>Premium</strong></td><td>₹1,499/mo</td><td>All features + architect consult credits</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Architect Pricing</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Tier</th><th>Price</th><th>Features</th></tr></thead>
                <tbody>
                  <tr><td><strong>Basic</strong></td><td>₹0</td><td>Profile listing, 3 leads/mo</td></tr>
                  <tr><td><strong>Professional</strong></td><td>₹999/mo</td><td>Priority listing, 15 leads/mo</td></tr>
                  <tr><td><strong>Premium</strong></td><td>₹2,499/mo</td><td>Featured placement, unlimited leads</td></tr>
                  <tr><td><strong>Enterprise</strong></td><td>₹4,999/mo</td><td>White-label, team access, analytics</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      <Card title="🔄 Marketplace Economics (Doc 15)">
        <div className="stats-grid">
          <StatCard value="15-20%" label="Take Rate" color="green" />
          <StatCard value="500 × 50K" label="Tipping Point" color="blue" />
          <StatCard value="3:1" label="LTV:CAC Target" color="gold" />
        </div>
        <h3 className="card-subtitle">Cold-Start Strategy</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li><strong>Supply side first:</strong> Onboard 20 founding architects with free premium listing</li>
          <li><strong>Guarantee leads:</strong> Promise 5 free leads in first month</li>
          <li><strong>Portfolio import:</strong> One-click import from Instagram/Behance</li>
          <li><strong>Demand generation:</strong> Content marketing + AI design tool drives organic traffic</li>
        </ul>
      </Card>

      <Card title="📊 Cost Structure">
        <BarChart data={[
          { label: 'Engineering (50-60%)', width: '60%', text: 'Core team + AI/ML', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Marketing (15-20%)', width: '20%', text: 'Acquisition + content', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'AI Compute (8-12%)', width: '12%', text: 'GPU + inference', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Cloud Infra (5-8%)', width: '8%', text: 'AWS/GCP', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
          { label: 'Operations (5-8%)', width: '8%', text: 'Support + admin', color: 'linear-gradient(90deg, #922b21, #ec7063)' },
        ]} />
      </Card>

      <Card title="🌐 Platform Strategy (Doc 16)">
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🔄 Network Effects</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Same-side (more designs = better AI) + Cross-side (consumers ↔ architects)</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>⚠️ Multi-homing Risk</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Mitigated by unique AI + data lock-in + integrated workflow</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>🎯 Winner-Take-All</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>India market likely supports 2-3 players; first-mover + data moat = advantage</p>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>🏛️ Governance</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Quality control, dispute resolution, architect verification standards</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
