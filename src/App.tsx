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
      className="group h-[400px] w-full [perspective:2000px] relative cursor-pointer"
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
          style={{ willChange: 'transform' }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            mass: 1
          }}
        >
          {/* Front Face (Hidden State) */}
          <div className="absolute inset-0 backface-hidden bg-[#0F1115] border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl">
            {/* Shine effect on front */}
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className={`absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform transition-transform duration-1000 ease-in-out ${isFlipped ? 'translate-x-[400%]' : '-translate-x-full'}`}></div>
            </div>


            <div className="font-bold text-xs text-[#C6A85A] mb-8 uppercase tracking-[0.3em] opacity-80">{number}</div>

            <div className="relative mb-8">
              <div className="absolute inset-0 bg-[#7A1C24] blur-[40px] opacity-20 animate-pulse"></div>
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#1A1D25] to-[#0F1115] border border-white/5 flex items-center justify-center relative z-10">
                <Lock size={32} className="text-[#7A1C24]/80" />
              </div>
            </div>

            <h3 className="font-semibold text-xl text-[#E8E8E8] mb-2">Internal Performance Data</h3>
            <p className="font-medium text-xs text-[#8A8F98] uppercase tracking-widest flex items-center gap-2 opacity-60">
              <Eye size={14} /> Hover to unlock access
            </p>

            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end opacity-20">
              <div className="h-16 w-1 bg-gradient-to-t from-[#7A1C24] to-transparent rounded-full"></div>
              <div className="h-10 w-1 bg-gradient-to-t from-[#C6A85A] to-transparent rounded-full"></div>
              <div className="h-20 w-1 bg-gradient-to-t from-[#7A1C24] to-transparent rounded-full"></div>
              <div className="h-12 w-1 bg-gradient-to-t from-[#C6A85A] to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Back Face (Actual Content) */}
          <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-[#12141A] to-[#0F1115] border border-[#7A1C24]/30 p-10 rounded-[2.5rem] flex flex-col justify-center overflow-hidden shadow-[0_0_50px_rgba(122,28,36,0.2)]">
            {/* Shine effect on back */}
            <div className="pointer-events-none absolute inset-0 opacity-100">
              <div className={`absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -skew-x-12 transform transition-transform duration-1000 ease-in-out ${isFlipped ? 'translate-x-[400%]' : '-translate-x-full'}`}></div>
            </div>


            <div className="font-bold text-xs text-[#C6A85A] mb-4 uppercase tracking-[0.3em]">{number}</div>
            <h3 className="font-bold text-3xl mb-4 text-white leading-tight">{title}</h3>
            <p className="font-normal text-[#8A8F98] mb-10 leading-relaxed text-lg">{description}</p>

            <div className="flex flex-wrap items-center gap-4 mt-auto">
              {metrics.map((m, i) => (
                <div
                  key={i}
                  className={`${m.isPrimary ? 'bg-[#7A1C24]/20 border border-[#7A1C24]/30' : 'bg-white/5 border border-white/5'} px-6 py-4 rounded-2xl flex flex-col gap-1`}
                >
                  <span className={`font-bold ${m.isPrimary ? 'text-2xl text-[#E8E8E8]' : 'text-xl text-[#E8E8E8]'}`}>{m.value}</span>
                  <span className="text-[10px] uppercase tracking-[0.15em] text-[#C6A85A] font-semibold">{m.label}</span>
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
        config: { "layout": "month_view", "useSlotsViewOnSmallScreen": "true", "theme": "dark" },
        calLink: "apex-labs-3oae39/15min",
      });

      Cal.ns["15min"]("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
    }
  }, []);

  return (
    <section id="book" className="py-24 px-6 bg-[#0B0C10]/50 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7A1C24] opacity-10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="font-bold text-xs text-[#C6A85A] mb-4 uppercase tracking-[0.3em]">Next Steps</div>
          <h2 className="font-bold text-4xl md:text-6xl mb-6">
            Book your <span className="text-[#7A1C24]">Strategy Call</span>
          </h2>
          <p className="font-normal text-lg text-[#8A8F98] max-w-2xl mx-auto leading-relaxed">
            Choose a time that works for you to discuss your growth goals with our engineering team and explore how Apex Labs can scale your revenue.
          </p>
        </div>

        <div className="bg-[#0F1115] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[700px] relative group transition-all duration-500 hover:border-[#7A1C24]/30">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(122,28,36,0.1),transparent)]"></div>
          </div>
          <div style={{ width: "100%", height: "100%", overflow: "scroll" }} id="my-cal-inline-15min" className="relative z-10"></div>
        </div>
      </div>
    </section>
  );
}


