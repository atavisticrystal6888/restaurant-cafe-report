import { SectionHeader, Card, Tabs } from '../components/UI'

export default function OperationsPlaybook() {
  return (
    <div>
      <SectionHeader icon="📋" title="Operations Playbook" sub="Run the restaurant like a machine — but feel like a home" />

      <Card title="🍽️ Menu Engineering Matrix">
        <div className="table-wrap"><table>
          <thead><tr><th>Category</th><th>Revenue %</th><th>Margin</th><th>Strategy</th></tr></thead>
          <tbody>
            <tr><td>⭐ <strong>Stars</strong> (High pop + High margin)</td><td>Push hard</td><td>60-70%</td><td>Feature prominently, server recs</td></tr>
            <tr><td>🐴 <strong>Workhorses</strong> (High pop + Low margin)</td><td>Anchor items</td><td>35-45%</td><td>Keep but don't promote</td></tr>
            <tr><td>🧩 <strong>Puzzles</strong> (Low pop + High margin)</td><td>Boost</td><td>60-70%</td><td>Better descriptions, photos</td></tr>
            <tr><td>🐕 <strong>Dogs</strong> (Low pop + Low margin)</td><td>Replace</td><td>{'<'}35%</td><td>Rotate out quarterly</td></tr>
          </tbody>
        </table></div>
        <h3 className="card-subtitle">Pricing Psychology</h3>
        <ul style={{fontSize:'.88rem',paddingLeft:18}}>
          <li><strong>Anchor dish:</strong> One ₹1,495+ item per section</li>
          <li><strong>Odd pricing:</strong> ₹375, ₹495, ₹575 (not round)</li>
          <li><strong>No ₹ sign:</strong> Removing currency symbols increases spend</li>
          <li><strong>Combo bundles:</strong> "Dinner for Two" at 10% discount</li>
        </ul>
      </Card>

      <Card title="🍸 Bar Program">
        <div className="table-wrap"><table>
          <thead><tr><th>Category</th><th>Brands</th><th>Investment</th><th>Par Level</th></tr></thead>
          <tbody>
            <tr><td>Vodka</td><td>Absolut, Smirnoff, Grey Goose</td><td>₹30-50K</td><td>8-12 bottles</td></tr>
            <tr><td>Whisky</td><td>Jameson, JD, Glenfiddich</td><td>₹40-60K</td><td>10-15 bottles</td></tr>
            <tr><td>Rum</td><td>Bacardi, Captain Morgan, Old Monk</td><td>₹20-35K</td><td>6-10 bottles</td></tr>
            <tr><td>Gin</td><td>Bombay Sapphire, Tanqueray</td><td>₹25-40K</td><td>6-8 bottles</td></tr>
            <tr><td>Tequila</td><td>Jose Cuervo, Patron</td><td>₹20-35K</td><td>4-6 bottles</td></tr>
            <tr><td>Wine</td><td>2 red, 2 white, 1 rosé, 1 sparkling</td><td>₹15-25K</td><td>12-20 bottles</td></tr>
            <tr><td>Beer</td><td>Kingfisher, Bira, Budweiser, Corona</td><td>₹15-25K</td><td>2-3 cases</td></tr>
          </tbody>
        </table></div>
        <h3 className="card-subtitle">Key Controls</h3>
        <ul style={{fontSize:'.88rem',paddingLeft:18}}>
          <li>Jigger-only pours — saves 15-20% on liquor cost</li>
          <li>Daily bottle count: opening + closing for top 20</li>
          <li>Target COGS: 18-22% cocktails, 25-30% beer/wine</li>
        </ul>
      </Card>

      <Card title="📅 Weekly Event Calendar">
        <div className="table-wrap"><table>
          <thead><tr><th>Day</th><th>Event</th><th>Purpose</th></tr></thead>
          <tbody>
            <tr><td><strong>Monday</strong></td><td>Trivia / Quiz Night</td><td>Drive slowest day</td></tr>
            <tr><td><strong>Tuesday</strong></td><td>Acoustic Live Music</td><td>Low-cost, chill vibe</td></tr>
            <tr><td><strong>Wednesday</strong></td><td>Ladies' Night (2+1 cocktails)</td><td>Mid-week boost</td></tr>
            <tr><td><strong>Thursday</strong></td><td>Date Night (₹1,999/couple)</td><td>Premium positioning</td></tr>
            <tr><td><strong>Friday</strong></td><td>DJ Night / Bollywood Night</td><td>Packed house</td></tr>
            <tr><td><strong>Saturday</strong></td><td>Craft Cocktail Specials</td><td>Premium bar night</td></tr>
            <tr><td><strong>Sunday</strong></td><td>Family Brunch (kids eat free)</td><td>Family segment</td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="📊 KPI Targets">
        <div className="table-wrap"><table>
          <thead><tr><th>KPI</th><th>Month 1-6</th><th>Month 7-12</th><th>Year 2+</th></tr></thead>
          <tbody>
            <tr><td>Daily covers</td><td>40-80</td><td>80-130</td><td>130-200</td></tr>
            <tr><td>Avg ticket</td><td>₹800-950</td><td>₹950-1,050</td><td>₹1,050-1,200</td></tr>
            <tr><td>Food COGS %</td><td>32-38%</td><td>28-34%</td><td>26-32%</td></tr>
            <tr><td>Bar COGS %</td><td>22-28%</td><td>18-24%</td><td>16-22%</td></tr>
            <tr><td>Zomato rating</td><td>4.0+</td><td>4.2+</td><td>4.4+</td></tr>
            <tr><td>Repeat customers</td><td>15-20%</td><td>25-35%</td><td>35-45%</td></tr>
            <tr><td>Monthly revenue</td><td>₹10-20L</td><td>₹25-40L</td><td>₹45-65L</td></tr>
            <tr><td>Net profit margin</td><td>-10% to 0%</td><td>5-15%</td><td>15-25%</td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="✅ Daily Checklists">
        <Tabs tabs={['Kitchen Opening', 'FOH Opening', 'Bar Opening', 'Closing']}>
          <div className="checklist">
            <label><input type="checkbox" /> Temperature check: walk-in (0-4°C), freezer (-18°C)</label>
            <label><input type="checkbox" /> Sanitizer buckets fresh</label>
            <label><input type="checkbox" /> All produce inspected for freshness</label>
            <label><input type="checkbox" /> Mise en place complete</label>
            <label><input type="checkbox" /> Equipment operational</label>
            <label><input type="checkbox" /> Staff uniforms clean, hairnets on</label>
          </div>
          <div className="checklist">
            <label><input type="checkbox" /> Tables set (cutlery, napkins, menu, QR)</label>
            <label><input type="checkbox" /> Restrooms inspected</label>
            <label><input type="checkbox" /> Lighting at correct setting</label>
            <label><input type="checkbox" /> Music playing at right volume</label>
            <label><input type="checkbox" /> Reservation list loaded</label>
            <label><input type="checkbox" /> POS system tested</label>
          </div>
          <div className="checklist">
            <label><input type="checkbox" /> Ice bins full</label>
            <label><input type="checkbox" /> Garnish prep complete</label>
            <label><input type="checkbox" /> Draft beer lines flushed</label>
            <label><input type="checkbox" /> Fresh juices pressed</label>
            <label><input type="checkbox" /> Glassware polished</label>
            <label><input type="checkbox" /> Opening inventory count</label>
          </div>
          <div className="checklist">
            <label><input type="checkbox" /> All equipment off (gas, ovens, AC)</label>
            <label><input type="checkbox" /> Walk-in secured, temp logged</label>
            <label><input type="checkbox" /> Cash counted + deposited</label>
            <label><input type="checkbox" /> POS day closed + reports</label>
            <label><input type="checkbox" /> Floors mopped, trash removed</label>
            <label><input type="checkbox" /> Entry points locked + alarm set</label>
          </div>
        </Tabs>
      </Card>

      <Card title="💻 Technology Stack">
        <div className="table-wrap"><table>
          <thead><tr><th>System</th><th>Recommended</th><th>Cost</th></tr></thead>
          <tbody>
            <tr><td>POS</td><td>Petpooja / POSist</td><td>₹1-2L + ₹3-5K/mo</td></tr>
            <tr><td>Accounting</td><td>Zoho Books / Tally</td><td>₹10-20K/yr</td></tr>
            <tr><td>CCTV</td><td>Hikvision 16-24 cams</td><td>₹80K-2L</td></tr>
            <tr><td>Payroll</td><td>Zoho People / GreytHR</td><td>₹5-10K/mo</td></tr>
            <tr><td>Reservation</td><td>Dineout / EazyDiner</td><td>Commission-based</td></tr>
          </tbody>
        </table></div>
      </Card>

      <div style={{textAlign:'center',padding:'40px 0',color:'var(--text-light)',fontSize:'.9rem'}}>
        <strong>📁 End of Report · 13 Documents · Concept to Cash Register</strong><br/>
        Generated April 2026 · Validate all numbers with local professionals before committing capital.
      </div>
    </div>
  )
}
