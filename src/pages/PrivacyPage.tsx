import React from 'react';
import { ShieldCheck, Lock, Database, Server, Eye, FileCheck } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="pt-12 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
          <ShieldCheck className="w-3.5 h-3.5" /> Data Security & Compliance
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Privacy <span className="text-[#25D366]">Policy</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last Updated: August 10, 2026 | PROWEXA TECHNOLOGIES PRIVATE LIMITED
        </p>
      </div>

      {/* RBI Data Localization Highlight Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-emerald-500/40 text-white space-y-4 shadow-xl">
        <div className="flex items-center gap-3 text-[#25D366] font-bold text-lg">
          <Database className="w-6 h-6 shrink-0" />
          RBI Data Localization & Indian Residency Compliance (2025 Standard)
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          In strict compliance with Reserve Bank of India (RBI) directives, 100% of transaction data, customer payment records, and WhatsApp contact identifiers belonging to Indian users are stored on secure cloud servers situated within India (AWS / GCP Mumbai & Hyderabad data centers).
        </p>
      </div>

      {/* Main Privacy Body */}
      <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#25D366]" /> 1. Information We Collect
          </h2>
          <p>
            When registering for Wabtic, we collect corporate identity metadata including company name, GSTIN, registered physical address, official email, phone number, and WhatsApp Business Account (WABA) identifiers required to provision Meta Graph API connections.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#25D366]" /> 2. WhatsApp Chat Logs & Data Protection
          </h2>
          <p>
            Customer chat logs processed through our Shared Inbox and Visual Flow Builder are encrypted end-to-end in transit using TLS 1.3 and at rest using AES-256 encryption. Prowexa does not sell or share customer contact databases with third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Server className="w-5 h-5 text-[#25D366]" /> 3. Payment Tokenization & PCI DSS Security
          </h2>
          <p>
            Online checkout for software subscriptions and wallet top-ups is handled directly via Razorpay and Stripe hosted iframe modal APIs. No raw credit/debit card details are stored or logged on Prowexa infrastructure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#25D366]" /> 4. Data Deletion & Privacy Rights
          </h2>
          <p>
            Clients may request full export or permanent deletion of their contact databases and campaign logs at any time by contacting our Privacy Officer at <code>privacy@prowexa.com</code> or <code>support@wabtic.com</code>.
          </p>
        </section>
      </div>
    </div>
  );
}
