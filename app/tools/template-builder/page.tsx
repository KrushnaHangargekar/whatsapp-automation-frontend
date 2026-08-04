import { TemplateBuilderComponent } from '@/components/template-builder-component';

export default function TemplateBuilderPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          WhatsApp HSM Template Builder
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Build interactive Meta-compliant WhatsApp template messages with live chat bubble previews, header media, and quick action buttons.
        </p>
      </div>

      <TemplateBuilderComponent />
    </div>
  );
}
