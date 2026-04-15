import { SectionHeader, Card, StatCard, BarChart } from '../../components/UI'
import { motion } from 'framer-motion'

export default function ArchitectOverview({ navigate }) {
  return (
    <div>
      <SectionHeader icon="🏠" title="Architect App — Executive Overview" sub="AI-powered design platform — &quot;Canva meets Houzz meets AR&quot; for the Indian market" />

      <div className="stats-grid">
        <StatCard value="$5.5–6.5B" label="Global Market by 2028" color="green" />
        <StatCard value="₹57.7 Cr" label="Year 3 Revenue Target (~$6.8M)" color="gold" />
        <StatCard value="₹7,500 Cr" label="India SAM ($900M)" color="blue" />
        <StatCard value="7.5/10" label="Validation Score" color="purple" />
      </div>

      <Card title="🎯 The Vision">
        <p>An all-in-one platform that <strong>democratizes architectural design</strong> by combining AI-powered spatial measurement, intelligent design suggestions, and seamless architect-client collaboration.</p>
        <div style={{ background: 'var(--green-bg)', border: '2px solid var(--green)', borderRadius: 12, padding: 16, margin: '16px 0', fontStyle: 'italic', fontSize: '1.05rem', fontWeight: 500 }}>
          "Canva meets Houzz meets AR" — making professional-quality architectural design accessible to homeowners while giving professionals powerful tools and a client pipeline.
        </div>
        <h3 className="card-subtitle">The Problem — Why This Matters</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li><strong>10M+ Indian homes</strong> renovated annually — homeowners spend 2-6 months, ₹5-30L with ZERO visualization beforehand</li>
          <li><strong>&lt;2% digital penetration</strong> for design tools in India — massive untapped market</li>
          <li><strong>Fragmented solutions:</strong> Magicplan does measurement, Planner 5D does design, Houzz does marketplace — but NO single app combines all three</li>
          <li><strong>125K registered architects</strong> in India struggling with client acquisition — 60% rely only on word-of-mouth</li>
          <li>Gap between DIY tools (too basic) and professional CAD (too complex) leaves the mass market underserved</li>
        </ul>
        <h3 className="card-subtitle">The Solution — 3-Step Flow</h3>
        <div className="grid-3">
          <div className="box box-green" style={{ borderRadius: 12, textAlign: 'center', padding: 20 }}>
            <div style={{ fontSize: '2rem' }}>📐</div>
            <strong>Step 1: Scan/Upload</strong>
            <p style={{ fontSize: '.82rem', marginTop: 6 }}>AR camera scan, manual drawing, or blueprint upload to capture room dimensions</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12, textAlign: 'center', padding: 20 }}>
            <div style={{ fontSize: '2rem' }}>🤖</div>
            <strong>Step 2: AI Designs</strong>
            <p style={{ fontSize: '.82rem', marginTop: 6 }}>Generate multiple layouts: modern, Vastu-compliant, budget-optimized, regional styles</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12, textAlign: 'center', padding: 20 }}>
            <div style={{ fontSize: '2rem' }}>👤</div>
            <strong>Step 3: Connect</strong>
            <p style={{ fontSize: '.82rem', marginTop: 6 }}>Chat, video consult, or hand off to verified architect for professional execution</p>
          </div>
        </div>
      </Card>

      <Card title="📊 Why Now — 4 Forces Converging">
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🤖 Generative AI Maturity</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Stable Diffusion + ControlNet enable instant photorealistic room design generation. The tech that makes this viable only became accessible in the last 2-3 years.</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>📱 AR Democratized</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Apple RoomPlan API, LiDAR on mainstream phones, ARCore maturity — room scanning no longer requires expensive hardware.</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>🇮🇳 India Digital Adoption</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>10B+ UPI transactions/month. India housing ranked 15th globally with 7.7% annual price growth. 406,889 homes delivered in FY25 in top 9 cities (+33% YoY).</p>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>🏠 Post-COVID Home Investment</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>WFH revolution drove unprecedented home investment. Luxury homes (₹1Cr+) now 62% market share. Maharashtra targets 35L houses in 5 years.</p>
          </div>
        </div>
      </Card>

      <Card title="💰 Financial Snapshot — 3-Year Trajectory">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
            <tbody>
              <tr><td><strong>Revenue</strong></td><td>₹3.06 Cr (~$360K)</td><td>₹16.4 Cr (~$1.9M)</td><td>₹57.7 Cr (~$6.8M)</td></tr>
              <tr><td><strong>Total Users</strong></td><td>150K</td><td>600K</td><td>2M</td></tr>
              <tr><td><strong>MAU</strong></td><td>90K</td><td>350K</td><td>1.1M</td></tr>
              <tr><td><strong>Paying Consumers</strong></td><td>4,500</td><td>21,000</td><td>77,000</td></tr>
              <tr><td><strong>Architects Listed</strong></td><td>2,000</td><td>8,000</td><td>20,000</td></tr>
              <tr><td><strong>EBITDA Margin</strong></td><td>Negative</td><td>9-27%</td><td>27-39%</td></tr>
              <tr><td><strong>Designs Generated</strong></td><td>500K</td><td>3M</td><td>12M</td></tr>
              <tr><td><strong>Consultations/mo</strong></td><td>3,000</td><td>8,000</td><td>25,000</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💵 Funding Strategy">
        <div className="stats-grid">
          <StatCard value="₹50L–1Cr" label="Bootstrapped / Angel (Month 0)" color="green" />
          <StatCard value="₹3–5 Cr" label="Seed (Month 4-6)" color="blue" />
          <StatCard value="₹25–40 Cr" label="Series A (Month 15-18)" color="purple" />
          <StatCard value="₹100–150 Cr" label="Series B (Month 30-36)" color="gold" />
        </div>
        <h3 className="card-subtitle">Comparable Raises</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li><strong>Livspace:</strong> $4.6M seed (2014) → $15M B (2016) → $70M C (2018) → $180M KKR-led (2022, unicorn)</li>
          <li><strong>Houzz:</strong> $2M seed (2010) → $35M B (2013) → $150M D (2014, $2.3B valuation)</li>
          <li>Our trajectory is <strong>more capital-efficient</strong> due to AI-first approach vs. managed-services model</li>
        </ul>
      </Card>

      <Card title="🛡️ Competitive Moat — Compounding Advantage">
        <BarChart data={[
          { label: 'Data Network Effects', width: '100%', text: '★★★★★ Strongest', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Marketplace Effects', width: '80%', text: '★★★★☆ Strong', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'AI Model Superiority', width: '80%', text: '★★★★☆ India-specific', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Switching Costs', width: '60%', text: '★★★☆☆ Moderate', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
          { label: 'Brand & Trust', width: '60%', text: '★★★☆☆ Grows over time', color: 'linear-gradient(90deg, #922b21, #ec7063)' },
        ]} />
        <p style={{ marginTop: 12, fontSize: '.9rem', color: 'var(--text-light)' }}>
          <strong>The compounding thesis:</strong> Free tool → users → room data → better AI → more users → architects join → marketplace tips → revenue → reinvest → 2-3 year gap for competitors.
        </p>
      </Card>

      <Card title="🎯 Target Users — Priority Matrix">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Segment</th><th>Size</th><th>Pain Intensity</th><th>WTP</th><th>Priority</th></tr></thead>
            <tbody>
              <tr><td><strong>Homeowners (renovation)</strong></td><td>10M+ annually</td><td>★★★★☆</td><td>₹5-30L project spend</td><td><span className="badge badge-green">P0 — Launch</span></td></tr>
              <tr><td><strong>First-home / Newly married</strong></td><td>~5M couples/yr urban</td><td>★★★★★</td><td>₹10-50K guided design</td><td><span className="badge badge-green">P0 — Launch</span></td></tr>
              <tr><td><strong>Architects & Designers</strong></td><td>125K registered + 300K designers</td><td>★★★★☆</td><td>₹1-5K/month</td><td><span className="badge badge-blue">P1 — Month 2</span></td></tr>
              <tr><td><strong>Real Estate Developers</strong></td><td>25K+ registered</td><td>★★★☆☆</td><td>₹50K-5L/project</td><td><span className="badge badge-yellow">P2 — Phase 3</span></td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📂 Full Report Sections (35 Research Documents)">
        <div className="grid-2">
          <div>
            {[
              { id: 'brainstorming', num: '01', t: 'Brainstorming & Features', d: 'Product vision, 3 core features, 6+ expansion ideas, tech stack, MVP phases' },
              { id: 'validation', num: '02', t: 'Validation & Feasibility', d: 'Idea (7.5/10), market (8/10), audience (8.5/10), feasibility (7/10), PoC design' },
              { id: 'financials', num: '03', t: 'Financial Projections', d: '3-year P&L, unit economics, LTV:CAC, sensitivity analysis, funding rounds' },
              { id: 'gtm', num: '04', t: 'Go-to-Market', d: '4-phase GTM, channel CAC, content strategy, week-by-week launch playbook' },
              { id: 'moat', num: '05', t: 'Competitive Moat', d: '7-dimension moat framework, threat assessment, compounding defensibility timeline' },
              { id: 'industry', num: '06-11', t: 'Industry & Market Research', d: '6 documents: landscape, India RE, audience, competitors, global comparables, consumer trends' },
            ].map(s => (
              <motion.div key={s.id} whileHover={{ x: 4 }} style={{ padding: '10px 0', borderBottom: '1px solid #eee', cursor: 'pointer' }} onClick={() => navigate(s.id)}>
                <span style={{ color: 'var(--green)', fontWeight: 600 }}>{s.num} — {s.t}</span><br />
                <small style={{ color: 'var(--text-light)' }}>{s.d}</small>
              </motion.div>
            ))}
          </div>
          <div>
            {[
              { id: 'business-model', num: '12-16', t: 'Business Model & Strategy', d: 'BMC, pricing tiers, revenue scenarios, marketplace economics, platform dynamics' },
              { id: 'competitors', num: '17-20', t: 'Competitive Intelligence', d: 'Livspace ($1.2B) & Houzz ($4B) teardowns, emerging threats, partnership landscape' },
              { id: 'investor', num: '21-25', t: 'Financial & Investment', d: '12-slide pitch deck, 20+ investor mapping, comparable valuations, exit strategy' },
              { id: 'market-sizing', num: '26-28', t: 'Market Sizing', d: 'TAM $16.5-24B, 20+ city market maps, 6 adjacent opportunities' },
              { id: 'operations-legal', num: '29-31', t: 'Operations & Legal', d: 'Regulatory (CoA, DPDP, GST), 125K architect supply analysis, success/failure postmortems' },
              { id: 'strategy', num: '32-35', t: 'Strategic Planning', d: '5-phase roadmap, 16 risks scored, bull/base/bear scenarios, brand positioning' },
            ].map(s => (
              <motion.div key={s.id} whileHover={{ x: 4 }} style={{ padding: '10px 0', borderBottom: '1px solid #eee', cursor: 'pointer' }} onClick={() => navigate(s.id)}>
                <span style={{ color: 'var(--green)', fontWeight: 600 }}>{s.num} — {s.t}</span><br />
                <small style={{ color: 'var(--text-light)' }}>{s.d}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="🏆 Competitive Positioning at a Glance">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Competitor</th><th>Revenue</th><th>Valuation</th><th>Strength</th><th>Our Advantage</th></tr></thead>
            <tbody>
              <tr><td><strong>Houzz</strong></td><td>$400-500M</td><td>$4B</td><td>65M users, 2.7M pros</td><td>Passive in India; no AI design; no AR</td></tr>
              <tr><td><strong>Livspace</strong></td><td>₹1,148 Cr</td><td>$1.2B</td><td>India unicorn</td><td>High-ticket only; no self-serve; no AI</td></tr>
              <tr><td><strong>Planner 5D</strong></td><td>~$15-20M</td><td>Private</td><td>85M downloads</td><td>No marketplace; no India focus</td></tr>
              <tr><td><strong>Magicplan</strong></td><td>~$10-20M</td><td>Acquired</td><td>AR measurement pioneer</td><td>B2B only; no design AI; no marketplace</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 12, fontWeight: 600, color: 'var(--green)' }}>
          No existing app combines AR measurement + AI design generation + professional marketplace. This triad is the core differentiator.
        </p>
      </Card>
    </div>
  )
}
