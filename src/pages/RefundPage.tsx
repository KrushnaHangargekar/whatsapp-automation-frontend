import React from 'react';
import { RefreshCcw, Clock, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';

export function RefundPage() {
  return (
    <div className="pt-12 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
          <RefreshCcw className="w-3.5 h-3.5" /> Commercial Terms & Guarantee
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Refund & <span className="text-[#25D366]">Cancellation Policy</span>
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Transparent, fair refund guidelines for SaaS subscriptions and prepaid wallet balances.
        </p>
      </div>

      {/* Timeline Highlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">5-7 Business Days</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Standard processing timeframe for approved refund amounts back to source payment method.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">7-Day Money-Back</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Full refund available on initial SaaS subscription plans within 7 days if unsatisfied.</p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-2">
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center font-bold">
            <AlertCircle className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Unspent Wallet Refund</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Unused prepaid Meta conversation balances can be refunded upon formal account closing.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">1. SaaS Subscription Cancellations</h2>
          <p>
            You may cancel your Wabtic monthly or annual subscription at any time from your account settings panel. Cancellation will take effect at the end of the current billing cycle, ensuring zero interruption during paid active periods.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">2. Prepaid Conversation & AI Wallet Refunds</h2>
          <p>
            In accordance with our <strong>Closed System PPI</strong> framework, funds added to your Meta API conversation wallet are dedicated to API traffic. If you choose to terminate your business relationship with Prowexa Technologies Private Limited:
          </p>
          <ul className="list-disc list-inside text-xs space-y-1">
            <li>Any <strong>unspent, positive balance</strong> in your wallet will be refunded to your original bank/card account.</li>
            <li>Messages already transmitted via Meta Graph API or AI credits already consumed are non-refundable.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">3. How to Request a Refund</h2>
          <p>
            To initiate a refund request, submit an email to <code>support@wabtic.com</code> or <code>billing@prowexa.com</code> with your Account ID, payment transaction reference, and reason for request. Approved refunds will reflect in your bank statement within 5 to 7 business days.
          </p>
        </section>
      </div>
    </div>
  );
}
