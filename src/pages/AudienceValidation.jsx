import { SectionHeader, Card, Accordion, BarChart } from '../components/UI'

export default function AudienceValidation() {
  return (
    <div>
      <SectionHeader icon="🎯" title="Audience Validation" sub="Know thy customer — before you spend a rupee" />

      <Card title="👥 Age Distribution">
        <BarChart data={[
          { label: '15-18 (10%)', width: '10%', color: 'var(--blue)', text: 'Cafe only' },
          { label: '19-22 (35%)', width: '35%', color: 'var(--green)', text: 'College — core' },
          { label: '23-26 (40%)', width: '40%', color: 'var(--gold)', text: 'Young pros — top spend' },
          { label: '27-30 (15%)', width: '15%', color: 'var(--purple)', text: 'Couples, families' },
        ]} />
      </Card>

      <Card title="🎯 Target Segments">
        <div className="table-wrap"><table>
          <thead><tr><th>Segment</th><th>Frequency</th><th>Spend</th><th>What They Want</th><th>How to Reach</th></tr></thead>
          <tbody>
            <tr><td>🎓 College (19-22)</td><td>2-3x/mo</td><td>₹600-900/hd</td><td>Affordable, Instagram-worthy, groups</td><td>Reels, campus posters, deals</td></tr>
            <tr><td>💼 Young Pros (23-26)</td><td>1-2x/mo</td><td>₹1,200-1,800/hd</td><td>Quality cocktails, music, date spot</td><td>LinkedIn, Zomato Gold</td></tr>
            <tr><td>💑 Couples (22-28)</td><td>1-2x/mo</td><td>₹2K-3K/couple</td><td>Intimate, good light, views</td><td>Google ads, influencers</td></tr>
            <tr><td>👨‍👩‍👧 Families (27-30)</td><td>2-3x/mo</td><td>₹1.5-2.5K/table</td><td>Kid-friendly, veg, parking</td><td>Sunday brunch marketing</td></tr>
            <tr><td>🎉 Celebrations</td><td>1x/mo</td><td>₹8-15K/group</td><td>Private area, decor, photos</td><td>Birthday ads, WhatsApp</td></tr>
          </tbody>
        </table></div>
      </Card>

      <Card title="🔬 Pre-Launch Validation Plan">
        <Accordion title="Method 1: Instagram Audience Test — ₹15-25K">
          <p>"Coming Soon" page with renders. ₹500/day ads targeting 18-30 in East Delhi.</p>
          <p><strong>✅ Success:</strong> 2,000+ followers in 30 days, 5%+ engagement</p>
          <p><strong>🔴 Kill:</strong> {'<'}500 followers despite ₹15K spend</p>
        </Accordion>
        <Accordion title="Method 2: Structured Survey — ₹5-10K">
          <p>200-response survey (Google Forms + 50 in-person). Incentive: ₹100 Paytm.</p>
          <p><strong>✅ Success:</strong> 70%+ "would visit", avg WTP ≥ ₹1,500/head</p>
          <p><strong>🔴 Kill:</strong> {'<'}40% positive intent</p>
        </Accordion>
        <Accordion title="Method 3: Pop-Up Event — ₹1-2L">
          <p>1-2 day pop-up at rented terrace. 5-8 dishes + 3-4 cocktails, live DJ.</p>
          <p><strong>✅ Success:</strong> 100+ covers, 80%+ satisfaction</p>
          <p><strong>🔴 Kill:</strong> {'<'}50 covers despite ₹50K marketing</p>
        </Accordion>
        <Accordion title="Method 4: Cloud Kitchen Test — ₹2-4L">
          <p>10-item menu on Zomato/Swiggy from dark kitchen.</p>
          <p><strong>✅ Success:</strong> 15+ orders/day in 30 days, 4.2+ rating, 20%+ repeat</p>
          <p><strong>🔴 Kill:</strong> {'<'}5 orders/day after 30 days</p>
        </Accordion>
        <Accordion title="Method 5: Google Trends — Free">
          <p>Track "best restaurant in East Delhi", "rooftop restaurant near me", "cafe with view in Delhi".</p>
          <p><strong>✅ Success:</strong> Consistent or rising volume</p>
        </Accordion>

        <div className="box box-yellow" style={{marginTop:16,fontSize:'.9rem'}}>
          <strong>Total Budget:</strong> ₹3.5L – ₹6.5L over 2-3 months<br/>
          <strong>Decision:</strong> All 5 pass → 🟢 <strong>Full Steam</strong> | 4/5 → 🟡 Adjust | 3/5 → 🟠 Pause | ≤2 → 🔴 Kill/Pivot
        </div>
      </Card>
    </div>
  )
}
