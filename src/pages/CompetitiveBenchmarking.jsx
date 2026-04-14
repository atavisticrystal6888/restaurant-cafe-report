import { SectionHeader, Card, BarChart } from '../components/UI'
import { motion } from 'framer-motion'

export default function CompetitiveBenchmarking() {
  const advantages = [
    { dim: 'Ambience / Theme', width: '95%', text: '★★★★★ vs ★★', color: 'var(--gold)', badge: 'Massive Gap' },
    { dim: 'Instagram-worthiness', width: '95%', text: 'Design-first', color: 'var(--gold)', badge: 'Massive Gap' },
    { dim: 'Outdoor / Views', width: '92%', text: 'Rooftop terrace', color: 'var(--green)', badge: 'Massive Gap' },
    { dim: 'Bar Program', width: '90%', text: 'Craft cocktails', color: 'var(--green)', badge: 'Strong Advantage' },
    { dim: 'All-Day Format', width: '88%', text: 'Breakfast to late night', color: 'var(--blue)', badge: 'Strong Advantage' },
    { dim: 'Food Quality', width: '80%', text: 'Match + hero dishes', color: 'var(--green-light)', badge: 'Parity' },
  ]

  return (
    <div>
      <SectionHeader icon="🏆" title="Competitive Benchmarking" sub="Who's in the ring — and where they fall short" />

      <Card title="🍽️ East Delhi Competitors">
        <div className="table-wrap">
          <table>
            <thead><tr><th>#</th><th>Venue</th><th>Area</th><th>⭐</th><th>₹/2pax</th><th>Strength</th><th>Gap</th></tr></thead>
            <tbody>
              <tr><td>1</td><td><strong>Lord Of The Drinks</strong></td><td>Preet Vihar</td><td>4.4</td><td>₹2,800</td><td>Strong bar</td><td>Not family-friendly, no theme</td></tr>
              <tr><td>2</td><td><strong>The Salt Cafe</strong></td><td>Preet Vihar</td><td>4.6</td><td>₹2,500</td><td>Great food</td><td>No aesthetic, limited outdoor</td></tr>
              <tr><td>3</td><td><strong>Gola Sizzlers</strong></td><td>Preet Vihar</td><td>4.4</td><td>₹2,500</td><td>Legacy brand</td><td>Old-school, no Instagram</td></tr>
              <tr><td>4</td><td><strong>La Afffair</strong></td><td>Preet Vihar</td><td>4.1</td><td>₹2,000</td><td>Decent pricing</td><td>Mediocre ratings</td></tr>
              <tr><td>5</td><td><strong>Dyve</strong></td><td>Vikas Marg</td><td>4.2</td><td>₹1,800</td><td>Unique cuisine</td><td>Small, no bar</td></tr>
              <tr><td>6</td><td><strong>Zodiac (Radisson)</strong></td><td>Vivek Vihar</td><td>4.6</td><td>₹3,400</td><td>Hotel backing</td><td>Sterile hotel feel</td></tr>
              <tr><td>7</td><td><strong>3B's - Country Inn</strong></td><td>Sahibabad</td><td>4.4</td><td>₹4,000</td><td>Premium</td><td>Hotel-attached, expensive</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📊 Your Venue vs Salt Cafe (Best in Area, 4.6★)">
        {advantages.map((a, i) => (
          <div key={i} style={{marginBottom:12}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:4,fontSize:'.85rem'}}>
              <span>{a.dim}</span>
              <span className={`badge ${a.badge.includes('Massive') ? 'badge-green' : a.badge.includes('Strong') ? 'badge-blue' : 'badge-yellow'}`}>{a.badge}</span>
            </div>
            <div className="bar-track">
              <motion.div className="bar-fill" style={{background: a.color}} initial={{width:0}} animate={{width: a.width}} transition={{duration:.7,delay:i*.08}}>
                {a.text}
              </motion.div>
            </div>
          </div>
        ))}
      </Card>

      <Card title="💀 7 Sins of East Delhi Restaurants">
        <div className="grid-2">
          <div style={{fontSize:'.9rem'}}>
            <p><strong>1.</strong> Generic menus — same 100 items everywhere</p>
            <p><strong>2.</strong> Zero ambience investment</p>
            <p><strong>3.</strong> "Cafe" = AC room + chai + momos</p>
            <p><strong>4.</strong> No bar culture</p>
          </div>
          <div style={{fontSize:'.9rem'}}>
            <p><strong>5.</strong> No online/social presence</p>
            <p><strong>6.</strong> Interchangeable venues — no USP</p>
            <p><strong>7.</strong> No outdoor seating or views</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
