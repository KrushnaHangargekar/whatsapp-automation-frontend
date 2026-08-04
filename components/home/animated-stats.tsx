'use client';

import React from 'react';
import { MessageSquare, Send, Award, Clock } from 'lucide-react';

export function AnimatedStats() {
  const stats = [
    { label: 'Monthly Messages Processed', value: '15M+', sub: 'High throughput pipeline', icon: MessageSquare, color: 'text-emerald-500' },
    { label: 'Delivery Rate SLA', value: '99.84%', sub: 'Instant Meta carrier delivery', icon: Send, color: 'text-teal-500' },
    { label: 'Global Businesses', value: '500+', sub: 'Active enterprise clients', icon: Award, color: 'text-blue-500' },
    { label: 'Average Response Latency', value: '< 45ms', sub: 'Real-time REST API cluster', icon: Clock, color: 'text-purple-500' },
  ];

  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 hover:scale-105 transition-transform duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {stat.value}
                </span>
              </div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{stat.label}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
