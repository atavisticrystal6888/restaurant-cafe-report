import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectBusinessModel() {
  return (
    <div>
      <SectionHeader icon="📋" title="Business Model & Strategy" sub="Full Business Model Canvas, Lean Canvas, 5 revenue streams, pricing architecture with India benchmarks, marketplace economics & platform strategy" />

      <Card title="🎯 Value Propositions">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Segment</th><th>Value Proposition</th></tr></thead>
            <tbody>
              <tr><td><strong>🏡 Homeowners</strong></td><td>"See your dream home before you build it." AI-powered room visualization + cost clarity + verified professionals — at a fraction of full interior designer cost.</td></tr>
              <tr><td><strong>📐 Architects</strong></td><td>"Your clients are looking for you." Steady pipeline of pre-qualified leads with shared design context — spend less time on proposals, more time on projects.</td></tr>
              <tr><td><strong>🏢 Developers</strong></td><td>"Sell the lifestyle, not just the floor plan." Virtual staging and design packages that accelerate pre-sales and add buyer value at handover.</td></tr>
            </tbody>
          </table>
        </div>
        <div style={{ background: 'var(--green-bg)', border: '2px solid var(--green)', borderRadius: 12, padding: 16, marginTop: 12, fontStyle: 'italic', fontWeight: 600 }}>
          UVP: "The only platform that takes you from room measurement to AI design to professional architect — in one seamless flow."
        </div>
      </Card>

      <Card title="❌ Problem ↔ ✅ Solution">
        <div className="table-wrap">
          <table>
            <thead><tr><th>#</th><th>Problem</th><th>Solution</th></tr></thead>
            <tbody>
              <tr><td>1</td><td>Homeowners can't visualize design changes before committing money</td><td>AI-powered room design: input dimensions → get photorealistic options instantly</td></tr>
              <tr><td>2</td><td>Finding and trusting architects is fragmented (word-of-mouth, JustDial)</td><td>Verified architect marketplace with portfolios, reviews, transparent pricing</td></tr>
              <tr><td>3</td><td>Interior design help is either too expensive (Livspace ₹5-20L) or too basic (Pinterest)</td><td>Self-serve tool at ₹100-2,500/month — 10-100x cheaper than full-service</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💵 5 Revenue Streams — Revenue Flywheel">
        <div className="table-wrap">
          <table>
            <thead><tr><th>#</th><th>Stream</th><th>Model</th><th>Year 1</th><th>Year 3</th></tr></thead>
            <tbody>
              <tr><td>1</td><td><strong>Consumer Subscriptions</strong></td><td>Freemium → paid (₹499-1,999/mo)</td><td>54%</td><td>35%</td></tr>
              <tr><td>2</td><td><strong>Architect Subscriptions</strong></td><td>SaaS (₹1,499-4,999/mo)</td><td>20%</td><td>10%</td></tr>
              <tr><td>3</td><td><strong>Consultation Commissions</strong></td><td>15% take rate on bookings</td><td>19%</td><td>25%</td></tr>
              <tr><td>4</td><td><strong>Affiliate Commerce</strong></td><td>5-8% on product purchases</td><td>7%</td><td>20%</td></tr>
              <tr><td>5</td><td><strong>Enterprise B2B</strong></td><td>Developer deals + subscriptions</td><td>0%</td><td>10%</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">Revenue Per User Journey</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Stage</th><th>Revenue Event</th><th>Avg Value</th></tr></thead>
            <tbody>
              <tr><td>Sign up → create design</td><td>$0 (free)</td><td>—</td></tr>
              <tr><td>Hit paywall → subscribe (Home Plan)</td><td>Subscription</td><td>₹999/mo</td></tr>
              <tr><td>Browse architects → book consultation</td><td>Commission</td><td>₹450 (15% of ₹3,000)</td></tr>
              <tr><td>Get shopping list → purchase furniture</td><td>Affiliate</td><td>₹2,000-5,000 (one-time)</td></tr>
              <tr style={{ background: 'var(--green-bg)', fontWeight: 600 }}><td><strong>Total per converting user</strong></td><td></td><td><strong>₹8,000-15,000 in first 6 months</strong></td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💰 Pricing Architecture">
        <Tabs tabs={['Consumer Tiers', 'Architect Tiers', 'Consultation Pricing', 'India Benchmarks']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Tier</th><th>Monthly</th><th>Annual (per mo)</th><th>Key Features</th></tr></thead>
                <tbody>
                  <tr><td><strong>Free</strong></td><td>₹0</td><td>₹0</td><td>2 AI designs/month, basic 2D plans, browse architects, watermarked</td></tr>
                  <tr><td><strong>Starter</strong></td><td>₹499</td><td>₹333 (save 33%)</td><td>10 designs/month, 3D views, 5 projects, no watermark</td></tr>
                  <tr><td><strong>Home</strong></td><td>₹999</td><td>₹667 (save 33%)</td><td>Unlimited designs, 3D + 360°, unlimited projects, 1 consult/month, shopping lists</td></tr>
                  <tr><td><strong>Pro</strong></td><td>₹1,999</td><td>₹1,333 (save 33%)</td><td>Everything + advanced rendering, priority matching, unlimited consults, Vastu, PDF export</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Tier</th><th>Monthly</th><th>Annual</th><th>Key Features</th></tr></thead>
                <tbody>
                  <tr><td><strong>Free Listing</strong></td><td>₹0</td><td>₹0</td><td>Basic profile, 5-project portfolio, respond to inquiries</td></tr>
                  <tr><td><strong>Professional</strong></td><td>₹1,499</td><td>₹12,999/yr</td><td>Enhanced profile, unlimited portfolio, lead alerts, analytics, collab tools</td></tr>
                  <tr><td><strong>Featured</strong></td><td>₹2,999</td><td>₹24,999/yr</td><td>Everything + featured search placement, priority matching, branded page, badge</td></tr>
                  <tr><td><strong>Studio</strong></td><td>₹4,999</td><td>₹39,999/yr</td><td>Multi-seat, team mgmt, firm branding, advanced analytics, API access</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Type</th><th>Consumer Pays</th><th>Commission (15%)</th><th>Architect Receives</th></tr></thead>
                <tbody>
                  <tr><td><strong>Quick Chat (text)</strong></td><td>₹500-1,500</td><td>₹75-225</td><td>₹425-1,275</td></tr>
                  <tr><td><strong>Design Review (async)</strong></td><td>₹1,500-3,000</td><td>₹225-450</td><td>₹1,275-2,550</td></tr>
                  <tr><td><strong>Video Consultation (30 min)</strong></td><td>₹2,000-5,000</td><td>₹300-750</td><td>₹1,700-4,250</td></tr>
                  <tr><td><strong>Detailed Consultation (60 min)</strong></td><td>₹3,000-10,000</td><td>₹450-1,500</td><td>₹2,550-8,500</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--text-light)', marginTop: 8 }}>Architects set their own rates within suggested ranges. Start at 15% commission, consider 18-20% once marketplace proves liquidity.</p>
          </div>
          <div>
            <h3 className="card-subtitle">India SaaS Pricing Benchmarks</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>App</th><th>Price</th><th>Context</th></tr></thead>
                <tbody>
                  <tr><td>Spotify India</td><td>₹119/mo</td><td>Consumer subscription baseline</td></tr>
                  <tr><td>Disney+ Hotstar</td><td>₹149-299/mo</td><td>Entertainment subscription</td></tr>
                  <tr><td>Zomato Gold</td><td>₹200-500/mo</td><td>Lifestyle subscription</td></tr>
                  <tr><td>Urban Company avg booking</td><td>₹300-1,500</td><td>Home services willingness</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Psychological Price Points</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Price</th><th>Perception</th><th>Target</th></tr></thead>
                <tbody>
                  <tr><td>₹0</td><td>"Let me try"</td><td>Everyone — acquisition tool</td></tr>
                  <tr><td>₹99-199</td><td>"Cheap enough to not think about"</td><td>Casual users, students</td></tr>
                  <tr><td>₹499-799</td><td>"Reasonable for a useful tool"</td><td>Budget homeowners, newlyweds</td></tr>
                  <tr><td>₹999-1,499</td><td>"Premium but justified if renovating"</td><td>Active renovators</td></tr>
                  <tr><td>₹1,999-2,999</td><td>"Professional-grade investment"</td><td>Serious projects, NRIs</td></tr>
                  <tr><td>₹5,000+</td><td>"Must deliver serious ROI"</td><td>Professional architects only</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🔄 Marketplace Economics">
        <div className="stats-grid">
          <StatCard value="15%" label="Take Rate (Start)" color="green" />
          <StatCard value="500 × 50K" label="Tipping Point" color="blue" />
          <StatCard value="19:1" label="Consumer LTV:CAC" color="gold" />
        </div>
        <h3 className="card-subtitle">Cold-Start Strategy</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Strategy</th><th>Detail</th></tr></thead>
            <tbody>
              <tr><td><strong>Supply side first</strong></td><td>Free listing forever → 20 founding architects with free premium</td></tr>
              <tr><td><strong>Lead guarantee</strong></td><td>"First 5 client leads free" → prove value before subscription</td></tr>
              <tr><td><strong>Portfolio import</strong></td><td>One-click import from Instagram/Behance → reduce friction</td></tr>
              <tr><td><strong>Demand generation</strong></td><td>Content marketing + free AI design tool drives organic traffic</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📊 Key Resources & Cost Structure">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Key Resources</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Resource</th><th>Critical Level</th></tr></thead>
                <tbody>
                  <tr><td><strong>AI/ML models</strong></td><td>★★★★★</td></tr>
                  <tr><td><strong>Design data</strong></td><td>★★★★★</td></tr>
                  <tr><td><strong>Engineering team</strong></td><td>★★★★★</td></tr>
                  <tr><td><strong>Architect supply</strong></td><td>★★★★☆</td></tr>
                  <tr><td><strong>Brand &amp; trust</strong></td><td>★★★★☆</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Cost Structure</h3>
            <BarChart data={[
              { label: 'Engineering (50-60%)', width: '60%', text: 'Core team + AI/ML', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
              { label: 'Marketing (15-20%)', width: '20%', text: 'Acquisition + content', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
              { label: 'AI Compute (8-12%)', width: '12%', text: 'GPU + inference', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
              { label: 'Cloud Infra (5-8%)', width: '8%', text: 'AWS/GCP', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
              { label: 'Operations (5-8%)', width: '8%', text: 'Support + admin', color: 'linear-gradient(90deg, #922b21, #ec7063)' },
            ]} />
          </div>
        </div>
      </Card>

      <Card title="🧪 Launch Pricing Strategy & Experiments">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Launch Promos</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Strategy</th><th>Approach</th></tr></thead>
                <tbody>
                  <tr><td><strong>Consumer launch promo</strong></td><td>First 1,000 paid users: ₹199/mo for 3 months (any tier)</td></tr>
                  <tr><td><strong>Early adopter annual</strong></td><td>50% off annual for first 500 subscribers</td></tr>
                  <tr><td><strong>Referral pricing</strong></td><td>Refer friend → both get 1 month free</td></tr>
                  <tr><td><strong>Architect promo</strong></td><td>Free listing + first 5 leads free → convert to paid</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Pricing Experiments (P0)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Experiment</th><th>Metric</th></tr></thead>
                <tbody>
                  <tr><td>Free tier limit: 2 vs 5 designs</td><td>Free→Paid conversion rate</td></tr>
                  <tr><td>Starter price: ₹299 vs ₹499 vs ₹699</td><td>Revenue × conversion rate</td></tr>
                  <tr><td>Annual discount: 25% vs 33% vs 40%</td><td>% Annual subs, LTV</td></tr>
                  <tr><td>Paywall copy: "Upgrade" vs "Unlock HD"</td><td>Click-through rate</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      <Card title="🌐 Platform Strategy">
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🔄 Network Effects</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Same-side (more designs = better AI) + Cross-side (consumers ↔ architects). Self-reinforcing at scale.</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>⚠️ Multi-homing Risk</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Mitigated by unique AI + data lock-in + integrated workflow (measure → design → consult → shop).</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>🎯 Winner-Take-All?</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>India market supports 2-3 players. First-mover + data moat = structural advantage.</p>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>🏛️ Governance</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Architect verification, quality control, dispute resolution, payment escrow.</p>
          </div>
        </div>
      </Card>

      <Card title="🔓 Unfair Advantage (Can&apos;t Be Easily Copied)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Advantage</th><th>Timeline to Replicate</th></tr></thead>
            <tbody>
              <tr><td><strong>India-specific room layout data (at scale)</strong></td><td>12-18 months</td></tr>
              <tr><td><strong>Architect reviews + portfolios (marketplace)</strong></td><td>18-24 months</td></tr>
              <tr><td><strong>Vastu intelligence engine</strong></td><td>6-12 months</td></tr>
              <tr><td><strong>Regional design preference data</strong></td><td>12-18 months</td></tr>
              <tr><td><strong>Design-to-consultation conversion data</strong></td><td>12-18 months</td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
