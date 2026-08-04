import { QrGeneratorComponent } from '@/components/qr-generator-component';

export default function QrGeneratorPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          WhatsApp QR Code Generator
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Generate scannable high-resolution WhatsApp QR codes with custom branding colors for flyers, product packaging, and print media.
        </p>
      </div>

      <QrGeneratorComponent />
    </div>
  );
}
