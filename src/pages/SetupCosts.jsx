import { SectionHeader, Card, StatCard, BarChart } from '../components/UI'

export default function SetupCosts() {
  return (
    <div>
      <SectionHeader icon="💰" title="Setup & Operations Cost" sub="Every rupee — accounted for" />

      <div className="stats-grid">
        <StatCard value="₹79L–1.13Cr" label="Medium Setup" color="green" />
        <StatCard value="₹1.25–2.06Cr" label="High-End Setup" color="gold" />
        <StatCard value="₹12–30L/mo" label="Monthly Operating Cost" color="blue" />
        <StatCard value="24–36 mo" label="Full ROI Recovery" color="purple" />
      </div>

      <Card title="🏗️ One-Time Investment Breakdown">
        <BarChart data={[
          { label: 'Interiors & Build-out', width: '90%', color: 'var(--green)', text: '₹35-75L / ₹71L-1.24Cr' },
          { label: 'Kitchen Equipment', width: '35%', color: 'var(--green-light)', text: '₹12-25L / ₹18-35L' },
          { label: 'Bar Setup', width: '28%', color: 'var(--gold)', text: '₹8-20L / ₹14-28L' },
          { label: 'Technology', width: '12%', color: 'var(--blue)', text: '₹3-8L / ₹6-12L' },
          { label: 'Licenses & Legal', width: '22%', color: 'var(--orange)', text: '₹8-16L / ₹13-24L' },
          { label: 'Deposit + Pre-open', width: '25%', color: 'var(--purple)', text: '₹7-20L / ₹14-33L' },
          { label: 'Working Capital (3mo)', width: '28%', color: '#555', text: '₹12-20L / ₹18-30L' },
        ]} />
      </Card>

      <Card title="📅 Monthly Operating Cost">
        <div className="table-wrap"><table>
          <thead><tr><th>Category</th><th>Low End</th><th>High End</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>Rent</td><td>₹1.5L</td><td>₹4L</td><td>Negotiate rent-free fit-out</td></tr>
            <tr><td>Staff Salaries</td><td>₹3.5L</td><td>₹7L</td><td>15-25 people</td></tr>
            <tr><td>Food COGS</td><td>₹4L</td><td>₹8L</td><td>Target 28-35%</td></tr>
            <tr><td>Beverage COGS</td><td>₹1.5L</td><td>₹3.5L</td><td>Target 18-25%</td></tr>
            <tr><td>Utilities</td><td>₹60K</td><td>₹1.5L</td><td>Electricity, gas, water</td></tr>
            <tr><td>Marketing</td><td>₹50K</td><td>₹2L</td><td>Social, influencers</td></tr>
            <tr><td>Delivery commissions</td><td>₹50K</td><td>₹2L</td><td>Zomato/Swiggy 18-25%</td></tr>
            <tr><td>Misc + Licenses</td><td>₹90K</td><td>₹2.3L</td><td>Maintenance, breakage</td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="📈 Revenue Trajectory & Break-Even">
        <BarChart data={[
          { label: 'Month 1-3', width: '23%', color: 'var(--red)', text: '₹10-15L (LOSS)' },
          { label: 'Month 4-8', width: '44%', color: 'var(--orange)', text: '₹20-29L (BREAKEVEN)' },
          { label: 'Month 9-15', width: '71%', color: 'var(--green-light)', text: '₹35-47L (PROFIT ₹8-17L)' },
          { label: 'Month 16+', width: '100%', color: 'var(--green)', text: '₹49-66L (PROFIT ₹18-35L)' },
        ]} />
        <div className="dual-box" style={{marginTop:16}}>
          <div style={{fontSize:'.88rem'}}>
            <strong>Key Metrics at Maturity:</strong>
            <ul style={{paddingLeft:18}}>
              <li>Food Cost: 28-35%</li>
              <li>Bar Cost: 18-25% (better margins)</li>
              <li>Bar = 30-40% revenue, 60-70% profit</li>
            </ul>
          </div>
          <div style={{fontSize:'.88rem'}}>
            <strong>Timing:</strong>
            <ul style={{paddingLeft:18}}>
              <li>Break-even: Month 6-15</li>
              <li>Full ROI: 24-36 months</li>
              <li>Weekend: 2-3x covers</li>
              <li>Peak: Oct-Mar (Delhi winter)</li>
            </ul>
          </div>
        </div>
      </Card>

      <Card title="👥 Staffing — 15-25 People">
        <div className="table-wrap"><table>
          <thead><tr><th>Role</th><th>Count</th><th>Salary Range</th></tr></thead>
          <tbody>
            <tr><td>Head Chef</td><td>1</td><td>₹40-80K</td></tr>
            <tr><td>Sous Chef</td><td>1</td><td>₹25-40K</td></tr>
            <tr><td>Line Cooks</td><td>3-5</td><td>₹15-25K each</td></tr>
            <tr><td>Head Bartender</td><td>1</td><td>₹25-50K</td></tr>
            <tr><td>Restaurant Manager</td><td>1</td><td>₹30-50K</td></tr>
            <tr><td>Servers / Stewards</td><td>4-8</td><td>₹12-18K each</td></tr>
            <tr><td>Support Staff</td><td>4-7</td><td>₹10-15K each</td></tr>
          </tbody>
        </table></div>
        <p style={{fontSize:'.85rem',marginTop:8}}>Add 15-20% for PF, ESI, bonus → <strong>₹3.7-8L effective monthly</strong></p>
      </Card>
    </div>
  )
}
