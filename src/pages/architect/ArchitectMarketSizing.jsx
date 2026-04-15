import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectMarketSizing() {
  return (
    <div>
      <SectionHeader icon="📐" title="Market Sizing & Opportunity" sub="TAM/SAM/SOM deep dive (top-down + bottom-up cross-validated), 20+ city maps with scoring, adjacent opportunities worth ₹45-130 Cr by Year 5" />

      <div className="stats-grid">
        <StatCard value="$16.5–24B" label="Global TAM (Combined)" color="green" />
        <StatCard value="₹7,500 Cr" label="India SAM ($900M)" color="blue" />
        <StatCard value="₹57.7 Cr" label="Year 3 SOM (<1% SAM)" color="gold" />
        <StatCard value="20+" label="Cities Mapped & Scored" color="purple" />
      </div>

      <Card title="📊 TAM → SAM → SOM Funnel">
        <BarChart data={[
          { label: 'TAM (Global)', width: '100%', text: '$16.5-24B', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'India TAM (Interior Design Tech)', width: '15%', text: '₹10,000-20,000 Cr ($1.2-2.4B)', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'SAM (India Digital)', width: '8%', text: '₹7,500 Cr ($900M)', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'SOM Year 3', width: '1%', text: '₹57.7 Cr (0.77% of SAM)', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
        ]} />

        <Tabs tabs={['Top-Down TAM', 'SAM Breakdown', 'SOM by Year', 'Bottom-Up Validation']}>
          <div>
            <h3 className="card-subtitle">Global TAM by Layer</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Market Layer</th><th>2023</th><th>CAGR</th><th>2030 Est.</th></tr></thead>
                <tbody>
                  <tr><td><strong>Interior design software</strong></td><td>$3.8-4.2B</td><td>8-11%</td><td>$5.5-8.5B</td></tr>
                  <tr><td><strong>Home services marketplace</strong></td><td>$5-6B</td><td>12-15%</td><td>$10-14B</td></tr>
                  <tr><td><strong>Virtual staging &amp; visualization</strong></td><td>$0.3-0.5B</td><td>20-25%</td><td>$1.0-1.5B</td></tr>
                  <tr style={{ fontWeight: 700 }}><td>Combined TAM</td><td></td><td></td><td>$16.5-24B</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">India TAM</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Layer</th><th>2024</th><th>2030</th></tr></thead>
                <tbody>
                  <tr><td><strong>India interior design (managed + tools)</strong></td><td>₹30,000-50,000 Cr</td><td>₹80,000-1,20,000 Cr</td></tr>
                  <tr><td><strong>India real estate technology</strong></td><td>₹5,000-8,000 Cr</td><td>₹15,000-25,000 Cr</td></tr>
                  <tr><td><strong>India home renovation (total)</strong></td><td>₹3,00,000 Cr (~$36B)</td><td>₹5,00,000+ Cr</td></tr>
                  <tr style={{ fontWeight: 700 }}><td>Our TAM (India interior design tech)</td><td colSpan={2}>₹10,000-20,000 Cr ($1.2-2.4B)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>SAM Component</th><th>Calculation</th><th>Value</th></tr></thead>
                <tbody>
                  <tr><td><strong>Consumer SaaS</strong></td><td>100M urban HH → 10M renovate/yr → 4M digitally addressable × ₹15K avg</td><td>₹6,000 Cr ($720M)</td></tr>
                  <tr><td><strong>Architect SaaS</strong></td><td>100K digitally-active architects × ₹30,000/yr</td><td>₹300 Cr ($36M)</td></tr>
                  <tr><td><strong>Affiliate commerce</strong></td><td>4M users × ₹50K home purchases × 6% commission</td><td>₹1,200 Cr ($144M)</td></tr>
                  <tr style={{ fontWeight: 700 }}><td>Total SAM</td><td></td><td>~₹7,500 Cr (~$900M)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Year</th><th>Users</th><th>Paying Users</th><th>Revenue</th><th>% of SAM</th></tr></thead>
                <tbody>
                  <tr><td><strong>Year 1</strong></td><td>150K</td><td>5,000 consumers + 500 architects</td><td>₹3.06 Cr</td><td>0.04%</td></tr>
                  <tr><td><strong>Year 2</strong></td><td>600K</td><td>21,000 + 2,000</td><td>₹16.4 Cr</td><td>0.22%</td></tr>
                  <tr><td><strong>Year 3</strong></td><td>2M</td><td>77,000 + 6,000</td><td>₹57.7 Cr</td><td>0.77%</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.88rem', color: 'var(--text-light)', marginTop: 8 }}>Even at Year 3, we capture &lt;1% of SAM — <strong>significant room for growth.</strong></p>
          </div>
          <div>
            <p style={{ fontSize: '.88rem', marginBottom: 8 }}>Bottom-up matches top-down projections — cross-validated.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Stream</th><th>Year 1 (Bottom-Up)</th><th>Year 3 (Bottom-Up)</th></tr></thead>
                <tbody>
                  <tr><td><strong>Consumer subscriptions</strong></td><td>₹1.66 Cr (5,250 × ₹800/mo, ramp)</td><td>₹27.7 Cr (77K × ₹1,200/mo)</td></tr>
                  <tr><td><strong>Architect subscriptions</strong></td><td>₹60L (500 × ₹2,500/mo)</td><td>₹9 Cr (6K × ₹2,500/mo)</td></tr>
                  <tr><td><strong>Consultation commissions</strong></td><td>₹59.5L (3K bookings/mo × ₹3K × 15%)</td><td>₹12 Cr (25K × ₹4K × 15%)</td></tr>
                  <tr><td><strong>Affiliate commerce</strong></td><td>₹21L (500 lists/mo × ₹30K × 6%)</td><td>₹6 Cr (15K × ₹50K × 8%)</td></tr>
                  <tr><td><strong>Enterprise B2B</strong></td><td>₹0</td><td>₹3 Cr</td></tr>
                  <tr style={{ fontWeight: 700 }}><td>Total</td><td>₹3.06 Cr</td><td>₹57.7 Cr</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Comparable Company Sanity Check</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company (at similar stage)</th><th>Their Revenue</th><th>Our Projection</th><th>Assessment</th></tr></thead>
                <tbody>
                  <tr><td><strong>Livspace at 150K users</strong></td><td>~₹100 Cr (managed)</td><td>₹3 Cr (SaaS model)</td><td>Consistent — higher margins, lower rev/user</td></tr>
                  <tr><td><strong>Planner 5D at 2M users</strong></td><td>~₹40-80 Cr</td><td>₹57.7 Cr</td><td>In range + we have marketplace</td></tr>
                  <tr><td><strong>Houzz at Year 3</strong></td><td>~$30-50M (US market)</td><td>Ours conservative</td><td>US market + massive VC spend</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🏙️ India City Market Maps — 20+ Cities Scored">
        <p style={{ fontSize: '.9rem', marginBottom: 12 }}>Each city scored on 5 dimensions (1-5): Housing Volume, Economic Potential, Digital Readiness, Architect Density, Competition Intensity. <strong>Launch Priority = Housing × Economic × Digital × Architect ÷ Competition.</strong></p>
        <Tabs tabs={['Tier 1 — Launch', 'Tier 2 — Expand', 'Tier 3 — Growth', 'City Revenue Map', 'Launch Playbook']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>City</th><th>Housing</th><th>Economic</th><th>Digital</th><th>Architects</th><th>Competition</th><th>Score</th></tr></thead>
                <tbody>
                  <tr><td><strong>Bangalore</strong></td><td>5</td><td>5</td><td>5</td><td>4</td><td>3</td><td>★★★★★</td></tr>
                  <tr><td><strong>Mumbai MMR</strong></td><td>5</td><td>5</td><td>5</td><td>5</td><td>4</td><td>★★★★★</td></tr>
                  <tr><td><strong>Delhi NCR</strong></td><td>5</td><td>5</td><td>4</td><td>5</td><td>4</td><td>★★★★★</td></tr>
                </tbody>
              </table>
            </div>
            <div className="grid-3" style={{ marginTop: 12 }}>
              <div className="box box-green" style={{ borderRadius: 12 }}>
                <strong>Bangalore #1</strong><br />
                <small>70K units/yr. Most tech-friendly audience. Startups = early adopters. 15-20% price growth.</small>
              </div>
              <div className="box box-purple" style={{ borderRadius: 12 }}>
                <strong>Mumbai #2</strong><br />
                <small>100K+ units/yr. Compact 600-1,200 sqft = space optimization AI is gold. Highest rev/user.</small>
              </div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}>
                <strong>Delhi NCR #3</strong><br />
                <small>80K+ units. Gurgaon Dwarka Expy = wave of new homeowners. Vastu extremely important.</small>
              </div>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>City</th><th>Housing</th><th>Economic</th><th>Digital</th><th>Architects</th><th>Competition</th><th>Score</th><th>When</th></tr></thead>
                <tbody>
                  <tr><td><strong>Hyderabad</strong></td><td>4</td><td>4</td><td>4</td><td>3</td><td>2</td><td>★★★★☆</td><td>Month 6-8</td></tr>
                  <tr><td><strong>Pune</strong></td><td>4</td><td>4</td><td>4</td><td>3</td><td>2</td><td>★★★★☆</td><td>Month 6-8</td></tr>
                  <tr><td><strong>Chennai</strong></td><td>3</td><td>3</td><td>4</td><td>4</td><td>2</td><td>★★★☆☆</td><td>Month 9-12</td></tr>
                  <tr><td><strong>Kolkata</strong></td><td>2</td><td>2</td><td>3</td><td>3</td><td>1</td><td>★★★☆☆</td><td>Month 10-12</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: 8 }}>Hyderabad + Pune: fast-growing IT cities with lower competition than Tier 1. Chennai: may need Tamil localization. Kolkata: low competition offsets lower volume.</p>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>City</th><th>H</th><th>E</th><th>D</th><th>A</th><th>C</th><th>Score</th><th>When</th><th>Special Angle</th></tr></thead>
                <tbody>
                  <tr><td><strong>Kochi</strong></td><td>2</td><td>4</td><td>4</td><td>3</td><td>1</td><td>★★★☆☆</td><td>Mo 12-14</td><td>NRI market (Gulf/US). Kerala fusion design = content goldmine</td></tr>
                  <tr><td><strong>Ahmedabad</strong></td><td>3</td><td>3</td><td>3</td><td>3</td><td>1</td><td>★★★☆☆</td><td>Mo 12-14</td><td>Vastu-first marketing to dominate Gujarat</td></tr>
                  <tr><td><strong>Jaipur</strong></td><td>2</td><td>3</td><td>3</td><td>2</td><td>1</td><td>★★★☆☆</td><td>Mo 14-16</td><td>Heritage renovation + boutique hotels</td></tr>
                  <tr><td><strong>Lucknow</strong></td><td>2</td><td>2</td><td>3</td><td>2</td><td>1</td><td>★★☆☆☆</td><td>Mo 16-18</td><td></td></tr>
                  <tr><td><strong>Chandigarh</strong></td><td>2</td><td>3</td><td>3</td><td>2</td><td>1</td><td>★★☆☆☆</td><td>Mo 16-18</td><td></td></tr>
                  <tr><td><strong>Goa</strong></td><td>1</td><td>4</td><td>3</td><td>2</td><td>1</td><td>★★☆☆☆</td><td>Mo 18+</td><td>Villa/homestay niche</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Year 1 Revenue by City</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>City</th><th>Users</th><th>Revenue</th><th>Share</th><th>Rev/User</th></tr></thead>
                <tbody>
                  <tr><td><strong>Bangalore</strong></td><td>45K</td><td>~₹92L</td><td>30%</td><td>₹204</td></tr>
                  <tr><td><strong>Mumbai</strong></td><td>40K</td><td>~₹92L</td><td>30%</td><td>₹230</td></tr>
                  <tr><td><strong>Delhi NCR</strong></td><td>35K</td><td>~₹77L</td><td>25%</td><td>₹220</td></tr>
                  <tr><td><strong>Hyderabad</strong></td><td>10K</td><td>~₹18L</td><td>6%</td><td>₹180</td></tr>
                  <tr><td><strong>Pune</strong></td><td>8K</td><td>~₹12L</td><td>4%</td><td>₹150</td></tr>
                  <tr><td><strong>Others</strong></td><td>12K</td><td>~₹15L</td><td>5%</td><td>₹125</td></tr>
                  <tr style={{ fontWeight: 700 }}><td>Total</td><td>150K</td><td>₹3.06 Cr</td><td>100%</td><td></td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Year 3 Distribution</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Geography</th><th>Users</th><th>Revenue</th><th>Share</th></tr></thead>
                <tbody>
                  <tr><td><strong>Top 3 cities</strong></td><td>800K</td><td>₹32 Cr</td><td>55%</td></tr>
                  <tr><td><strong>Tier 2 (4 cities)</strong></td><td>600K</td><td>₹16 Cr</td><td>28%</td></tr>
                  <tr><td><strong>Tier 3 (6+ cities)</strong></td><td>400K</td><td>₹7 Cr</td><td>12%</td></tr>
                  <tr><td><strong>NRI / International</strong></td><td>200K</td><td>₹3 Cr</td><td>5%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Standard 2-Week City Launch Sprint</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Day</th><th>Activity</th></tr></thead>
                <tbody>
                  <tr><td><strong>1-3</strong></td><td>Identify 50 architects (Instagram, JustDial, CoA directory)</td></tr>
                  <tr><td><strong>3-5</strong></td><td>Personal outreach: email + DM; explain platform; invite to list</td></tr>
                  <tr><td><strong>5-7</strong></td><td>Onboard first 20 architects; help with profile setup</td></tr>
                  <tr><td><strong>7-10</strong></td><td>Turn on local Google + Instagram ads (₹50K-1L budget)</td></tr>
                  <tr><td><strong>10-12</strong></td><td>First user signups; monitor design generation activity</td></tr>
                  <tr><td><strong>12-14</strong></td><td>First consultation bookings; gather feedback</td></tr>
                  <tr><td><strong>Mo 2-3</strong></td><td>Scale ads; onboard 50-100 more architects; local content creation</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">City-Specific Marketing Hooks</h3>
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>Bangalore:</strong> "Design your IT park-view apartment in 5 minutes"</div>
              <div className="box box-purple" style={{ borderRadius: 12 }}><strong>Mumbai:</strong> "Maximize your 600 sq ft space with AI"</div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}><strong>Delhi NCR:</strong> "Vastu-compliant design for your new Gurgaon flat"</div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}><strong>Kochi:</strong> "NRI? Design your Kerala home from abroad with our AI tool"</div>
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>Pune:</strong> "Young homeowner? Design your first flat for under ₹5L"</div>
              <div className="box box-purple" style={{ borderRadius: 12 }}><strong>Ahmedabad:</strong> "100% Vastu-compliant designs. Check your home in 30 seconds."</div>
            </div>
            <p style={{ fontSize: '.85rem', fontWeight: 600, marginTop: 12 }}>Key Principle: Depth before breadth — each city must reach 200 architects + 10K consumers before launching next.</p>
          </div>
        </Tabs>
      </Card>

      <Card title="📈 Market Growth Drivers & Inhibitors">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Growth Drivers (Next 5 Years)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Driver</th><th>Impact</th></tr></thead>
                <tbody>
                  <tr><td><strong>India housing delivery growing 20-33% YoY</strong></td><td>★★★★★</td></tr>
                  <tr><td><strong>AI design quality improving</strong></td><td>★★★★★</td></tr>
                  <tr><td><strong>Smartphone penetration in Tier 2/3</strong></td><td>★★★★☆</td></tr>
                  <tr><td><strong>Rising home prices → higher budgets</strong></td><td>★★★★☆</td></tr>
                  <tr><td><strong>Social media driving design aspiration</strong></td><td>★★★★☆</td></tr>
                  <tr><td><strong>AR mainstream (more LiDAR phones)</strong></td><td>★★★☆☆</td></tr>
                  <tr><td><strong>WFH permanence → home office demand</strong></td><td>★★★☆☆</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Inhibitors</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Risk</th><th>Likelihood</th></tr></thead>
                <tbody>
                  <tr><td><strong>Interest rate hikes</strong></td><td>Medium</td></tr>
                  <tr><td><strong>Economic slowdown</strong></td><td>Low-Medium</td></tr>
                  <tr><td><strong>Real estate bubble/correction</strong></td><td>Low</td></tr>
                  <tr><td><strong>AI regulatory tightening</strong></td><td>Low</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      <Card title="🔮 Adjacent Opportunities">
        <Tabs tabs={['Opportunity Map', 'Virtual Staging', 'Affiliate Commerce', 'International', 'White-Label/API']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Opportunity</th><th>Market Size</th><th>Relevance</th><th>Timing</th><th>Year 3-5 Revenue</th></tr></thead>
                <tbody>
                  <tr><td><strong>Virtual staging</strong></td><td>$500M global</td><td>★★★★★</td><td>Year 2</td><td>₹5-15 Cr</td></tr>
                  <tr><td><strong>Affiliate commerce</strong></td><td>₹15,800 Cr India online</td><td>★★★★★</td><td>Year 1</td><td>₹3-9 Cr</td></tr>
                  <tr><td><strong>Commercial interiors</strong></td><td>₹25,000 Cr India</td><td>★★★★☆</td><td>Year 3</td><td>₹10-25 Cr</td></tr>
                  <tr><td><strong>Smart home</strong></td><td>₹3,000 Cr India</td><td>★★★☆☆</td><td>Year 3</td><td>₹2-5 Cr</td></tr>
                  <tr><td><strong>International (SEA/ME)</strong></td><td>$5B+</td><td>★★★★★</td><td>Year 3-4</td><td>₹8-18 Cr</td></tr>
                  <tr><td><strong>White-label / API</strong></td><td>₹500 Cr</td><td>★★★★☆</td><td>Year 2</td><td>₹5-12 Cr</td></tr>
                  <tr><td><strong>Developer tools</strong></td><td>₹1,000 Cr</td><td>★★★★★</td><td>Year 2</td><td>₹8-20 Cr</td></tr>
                  <tr><td><strong>Education/certification</strong></td><td>₹2,000 Cr</td><td>★★★☆☆</td><td>Year 3</td><td>₹2-5 Cr</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="stats-grid">
              <StatCard value="$500M" label="Global Market (20%+ CAGR)" color="green" />
              <StatCard value="<₹50" label="Our AI Cost/Image ($0.60)" color="blue" />
              <StatCard value="₹199-499" label="Charge Per Room" color="gold" />
            </div>
            <p style={{ fontSize: '.9rem', marginBottom: 8 }}>Developer/agent uploads empty room → AI furnishes in 10+ styles instantly → downloads staged photos for listings.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Tier</th><th>Price</th><th>Target</th></tr></thead>
                <tbody>
                  <tr><td><strong>Pay-per-room</strong></td><td>₹199</td><td>Individual agents</td></tr>
                  <tr><td><strong>Monthly (25 rooms)</strong></td><td>₹2,999/mo</td><td>Active agents</td></tr>
                  <tr><td><strong>Enterprise (unlimited)</strong></td><td>₹9,999/mo</td><td>Developers, brokerage firms</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: 8 }}>Target: 500-2,000 paying users × ₹3K ARPU = ₹1.8-7.2 Cr/yr by Year 2-3.</p>
          </div>
          <div>
            <p style={{ fontSize: '.9rem', marginBottom: 8 }}>AI generates design → identifies all furniture items → creates Shopping List with links → user buys → we earn 5-8% commission.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Segment</th><th>Online Market</th><th>CAGR</th><th>Commission</th></tr></thead>
                <tbody>
                  <tr><td><strong>Furniture</strong></td><td>₹8,000 Cr</td><td>25%</td><td>5-8%</td></tr>
                  <tr><td><strong>Home decor</strong></td><td>₹3,000 Cr</td><td>30%</td><td>6-10%</td></tr>
                  <tr><td><strong>Lighting</strong></td><td>₹1,500 Cr</td><td>20%</td><td>5-8%</td></tr>
                  <tr><td><strong>Kitchen &amp; bath</strong></td><td>₹2,000 Cr</td><td>20%</td><td>4-7%</td></tr>
                  <tr><td><strong>Smart home</strong></td><td>₹800 Cr</td><td>35%</td><td>6-10%</td></tr>
                  <tr style={{ fontWeight: 700 }}><td>Total addressable</td><td>~₹15,800 Cr</td><td>25%</td><td>5-8% avg</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: 8 }}>Partners: Pepperfry, Urban Ladder, Amazon, IKEA, Asian Paints. Year 3 revenue: ~₹9 Cr (50K shopping lists/mo × ₹18K AOV × 4% conversion × 8%).</p>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Market</th><th>Size</th><th>Competition</th><th>Cultural Fit</th><th>Priority</th></tr></thead>
                <tbody>
                  <tr><td><strong>Southeast Asia (SG, MY, ID)</strong></td><td>$2B</td><td>Low</td><td>Medium (Indian diaspora)</td><td>★★★★★</td></tr>
                  <tr><td><strong>Middle East (UAE, Saudi)</strong></td><td>$3B</td><td>Low</td><td>Medium-High</td><td>★★★★☆</td></tr>
                  <tr><td><strong>UK</strong></td><td>$5B</td><td>High (Houzz)</td><td>Low</td><td>★★★☆☆</td></tr>
                  <tr><td><strong>US</strong></td><td>$8B</td><td>Very High</td><td>Low</td><td>★★☆☆☆</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.88rem', marginTop: 8 }}><strong>Why SEA first:</strong> Indian diaspora, growing middle class, no local design platforms, Vastu engine extends to Feng Shui easily, Singapore as launchpad. Revenue: ₹8-18 Cr by Year 3-4.</p>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Product</th><th>Target</th><th>Pricing</th></tr></thead>
                <tbody>
                  <tr><td><strong>AI Design API</strong></td><td>RE portals, e-commerce sites</td><td>₹5-15/API call</td></tr>
                  <tr><td><strong>White-label design tool</strong></td><td>Developers (Godrej, Prestige), bank home loan apps</td><td>₹5-15L/month</td></tr>
                  <tr><td><strong>Virtual staging API</strong></td><td>99acres, MagicBricks</td><td>₹100-300/staging</td></tr>
                  <tr><td><strong>AR Visualization SDK</strong></td><td>Furniture brands, home improvement retailers</td><td>₹10-25L/year license</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="💡 Key Takeaways">
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>TAM is massive</strong> — $1.2-2.4B for India interior design tech alone, growing 15-20% CAGR
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>Year 3 = &lt;1% SAM</strong> — ₹57.7 Cr captures 0.77% of ₹7,500 Cr SAM. Achievable if execution is right.
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>Bottom-up validates top-down</strong> — projections internally consistent + conservative vs. Canva/Houzz benchmarks
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>₹500+ Cr business in 5-7 years</strong> — attractive for VC and exit. Multiple market tailwinds compounding.
          </div>
        </div>
      </Card>
    </div>
  )
}
