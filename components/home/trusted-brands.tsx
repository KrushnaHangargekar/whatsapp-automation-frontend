'use client';

import React from 'react';
import { Store, HeartPulse, GraduationCap, Landmark, Truck, Building2 } from 'lucide-react';

export function TrustedBrands() {
  const brands = [
    { name: 'Apex Retail', icon: Store, text: 'E-Commerce' },
    { name: 'CareFirst Health', icon: HeartPulse, text: 'Healthcare' },
    { name: 'Horizon Global', icon: GraduationCap, text: 'Education' },
    { name: 'FinPulse Capital', icon: Landmark, text: 'Fintech' },
    { name: 'Express Cargo', icon: Truck, text: 'Logistics' },
    { name: 'Skyline Properties', icon: Building2, text: 'Real Estate' },
  ];

  return (
    <section className="py-10 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Trusted by Enterprise Teams & Fast-Growing Brands
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand, i) => {
            const Icon = brand.icon;
            return (
              <div
                key={i}
                className="flex items-center justify-center gap-2 p-3 rounded-md bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 font-semibold text-xs"
              >
                <Icon className="w-4 h-4 text-[#006d2f] dark:text-[#25D366]" />
                <span>{brand.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


