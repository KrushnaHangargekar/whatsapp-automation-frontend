import { WhatsAppLinkGeneratorComponent } from '@/components/whatsapp-link-generator-component';

export default function LinkGeneratorPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          WhatsApp Link Generator
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Create free direct wa.me click-to-chat links with custom pre-filled message greetings for your marketing campaigns.
        </p>
      </div>

      <WhatsAppLinkGeneratorComponent />
    </div>
  );
}
