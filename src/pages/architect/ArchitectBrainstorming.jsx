import { SectionHeader, Card, StatCard, Tabs } from '../../components/UI'

export default function ArchitectBrainstorming() {
  return (
    <div>
      <SectionHeader icon="💡" title="Brainstorming & Feature Spec" sub="Product vision, core features, expansion roadmap" />

      <Card title="🎯 Product Vision">
        <p><em>"Canva meets Houzz meets AR"</em> — making professional-quality architectural design accessible to homeowners while giving professionals powerful tools and a client pipeline.</p>
        <h3 className="card-subtitle">Problem Statement</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
          <li>Homeowners struggle to visualize spaces and communicate design ideas</li>
          <li>Finding and vetting architects is fragmented and opaque</li>
          <li>Architects spend excessive time on initial consultations</li>
          <li>Gap between DIY tools (too basic) and professional CAD (too complex)</li>
          <li>No single app combines AR measurement + AI design + professional marketplace</li>
        </ul>
      </Card>

      <Card title="📐 Feature 1: Measure the Area & Suggest Design">
        <Tabs tabs={['Input Methods', 'AI Suggestions', 'Smart Engine']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Method</th><th>How It Works</th><th>Target User</th></tr></thead>
                <tbody>
                  <tr><td><strong>AR/Camera Scan</strong></td><td>Point phone at room → auto-detect walls, doors, windows → generate floor plan (LiDAR + ARCore)</td><td>Mobile-first users</td></tr>
                  <tr><td><strong>Manual Drawing</strong></td><td>Draw rooms on a grid canvas, enter dimensions, drag-and-drop</td><td>Web users, precise control</td></tr>
                  <tr><td><strong>Blueprint Upload</strong></td><td>OCR/CV parses uploaded PDFs/images → extract dimensions</td><td>Professionals, renovators</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
              <li>Analyze room dimensions, shape, natural light from window detection</li>
              <li>Generate multiple layout options: modern minimalist, traditional, Vastu-compliant, etc.</li>
              <li><strong>Output ladder:</strong> 2D floor plans → 3D renders → mood boards → walkthroughs</li>
            </ul>
          </div>
          <div>
            <div className="grid-2">
              <div><strong>🪑</strong> Furniture placement optimization</div>
              <div><strong>🚶</strong> Traffic flow analysis</div>
              <div><strong>☀️</strong> Natural light optimization</div>
              <div><strong>🕉️</strong> Vastu/Feng Shui compliance</div>
              <div><strong>💰</strong> Budget-based recommendations</div>
              <div><strong>📊</strong> Space utilization score</div>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🎨 Feature 2: Interior Design — New & Existing Spaces">
        <Tabs tabs={['New Construction', 'Renovation', 'Design Outputs']}>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
              <li>Start from bare floor plan → AI suggests complete interior</li>
              <li>Style picker: modern, contemporary, traditional, industrial, bohemian, Scandinavian</li>
              <li>Budget range slider → AI adjusts materials & brands accordingly</li>
              <li>Material recommendations with approximate costs</li>
              <li>Shopping list generation linked to real products</li>
            </ul>
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
              <li><strong>"Before & After":</strong> photograph existing room → AI generates redesign options</li>
              <li><strong>Virtual staging:</strong> visualize new furniture/paint on existing room photo</li>
              <li><strong>Selective redesign:</strong> "change only the kitchen" / "repaint suggestions only"</li>
              <li>Keep structural elements, redesign around them</li>
              <li>Renovation scope + cost estimation</li>
            </ul>
          </div>
          <div>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}>📋 2D annotated floor plans</div>
              <div className="box box-purple" style={{ borderRadius: 12 }}>🏠 Photorealistic 3D renders</div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}>🔄 360° virtual walkthroughs</div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>🎨 Mood boards & material palettes</div>
              <div className="box box-green" style={{ borderRadius: 12 }}>🛒 Itemized shopping lists</div>
              <div className="box box-purple" style={{ borderRadius: 12 }}>📤 Shareable links / PDF export</div>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="👤 Feature 3: Architect/Designer Consultation">
        <Tabs tabs={['Marketplace', 'Consultation Modes', 'Collaboration']}>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
              <li>Browse architects/designers with portfolios, ratings, reviews</li>
              <li>Filter by: specialty, location, budget range, style, availability</li>
              <li>Verified professionals with credential checks</li>
              <li><strong>Tiers:</strong> Student/Junior → Mid-level → Senior → Premium</li>
            </ul>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Mode</th><th>Description</th></tr></thead>
                <tbody>
                  <tr><td><strong>Quick Chat</strong></td><td>Pay per message or subscription-based</td></tr>
                  <tr><td><strong>Video Consultation</strong></td><td>Scheduled video calls within app</td></tr>
                  <tr><td><strong>Design Review</strong></td><td>Submit AI-generated design → architect provides feedback</td></tr>
                  <tr><td><strong>Full Project Handoff</strong></td><td>Escalate from design tool to full professional engagement</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 1.9 }}>
              <li>Shared design workspace — real-time co-editing</li>
              <li>Version history with annotations</li>
              <li>In-app messaging, file sharing, approvals</li>
              <li>Progress tracking with milestone payments</li>
            </ul>
          </div>
        </Tabs>
      </Card>

      <Card title="🔮 Expansion Ideas">
        <div className="grid-3">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🏪 Furniture Marketplace</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>In-app purchasing from partner brands</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>🏢 Commercial Interiors</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Office spaces, restaurants, retail</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>🏡 Smart Home Integration</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>IoT device placement & automation</p>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>🌍 International Expansion</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>SEA, Middle East, Africa markets</p>
          </div>
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🏗️ Virtual Staging</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>For real estate listings & sales</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>🔌 White-label API</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>License tech to builders & platforms</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
