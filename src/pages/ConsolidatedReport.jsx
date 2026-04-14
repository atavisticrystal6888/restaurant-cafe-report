import { SectionHeader, Card, StatCard, BarChart, Accordion } from '../components/UI'

export default function ConsolidatedReport() {
  return (
    <div>
      <SectionHeader icon="📄" title="Consolidated Report — Optimized Edition" sub="Single-floor, no-bar, single-restroom cafe-restaurant · East Delhi / NCR" />

      <div className="box box-green" style={{ marginBottom: 24, padding: 16, fontSize: '.92rem' }}>
        <strong>Constraints Applied:</strong> No liquor license or bar area · Ground floor only · Single restroom · Cost-optimized to market reality
      </div>

      <div className="stats-grid">
        <StatCard value="₹28–52L" label="Total Investment (Optimized)" color="green" />
        <StatCard value="₹7–14L/mo" label="Profit at Maturity" color="gold" />
        <StatCard value="5–8 mo" label="Breakeven Timeline" color="blue" />
        <StatCard value="9–12 mo" label="Timeline to Open" color="purple" />
      </div>

      {/* ── PART 1: COST ANALYSIS ── */}
      <Card title="💰 Part 1 — Cost Analysis" highlight>
        <h3 className="card-subtitle">What Was Eliminated (Savings: ₹28–97L)</h3>
        <div className="table-wrap"><table>
          <thead><tr><th>Eliminated Item</th><th>Original Cost</th><th>Savings</th></tr></thead>
          <tbody>
            <tr><td>Bar setup (counter, shelving, taps, tools)</td><td>₹8–28L</td><td className="text-green"><strong>₹8–28L</strong></td></tr>
            <tr><td>Initial liquor inventory</td><td>₹2–6L</td><td className="text-green"><strong>₹2–6L</strong></td></tr>
            <tr><td>Liquor license (Year 1)</td><td>₹5–15L</td><td className="text-green"><strong>₹5–15L</strong></td></tr>
            <tr><td>Rooftop build-out</td><td>₹5–20L</td><td className="text-green"><strong>₹5–20L</strong></td></tr>
            <tr><td>Second-floor furniture</td><td>₹3–12L</td><td className="text-green"><strong>₹3–12L</strong></td></tr>
            <tr><td>Second restroom</td><td>₹2–5L</td><td className="text-green"><strong>₹1–3L</strong></td></tr>
            <tr><td>Excise consultant + renewals</td><td>₹1–3L</td><td className="text-green"><strong>₹1–3L</strong></td></tr>
            <tr><td>Bar refrigerators, draft system</td><td>₹3–10L</td><td className="text-green"><strong>₹3–10L</strong></td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="🏗️ Optimized One-Time Investment">
        <BarChart data={[
          { label: 'Interiors & Build-out', width: '65%', color: 'var(--green)', text: '₹16–33L (Medium: ₹22.5L)' },
          { label: 'Kitchen Equipment', width: '30%', color: 'var(--green-light)', text: '₹7–15L (Medium: ₹10L)' },
          { label: 'Technology', width: '9%', color: 'var(--blue)', text: '₹1.8–4.5L (Medium: ₹2.7L)' },
          { label: 'Licenses (No Liquor)', width: '6%', color: 'var(--orange)', text: '₹1.2–3.5L (Medium: ₹2L)' },
          { label: 'Deposit + Pre-open', width: '18%', color: 'var(--purple)', text: '₹4–9L (Medium: ₹6L)' },
          { label: 'Working Capital (3mo)', width: '18%', color: '#555', text: '₹5–10L (Medium: ₹7L)' },
        ]} />
        <div className="dual-box" style={{ marginTop: 16 }}>
          <div>
            <strong style={{ color: 'var(--green)' }}>Lean Setup: ₹28–38L</strong><br />
            <small>Minimum viable — phased furniture, basic theme</small>
          </div>
          <div>
            <strong style={{ color: 'var(--gold)' }}>Comfort Setup: ₹38–52L</strong><br />
            <small>Full theme, complete equipment, marketing buffer</small>
          </div>
        </div>
      </Card>

      <Card title="📅 Monthly Operating Cost (Optimized)">
        <div className="table-wrap"><table>
          <thead><tr><th>Category</th><th>Low</th><th>High</th><th>Target</th><th>Notes</th></tr></thead>
          <tbody>
            <tr><td>Rent</td><td>₹1L</td><td>₹2L</td><td>₹1.5L</td><td>1,200–1,800 sqft, Vikas Marg area</td></tr>
            <tr><td>Staff Salaries</td><td>₹1.8L</td><td>₹3.2L</td><td>₹2.5L</td><td>8–12 people (no bartenders)</td></tr>
            <tr><td>Food COGS</td><td>₹2.5L</td><td>₹4.5L</td><td>₹3.5L</td><td>Target 30–35%</td></tr>
            <tr><td>Beverage COGS</td><td>₹30K</td><td>₹60K</td><td>₹45K</td><td>Mocktails, coffee, shakes</td></tr>
            <tr><td>Utilities</td><td>₹40K</td><td>₹80K</td><td>₹60K</td><td>Single floor = lower</td></tr>
            <tr><td>Marketing</td><td>₹30K</td><td>₹1L</td><td>₹50K</td><td>Social + Zomato/Swiggy</td></tr>
            <tr><td>Delivery commissions</td><td>₹30K</td><td>₹1L</td><td>₹60K</td><td>18–25% platform cut</td></tr>
            <tr><td>Misc</td><td>₹30K</td><td>₹70K</td><td>₹40K</td><td>Maintenance, breakage</td></tr>
            <tr style={{ fontWeight: 700, background: '#f0fdf4' }}><td>TOTAL</td><td>₹6.4L</td><td>₹13L</td><td>₹9.6L</td><td></td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="👥 Staffing — 8–12 People (vs. 15–25 Original)">
        <div className="table-wrap"><table>
          <thead><tr><th>Role</th><th>Count</th><th>Salary Range</th></tr></thead>
          <tbody>
            <tr><td>Head Chef</td><td>1</td><td>₹35–55K</td></tr>
            <tr><td>Line Cooks</td><td>2–3</td><td>₹14–20K each</td></tr>
            <tr><td>Tandoor/Grill Specialist</td><td>1</td><td>₹14–20K</td></tr>
            <tr><td>Restaurant Manager</td><td>1</td><td>₹25–40K</td></tr>
            <tr><td>Servers / Stewards</td><td>2–4</td><td>₹12–16K each</td></tr>
            <tr><td>Kitchen Helper</td><td>1–2</td><td>₹10–13K each</td></tr>
            <tr><td>Dishwasher / Cleaner</td><td>1</td><td>₹10–12K</td></tr>
          </tbody>
        </table></div>
        <p style={{ fontSize: '.85rem', marginTop: 8 }}>Add 15% for PF/ESI/bonus → <strong>₹1.7–3.4L effective</strong></p>
      </Card>

      <Card title="📈 Revenue Trajectory (No-Bar Model)">
        <BarChart data={[
          { label: 'Month 1–3', width: '26%', color: 'var(--red, #ef4444)', text: '₹5–8L (LOSS: -₹1.5 to -₹3L)' },
          { label: 'Month 4–8', width: '50%', color: 'var(--orange)', text: '₹10–15L (BREAKEVEN)' },
          { label: 'Month 9–15', width: '73%', color: 'var(--green-light)', text: '₹16–22L (PROFIT ₹3–8L)' },
          { label: 'Month 16+', width: '100%', color: 'var(--green)', text: '₹22–30L (PROFIT ₹7–14L)' },
        ]} />
      </Card>

      <Card title="🔄 Original vs. Optimized — Side-by-Side">
        <div className="table-wrap"><table>
          <thead><tr><th>Metric</th><th>Original (Bar Model)</th><th>Optimized (No-Bar)</th><th>Change</th></tr></thead>
          <tbody>
            <tr><td>Setup investment</td><td>₹79L–₹2.06Cr</td><td><strong>₹28–52L</strong></td><td style={{ color: 'var(--green)' }}>-60%</td></tr>
            <tr><td>Monthly operating</td><td>₹12–30L</td><td><strong>₹6.4–13L</strong></td><td style={{ color: 'var(--green)' }}>-55%</td></tr>
            <tr><td>Monthly revenue (mature)</td><td>₹49–66L</td><td>₹22–30L</td><td>-55%</td></tr>
            <tr><td>Monthly profit (mature)</td><td>₹18–35L</td><td>₹7–14L</td><td>-55%</td></tr>
            <tr><td>Break-even</td><td>Month 6–15</td><td><strong>Month 5–8</strong></td><td style={{ color: 'var(--green)' }}>Faster</td></tr>
            <tr><td>ROI recovery</td><td>24–36 months</td><td><strong>14–24 months</strong></td><td style={{ color: 'var(--green)' }}>Faster</td></tr>
            <tr><td>Max risk score</td><td>20/25 (CRITICAL)</td><td><strong>12/25 (MEDIUM)</strong></td><td style={{ color: 'var(--green)' }}>Lower</td></tr>
            <tr><td>Timeline to open</td><td>18–24 months</td><td><strong>9–12 months</strong></td><td style={{ color: 'var(--green)' }}>Faster</td></tr>
          </tbody>
        </table></div>
      </Card>

      {/* ── PART 2: MARKET & CLIENTELE ANALYSIS ── */}
      <Card title="📊 Part 2 — Market & Clientele Analysis" highlight>
        <h3 className="card-subtitle">Catchment Demographics</h3>
        <div className="table-wrap"><table>
          <thead><tr><th>Zone</th><th>Population</th><th>Distance</th><th>Drive Time</th></tr></thead>
          <tbody>
            <tr><td><strong>Primary</strong> (Laxmi Nagar, Preet Vihar, Karkardooma)</td><td>2–2.5M</td><td>{'<'}5 km</td><td>{'<'}20 min</td></tr>
            <tr><td><strong>Secondary</strong> (Mayur Vihar, Shahdara, Vivek Vihar)</td><td>1–1.5M</td><td>5–10 km</td><td>20–35 min</td></tr>
            <tr><td><strong>Tertiary</strong> (Noida, Indirapuram, Vaishali)</td><td>0.8–1.2M</td><td>10–15 km</td><td>30–45 min</td></tr>
            <tr style={{ fontWeight: 700, background: '#f0fdf4' }}><td>Total Accessible</td><td>3.8–5.2M</td><td></td><td></td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="👥 Age Group Analysis — Target: ~567K Active Cafe-Goers">
        <BarChart data={[
          { label: '15–18 yrs (10%)', width: '10%', color: 'var(--blue)', text: '~52K · ₹200–400/hd · 1x/quarter' },
          { label: '19–22 yrs (35%) — CORE', width: '35%', color: 'var(--green)', text: '~221K · ₹400–700/hd · 2–3x/mo' },
          { label: '23–26 yrs (40%) — TOP $', width: '40%', color: 'var(--gold)', text: '~232K · ₹600–1,000/hd · 1–2x/mo' },
          { label: '27–30 yrs (15%)', width: '15%', color: 'var(--purple)', text: '~62K · ₹700–1,200/hd · 2–4x/mo' },
        ]} />
      </Card>

      <Card title="🎯 Segment Deep Dive">
        <Accordion title="🎓 College Students (19–22) — 35% of Target" defaultOpen>
          <div className="table-wrap"><table>
            <tbody>
              <tr><td style={{width:180}}><strong>Population</strong></td><td>~221K (IP University, GGSIPU, coaching institutes)</td></tr>
              <tr><td><strong>Gender Split</strong></td><td>52% Male / 48% Female</td></tr>
              <tr><td><strong>Monthly F&B Budget</strong></td><td>₹2,500–5,000</td></tr>
              <tr><td><strong>Avg Spend/Visit</strong></td><td>₹400–700/head</td></tr>
              <tr><td><strong>Visit Occasion</strong></td><td>Friend groups (60%), dates (25%), solo study (15%)</td></tr>
              <tr><td><strong>Discovery</strong></td><td>Instagram (70%), friends (20%), walk-in (10%)</td></tr>
              <tr><td><strong>Key Wants</strong></td><td>Affordable, Instagram-worthy, Wi-Fi, group seating</td></tr>
              <tr><td><strong>Pain Point</strong></td><td>"Nothing aesthetic in our area"</td></tr>
              <tr><td><strong>Revenue Potential</strong></td><td>₹4–7L/month (at 2–3% segment capture)</td></tr>
            </tbody>
          </table></div>
        </Accordion>
        <Accordion title="💼 Young Professionals (23–26) — 40% (Highest Value)">
          <div className="table-wrap"><table>
            <tbody>
              <tr><td style={{width:180}}><strong>Population</strong></td><td>~232K (Noida IT/BPO, freelancers, business families)</td></tr>
              <tr><td><strong>Monthly F&B Budget</strong></td><td>₹5,000–12,000</td></tr>
              <tr><td><strong>Avg Spend/Visit</strong></td><td>₹600–1,000/head</td></tr>
              <tr><td><strong>Visit Occasion</strong></td><td>Date nights (35%), friends (30%), WFC (20%), celebrations (15%)</td></tr>
              <tr><td><strong>Discovery</strong></td><td>Zomato/Google (50%), Instagram (30%), colleague referral (20%)</td></tr>
              <tr><td><strong>Pain Point</strong></td><td>"Drive 45 min to South Delhi for decent dinner"</td></tr>
              <tr><td><strong>Revenue Potential</strong></td><td>₹6–10L/month (at 1.5–2.5% capture)</td></tr>
            </tbody>
          </table></div>
        </Accordion>
        <Accordion title="💑 Couples & Date-Goers (22–28)">
          <div className="table-wrap"><table>
            <tbody>
              <tr><td style={{width:180}}><strong>Population</strong></td><td>~180K addressable couples</td></tr>
              <tr><td><strong>Avg Spend</strong></td><td>₹1,200–2,000/couple</td></tr>
              <tr><td><strong>Key Wants</strong></td><td>Intimate seating, mood lighting, photo spots</td></tr>
              <tr><td><strong>Revenue Potential</strong></td><td>₹3–5L/month</td></tr>
            </tbody>
          </table></div>
        </Accordion>
        <Accordion title="👨‍👩‍👧 Family Groups (27–40)">
          <div className="table-wrap"><table>
            <tbody>
              <tr><td style={{width:180}}><strong>Population</strong></td><td>~350K families in catchment</td></tr>
              <tr><td><strong>Avg Spend</strong></td><td>₹1,500–2,500/table (4 pax)</td></tr>
              <tr><td><strong>Key Wants</strong></td><td>Clean, veg options, kid-friendly, parking</td></tr>
              <tr><td><strong>Revenue Potential</strong></td><td>₹4–7L/month</td></tr>
            </tbody>
          </table></div>
        </Accordion>
        <Accordion title="🎉 Celebration Groups (18–30)">
          <div className="table-wrap"><table>
            <tbody>
              <tr><td style={{width:180}}><strong>Events/month</strong></td><td>15–30 (birthdays, reunions, promotions)</td></tr>
              <tr><td><strong>Avg Spend</strong></td><td>₹5,000–12,000/group</td></tr>
              <tr><td><strong>Key Wants</strong></td><td>Private area, decoration, group photos, packages</td></tr>
              <tr><td><strong>Revenue Potential</strong></td><td>₹2–4L/month</td></tr>
            </tbody>
          </table></div>
        </Accordion>
      </Card>

      <Card title="📏 Statistical Market Indicators">
        <div className="table-wrap"><table>
          <thead><tr><th>Indicator</th><th>Value</th><th>Source</th></tr></thead>
          <tbody>
            <tr><td>East Delhi population</td><td>3.5M+</td><td>Census projection</td></tr>
            <tr><td>15–30 age band</td><td>~38% (~1.3M)</td><td>Delhi Statistical Handbook</td></tr>
            <tr><td>Transient student population</td><td>100K+</td><td>Coaching hub estimates</td></tr>
            <tr><td>Median household income</td><td>₹4.5–6.5L/year</td><td>NSSO surveys</td></tr>
            <tr><td>Income growth rate</td><td>8–12% annually</td><td>Economic Survey</td></tr>
            <tr><td>Monthly dining-out (15–30)</td><td>4–8x/month</td><td>Industry reports</td></tr>
            <tr><td>Avg spend per outing</td><td>₹450–850/head</td><td>Zomato data</td></tr>
            <tr><td>Zomato searches "restaurant near Laxmi Nagar"</td><td>50K+/month</td><td>Zomato Trends</td></tr>
            <tr><td>East Delhi food pages</td><td>50–100K followers each</td><td>Instagram</td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="📊 Customer Lifetime Value (CLV)">
        <div className="table-wrap"><table>
          <thead><tr><th>Segment</th><th>Visits/Year</th><th>Avg Spend</th><th>3-Year CLV</th><th>Acquisition Cost</th></tr></thead>
          <tbody>
            <tr><td>College Student</td><td>24–36</td><td>₹450</td><td>₹32–49K</td><td>₹150–300</td></tr>
            <tr><td>Young Professional</td><td>12–24</td><td>₹750</td><td>₹27–54K</td><td>₹300–500</td></tr>
            <tr><td>Couple (date)</td><td>12–18</td><td>₹1,400</td><td>₹50–76K</td><td>₹200–400</td></tr>
            <tr><td style={{ color: 'var(--green)', fontWeight: 700 }}>Family (highest CLV)</td><td>24–48</td><td>₹1,800</td><td><strong>₹1.3–2.6L</strong></td><td>₹500–800</td></tr>
            <tr><td>Celebration Group</td><td>3–6</td><td>₹8,000</td><td>₹72K–1.44L</td><td>₹300–600</td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="📅 Seasonality & Day-of-Week Analysis">
        <div className="dual-box">
          <div>
            <h3 className="card-subtitle">Seasonal Revenue Index</h3>
            <div className="table-wrap"><table>
              <thead><tr><th>Period</th><th>Index</th></tr></thead>
              <tbody>
                <tr><td>Oct–Feb (Winter Peak)</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>1.2–1.5x</td></tr>
                <tr><td>Mar–Jun (Summer Lean)</td><td style={{ color: 'var(--red, #ef4444)', fontWeight: 700 }}>0.6–0.9x</td></tr>
                <tr><td>Jul–Sep (Monsoon)</td><td>0.85–1.0x</td></tr>
              </tbody>
            </table></div>
          </div>
          <div>
            <h3 className="card-subtitle">Day-of-Week Revenue</h3>
            <div className="table-wrap"><table>
              <thead><tr><th>Day</th><th>Index</th><th>Strategy</th></tr></thead>
              <tbody>
                <tr><td>Mon</td><td>0.5x</td><td>Quiz night / student discount</td></tr>
                <tr><td>Tue–Wed</td><td>0.6–0.7x</td><td>BOGO / Ladies' special</td></tr>
                <tr><td>Thu</td><td>0.8x</td><td>Date Night prix fixe</td></tr>
                <tr><td>Fri</td><td>1.3x</td><td>Premium night, no discounts</td></tr>
                <tr><td style={{ color: 'var(--green)', fontWeight: 700 }}>Sat</td><td style={{ fontWeight: 700 }}>1.5x</td><td>Peak — full menu</td></tr>
                <tr><td style={{ color: 'var(--green)' }}>Sun</td><td>1.4x</td><td>Family brunch, kids eat free</td></tr>
              </tbody>
            </table></div>
          </div>
        </div>
      </Card>

      {/* ── PART 3: OPERATIONS ── */}
      <Card title="🍽️ Part 3 — Menu & Beverage Strategy (No Bar)" highlight>
        <p style={{ marginBottom: 12 }}>Without a bar, <strong>mocktails and artisanal coffee become your high-margin drivers</strong> (70–80% margin vs. 60–65% for food).</p>
        <div className="table-wrap"><table>
          <thead><tr><th>Category</th><th>Price Range</th><th>Margin</th></tr></thead>
          <tbody>
            <tr><td>Starters (Veg)</td><td>₹195–345</td><td>65–70%</td></tr>
            <tr><td>Starters (Non-veg)</td><td>₹245–395</td><td>60–65%</td></tr>
            <tr><td>Mains (Indian)</td><td>₹295–495</td><td>60–65%</td></tr>
            <tr><td>Mains (Continental/Asian)</td><td>₹345–545</td><td>55–60%</td></tr>
            <tr><td>Pizzas / Pastas</td><td>₹295–445</td><td>62–68%</td></tr>
            <tr style={{ background: '#f0fdf4' }}><td><strong>Mocktails (BEST MARGIN)</strong></td><td>₹175–295</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>70–78%</td></tr>
            <tr style={{ background: '#f0fdf4' }}><td><strong>Coffee (BEST MARGIN)</strong></td><td>₹145–245</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>75–80%</td></tr>
            <tr><td>Shakes</td><td>₹195–295</td><td>68–75%</td></tr>
            <tr><td>Desserts</td><td>₹195–345</td><td>65–72%</td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="📜 Licensing — Simplified (No Liquor)">
        <div className="table-wrap"><table>
          <thead><tr><th>License</th><th>Cost</th><th>Timeline</th><th>Complexity</th></tr></thead>
          <tbody>
            <tr><td>FSSAI State License</td><td>₹2–5K</td><td>30–60 days</td><td>🟢 Low</td></tr>
            <tr><td>Fire NOC</td><td>₹10–50K</td><td>15–30 days</td><td>🟡 Medium</td></tr>
            <tr><td>MCD Trade License</td><td>₹5–25K</td><td>15–30 days</td><td>🟢 Low</td></tr>
            <tr><td>GST Registration</td><td>Free (CA ₹10–30K)</td><td>3–7 days</td><td>🟢 Low</td></tr>
            <tr><td>Shop & Establishment</td><td>₹500–2K</td><td>7–15 days</td><td>🟢 Low</td></tr>
            <tr><td>Music License</td><td>₹20–50K/yr</td><td>2–4 weeks</td><td>🟢 Low</td></tr>
            <tr><td>LLP + Trademark</td><td>₹15–24K</td><td>10–15 days</td><td>🟢 Low</td></tr>
            <tr style={{ fontWeight: 700, background: '#f0fdf4' }}><td>TOTAL</td><td>₹55K – ₹1.9L</td><td>1–2 months</td><td>🟢 LOW</td></tr>
          </tbody>
        </table></div>
        <p style={{ fontSize: '.85rem', marginTop: 8, color: 'var(--green)' }}><strong>vs. Original: ₹8–24L + 6–12 months → 90% reduction in cost and time</strong></p>
      </Card>

      <Card title="🗺️ Compressed Timeline — 9–12 Months">
        <BarChart data={[
          { label: 'Phase 0: Validate (M1–2)', width: '20%', color: 'var(--blue)', text: '₹3.5–6L' },
          { label: 'Phase 1: Legal+Design (M3–4)', width: '20%', color: 'var(--purple)', text: '₹3–6L' },
          { label: 'Phase 2: Build-Out (M5–7)', width: '30%', color: 'var(--orange)', text: '₹20–35L' },
          { label: 'Phase 3: Hire+Train (M8)', width: '10%', color: 'var(--green-light)', text: '₹3–5L' },
          { label: 'Phase 4: Soft Launch (M9)', width: '10%', color: 'var(--green)', text: '₹2–4L' },
          { label: 'Phase 5: Grand Opening (M10+)', width: '10%', color: 'var(--gold)', text: '₹1–3L' },
        ]} />
        <p style={{ fontSize: '.85rem', marginTop: 12 }}><strong>9–12 months vs. 18–24 months</strong> — removing the liquor license bottleneck (6–12 month wait) cuts the project timeline nearly in half.</p>
      </Card>

      {/* ── PART 4: RISK ── */}
      <Card title="⚠️ Risk Matrix (Revised — No Liquor Risks)">
        <div className="table-wrap"><table>
          <thead><tr><th>#</th><th>Risk</th><th>Score</th><th>Status</th></tr></thead>
          <tbody>
            <tr style={{ textDecoration: 'line-through', color: '#999' }}><td>R1</td><td>Liquor license delay</td><td>20</td><td>ELIMINATED ✅</td></tr>
            <tr><td>R2</td><td>Construction cost overrun</td><td>12</td><td>🟡 MEDIUM</td></tr>
            <tr><td>R3</td><td>Wrong location selection</td><td>10</td><td>🟡 MEDIUM</td></tr>
            <tr><td>R4</td><td>Key staff attrition</td><td>12</td><td>🟡 MEDIUM</td></tr>
            <tr><td>R5</td><td>Low footfall (first 6 months)</td><td>12</td><td>🟡 MEDIUM</td></tr>
            <tr><td>R6</td><td>Cash flow crunch</td><td>9</td><td>🟡 MEDIUM</td></tr>
            <tr><td>R7</td><td>Negative online reviews</td><td>9</td><td>🟡 MEDIUM</td></tr>
            <tr><td>R8</td><td>Summer revenue drop</td><td>12</td><td>🟡 MEDIUM</td></tr>
            <tr><td>R9</td><td>Competition opens similar</td><td>6</td><td>🟢 LOW</td></tr>
          </tbody>
        </table></div>
        <p style={{ fontSize: '.88rem', marginTop: 8, fontWeight: 600, color: 'var(--green)' }}>Max risk score dropped from 20 (CRITICAL) to 12 (MEDIUM) — a fundamentally safer business.</p>
      </Card>

      {/* ── FINAL SUMMARY ── */}
      <Card title="✅ Final Investment Summary" highlight>
        <div className="stats-grid" style={{ marginTop: 8 }}>
          <StatCard value="₹42L" label="Recommended Investment" color="green" />
          <StatCard value="₹9.6L/mo" label="Target Operating Cost" color="blue" />
          <StatCard value="₹14.5–23.5L" label="Year 1 Avg Revenue/mo" color="gold" />
          <StatCard value="25–36%" label="Net Profit Margin" color="purple" />
        </div>
        <div className="box box-green" style={{ marginTop: 16, padding: 16 }}>
          <strong>Go / No-Go Checklist:</strong>
          <ol style={{ paddingLeft: 20, marginTop: 8 }}>
            <li>Instagram pre-launch: 2,000+ followers in 30 days</li>
            <li>Survey: 70%+ would "definitely visit"</li>
            <li>Cloud kitchen test: 15+ orders/day in 30 days</li>
            <li>Willingness to pay ≥ ₹600/head confirmed</li>
            <li>Property: commercial zone, parking, 1400+ sqft</li>
            <li>All licenses feasible without liquor</li>
            <li>Total investment within ₹38–52L budget</li>
          </ol>
          <p style={{ marginTop: 12 }}>
            <strong>6–7/7 pass → ✅ PROCEED</strong> · 4–5/7 → 🟡 Proceed with caution · {'<'}4 → 🔴 STOP
          </p>
        </div>
      </Card>

      <div style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '.82rem', marginTop: 32, padding: '16px 0' }}>
        Generated April 2026 · Optimized for single-floor, no-bar, single-restroom model · Validate all costs with local professionals
      </div>
    </div>
  )
}
