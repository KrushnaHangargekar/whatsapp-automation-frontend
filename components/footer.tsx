'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-[#d9e4ec] dark:bg-[#111b21] border-t border-[#bbcbb9] dark:border-slate-800 py-6 px-4 sm:px-8 text-xs font-normal text-slate-600 dark:text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-xl text-[#131d23] dark:text-white tracking-tight">Wabtic</span>
          <span className="opacity-80">© {new Date().getFullYear()} Wabtic Automation. All rights reserved.</span>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/features" className="hover:text-[#006d2f] dark:hover:text-[#25D366] underline transition-colors">Product</Link>
          <Link href="/docs" className="hover:text-[#006d2f] dark:hover:text-[#25D366] underline transition-colors">Terms</Link>
          <Link href="/docs" className="hover:text-[#006d2f] dark:hover:text-[#25D366] underline transition-colors">Privacy</Link>
          <Link href="/contact" className="hover:text-[#006d2f] dark:hover:text-[#25D366] underline transition-colors">Support</Link>
        </nav>
      </div>
    </footer>
  );
}


