import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  Star,
  Zap,
  Calculator,
  Tag
} from 'lucide-react';
import { INITIAL_PRICING_PLANS, WATI_FAQS } from '@/lib/initial-data';
import { NavTab } from '@/types';

interface PricingPageProps {
  onNavigate: (tab: NavTab) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const [annual, setAnnual] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [calcVolume, setCalcVolume] = useState<number>(25000);

  const metaFeeEst = Math.round(calcVolume * 0.008);

  return (
    <div className="pt-12 pb-24 space-y-20">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 text-xs font-extrabold animate-pulse">
          <Tag className="w-4 h-4 text-[#25D366]" />
          <span>Special Offer: 20% OFF Everything — Limited Time Only!</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
          Simple, Transparent <span className="text-[#25D366]">Wabtic Pricing</span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal">
          Pick the plan that fits your business stage. Every plan includes 20% OFF original pricing, zero setup fees, and instant access to all core features.
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-slate-600 dark:text-slate-400 pt-2">
          <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span>4.9 / 5 Rating (3,500+ Reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#25D366]" />
            Official Meta API Partner
          </div>
        </div>

        {/* Monthly vs Annual Toggle */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center gap-2 p-1 bg-slate-200/80 dark:bg-slate-900 rounded-full border border-slate-300 dark:border-slate-800">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                !annual ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all flex items-center gap-1.5 cursor-pointer ${
                annual ? 'bg-[#25D366] text-slate-950 shadow-md font-black' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Annual Billing
              <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
            </button>
          </div>

          <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs shadow-sm">
            🔥 20% OFF Applied on All Plans!
          </span>
        </div>
      </section>

      {/* 3 Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {INITIAL_PRICING_PLANS.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`bg-white dark:bg-slate-900 p-7 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative ${
                  plan.highlight
                    ? 'border-[#25D366] shadow-2xl shadow-[#25D366]/20 ring-2 ring-[#25D366]/40 lg:-translate-y-2 z-10'
                    : 'border-slate-200 dark:border-slate-800 hover:border-[#25D366]/50'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-[#25D366] text-slate-950 text-xs font-black uppercase tracking-wider shadow-md">
                    Best Value
                  </div>
                )}

                <div>
                  <div className="mb-6 space-y-2">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">{plan.title}</h3>
                    {plan.subtitle && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal min-h-[36px]">
                        {plan.subtitle}
                      </p>
                    )}
                    
                    {/* Price with 20% Discount */}
                    <div className="pt-2">
                      <div className="flex items-center gap-2">
                        {plan.originalPrice && (
                          <span className="text-lg font-bold text-slate-400 line-through">
                            {plan.originalPrice}
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded-md bg-[#25D366]/15 text-[#25D366] text-xs font-black">
                          20% OFF
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{plan.price}</span>
                        <span className="text-xs font-semibold text-slate-400">{plan.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6 text-xs space-y-1">
                    <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-[#25D366]" />
                      Details:
                    </div>
                    <div className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                      {plan.conversations}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white">Key Features:</div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-snug">
                        <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('demo')}
                  className={`w-full py-4 rounded-xl font-black text-sm text-center transition-all flex items-center justify-center gap-2 border-2 cursor-pointer ${
                    plan.highlight
                      ? 'bg-[#25D366] border-[#25D366] text-slate-950 shadow-lg shadow-[#25D366]/25 hover:bg-[#20bd5a]'
                      : 'border-slate-900 dark:border-slate-700 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-slate-800'
                  }`}
                >
                  Select Plan
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Conversation Fee Estimator */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-800 space-y-6 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Estimate Monthly Meta Conversation Fees</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Meta charges based on 24-hour conversation windows (1,000 service conversations are free every month)</p>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-slate-700 dark:text-slate-300">Expected Monthly Conversations:</span>
              <span className="text-xl font-black text-emerald-400 font-mono">{calcVolume.toLocaleString()} / mo</span>
            </div>

            <input
              type="range"
              min="5000"
              max="250000"
              step="5000"
              value={calcVolume}
              onChange={(e) => setCalcVolume(parseInt(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs">
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="text-slate-400 block font-medium">Estimated Meta Pass-through Fee</span>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">${metaFeeEst} / mo</span>
                <span className="text-[10px] text-slate-400 block mt-1">Based on global average $0.008 per 24h window</span>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                <span className="text-emerald-400 block font-bold">Free Meta Allowance Included</span>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">1,000 / mo</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block mt-1">Provided free every calendar month by Meta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">Everything you need to know about Wabtic plans and billing</p>
        </div>

        <div className="space-y-3">
          {WATI_FAQS.map((faq, index) => {
            const isOpen = expandedFaq === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left font-bold text-slate-900 dark:text-white text-sm sm:text-base flex justify-between items-center gap-4 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
