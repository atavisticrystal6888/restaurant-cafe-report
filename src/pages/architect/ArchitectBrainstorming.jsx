import { SectionHeader, Card, StatCard, Tabs, Accordion } from '../../components/UI'

export default function ArchitectBrainstorming() {
  return (
    <div>
      <SectionHeader icon="💡" title="Brainstorming & Feature Spec" sub="Product vision, 3 core features deep dive, additional feature ideas, technical architecture, MVP phasing" />

      <Card title="🎯 Product Vision & Problem Statement">
        <p><em>"Canva meets Houzz meets AR"</em> — making professional-quality architectural design accessible to homeowners while giving professionals powerful tools and a client pipeline.</p>
        <h3 className="card-subtitle">Problem Statement</h3>
        <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
          <li>Homeowners struggle to <strong>visualize spaces</strong> and communicate design ideas to professionals</li>
          <li>Finding and vetting architects is <strong>fragmented and opaque</strong> — mostly word-of-mouth</li>
          <li>Architects spend excessive time on initial consultations and basic measurements</li>
          <li><strong>Gap between DIY tools</strong> (too basic) and professional CAD (too complex) — the mass market is unserved</li>
          <li>No single app combines <strong>AR measurement + AI design generation + professional marketplace</strong></li>
        </ul>
        <h3 className="card-subtitle">Target Users</h3>
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🏡 Homeowners/Property Owners</strong> — Want to design/renovate; avg spend ₹5-30L on interiors for premium homes
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>📐 Professional Architects</strong> — Want clients, tools, and portfolio showcase; 125K registered in India
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>🎨 Interior Designers</strong> — Want quick consultations, project pipeline, material recommendations
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>🏢 Real Estate Developers</strong> — Need quick design options for multiple units, virtual staging for sales
          </div>
        </div>
      </Card>

      <Card title="📐 Feature 1: Measure the Area & Suggest Design">
        <Tabs tabs={['Input Methods', 'AI Suggestions', 'Smart Engine']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Method</th><th>How It Works</th><th>Target User</th></tr></thead>
                <tbody>
                  <tr><td><strong>AR/Camera Scan</strong></td><td>Point phone at room → auto-detect walls, doors, windows → generate floor plan using LiDAR (iPhone Pro) + ARCore (Android). Apple RoomPlan API provides mature framework.</td><td>Mobile-first users, casual homeowners</td></tr>
                  <tr><td><strong>Manual Drawing</strong></td><td>Draw rooms on a grid canvas, enter dimensions, drag-and-drop doors/windows. Built with Fabric.js or Konva.js.</td><td>Web users wanting precise control</td></tr>
                  <tr><td><strong>Blueprint Upload</strong></td><td>OCR/CV parses uploaded PDF/image blueprints → extract dimensions, room labels, structural elements automatically.</td><td>Professionals, renovators with existing plans</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 12, fontSize: '.88rem', color: 'var(--text-light)' }}>
              <strong>Note:</strong> AR accuracy is ±5% on non-LiDAR devices. Manual correction always offered. "Verify with tape measure" prompt for critical dimensions.
            </p>
          </div>
          <div>
            <h3 className="card-subtitle">AI Design Generation Pipeline</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>Analyze room dimensions, shape, <strong>natural light</strong> (from window detection), user preferences</li>
              <li>Generate multiple layout options: "modern minimalist", "traditional", "Vastu-compliant", "Scandinavian", etc.</li>
              <li><strong>Output ladder:</strong> 2D floor plans → 3D renders (Three.js/Babylon.js) → mood boards → 360° walkthroughs</li>
              <li>AI uses <strong>Stable Diffusion / ControlNet</strong> fine-tuned on Indian interior datasets for photorealistic renders</li>
              <li>Start with <strong>curated templates + rule engine</strong>, add generative AI incrementally to manage quality</li>
            </ul>
          </div>
          <div>
            <h3 className="card-subtitle">Smart Suggestion Engine — 6 Capabilities</h3>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}>
                <strong>🪑 Furniture Placement Optimization</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>AI places furniture to maximize usable space, considering room flow and functionality</p>
              </div>
              <div className="box box-purple" style={{ borderRadius: 12 }}>
                <strong>🚶 Traffic Flow Analysis</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Ensures clear pathways between rooms, doorways, and key areas</p>
              </div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}>
                <strong>☀️ Natural Light Optimization</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Places workspaces near windows, sleeping areas away from direct light</p>
              </div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
                <strong>🕉️ Vastu/Feng Shui Compliance</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Massive demand in India — 60-80% of homebuyers consider Vastu. Rule engine + ML understanding.</p>
              </div>
              <div className="box box-green" style={{ borderRadius: 12 }}>
                <strong>💰 Budget-Based Recommendations</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Maps to real Indian brands and prices. Not "modern sofa" but "Urban Ladder Arbok sofa, ₹32,000"</p>
              </div>
              <div className="box box-purple" style={{ borderRadius: 12 }}>
                <strong>📊 Space Utilization Score</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Shows % of usable space, dead zones, and optimization suggestions</p>
              </div>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🎨 Feature 2: Interior Design — New & Existing Spaces">
        <Tabs tabs={['New Construction', 'Renovation (Before/After)', 'Design Outputs', 'Style Library']}>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>Start from <strong>bare floor plan</strong> → AI suggests complete interior: colors, furniture, fixtures, lighting</li>
              <li><strong>Style picker:</strong> modern, contemporary, traditional, industrial, bohemian, Scandinavian, Japandi, Art Deco, Mediterranean</li>
              <li><strong>Budget range slider</strong> → AI adjusts materials & brands accordingly (₹5L vs ₹50L produces very different outputs)</li>
              <li>Material recommendations with approximate costs from real Indian vendors</li>
              <li><strong>Shopping list generation</strong> linked to real products (affiliate revenue stream)</li>
              <li>Smart Budget Allocator — distributes budget across rooms based on your priorities</li>
            </ul>
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li><strong>"Before & After":</strong> photograph existing room → AI generates multiple redesign options preserving structure</li>
              <li><strong>Virtual staging:</strong> visualize new furniture/paint/decor on existing room photo in real-time</li>
              <li><strong>Selective redesign:</strong> "change only the kitchen" / "repaint suggestions only" / "update just the furniture"</li>
              <li>Keep structural elements, redesign around them — respects walls, doors, windows</li>
              <li><strong>Renovation scope + cost estimation</strong> — AI estimates cost per room based on change extent</li>
              <li>Photo Inspiration: upload photos you like → AI extracts style patterns → apply to your space</li>
            </ul>
          </div>
          <div>
            <div className="grid-3">
              <div className="box box-green" style={{ borderRadius: 12, padding: 16 }}>
                <strong>📋 2D Annotated Floor Plans</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>With dimensions, furniture labels, measurement callouts</p>
              </div>
              <div className="box box-purple" style={{ borderRadius: 12, padding: 16 }}>
                <strong>🏠 Photorealistic 3D Renders</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Generated via Stable Diffusion / Three.js — HD quality</p>
              </div>
              <div className="box box-yellow" style={{ borderRadius: 12, padding: 16 }}>
                <strong>🔄 360° Virtual Walkthroughs</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Navigate room in first-person perspective</p>
              </div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff', padding: 16 }}>
                <strong>🎨 Mood Boards & Material Palettes</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Colors, textures, fabric swatches in a shareable format</p>
              </div>
              <div className="box box-green" style={{ borderRadius: 12, padding: 16 }}>
                <strong>🛒 Itemized Shopping Lists</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Every item priced, linked to purchase → affiliate revenue</p>
              </div>
              <div className="box box-purple" style={{ borderRadius: 12, padding: 16 }}>
                <strong>📤 Shareable Links / PDF Export</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Share with family, contractor, architect — or export professional PDF</p>
              </div>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Style</th><th>Characteristics</th><th>Popularity</th></tr></thead>
                <tbody>
                  <tr><td><strong>Modern Minimalist</strong></td><td>Clean lines, neutral palette, open spaces, functional furniture</td><td>Global — very high</td></tr>
                  <tr><td><strong>Contemporary Indian</strong></td><td>Blend of traditional Indian + modern; Vastu-compliant</td><td>India — very high</td></tr>
                  <tr><td><strong>Scandinavian</strong></td><td>Light woods, white walls, cozy textiles (hygge)</td><td>Growing in India</td></tr>
                  <tr><td><strong>Industrial</strong></td><td>Exposed brick, metal fixtures, raw materials, open layouts</td><td>Popular in lofts/urban</td></tr>
                  <tr><td><strong>Bohemian</strong></td><td>Eclectic, layered textures, global patterns, plants</td><td>Young homeowners</td></tr>
                  <tr><td><strong>Japandi</strong></td><td>Wabi-sabi + Scandi — zen simplicity, natural materials</td><td>Rising trend</td></tr>
                  <tr><td><strong>Traditional Indian</strong></td><td>Rich wood, carved furniture, brass accents</td><td>Tier 2/3 cities</td></tr>
                  <tr><td><strong>Art Deco</strong></td><td>Geometric patterns, metallic accents, luxury materials</td><td>Premium/luxury</td></tr>
                  <tr><td><strong>Mediterranean</strong></td><td>Warm terracotta, arched doorways, blue accents</td><td>Coastal/resort homes</td></tr>
                  <tr><td><strong>Sustainable/Green</strong></td><td>Recycled materials, indoor plants, energy-efficient</td><td>Eco-conscious</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 8, fontSize: '.85rem', color: 'var(--text-light)' }}>
              <strong>Launch with 6 styles</strong> (Modern Minimalist, Contemporary Indian, Scandinavian, Bohemian, Industrial, Traditional Indian). Expand based on user demand data.
            </p>
          </div>
        </Tabs>
      </Card>

      <Card title="👤 Feature 3: Architect/Designer Consultation">
        <Tabs tabs={['Marketplace', 'Consultation Modes', 'Collaboration', 'Project Management']}>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>Browse architects/designers with <strong>portfolios, ratings, reviews</strong></li>
              <li>Filter by: specialty, location, budget range, style preference, availability, language</li>
              <li><strong>Verified professionals</strong> with Council of Architecture credential checks</li>
              <li><strong>Tiered listings:</strong> Student/Junior → Mid-level → Senior → Premium</li>
              <li>Architect "Design DNA" profiles — specialties, past projects, style strengths</li>
              <li><strong>AI-powered matching:</strong> Recommend architects based on your project type, budget, style preferences</li>
            </ul>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Mode</th><th>Description</th><th>Pricing</th></tr></thead>
                <tbody>
                  <tr><td><strong>Quick Chat</strong></td><td>Pay per message or subscription-based text consultation</td><td>₹200-500/session</td></tr>
                  <tr><td><strong>Video Consultation</strong></td><td>Scheduled video calls within app (WebRTC via Twilio/Agora)</td><td>₹1,000-3,000/session</td></tr>
                  <tr><td><strong>Design Review</strong></td><td>Submit AI-generated/manual design → architect provides professional feedback async</td><td>₹500-1,500/review</td></tr>
                  <tr><td><strong>Full Project Handoff</strong></td><td>Escalate from design tool to full professional engagement</td><td>₹5L+ (project-based)</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 8, fontSize: '.85rem', color: 'var(--text-light)' }}>
              Platform takes <strong>15-20% commission</strong> on all consultation payments. Comparison: Houzz takes 15-25%.
            </p>
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li><strong>Shared design workspace</strong> — real-time co-editing canvas (CRDT via Yjs)</li>
              <li>Annotation/markup tools on designs — both parties can mark up and comment</li>
              <li><strong>Version history</strong> of design iterations — never lose a previous version</li>
              <li>Comment threads on specific design elements ("I want this wall color darker")</li>
              <li>In-app messaging, file sharing, and formal approval workflows</li>
            </ul>
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li><strong>End-to-end project tracker:</strong> Design → procurement → construction → handover</li>
              <li>Material vendor marketplace — find and order materials directly</li>
              <li>Progress photo timeline — document construction progress</li>
              <li><strong>Payment milestones and escrow</strong> — secure payments for both parties</li>
              <li>Contractor directory with reviews (expansion feature)</li>
            </ul>
          </div>
        </Tabs>
      </Card>

      <Card title="🧠 Additional Feature Ideas">
        <Tabs tabs={['AI & Smart', 'Social & Community', 'Smart Home', 'Real Estate']}>
          <div>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}>
                <strong>🎯 Style Quiz & Design DNA</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Answer questions → AI learns aesthetic preferences → personalized "Design DNA" profile</p>
              </div>
              <div className="box box-purple" style={{ borderRadius: 12 }}>
                <strong>📷 Photo Inspiration</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Upload photos you like → AI extracts style patterns → apply to your space</p>
              </div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}>
                <strong>💰 Smart Budget Allocator</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Distributes budget across rooms based on priorities and common spend patterns</p>
              </div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
                <strong>♿ Accessibility Checker</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Wheelchair access, universal design compliance, elder-friendly suggestions</p>
              </div>
              <div className="box box-green" style={{ borderRadius: 12 }}>
                <strong>🌿 Energy Efficiency</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>Insulation, window placement, solar optimization suggestions</p>
              </div>
              <div className="box box-purple" style={{ borderRadius: 12 }}>
                <strong>🔄 Material Alternatives</strong>
                <p style={{ fontSize: '.82rem', marginTop: 4 }}>AI suggests cheaper/premium alternatives maintaining same style</p>
              </div>
            </div>
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li><strong>Design inspiration feed</strong> (Pinterest-like for architecture) — drives organic traffic</li>
              <li><strong>Before/after showcase gallery</strong> — social proof at scale → free marketing</li>
              <li>Community feedback on shared designs — vote, comment, remix</li>
              <li><strong>Professional portfolio pages</strong> — architect personal branding</li>
              <li>Design challenges/contests — engagement + user-generated content</li>
            </ul>
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>Smart device placement suggestions (speakers, cameras, lighting)</li>
              <li>Electrical/plumbing layout planning — outlet and switch positioning</li>
              <li>Integration with automation brands (Alexa, Google Home, Philips Hue)</li>
              <li>Wiring/outlet positioning based on room layout</li>
            </ul>
          </div>
          <div>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li><strong>Virtual staging</strong> for property listings — "What could this property look like?"</li>
              <li>Design cost estimation for property evaluation — pre-purchase planning</li>
              <li>Bulk design for housing projects — standardized yet customizable unit designs</li>
              <li>White-label for 99acres/MagicBricks — "Design this property" button on listings</li>
            </ul>
          </div>
        </Tabs>
      </Card>

      <Card title="💵 Business Model — 5 Revenue Streams">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Stream</th><th>How It Works</th><th>Pricing</th></tr></thead>
            <tbody>
              <tr><td><strong>Freemium Subscriptions</strong></td><td>Free basic measurement + 1-2 AI designs. Premium unlocks unlimited designs, 3D, rendering</td><td>₹0 / ₹299 / ₹799 / ₹1,499 per month</td></tr>
              <tr><td><strong>Consultation Commission</strong></td><td>15-20% platform fee on architect bookings</td><td>15-20% of ₹200-50K+ per consult</td></tr>
              <tr><td><strong>Professional Subscriptions</strong></td><td>Monthly plans for architects: listing, leads, tools, analytics</td><td>₹0 / ₹999 / ₹2,499 / ₹4,999 per month</td></tr>
              <tr><td><strong>Affiliate Commerce</strong></td><td>Commission on furniture/material purchases from shopping lists</td><td>5-8% commission on purchases</td></tr>
              <tr><td><strong>Enterprise B2B</strong></td><td>White-label for developers, bulk virtual staging, corporate packages</td><td>Custom pricing ₹50K-5L/project</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="⚔️ Competitive Landscape">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Competitor</th><th>Strength</th><th>Weakness (Our Opportunity)</th></tr></thead>
            <tbody>
              <tr><td><strong>Houzz</strong></td><td>65M users, $4B valuation, 2.7M professionals</td><td>Weak on AI/measurement; passive in India</td></tr>
              <tr><td><strong>Planner 5D / RoomSketcher</strong></td><td>Good design tools, 85M+ projects</td><td>No professional marketplace</td></tr>
              <tr><td><strong>Magicplan</strong></td><td>AR measurement pioneer (Apple Best App 2017)</td><td>Limited design AI; B2B focused only</td></tr>
              <tr><td><strong>Foyr Neo</strong></td><td>Professional 3D rendering</td><td>Not consumer-friendly at all</td></tr>
              <tr><td><strong>Livspace</strong></td><td>$140M revenue FY23, Indian unicorn</td><td>Heavy managed services, not self-serve; ₹5L+ only</td></tr>
              <tr><td><strong>HomeByMe</strong></td><td>3D room planning</td><td>No consultation layer; no India focus</td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 12, fontWeight: 600, color: 'var(--green)', fontSize: '.95rem' }}>
          Differentiation: No existing app combines AR measurement + AI design generation + professional marketplace in one experience. This triad is the core moat.
        </p>
      </Card>

      <Card title="🏗️ Technical Architecture">
        <Tabs tabs={['Frontend', 'Backend', 'AI/ML', 'Infrastructure']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Layer</th><th>Technology</th><th>Purpose</th></tr></thead>
                <tbody>
                  <tr><td><strong>Web</strong></td><td>React / Next.js (SSR for SEO)</td><td>Main platform, marketplace pages for SEO</td></tr>
                  <tr><td><strong>Mobile</strong></td><td>React Native or Flutter</td><td>Cross-platform, critical for AR</td></tr>
                  <tr><td><strong>3D Engine</strong></td><td>Three.js / Babylon.js</td><td>3D renders, walkthroughs</td></tr>
                  <tr><td><strong>AR</strong></td><td>ARKit (iOS), ARCore (Android), Apple RoomPlan</td><td>Room scanning</td></tr>
                  <tr><td><strong>2D Canvas</strong></td><td>Fabric.js / Konva.js</td><td>Floor plan drawing interface</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Layer</th><th>Technology</th><th>Purpose</th></tr></thead>
                <tbody>
                  <tr><td><strong>API</strong></td><td>Node.js or Python (FastAPI)</td><td>Core backend services</td></tr>
                  <tr><td><strong>Real-time</strong></td><td>WebSockets + CRDT (Yjs)</td><td>Chat + collaborative editing</td></tr>
                  <tr><td><strong>Video</strong></td><td>WebRTC via Twilio/Agora</td><td>Video consultations</td></tr>
                  <tr><td><strong>Auth</strong></td><td>OAuth2 + JWT</td><td>Secure authentication</td></tr>
                  <tr><td><strong>Search</strong></td><td>Elasticsearch</td><td>Marketplace discovery, filtering</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Service</th><th>Technology</th><th>Purpose</th></tr></thead>
                <tbody>
                  <tr><td><strong>Room Measurement</strong></td><td>OpenCV + depth sensing APIs</td><td>Computer vision for dimensions</td></tr>
                  <tr><td><strong>Design Generation</strong></td><td>Stable Diffusion / ControlNet (fine-tuned)</td><td>Photorealistic interior renders</td></tr>
                  <tr><td><strong>Floor Plan AI</strong></td><td>GANs / diffusion models</td><td>Layout optimization</td></tr>
                  <tr><td><strong>Style Matching</strong></td><td>Recommendation engine</td><td>Collaborative + content-based filtering</td></tr>
                  <tr><td><strong>Blueprint Parsing</strong></td><td>OCR + layout analysis</td><td>Extract dims from uploaded plans</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
                <tbody>
                  <tr><td><strong>Cloud</strong></td><td>AWS or GCP</td></tr>
                  <tr><td><strong>Storage</strong></td><td>S3/GCS for designs, images, user uploads</td></tr>
                  <tr><td><strong>Database</strong></td><td>PostgreSQL (relational) + Redis (cache/sessions)</td></tr>
                  <tr><td><strong>Search</strong></td><td>Elasticsearch for marketplace discovery</td></tr>
                  <tr><td><strong>CDN</strong></td><td>CloudFront/CloudFlare for global media delivery</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="📅 MVP Phasing">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Phase</th><th>Timeline</th><th>Scope</th></tr></thead>
            <tbody>
              <tr><td><strong>Phase 1 — MVP</strong></td><td>3-4 months</td><td>Manual floor plan input, basic AI suggestions (2D, 3 styles), architect directory + in-app messaging, responsive web app</td></tr>
              <tr><td><strong>Phase 2 — Enhanced</strong></td><td>+2-3 months</td><td>AR room scanning, 3D renders, video consultations, blueprint upload, payment integration, mobile apps</td></tr>
              <tr><td><strong>Phase 3 — Growth</strong></td><td>+2-3 months</td><td>Design DNA/style learning, shopping lists with affiliate, before/after renovation, ratings & reviews system</td></tr>
              <tr><td><strong>Phase 4 — Scale</strong></td><td>Ongoing</td><td>Real-time collaborative canvas, contractor marketplace, enterprise B2B, VR walkthroughs</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="⚠️ Key Risks & Mitigations">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Risk</th><th>Impact</th><th>Mitigation</th></tr></thead>
            <tbody>
              <tr><td><strong>AR accuracy</strong> — LiDAR only on Pro iPhones; standard AR has ±5% error</td><td><span className="badge badge-yellow">Medium</span></td><td>Set expectations; offer manual correction; "verify with tape measure" prompt</td></tr>
              <tr><td><strong>AI design quality</strong> — must be architecturally sound, not just aesthetic</td><td><span className="badge badge-red">High</span></td><td>Architect validation pipeline; "AI-suggested, not architect-approved" disclaimers; start with templates</td></tr>
              <tr><td><strong>Professional onboarding</strong> — chicken-and-egg marketplace problem</td><td><span className="badge badge-red">High</span></td><td>Seed with partnerships; free listing forever for basic; geographic rollout</td></tr>
              <tr><td><strong>Regional compliance</strong> — building codes, Vastu vary by region</td><td><span className="badge badge-yellow">Medium</span></td><td>Start with 3 metros; localize progressively</td></tr>
              <tr><td><strong>Liability</strong> — AI-suggested designs with structural issues</td><td><span className="badge badge-red">High</span></td><td>Strong disclaimers; block structural changes behind professional review; liability insurance</td></tr>
              <tr><td><strong>Data privacy</strong> — floor plans and home photos are sensitive</td><td><span className="badge badge-red">High</span></td><td>Encryption at rest + transit; DPDP Act compliance; user data controls</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💡 App Name Ideas">
        <div className="grid-3">
          {['ArchSpace', 'SpaceCraft', 'DesignMint', 'PlanMySpace', 'ArchiNest', 'HomeCanvas', 'SpaceForge', 'BluePrint AI', 'RoomVerse'].map(name => (
            <div key={name} className="box box-green" style={{ borderRadius: 10, textAlign: 'center', padding: '8px 12px' }}>
              <strong>{name}</strong>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
