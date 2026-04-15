import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectValidation() {
  return (
    <div>
      <SectionHeader icon="✅" title="Validation & Feasibility" sub="7 validation dimensions: Idea (7.5/10), Market (8/10), Feasibility (7/10), Audience (8.5/10), PoC design, cost estimates" />

      <div className="stats-grid">
        <StatCard value="7.5/10" label="Idea Validation Score" color="green" />
        <StatCard value="8/10" label="Market Validation Score" color="blue" />
        <StatCard value="7/10" label="Feasibility Score" color="gold" />
        <StatCard value="8.5/10" label="Audience Validation Score" color="purple" />
      </div>

      <Card title="💡 1. Idea Validation — Score: 7.5/10">
        <div style={{ background: 'var(--green-bg)', border: '2px solid var(--green)', borderRadius: 12, padding: 16, margin: '0 0 16px', fontStyle: 'italic' }}>
          Core Hypothesis: "Homeowners and architects need a single platform that combines spatial measurement, AI-powered design generation, and professional consultation."
        </div>
        <h3 className="card-subtitle">Validation Signals</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Signal</th><th>Evidence</th></tr></thead>
            <tbody>
              <tr><td><strong>Proven pain point</strong></td><td>Houzz was founded in 2009 specifically because its founders "found it difficult to communicate their vision for their home, and to find the right professionals." They reached <strong>65 million users</strong> by 2022 — proof the pain is massive.</td></tr>
              <tr><td><strong>Fragmented solutions exist</strong></td><td>Magicplan (AR measurement), Planner 5D (3D design), Houzz (marketplace), Livspace (full-service, $450M raised) — each solving <strong>one slice</strong>. No single app combines all three.</td></tr>
              <tr><td><strong>Technology convergence</strong></td><td>Apple RoomPlan API, ARCore maturity, Stable Diffusion + ControlNet, LiDAR on mainstream phones — the tech that makes this viable <strong>only became accessible in the last 2-3 years</strong>.</td></tr>
              <tr><td><strong>Timing</strong></td><td>Generative AI hype cycle creating consumer acceptance for AI outputs. Post-pandemic home renovation boom continues.</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">Validation Risks</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Risk</th><th>Severity</th><th>Mitigation</th></tr></thead>
            <tbody>
              <tr><td>"Jack of all trades" — combining measurement + design + marketplace may dilute each</td><td><span className="badge badge-red">High</span></td><td>MVP focuses on one flow (manual input → AI design → browse architects). Scale features sequentially.</td></tr>
              <tr><td>Users may prefer specialized tools</td><td><span className="badge badge-yellow">Medium</span></td><td>The value is in the <strong>handoff between features</strong>, not individual features alone.</td></tr>
              <tr><td>AI designs may not be architecturally sound</td><td><span className="badge badge-red">High</span></td><td>Gate with disclaimers; professional review layer; "inspiration only" framing initially.</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📈 2. Market Validation — Score: 8/10">
        <h3 className="card-subtitle">Market Size (TAM → SAM → SOM)</h3>
        <BarChart data={[
          { label: 'Global TAM', width: '100%', text: '$5.5–6.5B by 2028 (8-11% CAGR)', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'India TAM (RE)', width: '70%', text: '$200B → $1 Trillion by 2030', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'India SAM', width: '35%', text: '$500M–$2B design tools/services', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'SOM (Year 1-3)', width: '5%', text: '$1-5M ARR achievable', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
        ]} />
        <h3 className="card-subtitle">India Market Tailwinds (IBEF Data)</h3>
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🏠 Housing ranked 15th globally</strong> — 7.7% annual price growth; 406,889 homes delivered in FY25 (+33% YoY)
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>💎 Luxury dominates</strong> — Homes above ₹1 Crore command 62% market share in H1 2025; these buyers invest heavily in interior design
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>🏗️ New construction pipeline</strong> — Maharashtra targets 35L houses in 5 years; Smart City Project: 100 cities, $30B investment
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>💰 Institutional investment</strong> — ₹37,625 Cr ($4.3B) in first 9 months of 2025; prices rose 13-15% in FY25
          </div>
        </div>
        <h3 className="card-subtitle">Competitor Revenue Benchmarks</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Company</th><th>Revenue</th><th>Valuation</th><th>Users</th><th>Model</th></tr></thead>
            <tbody>
              <tr><td><strong>Houzz</strong></td><td>$400-500M</td><td>$4B</td><td>65M users, 2.7M pros</td><td>Marketplace + SaaS (Houzz Pro)</td></tr>
              <tr><td><strong>Livspace</strong></td><td>₹1,148 Cr ($140M)</td><td>$1.2B (KKR-led)</td><td>India + Singapore</td><td>Full-service managed interiors</td></tr>
              <tr><td><strong>Magicplan</strong></td><td>~$10-20M est.</td><td>Acquired by B&O</td><td>Professional focus</td><td>AR measurement SaaS</td></tr>
              <tr><td><strong>Planner 5D</strong></td><td>~$5-10M est.</td><td>Private</td><td>80M+ projects created</td><td>Freemium design tool</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🔧 3. Technical Feasibility — Score: 7/10">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Feature</th><th>Technology</th><th>Maturity</th><th>Feasibility</th></tr></thead>
            <tbody>
              <tr><td><strong>AR Room Scanning</strong></td><td>Apple RoomPlan, ARCore</td><td>⚠️ Medium</td><td>Feasible with caveats — great on LiDAR, acceptable on others with manual correction</td></tr>
              <tr><td><strong>Manual Floor Plan</strong></td><td>Fabric.js, Konva.js</td><td>✅ Mature</td><td>Highly feasible — proven web tech</td></tr>
              <tr><td><strong>Blueprint Parsing</strong></td><td>OpenCV + OCR + layout analysis</td><td>⚠️ Medium</td><td>Feasible but resource-intensive — defer to Phase 2</td></tr>
              <tr><td><strong>AI Design (2D)</strong></td><td>Rule-based + ML optimization</td><td>✅ Mature/Medium</td><td>Feasible — start rule-based, enhance ML</td></tr>
              <tr><td><strong>AI Design (3D)</strong></td><td>Stable Diffusion / ControlNet</td><td>⚠️ Medium</td><td>Feasible but requires iteration</td></tr>
              <tr><td><strong>360° Walkthroughs</strong></td><td>Three.js / Babylon.js</td><td>✅ Mature</td><td>Highly feasible</td></tr>
              <tr><td><strong>Video Consultation</strong></td><td>WebRTC (Twilio, Agora)</td><td>✅ Mature</td><td>Highly feasible</td></tr>
              <tr><td><strong>Real-time Collaboration</strong></td><td>WebSockets + CRDT (Yjs)</td><td>✅ Mature</td><td>Feasible — defer to post-MVP initially</td></tr>
              <tr><td><strong>Marketplace/Matching</strong></td><td>Standard web stack + search</td><td>✅ Mature</td><td>Highly feasible</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">MVP Team Requirements</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Role</th><th>Count</th><th>Purpose</th></tr></thead>
            <tbody>
              <tr><td>Full-stack developers</td><td>2-3</td><td>React/Next.js + Node.js/Python backend</td></tr>
              <tr><td>Mobile developer</td><td>1</td><td>React Native / Flutter for cross-platform</td></tr>
              <tr><td>AI/ML engineer</td><td>1</td><td>Design generation, layout optimization</td></tr>
              <tr><td>UI/UX designer</td><td>1</td><td>Critical — design app needs exemplary design</td></tr>
              <tr><td>Product manager</td><td>1</td><td>Marketplace dynamics, user flows</td></tr>
              <tr><td><strong>Total MVP team</strong></td><td><strong>6-8</strong></td><td></td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🎯 4. Audience Validation — Score: 8.5/10">
        <Tabs tabs={['Homeowners', 'First-Home Buyers', 'Architects', 'Developers', 'Priority Matrix']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Attribute</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td><strong>Size</strong></td><td>India: ~10M urban housing shortage; 400K+ homes delivered annually; 62% premium (₹1Cr+)</td></tr>
                  <tr><td><strong>Pain Points</strong></td><td>Can't visualize changes; overwhelmed by options; don't trust contractors; budget uncertainty</td></tr>
                  <tr><td><strong>Willingness to Pay</strong></td><td>High — avg interior design spend 10-20% of home value; ₹5-30L for premium homes</td></tr>
                  <tr><td><strong>Acquisition Channel</strong></td><td>Google search, Instagram, YouTube, real estate handover</td></tr>
                  <tr><td><strong>Validation</strong></td><td>Livspace built $140M revenue. Houzz has 65M users globally. <strong>Proven.</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Attribute</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td><strong>Size</strong></td><td>~10M marriages/year in India; ~50% urban couples invest in home setup</td></tr>
                  <tr><td><strong>Pain Points</strong></td><td>First-time overwhelm; limited budget; want trendy designs</td></tr>
                  <tr><td><strong>Willingness to Pay</strong></td><td>₹10-50K for guided design; high affiliate conversion potential</td></tr>
                  <tr><td><strong>Acquisition Channel</strong></td><td>WedMeGood, Shaadi.com partnerships; Instagram; word-of-mouth</td></tr>
                  <tr><td><strong>Validation</strong></td><td>Livspace's primary customer persona. <strong>Proven.</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Attribute</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td><strong>Size</strong></td><td>India: ~120K registered architects; ~300K interior designers</td></tr>
                  <tr><td><strong>Pain Points</strong></td><td>Client acquisition is word-of-mouth; portfolio hosting fragmented; time on basic consults</td></tr>
                  <tr><td><strong>Willingness to Pay</strong></td><td>₹1-5K/month for lead generation; 10-15% of project fee for platform clients</td></tr>
                  <tr><td><strong>Acquisition Channel</strong></td><td>LinkedIn, architecture forums, design expos, Council of Architecture partnerships</td></tr>
                  <tr><td><strong>Validation</strong></td><td>Houzz has 2.7M professionals. Houzz Pro SaaS was their strategic pivot. <strong>Proven.</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Attribute</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td><strong>Size</strong></td><td>India: 25K+ registered developers; top 20 launch 100+ projects/year each</td></tr>
                  <tr><td><strong>Pain Points</strong></td><td>Need design options for model flats; virtual staging for pre-sale</td></tr>
                  <tr><td><strong>Willingness to Pay</strong></td><td>₹50K–5L per project for virtual staging/design</td></tr>
                  <tr><td><strong>Validation</strong></td><td>Livspace expanded to commercial interiors (2022). Virtual staging growing. <strong>Emerging.</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Segment</th><th>Market Size</th><th>Pain</th><th>WTP</th><th>Reachability</th><th>Priority</th></tr></thead>
                <tbody>
                  <tr><td><strong>Homeowners (renovation)</strong></td><td>★★★★★</td><td>★★★★☆</td><td>★★★★☆</td><td>★★★★☆</td><td><span className="badge badge-green">P0 — Launch</span></td></tr>
                  <tr><td><strong>First-home buyers</strong></td><td>★★★★☆</td><td>★★★★★</td><td>★★★☆☆</td><td>★★★★★</td><td><span className="badge badge-green">P0 — Launch</span></td></tr>
                  <tr><td><strong>Architects/Designers</strong></td><td>★★★☆☆</td><td>★★★★☆</td><td>★★★★☆</td><td>★★★☆☆</td><td><span className="badge badge-blue">P1 — Month 2</span></td></tr>
                  <tr><td><strong>Real Estate Developers</strong></td><td>★★☆☆☆</td><td>★★★☆☆</td><td>★★★★★</td><td>★★☆☆☆</td><td><span className="badge badge-yellow">P2 — Phase 3</span></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🧪 5. Proof of Concept Design">
        <h3 className="card-subtitle">PoC Objective</h3>
        <p>Validate: <em>"Users can input room dimensions, receive AI-generated design suggestions, and connect with a professional architect — in one seamless flow."</em></p>
        <h3 className="card-subtitle">PoC Scope (2-3 Week Sprint)</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Step</th><th>Week</th><th>What</th><th>Tech</th></tr></thead>
            <tbody>
              <tr><td><strong>Room Input</strong></td><td>Week 1</td><td>Simple web canvas: draw rectangular room, enter dimensions, place doors/windows, show calculated area</td><td>React + Fabric.js/Konva.js</td></tr>
              <tr><td><strong>AI Design Generation</strong></td><td>Week 1-2</td><td>Generate 3 design options: pre-built templates + Stable Diffusion/DALL·E renders. Display 2D layout + 3D view side by side</td><td>Python (FastAPI) + OpenAI/Replicate API</td></tr>
              <tr><td><strong>Architect Connection</strong></td><td>Week 2-3</td><td>5-6 mock architect profiles with portfolios, ratings, pricing. "Book Consultation" button + scheduling + chat mockup</td><td>Static data + basic UI</td></tr>
              <tr><td><strong>Vastu Check (bonus)</strong></td><td>Week 2-3</td><td>Simple Vastu compliance checker based on room orientation + furniture placement</td><td>Rule-based engine</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">Success Metrics & Decision Gate</h3>
        <div className="grid-2">
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Target</th></tr></thead>
                <tbody>
                  <tr><td>Task completion rate</td><td>&gt;70% complete full flow</td></tr>
                  <tr><td>Design satisfaction</td><td>&gt;60% rate as "useful"</td></tr>
                  <tr><td>Consultation intent</td><td>&gt;30% click "Book"</td></tr>
                  <tr><td>Time to first design</td><td>&lt;3 minutes</td></tr>
                  <tr><td>NPS</td><td>&gt;40 among testers</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Result</th><th>Action</th></tr></thead>
                <tbody>
                  <tr><td style={{ color: 'var(--green)' }}><strong>🟢 GREEN</strong></td><td>&gt;70% completion + &gt;60% satisfaction + &gt;30% consult → Proceed to MVP</td></tr>
                  <tr><td style={{ color: 'var(--orange)' }}><strong>🟡 YELLOW</strong></td><td>Mixed results → Iterate weak areas, retest</td></tr>
                  <tr><td style={{ color: 'var(--red)' }}><strong>🔴 RED</strong></td><td>&lt;50% completion OR &lt;40% satisfaction → Pivot approach</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h3 className="card-subtitle">PoC Budget: ₹3-5L ($3.5K-6K)</h3>
        <p style={{ fontSize: '.88rem', color: 'var(--text-light)' }}>Developer time (2 devs × 2-3 weeks): ₹2-4L | AI API costs: ₹10-20K | Hosting: ₹0-2K | User testing incentives: ₹20-30K | Landing page + ads: ₹30-50K</p>
      </Card>

      <Card title="💰 6. Setup & Operations Cost">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">MVP Development (3-4 Months)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Category</th><th>Total Cost</th></tr></thead>
                <tbody>
                  <tr><td>Team (6 people × 4 months)</td><td>₹48-72L</td></tr>
                  <tr><td>Cloud infrastructure</td><td>₹2-4L</td></tr>
                  <tr><td>Third-party APIs</td><td>₹1.2-2L</td></tr>
                  <tr><td>AI/ML compute (GPU)</td><td>₹4-8L</td></tr>
                  <tr><td>Design & prototyping</td><td>₹60K</td></tr>
                  <tr><td>Legal & compliance</td><td>₹2-3L</td></tr>
                  <tr><td>Buffer (15%)</td><td>₹8-13L</td></tr>
                  <tr><td><strong>Total MVP</strong></td><td><strong>₹66L–1.04 Cr ($77K–$122K)</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Monthly Operations (Post-Launch)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Category</th><th>Monthly Cost</th></tr></thead>
                <tbody>
                  <tr><td>Team (scaling to 8-10)</td><td>₹18-30L</td></tr>
                  <tr><td>Cloud (scaling)</td><td>₹1-3L</td></tr>
                  <tr><td>AI compute (GPU)</td><td>₹2-5L</td></tr>
                  <tr><td>Video/Chat infra</td><td>₹50K-2L</td></tr>
                  <tr><td>Marketing</td><td>₹3-5L</td></tr>
                  <tr><td>Support + Architect onboarding</td><td>₹2-4L</td></tr>
                  <tr><td><strong>Total Monthly Ops</strong></td><td><strong>₹27-49L ($32K–$58K)</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <h3 className="card-subtitle">12-Month Runway Scenarios</h3>
        <BarChart data={[
          { label: 'Lean (bootstrapped)', width: '35%', text: '₹3.5–5 Cr ($410K–590K)', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Comfortable (seed)', width: '65%', text: '₹6–8 Cr ($700K–940K)', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Aggressive (VC)', width: '100%', text: '₹10–15 Cr ($1.2M–1.8M)', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
        ]} />
      </Card>

      <Card title="🎨 7. App Visual Themes">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Theme</th><th>Description</th><th>Target Audience</th></tr></thead>
            <tbody>
              <tr><td><strong>Warm Canvas</strong> ⭐</td><td>Cream/beige base, warm wood tones, soft shadows, hand-drawn illustrations</td><td>Homeowners, first-time renovators (default)</td></tr>
              <tr><td><strong>Modern Minimal</strong></td><td>Pure white space, black typography, subtle gray, glass-morphism</td><td>Design-conscious millennials</td></tr>
              <tr><td><strong>Architect Blueprint</strong></td><td>Dark navy/midnight blue, white wireframe lines, grid overlays, monospace</td><td>Professional architects</td></tr>
              <tr><td><strong>Vibrant Indian</strong></td><td>Rich jewel tones (deep purple, emerald, gold), ornate patterns, Vastu iconography</td><td>Indian market specifically</td></tr>
              <tr><td><strong>Earthy Natural</strong></td><td>Sage greens, terracotta, natural textures (linen, stone)</td><td>Eco-conscious users</td></tr>
              <tr><td><strong>Neo-Brutalist</strong></td><td>Bold colors, thick borders, raw concrete textures, playful asymmetry</td><td>Gen-Z homeowners</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 8, fontSize: '.85rem', color: 'var(--text-light)' }}>
          <strong>Launch with 3 app themes</strong> (Warm Canvas default, Modern Minimal, Architect Blueprint). Expand based on user preference data.
        </p>
      </Card>
    </div>
  )
}
