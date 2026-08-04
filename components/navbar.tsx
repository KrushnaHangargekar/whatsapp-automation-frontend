'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './theme-toggle';
import { 
  MessageSquare, 
  Wrench, 
  Menu, 
  X, 
  ArrowRight,
  QrCode,
  Link2,
  LayoutTemplate,
  Bell,
  User,
  ChevronDown
} from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Workflows' },
    { href: '/solutions', label: 'Analytics' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/docs', label: 'Settings' },
  ];

  const toolsLinks = [
    { href: '/tools/link-generator', label: 'WhatsApp Link', icon: Link2, desc: 'Create wa.me click-to-chat links' },
    { href: '/tools/qr-generator', label: 'QR Generator', icon: QrCode, desc: 'Generate WhatsApp QR codes' },
    { href: '/tools/template-builder', label: 'Template Builder', icon: LayoutTemplate, desc: 'Interactive HSM bubble builder' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-2xl ${
          scrolled 
            ? 'bg-white/90 dark:bg-[#111b21]/90 backdrop-blur-xl shadow-md border border-slate-200/80 dark:border-slate-800/80 px-4 py-2' 
            : 'bg-white/80 dark:bg-[#111b21]/80 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 px-4 py-2.5'
        }`}>
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#006d2f] flex items-center justify-center text-white font-black shadow-sm group-hover:scale-105 transition-transform duration-300">
                <MessageSquare className="w-4 h-4 fill-current" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-[#006d2f] dark:text-[#25D366]">
                Wabtic
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'text-[#006d2f] dark:text-[#25D366] bg-[#006d2f]/10 dark:bg-[#25D366]/10'
                        : 'text-slate-600 dark:text-slate-300 hover:text-[#006d2f] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Tools Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setToolsDropdownOpen(true)}
                onMouseLeave={() => setToolsDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#006d2f] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <Wrench className="w-3.5 h-3.5" />
                  Tools
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {toolsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[300px] p-2 bg-white dark:bg-[#202c33] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
                    <div className="px-3 py-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">Developer Tools</div>

                    {toolsLinks.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors rounded-xl group"
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
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />

              <Link
                href="/demo"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#25D366] hover:bg-[#20bd5a] text-[#111b21] shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
              >
                Book Demo
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center gap-2">
              <ThemeToggle />
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
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-[#091624]/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl px-4 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? 'text-[#25D366] bg-[#25D366]/10'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 rounded-xl text-sm font-bold bg-[#25D366] text-[#111b21] shadow-lg shadow-[#25D366]/20"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
