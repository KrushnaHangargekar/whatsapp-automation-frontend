import React, { useState } from 'react';
import { MessageSquare, Heart, Shield, Terminal, Zap, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { NavTab } from '@/types';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900/80 pt-16 pb-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid: 2 columns on mobile (Platform left, Dev Tools right), 5 columns on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand Info (Spans full width on mobile, 2 columns on desktop) */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#25D366] flex items-center justify-center text-slate-950 font-extrabold shadow-md shadow-emerald-500/20">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">Wabtic</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Official Meta WhatsApp Cloud API automation platform. Scale customer conversations, broadcast campaigns, and deploy autonomous AI chatbots.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono font-medium pt-1">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Meta Tech Partner Compliant</span>
            </div>
          </div>

          {/* Column 1: Platform Links (Left side on Mobile) */}
          <div className="col-span-1 lg:col-span-1 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-100">Platform</h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors text-slate-300 text-left">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('features')} className="hover:text-emerald-400 transition-colors text-slate-300 text-left">
                  Workflows & Automations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-emerald-400 transition-colors text-slate-300 text-left">
                  Analytics & BI Insights
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-emerald-400 transition-colors text-left font-medium text-emerald-400">
                  Pricing Plans & Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Developer Tools (Right side on Mobile) */}
          <div className="col-span-1 lg:col-span-1 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-100">Developer Tools</h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => onNavigate('link-generator')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300 text-left">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> WhatsApp Link Generator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('qr-generator')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300 text-left">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> WhatsApp QR Code Maker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('template-builder')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300 text-left">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> HSM Template Builder
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('demo')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5 text-slate-300 text-left">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> API Sandbox Console
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Newsletter & Stay Updated */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-100">Stay Connected</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Get WhatsApp API updates & automation guides delivered to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> Subscribed successfully!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors pr-10"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1 bottom-1 px-2.5 bg-emerald-400 hover:bg-emerald-500 text-slate-950 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center justify-center"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span className="sr-only">Subscribe</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright on left, links on right */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 pt-2">
          <p>© {new Date().getFullYear()} Wabtic Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <button onClick={() => onNavigate('docs')} className="text-slate-300 hover:text-emerald-400 transition-colors">API Docs</button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="text-slate-300 hover:text-emerald-400 transition-colors">Contact Support</button>
          </div>
        </div>

      </div>
    </footer>
  );
}



