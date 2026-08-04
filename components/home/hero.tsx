'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Sparkles, Star, MessageSquare, BarChart3, Users, LayoutDashboard, PlayCircle, Radio } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#f5faff] dark:bg-[#131d23]">
      {/* Background radial glow */}
      <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#25d366]/15 dark:bg-[#25d366]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eaf5fe] dark:bg-[#202c33] border border-[#bbcbb9] dark:border-slate-800 text-xs font-semibold text-[#006d2f] dark:text-[#25D366] shadow-xs">
              <span>New: AI Agent Routing</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#131d23] dark:text-white tracking-tight leading-[1.1]">
              Automate your <span className="text-[#006d2f] dark:text-[#25D366]">WhatsApp</span> Growth.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              The most powerful automation platform for businesses using WhatsApp. Send broadcasts, build bots, and scale your customer support with intelligent routing and deep analytics.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/demo"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#006d2f] hover:bg-[#005523] text-white font-bold text-sm shadow-sm hover:shadow-md transition-all text-center"
              >
                Get Started for Free
              </Link>

              <Link
                href="/demo"
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white dark:bg-[#202c33] text-[#006d2f] dark:text-[#25D366] border border-[#006d2f] dark:border-[#25D366] font-bold text-sm hover:bg-[#eaf5fe] dark:hover:bg-[#131d23] transition-all flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-4 h-4" />
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Broadcast Mockup from Stitch */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none hidden md:block">
            <div className="relative bg-white dark:bg-[#202c33] rounded-xl shadow-[0px_8px_16px_rgba(17,27,33,0.08)] border border-slate-200 dark:border-slate-800 p-4 flex flex-col gap-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-2 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-[#006d2f] dark:text-[#25D366] animate-pulse" />
                  <span className="font-bold text-xs text-[#131d23] dark:text-white">Active Broadcast</span>
                </div>
                <span className="px-2.5 py-0.5 bg-[#E8F8F5] text-[#006d2f] dark:bg-[#25D366]/20 dark:text-[#25D366] rounded-full font-bold text-[10px]">
                  Sending...
                </span>
              </div>

              {/* 3D Dashboard Image Preview */}
              <div className="relative rounded-lg overflow-hidden border border-slate-100 dark:border-slate-800">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL33gyZYmwzopLtbJciZ5etq-KjpFLEw_5KIQ7vKmY7dRfK4OR_kTUofMNzNVQHrMalQgDOZfTYOoJ4R-oquFldFWk6O4zQy1lN9f-cbk6ua-5PHG6Tx-qhXvWh3tZk1UyHsSE6PhV_DrZI-9xAodOTYWJVESRwGQ7YtYiGkrVvaeFTy_GO0RS6vcYHnUV5LCDblu9BXbRXsyExu-bLp_aHDpOm3EcpJEOe_b1bE5qW6bnZDY_kdI2-w"
                  alt="Wabtic Automation Dashboard"
                  className="w-full h-64 object-cover"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



