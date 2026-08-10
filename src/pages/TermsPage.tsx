import React from 'react';
import { Shield, FileText, AlertTriangle, CheckCircle2, Lock, Scale } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="pt-12 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
          <Scale className="w-3.5 h-3.5" /> Legal Framework & Governance
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Terms and <span className="text-[#25D366]">Conditions</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last Updated: August 10, 2026 | Applicable to all users of Wabtic platform
        </p>
      </div>

      {/* Critical RBI Mandatory Disclosure Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-amber-500/10 border border-amber-500/40 text-amber-200 space-y-4 shadow-xl">
        <div className="flex items-center gap-3 text-amber-400 font-bold text-lg">
          <AlertTriangle className="w-6 h-6 shrink-0" />
          Mandatory RBI Regulatory Disclosure: Closed System PPI Wallet
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          The Prepaid Wallet system integrated into the Wabtic SaaS platform is legally classified and operated strictly as a <strong>Closed System Prepaid Payment Instrument (Closed System PPI)</strong> under the Payment and Settlement Systems Act, 2007 and Reserve Bank of India (RBI) Master Directions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 text-slate-300">
            <span className="font-bold text-amber-400">1. Exclusive Service Utility:</span> Wallet funds can ONLY be used to pay for direct Prowexa services (Meta API conversation charges & AI credits).
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 text-slate-300">
            <span className="font-bold text-amber-400">2. No Cash Withdrawals:</span> Cash withdrawal, redemption into bank accounts, or P2P transfers are strictly prohibited.
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 text-slate-300">
            <span className="font-bold text-amber-400">3. Non-Interest Bearing:</span> Wallet balances carry zero interest accrual.
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/20 text-slate-300">
            <span className="font-bold text-amber-400">4. Exemption Status:</span> This strict closed-loop limitation exempts Prowexa from open-wallet capital licensing.
          </div>
        </div>
      </div>

      {/* Main Legal Content */}
      <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#25D366]" /> 1. Agreement & Identity
          </h2>
          <p>
            This agreement is entered into between you (the "User" or "Client") and <strong>PROWEXA TECHNOLOGIES PRIVATE LIMITED</strong> (CIN: <code>U62090PN2025PTC249889</code>), registered at <em>S.No.50/14/4/4, Near Patil House, Gokulnagar, Haveli, Pune, Maharashtra, 411041, India</em>. By creating an account or accessing our services, you agree to be bound by these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#25D366]" /> 2. Meta WhatsApp Business API Usage Policy
          </h2>
          <p>
            Users must comply with Meta's Official WhatsApp Business Terms of Service and Commerce Policy. Spamming, unauthorized broadcasts, or transmitting illegal content via the API will result in immediate account termination.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#25D366]" /> 3. Dual-Billing & Wallet Mechanics
          </h2>
          <p>
            Our service utilizes a dual-tier payment structure:
          </p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li><strong>Software Subscription:</strong> Recurring SaaS fee covering inbox UI, analytics, and flow builder access.</li>
            <li><strong>Prepaid Conversation & AI Wallet:</strong> Pay-as-you-go balance consumed based on Meta's official category rates (Marketing, Utility, Authentication, Service) and Gemini AI credit consumption.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#25D366]" /> 4. Payment Gateway & PCI DSS Compliance
          </h2>
          <p>
            All online credit card, UPI, and net banking transactions are processed via PCI DSS v4.0.1 compliant gateways (Razorpay & Stripe). Prowexa does not store raw credit card numbers or banking passwords on its servers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#25D366]" /> 5. Governing Law & Dispute Jurisdiction
          </h2>
          <p>
            These terms are governed by the laws of India. Any legal proceedings or disputes arising under this contract shall fall exclusively within the jurisdiction of the courts located in Pune, Maharashtra, India.
          </p>
        </section>
      </div>
    </div>
  );
}
