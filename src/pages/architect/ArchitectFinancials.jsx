import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'

export default function ArchitectFinancials() {
  return (
    <div>
      <SectionHeader icon="💰" title="Financial Projections" sub="3-year revenue model, unit economics, and funding strategy" />

      <div className="stats-grid">
        <StatCard value="₹3.06 Cr" label="Year 1 Revenue" color="green" />
        <StatCard value="₹16.4 Cr" label="Year 2 Revenue" color="blue" />
        <StatCard value="₹57.7 Cr" label="Year 3 Revenue" color="gold" />
        <StatCard value="Month 24-30" label="Path to Profitability" color="purple" />
      </div>

      <Card title="📊 Revenue Growth Trajectory">
        <BarChart data={[
          { label: 'Year 1', width: '5%', text: '₹3.06 Cr', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Year 2', width: '28%', text: '₹16.4 Cr', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Year 3', width: '100%', text: '₹57.7 Cr', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
        ]} />
      </Card>

      <Card title="💵 Revenue Mix — Year 1">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Stream</th><th>Amount</th><th>Share</th></tr></thead>
            <tbody>
              <tr><td><strong>Consumer Subscriptions</strong></td><td>₹1.66 Cr</td><td>54%</td></tr>
              <tr><td><strong>Architect Subscriptions</strong></td><td>₹60L</td><td>20%</td></tr>
              <tr><td><strong>Consultation Commissions</strong></td><td>₹59.5L</td><td>19%</td></tr>
              <tr><td><strong>Affiliate Commerce</strong></td><td>₹21L</td><td>7%</td></tr>
              <tr><td><strong>Total</strong></td><td><strong>₹3.06 Cr</strong></td><td>100%</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📈 User Growth & Conversion">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
            <tbody>
              <tr><td><strong>Total Users</strong></td><td>150K</td><td>600K</td><td>2M</td></tr>
              <tr><td><strong>MAU</strong></td><td>90K</td><td>350K</td><td>1.1M</td></tr>
              <tr><td><strong>Free→Paid Conversion</strong></td><td>3-5%</td><td>5-7%</td><td>5-8%</td></tr>
              <tr><td><strong>Monthly Churn (Consumer)</strong></td><td>8-10%</td><td>6-8%</td><td>5-7%</td></tr>
              <tr><td><strong>Monthly Churn (Professional)</strong></td><td>3-5%</td><td>2-4%</td><td>2-3%</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🎯 Unit Economics">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Customer Acquisition Cost</h3>
            <BarChart data={[
              { label: 'Consumer', width: '15%', text: '₹150-300', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
              { label: 'Architect', width: '100%', text: '₹2,000-5,000', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
            ]} />
          </div>
          <div>
            <h3 className="card-subtitle">Lifetime Value</h3>
            <BarChart data={[
              { label: 'Consumer Y1', width: '44%', text: '₹4,800', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
              { label: 'Consumer Y3', width: '100%', text: '₹10,800', color: 'linear-gradient(90deg, #52b788, #95d5b2)' },
              { label: 'Architect Y1', width: '55%', text: '₹6,000', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
            ]} />
          </div>
        </div>
      </Card>

      <Card title="💵 Funding Rounds">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Round</th><th>Amount</th><th>Timeline</th><th>Milestone</th></tr></thead>
            <tbody>
              <tr><td><strong>Bootstrapped / Angel</strong></td><td>₹50L–1 Cr</td><td>Month 0</td><td>MVP built, initial team</td></tr>
              <tr><td><strong>Seed</strong></td><td>₹3-5 Cr</td><td>Month 4-6</td><td>50K users, PMF signals</td></tr>
              <tr><td><strong>Series A</strong></td><td>₹25-40 Cr</td><td>Month 15-18</td><td>₹10 Cr ARR, 300K+ users</td></tr>
              <tr><td><strong>Series B</strong></td><td>₹100-150 Cr</td><td>Month 30-36</td><td>Multi-city, ₹50+ Cr ARR</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📊 Revenue Mix Evolution">
        <BarChart data={[
          { label: 'Subscriptions', width: '74%', text: 'Y1: 74% → Y3: 45%', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Marketplace', width: '46%', text: 'Y1: 19% → Y3: 25%', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Commerce', width: '35%', text: 'Y1: 7% → Y3: 20%', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Enterprise', width: '20%', text: 'Y1: 0% → Y3: 10%', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
        ]} />
      </Card>
    </div>
  )
}
