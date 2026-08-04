'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-[#006d2f] rounded-2xl p-8 sm:p-12 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div className="space-y-3 text-center md:text-left max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Scale Your WhatsApp Outreach?
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
            Get started in minutes with automated broadcasts, AI auto-replies, and real-time campaign analytics.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-white text-[#006d2f] font-bold text-sm px-6 py-3.5 rounded-lg hover:bg-slate-100 transition-colors shadow-xs"
          >
            Get Started for Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}