export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [isQualified, setIsQualified] = useState(false);
  const [qualifyMessage, setQualifyMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 2.5s for a high-end intro feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
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
    <div className="min-h-screen bg-[#0F1115] text-[#E8E8E8] font-sans selection:bg-[#7A1C24] selection:text-white overflow-hidden">

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#7A1C24]"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src="/apex-labs-logo.png"
                alt="Apex Labs logo"
                className="w-full h-full object-contain relative z-10 mix-blend-screen"
                style={{
                  maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)',
                  WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)'
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >  {/* Ambient Background Glow */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#7A1C24] opacity-20 blur-[120px] rounded-full mix-blend-screen"></div>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 bg-[#7A1C24] sticky top-0 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

            {/* Left: Links */}
            <div className="hidden md:flex items-center gap-8 flex-1">
              <a href="#problem" className="font-medium text-sm text-[#E8E8E8]/90 hover:text-[#C6A85A] transition-colors">The Problem</a>
              <a href="#system" className="font-medium text-sm text-[#E8E8E8]/90 hover:text-[#C6A85A] transition-colors">Our System</a>
              <a href="#results" className="font-medium text-sm text-[#E8E8E8]/90 hover:text-[#C6A85A] transition-colors">Results</a>
            </div>

            {/* Middle: Logo */}
            <div className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <img
                src="/apex-labs-logo.png"
                alt="Apex Labs logo"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain mix-blend-screen"
              />
            </div>

            {/* Right: Empty to balance flex */}
            <div className="flex justify-end flex-1">
            </div>

          </div>
        </nav>

        <main className="relative z-10">

          {/* Hero Section */}
          <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7A1C24]/10 border border-[#7A1C24]/30 text-[#C6A85A] font-medium text-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-[#7A1C24] animate-pulse"></span>
                Accepting new partners for Q3
              </div>

              <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 leading-[1.1]">
                Stop Scaling Noise.<br />
                Start Scaling <span className="text-[#7A1C24] relative inline-block">
                  Revenue.
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#C6A85A] rounded-full opacity-80"></span>
                </span>
              </h1>

              <p className="font-normal text-lg md:text-xl text-[#8A8F98] max-w-2xl mx-auto mb-12 leading-relaxed">
                We build engineered growth systems for global brands that demand measurable ROI, not just vanity metrics.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#apply"
                  className="font-medium text-base bg-[#7A1C24] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#8f212a] transition-all border border-[#7A1C24] hover:border-[#C6A85A]/50 shadow-[0_0_30px_rgba(122,28,36,0.3)]"
                >
                  Apply for Partnership <ArrowRight size={18} />
                </a>
                <a
                  href="#results"
                  className="font-medium text-base bg-transparent text-[#E8E8E8] px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/5 transition-all border border-white/10"
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
                  Why most brands <span className="text-[#7A1C24]">leak revenue</span>.
                </h2>
                <p className="font-normal text-lg text-[#8A8F98] max-w-3xl mx-auto">
                  Most brands run social, ads, and email as disconnected tactics. Agencies report on likes and ROAS, while broken funnels, weak follow ups, and messy CRMs quietly kill profit.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-[#0F1115] border border-white/5 p-8 rounded-3xl opacity-60 relative overflow-hidden group">
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[260%] transition-transform duration-700"></div>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#8A8F98]">
                      <BarChart3 size={20} />
                    </div>
                    <h3 className="font-semibold text-xl text-[#8A8F98]">The Industry Standard</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Social, email, and SMS run in silos',
                      'Ad agencies optimize for clicks, not customers',
                      'Leads fall through the cracks with no CRM discipline',
                      'Follow ups stop after one or two touches'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-normal text-[#8A8F98]">
                        <span className="mt-1 text-white/20">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-b from-[#7A1C24]/10 to-transparent border border-[#7A1C24]/30 p-8 rounded-3xl relative overflow-hidden group">
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/18 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[260%] transition-transform duration-700"></div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A85A] opacity-5 blur-[50px]"></div>
                  <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#7A1C24] flex items-center justify-center text-white">
                      <TrendingUp size={20} />
                    </div>
                    <h3 className="font-semibold text-xl text-[#E8E8E8]">The Apex Standard</h3>
                  </div>
                  <ul className="space-y-4 relative z-10">
                    {[
                      'Unified social, ads, landing pages, and follow ups',
                      'Funnels designed around revenue, not vanity metrics',
                      'CRM, email, and SMS automation that work together',
                      'Clear numbers on what it costs to acquire and retain a customer'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 font-normal text-[#E8E8E8]">
                        <CheckCircle2 className="mt-0.5 text-[#C6A85A] shrink-0" size={18} />
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
                  The Apex <span className="text-[#C6A85A]">Growth System</span>
                </h2>
                <p className="font-normal text-lg text-[#8A8F98] max-w-3xl mx-auto">
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
                    className="inline-flex items-center rounded-full border border-[#C6A85A]/40 bg-[#151821] px-4 py-2 text-xs md:text-sm font-medium text-[#E8E8E8]/90 tracking-wide"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Target size={24} className="text-[#C6A85A]" />,
                    title: "1. Paid Social & Ads Engine",
                    desc: "We manage your social media presence and run Meta and Google ads that drive qualified traffic into your funnel—not just impressions."
                  },
                  {
                    icon: <Zap size={24} className="text-[#C6A85A]" />,
                    title: "2. Landing Pages & Funnels",
                    desc: "We design and optimize conversion-focused landing pages and funnels that turn cold clicks into booked calls and revenue."
                  },
                  {
                    icon: <TrendingUp size={24} className="text-[#C6A85A]" />,
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
                    className="bg-[#0F1115] border border-white/10 p-8 rounded-3xl hover:border-[#C6A85A]/30 transition-colors relative overflow-hidden group"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/14 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[260%] transition-transform duration-700"></div>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#7A1C24]/20 transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="font-semibold text-xl mb-4 text-[#E8E8E8]">{step.title}</h3>
                    <p className="font-normal text-[#8A8F98] leading-relaxed">
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
                    <div className="font-bold text-4xl md:text-5xl text-[#E8E8E8] mb-2">{stat.metric}</div>
                    <div className="font-medium text-sm text-[#C6A85A] uppercase tracking-wider">{stat.label}</div>
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
          <section id="apply" className="py-24 px-6 bg-[#0F1115]">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-semibold text-3xl md:text-4xl mb-4">
                  Apply to work with <span className="text-[#C6A85A]">Apex Labs</span>
                </h2>
                <p className="font-normal text-lg text-[#8A8F98]">
                  First, answer a few quick questions so we can confirm you&apos;re a fit for our partnership model.
                </p>
              </div>

              {!isQualified && (
                <form
                  onSubmit={handleQualifySubmit}
                  className="mb-10 bg-[#0B0C10] border border-white/10 rounded-3xl p-8 md:p-10 space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm text-[#E8E8E8]">
                        What is your current monthly ad spend?
                      </label>
                      <select
                        name="qualAdSpend"
                        required
                        className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
                      >
                        <option value="">Select range</option>
                        <option value="under-800">Under $800 / month</option>
                        <option value="800-1000">$800 – $1,000 / month</option>
                        <option value="1000-plus">$1,000 – $5,000 / month</option>
                        <option value="5000-plus">$5,000+ / month</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm text-[#E8E8E8]">
                        What is your current monthly revenue?
                      </label>
                      <select
                        name="qualRevenue"
                        required
                        className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
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
                      <label className="font-medium text-sm text-[#E8E8E8]">
                        Have you tried social media or paid ads before?
                      </label>
                      <div className="flex gap-4 text-sm text-[#E8E8E8]">
                        <label className="inline-flex items-center gap-2">
                          <input
                            type="radio"
                            name="qualTried"
                            value="yes"
                            required
                            className="h-4 w-4 rounded border-white/20 bg-[#14161C] text-[#C6A85A] focus:ring-[#C6A85A]"
                          />
                          Yes
                        </label>
                        <label className="inline-flex items-center gap-2">
                          <input
                            type="radio"
                            name="qualTried"
                            value="no"
                            className="h-4 w-4 rounded border-white/20 bg-[#14161C] text-[#C6A85A] focus:ring-[#C6A85A]"
                          />
                          No
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm text-[#E8E8E8]">
                        What is your primary growth goal right now?
                      </label>
                      <select
                        name="qualGoal"
                        required
                        className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
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
                    className="w-full font-medium text-base bg-[#7A1C24] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#8f212a] transition-all border border-[#7A1C24] hover:border-[#C6A85A]/50 shadow-[0_0_30px_rgba(122,28,36,0.4)]"
                  >
                    Check if we&apos;re a fit
                  </button>

                  {qualifyMessage && (
                    <p className="mt-3 text-sm text-center text-[#8A8F98]">
                      {qualifyMessage}
                    </p>
                  )}
                </form>
              )}

              {isQualified && (
                <form
                  onSubmit={handleApplySubmit}
                  className="bg-[#0B0C10] border border-white/10 rounded-3xl p-8 md:p-10 space-y-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] relative overflow-hidden group"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute -inset-y-16 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-[260%] transition-transform duration-700"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm text-[#E8E8E8]">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="Jane Doe"
                        className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm text-[#E8E8E8]">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@company.com"
                        className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm text-[#E8E8E8]">Brand / Company</label>
                      <input
                        type="text"
                        name="company"
                        required
                        placeholder="Apex Labs"
                        className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm text-[#E8E8E8]">Website URL</label>
                      <input
                        type="url"
                        name="website"
                        placeholder="https://yourbrand.com"
                        className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm text-[#E8E8E8]">
                        Monthly Ad Spend (USD)
                      </label>
                      <select
                        required
                        name="adSpend"
                        className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
                      >
                        <option value="">Select range</option>
                        <option value="under-25k">Under $25k</option>
                        <option value="25-50k">$25k – $50k</option>
                        <option value="50-100k">$50k – $100k</option>
                        <option value="100k-plus">$100k+</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-medium text-sm text-[#E8E8E8]">
                        Primary Growth Goal
                      </label>
                      <select
                        required
                        name="goal"
                        className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
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
                    <label className="font-medium text-sm text-[#E8E8E8]">
                      What does success look like in the next 6–12 months?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share targets, constraints, and any context our team should know."
                      name="successWindow"
                      className="bg-[#14161C] border border-white/10 rounded-xl px-4 py-3 text-sm text-[#E8E8E8] resize-none focus:outline-none focus:border-[#C6A85A] focus:ring-1 focus:ring-[#C6A85A]/60"
                    />
                  </div>

                  <div className="flex items-start gap-3 text-sm text-[#8A8F98]">
                    <input
                      id="accept-terms"
                      type="checkbox"
                      required
                      name="acceptTerms"
                      className="mt-1 h-4 w-4 rounded border-white/20 bg-[#14161C] text-[#C6A85A] focus:ring-[#C6A85A]"
                    />
                    <label htmlFor="accept-terms">
                      I agree to be contacted by Apex Labs regarding this application and confirm I have read the
                      privacy policy.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-medium text-base bg-[#7A1C24] text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#8f212a] transition-all border border-[#7A1C24] hover:border-[#C6A85A]/50 shadow-[0_0_30px_rgba(122,28,36,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting…' : 'Submit Application'}
                  </button>
                  {submitMessage && (
                    <p className="mt-3 text-sm text-center text-[#8A8F98]">
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
              <div className="bg-[#7A1C24] border-2 border-[#C6A85A] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_0_50px_rgba(198,168,90,0.15)]">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none"></div>

                <div className="relative z-10">
                  <h2 className="font-semibold text-4xl md:text-6xl text-[#E8E8E8] mb-6 tracking-tight">
                    Ready to engineer your growth?
                  </h2>
                  <p className="font-normal text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                    We only partner with brands where we know we can drive massive impact. Apply below to see if you qualify for our Q3 cohort.
                  </p>
                  <a
                    href="#apply"
                    className="font-medium text-base bg-[#0F1115] text-[#C6A85A] px-10 py-5 rounded-full inline-flex items-center gap-2 hover:bg-black transition-all shadow-xl hover:scale-105 active:scale-95"
                  >
                    Apply For Partnership <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-24 px-6 bg-[#0F1115] border-t border-white/5">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-semibold text-3xl md:text-4xl mb-8 text-[#E8E8E8]">
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
                      <span className="font-medium text-base md:text-lg text-[#E8E8E8]">
                        {item.q}
                      </span>
                      <span className="ml-4 text-[#C6A85A] text-xl leading-none group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm md:text-base text-[#8A8F98] leading-relaxed max-w-3xl">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-[#0F1115] py-12 px-6 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center justify-center gap-3">
              <img
                src="/apex-labs-logo.png"
                alt="Apex Labs logo"
                className="h-10 w-auto object-contain mix-blend-screen"
              />
            </div>
            <div className="flex gap-8">
              <a href="#" className="font-medium text-sm text-[#8A8F98] hover:text-[#E8E8E8] transition-colors">Privacy Policy</a>
              <a href="#" className="font-medium text-sm text-[#8A8F98] hover:text-[#E8E8E8] transition-colors">Terms of Service</a>
              <a href="#" className="font-medium text-sm text-[#8A8F98] hover:text-[#E8E8E8] transition-colors">Contact</a>
            </div>
            <div className="font-normal text-sm text-[#8A8F98]">
              © {new Date().getFullYear()} Apex Labs. All rights reserved.
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}
