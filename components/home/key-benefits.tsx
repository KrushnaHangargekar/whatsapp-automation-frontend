'use client';

import React from 'react';
import { Rocket, Bot, LineChart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function KeyBenefits() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#131d23] dark:text-white tracking-tight">
          Everything you need to scale
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
          Powerful features wrapped in an intuitive interface. Build complex workflows without writing a single line of code.
        </p>
      </div>

      {/* Features Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Feature 1: Large (2 Columns) */}
        <div className="md:col-span-2 bg-[#eaf5fe] dark:bg-[#111b21] rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center border border-[#d9e4ec] dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-1 flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#25d366]/20 rounded-xl flex items-center justify-center text-[#006d2f] dark:text-[#25D366]">
              <Rocket className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#131d23] dark:text-white">Smart Broadcasts</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Reach thousands of customers instantly with highly targeted, personalized messages. Bypass limitations and ensure high deliverability rates.
            </p>
          </div>
          
          <div className="flex-1 w-full bg-white dark:bg-[#202c33] rounded-xl border border-[#d9e4ec] dark:border-slate-800 overflow-hidden p-3 h-48 flex items-center justify-center shadow-xs">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByEuf7WW1GPM0tp3vMZksWCN904TFneZXe3oPljyp09wOs8kkvdT9AXHDX5-EnSwognIX57pZURUsP8Ul2p8TqazB0pH0Q6Ki6o34ca8tW8rdyFLxln4amXvrJVKz9r8hqRLfq4py_vk_E_kLM6EnpgTa94HrLuexOKlB5NsSvC9SaR1RLDZZ5dVIVpcc8FrXKQmCAFpEYwtTbLFlvRt3sttuOAksFeSFq-dB3WUVNSO2d6MQkFsnlrQ"
              alt="Campaign Builder UI Mockup"
              className="w-full h-full object-cover rounded shadow-xs"
            />
          </div>
        </div>

        {/* Feature 2: Medium (1 Column) */}
        <div className="bg-[#d9e4ec] dark:bg-[#202c33] rounded-2xl p-8 flex flex-col gap-4 border border-[#d9e4ec] dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-[#006d2f]/10 dark:bg-[#25D366]/20 rounded-xl flex items-center justify-center text-[#006d2f] dark:text-[#25D366]">
            <Bot className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-[#131d23] dark:text-white">AI Chatbots</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Provide 24/7 automated support. Train your bots on your own data to resolve common queries instantly.
          </p>
          <div className="mt-auto pt-4 flex gap-2">
            <span className="px-3 py-1 bg-white dark:bg-[#131d23] text-[#131d23] dark:text-slate-300 rounded-full font-semibold text-xs border border-[#bbcbb9] dark:border-slate-700">
              NLP
            </span>
            <span className="px-3 py-1 bg-white dark:bg-[#131d23] text-[#131d23] dark:text-slate-300 rounded-full font-semibold text-xs border border-[#bbcbb9] dark:border-slate-700">
              Custom Flows
            </span>
          </div>
        </div>

        {/* Feature 3: Medium (3 Columns Span) */}
        <div className="md:col-span-3 bg-white dark:bg-[#111b21] rounded-2xl p-8 flex flex-col gap-4 border border-[#d9e4ec] dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#eaf5fe]/50 pointer-events-none" />
          <div className="relative z-10 max-w-xl flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#eaf5fe] dark:bg-[#202c33] rounded-xl flex items-center justify-center text-[#006d2f] dark:text-[#25D366]">
              <LineChart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#131d23] dark:text-white">Advanced Analytics</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Track every conversion, message open rate, and bot interaction. Make data-driven decisions to optimize your communication strategy.
            </p>
            <Link href="/solutions" className="text-[#006d2f] dark:text-[#25D366] font-bold text-sm flex items-center gap-1 hover:underline w-fit">
              Explore reporting <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}


