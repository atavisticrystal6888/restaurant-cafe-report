import { SectionHeader, Card, Accordion, BarChart } from '../components/UI'

export default function Licensing() {
  return (
    <div>
      <SectionHeader icon="📜" title="Licensing & Regulatory" sub="Every permit, license, and registration you need" />

      <Card warning title="⚠️ Critical: Start Liquor License on Day 1">
        <p>It takes 6-12 months and is the single biggest bottleneck. Everything else is faster.</p>
      </Card>

      <Card title="📋 License Timeline">
        <BarChart data={[
          { label: 'Liquor License', width: '100%', color: 'var(--red)', text: '6-12 months 🔴' },
          { label: 'FSSAI State', width: '25%', color: 'var(--orange)', text: '30-60 days' },
          { label: 'Fire NOC', width: '15%', color: 'var(--orange)', text: '15-30 days' },
          { label: 'Trade License', width: '15%', color: 'var(--green)', text: '15-30 days' },
          { label: 'GST Registration', width: '5%', color: 'var(--green)', text: '3-7 days' },
          { label: 'Shop & Estab.', width: '8%', color: 'var(--green)', text: '7-15 days' },
        ]} />
      </Card>

      <Card title="📑 License Details">
        <Accordion title="1. FSSAI License (Food Safety) — ₹2-5K">
          <p><strong>Type:</strong> State License (₹12L-20Cr turnover) · <strong>Apply:</strong> FoSCoS portal · <strong>Timeline:</strong> 60 days (auto-approval if no response)</p>
          <h3 className="card-subtitle">Documents</h3>
          <ul style={{fontSize:'.88rem',paddingLeft:18}}>
            <li>Identity proof (Aadhaar, PAN)</li>
            <li>Address proof of premises (lease deed)</li>
            <li>Food safety management plan (HACCP)</li>
            <li>Layout plan, Water test report (NABL lab)</li>
            <li>Equipment list, NOC from municipality</li>
            <li>FoSTaC certificate (1 trained supervisor)</li>
          </ul>
        </Accordion>

        <Accordion title="2. Liquor License — ₹5-10L/year (Delhi) ⚠️ CRITICAL">
          <div className="dual-box">
            <div>
              <h3 className="card-subtitle" style={{marginTop:0}}>If in Delhi (L-17)</h3>
              <p style={{fontSize:'.88rem'}}><strong>Cost:</strong> ₹5-10L/year · <strong>Timeline:</strong> 6-12 months</p>
              <ul style={{fontSize:'.88rem',paddingLeft:18}}>
                <li>Commercial property, road {'>'} 30 feet</li>
                <li>Not within 100m of school/hospital/religious place</li>
                <li>Police verification + character certificate</li>
                <li>Fire safety NOC, MCD building plan</li>
              </ul>
            </div>
            <div>
              <h3 className="card-subtitle" style={{marginTop:0}}>If in Noida/UP (FL-3/FL-4)</h3>
              <p style={{fontSize:'.88rem'}}><strong>Cost:</strong> ₹3-7L/year · <strong>Timeline:</strong> 3-6 months (faster)</p>
              <ul style={{fontSize:'.88rem',paddingLeft:18}}>
                <li>UP liberalized excise policy 2023-24</li>
                <li>Different dry days than Delhi</li>
                <li>District Magistrate has discretion</li>
              </ul>
            </div>
          </div>
          <div className="box box-green" style={{marginTop:12}}>
            <strong>Fallback:</strong> Open as Restaurant + Cafe first. Build brand. Add bar when license arrives.
          </div>
        </Accordion>

        <Accordion title="3. Municipal Licenses">
          <div className="table-wrap"><table>
            <thead><tr><th>License</th><th>Cost</th><th>Timeline</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>MCD Health/Trade</td><td>₹5-25K/yr</td><td>15-30 days</td><td>Kitchen inspection</td></tr>
              <tr><td>Fire NOC</td><td>₹10-50K</td><td>15-30 days</td><td>Must get BEFORE opening</td></tr>
              <tr><td>Pollution Control NOC</td><td>₹5-15K</td><td>2-4 weeks</td><td>Exhaust, DG noise</td></tr>
              <tr><td>Signage Permission</td><td>₹5-20K/yr</td><td>2-3 weeks</td><td>Size limits apply</td></tr>
            </tbody>
          </table></div>
        </Accordion>

        <Accordion title="4. Other Registrations">
          <div className="table-wrap"><table>
            <thead><tr><th>Registration</th><th>Cost</th><th>Timeline</th></tr></thead>
            <tbody>
              <tr><td>GST</td><td>Free (CA fees ₹10-30K)</td><td>3-7 days</td></tr>
              <tr><td>Shop & Establishment</td><td>₹500-2,000</td><td>7-15 days</td></tr>
              <tr><td>Music License (PPL/IPRS)</td><td>₹20K-1L/yr</td><td>2-4 weeks</td></tr>
              <tr><td>LLP Registration</td><td>₹10-15K</td><td>10-15 days</td></tr>
              <tr><td>Trademark</td><td>₹4.5-9K</td><td>6-12 months</td></tr>
            </tbody>
          </table></div>
        </Accordion>
      </Card>

      <Card title="🏢 Business Structure — LLP Recommended">
        <div className="table-wrap"><table>
          <thead><tr><th>Structure</th><th>Setup Cost</th><th>Liability</th><th>Tax</th><th>Best For</th></tr></thead>
          <tbody>
            <tr><td>Sole Proprietorship</td><td>₹0-5K</td><td>Unlimited</td><td>Personal slab</td><td>Solo small setup</td></tr>
            <tr><td>Partnership Firm</td><td>₹5-10K</td><td>Unlimited</td><td>30%</td><td>2-3 partners</td></tr>
            <tr style={{background:'var(--green-bg)'}}><td><strong>LLP ⭐</strong></td><td><strong>₹10-15K</strong></td><td><strong>Limited</strong></td><td><strong>30%</strong></td><td><strong>RECOMMENDED</strong></td></tr>
            <tr><td>Pvt Ltd Company</td><td>₹15-25K</td><td>Limited</td><td>25%</td><td>Only if VC/PE funding</td></tr>
          </tbody>
        </table></div>
      </Card>
    </div>
  )
}
