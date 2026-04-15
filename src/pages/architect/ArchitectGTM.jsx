import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectGTM() {
  return (
    <div>
      <SectionHeader icon="🚀" title="Go-to-Market Strategy" sub="Tool-first, marketplace-second — 4-phase GTM with channel-level CAC, partnerships, content pillars, launch playbook & geographic rollout" />

      <div className="stats-grid">
        <StatCard value="₹50-100" label="Instagram/YouTube CAC" color="green" />
        <StatCard value="150K" label="Year 1 Signups Target" color="blue" />
        <StatCard value="60:40" label="Organic:Paid by Month 12" color="gold" />
        <StatCard value="0.8+" label="Viral Coefficient (Month 12)" color="purple" />
      </div>

      <Card title="💡 GTM Philosophy">
        <div style={{ background: 'var(--green-bg)', border: '2px solid var(--green)', borderRadius: 12, padding: 16, fontStyle: 'italic', fontSize: '1.05rem' }}>
          "Tool-first, marketplace-second." — Lead with the free design tool to build a user base, then monetize through premium features and marketplace transactions. This avoids the cold-start marketplace problem.
        </div>
      </Card>

      <Card title="📋 GTM Phases">
        <Tabs tabs={['Phase 1: Pre-Launch', 'Phase 2: Launch', 'Phase 3: Growth', 'Phase 4: Scale']}>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Month -2 to 0 — Build waitlist, seed content, establish partnerships</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Action</th><th>Channel</th><th>Goal</th><th>Budget</th></tr></thead>
                <tbody>
                  <tr><td><strong>Landing page + waitlist</strong></td><td>Custom domain + email capture</td><td>2,000 signups</td><td>₹30K (ads)</td></tr>
                  <tr><td><strong>Content seeding</strong></td><td>Instagram Reels, YouTube Shorts</td><td>50K views across 10 "AI redesigns your room" videos</td><td>₹20K (production)</td></tr>
                  <tr><td><strong>Architect partnerships</strong></td><td>Direct outreach to 50 architects</td><td>20 signed up as founding professionals</td><td>₹0 (sweat equity)</td></tr>
                  <tr><td><strong>Real estate developer LOI</strong></td><td>1-2 partnership conversations</td><td>Letter of intent for virtual staging pilot</td><td>₹0</td></tr>
                  <tr><td><strong>Press/PR</strong></td><td>YourStory, Inc42, TechCrunch India</td><td>3-5 launch articles</td><td>₹0-50K</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Month 1-6 — Early traction, PMF signals, 50K signups target</p>
            <h3 className="card-subtitle">Consumer Acquisition Channels (Prioritized)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>Channel</th><th>Strategy</th><th>CAC</th><th>Volume</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td><strong>Instagram/YouTube</strong></td><td>Before/after room transformations; "AI redesigned my ₹20L flat" — viral potential</td><td>₹50-100</td><td>★★★★★</td></tr>
                  <tr><td>2</td><td><strong>Google SEO</strong></td><td>Long-tail: "interior designer for 2BHK", "Vastu compliant kitchen"</td><td>₹0 (organic)</td><td>★★★★★ (slow)</td></tr>
                  <tr><td>3</td><td><strong>Google Ads (SEM)</strong></td><td>"Interior designer near me", "room design app"</td><td>₹200-400</td><td>★★★★☆</td></tr>
                  <tr><td>4</td><td><strong>Developer handover</strong></td><td>Partner with Godrej, Prestige, Sobha — offer app at key handover moment</td><td>₹0-100</td><td>★★★★☆</td></tr>
                  <tr><td>5</td><td><strong>Referral program</strong></td><td>"Design your room free, get 1 month Pro" for referring friends</td><td>₹100-200</td><td>★★★☆☆</td></tr>
                  <tr><td>6</td><td><strong>Micro-influencers</strong></td><td>50 home decor influencers (10K-100K followers) — product seeding</td><td>₹500-1K/each</td><td>★★★☆☆</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Supply-Side (Architect) Acquisition</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Strategy</th><th>How</th><th>Target</th></tr></thead>
                <tbody>
                  <tr><td><strong>Free listing, forever</strong></td><td>No paywall for basic profile — seed the marketplace</td><td>500 architects in 6 months</td></tr>
                  <tr><td><strong>Portfolio migration</strong></td><td>Import Instagram/website portfolio into professional profile</td><td>Reduce friction</td></tr>
                  <tr><td><strong>Lead guarantee</strong></td><td>"Get your first 5 client leads free" — prove value before subscription</td><td>Convert to paid</td></tr>
                  <tr><td><strong>Architect associations</strong></td><td>Partner with Council of Architecture India, IIA</td><td>Credibility + reach</td></tr>
                  <tr><td><strong>Design school outreach</strong></td><td>Student/junior architect program — free tool access</td><td>Long-term pipeline</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Month 6-18 — Expansion, partnerships, content flywheel</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Strategy</th><th>Description</th></tr></thead>
                <tbody>
                  <tr><td><strong>"Design your new home" moment</strong></td><td>Partner with HDFC, SBI Home, Bajaj Housing — when someone gets a home loan, recommend the app. <strong>Highest intent audience.</strong></td></tr>
                  <tr><td><strong>Vastu-first marketing</strong></td><td>"Is your home Vastu compliant? Check in 30 seconds." Vastu compliance is a purchase trigger in India.</td></tr>
                  <tr><td><strong>Wedding season campaigns</strong></td><td>Target newly married couples (Oct-Feb). Partner with WedMeGood, Shaadi.com.</td></tr>
                  <tr><td><strong>Tier 2/3 city expansion</strong></td><td>Jaipur, Lucknow, Chandigarh, Kochi, Coimbatore — less competition, high demand.</td></tr>
                  <tr><td><strong>Content flywheel</strong></td><td>User-generated before/after gallery → SEO + social machine. Each shared design = free marketing.</td></tr>
                  <tr><td><strong>Mobile app launch</strong></td><td>iOS + Android — critical for AR features and casual usage.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p style={{ fontWeight: 600, marginBottom: 8 }}>Month 18+ — Enterprise, international, vertical AI products</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Strategy</th><th>Description</th></tr></thead>
                <tbody>
                  <tr><td><strong>Enterprise B2B</strong></td><td>Virtual staging for developers, bulk design for housing projects, white-label for 99acres/MagicBricks</td></tr>
                  <tr><td><strong>Geographic expansion</strong></td><td>SEA (Singapore — Livspace proved this), Middle East (massive construction + interior market)</td></tr>
                  <tr><td><strong>Vertical AI products</strong></td><td>"AI Vastu Consultant", "AI Color Advisor", "AI Furniture Shopper" — each a standalone acquisition channel</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="📝 Content & SEO Strategy">
        <p style={{ marginBottom: 12, fontWeight: 600 }}>Target: 100 SEO-optimized pages in first 6 months → organic traffic flywheel</p>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Pillar</th><th>Content Types</th><th>SEO Target Keywords</th></tr></thead>
            <tbody>
              <tr><td><strong>✨ Design Inspiration</strong></td><td>Before/after galleries, style guides, mood boards</td><td>"2BHK design ideas", "modern living room India"</td></tr>
              <tr><td><strong>🕉️ Vastu Guidance</strong></td><td>Vastu tips by room, do's/don'ts, checker results</td><td>"Vastu for bedroom", "kitchen Vastu direction"</td></tr>
              <tr><td><strong>💰 Cost &amp; Budget</strong></td><td>Interior design cost breakdowns, material comparisons</td><td>"interior design cost per sq ft India"</td></tr>
              <tr><td><strong>🔧 How-To Guides</strong></td><td>Room measurement tutorials, renovation planning</td><td>"how to plan home renovation", "room measurement app"</td></tr>
              <tr><td><strong>👤 Professional Insights</strong></td><td>Architect interviews, industry trends, expert tips</td><td>"best interior designer [city]", "architect consultation"</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🤝 Partnership Strategy (3 Tiers)">
        <Tabs tabs={['Tier 1: Strategic', 'Tier 2: Growth', 'Tier 3: Community']}>
          <div>
            <p style={{ fontStyle: 'italic', marginBottom: 8 }}>High impact, dedicated BD effort</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Partner Type</th><th>Specific Targets</th><th>Value Exchange</th></tr></thead>
                <tbody>
                  <tr><td><strong>Home loan providers</strong></td><td>HDFC, SBI Home, Bajaj Housing</td><td>We get high-intent users; they offer value-add service</td></tr>
                  <tr><td><strong>Real estate developers</strong></td><td>Godrej Properties, Prestige, Sobha, Brigade</td><td>Captive audience at handover; they get design amenity</td></tr>
                  <tr><td><strong>Paint companies</strong></td><td>Asian Paints, Berger</td><td>AI suggests their colors → product placement + affiliate</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p style={{ fontStyle: 'italic', marginBottom: 8 }}>Medium impact, scalable</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Partner Type</th><th>Specific Targets</th><th>Value Exchange</th></tr></thead>
                <tbody>
                  <tr><td><strong>Furniture brands</strong></td><td>Urban Ladder, Pepperfry, IKEA India</td><td>Shopping list integration → affiliate commissions</td></tr>
                  <tr><td><strong>Wedding platforms</strong></td><td>WedMeGood, Shaadi.com, WeddingWire</td><td>Cross-promotion to newly married couples</td></tr>
                  <tr><td><strong>Property portals</strong></td><td>99acres, MagicBricks, Housing.com</td><td>"Design this property" integration on listings</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p style={{ fontStyle: 'italic', marginBottom: 8 }}>Low cost, brand building</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Partner Type</th><th>Specific Targets</th><th>Value Exchange</th></tr></thead>
                <tbody>
                  <tr><td><strong>Architecture colleges</strong></td><td>NIT, SPA Delhi, CEPT Ahmedabad</td><td>Student access → future professionals on platform</td></tr>
                  <tr><td><strong>Design communities</strong></td><td>Architecture Brio, Instaarchitectka</td><td>Content collaboration, community building</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="💵 Paid Marketing Budget Allocation">
        <Tabs tabs={['Month 1-6 (₹3-5L/mo)', 'Month 7-12 (₹5-8L/mo)']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Channel</th><th>Budget %</th><th>Monthly Spend</th><th>Expected Outcome</th></tr></thead>
                <tbody>
                  <tr><td><strong>Instagram/Facebook Ads</strong></td><td>35%</td><td>₹1-1.75L</td><td>3K-5K app installs/mo</td></tr>
                  <tr><td><strong>Google Search Ads</strong></td><td>30%</td><td>₹0.9-1.5L</td><td>2K-4K intent-driven signups/mo</td></tr>
                  <tr><td><strong>YouTube Ads</strong></td><td>15%</td><td>₹0.45-0.75L</td><td>Brand awareness, tutorial views</td></tr>
                  <tr><td><strong>Influencer collaborations</strong></td><td>15%</td><td>₹0.45-0.75L</td><td>5-10 posts/mo from micro-influencers</td></tr>
                  <tr><td><strong>PR &amp; events</strong></td><td>5%</td><td>₹0.15-0.25L</td><td>Press coverage, community meetups</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p>Scale channels with best CAC:LTV ratios. Expected winners: <strong>Instagram content</strong> and <strong>referral program</strong> dominate.</p>
            <BarChart data={[
              { label: 'Instagram/YT', width: '10%', text: '₹50-100 CAC', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
              { label: 'Referral', width: '20%', text: '₹100-200 CAC', color: 'linear-gradient(90deg, #52b788, #95d5b2)' },
              { label: 'Google Ads', width: '40%', text: '₹200-400 CAC', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
              { label: 'Influencers', width: '80%', text: '₹500-1,000 CAC', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
            ]} />
          </div>
        </Tabs>
      </Card>

      <Card title="📊 Key GTM Metrics">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Metric</th><th>Month 3</th><th>Month 6</th><th>Month 12</th></tr></thead>
            <tbody>
              <tr><td><strong>Total signups</strong></td><td>10K</td><td>50K</td><td>150K</td></tr>
              <tr><td><strong>MAU</strong></td><td>5K</td><td>25K</td><td>90K</td></tr>
              <tr><td><strong>Designs generated</strong></td><td>15K</td><td>100K</td><td>500K</td></tr>
              <tr><td><strong>Free → Paid conversion</strong></td><td>2.5%</td><td>3.5%</td><td>4.5%</td></tr>
              <tr><td><strong>Consultations booked</strong></td><td>50</td><td>500</td><td>3,000/mo</td></tr>
              <tr><td><strong>Architects listed</strong></td><td>100</td><td>500</td><td>2,000</td></tr>
              <tr><td><strong>Organic:Paid traffic</strong></td><td>20:80</td><td>40:60</td><td>60:40</td></tr>
              <tr><td><strong>Viral coefficient (K-factor)</strong></td><td>0.3</td><td>0.5</td><td>0.8+</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📅 Launch Playbook (Week-by-Week)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Week</th><th>Focus</th><th>Actions</th></tr></thead>
            <tbody>
              <tr><td><strong>Week 1: Soft Launch</strong></td><td>Waitlist release</td><td>Release to 2,000 waitlist users → gather feedback. Enable PostHog/Mixpanel analytics. Personal outreach to 20 founding architects.</td></tr>
              <tr><td><strong>Week 2: Public Beta</strong></td><td>Open registration</td><td>Open to public. Launch Instagram campaign (3 posts + 5 stories/reels). Submit to Product Hunt. Send press kits to 20 journalists.</td></tr>
              <tr><td><strong>Week 3: Growth Push</strong></td><td>Paid channels on</td><td>Turn on Google Ads (branded + non-branded). Activate referral program. First micro-influencer posts go live. Publish 5 SEO blog posts.</td></tr>
              <tr><td><strong>Week 4: Optimize</strong></td><td>Funnel analysis</td><td>Analyze: signup → design created → consultation booked. A/B test onboarding flow. Adjust ad spend by channel CAC. Weekly user interviews (5-10).</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🗺️ Geographic Rollout">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Phase</th><th>Markets</th><th>Timeline</th><th>Why</th></tr></thead>
            <tbody>
              <tr><td><strong>Launch</strong></td><td>Bangalore, Mumbai, Delhi NCR</td><td>Month 1-6</td><td>Highest renovation activity, tech-savvy, premium market</td></tr>
              <tr><td><strong>Expand India</strong></td><td>Hyderabad, Pune, Chennai, Kolkata</td><td>Month 6-12</td><td>Second wave cities with strong growth</td></tr>
              <tr><td><strong>Tier 2</strong></td><td>Jaipur, Lucknow, Ahmedabad, Kochi, Chandigarh</td><td>Month 12-18</td><td>Less competition, growing demand</td></tr>
              <tr><td><strong>International</strong></td><td>Singapore, Dubai, Saudi Arabia</td><td>Month 18-30</td><td>Livspace validated Singapore; Middle East = massive construction</td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
