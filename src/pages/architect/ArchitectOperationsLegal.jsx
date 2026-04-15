import { SectionHeader, Card } from '../../components/UI'

export default function ArchitectOperationsLegal() {
  return (
    <div>
      <SectionHeader icon="⚖️" title="Operations & Legal Research" sub="Documents 29-31: Regulatory research, supply-side analysis, success/failure postmortems" />

      <Card title="📜 Regulatory Research (Doc 29)">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Area</th><th>Key Requirements</th><th>Risk Level</th></tr></thead>
            <tbody>
              <tr><td><strong>Council of Architecture</strong></td><td>Architect verification, credential checks for marketplace listings</td><td><span className="badge badge-yellow">Medium</span></td></tr>
              <tr><td><strong>Building Codes</strong></td><td>AI must not suggest structural changes; disclaimer-based approach</td><td><span className="badge badge-blue">Low</span></td></tr>
              <tr><td><strong>DPDP Act 2023</strong></td><td>Data privacy compliance for room scans, personal data, photos</td><td><span className="badge badge-yellow">Medium</span></td></tr>
              <tr><td><strong>GST</strong></td><td>18% GST on SaaS; marketplace TCS obligations</td><td><span className="badge badge-blue">Low</span></td></tr>
              <tr><td><strong>IP & Patents</strong></td><td>AI-generated design ownership; patent opportunities for scan tech</td><td><span className="badge badge-yellow">Medium</span></td></tr>
              <tr><td><strong>AI Liability</strong></td><td>Strong disclaimers, "inspiration only" framing, professional review layer</td><td><span className="badge badge-red">High</span></td></tr>
              <tr><td><strong>Contractor Law</strong></td><td>Platform not liable for architect work quality; clear T&C needed</td><td><span className="badge badge-yellow">Medium</span></td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="👤 Supply-Side Research — India's Architects (Doc 30)">
        <div className="stats-grid">
          <div className="stat-card green">
            <div className="stat-value">125K</div>
            <div className="stat-label">Registered Architects in India</div>
          </div>
          <div className="stat-card blue">
            <div className="stat-value">60%</div>
            <div className="stat-label">Struggle with Client Acquisition</div>
          </div>
          <div className="stat-card gold">
            <div className="stat-value">₹3-8L</div>
            <div className="stat-label">Average Annual Income (early career)</div>
          </div>
          <div className="stat-card purple">
            <div className="stat-value">&lt;20%</div>
            <div className="stat-label">Use Any Digital Tools for Client Acquisition</div>
          </div>
        </div>
        <h3 className="card-subtitle">Architect Pain Points</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li><strong>Client acquisition:</strong> Mostly word-of-mouth; no reliable digital pipeline</li>
          <li><strong>Portfolio showcase:</strong> Instagram is primary; no professional platform</li>
          <li><strong>Pricing opacity:</strong> Clients don't understand fees; race to bottom</li>
          <li><strong>Admin burden:</strong> Too much time on billing, follow-ups, non-design work</li>
        </ul>
        <h3 className="card-subtitle">Onboarding Strategy</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li><strong>Phase 1:</strong> Free premium listing for founding 20 architects</li>
          <li><strong>Phase 2:</strong> Architecture college partnerships for student onboarding</li>
          <li><strong>Phase 3:</strong> Professional association partnerships (IIA chapters)</li>
          <li><strong>Phase 4:</strong> Referral program — architects invite architects</li>
        </ul>
      </Card>

      <Card title="📚 Success & Failure Postmortems (Doc 31)">
        <h3 className="card-subtitle">❌ Failures — Key Lessons</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Company</th><th>What Happened</th><th>Lesson</th></tr></thead>
            <tbody>
              <tr><td><strong>Modsy</strong></td><td>Shut down — burned $80M+ on human-powered design concierge</td><td><em>AI-first, not human-first. Can't scale humans.</em></td></tr>
              <tr><td><strong>Spacejoy</strong></td><td>Pivoted — couldn't scale human designers fast enough</td><td><em>Self-serve + AI must be primary. Humans as upgrade path.</em></td></tr>
              <tr><td><strong>Laurel & Wolf</strong></td><td>Closed — marketplace quality issues, designer disputes</td><td><em>Quality control & verification essential from Day 1.</em></td></tr>
              <tr><td><strong>Hutch</strong></td><td>Acqui-hired — good tech but couldn't monetize</td><td><em>Monetization strategy must be embedded in product, not bolted on.</em></td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="card-subtitle">✅ Successes — Patterns to Follow</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Company</th><th>What Worked</th><th>Adopt</th></tr></thead>
            <tbody>
              <tr><td><strong>Livspace (Early)</strong></td><td>Full-stack approach with quality control</td><td>Quality bar + verification standards</td></tr>
              <tr><td><strong>Houzz (Early)</strong></td><td>Content-first: inspiration photos → professional directory → commerce</td><td>Content-first GTM → monetize later</td></tr>
              <tr><td><strong>Canva (Early)</strong></td><td>Freemium with viral sharing; "first design in 23 seconds"</td><td>Free tier with share-to-unlock; instant gratification</td></tr>
            </tbody>
          </table>
        </div>

        <Card title="🔑 Meta-Pattern" highlight>
          <p style={{ fontSize: '1rem' }}>
            <strong>Winners:</strong> Self-serve + AI-first + content flywheel + clear monetization path<br />
            <strong>Losers:</strong> Human-dependent + high burn + quality control failures + bolt-on monetization
          </p>
        </Card>
      </Card>
    </div>
  )
}
