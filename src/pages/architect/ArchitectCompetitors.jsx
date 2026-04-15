import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectCompetitors() {
  return (
    <div>
      <SectionHeader icon="⚔️" title="Competitive Intelligence" sub="Deep teardowns of Livspace ($1.2B, 6 vulnerabilities) & Houzz ($4B, 4-phase evolution), emerging threats, partnership landscape" />

      <Card title="🦄 Livspace Teardown">
        <div className="stats-grid">
          <StatCard value="$1.2B" label="Valuation (KKR-led, 2022)" color="green" />
          <StatCard value="₹1,148 Cr" label="FY23 Revenue ($140M)" color="gold" />
          <StatCard value="$450M" label="Total Funding Raised" color="blue" />
          <StatCard value="15-25%" label="Gross Margin (Low)" color="red" />
        </div>
        <Tabs tabs={['Funding History', 'Business Model', 'Vulnerabilities', 'Our Advantage']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Round</th><th>Date</th><th>Amount</th><th>Key Investors</th><th>Est. Valuation</th></tr></thead>
                <tbody>
                  <tr><td>Seed</td><td>2014</td><td>$4.6M</td><td>Jungle Ventures, Bessemer</td><td>~$15-20M</td></tr>
                  <tr><td>Series B</td><td>2016</td><td>$15M</td><td>Jungle Ventures, Bessemer</td><td>~$80-100M</td></tr>
                  <tr><td>Series C</td><td>2018</td><td>$70M</td><td>Goldman Sachs, TPG Growth</td><td>~$250-300M</td></tr>
                  <tr><td>Series E</td><td>2021</td><td>$90M</td><td>KKR, Jungle Ventures</td><td>~$800M-1B</td></tr>
                  <tr><td><strong>Series F</strong></td><td><strong>2022</strong></td><td><strong>$180-200M</strong></td><td><strong>KKR (led), IKEA parent (Ingka)</strong></td><td><strong>$1.2B (Unicorn)</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: 8 }}>$450M raised = very capital-intensive model. Revenue-to-funding ratio only ~2.5x. Not highly capital-efficient.</p>
          </div>
          <div>
            <p style={{ marginBottom: 12 }}>Managed interior design: Customer Discovery → Experience Center Visit → Free Design Consultation → Material Procurement → Manufacturing → Installation → Quality Check</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Element</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td><strong>Experience Centers</strong></td><td>30+ physical showrooms — $200K-500K setup per city</td></tr>
                  <tr><td><strong>Design Team</strong></td><td>~500-1,000 in-house designers (not marketplace — employed)</td></tr>
                  <tr><td><strong>Supply Chain</strong></td><td>150+ manufacturing partners for modular furniture</td></tr>
                  <tr><td><strong>Revenue Model</strong></td><td>60-70% design+execution fees, 20-25% material commissions, 5-10% consultation fees</td></tr>
                  <tr><td><strong>Avg Project Value</strong></td><td>₹5-15L per project</td></tr>
                  <tr><td><strong>CAC</strong></td><td>₹15,000-30,000 (requires physical consultations)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>Vulnerability</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td><strong>Prices out 70%+ of market</strong></td><td>₹5L+ minimum projects = only premium segment. Budget (₹1-3L) and mid-range (₹3-5L) ignored.</td></tr>
                  <tr><td>2</td><td><strong>No self-serve experience</strong></td><td>Can't explore designs, get quick opinions, or design on your own schedule. Requires commitment to their process.</td></tr>
                  <tr><td>3</td><td><strong>Innovator's Dilemma</strong></td><td>Building self-serve AI would cannibalize managed services, conflict with experience centers, undermine designer workforce.</td></tr>
                  <tr><td>4</td><td><strong>Low margins = limited reinvestment</strong></td><td>15-25% gross margin vs our 65-78%. We can spend 3-4x more per rupee on product development.</td></tr>
                  <tr><td>5</td><td><strong>Physical scaling = expensive</strong></td><td>Each new city needs experience center + local contractors + supply chain. We need: list local architects + turn on digital ads.</td></tr>
                  <tr><td>6</td><td><strong>EBITDA still negative</strong></td><td>~₹200-400 Cr losses FY23. Targeting breakeven FY25-26. Revenue scales linearly with headcount.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Dimension</th><th>Livspace</th><th>Our Platform</th></tr></thead>
                <tbody>
                  <tr><td><strong>Addressable market</strong></td><td>₹5L+ projects only</td><td>₹50K-5L+ (10x larger market)</td></tr>
                  <tr><td><strong>Gross margin</strong></td><td>15-25%</td><td>65-78%</td></tr>
                  <tr><td><strong>Self-serve?</strong></td><td>❌ No</td><td>✅ Core value prop</td></tr>
                  <tr><td><strong>AI/AR innovation</strong></td><td>❌ None</td><td>✅ Core differentiator</td></tr>
                  <tr><td><strong>Tier 2-3 cities</strong></td><td>Metro-only (top 6)</td><td>Digital-first: any city</td></tr>
                  <tr><td><strong>Time to first design</strong></td><td>Days/weeks</td><td>&lt;3 minutes</td></tr>
                  <tr><td><strong>Scalability</strong></td><td>Linear (headcount)</td><td>Exponential (AI + marketplace)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🏠 Houzz Teardown">
        <div className="stats-grid">
          <StatCard value="$4B" label="Peak Valuation (2017)" color="blue" />
          <StatCard value="65M" label="Monthly Users" color="green" />
          <StatCard value="$614M" label="Total Funding" color="gold" />
          <StatCard value="2.7M" label="Listed Professionals" color="purple" />
        </div>
        <Tabs tabs={['4-Phase Evolution', 'Revenue Breakdown', 'What\'s Missing', 'Why Not India']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Phase</th><th>Period</th><th>What</th><th>Monetization</th></tr></thead>
                <tbody>
                  <tr><td><strong>1. Inspiration</strong></td><td>2009-2012</td><td>Photo-sharing platform (25M+ photos). "The Pinterest for Home"</td><td>None (audience building)</td></tr>
                  <tr><td><strong>2. Marketplace</strong></td><td>2012-2015</td><td>Professional directory + reviews. "Yelp Meets LinkedIn for Home"</td><td>Sponsored listings, premium profiles, lead gen ($50-100M)</td></tr>
                  <tr><td><strong>3. Commerce</strong></td><td>2015-2018</td><td>"Shop the Look" — product marketplace, Visual Match</td><td>E-commerce commissions 15-25% ($100-200M total)</td></tr>
                  <tr><td><strong>4. SaaS (Houzz Pro)</strong></td><td>2018-Present</td><td>CRM, invoicing, project mgmt, lead mgmt, website builder. "Salesforce for Home Pros"</td><td>SaaS $65-399/mo — now 35-40% of revenue ($150-200M)</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: 8 }}><strong>Lesson:</strong> Content first → marketplace → commerce → SaaS. Professional SaaS is stickier than consumer SaaS. Houzz Pro stabilized their revenue.</p>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Stream</th><th>Revenue (Est.)</th><th>% of Total</th><th>Trend</th></tr></thead>
                <tbody>
                  <tr><td><strong>Houzz Pro subscriptions</strong></td><td>$150-200M</td><td>35-40%</td><td>↑ Growing (strategic focus)</td></tr>
                  <tr><td><strong>Advertising/sponsored</strong></td><td>$100-150M</td><td>25-30%</td><td>→ Stable</td></tr>
                  <tr><td><strong>Product commerce</strong></td><td>$60-100M</td><td>15-20%</td><td>↓ Declining</td></tr>
                  <tr><td><strong>Lead generation</strong></td><td>$40-60M</td><td>10-12%</td><td>→ Stable</td></tr>
                  <tr style={{ fontWeight: 600 }}><td><strong>Total</strong></td><td><strong>$400-500M</strong></td><td></td><td>Gross margin: 65-75%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Gap</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td><strong>AI design generation</strong></td><td>Users browse photos but can't generate custom designs for THEIR room</td></tr>
                  <tr><td><strong>Room measurement</strong></td><td>No way to input actual room dimensions</td></tr>
                  <tr><td><strong>India-specific anything</strong></td><td>No Vastu, no Indian brands, no ₹ pricing, no Indian styles</td></tr>
                  <tr><td><strong>Budget-aware design</strong></td><td>Can't say "show me designs for ₹5L budget"</td></tr>
                  <tr><td><strong>Consumer design tools</strong></td><td>3D planner behind Houzz Pro paywall only</td></tr>
                  <tr><td><strong>Video consultation</strong></td><td>No integrated video call with professionals</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>Reason</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td><strong>$4B valuation overhang</strong> — focused on proving existing markets, not new bets</td></tr>
                  <tr><td>2</td><td><strong>India's low ARPU</strong> — US pro pays $200/mo; Indian pro might pay $30/mo</td></tr>
                  <tr><td>3</td><td><strong>Livspace owns the brand</strong> — entering means competing with a unicorn incumbent</td></tr>
                  <tr><td>4</td><td><strong>Operational/efficiency mode</strong> — multiple layoffs since 2018</td></tr>
                  <tr><td>5</td><td><strong>No funding since 2017</strong> (8+ years) — no cash for expansion</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🚨 Emerging Threats (Doc 19)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Threat Category</th><th>Players</th><th>Probability</th><th>Response</th></tr></thead>
            <tbody>
              <tr><td><strong>Livspace Self-Serve</strong></td><td>Livspace</td><td><span className="badge badge-red">High</span></td><td>Their managed-services DNA conflicts with self-serve. Innovator's Dilemma. Be faster, cheaper, better UX.</td></tr>
              <tr><td><strong>AI-Native Startups</strong></td><td>Interior AI, RoomGPT, new entrants</td><td><span className="badge badge-yellow">Medium</span></td><td>Speed + India data moat. AI-only tools lack marketplace.</td></tr>
              <tr><td><strong>Big Tech</strong></td><td>Jio, Tata Digital</td><td><span className="badge badge-yellow">Medium</span></td><td>Vertical depth beats horizontal breadth. They can't match India-specific AI.</td></tr>
              <tr><td><strong>Paint/Home Brands</strong></td><td>Asian Paints, Berger</td><td><span className="badge badge-blue">Low-Med</span></td><td>Partner, don't compete. Their digital tools are single-vendor.</td></tr>
              <tr><td><strong>Global Expansion</strong></td><td>Houzz, Canva Home</td><td><span className="badge badge-green">Low</span></td><td>India-first depth advantage. Houzz passive for years.</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🤝 Partnership Landscape (Doc 20)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Tier</th><th>Partner Type</th><th>Specific Targets</th><th>Revenue Potential</th></tr></thead>
            <tbody>
              <tr><td><strong>Tier 1: Strategic</strong></td><td>RE developers, paint brands</td><td>DLF, Godrej, Prestige, Asian Paints, Berger</td><td>₹5-15 Cr/year</td></tr>
              <tr><td><strong>Tier 2: Distribution</strong></td><td>Furniture, home improvement</td><td>IKEA, Pepperfry, Urban Ladder, HomeCentre</td><td>₹2-8 Cr/year</td></tr>
              <tr><td><strong>Tier 3: Community</strong></td><td>Colleges, wedding platforms, influencers</td><td>NIT, SPA Delhi, WedMeGood, design influencers</td><td>₹50L-2 Cr/year</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📊 Competitive Positioning Map">
        <BarChart data={[
          { label: 'Price Accessibility', width: '90%', text: 'Best — serves ₹50K-5L+ (vs Livspace ₹5L+)', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'AI Capability', width: '90%', text: 'Highest — no competitor has India-specific gen AI', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Self-Serve UX', width: '95%', text: 'Best in class — room to design in <3 min', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Marketplace Depth', width: '60%', text: 'Building — Houzz has 2.7M pros; we start at zero', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
          { label: 'Tier 2-3 Cities', width: '95%', text: 'Blue ocean — digital-first, zero physical infra needed', color: 'linear-gradient(90deg, #922b21, #ec7063)' },
        ]} />
      </Card>
    </div>
  )
}
