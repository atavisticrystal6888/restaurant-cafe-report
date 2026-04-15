import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'

export default function ArchitectGTM() {
  return (
    <div>
      <SectionHeader icon="🚀" title="Go-to-Market Strategy" sub="GTM phases, acquisition channels, partnerships, and launch playbook" />

      <div className="stats-grid">
        <StatCard value="₹50-100" label="Instagram/YouTube CAC" color="green" />
        <StatCard value="150K" label="Year 1 Signups Target" color="blue" />
        <StatCard value="60:40" label="Organic:Paid by Month 12" color="gold" />
        <StatCard value="4.5%" label="Free→Paid Conversion (M12)" color="purple" />
      </div>

      <Card title="📋 GTM Phases">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Phase</th><th>Period</th><th>Focus</th><th>Key Targets</th></tr></thead>
            <tbody>
              <tr><td><strong>Pre-Launch</strong></td><td>Month -2 to 0</td><td>Waitlist, content, architect seeding</td><td>10K waitlist, 50 founding architects</td></tr>
              <tr><td><strong>Launch</strong></td><td>Month 1-6</td><td>Early traction, PMF signals</td><td>50K signups, 500 architects, 3.5% conversion</td></tr>
              <tr><td><strong>Growth</strong></td><td>Month 6-18</td><td>Expansion, partnerships</td><td>150K+ users, developer partnerships</td></tr>
              <tr><td><strong>Scale</strong></td><td>Month 18+</td><td>Multi-city, enterprise</td><td>2M users, national presence</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📢 Channel CAC Comparison">
        <BarChart data={[
          { label: 'Instagram/YT', width: '10%', text: '₹50-100', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Referral', width: '20%', text: '₹100-200', color: 'linear-gradient(90deg, #52b788, #95d5b2)' },
          { label: 'Google Ads', width: '40%', text: '₹200-400', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Influencers', width: '80%', text: '₹500-1,000', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
        ]} />
      </Card>

      <Card title="📊 Key GTM Metrics">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Metric</th><th>Month 3</th><th>Month 6</th><th>Month 12</th></tr></thead>
            <tbody>
              <tr><td><strong>Signups</strong></td><td>10K</td><td>50K</td><td>150K</td></tr>
              <tr><td><strong>MAU</strong></td><td>5K</td><td>25K</td><td>90K</td></tr>
              <tr><td><strong>Free→Paid</strong></td><td>2.5%</td><td>3.5%</td><td>4.5%</td></tr>
              <tr><td><strong>Architects Listed</strong></td><td>100</td><td>500</td><td>2,000</td></tr>
              <tr><td><strong>Organic:Paid</strong></td><td>20:80</td><td>40:60</td><td>60:40</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📝 Content Strategy (5 Pillars)">
        <div className="grid-3">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>✨ Design Inspiration</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Before/after galleries, style guides, trending designs</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>🕉️ Vastu Guidance</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Room-by-room Vastu tips (huge Indian demand)</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>💰 Cost & Budget</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Budget breakdowns, material cost guides</p>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>🔧 How-To Guides</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Step-by-step renovation and design tutorials</p>
          </div>
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>👤 Professional Insights</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Architect interviews, expert advice columns</p>
          </div>
        </div>
      </Card>

      <Card title="🤝 Partnership Tiers">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Tier</th><th>Partners</th><th>Value Exchange</th></tr></thead>
            <tbody>
              <tr><td><strong>Tier 1: Strategic</strong></td><td>Real estate developers, paint companies (Asian Paints, Berger)</td><td>Co-marketing, bundled offers, data sharing</td></tr>
              <tr><td><strong>Tier 2: Distribution</strong></td><td>Furniture brands, home improvement retailers</td><td>Affiliate revenue, in-app integration</td></tr>
              <tr><td><strong>Tier 3: Community</strong></td><td>Architecture colleges, design influencers, wedding platforms</td><td>Awareness, student onboarding, referrals</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📅 Launch Week Playbook">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Day</th><th>Action</th></tr></thead>
            <tbody>
              <tr><td><strong>Day -7</strong></td><td>Teaser campaign, influencer seeding, press release prep</td></tr>
              <tr><td><strong>Day 0</strong></td><td>App Store launch, Product Hunt, social media blitz</td></tr>
              <tr><td><strong>Day 1-3</strong></td><td>Founding user onboarding, feedback collection, bug fixes</td></tr>
              <tr><td><strong>Day 4-7</strong></td><td>Press coverage follow-up, early success stories, metrics review</td></tr>
              <tr><td><strong>Week 2-4</strong></td><td>Referral program launch, architect onboarding push, content calendar begins</td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
