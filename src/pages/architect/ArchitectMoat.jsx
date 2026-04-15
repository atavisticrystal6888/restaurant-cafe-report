import { SectionHeader, Card, ScoreDots, BarChart, Tabs } from '../../components/UI'

export default function ArchitectMoat() {
  return (
    <div>
      <SectionHeader icon="🏰" title="Competitive Moat" sub="7-dimension moat analysis with compounding thesis, threat response playbook, and defensibility timeline" />

      <Card title="🛡️ Moat Summary Matrix — 7 Dimensions">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Dimension</th><th>Strength</th><th>Rating</th><th>Time to Build</th><th>Competitor Replicability</th></tr></thead>
            <tbody>
              <tr><td><strong>Data Network Effects</strong></td><td>★★★★★</td><td><span className="badge badge-green">Strongest</span></td><td>12-24 months</td><td>Very Hard — requires user base</td></tr>
              <tr><td><strong>Two-Sided Marketplace</strong></td><td>★★★★☆</td><td><span className="badge badge-green">Strong</span></td><td>18-30 months</td><td>Hard — chicken-and-egg</td></tr>
              <tr><td><strong>AI Model Superiority</strong></td><td>★★★★☆</td><td><span className="badge badge-green">Strong</span></td><td>12-18 months</td><td>Medium — requires India data</td></tr>
              <tr><td><strong>Switching Costs</strong></td><td>★★★☆☆</td><td><span className="badge badge-blue">Moderate</span></td><td>6-12 months</td><td>Medium — builds with usage</td></tr>
              <tr><td><strong>Brand & Trust</strong></td><td>★★★☆☆</td><td><span className="badge badge-blue">Moderate</span></td><td>12-36 months</td><td>Slow — requires consistency</td></tr>
              <tr><td><strong>Ecosystem Integration</strong></td><td>★★☆☆☆</td><td><span className="badge badge-yellow">Future</span></td><td>18-36 months</td><td>Medium — partnership dependent</td></tr>
              <tr><td><strong>Regulatory/Compliance</strong></td><td>★★☆☆☆</td><td><span className="badge badge-yellow">Future</span></td><td>6-12 months</td><td>Easy — but often neglected</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📊 Moat 1: Data Network Effects ★★★★★ (Strongest)">
        <p>Every room measured, every design generated, every consultation completed produces data that makes the AI better for everyone.</p>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Data Asset</th><th>How It Compounds</th></tr></thead>
            <tbody>
              <tr><td><strong>Room dimension database</strong></td><td>Thousands of real Indian room layouts → AI learns common patterns (2BHK Mumbai vs 3BHK Bangalore) → better defaults</td></tr>
              <tr><td><strong>Design preference data</strong></td><td>"Users in Chennai prefer traditional; Pune users prefer Scandinavian" → regionally personalized suggestions</td></tr>
              <tr><td><strong>Architect rating data</strong></td><td>Quality signal improves matching over time</td></tr>
              <tr><td><strong>Pricing data</strong></td><td>Real consultation prices, material costs, renovation budgets → most accurate cost estimator</td></tr>
              <tr><td><strong>Before/after pairs</strong></td><td>Existing room photos + chosen design = training data → models keep improving</td></tr>
            </tbody>
          </table>
        </div>
        <div className="box box-green" style={{ borderRadius: 12, marginTop: 12 }}>
          <strong>Why competitors can't replicate easily:</strong> This data is generated through usage. A new entrant starts at zero. By 100K designs, the AI advantage is significant.
        </div>
      </Card>

      <Card title="🤝 Moat 2: Two-Sided Marketplace ★★★★☆">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Phase</th><th>Dynamic</th></tr></thead>
            <tbody>
              <tr><td><strong>Cold start</strong></td><td>Seed supply: free listings, portfolio import. Subsidize demand with free AI tool.</td></tr>
              <tr><td><strong>Tipping point</strong></td><td>~500 architects × 50K consumers in a city = self-sustaining</td></tr>
              <tr><td><strong>Flywheel</strong></td><td>Top architects get more bookings → invest in premium listing → fund platform → attract more consumers</td></tr>
              <tr><td><strong>Lock-in</strong></td><td>Architects build reviews/portfolio → switching cost rises. Consumers have saved designs/history → sticky.</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 8, fontSize: '.88rem', color: 'var(--text-light)' }}>
          <strong>Houzz precedent:</strong> 2.7M professionals, 65M users. Once a marketplace reaches critical mass in a geography, it's extraordinarily hard to displace.
        </p>
      </Card>

      <Card title="🤖 Moat 3: AI Model Superiority ★★★★☆">
        <p style={{ marginBottom: 12 }}>Fine-tuned AI models trained on India-specific data. <strong>Time-to-replicate: 12-18 months minimum.</strong></p>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Advantage</th><th>Detail</th></tr></thead>
            <tbody>
              <tr><td><strong>India-specific training</strong></td><td>Global tools generate Western interiors. Our model learns Indian aesthetics, modular kitchen sizes (Indian standard ≠ Western), pooja room requirements</td></tr>
              <tr><td><strong>Vastu intelligence</strong></td><td>Rule engine + ML understanding Vastu principles — no global competitor has this</td></tr>
              <tr><td><strong>Budget-aware design</strong></td><td>Maps to real Indian brands and prices. Not "modern sofa" but "Urban Ladder Arbok sofa, ₹32,000"</td></tr>
              <tr><td><strong>Regional vernacular</strong></td><td>Kerala, Rajasthani, South Indian architectural styles alongside modern/Scandi</td></tr>
            </tbody>
          </table>
        </div>
        <div className="grid-2" style={{ marginTop: 12 }}>
          <div>
            <ScoreDots label="Vastu AI" filled={5} suffix="India-specific" />
            <ScoreDots label="Budget AI" filled={4} suffix="₹-aware pricing" />
          </div>
          <div>
            <ScoreDots label="Style AI" filled={4} suffix="Regional tastes" />
            <ScoreDots label="Room AI" filled={4} suffix="Indian layouts" />
          </div>
        </div>
      </Card>

      <Card title="🔒 Moat 4: Switching Costs ★★★☆☆">
        <div className="table-wrap">
          <table>
            <thead><tr><th>User Type</th><th>Lock-in Mechanism</th></tr></thead>
            <tbody>
              <tr><td><strong>Consumers</strong></td><td>Project history, saved designs, measurements, architect relationships, design iterations</td></tr>
              <tr><td><strong>Architects</strong></td><td>Portfolio, reviews (100+ reviews = major asset), client conversations, pipeline, payment history</td></tr>
              <tr><td><strong>Portability risk</strong></td><td>Medium — screenshots possible; but interactive 3D, collaboration history, connections are non-portable</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🏷️ Moat 5: Brand & Trust ★★★☆☆">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Strategy</th><th>Effect</th></tr></thead>
            <tbody>
              <tr><td><strong>"Powered by [AppName]" watermark</strong></td><td>Free viral marketing on every Pinterest pin, Instagram story</td></tr>
              <tr><td><strong>Architect verification badge</strong></td><td>Trust in marketplace — verified credentials, portfolio review</td></tr>
              <tr><td><strong>Before/after gallery</strong></td><td>Social proof at scale — "10,000 homes designed"</td></tr>
              <tr><td><strong>Content authority</strong></td><td>SEO rankings for "2BHK design ideas", "Vastu kitchen layout" — hard to displace</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🔗 Moat 6 & 7: Integration & Regulatory">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Integration & Ecosystem ★★☆☆☆</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Integration</th><th>Effect</th></tr></thead>
                <tbody>
                  <tr><td><strong>Material vendors</strong></td><td>Exclusive integrations with Asian Paints, Pidilite, Urban Ladder, Pepperfry</td></tr>
                  <tr><td><strong>Builder partnerships</strong></td><td>Pre-installed at property handover → captive audience</td></tr>
                  <tr><td><strong>Home loan integrations</strong></td><td>"Design your new home" embedded in loan app</td></tr>
                  <tr><td><strong>Smart home</strong></td><td>Integration with automation brands</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Regulatory/Compliance ★★☆☆☆</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Area</th><th>Advantage</th></tr></thead>
                <tbody>
                  <tr><td><strong>Architect verification</strong></td><td>Council of Architecture India credential verification</td></tr>
                  <tr><td><strong>Vastu certification</strong></td><td>Partnership with recognized Vastu practitioners</td></tr>
                  <tr><td><strong>Building code compliance</strong></td><td>Local code database (varies by state/city) — non-trivial to build</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>

      <Card title="📊 Compounding Moat Thesis">
        <BarChart data={[
          { label: 'Month 0-6', width: '25%', text: 'Free tool → users → room data → better AI', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Month 6-12', width: '50%', text: '+ More users → architects → marketplace starts', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Month 12-18', width: '70%', text: '+ Revenue → reinvest in AI & partnerships', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Month 18-30', width: '90%', text: '+ Brand + ecosystem = 2-3 year gap for competitors', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
          { label: 'Month 30+', width: '100%', text: 'Network effects compound. Very hard to displace.', color: 'linear-gradient(90deg, #943126, #e74c3c)' },
        ]} />
        <h3 className="card-subtitle">Defensibility Timeline</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Year</th><th>Primary Moat</th><th>Secondary Moat</th></tr></thead>
            <tbody>
              <tr><td><strong>Year 1</strong></td><td>AI model quality + India-specific data</td><td>Brand awareness (early mover)</td></tr>
              <tr><td><strong>Year 2</strong></td><td>Marketplace network effects (architect supply lock-in)</td><td>Data network effects (100K+ designs)</td></tr>
              <tr><td><strong>Year 3</strong></td><td>Full ecosystem (data + marketplace + integrations + brand)</td><td>Switching costs at scale</td></tr>
              <tr><td><strong>Year 4+</strong></td><td>Compounding all 7 moats simultaneously</td><td>International expansion creates additional barriers</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="⚔️ Threat Assessment & Response Playbook" warning>
        <Tabs tabs={['Threat Matrix', 'Response Playbook']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Threat</th><th>Likelihood</th><th>Our Defense</th></tr></thead>
                <tbody>
                  <tr><td><strong>Houzz enters India aggressively</strong></td><td><span className="badge badge-green">Low</span></td><td>Passive in India for years. Faster with India-specific features (Vastu, local brands, regional styles)</td></tr>
                  <tr><td><strong>Livspace adds self-serve design tool</strong></td><td><span className="badge badge-yellow">Medium</span></td><td>Their managed-services DNA conflicts with self-serve. Organizational inertia.</td></tr>
                  <tr><td><strong>Magicplan adds marketplace</strong></td><td><span className="badge badge-green">Low-Med</span></td><td>B2B focus; our consumer-first approach gives different value prop</td></tr>
                  <tr><td><strong>Big tech (Google/Apple) native design</strong></td><td><span className="badge badge-green">Low-Med</span></td><td>They provide infrastructure, not end-user solutions</td></tr>
                  <tr><td><strong>New AI-native startup</strong></td><td><span className="badge badge-yellow">Medium</span></td><td>Speed-to-market + data compound advantage. First mover with India data wins.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Scenario</th><th>Response</th></tr></thead>
                <tbody>
                  <tr><td><strong>Major competitor enters India</strong></td><td>Accelerate Vastu + local brand features; deepen builder partnerships; lock in architect supply with exclusivity incentives</td></tr>
                  <tr><td><strong>Livspace launches self-serve</strong></td><td>Emphasize AI-first, lightweight approach vs. heavy managed model; undercut on price; leverage superior tech</td></tr>
                  <tr><td><strong>New well-funded AI startup</strong></td><td>Leverage existing data moat; accelerate features; explore acquisition or partnership</td></tr>
                  <tr><td><strong>Big tech launches design features</strong></td><td>Position as specialized vertical vs. generic tool; emphasize marketplace + professional layer</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="💡 Key Insight">
        <div style={{ background: 'var(--green-bg)', border: '2px solid var(--green)', borderRadius: 12, padding: 16, fontStyle: 'italic' }}>
          Livspace built a $1.2B business with a managed-services model (high-touch, high-cost). We're building an AI-first, self-serve platform (low-touch, high-margin). <strong>These are fundamentally different business models.</strong> Livspace's success validates the market; our approach attacks it from a different angle that's harder for them to replicate than vice versa.
        </div>
      </Card>
    </div>
  )
}
