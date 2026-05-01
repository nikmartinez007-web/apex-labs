import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Mountain,
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  CheckCircle2,
  Lock,
  Eye
} from 'lucide-react';

function CaseStudyCard({ number, title, description, metrics }: {
  number: string,
  title: string,
  description: string,
  metrics: { value: string, label: string, isPrimary?: boolean }[]
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group h-[450px] md:h-[400px] w-full [perspective:2000px] relative cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >

      <motion.div
        className="w-full h-full"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="relative w-full h-full preserve-3d"
          style={{
            willChange: 'transform',
            transformStyle: 'preserve-3d'
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            mass: 1
          }}
        >
          {/* Front Face (Hidden State) */}
          <div
            className="absolute inset-0 backface-hidden bg-[#0B1D2A] border border-white/10 p-6 md:p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl"
            style={{ transform: 'translateZ(1px)' }}
          >

            {/* Shine effect on front */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className={`absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform transition-transform duration-1000 ease-in-out ${isFlipped ? 'translate-x-[400%]' : '-translate-x-full'}`}></div>
            </div>


            <div className="font-bold text-xs text-[#C8A96A] mb-8 uppercase tracking-[0.3em] opacity-80">{number}</div>

            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#C8A96A] blur-[40px] opacity-20 animate-pulse"></div>
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#112C41] to-[#0B1D2A] border border-white/5 flex items-center justify-center relative z-10">
                <Lock size={32} className="text-[#C8A96A]/80" />
              </div>
            </div>

            <h3 className="font-semibold text-lg md:text-xl text-[#FFFFFF] mb-2">Internal Performance Data</h3>
            <p className="font-medium text-[10px] md:text-xs text-[#A3B1C6] uppercase tracking-widest flex items-center gap-2 opacity-60">
              <Eye size={12} className="md:w-[14px] md:h-[14px]" /> Hover to unlock access
            </p>


            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-20">
              <div className="h-16 w-1 bg-gradient-to-t from-[#C8A96A] to-transparent rounded-full"></div>
              <div className="h-10 w-1 bg-gradient-to-t from-[#C8A96A] to-transparent rounded-full"></div>
              <div className="h-20 w-1 bg-gradient-to-t from-[#C8A96A] to-transparent rounded-full"></div>
              <div className="h-12 w-1 bg-gradient-to-t from-[#C8A96A] to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Back Face (Actual Content) */}
          <div
            className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#081521] to-[#0B1D2A] border border-[#C8A96A]/30 p-6 md:p-10 rounded-[2.5rem] flex flex-col justify-center overflow-hidden shadow-[0_0_50px_rgba(122,28,36,0.2)]"
            style={{ transform: 'rotateY(180deg) translateZ(1px)' }}
          >


            {/* Shine effect on back */}
            <div className="pointer-events-none absolute inset-0 opacity-100">
              <div className={`absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -skew-x-12 transform transition-transform duration-1000 ease-in-out ${isFlipped ? 'translate-x-[400%]' : '-translate-x-full'}`}></div>
            </div>


            <div className="font-bold text-[10px] md:text-xs text-[#C8A96A] mb-2 md:mb-4 uppercase tracking-[0.3em]">{number}</div>
            <h3 className="font-bold text-2xl md:text-3xl mb-2 md:mb-4 text-white leading-tight">{title}</h3>
            <p className="font-normal text-[#A3B1C6] mb-6 md:mb-10 leading-relaxed text-base md:text-lg">{description}</p>


            <div className="flex flex-wrap items-center gap-4 mt-auto">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className={`${m.isPrimary ? 'bg-[#C8A96A]/20 border border-[#C8A96A]/30' : 'bg-white/5 border border-white/5'} px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl flex flex-col gap-0.5 md:gap-1`}
                >
                  <span className={`font-bold ${m.isPrimary ? 'text-xl md:text-2xl text-[#FFFFFF]' : 'text-lg md:text-xl text-[#FFFFFF]'}`}>{m.value}</span>
                  <span className="text-[8px] md:text-[10px] uppercase tracking-[0.15em] text-[#C8A96A] font-semibold">{m.label}</span>
                </div>

              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function BookingSection() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window as any, "https://app.cal.eu/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    if (Cal) {
      Cal("init", "15min", { origin: "https://app.cal.eu" });

      Cal.ns["15min"]("inline", {
        elementOrSelector: "#my-cal-inline-15min",
        config: {
          "layout": "month_view",
          "useSlotsViewOnSmallScreen": "true",
          "theme": "dark",
          "hideEventTypeDetails": "true"
        },
        calLink: "apex-labs-3oae39/15min",
      });

      Cal.ns["15min"]("ui", {
        "theme": "dark",
        "hideEventTypeDetails": true,
        "layout": "month_view",
        "styles": {
          "branding": {
            "hideBranding": true
          }
        }
      });
    }
  }, []);


  return (
    <section id="book" className="py-24 px-6 bg-[#060F17]/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C8A96A] opacity-10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="font-bold text-xs text-[#C8A96A] mb-4 uppercase tracking-[0.3em]">Next Steps</div>
          <h2 className="font-bold text-4xl md:text-6xl mb-6">
            Book your <span className="text-[#C8A96A]">Strategy Call</span>
          </h2>
          <p className="font-normal text-lg text-[#A3B1C6] max-w-2xl mx-auto leading-relaxed">
            Choose a time that works for you to discuss your growth goals with our engineering team and explore how Apex Labs can scale your revenue.
          </p>
        </div>

        <div className="bg-[#0B1D2A] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[900px] md:min-h-[700px] md:h-[750px] relative group transition-all duration-500 hover:border-[#C8A96A]/30">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(122,28,36,0.1),transparent)]"></div>
          </div>
          <div id="my-cal-inline-15min" className="w-full h-full relative z-10 min-h-[900px] md:min-h-0"></div>
        </div>
      </div>
    </section>
  );
}


function PrivacyPolicyModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#0B1D2A] border border-white/10 w-full max-w-3xl rounded-3xl p-6 md:p-10 max-h-[85vh] overflow-y-auto shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-[#A3B1C6] hover:text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">Privacy Policy</h2>
        <div className="space-y-4 text-sm text-[#A3B1C6] leading-relaxed">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
          <p>This Privacy Policy explains how Apex Labs (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and discloses your information when you visit our website or use our services.</p>
          <h3 className="text-white font-medium text-base mt-6 mb-2">1. Information We Collect</h3>
          <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, or when you contact us. This includes your name, email address, company details, ad spend figures, and other information related to your application.</p>
          <h3 className="text-white font-medium text-base mt-6 mb-2">2. How We Use Your Information</h3>
          <p>We use personal information collected via our website for a variety of business purposes, including evaluating your application, communicating with you, and optimizing our marketing campaigns.</p>
          <h3 className="text-white font-medium text-base mt-6 mb-2">3. Cookies and Tracking Technologies</h3>
          <p>We may use cookies and similar tracking technologies to access or store information. You can manage your cookie preferences through the banner provided on our website.</p>
          <h3 className="text-white font-medium text-base mt-6 mb-2">4. Sharing Your Information</h3>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We securely pass application data to our CRM for processing.</p>
          <h3 className="text-white font-medium text-base mt-6 mb-2">5. Contact Us</h3>
          <p>If you have questions or comments about this notice, you may email us at privacy@apex-labs.com.</p>
        </div>
      </div>
    </div>
  );
}

function CookieConsent({ isVisible, onAccept, onDecline, openPrivacyPolicy }: { isVisible: boolean, onAccept: () => void, onDecline: () => void, openPrivacyPolicy: () => void }) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 md:p-6 bg-[#0B1D2A] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-[#A3B1C6] max-w-3xl">
          <strong className="text-[#FFFFFF] block mb-1">We value your privacy</strong>
          We use strictly necessary cookies to make our site work. We and our partners also use cookies and similar technologies to understand how our site is used, personalize content, and deliver targeted advertising. By clicking &quot;Accept All&quot;, you consent to our use of these cookies. Please review our <button type="button" onClick={openPrivacyPolicy} className="underline hover:text-[#FFFFFF]">Privacy Policy</button> to learn more about how we process your information.
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button onClick={onDecline} className="font-medium text-sm text-[#A3B1C6] hover:text-[#FFFFFF] px-4 py-2 transition-colors">
            Decline
          </button>
          <button onClick={onAccept} className="font-medium text-sm bg-[#C8A96A] text-[#0B1D2A] hover:bg-[#B5985F] px-6 py-2.5 rounded-full transition-colors border border-[#C8A96A]">
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}

