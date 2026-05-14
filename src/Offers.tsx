import React from 'react';
import './Offers.css';

export default function Offers() {
  return (
    <div className="offers-container">
      

{/*  */}
<div className="cover">
  <div className="cover-top">
    <div className="logo-mark">
      <div className="logo-icon"></div>
      <div className="logo-text">AP Growth<br />Systems</div>
    </div>
    <div className="cover-date">Service Offer Document · 2026</div>
  </div>

  <div className="cover-main">
    <div className="cover-eyebrow">Complete Client Acquisition System</div>
    <h1>Build the<br /><em>Revenue Machine</em><br />Your Business Deserves</h1>
    <p className="cover-sub">Paid Ads · AI Lead Generation · Automation · Full-Funnel Systems<br />for Med Spas · Dentists · Construction</p>
  </div>

  <div className="cover-bottom">
    <div className="cover-stat">
      <span className="cover-stat-num">€2,500</span>
      <div className="cover-stat-label">Base Retainer</div>
    </div>
    <div className="cover-stat">
      <span className="cover-stat-num">+10%</span>
      <div className="cover-stat-label">New Revenue Share</div>
    </div>
    <div className="cover-stat">
      <span className="cover-stat-num">25</span>
      <div className="cover-stat-label">Clients to €100K/mo</div>
    </div>
    <div className="cover-stat">
      <span className="cover-stat-num">6</span>
      <div className="cover-stat-label">Person Team</div>
    </div>
    <div className="cover-stat">
      <span className="cover-stat-num">12mo</span>
      <div className="cover-stat-label">To Scale</div>
    </div>
  </div>
</div>

{/*  */}
<div className="section">
  <div className="section-label">
    <span className="section-num">01</span>
    <span className="section-title">Pricing Model</span>
    <div className="section-line"></div>
  </div>

  <div className="pricing-intro">
    <div className="pricing-model">
      <div className="model-name">Option A — Flat Retainer</div>
      <div className="model-price">€2,500 <span>/ month</span></div>
      <div className="model-desc">Fixed monthly fee. Predictable for the client, predictable for you. Best for new clients who need to see results before performance-sharing feels comfortable. Entry point to the relationship.</div>
    </div>
    <div className="pricing-model highlighted">
      <div className="model-name">Option B — Performance Retainer</div>
      <div className="model-price">€2,500 <span>+ 10%</span></div>
      <div className="model-desc">€2,500 base retainer plus 10% of all new revenue generated through tracked channels. Aligns your incentives completely with the client's growth. Higher upside for both parties. This is the model that scales to €100K/month.</div>
    </div>
  </div>
</div>

{/*  */}
<div className="section">
  <div className="section-label">
    <span className="section-num">02</span>
    <span className="section-title">Service Packages</span>
    <div className="section-line"></div>
  </div>

  <div className="packages-grid">

    <div className="package">
      <div className="pkg-badge entry">Entry · Months 1–2</div>
      <div className="pkg-name">Starter<br />Lead Engine</div>
      <div className="pkg-tagline">Your first offer. Simple to deliver, fast to show results. Close at case study rate.</div>
      <div className="pkg-price">
        <div className="pkg-price-main">€2,500</div>
        <div className="pkg-price-period">/ month base</div>
        <div className="pkg-price-perf">+ 10% new revenue</div>
      </div>
      <div className="pkg-divider"></div>
      <div className="pkg-includes">What's included</div>
      <ul className="pkg-features">
        <li>Meta Ads Management (under €5k ad spend)</li>
        <li>Standard landing page (built once)</li>
        <li>CRM setup via GoHighLevel</li>
        <li>AI follow-up automation sequence</li>
        <li>Monthly performance report</li>
      </ul>
      <div className="pkg-setup"><strong>+€1,000–€1,500</strong> one-time setup fee</div>
    </div>

    <div className="package">
      <div className="pkg-badge core">Core · Months 2–4</div>
      <div className="pkg-name">Authority<br />Builder</div>
      <div className="pkg-tagline">Full-price offer once you have your first case study. Closes the skeptical prospect.</div>
      <div className="pkg-price">
        <div className="pkg-price-main">€3,500</div>
        <div className="pkg-price-period">– €4,700 / month</div>
        <div className="pkg-price-perf">+ 10% new revenue</div>
      </div>
      <div className="pkg-divider"></div>
      <div className="pkg-includes">What's included</div>
      <ul className="pkg-features">
        <li>Meta + Google Ads Management</li>
        <li>Advanced conversion landing page</li>
        <li>CRM setup &amp; pipeline management</li>
        <li>Monthly strategy call</li>
        <li>Ad copy testing (20+ variations)</li>
      </ul>
      <div className="pkg-setup"><strong>+€1,500</strong> one-time setup fee</div>
    </div>

    <div className="package">
      <div className="pkg-badge growth">Growth · Months 4–6</div>
      <div className="pkg-name">Growth<br />Engine</div>
      <div className="pkg-tagline">The upsell that takes happy clients from good to exceptional. Full funnel activation.</div>
      <div className="pkg-price">
        <div className="pkg-price-main">€6,500</div>
        <div className="pkg-price-period">– €7,700 / month</div>
        <div className="pkg-price-perf">+ 10% new revenue</div>
      </div>
      <div className="pkg-divider"></div>
      <div className="pkg-includes">What's included</div>
      <ul className="pkg-features">
        <li>Meta + Google Ads (€5k–€15k spend)</li>
        <li>Full sales funnel build</li>
        <li>CRM + pipeline setup</li>
        <li>Email automation sequences</li>
        <li>SMS follow-up automation</li>
        <li>Monthly consulting</li>
      </ul>
      <div className="pkg-setup"><strong>+€2,000</strong> one-time setup fee</div>
    </div>

    <div className="package">
      <div className="pkg-badge ai">AI · Months 6–12</div>
      <div className="pkg-name">AI Lead<br />Engine</div>
      <div className="pkg-tagline">Outbound at scale. AI finds, enriches, and books prospects automatically 24/7.</div>
      <div className="pkg-price">
        <div className="pkg-price-main">€8,500</div>
        <div className="pkg-price-period">/ month</div>
        <div className="pkg-price-perf">+ 10% new revenue</div>
      </div>
      <div className="pkg-divider"></div>
      <div className="pkg-includes">What's included</div>
      <ul className="pkg-features">
        <li>AI lead scraping &amp; prospect identification</li>
        <li>Lead data enrichment system</li>
        <li>AI cold email outreach automation</li>
        <li>AI LinkedIn outreach campaigns</li>
        <li>AI appointment booking system</li>
        <li>Ongoing system management</li>
      </ul>
      <div className="pkg-setup"><strong>+€2,000</strong> setup fee</div>
    </div>

    <div className="package premium">
      <div className="pkg-badge premium-badge">Premium · Month 12+</div>
      <div className="pkg-name">Hybrid Growth System</div>
      <div className="pkg-tagline">The complete infrastructure. Every channel, every automation, every system working together as one machine. Reserved for established businesses ready to scale aggressively.</div>
      <div className="pkg-price">
        <div className="pkg-price-main">€9,000</div>
        <div className="pkg-price-period">/ month + €4,500 build fee</div>
        <div className="pkg-price-perf">+ 10% new revenue generated</div>
      </div>
      <div className="pkg-divider"></div>
      <div className="pkg-includes">Everything included</div>
      <ul className="pkg-features" style={{columns: 2, columnGap: '2rem'}}>
        <li>Meta + Google Ads Management</li>
        <li>Full sales funnel system</li>
        <li>CRM + pipeline automation</li>
        <li>Email + SMS automation</li>
        <li>AI lead scraping system</li>
        <li>AI outreach &amp; cold email</li>
        <li>AI appointment booking</li>
        <li>Bi-weekly consulting calls</li>
      </ul>
    </div>

  </div>
</div>

{/*  */}
<div className="section">
  <div className="section-label">
    <span className="section-num">03</span>
    <span className="section-title">Add-On Services</span>
    <div className="section-line"></div>
  </div>

  <div className="addons-grid">
    <div className="addon">
      <span className="addon-icon">🔍</span>
      <div className="addon-name">AI Competitor Audit</div>
      <div className="addon-price">€1,500 <span className="addon-period">– €2,500</span></div>
      <div className="addon-desc">One-time deep competitor analysis. Positioning gaps, ad angles, funnel weaknesses.</div>
    </div>
    <div className="addon">
      <span className="addon-icon">📄</span>
      <div className="addon-name">Landing Page</div>
      <div className="addon-price">€1,500 <span className="addon-period">– €2,000</span></div>
      <div className="addon-desc">High-converting landing page with AI-written copy and conversion architecture.</div>
    </div>
    <div className="addon">
      <span className="addon-icon">✉️</span>
      <div className="addon-name">Email Automation</div>
      <div className="addon-price">€1,400 <span className="addon-period">/ month</span></div>
      <div className="addon-desc">Full email marketing management. Sequences, campaigns, list management.</div>
    </div>
    <div className="addon">
      <span className="addon-icon">📱</span>
      <div className="addon-name">SMS Automation</div>
      <div className="addon-price">€1,500 <span className="addon-period">setup</span></div>
      <div className="addon-desc">SMS follow-up automation. Speed-to-lead sequences that book appointments instantly.</div>
    </div>
    <div className="addon">
      <span className="addon-icon">🎯</span>
      <div className="addon-name">Extra Ad Creative</div>
      <div className="addon-price">€300 <span className="addon-period">– €500/mo</span></div>
      <div className="addon-desc">Additional monthly ad copy and creative packages. 20–50 new variations.</div>
    </div>
    <div className="addon">
      <span className="addon-icon">🧠</span>
      <div className="addon-name">Strategy Session</div>
      <div className="addon-price">€1,500 <span className="addon-period">one-time</span></div>
      <div className="addon-desc">Deep-dive growth strategy call. Full audit + 90-day roadmap delivered.</div>
    </div>
    <div className="addon">
      <span className="addon-icon">📊</span>
      <div className="addon-name">CRM Full Setup</div>
      <div className="addon-price">€2,000 <span className="addon-period">one-time</span></div>
      <div className="addon-desc">Complete GoHighLevel buildout. Pipelines, automations, integrations, team training.</div>
    </div>
    <div className="addon">
      <span className="addon-icon">📅</span>
      <div className="addon-name">Monthly Consulting</div>
      <div className="addon-price">€2,000 <span className="addon-period">/ month</span></div>
      <div className="addon-desc">Ongoing strategic advisory. Weekly check-ins, optimization reviews, growth planning.</div>
    </div>
  </div>
</div>

{/*  */}
<div className="section">
  <div className="section-label">
    <span className="section-num">04</span>
    <span className="section-title">Performance Revenue Model</span>
    <div className="section-line"></div>
  </div>

  <div className="perf-section">
    <div className="perf-title">What the <em>10% model</em> looks like in practice</div>
    <p className="perf-desc">The performance retainer is designed to align your success with your client's success. Below is a realistic projection of monthly billings across different performance scenarios — for a med spa, dental practice, or contractor client.</p>

    <table className="perf-table">
      <thead>
        <tr>
          <th>Scenario</th>
          <th>New Patients / Leads</th>
          <th>Avg. Revenue / Client</th>
          <th>New Revenue Generated</th>
          <th>Base Fee</th>
          <th>10% Perf. Fee</th>
          <th>Total Billing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span className="tag-pill">Slow Month</span></td>
          <td>10 new patients</td>
          <td>€800</td>
          <td>€8,000</td>
          <td>€2,500</td>
          <td>€800</td>
          <td>€3,300</td>
        </tr>
        <tr className="highlight">
          <td><span className="tag-pill">Normal Month</span></td>
          <td>25 new patients</td>
          <td>€1,000</td>
          <td>€25,000</td>
          <td>€2,500</td>
          <td>€2,500</td>
          <td>€5,000</td>
        </tr>
        <tr>
          <td><span className="tag-pill">Strong Month</span></td>
          <td>40 new patients</td>
          <td>€1,200</td>
          <td>€48,000</td>
          <td>€2,500</td>
          <td>€4,800</td>
          <td>€7,300</td>
        </tr>
        <tr className="highlight">
          <td><span className="tag-pill">Exceptional</span></td>
          <td>50 new patients</td>
          <td>€1,500</td>
          <td>€75,000</td>
          <td>€2,500</td>
          <td>€7,500</td>
          <td>€10,000</td>
        </tr>
        <tr className="total-row">
          <td colSpan="5">25 clients × avg €5,500/month</td>
          <td colSpan="2">→ €137,500/month revenue</td>
        </tr>
      </tbody>
    </table>
  </div>

  {/*  */}
  <div className="tracking-grid">
    <div className="track-card">
      <h3>How We Track New Revenue</h3>
      <p>Performance fees only apply to revenue that can be directly attributed to our campaigns — no guesswork, no disputes.</p>
      <ul className="track-list">
        <li>Dedicated tracking links and landing pages per campaign</li>
        <li>Booking software integration (Jane App, Mindbody, Cliniko)</li>
        <li>CRM lead source tagging from first touch</li>
        <li>Monthly reconciliation report with client sign-off</li>
        <li>"New revenue" defined as first-visit or first-transaction only</li>
      </ul>
    </div>
    <div className="track-card">
      <h3>Client Protections Built In</h3>
      <p>Clients sign with confidence because the structure is transparent and capped where needed.</p>
      <ul className="track-list">
        <li>Optional performance fee cap at 3× base (€7,500 max) for new clients</li>
        <li>30-day written notice to exit — no lock-in after month 3</li>
        <li>Full campaign asset ownership transferred to client</li>
        <li>Weekly spend reports — no surprise ad costs</li>
        <li>Separate billing for base vs. performance — full transparency</li>
      </ul>
    </div>
  </div>
</div>

{/*  */}
<div className="section">
  <div className="section-label">
    <span className="section-num">05</span>
    <span className="section-title">Agency Revenue Roadmap</span>
    <div className="section-line"></div>
  </div>

  <div className="milestones">
    <div className="milestone">
      <div className="ms-month">Month 1–2</div>
      <div className="ms-revenue">€2–5K</div>
      <div className="ms-clients">1–2 clients</div>
      <div className="ms-label">First Revenue</div>
    </div>
    <div className="milestone">
      <div className="ms-month">Month 3–4</div>
      <div className="ms-revenue">€10–16K</div>
      <div className="ms-clients">3–4 clients</div>
      <div className="ms-label">Real Traction</div>
    </div>
    <div className="milestone">
      <div className="ms-month">Month 5–6</div>
      <div className="ms-revenue">€25–35K</div>
      <div className="ms-clients">6–8 clients</div>
      <div className="ms-label">First Hire</div>
    </div>
    <div className="milestone">
      <div className="ms-month">Month 7–9</div>
      <div className="ms-revenue">€50–70K</div>
      <div className="ms-clients">12–15 clients</div>
      <div className="ms-label">Scaling</div>
    </div>
    <div className="milestone">
      <div className="ms-month">Month 10–12</div>
      <div className="ms-revenue">€80–110K</div>
      <div className="ms-clients">20–25 clients</div>
      <div className="ms-label">Target Zone</div>
    </div>
    <div className="milestone">
      <div className="ms-month">Month 18–24</div>
      <div className="ms-revenue">€130–150K</div>
      <div className="ms-clients">25–30 clients</div>
      <div className="ms-label">Empire Mode</div>
    </div>
  </div>
</div>

{/*  */}
<div className="cta-section">
  <div className="cta-eyebrow">Ready to Build?</div>
  <div className="cta-title">Let's build your<br /><em>complete revenue machine</em></div>
  <p className="cta-desc">We don't run ads. We build client acquisition systems that generate leads, book appointments, and drive predictable revenue — automatically.</p>
  <div className="cta-contact">
    <div className="cta-contact-label">Get in touch</div>
    <div className="cta-contact-value">AP Growth Systems</div>
  </div>
</div>

<footer>
  <p>AP Growth Systems · Confidential Service Offer · 2026</p>
  <p>Paid Ads · AI Lead Generation · Automation · Full-Funnel</p>
  <p>Med Spas · Dentists · Construction</p>
</footer>


    </div>
  );
}
