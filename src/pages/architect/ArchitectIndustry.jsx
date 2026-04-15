import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'

export default function ArchitectIndustry() {
  return (
    <div>
      <SectionHeader icon="🌍" title="Industry & Market Research" sub="Documents 06-11: Industry landscape, real estate market, audience, competitors, consumer trends" />

      <div className="stats-grid">
        <StatCard value="$3.8–4.2B" label="Global Market 2023" color="green" />
        <StatCard value="$7–8.5B" label="Global Market 2030" color="blue" />
        <StatCard value="$1 Trillion" label="India RE by 2030" color="gold" />
        <StatCard value="25-35%" label="AI Design CAGR" color="purple" />
      </div>

      <Card title="📊 Global Interior Design Software Market">
        <BarChart data={[
          { label: 'Pro CAD/BIM (45%)', width: '45%', text: '5-7% growth', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Consumer Tools (25%)', width: '25%', text: '12-15% growth', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'AI-Powered (8%)', width: '15%', text: '25-35% growth ⚡', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Virtual Staging (7%)', width: '12%', text: '20-25% growth', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
          { label: 'AR/VR (5%)', width: '10%', text: '15-20% growth', color: 'linear-gradient(90deg, #922b21, #ec7063)' },
        ]} />
        <h3 className="card-subtitle">Geographic Distribution</h3>
        <BarChart data={[
          { label: 'North America', width: '35%', text: '35%', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Europe', width: '28%', text: '28%', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Asia-Pacific', width: '25%', text: '25% (fastest)', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Rest of World', width: '12%', text: '12%', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
        ]} />
      </Card>

      <Card title="🏠 India Real Estate Market">
        <p>India real estate is on a trajectory from <strong>$200B → $1 Trillion by 2030</strong>.</p>
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Key Indicators</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
              <li>Top 9 cities: 406,889 homes delivered (+33% YoY)</li>
              <li>Luxury homes (₹1Cr+): 62% market share</li>
              <li>Smart City Mission: 100 cities, $30B investment</li>
              <li>Post-COVID: Massive home improvement surge</li>
            </ul>
          </div>
          <div>
            <h3 className="card-subtitle">Margin Analysis</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Model</th><th>Gross Margin</th></tr></thead>
                <tbody>
                  <tr><td>Design Tools SaaS</td><td>70-85%</td></tr>
                  <tr><td>Professional Marketplace</td><td>60-75%</td></tr>
                  <tr><td>Product Commerce</td><td>25-40%</td></tr>
                  <tr><td>Managed Interior Services</td><td>15-25%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      <Card title="🎯 Target Audience Segments (Doc 08)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Segment</th><th>Size</th><th>Priority</th><th>WTP</th></tr></thead>
            <tbody>
              <tr><td><strong>First-home Buyers</strong></td><td>Large</td><td><span className="badge badge-green">P1</span></td><td>High</td></tr>
              <tr><td><strong>Newly Married Couples</strong></td><td>Large</td><td><span className="badge badge-green">P1</span></td><td>High</td></tr>
              <tr><td><strong>Renovators (5+ yr homes)</strong></td><td>Very Large</td><td><span className="badge badge-blue">P2</span></td><td>Medium</td></tr>
              <tr><td><strong>Professional Architects</strong></td><td>125K in India</td><td><span className="badge badge-green">P1</span></td><td>High</td></tr>
              <tr><td><strong>Real Estate Developers</strong></td><td>Medium</td><td><span className="badge badge-blue">P2</span></td><td>Very High</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🏆 Competitor Landscape (Doc 09)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Competitor</th><th>Revenue</th><th>Strength</th><th>Weakness</th></tr></thead>
            <tbody>
              <tr><td><strong>Houzz</strong></td><td>$400-500M</td><td>65M users, strong content</td><td>Not in India, no AI design</td></tr>
              <tr><td><strong>Livspace</strong></td><td>₹1,148 Cr</td><td>$1.2B unicorn, India leader</td><td>Expensive, full-service only</td></tr>
              <tr><td><strong>Planner 5D</strong></td><td>~$15-20M</td><td>85M downloads</td><td>No marketplace, basic AI</td></tr>
              <tr><td><strong>Foyr Neo</strong></td><td>~$5-8M</td><td>B2B 3D rendering</td><td>Not consumer-facing</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📈 Consumer Behavior Trends (Doc 11)">
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🕉️ Vastu Demand</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>60-80% of Indian homebuyers consider Vastu — massive untapped digital opportunity</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>📱 DIY vs Professional</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Growing DIY-first approach, especially among millennials. Professionals sought for execution</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>📅 Seasonal Patterns</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Peak: Oct-Mar (post-monsoon, festive/wedding season). Low: Jun-Aug (monsoon)</p>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>💰 Willingness to Pay</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>₹500-2000/month for premium tools; ₹5,000-50,000 for professional consultations</p>
          </div>
        </div>
      </Card>

      <Card title="🌐 Global Comparables (Doc 10)">
        <p>Key lessons from global platforms:</p>
        <div className="grid-3">
          <div className="box box-green" style={{ borderRadius: 12 }}><strong>Canva</strong><br /><small>Freemium → Premium flywheel</small></div>
          <div className="box box-purple" style={{ borderRadius: 12 }}><strong>Pinterest</strong><br /><small>Inspiration → Commerce path</small></div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}><strong>Zillow</strong><br /><small>Marketplace dominance</small></div>
        </div>
        <h3 className="card-subtitle" style={{ marginTop: 16 }}>Failure Lessons</h3>
        <p><strong>Modsy</strong> (shut down — burned cash on concierge), <strong>Spacejoy</strong> (pivoted — couldn't scale human designers), <strong>Laurel & Wolf</strong> (closed — marketplace quality issues). Key lesson: <em>AI-first, not human-first.</em></p>
      </Card>
    </div>
  )
}
