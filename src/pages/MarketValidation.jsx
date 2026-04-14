import { SectionHeader, Card, StatCard, BarChart } from '../components/UI'

export default function MarketValidation() {
  return (
    <div>
      <SectionHeader icon="📈" title="Market Validation" sub="Does the demand actually exist?" />

      <div className="stats-grid">
        <StatCard value="3.5M+" label="East Delhi + Shahdara Population" color="green" />
        <StatCard value="ZERO" label="Themed Aesthetic Cafes in East Delhi" color="red" />
        <StatCard value="45-90 min" label="Current Drive to South Delhi" color="gold" />
      </div>

      <Card title="💲 Price Tolerance (Proven by Existing Venues)">
        <BarChart data={[
          { label: 'London St ₹1,200', width: '30%', color: '#66bb6a', text: '4.1★' },
          { label: 'Aam ₹1,300', width: '32%', color: '#66bb6a', text: '4.2★' },
          { label: 'Indus Flavour ₹1,600', width: '40%', color: '#43a047', text: '4.5★' },
          { label: 'Dyve ₹1,800', width: '45%', color: '#43a047', text: '4.2★' },
          { label: 'La Afffair ₹2,000', width: '50%', color: '#2e7d32', text: '4.1★' },
          { label: 'Salt Cafe ₹2,500', width: '62%', color: '#2e7d32', text: '4.6★' },
          { label: 'Lord of Drinks ₹2,800', width: '70%', color: '#1b5e20', text: '4.4★' },
          { label: 'Zodiac ₹3,400', width: '85%', color: '#1b5e20', text: '4.6★' },
          { label: '3B\'s Country Inn ₹4K', width: '100%', color: 'var(--gold)', text: '4.4★' },
        ]} />
        <p style={{marginTop:12,fontSize:'.9rem'}}><strong>Your target range: ₹1,800 – ₹3,500.</strong> People are ALREADY spending ₹2,500–3,400+ at mediocre-ambience venues.</p>
      </Card>

      <Card title="🚫 Supply-Side Gap">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Category</th><th>South Delhi</th><th>East Delhi</th></tr></thead>
            <tbody>
              <tr><td>Standalone fine-dine cafe w/ bar</td><td>30+ venues</td><td><span className="badge badge-red">0</span></td></tr>
              <tr><td>Themed / Instagrammable venue</td><td>50+ venues</td><td><span className="badge badge-red">0</span></td></tr>
              <tr><td>"Destination cafe"</td><td>Diggin, Perch, Big Chill, Social</td><td><span className="badge badge-red">0</span></td></tr>
              <tr><td>Craft cocktail bar</td><td>20+ venues</td><td><span className="badge badge-red">0</span></td></tr>
              <tr><td>All-day cafe (brunch + coffee + work)</td><td>Third Wave, Blue Tokai, Perch</td><td><span className="badge badge-red">0</span></td></tr>
              <tr><td>Rooftop dining with views</td><td>Raasta, Imperfecto, Dramz</td><td><span className="badge badge-red">0</span></td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💰 Revenue Projection">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Metric</th><th>Conservative</th><th>Moderate</th><th>Optimistic</th></tr></thead>
            <tbody>
              <tr><td>Catchment (15-30 age)</td><td>700K</td><td>1M</td><td>1.7M</td></tr>
              <tr><td>Monthly visit %</td><td>0.3%</td><td>0.5%</td><td>0.7%</td></tr>
              <tr><td>Monthly covers</td><td>2,100</td><td>5,000</td><td>11,900</td></tr>
              <tr><td>Avg spend/head</td><td>₹850</td><td>₹950</td><td>₹1,100</td></tr>
              <tr><td><strong>Monthly revenue</strong></td><td><strong>₹17.8L</strong></td><td><strong>₹47.5L</strong></td><td><strong>₹1.31Cr</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p style={{marginTop:10,fontSize:'.88rem'}}>Even the conservative estimate approaches breakeven. Bar revenue (30-40% of total) carries 60-70% of profit.</p>
      </Card>

      <Card highlight title="✅ Validation Verdict: STRONG">
        <ul style={{fontSize:'.9rem',paddingLeft:18}}>
          <li>✅ Population density: 3.5M+ in catchment</li>
          <li>✅ Youth demographic: Massive 15-30 presence</li>
          <li>✅ Price tolerance: Proven up to ₹3,400/2pax</li>
          <li>✅ Quality demand: 4.0-4.6★ ratings = discerning buyers</li>
          <li>✅ Supply gap: Zero themed/bar cafes</li>
          <li>✅ Outflow: Residents drive 45-90 min to South Delhi</li>
          <li>⚠️ RISK: Must validate via pop-up + cloud kitchen first</li>
        </ul>
      </Card>
    </div>
  )
}
