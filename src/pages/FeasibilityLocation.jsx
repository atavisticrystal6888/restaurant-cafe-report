import { SectionHeader, Card, Tabs } from '../components/UI'

export default function FeasibilityLocation() {
  return (
    <div>
      <SectionHeader icon="📍" title="Feasibility & Location" sub="Where to build — the most critical decision" />

      <Card title="📍 Location Options">
        <Tabs tabs={['Laxmi Nagar', 'Preet Vihar ⭐', 'NCR Corridor']}>
          <div>
            <p style={{marginBottom:12}}><strong>Priority 1 per brief — ⚠️ Great for volume, bad for aesthetic cafe</strong></p>
            <div className="dual-box">
              <div>
                <h3 className="card-subtitle" style={{color:'var(--green)',marginTop:0}}>✅ Strengths</h3>
                <ul style={{fontSize:'.88rem',paddingLeft:18}}>
                  <li>Highest foot traffic in all of East Delhi</li>
                  <li>Massive student population — Delhi's #1 coaching hub</li>
                  <li>Metro access (Blue Line)</li>
                  <li>Brand awareness spreads instantly</li>
                </ul>
              </div>
              <div>
                <h3 className="card-subtitle" style={{color:'var(--red)',marginTop:0}}>❌ Weaknesses</h3>
                <ul style={{fontSize:'.88rem',paddingLeft:18}}>
                  <li>Extremely congested</li>
                  <li>No views, no green, dense urban</li>
                  <li>Near-impossible parking</li>
                  <li>High rent: ₹200-350/sqft</li>
                  <li>Very noisy</li>
                </ul>
              </div>
            </div>
            <p style={{marginTop:10,fontSize:'.88rem'}}><strong>Rent:</strong> ₹2-5L/month for 1,500-2,500 sqft</p>
          </div>

          <div>
            <p style={{marginBottom:12}}><span className="badge badge-green">RECOMMENDED</span> <strong> Best compromise — accessible, proven demand</strong></p>
            <div className="dual-box">
              <div>
                <h3 className="card-subtitle" style={{color:'var(--green)',marginTop:0}}>✅ Strengths</h3>
                <ul style={{fontSize:'.88rem',paddingLeft:18}}>
                  <li>Vikas Marg = wide 6-lane road</li>
                  <li>Lord of Drinks, Salt Cafe proving premium demand</li>
                  <li>Two metro stations</li>
                  <li>Better parking</li>
                  <li>Calmer, more "pleasant" vibe</li>
                  <li>V3S Mall proximity</li>
                </ul>
              </div>
              <div>
                <h3 className="card-subtitle" style={{color:'var(--orange)',marginTop:0}}>⚠️ Considerations</h3>
                <ul style={{fontSize:'.88rem',paddingLeft:18}}>
                  <li>Limited views (rooftop solves it)</li>
                  <li>Less student density</li>
                  <li>₹150-300/sqft rent</li>
                  <li>Competitors within 1-2 km</li>
                </ul>
              </div>
            </div>
            <p style={{marginTop:10,fontSize:'.88rem'}}><strong>Rent:</strong> ₹1.5-4L/month for 1,500-2,500 sqft</p>
          </div>

          <div>
            <p style={{marginBottom:12}}><strong>Best for "destination cafe-bar" — higher risk, higher reward</strong></p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Sub-option</th><th>Pros</th><th>Cons</th><th>Rent/sqft</th></tr></thead>
                <tbody>
                  <tr><td>Noida Sector 18</td><td>Great footfall</td><td>Saturated, high rent</td><td>₹150-300</td></tr>
                  <tr><td>Noida Sec 62-104</td><td>IT corridor, young pros</td><td>Still developing</td><td>₹60-120</td></tr>
                  <tr><td>Indirapuram</td><td>Growing residential</td><td>Far from core</td><td>₹80-150</td></tr>
                  <tr><td>Greater Noida</td><td>Very low rent</td><td>Needs destination pull</td><td>₹40-80</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{marginTop:10,fontSize:'.88rem'}}>🟢 UP Excise generally smoother than Delhi · 🟢 50-70% cheaper rent</p>
          </div>
        </Tabs>
      </Card>

      <Card title="✅ Property Checklist (Non-Negotiables)">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Space Requirements</h3>
            <div className="checklist">
              <label><input type="checkbox" /> Min 1,500 sqft (2,000-3,000 preferred)</label>
              <label><input type="checkbox" /> 2 floors minimum (ground + terrace)</label>
              <label><input type="checkbox" /> Kitchen: min 300-500 sqft with exhaust</label>
              <label><input type="checkbox" /> Bar area: min 150-250 sqft</label>
              <label><input type="checkbox" /> 2+ Restrooms (M/F)</label>
              <label><input type="checkbox" /> Storage: 100-200 sqft</label>
            </div>
            <h3 className="card-subtitle">Infrastructure</h3>
            <div className="checklist">
              <label><input type="checkbox" /> 3-phase power, min 50 kVA</label>
              <label><input type="checkbox" /> Water supply & sewage</label>
              <label><input type="checkbox" /> Kitchen exhaust ducting path</label>
              <label><input type="checkbox" /> Gas pipeline / LPG storage</label>
              <label><input type="checkbox" /> Internet fiber</label>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Legal & Compliance</h3>
            <div className="checklist">
              <label><input type="checkbox" /> Clear title — no disputes</label>
              <label><input type="checkbox" /> Commercial zone per MCD master plan</label>
              <label><input type="checkbox" /> Not within 100m of school/hospital/religious place</label>
              <label><input type="checkbox" /> Road width {'>'} 30 feet</label>
              <label><input type="checkbox" /> Building & occupancy certificate</label>
            </div>
            <h3 className="card-subtitle">Convenience</h3>
            <div className="checklist">
              <label><input type="checkbox" /> 10-15 car parking spaces</label>
              <label><input type="checkbox" /> Frontage visibility from main road</label>
              <label><input type="checkbox" /> Metro station within 1 km</label>
              <label><input type="checkbox" /> Delivery access for supplies</label>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
