import React from 'react';
import { MessageSquare, Heart, Shield, Terminal, Zap } from 'lucide-react';
import { NavTab } from '@/types';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#25D366] flex items-center justify-center text-slate-950 font-bold">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Wabtic</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Official WhatsApp Cloud API automation platform. Scale customer conversations, broadcast marketing, and build AI chatbots.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono">
              <Shield className="w-4 h-4" />
              Meta Tech Partner Compliant
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => onNavigate('home')} className="hover:text-emerald-400 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-emerald-400 transition-colors">Workflows & Automations</button></li>
              <li><button onClick={() => onNavigate('solutions')} className="hover:text-emerald-400 transition-colors">Analytics & BI</button></li>
              <li><button onClick={() => onNavigate('pricing')} className="hover:text-emerald-400 transition-colors">Pricing Plans</button></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Developer Tools</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => onNavigate('link-generator')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><Zap className="w-3 h-3 text-emerald-400" /> WhatsApp Link Generator</button></li>
              <li><button onClick={() => onNavigate('qr-generator')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><Zap className="w-3 h-3 text-emerald-400" /> WhatsApp QR Code Maker</button></li>
              <li><button onClick={() => onNavigate('template-builder')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><Zap className="w-3 h-3 text-emerald-400" /> HSM Template Builder</button></li>
              <li><button onClick={() => onNavigate('demo')} className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"><Terminal className="w-3 h-3 text-emerald-400" /> API Sandbox Console</button></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Support & API</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => onNavigate('docs')} className="hover:text-emerald-400 transition-colors">API Documentation</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-emerald-400 transition-colors">Contact Technical Support</button></li>
              <li><button onClick={() => onNavigate('demo')} className="hover:text-emerald-400 transition-colors">Request Enterprise Demo</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Wabtic Inc. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Built with pure React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
