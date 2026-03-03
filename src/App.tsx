import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Mountain, 
  TrendingUp, 
  Target, 
  Zap, 
  BarChart3, 
  CheckCircle2 
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-[#E8E8E8] font-sans selection:bg-[#7A1C24] selection:text-white overflow-hidden">
      
      {/* Ambient Background Glow */}
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
          <div className="flex items-center justify-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Mountain className="text-[#C6A85A]" size={28} strokeWidth={2.5} />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-widest text-[#C6A85A] leading-none">APEX LABS</span>
              <span className="text-[10px] font-medium tracking-[0.3em] text-[#E8E8E8] mt-1 text-center">SMMA</span>
            </div>
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
              <button className="font-medium text-base bg-[#7A1C24] text-white px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#8f212a] transition-all border border-[#7A1C24] hover:border-[#C6A85A]/50 shadow-[0_0_30px_rgba(122,28,36,0.3)]">
                Apply for Partnership <ArrowRight size={18} />
              </button>
              <button className="font-medium text-base bg-transparent text-[#E8E8E8] px-8 py-4 rounded-full flex items-center gap-2 hover:bg-white/5 transition-all border border-white/10">
                View Case Studies
              </button>
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
                Why most brands <span className="text-[#7A1C24]">scale noise</span>.
              </h2>
              <p className="font-normal text-lg text-[#8A8F98] max-w-2xl mx-auto">
                The industry standard is broken. Agencies sell you impressions, clicks, and likes while your bottom line stays flat. The problem isn't your product; it's your distribution system.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-[#0F1115] border border-white/5 p-8 rounded-3xl opacity-60">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#8A8F98]">
                    <BarChart3 size={20} />
                  </div>
                  <h3 className="font-semibold text-xl text-[#8A8F98]">The Industry Standard</h3>
                </div>
                <ul className="space-y-4">
                  {['Focus on vanity metrics (likes, views)', 'Fragmented, siloed campaigns', 'Guesswork and "creative" hunches', 'Unpredictable revenue swings'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 font-normal text-[#8A8F98]">
                      <span className="mt-1 text-white/20">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-b from-[#7A1C24]/10 to-transparent border border-[#7A1C24]/30 p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A85A] opacity-5 blur-[50px]"></div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#7A1C24] flex items-center justify-center text-white">
                    <TrendingUp size={20} />
                  </div>
                  <h3 className="font-semibold text-xl text-[#E8E8E8]">The Apex Standard</h3>
                </div>
                <ul className="space-y-4 relative z-10">
                  {['Focus on Customer Acquisition Cost (CAC)', 'Holistic, full-funnel engineering', 'Data-driven, iterative testing', 'Predictable, scalable revenue'].map((item, i) => (
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
                The Apex <span className="text-[#C6A85A]">Framework</span>
              </h2>
              <p className="font-normal text-lg text-[#8A8F98] max-w-2xl mx-auto">
                We don't guess. We engineer. Our proprietary 3-phase system turns your business into a predictable revenue engine.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target size={24} className="text-[#C6A85A]" />,
                  title: "1. Data Architecture",
                  desc: "We rebuild your tracking infrastructure to capture clean, actionable signal. No more flying blind."
                },
                {
                  icon: <Zap size={24} className="text-[#C6A85A]" />,
                  title: "2. Acquisition Engine",
                  desc: "Deploying rapid, multi-channel creative testing to find winning angles that convert at scale."
                },
                {
                  icon: <TrendingUp size={24} className="text-[#C6A85A]" />,
                  title: "3. Conversion Optimization",
                  desc: "Relentless CRO on your landing pages and funnels to squeeze every drop of ROI from your traffic."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#0F1115] border border-white/10 p-8 rounded-3xl hover:border-[#C6A85A]/30 transition-colors group"
                >
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
              <div className="bg-[#0F1115] border border-white/10 p-10 rounded-3xl">
                <div className="font-medium text-sm text-[#C6A85A] mb-4 uppercase tracking-widest">Case Study 01</div>
                <h3 className="font-semibold text-2xl mb-4">Global SaaS Platform</h3>
                <p className="font-normal text-[#8A8F98] mb-8">Scaled monthly recurring revenue by restructuring their paid acquisition funnel and implementing aggressive CRO.</p>
                <div className="flex items-center gap-4">
                  <div className="bg-[#7A1C24]/20 text-[#7A1C24] px-4 py-2 rounded-lg font-bold text-xl">+450% MRR</div>
                  <div className="bg-white/5 text-[#E8E8E8] px-4 py-2 rounded-lg font-medium text-sm">-40% CAC</div>
                </div>
              </div>
              <div className="bg-[#0F1115] border border-white/10 p-10 rounded-3xl">
                <div className="font-medium text-sm text-[#C6A85A] mb-4 uppercase tracking-widest">Case Study 02</div>
                <h3 className="font-semibold text-2xl mb-4">DTC E-Commerce</h3>
                <p className="font-normal text-[#8A8F98] mb-8">Broke through a 6-month growth plateau by deploying our creative testing framework and rebuilding their data architecture.</p>
                <div className="flex items-center gap-4">
                  <div className="bg-[#7A1C24]/20 text-[#7A1C24] px-4 py-2 rounded-lg font-bold text-xl">$2.4M/mo</div>
                  <div className="bg-white/5 text-[#E8E8E8] px-4 py-2 rounded-lg font-medium text-sm">3.8x ROAS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <button className="font-medium text-base bg-[#0F1115] text-[#C6A85A] px-10 py-5 rounded-full inline-flex items-center gap-2 hover:bg-black transition-all shadow-xl hover:scale-105 active:scale-95">
                  Apply For Partnership <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0F1115] py-12 px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center justify-center gap-2">
            <Mountain className="text-[#C6A85A]" size={24} />
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-widest text-[#C6A85A] leading-none">APEX LABS</span>
              <span className="text-[9px] font-medium tracking-[0.3em] text-[#E8E8E8] mt-1 text-center">SMMA</span>
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="font-medium text-sm text-[#8A8F98] hover:text-[#E8E8E8] transition-colors">Privacy Policy</a>
            <a href="#" className="font-medium text-sm text-[#8A8F98] hover:text-[#E8E8E8] transition-colors">Terms of Service</a>
            <a href="#" className="font-medium text-sm text-[#8A8F98] hover:text-[#E8E8E8] transition-colors">Contact</a>
          </div>
          <div className="font-normal text-sm text-[#8A8F98]">
            © {new Date().getFullYear()} Apex Labs SMMA. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
