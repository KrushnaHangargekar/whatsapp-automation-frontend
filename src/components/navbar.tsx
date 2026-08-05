import React, { useState } from 'react';
import { 
  MessageSquare, 
  Wrench, 
  Menu, 
  X, 
  QrCode, 
  Link2, 
  LayoutTemplate,
  ChevronDown,
  Play
} from 'lucide-react';
import { NavTab } from '@/types';

interface NavbarProps {
  currentTab: NavTab;
  onNavigate: (tab: NavTab) => void;
}

export function Navbar({ currentTab, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  const navLinks: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Workflows' },
    { id: 'solutions', label: 'Analytics' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'docs', label: 'Settings' },
  ];

  const toolsLinks: { id: NavTab; label: string; icon: any; desc: string }[] = [
    { id: 'link-generator', label: 'WhatsApp Link', icon: Link2, desc: 'Create wa.me click-to-chat links' },
    { id: 'qr-generator', label: 'QR Generator', icon: QrCode, desc: 'Generate WhatsApp QR codes' },
    { id: 'template-builder', label: 'Template Builder', icon: LayoutTemplate, desc: 'Interactive HSM bubble builder' },
  ];

  const handleNavClick = (tab: NavTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 py-3 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-9 h-9 rounded-xl bg-[#006d2f] dark:bg-[#25D366] flex items-center justify-center text-white dark:text-slate-950 font-bold shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-5 h-5 fill-current" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-[#006d2f] dark:text-[#25D366]">
              Wabtic
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#006d2f] dark:text-[#25D366] bg-[#006d2f]/10 dark:bg-[#25D366]/10'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#006d2f] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            {/* Tools Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setToolsDropdownOpen(true)}
              onMouseLeave={() => setToolsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  ['link-generator', 'qr-generator', 'template-builder'].includes(currentTab)
                    ? 'text-[#006d2f] dark:text-[#25D366] bg-[#006d2f]/10 dark:bg-[#25D366]/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#006d2f] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                Tools
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[280px] p-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                  <div className="px-3 py-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Developer & Growth Tools</div>

                  {toolsLinks.map((tool) => (
                    <button
                      key={tool.id}
                      onClick={() => handleNavClick(tool.id)}
                      className={`flex items-start gap-3 w-full p-2.5 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors rounded-xl text-left group ${
                        currentTab === tool.id ? 'bg-emerald-500/10' : ''
                      }`}
                    >
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-[#25D366]/10 group-hover:text-[#25D366] transition-colors">
                        <tool.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#25D366] transition-colors">
                          {tool.label}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {tool.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('demo')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  currentTab === link.id
                    ? 'text-[#25D366] bg-[#25D366]/10'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 pb-1 px-4 text-xs font-bold text-slate-400 uppercase">Tools</div>
            {toolsLinks.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleNavClick(tool.id)}
                className={`flex items-center gap-2 w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  currentTab === tool.id
                    ? 'text-[#25D366] bg-[#25D366]/10'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <tool.icon className="w-4 h-4" />
                {tool.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => handleNavClick('demo')}
              className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-bold bg-[#25D366] text-slate-950 shadow-lg shadow-[#25D366]/20"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
