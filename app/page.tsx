import { Hero } from '@/components/home/hero';
import { TrustedBrands } from '@/components/home/trusted-brands';
import { KeyBenefits } from '@/components/home/key-benefits';
import { DemoShowcase } from '@/components/home/demo-showcase';
import { CTASection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <TrustedBrands />
      <KeyBenefits />
      <DemoShowcase />
      <CTASection />
    </div>
  );
}

