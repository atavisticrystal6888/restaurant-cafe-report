import { SectionHeader, Card, StatCard, Tabs } from '../../components/UI'

export default function ArchitectOperationsLegal() {
  return (
    <div>
      <SectionHeader icon="⚖️" title="Operations & Legal Research" sub="Regulatory compliance (CoA, DPDP, GST, IP), supply-side deep dive on 125K architects, and success/failure postmortems from 7 companies" />

      <Card title="📜 Regulatory & Legal Framework">
        <Tabs tabs={['CoA Regulations', 'DPDP Act 2023', 'GST & Tax', 'IP & Patents', 'Consumer Protection', 'Insurance']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Regulation</th><th>Impact on Platform</th><th>Compliance Action</th></tr></thead>
                <tbody>
                  <tr><td><strong>Only registered architects can use title "Architect"</strong></td><td>Must verify CoA registration for marketplace</td><td>Verify CoA number at onboarding; periodic re-verification</td></tr>
                  <tr><td><strong>Professional standards</strong></td><td>Quality controls aligned with CoA</td><td>Review system, min response time, conduct policy</td></tr>
                  <tr><td><strong>Advertising restrictions</strong></td><td>Profile templates must comply</td><td>Ensure listings follow CoA advertising guidelines</td></tr>
                  <tr><td><strong>Fee guidelines</strong></td><td>Don't undercut CoA minimum fees</td><td>Use as marketplace pricing floor</td></tr>
                  <tr><td><strong>Interior designers ≠ Architects</strong></td><td>Must clearly distinguish on platform</td><td>Separate categories; designers unregulated</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">CoA Fee Schedule (Reference)</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Project Type</th><th>CoA Recommended Fee</th></tr></thead>
                <tbody>
                  <tr><td>Residential (new construction)</td><td>5-15% of construction cost</td></tr>
                  <tr><td>Residential (interior)</td><td>₹50-200/sq ft</td></tr>
                  <tr><td>Consultation</td><td>₹5,000-25,000 per sitting</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '.88rem', fontWeight: 600, color: 'var(--red)', marginBottom: 8 }}>Penalty: Up to ₹250 Cr per violation. Build privacy into product from Day 1.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Provision</th><th>Requirement</th><th>Our Action</th></tr></thead>
                <tbody>
                  <tr><td><strong>Consent</strong></td><td>Explicit, informed, specific purpose</td><td>Clear consent at registration; separate for marketing</td></tr>
                  <tr><td><strong>Purpose limitation</strong></td><td>Data for stated purpose only</td><td>Room photos for design only; not resold</td></tr>
                  <tr><td><strong>Storage limitation</strong></td><td>Don't retain beyond purpose</td><td>Auto-delete old room photos after 12 months</td></tr>
                  <tr><td><strong>Right to erasure</strong></td><td>Users can request deletion</td><td>"Delete My Data" feature in app</td></tr>
                  <tr><td><strong>Breach notification</strong></td><td>72 hours</td><td>Incident response plan + automated notification</td></tr>
                  <tr><td><strong>Children's data</strong></td><td>Extra protections for under-18</td><td>Age gate — restrict to 18+ in ToS</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Data Sensitivity by Type</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Data</th><th>Sensitivity</th><th>Handling</th></tr></thead>
                <tbody>
                  <tr><td>Room photos</td><td>MEDIUM</td><td>Process for design only; blur personal identifiable elements</td></tr>
                  <tr><td>Address/location</td><td>HIGH</td><td>Encrypt at rest; don't expose to third parties</td></tr>
                  <tr><td>Consultation recordings</td><td>HIGH</td><td>Separate consent; encrypted storage</td></tr>
                  <tr><td>Financial info</td><td>HIGH</td><td>Payment via Razorpay/Stripe only; we don't store card details</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Service</th><th>GST Rate</th><th>Notes</th></tr></thead>
                <tbody>
                  <tr><td>SaaS subscription (consumer + architect)</td><td>18%</td><td>We collect &amp; remit</td></tr>
                  <tr><td>Marketplace commission</td><td>18%</td><td>Architect can claim input credit</td></tr>
                  <tr><td>Affiliate commission (received)</td><td>18%</td><td>We claim input credit</td></tr>
                  <tr><td>International subscription</td><td>0%</td><td>Export of services; zero-rated</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', marginTop: 8 }}>GST registration required once revenue crosses ₹20L. Register BEFORE launch — credibility with B2B architect customers who need GST invoices.</p>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>IP Type</th><th>What</th><th>Protection</th><th>Timeline</th></tr></thead>
                <tbody>
                  <tr><td><strong>Trademark</strong></td><td>Brand name, logo, tagline</td><td>™ immediately; ® registration</td><td>Day 1</td></tr>
                  <tr><td><strong>Domain names</strong></td><td>.com, .in, .io</td><td>Register all key variants</td><td>Day 1</td></tr>
                  <tr><td><strong>Trade secrets</strong></td><td>AI model, training methodology, algorithms</td><td>NDAs; employment agreements; access controls</td><td>Day 1</td></tr>
                  <tr><td><strong>Patents</strong></td><td>AI design generation; Vastu-compliance algo; room measurement</td><td>Patent application (24-36 months)</td><td>Month 6-12</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">AI-Generated Content IP (Gray Area)</h3>
            <p style={{ fontSize: '.88rem' }}>Indian Copyright Act 1957 grants copyright to human "author" — AI is not a legal person. <strong>Our position:</strong> User owns output designs. We retain rights to anonymized training data. Clarify in ToS.</p>
            <h3 className="card-subtitle">Key ToS Clauses</h3>
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>User grants us license</strong> to use room photos for AI improvement</div>
              <div className="box box-purple" style={{ borderRadius: 12 }}><strong>User owns output</strong> — clear ownership = trust</div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}><strong>Indemnification</strong> — not liable for structural/safety issues from AI designs</div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}><strong>Architect = independent contractor</strong> — platform not employer</div>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Product</th><th>Refund Window</th><th>Terms</th></tr></thead>
                <tbody>
                  <tr><td>Monthly subscription</td><td>7 days</td><td>Full refund if no designs generated</td></tr>
                  <tr><td>Annual subscription</td><td>15 days</td><td>Pro-rated refund after 15 days</td></tr>
                  <tr><td>Architect consultation</td><td>24hrs before</td><td>Full refund; after start: 50%</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '.85rem', marginTop: 8 }}>E-Commerce Rules 2020: 48-hour grievance response, designated grievance officer, transparent pricing, no dark patterns.</p>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Insurance</th><th>Why</th><th>Est. Cost/yr</th></tr></thead>
                <tbody>
                  <tr><td>Professional liability (E&amp;O)</td><td>AI design recommendations causing damage</td><td>₹50K-2L</td></tr>
                  <tr><td>Cyber insurance</td><td>Data breach; system downtime</td><td>₹1-3L</td></tr>
                  <tr><td>D&amp;O</td><td>Founder personal liability</td><td>₹1-2L</td></tr>
                  <tr><td>General liability</td><td>General claims</td><td>₹30-50K</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
        <div style={{ padding: 16, borderRadius: 12, background: 'var(--green-bg)', border: '2px solid var(--green)', marginTop: 16 }}>
          <strong>AI Liability Disclaimer (Required):</strong> "Designs generated by AI are for visualization and inspiration purposes only. They do not constitute architectural or engineering advice. For structural changes, consult a registered architect or structural engineer."
        </div>
      </Card>

      <Card title="👤 Supply-Side — India's Architects">
        <div className="stats-grid">
          <StatCard value="125K" label="Registered Architects (CoA)" color="green" />
          <StatCard value="300-400K" label="Unregistered Interior Designers" color="blue" />
          <StatCard value="25-30K" label="B.Arch Graduates/Year" color="gold" />
          <StatCard value="80-90%" label="Depend on Word-of-Mouth" color="red" />
        </div>

        <Tabs tabs={['Income & Economics', 'Client Acquisition Pain', 'Tech Adoption', 'What They Want', 'Onboarding Strategy', 'Retention']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Tier</th><th>Monthly Income</th><th>% of Practioners</th><th>Profile</th></tr></thead>
                <tbody>
                  <tr><td>&lt;₹30K</td><td>₹15-30K</td><td>~30%</td><td>Junior in firms; students; part-time</td></tr>
                  <tr><td>₹30K-75K</td><td>₹30-75K</td><td>~35%</td><td>Mid-level (3-7 yrs) or early independent</td></tr>
                  <tr><td>₹75K-2L</td><td>₹75K-2L</td><td>~25%</td><td>Established independent; small firm owners</td></tr>
                  <tr><td>₹2L-5L</td><td>₹2-5L</td><td>~8%</td><td>Successful firm; premium residential</td></tr>
                  <tr><td>&gt;₹5L</td><td>₹5L+</td><td>~2%</td><td>Star architects; large firms</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">How Architects Charge</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Fee Model</th><th>Rate</th><th>Usage</th></tr></thead>
                <tbody>
                  <tr><td>Per sq ft</td><td>₹50-500/sq ft</td><td>Most common in India</td></tr>
                  <tr><td>% of project cost</td><td>5-15%</td><td>Full projects</td></tr>
                  <tr><td>Fixed fee/room</td><td>₹10K-50K</td><td>Consultations; small projects</td></tr>
                  <tr><td>Lump sum</td><td>₹50K-5L</td><td>Fixed scope</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '.9rem', fontWeight: 600, marginBottom: 12 }}>#1 Pain Point: Zero systematic client acquisition. Feast-or-famine cycles driven by referrals.</p>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Method</th><th>Usage</th><th>Effectiveness</th><th>Cost</th></tr></thead>
                <tbody>
                  <tr><td><strong>Word-of-mouth / referrals</strong></td><td>80-90%</td><td>★★★★★</td><td>Free</td></tr>
                  <tr><td><strong>Instagram</strong></td><td>40-60%</td><td>★★★★☆</td><td>₹0-5K/mo</td></tr>
                  <tr><td><strong>Personal website</strong></td><td>20-30%</td><td>★★★☆☆</td><td>₹10-30K setup</td></tr>
                  <tr><td><strong>JustDial / Sulekha</strong></td><td>15-25%</td><td>★★☆☆☆</td><td>₹15-50K/yr</td></tr>
                  <tr><td><strong>Google My Business</strong></td><td>10-20%</td><td>★★★☆☆</td><td>Free</td></tr>
                  <tr><td><strong>Houzz India</strong></td><td>&lt;5%</td><td>★★☆☆☆</td><td>Free</td></tr>
                </tbody>
              </table>
            </div>
            <div style={{ padding: 12, borderRadius: 12, background: 'var(--green-bg)', border: '2px solid var(--green)', marginTop: 12 }}>
              <strong>Our core value prop to architects:</strong> Predictable, qualified lead flow — not just any inquiry, but someone with a budget, a room, and a design direction.
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Software</th><th>Adoption</th><th>Purpose</th></tr></thead>
                <tbody>
                  <tr><td><strong>AutoCAD</strong></td><td>70-80%</td><td>2D drafting (industry standard)</td></tr>
                  <tr><td><strong>SketchUp</strong></td><td>50-60%</td><td>3D modeling</td></tr>
                  <tr><td><strong>3ds Max / V-Ray</strong></td><td>30-40%</td><td>Photorealistic rendering</td></tr>
                  <tr><td><strong>Photoshop</strong></td><td>40-50%</td><td>Presentation boards</td></tr>
                  <tr><td><strong>Revit</strong></td><td>15-25%</td><td>BIM modeling (growing)</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Digital Comfort Level</h3>
            <div className="grid-3" style={{ marginTop: 8 }}>
              <div className="box box-green" style={{ borderRadius: 12 }}>
                <strong>Digitally native (25-35)</strong><br />
                <small>~35% — Active Instagram, cloud tools, open to new platforms</small>
              </div>
              <div className="box box-purple" style={{ borderRadius: 12 }}>
                <strong>Digitally comfortable (35-50)</strong><br />
                <small>~40% — AutoCAD + SketchUp; selectively adopts new tools</small>
              </div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}>
                <strong>Digitally resistant (50+)</strong><br />
                <small>~25% — Traditional methods; assistant manages digital</small>
              </div>
            </div>
            <p style={{ fontSize: '.85rem', marginTop: 8 }}>Target: "Native" + "Comfortable" = <strong>~75% of active architects.</strong></p>
          </div>
          <div>
            <div className="grid-2">
              <div>
                <h3 className="card-subtitle">What They Want</h3>
                <div className="table-wrap">
                  <table>
                    <thead><tr><th>Want</th><th>Priority</th></tr></thead>
                    <tbody>
                      <tr><td>Qualified leads</td><td>★★★★★</td></tr>
                      <tr><td>Portfolio showcase</td><td>★★★★☆</td></tr>
                      <tr><td>Transparent communication</td><td>★★★★☆</td></tr>
                      <tr><td>Fair pricing control</td><td>★★★★☆</td></tr>
                      <tr><td>Reviews &amp; reputation</td><td>★★★★☆</td></tr>
                      <tr><td>Payment security (escrow)</td><td>★★★☆☆</td></tr>
                      <tr><td>&lt;20% commission</td><td>★★★☆☆</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="card-subtitle">What They DON'T Want</h3>
                <div className="table-wrap">
                  <table>
                    <thead><tr><th>Don't Want</th><th>Why</th></tr></thead>
                    <tbody>
                      <tr><td>Price wars</td><td>Devalues profession</td></tr>
                      <tr><td>Time wasters</td><td>People "just looking"</td></tr>
                      <tr><td>Complex onboarding</td><td>Hours to set up profile</td></tr>
                      <tr><td>Platform dependency</td><td>Don't want lock-in</td></tr>
                      <tr><td>"AI replacing architects"</td><td>Position as "AI assists"</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Phase</th><th>Target</th><th>Strategy</th></tr></thead>
                <tbody>
                  <tr><td><strong>Pre-launch</strong></td><td>20 "Founding Architects"</td><td>Personal outreach (founder does this)</td></tr>
                  <tr><td><strong>Month 1-3</strong></td><td>200 (Bangalore)</td><td>BD exec + Instagram + architecture college networks</td></tr>
                  <tr><td><strong>Month 3-6</strong></td><td>500 (3 cities)</td><td>Scale BD; referral: architect refers → both get 1mo free premium</td></tr>
                  <tr><td><strong>Month 6-12</strong></td><td>2,000 (5 cities)</td><td>Self-serve onboarding live; LinkedIn + design publications</td></tr>
                  <tr><td><strong>Year 2</strong></td><td>5,000+</td><td>Organic growth + paid professional ads</td></tr>
                </tbody>
              </table>
            </div>
            <h3 className="card-subtitle">Friction Solutions</h3>
            <div className="grid-2" style={{ marginTop: 8 }}>
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>"No time for profile"</strong> → Instagram import: pull photos + bio in 1 click</div>
              <div className="box box-purple" style={{ borderRadius: 12 }}><strong>"Show results first"</strong> → Free listing forever + first 5 leads free</div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}><strong>"Lead quality?"</strong> → Show details: room design, budget selected, style</div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}><strong>"Bad reviews?"</strong> → Review only from paid consultations (prevents spam)</div>
            </div>
          </div>
          <div>
            <div className="grid-2">
              <div>
                <h3 className="card-subtitle">Retention Drivers</h3>
                <ul style={{ paddingLeft: 16, lineHeight: 1.8, fontSize: '.88rem' }}>
                  <li><strong>Consistent leads</strong> — 3-5/month minimum for ROI</li>
                  <li><strong>Review accumulation</strong> — after 20+ reviews, leaving = losing proof</li>
                  <li><strong>Portfolio investment</strong> — time curating → switching cost</li>
                  <li><strong>Payment security</strong> — escrow = reliable income</li>
                  <li><strong>Analytics</strong> — profile views, search appearances, trends</li>
                </ul>
              </div>
              <div>
                <h3 className="card-subtitle">Churn Triggers → Prevention</h3>
                <ul style={{ paddingLeft: 16, lineHeight: 1.8, fontSize: '.88rem' }}>
                  <li><strong>No leads in 30 days</strong> → Manual matching; guarantee first 5</li>
                  <li><strong>Poor lead quality</strong> → Min budget filter on consumer side</li>
                  <li><strong>Commission too high</strong> → Start at 15%; show cost/lead vs JustDial</li>
                  <li><strong>Hard to use</strong> → Mobile app for on-the-go management</li>
                </ul>
              </div>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="📚 Success & Failure Postmortems — 7 Companies Analyzed">
        <Tabs tabs={['Failures (4)', 'Successes (3)', 'Pattern Analysis']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Funded</th><th>What Happened</th><th>Root Cause</th><th>Our Lesson</th></tr></thead>
                <tbody>
                  <tr><td><strong>Modsy</strong> ($73M)</td><td>2015-22</td><td>Shut down — 200 employees notified via email</td><td>Each design cost $30-50 labor; single revenue; COVID whiplash</td><td>AI-first = &lt;₹5/design. 5 revenue streams. Capital-efficient.</td></tr>
                  <tr><td><strong>Spacejoy</strong> (~$5M)</td><td>2019</td><td>Downsized; pivoted to affiliate-only</td><td>Copycat model; designer dependency; quality inconsistency</td><td>Differentiate on tech. AI = consistent quality.</td></tr>
                  <tr><td><strong>Laurel &amp; Wolf</strong> ($35M)</td><td>2014-19</td><td>Shut down amid class-action lawsuit</td><td>Unqualified designers; unpaid fees; labor disputes</td><td>Verify CoA credentials. Auto payouts in 7 days. Clear contractor agreements.</td></tr>
                  <tr><td><strong>Hutch</strong> (~$10M)</td><td>2015</td><td>Acqui-hired by 1stDibs</td><td>Single feature (AR only); couldn't monetize; Apple/IKEA built same feature</td><td>Multiple value layers. AR is Phase 3, not core.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Valuation</th><th>What They Did Right (Early)</th><th>What We Copy</th></tr></thead>
                <tbody>
                  <tr><td><strong>Livspace</strong></td><td>$1.2B</td><td>Tech first → services later; Bangalore-only; modular kitchen wedge; content-first SEO</td><td>Same city-first. Living room as our wedge. Content-driven SEO.</td></tr>
                  <tr><td><strong>Houzz</strong></td><td>$4B</td><td>Photo gallery → community → marketplace; free pro listing; "Save" feature drove engagement</td><td>Free architect tier. "My Designs" collection. AI designs ARE content.</td></tr>
                  <tr><td><strong>Canva</strong></td><td>$26B</td><td>Genuinely free tier; viral sharing with watermark; templates solve blank canvas; 30-second first design</td><td>2 free AI designs/mo. Shared designs link back. Upload → design in 30s.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="grid-2">
              <div>
                <h3 className="card-subtitle">❌ What Killed Them</h3>
                <div className="table-wrap">
                  <table>
                    <thead><tr><th>Pattern</th><th>Frequency</th><th>Us</th></tr></thead>
                    <tbody>
                      <tr><td>Human-dependent service</td><td>3 of 4</td><td>✅ AI-first</td></tr>
                      <tr><td>Single revenue stream</td><td>4 of 4</td><td>✅ 5 streams</td></tr>
                      <tr><td>No network effects</td><td>3.5 of 4</td><td>✅ Marketplace</td></tr>
                      <tr><td>Quality control failures</td><td>2 of 4</td><td>✅ AI consistency</td></tr>
                      <tr><td>Burned cash before PMF</td><td>4 of 4</td><td>✅ ₹30-40L burn</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="card-subtitle">✅ What Made Winners Win</h3>
                <div className="table-wrap">
                  <table>
                    <thead><tr><th>Pattern</th><th>Frequency</th><th>Us</th></tr></thead>
                    <tbody>
                      <tr><td>Content/value first</td><td>3 of 3</td><td>✅</td></tr>
                      <tr><td>Geography focus</td><td>3 of 3</td><td>✅</td></tr>
                      <tr><td>Free attracts supply</td><td>2.5 of 3</td><td>✅</td></tr>
                      <tr><td>Quality over speed</td><td>3 of 3</td><td>✅</td></tr>
                      <tr><td>Multiple revenue streams</td><td>3 of 3</td><td>✅</td></tr>
                      <tr><td>Data improves product</td><td>3 of 3</td><td>✅</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div style={{ padding: 16, borderRadius: 12, background: 'var(--green-bg)', border: '2px solid var(--green)', marginTop: 16 }}>
              <strong>Meta-Pattern:</strong> Winners = Self-serve + AI-first + content flywheel + clear monetization path. Losers = Human-dependent + high burn + quality failures + bolt-on monetization. <strong>We're positioned on the winning side of every pattern.</strong> The biggest risk is execution, not strategy.
            </div>
          </div>
        </Tabs>
      </Card>
    </div>
  )
}
