import { SectionHeader, Card, Tabs } from '../components/UI'

export default function IdeaValidation() {
  return (
    <div>
      <SectionHeader icon="💡" title="Idea Validation" sub="Is this concept worth pursuing?" />

      <Card title="🏢 One Venue — Two Experiences">
        <div className="dual-box">
          <div className="box box-green">
            <h3 className="card-subtitle" style={{marginTop:0}}>🍽️ Restaurant (Ground/Lower)</h3>
            <ul style={{fontSize:'.9rem',paddingLeft:18}}>
              <li>₹1,800–2,000 / 2pax</li>
              <li>Multi-cuisine menu</li>
              <li>Family-friendly, warm & comfortable</li>
              <li>Middle Class target</li>
            </ul>
          </div>
          <div className="box box-purple">
            <h3 className="card-subtitle" style={{marginTop:0}}>🍸 Cafe-Bar (Upper/Rooftop)</h3>
            <ul style={{fontSize:'.9rem',paddingLeft:18}}>
              <li>₹2,500–3,500 / 2pax</li>
              <li>Cocktails + Elevated food</li>
              <li>Date nights, friends hangout</li>
              <li>Upper-Middle / Upper target</li>
            </ul>
          </div>
        </div>
        <p style={{textAlign:'center',marginTop:14,fontWeight:600,color:'var(--green)'}}>⚙️ Shared Kitchen Infrastructure</p>
      </Card>

      <Card title="🎯 Use Case Matrix">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Occasion</th><th>Section</th><th>Experience</th><th>Avg Spend</th></tr></thead>
            <tbody>
              <tr><td>💑 Date night</td><td>Cafe-bar</td><td>Dim lights, cocktails, photo spots, booths</td><td>₹1,500–2,500/couple</td></tr>
              <tr><td>👨‍👩‍👧‍👦 Family outing</td><td>Restaurant</td><td>Familiar food, generous portions, group seating</td><td>₹2,000–3,000/family</td></tr>
              <tr><td>🎂 Birthday / Anniversary</td><td>Both</td><td>Reserved section, party platters, cake</td><td>₹3,000–5,000/group</td></tr>
              <tr><td>👥 Friends hangout</td><td>Both</td><td>Craft mocktails, beer towers, sharing platters</td><td>₹800–1,200/head</td></tr>
              <tr><td>💻 Solo / Work-from-cafe</td><td>Cafe (daytime)</td><td>Wi-Fi, power outlets, calm music</td><td>₹400–600</td></tr>
              <tr><td>🏢 Corporate lunch</td><td>Private dining</td><td>Fixed-price menu, professional ambience</td><td>₹800–1,200/head</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="🍴 Menu Architecture">
        <Tabs tabs={['Restaurant Core', 'Cafe Specials', 'Bar Program', 'Hero Dishes']}>
          <div>
            <p><strong>30-35 items</strong></p>
            <ul style={{fontSize:'.9rem',paddingLeft:18,columns:2}}>
              <li><strong>North Indian (8-10)</strong> — Butter chicken, Dal makhani, Kebabs, Biryani</li>
              <li><strong>Continental (6-8)</strong> — Pastas, Pizzas, Steaks, Risotto</li>
              <li><strong>Asian (5-7)</strong> — Dim sum, Thai curry, Stir-fry, Sushi rolls</li>
              <li><strong>Burgers & Comfort (4-5)</strong> — Signature burgers, Loaded fries</li>
              <li><strong>Kids Menu (5-7)</strong> — Nuggets, Mini pizza, Mac & cheese</li>
            </ul>
          </div>
          <div>
            <p><strong>10-12 items</strong></p>
            <ul style={{fontSize:'.9rem',paddingLeft:18}}>
              <li><strong>All-Day Breakfast</strong> — Eggs benedict, Pancakes, Avocado toast</li>
              <li><strong>Artisanal Coffee</strong> — Pour-over, Cold brew, Espresso drinks</li>
              <li><strong>Baked Goods</strong> — Croissants, Muffins, Cookies</li>
              <li><strong>Smoothie Bowls</strong> — Acai, Mango, Berry</li>
            </ul>
          </div>
          <div>
            <p><strong>20-25 items</strong></p>
            <ul style={{fontSize:'.9rem',paddingLeft:18}}>
              <li><strong>Signature Cocktails (8-12)</strong> — House specials with theatrical presentation</li>
              <li><strong>Classic Cocktails (6-8)</strong> — Old Fashioned, Margarita, Mojito, LIIT</li>
              <li><strong>Craft Beer (4-6 taps)</strong> — Domestic + imported</li>
              <li><strong>Wine (4-6 by glass)</strong> — Red, white, rosé + premium</li>
              <li><strong>Mocktails (8-10)</strong> — Equally compelling for non-drinkers</li>
              <li><strong>Spirits (20+)</strong> — Whiskey, Vodka, Rum, Gin, Tequila</li>
            </ul>
          </div>
          <div>
            <p><strong>Viral Potential Dishes</strong></p>
            <ul style={{fontSize:'.9rem',paddingLeft:18}}>
              <li>🔥 Tableside-flambéed dessert (visual spectacle)</li>
              <li>🍸 Cocktail in unique glassware (lightbulb, skull, flask)</li>
              <li>🍽️ Over-the-top sharing platter (sizzling, smoking, multi-level)</li>
              <li>🍗 Signature butter chicken variant (pot pie? truffle?)</li>
              <li>🍰 Instagrammable dessert (lava cake, terrarium dessert)</li>
            </ul>
          </div>
        </Tabs>
      </Card>

      <Card title="📊 Gap Analysis — East Delhi vs Your Concept">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Dimension</th><th>Current East Delhi Best</th><th>Your Concept</th></tr></thead>
            <tbody>
              <tr><td>Aesthetics</td><td>Generic wallpaper, tube lights</td><td>Themed — fairy lights, living walls</td></tr>
              <tr><td>Bar</td><td>Basic beer + whiskey</td><td>Craft cocktails, draft beer, wine</td></tr>
              <tr><td>Instagram-worthiness</td><td>Zero</td><td>5+ designated photo spots</td></tr>
              <tr><td>All-day format</td><td>Lunch + dinner only</td><td>Breakfast → Late night</td></tr>
              <tr><td>Family-friendly</td><td>Either family OR bar</td><td>Both — separate sections</td></tr>
              <tr><td>Outdoor/Views</td><td>None</td><td>Rooftop terrace + skyline</td></tr>
              <tr><td>Coffee culture</td><td>Chai + Nescafe</td><td>Artisanal pour-over, cold brew</td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
