'use client';

import { AboutSection } from './AboutSection';
import { BookingCTASection } from './BookingCTASection';
import { ExpertsSection } from './ExpertsSection';
import { HeroSection } from './HeroSection';
import { ProductsSection } from './ProductsSection';
import { ServicesSection } from './ServicesSection';
import { StandardsSection } from './StandardsSection';
import { TestimonialsSection } from './TestimonialsSection';

export function MommyLanding() {
  return (
    <div className="bg-[#f7fcff] text-[#234e70]">
      <HeroSection />
      <AboutSection />
      <StandardsSection />
      <ServicesSection />
      <ProductsSection />
      <ExpertsSection />
      <TestimonialsSection />
      <BookingCTASection />
    </div>
  );
}