const ARTICLES = [
  {
    slug: 'paid-ads-scaling',
    title: 'Scaling Paid Ads Without Losing Profitability',
    excerpt: 'Discover why most brands leak revenue on Meta and Google, and how our engineered growth systems cap CAC while scaling volume.',
    content: `When brands try to scale paid ads quickly, they often run into a brick wall: Customer Acquisition Cost (CAC) skyrockets, and profitability vanishes. It is the most common story in digital marketing. You find a winning creative, incrementally increase the daily budget, and initially, things look great. But aggressively pushing budget forces the algorithm to reach further outside your core audience, bringing in lower-intent traffic at a higher cost.

To prevent this, our approach treats paid ads not as an isolated tactic, but as the fuel for a broader engine. We structure campaigns around revenue-focused goals, rigorously test creative angles, and implement strong feedback loops with your CRM. By tracking the true lifetime value (LTV) of acquired customers, we ensure that every dollar spent is buying actual profit, not just vanity metrics like clicks, impressions, or cheap leads that never close.

THE DISCONNECT BETWEEN TRAFFIC AND SALES
One of the primary reasons scaling fails is the disconnect between the media buyer and the sales floor (or checkout). Media buyers often optimize for cost-per-lead (CPL) or cost-per-click (CPC). However, the cheapest leads are rarely the best. If an ad generates 100 leads at $10 each, but only 1 converts to a $1,000 product, your actual Customer Acquisition Cost is $1,000. Alternatively, an ad that generates leads at $50 each but closes at 20% gives you a $250 CAC. Scaling requires a shift from optimizing for cheap metrics to optimizing for pipeline revenue and closed-won deals.

COMBATING CREATIVE EXHAUSTION
As you increase spend, ad fatigue sets in exponentially faster. A single video that performed well at $100/day will quickly burn out at $1,000/day. This requires a robust creative testing framework. Rather than guessing what works, you need to systematically test hooks (the first 3 seconds), body messaging, and calls to action independently. When you find a winning variable, you iterate on it. This constant churn of modular creative assets ensures the algorithm always has fresh material to show your audience.

RETHINKING ACCOUNT STRUCTURE
In the past, marketers used highly granular account structures with hundreds of ad sets. Today, machine learning platforms like Meta's Advantage+ or Google's Performance Max thrive on data liquidity. Constraining these algorithms with narrow targeting forces them to work harder, increasing your CPMs. We focus on account consolidation—feeding all your budget into fewer, larger datasets while letting the creative itself act as the targeting mechanism. If your video speaks directly to CFOs, only CFOs will stop scrolling to watch it.

THE SHIFT TO BLENDED ROAS (MER)
Finally, in an era of iOS updates and cookie-blocking browsers, in-platform attribution is inherently broken. Trying to obsess over a Facebook Manager ROAS column will lead to bad decision-making. Scaling successfully is entirely about data architecture: viewing your Marketing Efficiency Ratio (MER)—total revenue divided by total ad spend—across all platforms combined. Knowing your true cash multiplication cycle is the only way to scale with confidence. Without this holistic financial view, you aren't investing; you're gambling.`
  },
  {
    slug: 'crm-automations',
    title: 'Why Automations are the Secret to High Close Rates',
    excerpt: 'Stop letting leads fall through the cracks. Learn how perfectly timed email and SMS flows can double your conversion rates overnight.',
    content: `Most businesses spend thousands of dollars generating high-intent leads, only to let them silently drop out of the pipeline. A strong CRM paired with strategic email and SMS automations is the single biggest "quick win" for any growing brand. Relying on sheer human effort for follow-ups is a massive bottleneck.

We build welcome flows, abandoned cart sequences, and behavioral trigger emails that feel personal rather than robotic. When leads receive the right message at exactly the right time, trust builds instantly. Stop relying on manual follow-ups—let your infrastructure automatically nurture and convert for you 24/7. Effective automation doesn't mean spamming your list. It means providing high-value resources, handling objections proactively, and gracefully reminding your prospects exactly why they signed up in the first place.

THE ANATOMY OF A WELCOME SERIES
The moment a prospect subscribes to your list or submits a lead form is the precise moment their intent is highest. Most brands send a generic "Thanks for subscribing!" email with a 10% discount code. We structure welcome series to systematically dismantle objections and build authority. Email one delivers the promised value. Email two tells the founder's story or the brand's unique mechanism. Email three highlights a powerful case study. This 3-to-5 sequence turns a cold lead into a warm prospect who understands exactly why you are different from your competitors.

STRATEGIC ABANDONMENT FLOWS
Cart or checkout abandonment represents the lowest-hanging fruit in digital commerce. However, the standard playbook is flawed: instantly sending a 20% discount condition trains your customers to always wait for a coupon before buying. Instead, our first abandoned cart message focuses purely on customer service and technical support. "Did you have trouble checking out?" Often, a prospect simply got distracted or had a credit card error. By waiting until the third or fourth follow-up to introduce a financial incentive, we protect your margins while still rescuing the sale.

POST-PURCHASE LUCRATIVE ARCHITECTURE
The cheapest customer to acquire is the one who has already bought from you. Post-purchase automations are critically underutilized. Rather than simply sending a receipt, we use the post-purchase window to cross-sell complementary products, ask for user-generated content or reviews, and educate the customer on how to fully utilize their purchase.

SMS: THE ULTIMATE FLASH TOOL
While email is great for long-form nurturing, SMS is unparalleled for immediacy. With open rates routinely exceeding 90%, SMS should be treated as a VIP channel. We deploy SMS compliantly but aggressively for flash sales, last-minute appointment reminders, and highly time-sensitive offers. 

By segmenting your audience and relying on behavioral triggers (like when someone views a specific pricing page multiple times), these automations work tirelessly behind the scenes. They multiply your sales force's capabilities and ensure not a single dollar of acquired traffic goes to waste.`
  },
  {
    slug: 'mastering-retargeting',
    title: 'Mastering Full-Funnel Retargeting',
    excerpt: 'Retargeting isn\'t just about showing the same ad everywhere. It\'s about moving prospects intelligently through the buyer\'s journey.',
    content: `Standard retargeting is lazy: showing the exact same product image to someone for 30 days straight across the internet. Eventually, banner blindness sets in, frequency scores skyrocket, and the prospect becomes annoyed rather than persuaded. Engineered retargeting is sequential, psychological, and carefully timed to address the prospect's exact position in the buying journey.

First, we address objections. If they visited the pricing page but didn't convert, the retargeting ad should offer an ROI calculator or an in-depth case study to build trust. Next, we build urgency with limited-time offers or fast-action bonuses. Finally, we make a soft down-sell into an email list if they still aren't ready to buy today. By segmenting your retargeting traffic based on exactly what actions they took on your site, we turn hesitant window-shoppers into high-value lifelong customers.

MAPPING THE TIME DELAY
An effective retargeting sequence changes based on how long it has been since the user interacted with your brand.
0-3 Days: The user is still red-hot. They were just on your site. Here, a simple reminder or cart-abandonment ad works brilliantly.
4-14 Days: They have cooled slightly. At this stage, they are likely comparing you to competitors. We hit them with user-generated content (UGC), video testimonials, and unboxing experiences. Social proof is the ultimate tiebreaker.
15-30 Days: The intent may have diminished, so we pivot the angle. We might offer a specific lead magnet, a webinar registration, or an exclusive bundle to pull them back into the ecosystem from a different angle.

BREAKING DOWN THE PRICE BARRIER
When prospects bounce from a checkout or pricing page, price is almost always the unspoken friction point. But simply discounting your services devalues your brand. Instead, an engineered retargeting campaign attacks the value discrepancy. We run "us vs. them" comparison charts, highlight long-term cost savings, or present a transparent breakdown of what goes into your product. If you can justify the cost visually, the price friction evaporates without needing to slash your margins.

OMNIPRESENT CROSS-CHANNEL SYNERGY
A user might discover you on Instagram, but they will likely research you on Google and watch videos on YouTube before purchasing. True full-funnel retargeting creates an omnipresent effect. We capture the pixel data from Meta and build custom audiences on YouTube. A prospect gets targeted by an educational pre-roll video on YouTube, searches your name on Google where we hold the top branded search spot, and then sees a case study on their LinkedIn feed. 

This multi-platform sequence gives the illusion that your brand is a massive industry leader. Combined with strict frequency capping to prevent ad fatigue, this strategic safety net ensures your front-end customer acquisition machine operates at peak efficiency.`
  }
];

