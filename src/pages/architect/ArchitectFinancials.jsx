import { SectionHeader, Card, StatCard, BarChart, Tabs } from '../../components/UI'

export default function ArchitectFinancials() {
  return (
    <div>
      <SectionHeader icon="💰" title="Financial Projections" sub="3-year revenue model with quarterly breakdowns, unit economics (LTV:CAC 19:1), expense projections, sensitivity analysis & funding strategy" />

      <div className="stats-grid">
        <StatCard value="₹3.06 Cr" label="Year 1 Revenue (~$360K)" color="green" />
        <StatCard value="₹16.4 Cr" label="Year 2 Revenue (~$1.9M)" color="blue" />
        <StatCard value="₹57.7 Cr" label="Year 3 Revenue (~$6.8M)" color="gold" />
        <StatCard value="Month 18-22" label="Monthly Burn Breakeven" color="purple" />
      </div>

      <Card title="📋 Key Assumptions">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Assumption</th><th>Value</th><th>Basis</th></tr></thead>
            <tbody>
              <tr><td>Freemium conversion rate</td><td>3-5% (Y1), 5-8% (Y2-3)</td><td>Industry avg SaaS/productivity: 2-5% (HBR)</td></tr>
              <tr><td>Consumer ARPU</td><td>₹800/mo Y1 → ₹1,200/mo Y3</td><td>Blended across Home + Pro plans</td></tr>
              <tr><td>Architect ARPU</td><td>₹2,500/mo ($30)</td><td>Blended Basic + Premium tiers</td></tr>
              <tr><td>Consultation commission</td><td>15% take rate</td><td>Marketplace standard (Houzz: 15-25%)</td></tr>
              <tr><td>Avg consultation value</td><td>₹3,000 ($36)</td><td>Quick consultation; full projects higher</td></tr>
              <tr><td>Affiliate commission</td><td>5-8% on product purchases</td><td>Standard furniture/decor affiliate rate</td></tr>
              <tr><td>Monthly churn (consumer)</td><td>8-10%</td><td>Typical for freemium lifestyle apps</td></tr>
              <tr><td>Monthly churn (professional)</td><td>3-5%</td><td>Lower — tied to business income</td></tr>
              <tr><td>CAC (consumer)</td><td>₹150-300 ($2-4)</td><td>India digital ad benchmarks, home/lifestyle</td></tr>
              <tr><td>CAC (professional)</td><td>₹2,000-5,000 ($24-60)</td><td>B2B sales + onboarding cost</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="📊 Revenue Growth — 3-Year Trajectory">
        <BarChart data={[
          { label: 'Year 1', width: '5%', text: '₹3.06 Cr ($360K)', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Year 2', width: '28%', text: '₹16.4 Cr ($1.9M) — 5.4x', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Year 3', width: '100%', text: '₹57.7 Cr ($6.8M) — 3.5x', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
        ]} />
        <Tabs tabs={['Year 1 Quarterly', 'Year 2', 'Year 3']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>Year Total</th></tr></thead>
                <tbody>
                  <tr><td><strong>Total users (cumulative)</strong></td><td>5K</td><td>25K</td><td>75K</td><td>150K</td><td>150K</td></tr>
                  <tr><td><strong>MAU</strong></td><td>3K</td><td>15K</td><td>45K</td><td>90K</td><td>—</td></tr>
                  <tr><td><strong>Paying consumers</strong></td><td>90</td><td>525</td><td>1,800</td><td>4,500</td><td>—</td></tr>
                  <tr><td><strong>Paying architects</strong></td><td>20</td><td>80</td><td>200</td><td>500</td><td>—</td></tr>
                  <tr><td>Consumer subscriptions</td><td>₹2.2L</td><td>₹12.6L</td><td>₹43.2L</td><td>₹1.08Cr</td><td><strong>₹1.66 Cr</strong></td></tr>
                  <tr><td>Architect subscriptions</td><td>₹1.5L</td><td>₹6L</td><td>₹15L</td><td>₹37.5L</td><td><strong>₹60L</strong></td></tr>
                  <tr><td>Consultation commissions</td><td>₹0.5L</td><td>₹4L</td><td>₹15L</td><td>₹40L</td><td><strong>₹59.5L</strong></td></tr>
                  <tr><td>Affiliate revenue</td><td>₹0</td><td>₹1L</td><td>₹5L</td><td>₹15L</td><td><strong>₹21L</strong></td></tr>
                  <tr style={{ background: 'var(--green-bg)', fontWeight: 600 }}><td><strong>Total Revenue</strong></td><td>₹4.2L</td><td>₹23.6L</td><td>₹78.2L</td><td>₹2Cr</td><td><strong>₹3.06 Cr</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Value</th><th>Growth Assumption</th></tr></thead>
                <tbody>
                  <tr><td><strong>Total users</strong></td><td>600K</td><td>4x YoY (word-of-mouth + marketing)</td></tr>
                  <tr><td><strong>MAU</strong></td><td>350K</td><td>58% monthly active ratio</td></tr>
                  <tr><td><strong>Paying consumers</strong></td><td>21,000</td><td>6% conversion rate</td></tr>
                  <tr><td><strong>Paying architects</strong></td><td>2,000</td><td>Geographic expansion</td></tr>
                  <tr><td>Consumer subscription revenue</td><td>₹8.4 Cr</td><td>Higher ARPU ₹1,000/mo blended</td></tr>
                  <tr><td>Architect subscription revenue</td><td>₹3 Cr</td><td></td></tr>
                  <tr><td>Consultation commissions</td><td>₹3.5 Cr</td><td>~8,000 consultations/month avg</td></tr>
                  <tr><td>Affiliate revenue</td><td>₹1.5 Cr</td><td>Shopping lists at scale</td></tr>
                  <tr style={{ background: 'var(--green-bg)', fontWeight: 600 }}><td><strong>Total Year 2 Revenue</strong></td><td colSpan={2}><strong>₹16.4 Cr (~$1.9M)</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Value</th><th>Growth Assumption</th></tr></thead>
                <tbody>
                  <tr><td><strong>Total users</strong></td><td>2M</td><td>Mobile apps launched; Tier 2 cities</td></tr>
                  <tr><td><strong>MAU</strong></td><td>1.1M</td><td></td></tr>
                  <tr><td><strong>Paying consumers</strong></td><td>77,000</td><td>7% conversion rate</td></tr>
                  <tr><td><strong>Paying architects</strong></td><td>6,000</td><td></td></tr>
                  <tr><td>Consumer subscription rev</td><td>₹27.7 Cr</td><td>ARPU ₹1,200/mo</td></tr>
                  <tr><td>Architect subscription rev</td><td>₹9 Cr</td><td></td></tr>
                  <tr><td>Consultation commissions</td><td>₹12 Cr</td><td></td></tr>
                  <tr><td>Affiliate revenue</td><td>₹6 Cr</td><td></td></tr>
                  <tr><td>Enterprise/B2B</td><td>₹3 Cr</td><td>Real estate developer deals</td></tr>
                  <tr style={{ background: 'var(--green-bg)', fontWeight: 600 }}><td><strong>Total Year 3 Revenue</strong></td><td colSpan={2}><strong>₹57.7 Cr (~$6.8M)</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="📊 Revenue Mix Evolution">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Stream</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
            <tbody>
              <tr><td><strong>Subscriptions</strong></td><td>74%</td><td>70%</td><td>64%</td></tr>
              <tr><td><strong>Commissions</strong></td><td>19%</td><td>21%</td><td>21%</td></tr>
              <tr><td><strong>Affiliate</strong></td><td>7%</td><td>9%</td><td>10%</td></tr>
              <tr><td><strong>Enterprise</strong></td><td>0%</td><td>0%</td><td>5%</td></tr>
            </tbody>
          </table>
        </div>
        <BarChart data={[
          { label: 'Subscriptions', width: '74%', text: 'Y1: 74% → Y3: 64%', color: 'linear-gradient(90deg, #1a7a4e, #52b788)' },
          { label: 'Marketplace', width: '46%', text: 'Y1: 19% → Y3: 21%', color: 'linear-gradient(90deg, #1a5276, #5dade2)' },
          { label: 'Commerce', width: '35%', text: 'Y1: 7% → Y3: 10%', color: 'linear-gradient(90deg, #8b6914, #d4a96a)' },
          { label: 'Enterprise', width: '20%', text: 'Y1: 0% → Y3: 5%', color: 'linear-gradient(90deg, #5b2c6f, #af7ac5)' },
        ]} />
      </Card>

      <Card title="🎯 Unit Economics">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Metric</th><th>Year 1</th><th>Year 3</th><th>Target</th></tr></thead>
            <tbody>
              <tr><td><strong>Consumer LTV</strong></td><td>₹4,800 (6 mo × ₹800)</td><td>₹10,800 (9 mo × ₹1,200)</td><td>&gt;₹15,000</td></tr>
              <tr><td><strong>Consumer CAC</strong></td><td>₹250</td><td>₹400 (more competition)</td><td>&lt;₹1,000</td></tr>
              <tr><td><strong>LTV:CAC (Consumer)</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>19:1</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>27:1</td><td>&gt;3:1 is healthy</td></tr>
              <tr><td><strong>Architect LTV</strong></td><td>₹30,000 (12 mo × ₹2,500)</td><td>₹60,000 (24 mo × ₹2,500)</td><td>&gt;₹50,000</td></tr>
              <tr><td><strong>Architect CAC</strong></td><td>₹3,000</td><td>₹4,000</td><td>&lt;₹15,000</td></tr>
              <tr><td><strong>LTV:CAC (Architect)</strong></td><td style={{ color: 'var(--green)', fontWeight: 700 }}>10:1</td><td style={{ color: 'var(--green)', fontWeight: 700 }}>15:1</td><td>&gt;3:1 is healthy</td></tr>
              <tr><td><strong>Blended gross margin</strong></td><td>65-70%</td><td>72-78%</td><td>&gt;70%</td></tr>
              <tr><td><strong>Payback period (consumer)</strong></td><td>&lt;1 month</td><td>&lt;1 month</td><td>&lt;6 months</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💸 Expense Projections">
        <Tabs tabs={['Year 1 Expenses', 'Year 2 & 3 EBITDA']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Category</th><th>Annual Cost</th><th>% of Total</th></tr></thead>
                <tbody>
                  <tr><td><strong>Engineering team (6-8 people)</strong></td><td>₹1.5-2.2 Cr</td><td>55-60%</td></tr>
                  <tr><td>Cloud &amp; infrastructure</td><td>₹12-24L</td><td>5-8%</td></tr>
                  <tr><td>AI compute (GPU)</td><td>₹12-24L</td><td>5-8%</td></tr>
                  <tr><td>Marketing &amp; user acquisition</td><td>₹36-60L</td><td>15-20%</td></tr>
                  <tr><td>Operations &amp; support</td><td>₹12-24L</td><td>5-8%</td></tr>
                  <tr><td>Legal, office, misc</td><td>₹12-18L</td><td>4-6%</td></tr>
                  <tr style={{ background: 'var(--green-bg)', fontWeight: 600 }}><td><strong>Total Year 1 Expenses</strong></td><td><strong>₹3.3-4.7 Cr</strong></td><td></td></tr>
                  <tr><td><strong>Net Burn</strong></td><td colSpan={2}>₹0.3-1.6 Cr (Revenue offsets ~50-90% of costs)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Category</th><th>Year 2</th><th>Year 3</th></tr></thead>
                <tbody>
                  <tr><td><strong>Total Revenue</strong></td><td>₹16.4 Cr</td><td>₹57.7 Cr</td></tr>
                  <tr><td><strong>Total Expenses</strong></td><td>₹12-15 Cr</td><td>₹35-42 Cr</td></tr>
                  <tr style={{ color: 'var(--green)', fontWeight: 700 }}><td><strong>EBITDA</strong></td><td>₹1.4-4.4 Cr</td><td>₹15.7-22.7 Cr</td></tr>
                  <tr style={{ color: 'var(--green)', fontWeight: 700 }}><td><strong>EBITDA Margin</strong></td><td>9-27%</td><td>27-39%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
      </Card>

      <Card title="⏱️ Path to Profitability">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Milestone</th><th>When</th><th>What</th></tr></thead>
            <tbody>
              <tr><td><strong>Monthly burn breakeven</strong></td><td>Month 18-22</td><td>Revenue covers monthly ops (~₹40-50L/mo)</td></tr>
              <tr><td><strong>EBITDA positive</strong></td><td>Year 3, Q2</td><td>After hitting ~₹45 Cr ARR</td></tr>
              <tr><td><strong>Cash flow positive</strong></td><td>Year 3, Q4</td><td>After repaying initial investment</td></tr>
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="💵 Funding Strategy">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Round</th><th>Amount</th><th>Timing</th><th>Use of Funds</th></tr></thead>
            <tbody>
              <tr><td><strong>Bootstrapped / Angel</strong></td><td>₹50L–1 Cr</td><td>Month 0</td><td>PoC + MVP development</td></tr>
              <tr><td><strong>Seed</strong></td><td>₹3-5 Cr ($350K-600K)</td><td>Month 4-6 (post-MVP)</td><td>Team expansion, marketing, mobile apps</td></tr>
              <tr><td><strong>Series A</strong></td><td>₹25-40 Cr ($3-5M)</td><td>Month 15-18 (₹10Cr+ ARR)</td><td>Scale India, AR features, AI investment</td></tr>
              <tr><td><strong>Series B</strong></td><td>₹100-150 Cr ($12-18M)</td><td>Month 30-36</td><td>International expansion, enterprise</td></tr>
            </tbody>
          </table>
        </div>
        <h3 className="card-subtitle">Comparable Raises</h3>
        <div className="grid-2">
          <div className="box box-blue" style={{ borderRadius: 12 }}>
            <strong>Livspace:</strong> $4.6M seed (2014) → $15M Series B (2016) → $70M Series C (2018) → $180M KKR-led (2022, unicorn at $1.2B)
          </div>
          <div className="box box-green" style={{ borderRadius: 12 }}>
            <strong>Houzz:</strong> $2M seed (2010) → $35M Series B (2013) → $150M Series D (2014, $2.3B valuation)
          </div>
        </div>
        <p style={{ marginTop: 8, fontSize: '.88rem', color: 'var(--text-light)' }}>
          Our trajectory is <strong>more capital-efficient</strong> due to AI-first approach vs. Livspace's managed-services model (heavy opex in labor).
        </p>
      </Card>

      <Card title="📈 Sensitivity Analysis">
        <Tabs tabs={['Optimistic (1.5×)', 'Base Case', 'Pessimistic (0.6×)']}>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
                <tbody>
                  <tr><td><strong>Users</strong></td><td>225K</td><td>900K</td><td>3M</td></tr>
                  <tr><td><strong>Revenue</strong></td><td>₹4.6 Cr</td><td>₹24.6 Cr</td><td>₹86.5 Cr</td></tr>
                  <tr><td><strong>EBITDA</strong></td><td>Negative</td><td>₹5-8 Cr</td><td>₹30-38 Cr</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
                <tbody>
                  <tr><td><strong>Users</strong></td><td>150K</td><td>600K</td><td>2M</td></tr>
                  <tr><td><strong>Revenue</strong></td><td>₹3.06 Cr</td><td>₹16.4 Cr</td><td>₹57.7 Cr</td></tr>
                  <tr><td><strong>EBITDA</strong></td><td>Negative</td><td>₹1.4-4.4 Cr</td><td>₹15.7-22.7 Cr</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="table-wrap">
              <table>
                <thead><tr><th>Metric</th><th>Year 1</th><th>Year 2</th><th>Year 3</th></tr></thead>
                <tbody>
                  <tr><td><strong>Users</strong></td><td>90K</td><td>360K</td><td>1.2M</td></tr>
                  <tr><td><strong>Revenue</strong></td><td>₹1.8 Cr</td><td>₹9.8 Cr</td><td>₹34.6 Cr</td></tr>
                  <tr><td><strong>EBITDA</strong></td><td>Negative</td><td>Breakeven</td><td>₹5-10 Cr</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </Tabs>
        <div className="box box-green" style={{ borderRadius: 12, marginTop: 12 }}>
          <strong>Key Takeaway:</strong> Even in the pessimistic scenario (0.6× growth), the business reaches profitability in Year 3 — validating the model's fundamentals.
        </div>
      </Card>

      <Card title="📊 Key Financial Metrics to Track Monthly">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Metric</th><th>Description</th><th>Target</th></tr></thead>
            <tbody>
              <tr><td><strong>MRR</strong></td><td>Monthly Recurring Revenue</td><td>Month 12: ₹19L+</td></tr>
              <tr><td><strong>ARR</strong></td><td>Annual Recurring Revenue (MRR × 12)</td><td>Year 1 end: ₹2.3 Cr</td></tr>
              <tr><td><strong>Net Revenue Retention</strong></td><td>Revenue from existing cohorts after churn</td><td>&gt;100%</td></tr>
              <tr><td><strong>CAC Payback Period</strong></td><td>Months to recover acquisition cost</td><td>&lt;2 months</td></tr>
              <tr><td><strong>Gross Margin</strong></td><td>Revenue minus direct costs</td><td>&gt;65%</td></tr>
              <tr><td><strong>Burn Multiple</strong></td><td>Net burn / net new ARR</td><td>&lt;2×</td></tr>
              <tr><td><strong>Rule of 40</strong></td><td>Revenue growth % + profit margin %</td><td>&gt;40 by Year 2</td></tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
