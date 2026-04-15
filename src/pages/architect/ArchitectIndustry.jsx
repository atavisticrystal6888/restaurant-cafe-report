import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectIndustry() {
  return (
    <div>
      <SectionHeader icon="🌍" title="Industry & Market Research" sub="Market segmentation, value chain analysis, Porter's Five Forces, India real estate deep dive, city-level maps, consumer behavior & global comparables" />

      <div className="stats-grid">
        <StatCard value="$3.8–4.2B" label="Global Market 2023" color="green" />
        <StatCard value="$7–8.5B" label="Global Market 2030" color="blue" />
        <StatCard value="$1 Trillion" label="India RE by 2030" color="gold" />
        <StatCard value="25-35%" label="AI Design CAGR" color="purple" />
      </div>

      <Card title="📊 Global Interior Design Software Market">
        <h3 className="card-subtitle">Market Segmentation</h3>
        <BarChart data={[
          { label: 'Pro CAD/BIM (45%)', width: '45%', text: '5-7% growth — AutoCAD, Revit, SketchUp', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Consumer Tools (25%)', width: '25%', text: '12-15% growth — Planner 5D, HomeByMe', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'AI-Powered (8%)', width: '15%', text: '25-35% growth ⚡ Our space', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Virtual Staging (7%)', width: '12%', text: '20-25% growth', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
          { label: 'AR/VR (5%)', width: '10%', text: '15-20% growth', color: 'linear-gradient(90deg, #922b21, #ec7063)' },
        ]} />
        <h3 className="card-subtitle">Geographic Distribution</h3>
        <BarChart data={[
          { label: 'North America', width: '35%', text: '35% — Mature, high ARPU, Houzz-dominated', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Europe', width: '28%', text: '28% — Sustainability focus', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Asia-Pacific', width: '25%', text: '25% — Fastest growing, to surpass Europe by 2028', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Rest of World', width: '12%', text: '12% — Middle East especially promising', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
        ]} />
        <div className="box box-green" style={{ borderRadius: 12, marginTop: 12 }}>
          <strong>Key Insight:</strong> Asia-Pacific is the fastest-growing region. India alone could represent 5-8% of global market by 2030 given real estate growth trajectory.
        </div>
      </Card>

      <Card title="🔗 Industry Value Chain & Our Position">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Value Chain Segment</th><th>Gross Margin</th><th>Revenue Model</th><th>Example</th><th>We Do This?</th></tr></thead>
            <tbody>
              <tr><td><strong>Design Tools (SaaS)</strong></td><td>70-85%</td><td>Subscription</td><td>Planner 5D, Foyr Neo</td><td><span className="badge badge-green">✅ Core</span></td></tr>
              <tr><td><strong>Professional Marketplace</strong></td><td>60-75%</td><td>Commission (15-25%)</td><td>Houzz, UrbanClap</td><td><span className="badge badge-green">✅ Core</span></td></tr>
              <tr><td><strong>Product Commerce</strong></td><td>25-40%</td><td>Affiliate (5-15%)</td><td>Pepperfry affiliate</td><td><span className="badge badge-blue">✅ Supplementary</span></td></tr>
              <tr><td><strong>Managed Interior Services</strong></td><td>15-25%</td><td>Project fee markup</td><td>Livspace</td><td><span className="badge badge-yellow">❌ Not our model</span></td></tr>
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 8, fontSize: '.88rem' }}><strong>Our blended target: 65-78% gross margin</strong> — weighted toward high-margin SaaS + marketplace. No existing player spans all three in a single consumer-friendly experience.</p>
      </Card>

      <Card title="⚡ Technology Trends Shaping the Industry">
        <Tabs tabs={['Gen AI ★★★★★', 'AR/Spatial ★★★★☆', 'Platform Consolidation', 'India Digital', 'Key Success Factors']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Aspect</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td><strong>What&apos;s happening</strong></td><td>Text-to-image (Stable Diffusion, DALL·E, Midjourney) and image-to-image models generate photorealistic interiors from text prompts or room photos</td></tr>
                  <tr><td><strong>Maturity</strong></td><td>Early commercial (2023-2025 first wave of AI design tools)</td></tr>
                  <tr><td><strong>Key players</strong></td><td>Interior AI, RoomGPT, Reimagine Home, Collov AI</td></tr>
                  <tr><td><strong>Opportunity</strong></td><td>Democratizes design — consumers get "professional-looking" outputs without hiring</td></tr>
                  <tr><td><strong>Risk</strong></td><td>Low barrier to entry for AI-only features; differentiation must come from data + marketplace</td></tr>
                  <tr><td><strong>Our position</strong></td><td>AI design is one feature in a broader platform, not our entire product</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Aspect</th><th>Detail</th></tr></thead>
                <tbody>
                  <tr><td><strong>What&apos;s happening</strong></td><td>LiDAR on phones (iPhone 12 Pro+), Apple RoomPlan API, ARCore enable room scanning from consumer devices</td></tr>
                  <tr><td><strong>Key development</strong></td><td>Apple Vision Pro creates new possibilities for immersive walkthroughs</td></tr>
                  <tr><td><strong>Bottleneck</strong></td><td>LiDAR limited to iPhone Pro (~15-20% of Indian iPhone users); Android AR less accurate</td></tr>
                  <tr><td><strong>Our position</strong></td><td>AR is Phase 2; manual input + blueprint upload serve Phase 1</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <p>Successful home-tech companies expand horizontally: Houzz (inspiration → marketplace → SaaS → commerce), Livspace (design → managed execution → commercial).</p>
            <p><strong>Implication:</strong> Single-feature tools struggle long-term; platforms win. <strong>Our advantage:</strong> Starting as a platform from day one (measure + design + consult).</p>
          </div>
          <div>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>10B+</strong> monthly UPI transactions — digital payment is mainstream</div>
              <div className="box box-purple" style={{ borderRadius: 12 }}><strong>750M+</strong> smartphone users, growing in Tier 2/3</div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}><strong>UrbanClap</strong> proved India books home professionals via apps</div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}><strong>Livspace</strong> serves &lt;0.5% of addressable market — still early</div>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Factor</th><th>Importance</th><th>Our Readiness</th></tr></thead>
                <tbody>
                  <tr><td><strong>Design output quality</strong></td><td>★★★★★</td><td>Must be "share-worthy" (WhatsApp/Instagram test)</td></tr>
                  <tr><td><strong>Ease of use</strong></td><td>★★★★★</td><td>Non-technical homeowners are primary users</td></tr>
                  <tr><td><strong>Professional supply quality</strong></td><td>★★★★☆</td><td>Verified architects with good portfolios</td></tr>
                  <tr><td><strong>Speed of generation</strong></td><td>★★★★☆</td><td>Must feel instant (&lt;30 seconds for AI design)</td></tr>
                  <tr><td><strong>Local/regional relevance</strong></td><td>★★★★☆</td><td>India styles, Vastu, local brands/prices</td></tr>
                  <tr><td><strong>Trust &amp; reliability</strong></td><td>★★★★☆</td><td>Especially for marketplace transactions</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🏢 Industry Players Map">
        <Tabs tabs={['Tier 1 (>$500M)', 'Tier 2 ($10-500M)', 'Tier 3 (AI-Native)', 'India-Specific']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Founded</th><th>Valuation/Revenue</th><th>What They Do</th></tr></thead>
                <tbody>
                  <tr><td><strong>Houzz</strong></td><td>2009</td><td>$4B valuation (2017)</td><td>Inspiration + marketplace + Houzz Pro SaaS</td></tr>
                  <tr><td><strong>Livspace</strong></td><td>2014</td><td>$1.2B; ₹1,148Cr FY23</td><td>Full-service managed interior design</td></tr>
                  <tr><td><strong>Autodesk</strong></td><td>1982</td><td>$50B+ market cap</td><td>Professional CAD/BIM — not consumer</td></tr>
                  <tr><td><strong>Trimble (SketchUp)</strong></td><td>2012 acq</td><td>Part of $15B Trimble</td><td>Professional 3D modeling</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Est. Revenue</th><th>What They Do</th></tr></thead>
                <tbody>
                  <tr><td><strong>Planner 5D</strong></td><td>$5-10M</td><td>Consumer 3D room planner; 80M+ projects</td></tr>
                  <tr><td><strong>Foyr Neo</strong></td><td>$3-8M</td><td>Professional interior rendering SaaS (India)</td></tr>
                  <tr><td><strong>Magicplan</strong></td><td>$10-20M</td><td>AR floor plan measurement (B2B)</td></tr>
                  <tr><td><strong>RoomSketcher</strong></td><td>$5-10M</td><td>Floor plan + 3D visualization</td></tr>
                  <tr><td><strong>HomeByMe</strong></td><td>$5-15M</td><td>Consumer 3D home design (Dassault)</td></tr>
                  <tr><td><strong>Cedreo</strong></td><td>$5-10M</td><td>Home design for builders/remodelers</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>Founded</th><th>What</th><th>Funding</th></tr></thead>
                <tbody>
                  <tr><td><strong>Interior AI</strong></td><td>2022</td><td>AI room redesign from photos</td><td>Bootstrapped</td></tr>
                  <tr><td><strong>RoomGPT</strong></td><td>2023</td><td>Open-source AI room redesign</td><td>Minimal</td></tr>
                  <tr><td><strong>Reimagine Home</strong></td><td>2023</td><td>AI interior design generation</td><td>Seed-stage</td></tr>
                  <tr><td><strong>Collov AI</strong></td><td>2023</td><td>AI-powered interior visualization</td><td>Early-stage</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>What</th><th>Status</th></tr></thead>
                <tbody>
                  <tr><td><strong>Livspace</strong></td><td>Managed interiors — unicorn, dominant</td><td>₹1,148Cr revenue</td></tr>
                  <tr><td><strong>HomeLane</strong></td><td>Managed interiors (Livspace competitor)</td><td>₹500-800Cr revenue</td></tr>
                  <tr><td><strong>DesignCafe</strong></td><td>Managed interiors, subscription model</td><td>~₹300-500Cr</td></tr>
                  <tr><td><strong>Bonito Designs</strong></td><td>Managed interiors, Bangalore-focused</td><td>Growing</td></tr>
                  <tr><td><strong>Foyr</strong></td><td>Professional SaaS tool</td><td>Small but proven</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🔍 Porter&apos;s Five Forces">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Force</th><th>Intensity</th><th>Analysis</th></tr></thead>
            <tbody>
              <tr><td><strong>Threat of New Entrants</strong></td><td><span className="badge badge-red">HIGH</span></td><td>AI tools low-cost initially; BUT marketplace + data moats create barriers over time</td></tr>
              <tr><td><strong>Buyer Power</strong></td><td><span className="badge badge-yellow">MED-HIGH</span></td><td>Many free tools; low switching costs for design-only. Marketplace lock-in (reviews, history) reduces power</td></tr>
              <tr><td><strong>Supplier Power</strong></td><td><span className="badge badge-green">LOW-MED</span></td><td>Architects have alternatives. Key dependency: AI model providers (OpenAI, Stability AI)</td></tr>
              <tr><td><strong>Threat of Substitutes</strong></td><td><span className="badge badge-yellow">MEDIUM</span></td><td>Pinterest + WhatsApp + local architect = existing "workflow". Be better than this.</td></tr>
              <tr><td><strong>Competitive Rivalry</strong></td><td><span className="badge badge-yellow">MEDIUM</span></td><td>No direct all-in-one competitor in India. Livspace competes on outcomes, not tools.</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🏠 India Real Estate Market Deep Dive">
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>~$200B (2024)</strong> → <strong>$1 Trillion by 2030</strong><br />
            <small>Second-largest employer after agriculture. 7-8% GDP contribution → 13% by 2025</small>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>406,889 homes delivered</strong> in top 9 cities (FY25, +33% YoY)<br />
            <small>50M+ people employed; $26.6B FDI (2000-2023)</small>
          </div>
        </div>
        <h3 className="card-subtitle">Price Segment vs Interior Design Opportunity</h3>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Segment</th><th>Price Range</th><th>Market Share (H1 2025)</th><th>Interior Spend</th><th>Our Opportunity</th></tr></thead>
            <tbody>
              <tr><td><strong>Ultra-luxury</strong></td><td>&gt;₹5 Cr</td><td>~8%</td><td>₹50L-2Cr+</td><td>Enterprise — developer partnerships</td></tr>
              <tr><td><strong>Luxury</strong></td><td>₹1-5 Cr</td><td><strong>62%</strong></td><td>₹5-30L</td><td>★★★★★ Prime target</td></tr>
              <tr><td><strong>Mid-range</strong></td><td>₹40L-1Cr</td><td>~22%</td><td>₹2-10L</td><td>★★★★☆ Mass market, high vol</td></tr>
              <tr><td><strong>Affordable</strong></td><td>&lt;₹40L</td><td>~8%</td><td>₹50K-2L</td><td>★★★☆☆ Volume play, lower ARPU</td></tr>
            </tbody>
          </table>
        </div>
        <div className="box box-green" style={{ borderRadius: 12, marginTop: 12 }}>
          <strong>Critical Insight:</strong> 62% luxury share means the majority of home buyers in top cities have the budget for interior design services. Validates premium pricing.
        </div>
      </Card>

      <Card title="🗺️ City-by-City Market Analysis">
        <Tabs tabs={['Tier 1 (Launch)', 'Tier 2 (Month 6-12)', 'Tier 3 (Month 12-18)']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>City</th><th>Annual Sales</th><th>Avg ₹/sqft</th><th>Interior Design Market</th><th>Key Advantage</th></tr></thead>
                <tbody>
                  <tr><td><strong>Mumbai MMR</strong></td><td>100,000+ units</td><td>₹15-25K+</td><td>₹8,000-12,000 Cr annually</td><td>Space optimization AI critical for compact apartments; Vastu very important</td></tr>
                  <tr><td><strong>Delhi NCR</strong></td><td>80,000+ units</td><td>₹6-15K</td><td>₹6,000-10,000 Cr annually</td><td>Massive new construction in Gurgaon/Noida; developer partnerships at handover</td></tr>
                  <tr><td><strong>Bangalore</strong></td><td>70,000+ units</td><td>₹7-14K</td><td>₹4,000-7,000 Cr annually</td><td>Most tech-savvy audience; willing to adopt AI tools first; startup partnerships</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>City</th><th>Annual Sales</th><th>Key Characteristics</th></tr></thead>
                <tbody>
                  <tr><td><strong>Hyderabad</strong></td><td>~65,000 units</td><td>Fast-growing, lower competition, affordable luxury</td></tr>
                  <tr><td><strong>Pune</strong></td><td>~55,000 units</td><td>Young professionals, startup culture, design-conscious</td></tr>
                  <tr><td><strong>Chennai</strong></td><td>~40,000 units</td><td>Strong traditional + modern mix, Vastu-conscious</td></tr>
                  <tr><td><strong>Kolkata</strong></td><td>~25,000 units</td><td>Price-sensitive, strong cultural design traditions</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>City</th><th>Annual Sales</th><th>Key Characteristics</th></tr></thead>
                <tbody>
                  <tr><td><strong>Ahmedabad</strong></td><td>~30,000 units</td><td>Vastu very important, growing luxury segment</td></tr>
                  <tr><td><strong>Jaipur</strong></td><td>~15,000 units</td><td>Heritage + modern blend, tourism-driven renovation</td></tr>
                  <tr><td><strong>Lucknow</strong></td><td>~12,000 units</td><td>Fast-growing Tier 2, aspirational design choices</td></tr>
                  <tr><td><strong>Kochi</strong></td><td>~10,000 units</td><td>NRI-driven luxury, Kerala architecture + modern fusion</td></tr>
                  <tr><td><strong>Chandigarh/Coimbatore</strong></td><td>~8,000 each</td><td>Planned city / rising industrial hub</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="🏛️ Government Policy Tailwinds">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Policy</th><th>Impact on Us</th></tr></thead>
            <tbody>
              <tr><td><strong>RERA (2016)</strong></td><td>Mandatory project registration → organized handovers → partner at handover moment</td></tr>
              <tr><td><strong>PMAY</strong></td><td>11.8M homes sanctioned — affordable housing buyers = massive volume, lower ARPU, B2B template opportunity</td></tr>
              <tr><td><strong>Maharashtra Housing Policy 2025</strong></td><td>35 lakh houses in 5 years; standardized sizes = templatized design at scale</td></tr>
              <tr><td><strong>Smart City Mission (100 cities)</strong></td><td>Digital infra in 100 cities → tech adoption; smart home integration demand grows</td></tr>
              <tr><td><strong>GST reduction</strong></td><td>Under-construction properties 12% → 5% — makes buying more attractive</td></tr>
              <tr><td><strong>100% FDI in construction</strong></td><td>More foreign capital → more projects → more interior design demand</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🎯 Target Audience Segments">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Segment</th><th>Size</th><th>Priority</th><th>WTP</th><th>Key Insight</th></tr></thead>
            <tbody>
              <tr><td><strong>First-home Buyers</strong></td><td>Large</td><td><span className="badge badge-green">P0</span></td><td>High</td><td>Greatest overwhelm, highest conversion likelihood</td></tr>
              <tr><td><strong>Newly Married Couples</strong></td><td>~10M/yr marriages</td><td><span className="badge badge-green">P0</span></td><td>High</td><td>Livspace primary persona — proven</td></tr>
              <tr><td><strong>Renovators (5+ yr homes)</strong></td><td>Very Large</td><td><span className="badge badge-blue">P1</span></td><td>Medium</td><td>DIY-first approach; budget-conscious</td></tr>
              <tr><td><strong>Professional Architects</strong></td><td>120K registered + 300K designers</td><td><span className="badge badge-blue">P1</span></td><td>₹1-5K/mo</td><td>Houzz 2.7M pros validates supply-side model</td></tr>
              <tr><td><strong>Real Estate Developers</strong></td><td>25K+ registered</td><td><span className="badge badge-yellow">P2</span></td><td>Very High</td><td>Virtual staging, model flat design — enterprise play</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📈 Consumer Behavior Trends">
        <div className="grid-2">
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>🕉️ Vastu Demand</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>60-80% of Indian homebuyers consider Vastu — massive untapped digital opportunity. "Is your home Vastu compliant?" is a killer acquisition hook.</p>
          </div>
          <div className="box box-purple" style={{ borderRadius: 12 }}>
            <strong>📱 DIY vs Professional</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Growing DIY-first approach among millennials. Tool → try yourself → stuck → hire professional. Our app enables this exact journey.</p>
          </div>
          <div className="box box-yellow" style={{ borderRadius: 12 }}>
            <strong>📅 Seasonal Patterns</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>Peak: Oct-Mar (post-monsoon, festive/wedding season). Low: Jun-Aug (monsoon). Marketing spend follows this cycle.</p>
          </div>
          <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}>
            <strong>💰 WTP</strong>
            <p style={{ fontSize: '.85rem', marginTop: 4 }}>₹500-2K/month for premium tools. ₹5K-50K for professional consultations. Interior spend = 8-20% of home value.</p>
          </div>
        </div>
      </Card>

      <Card title="🌐 Global Comparables & Failure Lessons">
        <div className="grid-2">
          <div>
            <h3 className="card-subtitle">Success Models to Learn From</h3>
            <div className="grid-2">
              <div className="box box-green" style={{ borderRadius: 12 }}><strong>Canva</strong><br /><small>Freemium → Premium flywheel. Design tool democratization.</small></div>
              <div className="box box-purple" style={{ borderRadius: 12 }}><strong>Pinterest</strong><br /><small>Inspiration → Commerce path. Visual discovery engine.</small></div>
              <div className="box box-yellow" style={{ borderRadius: 12 }}><strong>Zillow</strong><br /><small>Marketplace dominance via content + data moat.</small></div>
              <div className="box" style={{ borderRadius: 12, background: '#f0f4ff' }}><strong>Urban Company</strong><br /><small>Proved India books home professionals via apps.</small></div>
            </div>
          </div>
          <div>
            <h3 className="card-subtitle">Failure Postmortems</h3>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Company</th><th>What Happened</th><th>Lesson</th></tr></thead>
                <tbody>
                  <tr><td><strong>Modsy</strong></td><td>Shut down — burned cash on concierge/human designers</td><td>AI-first, not human-first</td></tr>
                  <tr><td><strong>Spacejoy</strong></td><td>Pivoted — couldn't scale human designers</td><td>Automation is non-negotiable</td></tr>
                  <tr><td><strong>Laurel &amp; Wolf</strong></td><td>Closed — marketplace quality issues</td><td>Verify supply side rigorously</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
