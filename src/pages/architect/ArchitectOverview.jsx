import { SectionHeader, Card, StatCard } from '../../components/UI'
import { motion } from 'framer-motion'

export default function ArchitectOverview({ navigate }) {
  return (
    <div>
      <SectionHeader icon="🏠" title="Architect App — Overview" sub="AI-powered design platform — &quot;Canva meets Houzz meets AR&quot;" />

      <div className="stats-grid">
        <StatCard value="$5.5–6.5B" label="Global Market by 2028" color="green" />
        <StatCard value="₹57.7 Cr" label="Year 3 Revenue Target" color="gold" />
        <StatCard value="₹7,500 Cr" label="India SAM ($900M)" color="blue" />
        <StatCard value="7.5/10" label="Validation Score" color="purple" />
      </div>

      <Card title="🎯 The Vision">
        <p>An all-in-one platform that <strong>democratizes architectural design</strong> by combining AI-powered spatial measurement, intelligent design suggestions, and seamless architect-client collaboration.</p>
        <h3 className="card-subtitle">The Problem</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li><strong>10M+ Indian homes</strong> renovated annually — homeowners spend 2-6 months with ZERO visualization</li>
          <li>&lt;2% digital penetration for design tools in India</li>
          <li>Gap between DIY tools (too basic) and professional CAD (too complex)</li>
          <li>Finding/vetting architects is fragmented and opaque</li>
        </ul>
        <h3 className="card-subtitle">The Solution</h3>
        <p><strong>3-step flow:</strong> Scan/upload room → AI generates designs → Connect with verified architect</p>
      </Card>

      <Card title="🚀 Core Features">
        <div className="grid-3">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>📐 Measure & Design</strong>
            <p style={{ fontSize: '.85rem', marginTop: 6 }}>AR camera scan, manual drawing, or blueprint upload → AI generates multiple layout options</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>🎨 Interior Design</strong>
            <p style={{ fontSize: '.85rem', marginTop: 6 }}>AI suggestions for new & existing spaces with style, budget, and Vastu customization</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>👤 Architect Marketplace</strong>
            <p style={{ fontSize: '.85rem', marginTop: 6 }}>Browse, chat, video consult, or hand off projects to verified professionals</p>
          </div>
        </div>
      </Card>

      <Card title="💰 Financial Snapshot">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
            <tbody>
              <tr><td><strong>Revenue</strong></td><td>₹3.06 Cr</td><td>₹16.4 Cr</td><td>₹57.7 Cr</td></tr>
              <tr><td><strong>Users</strong></td><td>150K</td><td>600K</td><td>2M</td></tr>
              <tr><td><strong>MAU</strong></td><td>90K</td><td>350K</td><td>1.1M</td></tr>
              <tr><td><strong>Freemium Conversion</strong></td><td>3-5%</td><td>5-7%</td><td>5-8%</td></tr>
              <tr><td><strong>Architects Listed</strong></td><td>2,000</td><td>8,000</td><td>20,000</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💵 Funding Strategy">
        <div className="stats-grid">
          <StatCard value="₹50L–1Cr" label="Bootstrapped / Angel" color="green" />
          <StatCard value="₹3–5 Cr" label="Seed (Month 4-6)" color="blue" />
          <StatCard value="₹25–40 Cr" label="Series A (Month 15-18)" color="purple" />
          <StatCard value="₹100–150 Cr" label="Series B (Month 30-36)" color="gold" />
        </div>
      </Card>

      <Card title="📂 Report Sections">
        <div className="grid-2">
          <div>
            {[
              { id: 'brainstorming', num: '01', t: 'Brainstorming & Features', d: 'Product vision, feature deep-dive, expansion ideas' },
              { id: 'validation', num: '02', t: 'Validation', d: 'Idea, market, audience, feasibility validation' },
              { id: 'financials', num: '03', t: 'Financial Projections', d: '3-year revenue model, unit economics' },
              { id: 'gtm', num: '04', t: 'Go-to-Market', d: 'GTM phases, acquisition channels, metrics' },
              { id: 'moat', num: '05', t: 'Competitive Moat', d: '7-dimension moat analysis, threat assessment' },
              { id: 'industry', num: '06', t: 'Industry & Market Research', d: 'Landscape, audience, consumer trends' },
            ].map(s => (
              <motion.div key={s.id} whileHover={{ x: 4 }} style={{ padding: '8px 0', borderBottom: '1px solid #eee', cursor: 'pointer' }} onClick={() => navigate(s.id)}>
                <span style={{ color: 'var(--green)', fontWeight: 600 }}>{s.num} — {s.t}</span><br />
                <small style={{ color: 'var(--text-light)' }}>{s.d}</small>
              </motion.div>
            ))}
          </div>
          <div>
            {[
              { id: 'business-model', num: '07', t: 'Business Model & Strategy', d: 'Canvas, pricing, marketplace economics' },
              { id: 'competitors', num: '08', t: 'Competitive Intelligence', d: 'Livspace, Houzz teardowns, emerging threats' },
              { id: 'investor', num: '09', t: 'Financial & Investment', d: 'Pitch narrative, funding landscape, valuations' },
              { id: 'market-sizing', num: '10', t: 'Market Sizing & Opportunity', d: 'TAM/SAM/SOM, city maps, adjacent markets' },
              { id: 'operations-legal', num: '11', t: 'Operations & Legal', d: 'Regulatory, supply-side, postmortems' },
              { id: 'strategy', num: '12', t: 'Strategic Planning', d: 'Roadmap, risks, scenarios, brand positioning' },
            ].map(s => (
              <motion.div key={s.id} whileHover={{ x: 4 }} style={{ padding: '8px 0', borderBottom: '1px solid #eee', cursor: 'pointer' }} onClick={() => navigate(s.id)}>
                <span style={{ color: 'var(--green)', fontWeight: 600 }}>{s.num} — {s.t}</span><br />
                <small style={{ color: 'var(--text-light)' }}>{s.d}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>

      <Card title="🎯 Target Users">
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🏡 Homeowners & Renovators</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Newly married couples, first-home buyers, renovation-ready homeowners (25-45 age group)</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>📐 Professional Architects</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>125K architects seeking client pipeline, tools, and portfolio showcase</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>🎨 Interior Designers</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Quick consultations, project pipeline, material recommendations</p>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>🏢 Real Estate Developers</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Quick design options for multiple units, virtual staging for sales</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
