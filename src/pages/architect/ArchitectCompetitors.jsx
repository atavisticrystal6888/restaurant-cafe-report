import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectCompetitors() {
  return (
    <div>
      <SectionHeader icon="⚔️" title="Competitive Intelligence" sub="Full landscape map (15+ competitors), Livspace & Houzz teardowns, Planner 5D/Magicplan/Foyr Neo deep dives, AI-native startups, 14-feature matrix, global comparables (Canva/Pinterest/Zillow/Urban Company), pricing, partnerships" />

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

      <Card title="�️ Full Competitive Landscape">
        <Tabs tabs={['Direct Competitors', 'India Managed Interior', 'AI-Native Startups', 'Indirect Competitors']}>
          <div>
            <p style={{ fontSize: '.88rem', marginBottom: 8 }}>Companies overlapping 2+ of: Design Tool + Marketplace + AI</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Design Tool</th><th>AI Design</th><th>Marketplace</th><th>AR</th><th>India Focus</th><th>Threat</th></tr></thead>
                <tbody>
                  <tr><td><strong>Houzz</strong></td><td>Basic</td><td>Basic</td><td>★★★★★</td><td>Basic</td><td>Passive</td><td>★★★★☆</td></tr>
                  <tr><td><strong>Livspace</strong></td><td>Internal only</td><td>No self-serve</td><td>Managed</td><td>No</td><td>★★★★★</td><td>★★★★★</td></tr>
                  <tr><td><strong>Planner 5D</strong></td><td>★★★★☆</td><td>Emerging</td><td>None</td><td>No</td><td>No</td><td>★★★☆☆</td></tr>
                  <tr><td><strong>Magicplan</strong></td><td>★★★☆☆</td><td>No</td><td>None</td><td>★★★★★</td><td>No</td><td>★★☆☆☆</td></tr>
                  <tr><td><strong>Foyr Neo</strong></td><td>★★★★★</td><td>AI-assisted</td><td>None</td><td>No</td><td>India-origin</td><td>★★★☆☆</td></tr>
                  <tr><td><strong>HomeByMe</strong></td><td>★★★★☆</td><td>Limited</td><td>None</td><td>No</td><td>No</td><td>★★☆☆☆</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '.88rem', marginBottom: 8 }}>All managed-service models (high-touch, low-margin). We're a self-serve platform (low-touch, high-margin). Different business models, overlapping customers.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Revenue (Est.)</th><th>Model</th><th>Target Segment</th><th>Threat</th></tr></thead>
                <tbody>
                  <tr><td><strong>Livspace</strong></td><td>₹1,148 Cr FY23</td><td>Full managed end-to-end</td><td>Premium (₹5-20L)</td><td>★★★★★</td></tr>
                  <tr><td><strong>HomeLane</strong></td><td>₹500-800 Cr</td><td>Managed + modular</td><td>Mid-to-premium</td><td>★★★★☆</td></tr>
                  <tr><td><strong>DesignCafe</strong></td><td>₹300-500 Cr</td><td>Managed, subscription</td><td>Mid-range</td><td>★★★☆☆</td></tr>
                  <tr><td><strong>Bonito Designs</strong></td><td>₹200-400 Cr</td><td>Managed, regional</td><td>Premium, Bangalore</td><td>★★★☆☆</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', fontWeight: 600, marginTop: 8 }}>We compete for the customer they say "no" to — budget (₹1-3L), DIY-with-guidance, and "just need an opinion."</p>
          </div>
          <div>
            <p style={{ fontSize: '.88rem', marginBottom: 8 }}>AI-only tools will commoditize quickly. The moat is NOT AI design generation alone — it's combining AI + measurement + marketplace + India-specific data.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Product</th><th>Strength</th><th>Weakness</th><th>Threat</th></tr></thead>
                <tbody>
                  <tr><td><strong>Interior AI</strong></td><td>Upload photo → AI redesign</td><td>Viral marketing, simple UX</td><td>One feature only; no marketplace</td><td>★★★☆☆</td></tr>
                  <tr><td><strong>RoomGPT</strong></td><td>Open-source AI redesign</td><td>Free, open-source community</td><td>Toy/demo quality; no business model</td><td>★★☆☆☆</td></tr>
                  <tr><td><strong>Reimagine Home</strong></td><td>AI redesign + virtual staging</td><td>Good design quality</td><td>No India focus; no marketplace</td><td>★★★☆☆</td></tr>
                  <tr><td><strong>Collov AI</strong></td><td>AI interior visualization</td><td>Growing features</td><td>Early-stage; no marketplace</td><td>★★☆☆☆</td></tr>
                  <tr><td><strong>DecorAI</strong></td><td>AI room design from photo</td><td>Quick generation</td><td>Single feature; commoditized</td><td>★★☆☆☆</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Category</th><th>Overlap</th></tr></thead>
                <tbody>
                  <tr><td><strong>Urban Company</strong></td><td>Home services marketplace</td><td>Established marketplace infra in India; could expand to design</td></tr>
                  <tr><td><strong>Pinterest</strong></td><td>Design inspiration</td><td>Top-of-funnel competitor — users may stay there</td></tr>
                  <tr><td><strong>Instagram</strong></td><td>Inspiration + architect discovery</td><td>Existing "solution" for finding designers</td></tr>
                  <tr><td><strong>Canva</strong></td><td>Design tool (general)</td><td>Could expand to interior/spatial design</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🔍 Competitor Deep Dives — Planner 5D, Magicplan, Foyr Neo">
        <Tabs tabs={['Planner 5D', 'Magicplan', 'Foyr Neo']}>
          <div>
            <div className="stats-grid">
              <StatCard value="80M+" label="Projects Created" color="green" />
              <StatCard value="$5-10M" label="Revenue (Est.)" color="blue" />
              <StatCard value="$7-25" label="Monthly Sub" color="gold" />
            </div>
            <p style={{ fontSize: '.9rem', marginBottom: 8 }}>2D + 3D room planning. Drag-and-drop furniture. VR walkthroughs. AI features emerging.</p>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>Strengths:</strong> Large global user base. Good consumer UI/UX. Cross-platform. AI features emerging.</div>
              <div className="box" style={{ borderRadius: 12, background: '#fff0f0' }}><strong>Weaknesses:</strong> No marketplace (pure tool). No India features. Subscription-only revenue. No AR/measurement. No professional layer.</div>
            </div>
            <p style={{ fontSize: '.85rem', marginTop: 8 }}><strong>Threat: ★★★☆☆</strong> — Could add AI and become stronger, but unlikely to build marketplace. We differentiate with full platform.</p>
          </div>
          <div>
            <div className="stats-grid">
              <StatCard value="Apple" label="Best App 2017" color="blue" />
              <StatCard value="$10-20M" label="Revenue (Est.)" color="green" />
              <StatCard value="B2B" label="Focus" color="gold" />
            </div>
            <p style={{ fontSize: '.9rem', marginBottom: 8 }}>Best-in-class AR room scanning. Automated floor plans from scan. Field services + insurance focus.</p>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>Strengths:</strong> AR measurement market leader. Mature LiDAR + standard camera tech. Professional customer base.</div>
              <div className="box" style={{ borderRadius: 12, background: '#fff0f0' }}><strong>Weaknesses:</strong> B2B focused — not consumer-friendly. No design generation. No marketplace. Not India-focused.</div>
            </div>
            <p style={{ fontSize: '.85rem', marginTop: 8 }}><strong>Threat: ★★☆☆☆</strong> — Different market (B2B field services). Potential partner or acquisition target, not a threat.</p>
          </div>
          <div>
            <div className="stats-grid">
              <StatCard value="Hyderabad" label="India-Origin" color="green" />
              <StatCard value="$3-8M" label="Revenue (Est.)" color="blue" />
              <StatCard value="$49-149" label="Monthly Sub" color="gold" />
            </div>
            <p style={{ fontSize: '.9rem', marginBottom: 8 }}>Professional-grade 3D rendering. Fast renders (minutes not hours). Pre-built templates + project management.</p>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>Strengths:</strong> India-origin (understands market). High-quality rendering. Good price for professionals.</div>
              <div className="box" style={{ borderRadius: 12, background: '#fff0f0' }}><strong>Weaknesses:</strong> Built for professionals, not consumers. No marketplace. No AI generation (manual process). Small user base.</div>
            </div>
            <p style={{ fontSize: '.85rem', marginTop: 8 }}><strong>Threat: ★★★☆☆</strong> — Could pivot to consumer market or add AI. Being India-based is an advantage. Watch closely.</p>
          </div>
        </Tabs>
      </Card>

      <Card title="✅ Feature Comparison Matrix">
        <div className="table-wrap">
          <table style={{ fontSize: '.82rem' }}>
            <thead><tr><th>Feature</th><th>Us</th><th>Houzz</th><th>Livspace</th><th>Planner 5D</th><th>Magicplan</th><th>Foyr Neo</th><th>Interior AI</th></tr></thead>
            <tbody>
              <tr><td><strong>AI from room dimensions</strong></td><td>✅</td><td>❌</td><td>❌</td><td>Emerging</td><td>❌</td><td>❌</td><td>Partial</td></tr>
              <tr><td><strong>AI from room photo</strong></td><td>✅</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td><td>✅</td></tr>
              <tr><td><strong>Manual floor plan</strong></td><td>✅</td><td>❌</td><td>❌</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td></tr>
              <tr><td><strong>AR room scanning</strong></td><td>✅ (Ph 2)</td><td>Basic</td><td>❌</td><td>❌</td><td>✅</td><td>❌</td><td>❌</td></tr>
              <tr><td><strong>Blueprint upload</strong></td><td>✅ (Ph 2)</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
              <tr><td><strong>3D rendered views</strong></td><td>✅</td><td>Limited</td><td>Internal</td><td>✅</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr><td><strong>Vastu compliance</strong></td><td>✅</td><td>❌</td><td>Manual</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
              <tr><td><strong>Architect marketplace</strong></td><td>✅</td><td>✅</td><td>Managed</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
              <tr><td><strong>Video consultation</strong></td><td>✅</td><td>❌</td><td>Offline</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
              <tr><td><strong>Budget-based design</strong></td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
              <tr><td><strong>Shopping lists</strong></td><td>✅</td><td>✅</td><td>Internal</td><td>❌</td><td>❌</td><td>❌</td><td>❌</td></tr>
              <tr><td><strong>Indian styles/brands</strong></td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>❌</td><td>Partial</td><td>❌</td></tr>
              <tr><td><strong>Free tier</strong></td><td>✅</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td><td>❌</td><td>✅</td></tr>
            </tbody>
          </table>
        </div>
        <div style={{ padding: 12, borderRadius: 12, background: 'var(--green-bg)', border: '2px solid var(--green)', marginTop: 12 }}>
          <strong>Key Insight:</strong> No direct all-in-one competitor exists in India. The triad (measurement + AI design + marketplace) is genuinely unique. No one combines all three.
        </div>
      </Card>

      <Card title="💰 Pricing Comparison">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Product</th><th>Free Tier</th><th>Paid Tier</th><th>Enterprise</th></tr></thead>
            <tbody>
              <tr style={{ background: 'var(--green-bg)' }}><td><strong>Us (planned)</strong></td><td>2 AI designs/mo, browse architects</td><td>₹800-2,500/mo ($10-30)</td><td>Custom</td></tr>
              <tr><td><strong>Houzz</strong></td><td>Free browsing + free pro listing</td><td>Houzz Pro: $65-399/mo</td><td>Custom</td></tr>
              <tr><td><strong>Livspace</strong></td><td>Free consultation</td><td>₹5-20L per project (not subscription)</td><td>B2B deals</td></tr>
              <tr><td><strong>Planner 5D</strong></td><td>Limited designs</td><td>$7-25/mo</td><td>—</td></tr>
              <tr><td><strong>Magicplan</strong></td><td>Limited scans</td><td>$10-30/mo (B2B)</td><td>Custom</td></tr>
              <tr><td><strong>Foyr Neo</strong></td><td>Free trial</td><td>$49-149/mo</td><td>—</td></tr>
              <tr><td><strong>Interior AI</strong></td><td>Limited generations</td><td>$19-39/mo</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🌍 Global Comparables — Lessons from Winners & Losers">
        <Tabs tabs={['Canva (Closest Analog)', 'Pinterest & Zillow', 'Urban Company', 'Success vs Failure Patterns']}>
          <div>
            <div className="stats-grid">
              <StatCard value="$26B" label="Valuation (2024)" color="green" />
              <StatCard value="170M" label="Monthly Active Users" color="blue" />
              <StatCard value="$2.3B" label="ARR" color="gold" />
              <StatCard value="~5%" label="Free→Paid Conversion" color="purple" />
            </div>
            <p style={{ fontSize: '.9rem', fontWeight: 600, marginBottom: 8 }}>Canva is the closest model to what we're building — a freemium design tool that democratized an expert skill, in a different domain.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Canva Lesson</th><th>Our Application</th></tr></thead>
                <tbody>
                  <tr><td><strong>Free tier that's genuinely useful</strong> — not a demo</td><td>2 free AI designs/mo must be genuinely useful, not crippled</td></tr>
                  <tr><td><strong>Virality built into product</strong> — shared designs have Canva logo</td><td>Every shared design from our app = free marketing (watermark on free tier)</td></tr>
                  <tr><td><strong>Templates solve "blank page problem"</strong></td><td>AI designs solve the "blank room problem"</td></tr>
                  <tr><td><strong>Non-designers produce professional output</strong></td><td>Non-architects produce professional-looking interior designs</td></tr>
                  <tr><td><strong>Marketplace for templates</strong> (Canva Creators)</td><td>Marketplace for architects (our creator economy)</td></tr>
                  <tr><td><strong>AI as enhancement, not replacement</strong></td><td>AI suggests designs; architects finalize — same philosophy</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Canva Growth Timeline</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Year</th><th>Users</th><th>Revenue</th><th>Milestone</th></tr></thead>
                <tbody>
                  <tr><td>2013</td><td>750K</td><td>~$0</td><td>Launch — free graphic design tool</td></tr>
                  <tr><td>2015</td><td>8M</td><td>~$10M</td><td>Canva for Work (paid tier)</td></tr>
                  <tr><td>2017</td><td>10M</td><td>~$100M</td><td>Enterprise + print marketplace</td></tr>
                  <tr><td>2019</td><td>30M</td><td>~$500M</td><td>Massive organic growth; $6B</td></tr>
                  <tr><td>2024</td><td>170M</td><td>~$2.3B</td><td>AI features (Magic Design) accelerating</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Pinterest — Validates Massive Demand</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Fact</th><th>Lesson</th></tr></thead>
                <tbody>
                  <tr><td>500M+ MAU, $3.1B revenue</td><td>Home is #1 category — 47% of users use it for home ideas</td></tr>
                  <tr><td>Inspiration without action = frustration</td><td>We close the loop: AI design → architect booking → execution</td></tr>
                  <tr><td>Commerce integration is hard for them</td><td>We have a shorter path: design → shopping list → purchase</td></tr>
                  <tr><td>Personalization drives engagement</td><td>Our "Design DNA": AI learns user prefs → better suggestions</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Zillow — Cautionary Tale</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Phase</th><th>What Happened</th></tr></thead>
                <tbody>
                  <tr><td>Started as</td><td>Free property listings (content) → massive traffic</td></tr>
                  <tr><td>Monetized by</td><td>Selling leads to RE agents (marketplace) → $1B+ revenue</td></tr>
                  <tr><td>Then tried</td><td>Becoming the agent (Zillow Offers, iBuying) → <strong>$560M loss, shut down</strong></td></tr>
                  <tr><td>Went back to</td><td>Marketplace model</td></tr>
                </tbody>
              </table>
            </div>
            <div style={{ padding: 12, borderRadius: 12, background: '#fff0f0', border: '2px solid var(--red)', marginTop: 8 }}>
              <strong>Zillow Lesson:</strong> NEVER try to be the service provider. Stay platform. Livspace's managed model = Zillow Offers territory. We stay as the platform that connects and empowers.
            </div>
          </div>
          <div>
            <div className="stats-grid">
              <StatCard value="$2.8B" label="Valuation" color="green" />
              <StatCard value="₹1,000+ Cr" label="Revenue" color="gold" />
              <StatCard value="20-30%" label="Take Rate" color="blue" />
            </div>
            <p style={{ fontSize: '.9rem', fontWeight: 600, marginBottom: 8 }}>Proved Indians will book home professionals via apps. City-by-city marketplace model validated.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Urban Company Lesson</th><th>Our Application</th></tr></thead>
                <tbody>
                  <tr><td><strong>Supply-side operations matter</strong> — invested in training pros</td><td>Architect onboarding, quality training, response time SLAs</td></tr>
                  <tr><td><strong>City-by-city expansion works</strong> — Delhi → BLR → Mumbai</td><td>Our sequential city launch strategy is validated</td></tr>
                  <tr><td><strong>Commission model works in India</strong> — 20-30% accepted</td><td>Our 15% take rate is very reasonable by comparison</td></tr>
                  <tr><td><strong>Trust through standardization</strong> — checks, uniforms, pricing</td><td>Architect verification + credential checks + transparent pricing</td></tr>
                  <tr><td><strong>Upselling works</strong> — basic → premium → subscription</td><td>Free design → paid subscription → architect consultation</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="grid-2">
              <div>
                <h3 className="card-subtitle">✅ What Winners Have in Common</h3>
                <div className="table-wrap">
                  <table>
                    <thead><tr><th>Pattern</th><th>Canva</th><th>Houzz</th><th>UC</th><th>Us</th></tr></thead>
                    <tbody>
                      <tr><td>Free value first</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr><td>Platform, not service</td><td>✅</td><td>✅</td><td>⚠️</td><td>✅</td></tr>
                      <tr><td>Virality built-in</td><td>✅</td><td>✅</td><td>⚠️</td><td>✅</td></tr>
                      <tr><td>Network effects</td><td>⚠️</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr><td>High gross margin</td><td>85%+</td><td>65-75%</td><td>50-60%</td><td>65-78%</td></tr>
                      <tr><td>Data improves product</td><td>✅</td><td>✅</td><td>✅</td><td>✅</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="card-subtitle">❌ What Failures Have in Common</h3>
                <div className="table-wrap">
                  <table>
                    <thead><tr><th>Pattern</th><th>Modsy</th><th>Spacejoy</th><th>Hutch</th></tr></thead>
                    <tbody>
                      <tr><td>Human-dependent</td><td>✅</td><td>✅</td><td>❌</td></tr>
                      <tr><td>Single revenue stream</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr><td>No marketplace</td><td>❌</td><td>Weak</td><td>❌</td></tr>
                      <tr><td>No platform effects</td><td>✅</td><td>✅</td><td>✅</td></tr>
                      <tr><td>High burn, low margin</td><td>✅</td><td>✅</td><td>✅</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div style={{ padding: 12, borderRadius: 12, background: 'var(--green-bg)', border: '2px solid var(--green)', marginTop: 12 }}>
              <strong>Winning formula:</strong> Free tool + AI + Marketplace + Multiple revenue streams + High margins. We check every box.
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🚨 Emerging Threats">
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
        <p style={{ fontSize: '.85rem', fontWeight: 600, marginTop: 8 }}>Most dangerous competitor: one that doesn't exist yet — a well-funded India startup building the same vision. Speed matters.</p>
      </Card>

      <Card title="🤝 Partnership Landscape">
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

      <Card title="💡 6 Key Competitive Insights">
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}><strong>1. No all-in-one competitor in India</strong> — the measurement + AI design + marketplace triad is genuinely unique</div>
          <div className="box box-purple" style={{ borderRadius: 12 }}><strong>2. Livspace serves a different model</strong> — managed vs self-serve. Different business models, overlapping customers.</div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}><strong>3. AI-only tools will commoditize</strong> — design generation alone is not a moat; platform + data is</div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}><strong>4. Houzz has abandoned India</strong> — no Vastu, no INR, no local features, no India marketing for years</div>
          <div className="box box-green" style={{ borderRadius: 12 }}><strong>5. Speed is the real moat</strong> — first self-serve AI + marketplace in India builds data &amp; network effects that are hard to replicate</div>
          <div className="box" style={{ borderRadius: 12, background: '#fff0f0' }}><strong>6. Biggest threat doesn't exist yet</strong> — a well-funded India startup building the same vision. Move fast.</div>
        </div>
      </Card>
    </div>
  )
}
