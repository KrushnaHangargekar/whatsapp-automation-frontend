'use client';

import React from 'react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-[#006d2f] rounded-[24px] p-10 sm:p-14 flex flex-col items-center text-center gap-6 relative overflow-hidden shadow-lg">
        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-400/30 via-transparent to-transparent pointer-events-none" />
        
        <h2 className="text-3xl sm:text-5xl font-black text-white relative z-10 tracking-tight leading-tight max-w-2xl">
          Ready to scale your communications?
        </h2>
        
        <p className="text-base sm:text-lg text-emerald-100 max-w-xl relative z-10 font-normal leading-relaxed">
          Join thousands of businesses automating their WhatsApp workflows with Wabtic today.
        </p>
        
        <div className="mt-2 relative z-10">
          <Link
            href="/demo"
            className="inline-block bg-white text-[#006d2f] font-bold text-base px-8 py-4 rounded-xl shadow-sm hover:shadow-md hover:bg-slate-50 transition-all active:scale-95"
          >
            Get Started for Free
          </Link>
        </div>
      </div>
    </section>
  );
}

