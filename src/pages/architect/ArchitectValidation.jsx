import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'

export default function ArchitectValidation() {
  return (
    <div>
      <SectionHeader icon="✅" title="Validation" sub="Idea, market, feasibility, and audience validation — Score: 7.5/10" />

      <div className="stats-grid">
        <StatCard value="7.5/10" label="Overall Validation Score" color="green" />
        <StatCard value="$5.5–6.5B" label="Market Size by 2028" color="blue" />
        <StatCard value="₹66L–1.04Cr" label="MVP Cost" color="gold" />
        <StatCard value="₹3.5–5 Cr" label="12-Month Lean Runway" color="purple" />
      </div>

      <Card title="💡 Idea Validation">
        <h3 className="card-subtitle">Core Hypothesis</h3>
        <p>Indian homeowners will pay for AI-powered design visualization + architect marketplace on a single platform, and architects will pay to access this client pipeline.</p>
        <h3 className="card-subtitle">Validation Signals</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Signal</th><th>Evidence</th><th>Strength</th></tr></thead>
            <tbody>
              <tr><td><strong>Market Demand</strong></td><td>10M+ homes renovated annually in India; Houzz 65M users globally</td><td><span className="badge badge-green">Strong</span></td></tr>
              <tr><td><strong>Competitor Revenue</strong></td><td>Livspace ₹1,148 Cr FY23; Houzz $400-500M; Planner 5D 85M downloads</td><td><span className="badge badge-green">Strong</span></td></tr>
              <tr><td><strong>Tech Feasibility</strong></td><td>Stable Diffusion + ControlNet, Apple RoomPlan, LiDAR mainstream</td><td><span className="badge badge-green">Strong</span></td></tr>
              <tr><td><strong>Timing</strong></td><td>Post-COVID home investment surge; India digital adoption (10B+ UPI/mo)</td><td><span className="badge badge-green">Strong</span></td></tr>
              <tr><td><strong>Differentiation</strong></td><td>No combined AR + AI + marketplace exists in India</td><td><span className="badge badge-blue">Moderate</span></td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📈 Market Validation">
        <h3 className="card-subtitle">Market Size (TAM → SAM → SOM)</h3>
        <BarChart data={[
          { label: 'Global TAM', width: '100%', text: '$5.5–6.5B', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'India SAM', width: '55%', text: '₹7,500 Cr ($900M)', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Year 3 SOM', width: '8%', text: '₹57.7 Cr', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
        ]} />
        <h3 className="card-subtitle">Competitor Revenue Benchmarks</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Company</th><th>Revenue</th><th>Valuation</th><th>Users</th></tr></thead>
            <tbody>
              <tr><td><strong>Houzz</strong></td><td>$400-500M</td><td>$4B</td><td>65M</td></tr>
              <tr><td><strong>Livspace</strong></td><td>₹1,148 Cr ($140M)</td><td>$1.2B</td><td>N/A</td></tr>
              <tr><td><strong>Planner 5D</strong></td><td>~$15-20M est.</td><td>Private</td><td>85M downloads</td></tr>
              <tr><td><strong>Foyr Neo</strong></td><td>~$5-8M est.</td><td>Private</td><td>B2B focus</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🔧 Technical Feasibility">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Component</th><th>Technology</th><th>Readiness</th><th>Risk</th></tr></thead>
            <tbody>
              <tr><td><strong>AR Room Scanning</strong></td><td>ARCore/ARKit, Apple RoomPlan</td><td><span className="badge badge-green">Ready</span></td><td>Low</td></tr>
              <tr><td><strong>AI Design Generation</strong></td><td>Stable Diffusion + ControlNet</td><td><span className="badge badge-green">Ready</span></td><td>Medium</td></tr>
              <tr><td><strong>Blueprint OCR</strong></td><td>Custom CV pipeline</td><td><span className="badge badge-yellow">Partial</span></td><td>Medium</td></tr>
              <tr><td><strong>3D Rendering</strong></td><td>Three.js / Unreal Pixel Streaming</td><td><span className="badge badge-green">Ready</span></td><td>Low</td></tr>
              <tr><td><strong>Marketplace</strong></td><td>Standard web stack</td><td><span className="badge badge-green">Ready</span></td><td>Low</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💰 Setup & Operations Cost">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">MVP Development</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Item</th><th>Cost</th></tr></thead>
                <tbody>
                  <tr><td>Core Platform</td><td>₹30-50L</td></tr>
                  <tr><td>AI/ML Pipeline</td><td>₹15-25L</td></tr>
                  <tr><td>AR Module</td><td>₹10-15L</td></tr>
                  <tr><td>Design & UX</td><td>₹5-8L</td></tr>
                  <tr><td>Testing & QA</td><td>₹6-8L</td></tr>
                  <tr><td><strong>Total MVP</strong></td><td><strong>₹66L–1.04 Cr</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Monthly Operations</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Item</th><th>Cost/mo</th></tr></thead>
                <tbody>
                  <tr><td>Engineering Team</td><td>₹12-22L</td></tr>
                  <tr><td>Cloud & AI Compute</td><td>₹5-10L</td></tr>
                  <tr><td>Marketing</td><td>₹5-8L</td></tr>
                  <tr><td>Operations</td><td>₹3-5L</td></tr>
                  <tr><td>Miscellaneous</td><td>₹2-4L</td></tr>
                  <tr><td><strong>Total Monthly</strong></td><td><strong>₹27-49L</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
