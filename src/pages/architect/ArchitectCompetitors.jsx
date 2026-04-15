import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'

export default function ArchitectCompetitors() {
  return (
    <div>
      <SectionHeader icon="⚔️" title="Competitive Intelligence" sub="Documents 17-20: Livspace & Houzz teardowns, emerging threats, partnership landscape" />

      <Card title="🦄 Livspace Teardown (Doc 17)">
        <div className="stats-grid">
          <StatCard value="$1.2B" label="Valuation" color="green" />
          <StatCard value="₹1,148 Cr" label="FY23 Revenue ($140M)" color="gold" />
          <StatCard value="6" label="Key Vulnerabilities" color="red" />
        </div>
        <h3 className="card-subtitle">6 Key Vulnerabilities</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>#</th><th>Vulnerability</th><th>Our Opportunity</th></tr></thead>
            <tbody>
              <tr><td>1</td><td><strong>High ticket only</strong> (₹5L+ projects)</td><td>Serve ₹50K-5L market (10x larger)</td></tr>
              <tr><td>2</td><td><strong>Heavy operations</strong> (human-intensive)</td><td>AI-first, scalable, low-cost</td></tr>
              <tr><td>3</td><td><strong>No self-serve tools</strong></td><td>Self-serve design + optional professional</td></tr>
              <tr><td>4</td><td><strong>No AI/AR innovation</strong></td><td>Core differentiator: AI + AR</td></tr>
              <tr><td>5</td><td><strong>Metro-only</strong> (top 6 cities)</td><td>Tier 2-3 cities = blue ocean</td></tr>
              <tr><td>6</td><td><strong>Long sales cycle</strong> (weeks to months)</td><td>Instant AI gratification + upgrade path</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🏠 Houzz Teardown (Doc 18)">
        <div className="stats-grid">
          <StatCard value="$4B" label="Peak Valuation" color="blue" />
          <StatCard value="65M" label="Monthly Users" color="green" />
          <StatCard value="4 Phases" label="Model Evolution" color="purple" />
        </div>
        <h3 className="card-subtitle">Why Houzz Won't Enter India</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li>Focused on US/EU markets; India requires localization investment</li>
          <li>Content-to-commerce flywheel doesn't translate directly (different vendor ecosystem)</li>
          <li>No vernacular language support infrastructure</li>
          <li>India's unorganized market requires ground-game they lack</li>
        </ul>
        <h3 className="card-subtitle">Lessons to Adopt</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li><strong>Content first:</strong> Build inspiration library before monetizing</li>
          <li><strong>Photo-driven:</strong> Visual content drives 10x more engagement</li>
          <li><strong>Professional directory:</strong> Verified marketplace creates trust flywheel</li>
        </ul>
      </Card>

      <Card title="🚨 Emerging Threats (Doc 19)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Threat Category</th><th>Players</th><th>Probability</th><th>Response</th></tr></thead>
            <tbody>
              <tr><td><strong>AI-Native Startups</strong></td><td>New entrants with generative AI</td><td><span className="badge badge-yellow">Medium</span></td><td>Speed + India data moat</td></tr>
              <tr><td><strong>Big Tech</strong></td><td>Jio, Tata Digital</td><td><span className="badge badge-yellow">Medium</span></td><td>Vertical depth beats horizontal</td></tr>
              <tr><td><strong>Paint/Home Brands</strong></td><td>Asian Paints, Berger</td><td><span className="badge badge-blue">Low-Med</span></td><td>Partner, don't compete</td></tr>
              <tr><td><strong>Livspace Self-Serve</strong></td><td>Livspace</td><td><span className="badge badge-red">High</span></td><td>Be faster, cheaper, better UX</td></tr>
              <tr><td><strong>Global Expansion</strong></td><td>Houzz, Canva Home</td><td><span className="badge badge-blue">Low</span></td><td>India-first depth advantage</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🤝 Partnership Landscape (Doc 20)">
        <h3 className="card-subtitle">3-Tier Partnership Map</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Tier</th><th>Partner Type</th><th>Revenue Potential</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Tier 1: Strategic</strong></td>
                <td>Real estate developers (DLF, Godrej, Prestige), paint brands (Asian Paints, Berger)</td>
                <td>₹5-15 Cr/year</td>
              </tr>
              <tr>
                <td><strong>Tier 2: Distribution</strong></td>
                <td>Furniture (IKEA, Pepperfry, Urban Ladder), home improvement (HomeCentre)</td>
                <td>₹2-8 Cr/year</td>
              </tr>
              <tr>
                <td><strong>Tier 3: Community</strong></td>
                <td>Architecture colleges, wedding platforms, design influencers</td>
                <td>₹50L-2 Cr/year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📊 Competitive Positioning">
        <BarChart data={[
          { label: 'Price', width: '30%', text: 'Low (vs Livspace)', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'AI Capability', width: '90%', text: 'Highest', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Self-Serve', width: '95%', text: 'Best in class', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Marketplace', width: '70%', text: 'Strong', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
          { label: 'Tier 2-3 Cities', width: '85%', text: 'Blue ocean', color: 'linear-gradient(90deg, #922b21, #ec7063)' },
        ]} />
      </Card>
    </div>
  )
}
