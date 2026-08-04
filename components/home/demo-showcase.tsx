'use client';

import React from 'react';
import { Star } from 'lucide-react';

export function DemoShowcase() {
  const testimonials = [
    {
      quote: '"Wabtic completely transformed how we handle customer inquiries. The automated workflows saved us over 40 hours a week."',
      name: 'Sarah Jenkins',
      title: 'Head of Support, TechFlow',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByClc4hKjMscTLxAwkbxRIM-_MuUZ5l0Dba81yYUq8ll_LZc8fsQXLSjWKPm8N0B9jgLkGNISbMS-mM_nyZT5LEBGrVohgEeFlcKAz2aE2ccUWrVx04HpWOMYzLia502FQ-yS0atwcrNcgMk8-_KtBLHv--RiM_q-MLEZpQae_ajFAFNDaKxp-A_wGDKYAZs5jh7cE5shYwL0poIjTIlHlJB8kTB242Frr-4lDNmjGhzyMbMza02PzoA'
    },
    {
      quote: '"The broadcast feature is incredible. Deliverability is near 100%, and the analytics help us iterate on our messaging quickly."',
      name: 'David Chen',
      title: 'Marketing Director, GrowthCo',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJF8vXca26NR_2m2bETmgOD19A0KV3a31Fdgo34Rwfcb0UAg87mvaaY_7SIS7jFPMqfruiNW-zFR8F5RRxMrDw1YbT5XfvnLP7BZYHkrcskUbuKm1hf2e_4EsX7sTVFW14U6BxlHA4WZkzkOini79uxk5693XBTfeJD0efDDrFyeggydabcumFMr4v6Yt52HOVwtI2Xh0mRtDoLu_7_BSwfNTCM5tSgg3RsuAaqQeJmeI9fJn5V0ygPw'
    },
    {
      quote: '"Setting up custom AI responses was surprisingly easy. It integrates seamlessly into our existing stack. Highly recommend."',
      name: 'Elena Rodriguez',
      title: 'Operations Lead, Veloce',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvPJbuBZaYLT9OBCXJrP8tBmwJC_OFGi3EWBN77JGEDGhLGnLL4n0tePjjN96fwCBozZbv3AKeY9p92XZcbmctvIRCXhbNAWZi1X5-8kJQqFmOBOSoFG0nGakF4r7q29ShnsTLZkYMrDy-pF-H-niWzFHI0YnAi9caji3i0whwKSPXAGbR5SPjmpLMYYL2KrGADYvQ_xCLDTngGfnNL3iP0E6o_Nh0BOUcehuHYhLCoUwr47hnpJG1hg'
    }
  ];

  return (
    <section className="w-full bg-[#eaf5fe] dark:bg-[#111b21] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <h2 className="text-3xl font-extrabold text-[#131d23] dark:text-white text-center tracking-tight">
          Loved by Support Teams
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#202c33] p-6 rounded-2xl shadow-xs border border-slate-200 dark:border-slate-800 flex flex-col gap-4"
            >
              <div className="flex gap-1 text-[#25d366]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow font-normal">
                {card.quote}
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={card.avatar}
                  alt={card.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                />
                <div>
                  <p className="font-bold text-xs text-[#131d23] dark:text-white">{card.name}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{card.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
