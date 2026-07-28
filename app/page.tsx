import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ExperiencePreview } from "@/components/sections/experience-preview";
import { AISpotlight } from "@/components/sections/ai-spotlight";
import { SkillsGrid } from "@/components/sections/skills-grid";
import { Companies } from "@/components/sections/companies";
import { Testimonials } from "@/components/sections/testimonials";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedWork />
      <ExperiencePreview />
      <AISpotlight />
      <SkillsGrid />
      <Companies />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