function BlogList() {
  return (
    <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold mb-12 text-white">Apex Growth <span className="text-[#C8A96A]">Blog</span></h1>
      <div className="grid gap-8">
        {ARTICLES.map(article => (
          <a key={article.slug} href={`#/blog/${article.slug}`} className="bg-[#0D2233] border border-white/10 p-8 rounded-3xl hover:border-[#C8A96A]/50 transition-all flex flex-col group block">
            <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#C8A96A] transition-colors">{article.title}</h2>
            <p className="text-[#A3B1C6] leading-relaxed">{article.excerpt}</p>
            <div className="mt-6 font-medium text-[#C8A96A] text-sm">Read full article →</div>
          </a>
        ))}
      </div>
    </section >
  );
}

function ArticleView({ hash }: { hash: string }) {
  const slug = hash.replace('#/blog/', '');
  const article = ARTICLES.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen">
        <h1 className="text-3xl text-white">Article not found</h1>
        <a href="#/blog" className="text-[#C8A96A] hover:text-[#B5985F] mt-4 inline-block font-medium">← Back to Blog</a>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen">
      <a href="#/blog" className="text-[#A3B1C6] hover:text-white mb-8 inline-block font-medium transition-colors">← Back to Blog</a>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">{article.title}</h1>
      <div className="text-lg text-[#A3B1C6] leading-relaxed space-y-6 whitespace-pre-wrap">
        {article.content}
      </div>
    </section>
  );
}

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isQualified, setIsQualified] = useState(false);
  const [qualifyMessage, setQualifyMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleHash = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', handleHash);

    // Check initial cookie consent
    if (!localStorage.getItem('apex_labs_cookie_consent')) {
      setShowCookieConsent(true);
    }

    return () => {
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const handleQualifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQualifyMessage(null);

    const formData = new FormData(e.currentTarget);
    const adSpend = formData.get('qualAdSpend');
    const revenue = formData.get('qualRevenue');
    const tried = formData.get('qualTried');
    const goal = formData.get('qualGoal');

    const adQualified = adSpend === '800-1000' || adSpend === '1000-plus' || adSpend === '5000-plus';
    const revenueQualified = revenue === '25-100k' || revenue === '100k-plus';
    const triedQualified = tried === 'yes';
    const goalQualified = !!goal;

    if (adQualified && revenueQualified && triedQualified && goalQualified) {
      setIsQualified(true);
      setQualifyMessage(null);
      const applySection = document.getElementById('apply');
      if (applySection) {
        applySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setIsQualified(false);
      setQualifyMessage(
        'Based on these answers, you may not be an ideal fit for our current cohort. If you believe this is a mistake, please reach out directly so we can review your situation.',
      );
    }
  };

  const handleApplySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage(null);
    setIsSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_GHL_WEBHOOK_URL;
      const formData = new FormData(e.currentTarget);

      const payload = {
        full_name: formData.get('fullName'),
        email: formData.get('email'),
        company: formData.get('company'),
        website: formData.get('website'),
        monthly_ad_spend: formData.get('adSpend'),
        primary_goal: formData.get('goal'),
        success_window: formData.get('successWindow'),
        accept_terms: formData.get('acceptTerms') === 'on',
        source: 'Apex Labs Landing Page',
        page_url: window.location.href,
      };

      if (webhookUrl) {
        const res = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!res.ok) {
          throw new Error('Failed to submit to CRM');
        }

        setSubmitMessage('Application received. Our team will reach out within 2–3 business days.');
        e.currentTarget.reset();
      } else {
        console.warn('VITE_GHL_WEBHOOK_URL is not set');
        setSubmitMessage(
          'Thanks for your application. Our CRM connection is being finalized—please also contact us directly so we can follow up.',
        );
      }
    } catch (error) {
      console.error(error);
      setSubmitMessage('Something went wrong sending your application. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1D2A] text-[#FFFFFF] font-sans selection:bg-[#C8A96A] selection:text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Navigation */}
        <nav className="relative z-50 bg-[#C8A96A] sticky top-0 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

            {/* Hamburger Button (Mobile Only) */}
            <div className="md:hidden flex items-center">
              <button aria-label="Toggle Navigation" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#0B1D2A] p-2 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Left: Links (Desktop) */}
            <div className="hidden md:flex items-center gap-8 flex-1">
              <a href="#/blog" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-sm text-[#0B1D2A]/80 hover:text-[#0B1D2A] transition-colors uppercase tracking-wider">Blog</a>
              <a href="#problem" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-sm text-[#0B1D2A]/80 hover:text-[#0B1D2A] transition-colors uppercase tracking-wider">The Problem</a>
              <a href="#system" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-sm text-[#0B1D2A]/80 hover:text-[#0B1D2A] transition-colors uppercase tracking-wider">Our System</a>
              <a href="#results" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-sm text-[#0B1D2A]/80 hover:text-[#0B1D2A] transition-colors uppercase tracking-wider">Results</a>
            </div>

            {/* Middle: Logo */}
            <div className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <a href="#/" onClick={() => setIsMobileMenuOpen(false)} className="font-extrabold text-2xl text-[#0B1D2A] tracking-tighter">Apex Labs</a>
            </div>

            {/* Right: Empty to balance flex */}
            <div className="flex justify-end flex-1">
            </div>

          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-20 left-0 w-full bg-[#C8A96A] shadow-2xl md:hidden flex flex-col py-6 px-6 gap-6 border-t border-[#0B1D2A]/10">
              <a href="#/blog" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-[#0B1D2A] hover:opacity-70 transition-colors uppercase tracking-wider">Blog</a>
              <a href="#problem" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-[#0B1D2A] hover:opacity-70 transition-colors uppercase tracking-wider">The Problem</a>
              <a href="#system" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-[#0B1D2A] hover:opacity-70 transition-colors uppercase tracking-wider">Our System</a>
              <a href="#results" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-lg text-[#0B1D2A] hover:opacity-70 transition-colors uppercase tracking-wider">Results</a>
            </div>
          )}
        </nav>

        <main className="relative z-10">
          {route === '#/blog' ? <BlogList /> : route.startsWith('#/blog/') ? <ArticleView hash={route} /> : (
            <>
              {/* Hero Section */}
              <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C8A96A]/10 border border-[#C8A96A]/30 text-[#C8A96A] font-medium text-sm mb-8">
                    <span className="w-2 h-2 rounded-full bg-[#C8A96A] animate-pulse"></span>
                    Accepting new partners for Q3
                  </div>

                  <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-[1.1]">
                    Stop Scaling Noise.<br />
                    Start Scaling <span className="text-[#C8A96A] relative inline-block">
                      Revenue.
                      <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#C8A96A] rounded-full opacity-80"></span>
                    </span>
                  </h1>

                  <p className="font-normal text-lg md:text-xl text-[#A3B1C6] max-w-2xl mx-auto mb-12 leading-relaxed">
                    We build engineered growth systems for global brands that demand measurable ROI, not just vanity metrics.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="#apply"
                      className="font-medium text-base bg-[#C8A96A] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#B5985F] transition-all border border-[#C8A96A] hover:border-[#C8A96A]/50 shadow-[0_0_30px_rgba(122,28,36,0.3)]"
                    >
                      Apply for Partnership <ArrowRight size={18} />
                    </a>
                    <a
                      href="#results"
                      className="font-medium text-base bg-transparent text-[#FFFFFF] px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/5 transition-all border border-white/10"
                    >
                      View Case Studies
                    </a>
                  </div>
                </motion.div>
              </section>

              {/* Problem Section */}
              <section id="problem" className="py-24 px-6 border-y border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                  >
                    <h2 className="font-semibold text-3xl md:text-5xl mb-6">
                      Why most brands <span className="text-[#C8A96A]">leak revenue</span>.
                    </h2>
                    <p className="font-normal text-lg text-[#A3B1C6] max-w-3xl mx-auto">
                      Most brands run social, ads, and email as disconnected tactics. Agencies report on likes and ROAS, while broken funnels, weak follow ups, and messy CRMs quietly kill profit.
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-[#0B1D2A] border border-white/5 p-8 rounded-3xl opacity-60 relative overflow-hidden group">
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[260%] transition-transform duration-700"></div>
                      </div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#A3B1C6]">
                          <BarChart3 size={20} />
                        </div>
                        <h3 className="font-semibold text-xl text-[#A3B1C6]">The Industry Standard</h3>
                      </div>
                      <ul className="space-y-4">
                        {[
                          'Social, email, and SMS run in silos',
                          'Ad agencies optimize for clicks, not customers',
                          'Leads fall through the cracks with no CRM discipline',
                          'Follow ups stop after one or two touches'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 font-normal text-[#A3B1C6]">
                            <span className="mt-1 text-white/20">✕</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-b from-[#C8A96A]/10 to-transparent border border-[#C8A96A]/30 p-8 rounded-3xl relative overflow-hidden group">
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[260%] transition-transform duration-700"></div>
                      </div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A96A] opacity-5 blur-[50px]"></div>
                      <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="w-10 h-10 rounded-full bg-[#C8A96A] flex items-center justify-center text-white">
                          <TrendingUp size={20} />
                        </div>
                        <h3 className="font-semibold text-xl text-[#FFFFFF]">The Apex Standard</h3>
                      </div>
                      <ul className="space-y-4 relative z-10">
                        {[
                          'Unified social, ads, landing pages, and follow ups',
                          'Funnels designed around revenue, not vanity metrics',
                          'CRM, email, and SMS automation that work together',
                          'Clear numbers on what it costs to acquire and retain a customer'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 font-normal text-[#FFFFFF]">
                            <CheckCircle2 className="mt-0.5 text-[#C8A96A] shrink-0" size={18} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* System Section */}
              <section id="system" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-20">
                    <h2 className="font-semibold text-3xl md:text-5xl mb-6">
                      The Apex <span className="text-[#C8A96A]">Growth System</span>
                    </h2>
                    <p className="font-normal text-lg text-[#A3B1C6] max-w-3xl mx-auto">
                      We engineer full-funnel growth systems that combine social media management, paid ads, high-converting
                      landing pages and funnels, and automated follow ups across email, SMS, and CRM.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {[
                      "Social media management & marketing",
                      "Meta & Google paid ads",
                      "Landing pages & funnels",
                      "CRM & pipeline setup",
                      "Email marketing & automation",
                      "SMS automation & follow ups"
                    ].map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center rounded-full border border-[#C8A96A]/40 bg-[#0D2233] px-4 py-2 text-xs md:text-sm font-medium text-[#FFFFFF]/90 tracking-wide"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: <Target size={24} className="text-[#C8A96A]" />,
                        title: "1. Paid Social & Ads Engine",
                        desc: "We manage your social media presence and run Meta and Google ads that drive qualified traffic into your funnel—not just impressions."
                      },
                      {
                        icon: <Zap size={24} className="text-[#C8A96A]" />,
                        title: "2. Landing Pages & Funnels",
                        desc: "We design and optimize conversion-focused landing pages and funnels that turn cold clicks into booked calls and revenue."
                      },
                      {
                        icon: <TrendingUp size={24} className="text-[#C8A96A]" />,
                        title: "3. Follow Ups & Automation",
                        desc: "We build CRM, email, and SMS automation that nurtures, follows up, and recovers missed revenue without adding work to your team."
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-[#0B1D2A] border border-white/10 p-8 rounded-3xl hover:border-[#C8A96A]/30 transition-colors relative overflow-hidden group"
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/14 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[260%] transition-transform duration-700"></div>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#C8A96A]/20 transition-colors">
                          {step.icon}
                        </div>
                        <h3 className="font-semibold text-xl mb-4 text-[#FFFFFF]">{step.title}</h3>
                        <p className="font-normal text-[#A3B1C6] leading-relaxed">
                          {step.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Authority Proof Section */}
              <section id="results" className="py-24 px-6 border-y border-white/5 bg-black/20">
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {[
                      { metric: "$150M+", label: "Revenue Generated" },
                      { metric: "312%", label: "Average ROI Increase" },
                      { metric: "45+", label: "Global Partners" },
                      { metric: "< 30", label: "Days to Profitability" }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="font-bold text-4xl md:text-5xl text-[#FFFFFF] mb-2">{stat.metric}</div>
                        <div className="font-medium text-sm text-[#C8A96A] uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <CaseStudyCard
                      number="Case Study 01"
                      title="Global SaaS Platform"
                      description="Scaled monthly recurring revenue by restructuring their paid acquisition funnel and implementing aggressive CRO."
                      metrics={[
                        { value: "+450% MRR", label: "Growth", isPrimary: true },
                        { value: "-40% CAC", label: "Efficiency" }
                      ]}
                    />
                    <CaseStudyCard
                      number="Case Study 02"
                      title="DTC E-Commerce"
                      description="Broke through a 6-month growth plateau by deploying our creative testing framework and rebuilding their data architecture."
                      metrics={[
                        { value: "$2.4M/mo", label: "Revenue", isPrimary: true },
                        { value: "3.8x ROAS", label: "Ad Spend" }
                      ]}
                    />
                  </div>

                </div>
              </section>

              {/* Embedded Application Form */}
              <section id="apply" className="py-24 px-6 bg-[#0B1D2A]">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-10">
                    <h2 className="font-semibold text-3xl md:text-4xl mb-4">
                      Apply to work with <span className="text-[#C8A96A]">Apex Labs</span>
                    </h2>
                    <p className="font-normal text-lg text-[#A3B1C6]">
                      First, answer a few quick questions so we can confirm you&apos;re a fit for our partnership model.
                    </p>
                  </div>

                  {!isQualified && (
                    <form
                      onSubmit={handleQualifySubmit}
                      className="mb-10 bg-[#060F17] border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">
                            What is your current monthly ad spend?
                          </label>
                          <select
                            name="qualAdSpend"
                            required
                            className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                          >
                            <option value="">Select range</option>
                            <option value="under-800">Under $800 / month</option>
                            <option value="800-1000">$800 – $1,000 / month</option>
                            <option value="1000-plus">$1,000 – $5,000 / month</option>
                            <option value="5000-plus">$5,000+ / month</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">
                            What is your current monthly revenue?
                          </label>
                          <select
                            name="qualRevenue"
                            required
                            className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                          >
                            <option value="">Select range</option>
                            <option value="under-25k">Under $25k / month</option>
                            <option value="25-100k">$25k – $100k / month</option>
                            <option value="100k-plus">$100k+ / month</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">
                            Have you tried social media or paid ads before?
                          </label>
                          <div className="flex gap-4 text-sm text-[#FFFFFF]">
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="radio"
                                name="qualTried"
                                value="yes"
                                required
                                className="h-4 w-4 rounded border-white/20 bg-[#0D2233] text-[#C8A96A] focus:ring-[#C8A96A]"
                              />
                              Yes
                            </label>
                            <label className="inline-flex items-center gap-2">
                              <input
                                type="radio"
                                name="qualTried"
                                value="no"
                                className="h-4 w-4 rounded border-white/20 bg-[#0D2233] text-[#C8A96A] focus:ring-[#C8A96A]"
                              />
                              No
                            </label>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">
                            What is your primary growth goal right now?
                          </label>
                          <select
                            name="qualGoal"
                            required
                            className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                          >
                            <option value="">Select goal</option>
                            <option value="scale-profitably">Scale revenue profitably</option>
                            <option value="improve-roas">Improve ROAS / CAC</option>
                            <option value="launch-new-market">Launch into new markets</option>
                            <option value="rebuild-infrastructure">Rebuild tracking & infrastructure</option>
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full font-medium text-base bg-[#C8A96A] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#B5985F] transition-all border border-[#C8A96A] hover:border-[#C8A96A]/50 shadow-[0_0_30px_rgba(122,28,36,0.4)]"
                      >
                        Check if we&apos;re a fit
                      </button>

                      {qualifyMessage && (
                        <p className="mt-3 text-sm text-center text-[#A3B1C6]">
                          {qualifyMessage}
                        </p>
                      )}
                    </form>
                  )}

                  {isQualified && (
                    <form
                      onSubmit={handleApplySubmit}
                      className="bg-[#060F17] border border-white/10 rounded-3xl p-8 md:p-10 space-y-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] relative overflow-hidden group"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[260%] transition-transform duration-700"></div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="Jane Doe"
                            className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">Work Email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="you@company.com"
                            className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">Brand / Company</label>
                          <input
                            type="text"
                            name="company"
                            required
                            placeholder="Apex Labs"
                            className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">Website URL</label>
                          <input
                            type="url"
                            name="website"
                            placeholder="https://yourbrand.com"
                            className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">
                            Monthly Ad Spend (USD)
                          </label>
                          <select
                            required
                            name="adSpend"
                            className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                          >
                            <option value="">Select range</option>
                            <option value="under-25k">Under $25k</option>
                            <option value="25-50k">$25k – $50k</option>
                            <option value="50-100k">$50k – $100k</option>
                            <option value="100k-plus">$100k+</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="font-medium text-sm text-[#FFFFFF]">
                            Primary Growth Goal
                          </label>
                          <select
                            required
                            name="goal"
                            className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                          >
                            <option value="">Select goal</option>
                            <option value="scale-profitably">Scale revenue profitably</option>
                            <option value="improve-roas">Improve ROAS / CAC</option>
                            <option value="launch-new-market">Launch into new markets</option>
                            <option value="rebuild-infrastructure">Rebuild tracking & infrastructure</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="font-medium text-sm text-[#FFFFFF]">
                          What does success look like in the next 6–12 months?
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Share targets, constraints, and any context our team should know."
                          name="successWindow"
                          className="bg-[#0D2233] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#FFFFFF] resize-none focus:outline-none focus:border-[#C8A96A] focus:ring-1 focus:ring-[#C8A96A]/60"
                        />
                      </div>

                      <div className="flex items-start gap-3 text-sm text-[#A3B1C6]">
                        <input
                          id="accept-terms"
                          type="checkbox"
                          required
                          name="acceptTerms"
                          className="mt-1 h-4 w-4 rounded border-white/20 bg-[#0D2233] text-[#C8A96A] focus:ring-[#C8A96A]"
                        />
                        <label htmlFor="accept-terms">
                          I agree to be contacted by Apex Labs regarding this application and confirm I have read the{' '}
                          <button type="button" onClick={() => setIsPrivacyModalOpen(true)} className="underline hover:text-[#FFFFFF]">privacy policy</button>.
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full font-medium text-base bg-[#C8A96A] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#B5985F] transition-all border border-[#C8A96A] hover:border-[#C8A96A]/50 shadow-[0_0_30px_rgba(122,28,36,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting…' : 'Submit Application'}
                      </button>
                      {submitMessage && (
                        <p className="mt-3 text-sm text-center text-[#A3B1C6]">
                          {submitMessage}
                        </p>
                      )}
                    </form>
                  )}
                </div>
              </section>

              <BookingSection />

              {/* CTA Section */}

              <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                  <div className="bg-[#C8A96A] border-2 border-[#C8A96A] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(198,168,90,0.15)]">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none"></div>

                    <div className="relative z-10">
                      <h2 className="font-semibold text-4xl md:text-6xl text-[#FFFFFF] mb-6 tracking-tight">
                        Ready to engineer your growth?
                      </h2>
                      <p className="font-normal text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                        We only partner with brands where we know we can drive massive impact. Apply below to see if you qualify for our Q3 cohort.
                      </p>
                      <a
                        href="#apply"
                        className="font-medium text-base bg-[#0B1D2A] text-[#C8A96A] px-10 py-5 rounded-full inline-flex items-center gap-2 hover:bg-black transition-all shadow-xl hover:scale-105 active:scale-95"
                      >
                        Apply For Partnership <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="py-24 px-6 bg-[#0B1D2A] border-t border-white/5">
                <div className="max-w-5xl mx-auto">
                  <h2 className="font-semibold text-3xl md:text-4xl mb-8 text-[#FFFFFF]">
                    FAQ: Common questions about partnering with Apex Labs
                  </h2>

                  <div className="divide-y divide-white/10">
                    {[
                      {
                        q: "What exactly does Apex Labs do for social media?",
                        a: "We handle end-to-end social media for growth: content strategy, calendar planning, creative direction, and performance-focused posts and stories. For paid, we build and manage campaigns on platforms like Meta that are tightly aligned with your funnels so every piece of content is working toward revenue, not just engagement."
                      },
                      {
                        q: "How do you manage Meta and Google ads differently from a typical agency?",
                        a: "We treat ads as part of a bigger system, not isolated campaigns. That means structured testing of angles, hooks, and creatives; tight control of audiences and budgets; and constant feedback loops with landing page and email/SMS performance so we can scale winners and cut losers quickly."
                      },
                      {
                        q: "Do you build our landing pages and funnels for us?",
                        a: "Yes. We design and build high-converting landing pages and funnels that match your brand and offers. This includes wireframing, copy, design direction, and implementation in the tools you use (e.g., Webflow, ClickFunnels, or custom setups), plus ongoing A/B testing on headlines, offers, and layouts."
                      },
                      {
                        q: "What do you handle around CRM and follow ups?",
                        a: "We help you set up or refine your CRM so leads are captured, routed, and followed up with automatically. That includes pipeline stages, automations, and basic reporting so you always know where deals are, what your close rates look like, and where revenue is being left on the table."
                      },
                      {
                        q: "How deep do you go with email marketing and automation?",
                        a: "We build and optimize full email ecosystems: welcome flows, post-purchase sequences, reactivation campaigns, launch campaigns, and behavior-based automations. We write the strategy and flows, draft or guide the copy, and run ongoing testing on subject lines, sends, and segments to consistently lift revenue per subscriber."
                      },
                      {
                        q: "What about SMS automation and compliance?",
                        a: "We set up SMS journeys for high-intent, timely touchpoints like abandon cart, lead follow up, and limited-time offers. We work within the rules of your SMS platform and region, ensure proper consent flows, and keep messages short, valuable, and aligned with your brand so they feel like a helpful nudge, not spam."
                      },
                      {
                        q: "Who is a good fit to work with Apex Labs?",
                        a: "Our best partners are brands already generating consistent revenue and investing in ads, but who know their funnel and follow ups aren’t fully dialed in. Typically they are spending at least $25k per month on paid traffic and want a partner to own social, paid ads, funnels, and follow ups as a single growth system."
                      },
                      {
                        q: "What happens after I submit the application form?",
                        a: "Within 2–3 business days, our team reviews your answers and current setup. If there’s a strong fit, we’ll invite you to a strategy call where we walk through your numbers, show you where we see the biggest opportunities across ads, funnels, and follow ups, and outline what an engagement with Apex Labs would look like."
                      }
                    ].map((item, idx) => (
                      <details
                        key={idx}
                        className="group py-4"
                      >
                        <summary className="flex items-center justify-between cursor-pointer list-none">
                          <span className="font-medium text-base md:text-lg text-[#FFFFFF]">
                            {item.q}
                          </span>
                          <span className="ml-4 text-[#C8A96A] text-xl leading-none group-open:rotate-45 transition-transform">
                            +
                          </span>
                        </summary>
                        <p className="mt-3 text-sm md:text-base text-[#A3B1C6] leading-relaxed max-w-3xl">
                          {item.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            </>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-[#0B1D2A] py-12 px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center justify-center gap-3">
              {/* Logo removed */}
            </div>
            <div className="flex gap-8">
              <button type="button" onClick={() => setIsPrivacyModalOpen(true)} className="font-medium text-sm text-[#A3B1C6] hover:text-[#FFFFFF] transition-colors">Privacy Policy</button>
              <button type="button" onClick={() => setShowCookieConsent(true)} className="font-medium text-sm text-[#A3B1C6] hover:text-[#FFFFFF] transition-colors">Cookie Preferences</button>
              <a href="#" className="font-medium text-sm text-[#A3B1C6] hover:text-[#FFFFFF] transition-colors">Terms of Service</a>
              <a href="#" className="font-medium text-sm text-[#A3B1C6] hover:text-[#FFFFFF] transition-colors">Contact</a>
            </div>
            <div className="font-normal text-sm text-[#A3B1C6]">
              © {new Date().getFullYear()} Apex Labs. All rights reserved.
            </div>
          </div>
        </footer>
      </motion.div>
      <CookieConsent
        isVisible={showCookieConsent}
        onAccept={() => {
          localStorage.setItem('apex_labs_cookie_consent', 'true');
          setShowCookieConsent(false);
        }}
        onDecline={() => {
          localStorage.setItem('apex_labs_cookie_consent', 'false');
          setShowCookieConsent(false);
        }}
        openPrivacyPolicy={() => setIsPrivacyModalOpen(true)}
      />
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
    </div>
  );
}
