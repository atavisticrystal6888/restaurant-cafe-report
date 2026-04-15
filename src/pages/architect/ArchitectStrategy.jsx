import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectStrategy() {
  return (
    <div>
      <SectionHeader icon="🗺️" title="Strategic Planning" sub="5-phase roadmap with Go/No-Go gates, 16 risks scored & prioritized, 3-scenario planning (₹35-87 Cr Year 3), brand positioning & launch strategy" />

      <Card title="📅 5-Phase Strategic Roadmap">
        <p style={{ fontSize: '.9rem', fontStyle: 'italic', marginBottom: 12 }}>"Business milestones, not feature milestones. Every phase is defined by the outcome it must achieve."</p>
        <Tabs tabs={['Overview', 'Phase 0-1', 'Phase 2-3', 'Phase 4', 'Team & Budget', 'Key Decisions']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Phase</th><th>Period</th><th>Theme</th><th>Key Outcome</th><th>Budget</th></tr></thead>
                <tbody>
                  <tr><td><strong>Phase 0</strong></td><td>Mo -3 to 0</td><td>Foundation</td><td>Seed closed, team assembled, PoC built</td><td>₹10-15L</td></tr>
                  <tr><td><strong>Phase 1</strong></td><td>Mo 1-6</td><td>Build &amp; Launch</td><td>PMF signal: 50K users, ₹5L MRR</td><td>₹40-60L/mo</td></tr>
                  <tr><td><strong>Phase 2</strong></td><td>Mo 7-12</td><td>Grow &amp; Monetize</td><td>₹19L+ MRR, 150K users</td><td>₹50-80L/mo</td></tr>
                  <tr><td><strong>Phase 3</strong></td><td>Mo 13-18</td><td>Scale &amp; Raise</td><td>₹10 Cr ARR → Series A closed</td><td>₹60L-1Cr/mo</td></tr>
                  <tr><td><strong>Phase 4</strong></td><td>Mo 19-24</td><td>Expand &amp; Deepen</td><td>Burn breakeven. 500K+ users.</td><td>₹1-2.5 Cr/mo</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Phase 0: Foundation (Month -3 to 0)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Milestone</th><th>Success Criteria</th></tr></thead>
                <tbody>
                  <tr><td>Finalize business plan</td><td>All research docs complete</td></tr>
                  <tr><td>Assemble core team</td><td>CTO + 1-2 engineers committed</td></tr>
                  <tr><td>Close seed funding</td><td>₹3-5 Cr (iSAFE)</td></tr>
                  <tr><td>Build PoC</td><td>Room input → AI design → architect browse</td></tr>
                  <tr><td>Pre-launch waitlist</td><td>2,000+ signups</td></tr>
                  <tr><td>Founding architects</td><td>20 signed (free listing)</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Phase 1: Build &amp; Launch (Month 1-6)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Month</th><th>Milestone</th><th>Target</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>Web MVP live (private beta)</td><td>500 beta users</td></tr>
                  <tr><td>2</td><td>Public launch: Bangalore</td><td>5K signups, 3K MAU</td></tr>
                  <tr><td>3</td><td>First paid conversions; 100 architects</td><td>10K signups, ₹1-2L MRR</td></tr>
                  <tr><td>4</td><td>Mumbai expansion</td><td>25K signups, 500 paid</td></tr>
                  <tr><td>5</td><td>Delhi NCR; referral program</td><td>40K signups, 1K paid</td></tr>
                  <tr><td>6</td><td><strong>PMF Checkpoint</strong></td><td><strong>50K+, 2K paid, ₹5L+ MRR, 500 arch</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Phase 2: Grow &amp; Monetize (Month 7-12)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Month</th><th>Milestone</th><th>Metric</th></tr></thead>
                <tbody>
                  <tr><td>7</td><td>Tier 2 expansion (Hyderabad, Pune)</td><td>60K users</td></tr>
                  <tr><td>8</td><td>Shopping list + affiliate revenue live</td><td>First affiliate commission</td></tr>
                  <tr><td>9</td><td>Architect paid tiers; video consultation</td><td>800 paying arch, ₹8L MRR</td></tr>
                  <tr><td>10</td><td>Content flywheel: B/A gallery, SEO content</td><td>Organic &gt;30% of traffic</td></tr>
                  <tr><td>11</td><td>Mobile app launch</td><td>20K installs first month</td></tr>
                  <tr><td>12</td><td><strong>Revenue Checkpoint</strong></td><td><strong>150K users, 5K paid, ₹19L+ MRR</strong></td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Phase 3: Scale &amp; Raise (Month 13-18)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Month</th><th>Milestone</th></tr></thead>
                <tbody>
                  <tr><td>13</td><td>Chennai + Kolkata; AR scanning live</td></tr>
                  <tr><td>14</td><td>Series A begins (₹25-40 Cr target, ₹80-150 Cr pre-money)</td></tr>
                  <tr><td>15</td><td>First enterprise deal closed (₹5-10L)</td></tr>
                  <tr><td>16</td><td>₹10 Cr ARR milestone</td></tr>
                  <tr><td>17</td><td>Series A term sheet signed</td></tr>
                  <tr><td>18</td><td>Series A closed → 15-20 person team</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Phase 4: Expand &amp; Deepen (Month 19-24)</h3>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}>
                <strong>Q7 (Month 19-21)</strong><br />
                <small>8+ cities live. Team 25-30. 5+ developer partnerships. NRI marketing begins.</small>
              </div>
              <div className="box box-purple" style={{ borderRadius: 12 }}>
                <strong>Q8 (Month 22-24)</strong><br />
                <small>Monthly burn breakeven. 500K+ users. 5,000+ architects. Singapore/Dubai research.</small>
              </div>
            </div>
            <h3 className="card-subtitle">Phase 4 Activities</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Activity</th><th>Why</th></tr></thead>
                <tbody>
                  <tr><td>Enterprise B2B push</td><td>Developer deals at ₹50K-5L = high-margin accelerator</td></tr>
                  <tr><td>International research</td><td>Singapore (Livspace validated) + Dubai (construction boom)</td></tr>
                  <tr><td>Data moat investment</td><td>500K+ designs = superior India-specific AI</td></tr>
                  <tr><td>Platform deepening</td><td>Blueprint upload, real-time collaboration, contractor directory</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Team Growth</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Phase</th><th>Size</th><th>Key Hires</th></tr></thead>
                <tbody>
                  <tr><td>Phase 0</td><td>2-3</td><td>CTO/Co-founder</td></tr>
                  <tr><td>Phase 1</td><td>6-8</td><td>2-3 engineers, designer, marketing, BD</td></tr>
                  <tr><td>Phase 2</td><td>8-12</td><td>Mobile dev, AI/ML, content, support</td></tr>
                  <tr><td>Phase 3</td><td>12-15</td><td>Head of Sales, data engineer, growth</td></tr>
                  <tr><td>Phase 4</td><td>20-30</td><td>Enterprise sales, city managers, international</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Budget Split</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Category</th><th>Ph 1</th><th>Ph 2</th><th>Ph 3</th><th>Ph 4</th></tr></thead>
                <tbody>
                  <tr><td>Engineering</td><td>60%</td><td>50%</td><td>45%</td><td>40%</td></tr>
                  <tr><td>Marketing</td><td>15%</td><td>20%</td><td>20%</td><td>20%</td></tr>
                  <tr><td>AI/ML</td><td>10%</td><td>12%</td><td>15%</td><td>15%</td></tr>
                  <tr><td>Operations</td><td>10%</td><td>10%</td><td>10%</td><td>10%</td></tr>
                  <tr><td>BD/Sales</td><td>5%</td><td>8%</td><td>10%</td><td>15%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Month</th><th>Decision</th><th>Options</th></tr></thead>
                <tbody>
                  <tr><td><strong>3</strong></td><td>Continue marketplace?</td><td>&lt;200 architects → tool-only SaaS or increase BD</td></tr>
                  <tr><td><strong>6</strong></td><td>Product-market fit?</td><td>Scale vs Iterate vs Fundamental pivot</td></tr>
                  <tr><td><strong>9</strong></td><td>Mobile app timing?</td><td>Launch now vs Phase 3 vs web-only</td></tr>
                  <tr><td><strong>12</strong></td><td>Ready for Series A?</td><td>Raise now vs grow more vs bootstrap</td></tr>
                  <tr><td><strong>15</strong></td><td>Enterprise investment?</td><td>Hire enterprise team vs opportunistic</td></tr>
                  <tr><td><strong>18</strong></td><td>International expansion?</td><td>Singapore pilot vs deeper India vs franchise</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🚦 Go/No-Go Criteria">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Phase 1 (Month 6) — PMF</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th style={{ color: 'green' }}>Go</th><th style={{ color: '#b8860b' }}>Iterate</th><th style={{ color: 'red' }}>Stop</th></tr></thead>
                <tbody>
                  <tr><td>Signups</td><td>&gt;50K</td><td>20-50K</td><td>&lt;20K</td></tr>
                  <tr><td>Free→Paid</td><td>&gt;3%</td><td>1.5-3%</td><td>&lt;1.5%</td></tr>
                  <tr><td>Designs/user</td><td>&gt;3 avg</td><td>1-3</td><td>&lt;1</td></tr>
                  <tr><td>Architects</td><td>&gt;500</td><td>200-500</td><td>&lt;200</td></tr>
                  <tr><td>Consultations</td><td>&gt;50/mo</td><td>10-50</td><td>&lt;10</td></tr>
                  <tr><td>30d retention</td><td>&gt;25%</td><td>15-25%</td><td>&lt;15%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Phase 2 (Month 12) — Revenue</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th style={{ color: 'green' }}>Go</th><th style={{ color: '#b8860b' }}>Iterate</th><th style={{ color: 'red' }}>Stop</th></tr></thead>
                <tbody>
                  <tr><td>MRR</td><td>&gt;₹19L</td><td>₹10-19L</td><td>&lt;₹10L</td></tr>
                  <tr><td>MRR growth</td><td>&gt;15% MoM</td><td>8-15%</td><td>&lt;8%</td></tr>
                  <tr><td>Blended CAC</td><td>&lt;₹400</td><td>₹400-800</td><td>&gt;₹800</td></tr>
                  <tr><td>Architect NPS</td><td>&gt;50</td><td>30-50</td><td>&lt;30</td></tr>
                  <tr><td>Consults/mo</td><td>&gt;500</td><td>100-500</td><td>&lt;100</td></tr>
                  <tr><td>Organic ratio</td><td>&gt;30%</td><td>15-30%</td><td>&lt;15%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      <Card title="⚠️ Risk Assessment — 16 Risks Scored">
        <Tabs tabs={['Critical (Top 5)', 'Significant (6-12)', 'Risk Matrix', 'Scenario-Linked']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>Risk</th><th>Prob</th><th>Impact</th><th>Mitigation</th><th>Fallback</th></tr></thead>
                <tbody>
                  <tr><td><strong>1</strong></td><td>AI design quality</td><td>40-50%</td><td>HIGH</td><td>Rule-based templates first; "inspiration only"; architect review</td><td>Pivot to curated template library</td></tr>
                  <tr><td><strong>2</strong></td><td>Marketplace cold start</td><td>35-45%</td><td>HIGH</td><td>Free listing; Instagram import; 5 free leads; 20 founding architects</td><td>Tool-only SaaS model</td></tr>
                  <tr><td><strong>3</strong></td><td>Livspace self-serve launch</td><td>30-40%</td><td>HIGH</td><td>Move fast; build data moat; focus underserved segments</td><td>Undercut free tier; accelerate Vastu</td></tr>
                  <tr><td><strong>4</strong></td><td>CAC exceeds projections</td><td>35-50%</td><td>HIGH</td><td>Content-first; referral (K=0.5-0.8); developer partnerships</td><td>Kill underperformers fast</td></tr>
                  <tr><td><strong>5</strong></td><td>AI design liability</td><td>15-25%</td><td>HIGH</td><td>Disclaimers; block structural suggestions; liability insurance</td><td>Legal counsel; emerging law</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>#</th><th>Risk</th><th>Prob</th><th>Impact</th><th>Mitigation</th></tr></thead>
                <tbody>
                  <tr><td>6</td><td>Revenue concentration (subs only)</td><td>40%</td><td>MED</td><td>Diversify early; quarterly revenue mix targets</td></tr>
                  <tr><td>7</td><td>Data privacy breach</td><td>20-30%</td><td>MED-HIGH</td><td>Encryption; SOC 2 roadmap; min retention; audit</td></tr>
                  <tr><td>8</td><td>AI provider dependency</td><td>30-40%</td><td>MED</td><td>Multi-provider; open-source fallback; proprietary fine-tune</td></tr>
                  <tr><td>9</td><td>Architect quality</td><td>40-50%</td><td>MED</td><td>CoA verification; ratings; money-back guarantee</td></tr>
                  <tr><td>10</td><td>Free→Paid conversion low</td><td>35-45%</td><td>MED</td><td>Strategic paywall; A/B test; Vastu = paid-only</td></tr>
                  <tr><td>11</td><td>Team hiring (AI/ML talent)</td><td>40%</td><td>MED</td><td>Remote-first; equity; API-based start</td></tr>
                  <tr><td>12</td><td>State regulatory variation</td><td>30-40%</td><td>MED</td><td>"Design inspiration" positioning; not "architectural services"</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: 'monospace', fontSize: '.8rem', whiteSpace: 'pre-wrap', background: '#f8f9fa', padding: 12, borderRadius: 8 }}>
{`         LOW Impact      MEDIUM Impact       HIGH Impact
HIGH   |              | R10 Conversion | R4 CAC Escalation  |
Prob   |              | R11 Hiring     |                    |
       |              | R9 Quality     |                    |
MED    | R13 AR       | R6 Rev Mix     | R1 AI Quality      |
Prob   | R15 Seasonal | R8 Tech Deps   | R2 Cold Start      |
       |              | R12 Regional   | R3 Livspace        |
LOW    | R14 Int'l    | R7 Breach      | R5 AI Liability    |
Prob   | R16 Platform |                |                    |`}
            </p>
            <p style={{ fontSize: '.85rem', marginTop: 8 }}>Review cadence: Top 5 weekly (founder), full register monthly (leadership), strategic quarterly (board).</p>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Scenario</th><th>Triggered Risks</th><th>Response</th></tr></thead>
                <tbody>
                  <tr><td><strong>Livspace launches self-serve</strong></td><td>R3 + R4 + R10</td><td>Accelerate differentiation; consider fundraise for runway</td></tr>
                  <tr><td><strong>AI regulation in India</strong></td><td>R5 + R8 + R12</td><td>Early compliance; open-source model fallback</td></tr>
                  <tr><td><strong>Economic downturn</strong></td><td>R4 + R6 + R10</td><td>Cut costs; retention over acquisition; free tier emphasis</td></tr>
                  <tr><td><strong>Viral growth exceeds plan</strong></td><td>R8 + R9 + R11</td><td>Pre-negotiate cloud; accelerate architect supply; raise capital</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="📊 Scenario Planning — 3 Cases">
        <div className="stats-grid">
          <StatCard value="25%" label="Bull Probability" color="green" />
          <StatCard value="50%" label="Base Probability" color="blue" />
          <StatCard value="25%" label="Bear Probability" color="red" />
          <StatCard value="₹59 Cr" label="Expected Y3 Revenue" color="gold" />
        </div>
        <Tabs tabs={['Comparison', 'Bull Case', 'Bear Case + Pivots', 'Inflection Points', 'Contingency']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>🐂 Bull (25%)</th><th>📊 Base (50%)</th><th>🐻 Bear (25%)</th></tr></thead>
                <tbody>
                  <tr><td><strong>Year 1 Revenue</strong></td><td>₹4.6 Cr</td><td>₹3.06 Cr</td><td>₹1.8 Cr</td></tr>
                  <tr><td><strong>Year 3 Revenue</strong></td><td>₹86.5 Cr</td><td>₹57.7 Cr</td><td>₹34.6 Cr</td></tr>
                  <tr><td><strong>Year 3 EBITDA</strong></td><td>₹30-38 Cr</td><td>₹16-23 Cr</td><td>₹5-10 Cr</td></tr>
                  <tr><td><strong>Break-even</strong></td><td>Month 12-15</td><td>Month 18-22</td><td>Month 24-30</td></tr>
                  <tr><td><strong>Series A</strong></td><td>Month 10-12</td><td>Month 15-18</td><td>Month 24+ or skip</td></tr>
                  <tr><td><strong>Peak team (Y3)</strong></td><td>60+</td><td>40</td><td>25-30</td></tr>
                  <tr><td><strong>International</strong></td><td>Year 2</td><td>Year 3</td><td>Not in plan</td></tr>
                  <tr><td><strong>Year 3 Valuation</strong></td><td>₹500-800 Cr</td><td>₹250-400 Cr</td><td>₹100-200 Cr</td></tr>
                </tbody>
              </table>
            </div>
            <BarChart data={[
              { label: 'Expected Revenue (Y3)', width: '70%', text: '₹59.1 Cr (probability-weighted)', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
              { label: 'Expected Valuation (Y3)', width: '55%', text: '₹263-400 Cr (weighted)', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
            ]} />
          </div>
          <div>
            <p style={{ fontSize: '.9rem', marginBottom: 8 }}><strong>"Everything clicks"</strong> — viral content, strong conversion, favorable market, no new competition for 18+ months.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
                <tbody>
                  <tr><td>Users</td><td>225K</td><td>900K</td><td>3M</td></tr>
                  <tr><td>Paying consumers</td><td>9,000</td><td>45,000</td><td>150,000</td></tr>
                  <tr><td>Revenue</td><td>₹4.6 Cr</td><td>₹24.6 Cr</td><td>₹86.5 Cr</td></tr>
                  <tr><td>EBITDA</td><td>-₹1-2 Cr</td><td>+₹5-8 Cr</td><td>+₹30-38 Cr</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Bull Triggers</h3>
            <ul style={{ paddingLeft: 16, fontSize: '.88rem', lineHeight: 1.8 }}>
              <li>Instagram reel goes viral (&gt;5M views) showing AI redesign of real Indian home</li>
              <li>Major builder partnership (Godrej/Prestige) distributes app to all buyers</li>
              <li>AI quality is genuinely "wow" — users screenshot and share unprompted</li>
              <li>Top architects recommend platform to peers → organic supply growth</li>
            </ul>
          </div>
          <div>
            <p style={{ fontSize: '.9rem', marginBottom: 8 }}><strong>"Headwinds"</strong> — expensive acquisition, slow organic growth, competition, tighter market.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
                <tbody>
                  <tr><td>Users</td><td>90K</td><td>360K</td><td>1.2M</td></tr>
                  <tr><td>Revenue</td><td>₹1.8 Cr</td><td>₹9.8 Cr</td><td>₹34.6 Cr</td></tr>
                  <tr><td>EBITDA</td><td>-₹2-3 Cr</td><td>Breakeven</td><td>+₹5-10 Cr</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Bear Case Pivot Options</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Pivot</th><th>Description</th><th>Viability</th></tr></thead>
                <tbody>
                  <tr><td><strong>B2B-first</strong></td><td>Sell AI tool to architects/firms (Foyr Neo model)</td><td>HIGH</td></tr>
                  <tr><td><strong>Virtual staging SaaS</strong></td><td>Serve RE developers/agents</td><td>MED-HIGH</td></tr>
                  <tr><td><strong>White-label tool</strong></td><td>License engine to 99acres, Housing.com</td><td>MEDIUM</td></tr>
                  <tr><td><strong>Content/affiliate</strong></td><td>Design inspiration + affiliate (Houzz Lite)</td><td>MEDIUM</td></tr>
                  <tr><td><strong>Acqui-hire</strong></td><td>Sell team/tech to Livspace/HomeLane</td><td>FALLBACK</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', fontWeight: 600, marginTop: 8 }}>Even bear case reaches profitability in Year 3 — business model fundamentals are sound.</p>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Month</th><th>Question</th><th>Go Signal</th><th>No-Go Signal</th></tr></thead>
                <tbody>
                  <tr><td><strong>3</strong></td><td>"Do users care?"</td><td>3+ designs on first visit</td><td>1 design and leave → product issue</td></tr>
                  <tr><td><strong>6</strong></td><td>"Does marketplace work?"</td><td>&gt;100 consultations in Month 6</td><td>&lt;20 despite 500 architects</td></tr>
                  <tr><td><strong>12</strong></td><td>"Venture-scale business?"</td><td>₹15L+ MRR, 15%+ MoM growth</td><td>&lt;₹8L MRR → pivot or bootstrap</td></tr>
                  <tr><td><strong>18</strong></td><td>"Scale path?"</td><td>Series A closed, 300K+ users</td><td>Couldn't raise → seek strategic alternatives</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Runway by Scenario (Seed ₹3-5 Cr)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Scenario</th><th>Seed Lasts Until</th></tr></thead>
                <tbody>
                  <tr><td>Bull</td><td>Month 10-12 (raise Series A early)</td></tr>
                  <tr><td>Base</td><td>Month 14-16 (sufficient for Series A)</td></tr>
                  <tr><td>Bear</td><td>Month 10-12 (cut costs or bridge round)</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Emergency Measures</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Level</th><th>Trigger</th><th>Action</th></tr></thead>
                <tbody>
                  <tr><td style={{ background: '#ffffcc' }}>Yellow</td><td>6mo remaining</td><td>Freeze hiring; -30% marketing; seek bridge</td></tr>
                  <tr><td style={{ background: '#ffd9b3' }}>Orange</td><td>4mo remaining</td><td>-20% team; cut non-essential; active bridge fundraise</td></tr>
                  <tr><td style={{ background: '#ffcccc' }}>Red</td><td>2mo remaining</td><td>Skeleton team (founders + 2-3); acqui-hire/merger/pivot</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🎨 Brand Positioning & Strategy">
        <Tabs tabs={['Positioning', 'Personality & Voice', 'Messaging Framework', 'Differentiation', 'Launch Strategy']}>
          <div>
            <div style={{ padding: 16, borderRadius: 12, background: 'var(--green-bg)', border: '2px solid var(--green)', marginBottom: 12 }}>
              <p style={{ margin: 0, fontSize: '.95rem' }}>
                <strong>For</strong> Indian homeowners (25-45) frustrated by expensive designers and unreliable DIY<br />
                <strong>Unlike</strong> Livspace (expensive managed), Pinterest (inspiration only), local contractors (unreliable)<br />
                <strong>We</strong> combine instant AI gratification with verified professional trust — starting from free
              </p>
            </div>
            <h3 className="card-subtitle">Competitive Positioning Map</h3>
            <p style={{ fontFamily: 'monospace', fontSize: '.78rem', whiteSpace: 'pre-wrap', background: '#f8f9fa', padding: 12, borderRadius: 8 }}>
{`            HIGH SERVICE
                │    ● Livspace (₹5-50L)
                │    ● Boutique Architect (₹3-20L)
        ★ US ───┤ 
(₹0-2K/mo      │    ● Local Contractor (₹50K-5L)
 AI + on-demand)│
   LOW PRICE ───┼──────── HIGH PRICE
  ● Pinterest   │
  ● Planner 5D  │    ● Houzz (India ≈ absent)
            LOW SERVICE`}
            </p>
            <p style={{ fontSize: '.85rem', marginTop: 8 }}><strong>Our unique position: Low price + medium-high service.</strong> Nobody else occupies this quadrant.</p>
          </div>
          <div>
            <div className="grid-2">
              <div>
                <h3 className="card-subtitle">Brand Archetype: The Creator</h3>
                <div className="table-wrap">
                  <table>
                    <thead><tr><th>Dimension</th><th>Description</th></tr></thead>
                    <tbody>
                      <tr><td>Personality</td><td>Imaginative, empowering, approachable, modern</td></tr>
                      <tr><td>Voice</td><td>Confident not arrogant; helpful not preachy; Indian not parochial</td></tr>
                      <tr><td>Tone</td><td>Warm, enthusiastic, design-savvy, occasionally witty</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="card-subtitle">Voice Examples</h3>
                <div className="table-wrap">
                  <table>
                    <thead><tr><th>Scenario</th><th>Wrong</th><th>Right</th></tr></thead>
                    <tbody>
                      <tr><td>Design ready</td><td>"Processed."</td><td>"Your dream living room is ready! ✨"</td></tr>
                      <tr><td>Upsell</td><td>"Upgrade for features."</td><td>"Love this? HD renders from ₹499."</td></tr>
                      <tr><td>Error</td><td>"Error 500."</td><td>"Oops! Design studio snag — try again!"</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="grid-3" style={{ marginTop: 8 }}>
              <div className="box box-green" style={{ borderRadius: 12, textAlign: 'center' }}>✓ Imaginative</div>
              <div className="box box-green" style={{ borderRadius: 12, textAlign: 'center' }}>✓ Empowering</div>
              <div className="box box-green" style={{ borderRadius: 12, textAlign: 'center' }}>✓ Approachable</div>
              <div className="box" style={{ borderRadius: 12, background: '#fff0f0', textAlign: 'center' }}>✗ NOT Elitist</div>
              <div className="box" style={{ borderRadius: 12, background: '#fff0f0', textAlign: 'center' }}>✗ NOT Technical</div>
              <div className="box" style={{ borderRadius: 12, background: '#fff0f0', textAlign: 'center' }}>✗ NOT Corporate</div>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Audience</th><th>Primary Message</th><th>CTA</th></tr></thead>
                <tbody>
                  <tr><td><strong>Homeowner (awareness)</strong></td><td>"See your room redesigned by AI in 30 seconds — free"</td><td>Try it free</td></tr>
                  <tr><td><strong>Homeowner (consideration)</strong></td><td>"HD renders + unlimited designs from ₹499/month"</td><td>Start designing</td></tr>
                  <tr><td><strong>Homeowner (conversion)</strong></td><td>"Connect with verified architects from ₹500"</td><td>Book an architect</td></tr>
                  <tr><td><strong>Architect (awareness)</strong></td><td>"Get leads from homeowners who know what they want"</td><td>Join as architect</td></tr>
                  <tr><td><strong>Architect (conversion)</strong></td><td>"Average architect earns ₹50K+/mo from our platform"</td><td>Create your profile</td></tr>
                  <tr><td><strong>Investor</strong></td><td>"Canva for design + Urban Company for architects"</td><td>Let's talk</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Vs.</th><th>Our Differentiation</th></tr></thead>
                <tbody>
                  <tr><td><strong>Livspace</strong></td><td>"Livspace costs ₹5-50L and takes months. We: 30 seconds, ₹499/mo."</td></tr>
                  <tr><td><strong>Pinterest</strong></td><td>"Pinterest shows someone else's room. We redesign YOUR room."</td></tr>
                  <tr><td><strong>Planner 5D</strong></td><td>"Planner 5D: drag-and-drop for hours. Us: AI does the design."</td></tr>
                  <tr><td><strong>Local contractor</strong></td><td>"See the finished design before spending a rupee."</td></tr>
                  <tr><td><strong>Interior AI</strong></td><td>"Interior AI: one image. Us: full design + shopping list + architect."</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Pre-Launch (Month -2 to 0)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Activity</th><th>Channel</th><th>Goal</th></tr></thead>
                <tbody>
                  <tr><td>"Coming soon" landing page</td><td>Website</td><td>5,000 waitlist emails</td></tr>
                  <tr><td>"What if AI redesigned your room?" teasers</td><td>Instagram Reels</td><td>100K+ views</td></tr>
                  <tr><td>"Be first to join" architect outreach</td><td>LinkedIn, email</td><td>50 founding architects</td></tr>
                  <tr><td>Press: "Indian Canva for home design"</td><td>YourStory, Inc42</td><td>Media coverage</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Launch Week</h3>
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>Product Hunt</strong> — Top 5 Product of the Day</div>
              <div className="box box-purple" style={{ borderRadius: 12 }}><strong>Instagram</strong> — Before→After AI transformations: 500K impressions</div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}><strong>Influencers</strong> — 10 home design influencers w/ early access: 50K referrals</div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}><strong>Bangalore event</strong> — Local press + architect community + first 100 designs</div>
            </div>
            <p style={{ fontSize: '.85rem', fontWeight: 600, marginTop: 12 }}>Secret weapon: Vastu — unique to India, high search volume, emotional resonance, no competitor addresses it.</p>
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
