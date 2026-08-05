import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare, Send, CheckCircle2, RefreshCw, Clock } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 800);
  };

  return (
    <div className="pt-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Get in Touch With <span className="text-[#25D366]">Our Team</span>
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          Have technical questions about our WhatsApp Business API, SLA tiers, or custom infrastructure? We are here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left 5 Cols */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* WhatsApp Direct Badge */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 space-y-3 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25D366] text-slate-950 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">Direct WhatsApp Support</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Instant response from our WhatsApp Desk</p>
              </div>
            </div>

            <a
              href="https://wa.me/14155552671?text=Hi%20Wabtic%20Team,%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              Chat Directly on WhatsApp (+1 415-555-2671)
            </a>
          </div>

          {/* Contact Cards */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Global Headquarters</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-0.5">
                  548 Market Street, Suite 900<br />
                  San Francisco, CA 94104, United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Email Support</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">support@wabtic.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-t border-slate-200 dark:border-slate-800 pt-4">
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-emerald-500">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Support Hours</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">24/7 Global Coverage for Enterprise SLA Plans</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right 7 Cols: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send Us a Message</h2>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">Our customer success manager will reply to your email shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white font-semibold text-xs rounded-xl mt-2 cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Contact Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
