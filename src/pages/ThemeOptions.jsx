import { SectionHeader, Card, ScoreDots } from '../components/UI'

const themes = [
  { name: '🌿 G1 — Botanical Garden + Rooftop', score: 8.8, rec: true, desc: 'Forest green, warm cream, terracotta, brushed brass. Reclaimed wood, exposed brick, rattan, greenery.', cost: '₹10-20L premium', scores: { Instagram: 9, Cost: 7, Longevity: 9, 'Menu Fit': 10, Differentiation: 9 } },
  { name: '🏙️ G5 — Skyline Terrace / Bistro', score: 7.6, desc: 'White, sky blue, warm wood, soft blush, gold. Light wood, glass, linen, wicker.', cost: '₹8-15L + ₹5-10L weather', scores: { Instagram: 8, Cost: 6, Longevity: 8, 'Menu Fit': 9, Differentiation: 7 } },
  { name: '🪔 G3 — Neo-Indian / Modern Haveli', score: 6.9, desc: 'Jaali screens, arched doorways, teal + terracotta + gold. Most unique but expensive.', cost: '₹15-30L premium', scores: { Instagram: 8, Cost: 4, Longevity: 7, 'Menu Fit': 7, Differentiation: 8 } },
  { name: '📚 G4 — Library / Secret Society', score: 6.8, desc: 'Bookshelves, hidden bar, velvet + dark wood. Viral potential but niche.', cost: '₹12-22L premium', scores: { Instagram: 9, Cost: 5, Longevity: 6, 'Menu Fit': 6, Differentiation: 8 } },
  { name: '🏗️ G2 — Industrial Loft', score: 6.4, desc: 'Edison bulbs, raw concrete, metal. Cheapest option but oversaturated.', cost: '₹5-10L premium', scores: { Instagram: 6, Cost: 9, Longevity: 6, 'Menu Fit': 8, Differentiation: 4 } },
]

export default function ThemeOptions() {
  return (
    <div>
      <SectionHeader icon="🎨" title="Theme Options" sub="Five concepts — one winner" />

      <div className="grid-2" style={{marginBottom:20}}>
        {themes.slice(0, 2).map(t => (
          <div key={t.name} className={`theme-card ${t.rec ? 'recommended' : ''}`}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div className="theme-name">{t.name}</div>
              <div className="theme-score-big">{t.score}</div>
            </div>
            {t.rec && <span className="badge badge-green" style={{marginTop:4,display:'inline-block'}}>⭐ RECOMMENDED</span>}
            <p style={{fontSize:'.87rem',marginTop:8,color:'var(--text-light)'}}>{t.desc}</p>
            <p style={{fontSize:'.82rem',color:'var(--gold)',fontWeight:600}}>{t.cost}</p>
            {Object.entries(t.scores).map(([k, v]) => (
              <ScoreDots key={k} label={k} filled={Math.round(v / 2)} total={5} suffix={`${v}/10`} />
            ))}
          </div>
        ))}
      </div>

      <div className="grid-3" style={{marginBottom:20}}>
        {themes.slice(2).map(t => (
          <div key={t.name} className="theme-card">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div className="theme-name" style={{fontSize:'.95rem'}}>{t.name}</div>
              <div className="theme-score-big" style={{fontSize:'1.3rem'}}>{t.score}</div>
            </div>
            <p style={{fontSize:'.83rem',marginTop:6,color:'var(--text-light)'}}>{t.desc}</p>
            <p style={{fontSize:'.8rem',color:'var(--gold)',fontWeight:600}}>{t.cost}</p>
          </div>
        ))}
      </div>

      <Card highlight title="🏆 Final Recommendation — G1 + G5 Hybrid">
        <div className="grid-3">
          <div><strong>Ground Floor:</strong> Lush botanical restaurant dining</div>
          <div><strong>First Floor:</strong> Conservatory-style cafe-bar + lounge</div>
          <div><strong>Rooftop:</strong> Open-air terrace with fairy lights + plants</div>
        </div>
        <p style={{marginTop:12,fontSize:'.9rem'}}><strong>Budget:</strong> ₹15-25L theme premium on ₹30-60L base build</p>
        <p style={{fontSize:'.88rem',color:'var(--text-light)'}}>Name direction: "Canopy", "Terrace & Thyme", "The Greenhouse", "Verdure"</p>
      </Card>
    </div>
  )
}
