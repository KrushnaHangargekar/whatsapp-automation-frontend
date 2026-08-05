import React, { useState } from 'react';
import { 
  Check, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  Star,
  Zap,
  Calculator,
  Tag,
  Info,
  Sparkles
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
    <div className="pt-10 pb-24 space-y-16">
      
      {/* Header Banner matching screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          7 days free trial, zero setup fees and affordable pricing
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium">
          Up to -25% off & <span className="underline font-semibold">free dedicated onboarding</span> with annual subscription
        </p>

        {/* Toggle Pills: Annual / Monthly */}
        <div className="pt-4 flex items-center justify-center gap-2">
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 dark:bg-slate-900 rounded-full border border-slate-300 dark:border-slate-800">
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                annual 
                  ? 'bg-emerald-400 text-slate-950 shadow' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-white'
              }`}
            >
              Annual
            </button>
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                !annual 
                  ? 'bg-emerald-400 text-slate-950 shadow' 
                  : 'text-slate-600 dark:text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>
      </section>

      {/* 3 Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {INITIAL_PRICING_PLANS.map((plan) => {
            const currentPrice = annual ? plan.annualPrice : plan.monthlyPrice;
            const originalPrice = annual ? plan.annualOriginalPrice : plan.monthlyOriginalPrice;
            const billingText = annual ? 'billed annually' : 'billed monthly';

            const cardBorder = 
              plan.id === 'plan-growth' ? 'border-sky-300 dark:border-sky-800 bg-sky-50/40 dark:bg-sky-950/20' :
              plan.id === 'plan-pro' ? 'border-emerald-400 dark:border-emerald-700 bg-emerald-50/40 dark:bg-emerald-950/20' :
              'border-pink-300 dark:border-pink-800 bg-pink-50/40 dark:bg-pink-950/20';

            const buttonStyle = 
              plan.id === 'plan-growth' ? 'bg-sky-400 hover:bg-sky-500 text-slate-950 shadow' :
              plan.id === 'plan-pro' ? 'bg-emerald-400 hover:bg-emerald-500 text-slate-950 shadow' :
              'bg-pink-300 hover:bg-pink-400 text-slate-950 shadow';

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-7 border-2 flex flex-col justify-between transition-all duration-300 relative shadow-lg ${cardBorder}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-amber-300 text-slate-950 text-xs font-black border border-amber-400 shadow-sm">
                    Best Value
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header Title & Subtitle */}
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{plan.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed min-h-[40px]">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Price Section with Strike-through Original Price & 20% OFF */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {originalPrice && (
                        <span className="text-sm font-bold text-slate-400 line-through">
                          {originalPrice}
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold">
                        20% OFF
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{currentPrice}</span>
                      <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col">
                        <span className="font-bold">/month</span>
                        <span className="text-[10px]">{billingText}</span>
                      </div>
                    </div>
                  </div>

                  {/* Sub details info */}
                  <div className="text-xs text-slate-600 dark:text-slate-300 space-y-1 font-medium pb-2 border-b border-slate-200 dark:border-slate-800">
                    <div>{plan.conversations}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      Additional charges apply for messages <Info className="w-3 h-3 text-slate-400" />
                    </div>
                  </div>

                  {/* Top Select Plan Button */}
                  <button
                    onClick={() => onNavigate('demo')}
                    className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${buttonStyle}`}
                  >
                    Select Plan
                  </button>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      {plan.featuresHeader || 'Key features'}
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-slate-400 font-bold shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Usage Section */}
                  <div className="space-y-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Usage</div>
                    <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                      {plan.usage.map((u, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-slate-400 shrink-0">•</span>
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Select Plan Button */}
                <div className="pt-6">
                  <button
                    onClick={() => onNavigate('demo')}
                    className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer ${buttonStyle}`}
                  >
                    Select Plan
                  </button>
                </div>

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
