import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectInvestor() {
  return (
    <div>
      <SectionHeader icon="💎" title="Financial & Investment Analysis" sub="12-slide pitch narrative, seed valuation (₹15-20 Cr), comparable multiples, investor mapping, return analysis & exit paths" />

      <Card title="🎤 Elevator Pitch">
        <div style={{ padding: 20, borderRadius: 12, background: 'var(--green-bg)', border: '2px solid var(--green)', marginBottom: 16 }}>
          <p style={{ fontSize: '1.15rem', fontWeight: 600, fontStyle: 'italic', margin: 0 }}>
            "Canva for home design — AI creates your dream room in 30 seconds, real architects help you build it."
          </p>
        </div>
        <p style={{ fontSize: '.9rem' }}>India's $36B home renovation market runs on WhatsApp and word-of-mouth. 10M+ homes renovated annually — virtually none use digital design tools. Livspace built a $1.2B company serving &lt;1% of this market. <strong>We attack the other 99%.</strong></p>
      </Card>

      <Card title="📊 Pitch Deck — Key Slides">
        <Tabs tabs={['Problem → Solution', 'Market & Why Now', 'Business Model', 'Financials', 'Competitive Matrix', 'The Ask']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Step</th><th>What Happens</th><th>Magic Moment</th></tr></thead>
                <tbody>
                  <tr><td><strong>1. Input Your Room</strong></td><td>Enter dimensions manually or scan with AR</td><td>"My room, in digital form, in 2 minutes"</td></tr>
                  <tr><td><strong>2. AI Designs Your Space</strong></td><td>Get 3-5 photorealistic design options matched to style + budget</td><td>"This is what my home COULD look like"</td></tr>
                  <tr><td><strong>3. Connect with a Pro</strong></td><td>Browse verified architects, book consultation, collaborate</td><td>"I found an expert who sees what I see"</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: 8 }}><em>"From blank room to designed home in under 5 minutes."</em></p>
          </div>
          <div>
            <div className="stats-grid">
              <StatCard value="$5.5–6.5B" label="Global TAM" color="green" />
              <StatCard value="₹7,500 Cr" label="India SAM ($900M)" color="blue" />
              <StatCard value="406,889" label="Homes Delivered (FY25 Top 9)" color="gold" />
              <StatCard value="<2%" label="Digital Penetration" color="red" />
            </div>
            <h3 className="card-subtitle">Why Now — 4 Forces Converging</h3>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>🤖 Generative AI</strong> — Stable Diffusion + ControlNet make instant room design possible (impossible pre-2022)</div>
              <div className="box box-purple" style={{ borderRadius: 12 }}><strong>📱 AR Democratized</strong> — Apple RoomPlan API + LiDAR on mainstream phones</div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}><strong>🇮🇳 India Digital</strong> — 10B+ UPI/month; Urban Company proved Indians book home services via apps</div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}><strong>🏠 Post-COVID Home</strong> — WFH permanent; unprecedented home investment boom</div>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Stream</th><th>Model</th><th>Year 1</th><th>Year 3</th></tr></thead>
                <tbody>
                  <tr><td><strong>Consumer SaaS</strong></td><td>₹499-1,999/mo subscriptions</td><td>54%</td><td>48%</td></tr>
                  <tr><td><strong>Architect SaaS</strong></td><td>₹1,499-4,999/mo</td><td>20%</td><td>16%</td></tr>
                  <tr><td><strong>Consultation commissions</strong></td><td>15% take rate</td><td>19%</td><td>21%</td></tr>
                  <tr><td><strong>Affiliate commerce</strong></td><td>5-8% on shopping lists</td><td>7%</td><td>10%</td></tr>
                  <tr><td><strong>Enterprise B2B</strong></td><td>Developer virtual staging</td><td>0%</td><td>5%</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 8, fontWeight: 600 }}>Blended gross margin: 65-78% (vs. Livspace's 15-25%)</p>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
                <tbody>
                  <tr><td><strong>Users</strong></td><td>150K</td><td>600K</td><td>2M</td></tr>
                  <tr><td><strong>Revenue</strong></td><td>₹3 Cr ($360K)</td><td>₹16 Cr ($1.9M)</td><td>₹58 Cr ($6.8M)</td></tr>
                  <tr><td><strong>Gross Margin</strong></td><td>65-70%</td><td>70-75%</td><td>72-78%</td></tr>
                  <tr><td><strong>EBITDA</strong></td><td>Negative</td><td>+₹1-4 Cr</td><td>+₹16-23 Cr</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 8, fontSize: '.88rem' }}>Path to profitability: Month 18-22. Consumer LTV:CAC = 19:1. CAC payback: &lt;1 month.</p>
          </div>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>"No one combines all three in India."</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th></th><th>Measure Room</th><th>AI Design</th><th>Marketplace</th><th>India-Focused</th></tr></thead>
                <tbody>
                  <tr><td><strong>Us</strong></td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
                  <tr><td><strong>Houzz</strong></td><td>❌</td><td>❌</td><td>✅</td><td>❌</td></tr>
                  <tr><td><strong>Livspace</strong></td><td>❌</td><td>❌</td><td>Managed only</td><td>✅</td></tr>
                  <tr><td><strong>Planner 5D</strong></td><td>❌</td><td>Emerging</td><td>❌</td><td>❌</td></tr>
                  <tr><td><strong>Magicplan</strong></td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
                  <tr><td><strong>Interior AI</strong></td><td>❌</td><td>✅</td><td>❌</td><td>❌</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div style={{ padding: 16, borderRadius: 12, background: 'var(--green-bg)', border: '2px solid var(--green)', marginBottom: 12 }}>
              <strong>Raising: ₹3-5 Cr ($350-600K) — Seed Round</strong>
            </div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Use of Funds</th><th>%</th><th>What It Enables</th></tr></thead>
                <tbody>
                  <tr><td><strong>Engineering team</strong> (6 people, 6 months)</td><td>55%</td><td>MVP → public launch → mobile app</td></tr>
                  <tr><td><strong>AI/ML development</strong></td><td>15%</td><td>Fine-tune design models on India data</td></tr>
                  <tr><td><strong>Marketing</strong> (launch + 6 months)</td><td>15%</td><td>50K users, 500 architects</td></tr>
                  <tr><td><strong>Operations + legal</strong></td><td>10%</td><td>Company setup, compliance, infra</td></tr>
                  <tr><td><strong>Buffer</strong></td><td>5%</td><td></td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Seed Milestones</h3>
            <p style={{ fontSize: '.88rem' }}>✅ Public web app launch • ✅ 50K registered users • ✅ 500 listed architects (3 cities) • ✅ ₹10L MRR by Month 6 • ✅ PMF validation • ✅ Ready for Series A (₹25-40 Cr)</p>
          </div>
        </Tabs>
      </Card>

      <Card title="💵 Seed Investor Landscape">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Category</th><th>Notable Funds</th><th>Typical Check</th></tr></thead>
            <tbody>
              <tr><td><strong>Consumer Tech</strong></td><td>Sequoia Surge, Accel, Matrix Partners</td><td>₹2-10 Cr</td></tr>
              <tr><td><strong>PropTech Focus</strong></td><td>Fireside Ventures, India Quotient</td><td>₹1-5 Cr</td></tr>
              <tr><td><strong>AI/Deep Tech</strong></td><td>pi Ventures, Exfinity Ventures</td><td>₹2-8 Cr</td></tr>
              <tr><td><strong>Angel Networks</strong></td><td>Indian Angel Network, Mumbai Angels</td><td>₹25L-2 Cr</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">Recommended Seed Terms</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
            <tbody>
              <tr><td>Pre-money valuation</td><td>₹15-20 Cr</td></tr>
              <tr><td>Raise amount</td><td>₹2-4 Cr</td></tr>
              <tr><td>Post-money</td><td>₹17-24 Cr</td></tr>
              <tr><td>Dilution</td><td>12-20%</td></tr>
              <tr><td>Instrument</td><td>iSAFE at ₹15-20 Cr valuation cap</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📈 Comparable Valuations">
        <Tabs tabs={['Design/Creative', 'Marketplaces', 'India PropTech', 'Multiple Ranges']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Valuation</th><th>Revenue</th><th>EV/Revenue</th><th>Growth</th></tr></thead>
                <tbody>
                  <tr><td><strong>Canva</strong></td><td>$26B</td><td>~$2.3B</td><td>11.3x</td><td>~35%</td></tr>
                  <tr><td><strong>Adobe</strong></td><td>~$220B</td><td>$21.5B</td><td>10.2x</td><td>11%</td></tr>
                  <tr><td><strong>Figma</strong> (acq.)</td><td>$20B</td><td>~$600M</td><td>33x</td><td>~50%</td></tr>
                  <tr><td><strong>Unity</strong></td><td>~$20B</td><td>$2.0B</td><td>10x</td><td>15%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Valuation</th><th>Revenue</th><th>EV/Revenue</th><th>Growth</th></tr></thead>
                <tbody>
                  <tr><td><strong>Houzz</strong></td><td>$4B</td><td>~$450M</td><td>8-10x</td><td>Flat</td></tr>
                  <tr><td><strong>Zillow</strong></td><td>~$15B</td><td>$2.2B</td><td>6.8x</td><td>12%</td></tr>
                  <tr><td><strong>Urban Company</strong></td><td>$2.8B</td><td>₹1,000+ Cr</td><td>20-23x</td><td>~40%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Valuation</th><th>Revenue</th><th>Multiple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Livspace</strong></td><td>$1.2B</td><td>₹1,148 Cr</td><td>7-8x</td></tr>
                  <tr><td><strong>NoBroker</strong></td><td>$1B</td><td>~₹400 Cr</td><td>~18x</td></tr>
                  <tr><td><strong>MyGate</strong></td><td>~$400M</td><td>~₹100 Cr</td><td>~30x</td></tr>
                  <tr><td><strong>Infra.Market</strong></td><td>$2.5B</td><td>₹15,000 Cr</td><td>~1.3x</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Category</th><th>EV/Revenue Range</th><th>Our Fit</th></tr></thead>
                <tbody>
                  <tr><td><strong>SaaS (consumer, high growth)</strong></td><td>8-15x</td><td>✅ Strong fit</td></tr>
                  <tr><td><strong>AI-native SaaS</strong></td><td>10-25x</td><td>✅ Strong fit</td></tr>
                  <tr><td><strong>India tech (high growth)</strong></td><td>15-30x</td><td>✅ Strong fit (seed/A)</td></tr>
                  <tr><td><strong>Marketplace (scaled)</strong></td><td>4-8x</td><td>⚠️ Marketplace early</td></tr>
                  <tr><td><strong>Est. at Series A: 12-20x revenue</strong></td><td></td><td>vs Livspace 7-8x (higher margin)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="📊 Year 3 Valuation Scenarios">
        <BarChart data={[
          { label: 'Distressed', width: '10%', text: '₹75 Cr (3.75x seed return)', color: 'linear-gradient(90deg, #555, #888)' },
          { label: 'Bear', width: '30%', text: '₹240 Cr (12x seed return)', color: 'linear-gradient(90deg, #922b21, #ec7063)' },
          { label: 'Base', width: '60%', text: '₹692 Cr (35x seed return)', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Bull', width: '100%', text: '₹1,275 Cr (60x seed return)', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
        ]} />
        <p style={{ fontSize: '.88rem', color: 'var(--text-light)', marginTop: 8 }}>Seed investor at ₹3 Cr into ₹18 Cr post-money (16.7% ownership). After dilution from Series A/B → ~8-10% stake → ₹55-70 Cr value at base case = <strong>18-23x return</strong>.</p>
      </Card>

      <Card title="🚪 Exit Strategy">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Exit Path</th><th>Timeline</th><th>Potential Acquirers / Route</th><th>Expected Range</th></tr></thead>
            <tbody>
              <tr><td><strong>Tier 1: Strategic Acquisition</strong></td><td>Year 3-5</td><td>Livspace, Houzz, Asian Paints Digital, Info Edge (99acres)</td><td>₹300-800 Cr</td></tr>
              <tr><td><strong>Tier 2: Tech Acquisition</strong></td><td>Year 3-5</td><td>Google (Nest), Amazon (home), Jio Platforms</td><td>₹200-500 Cr</td></tr>
              <tr><td><strong>Tier 3: Acqui-hire Floor</strong></td><td>Year 2-3</td><td>Any PropTech/AI company (team + tech value)</td><td>₹50-100 Cr</td></tr>
              <tr><td><strong>IPO Path</strong></td><td>Year 7-10</td><td>NSE/BSE listing at ₹500+ Cr revenue</td><td>₹2,000+ Cr</td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
