import Hero from "@/components/sections/home/Hero";
import ServicesOverview from "@/components/sections/home/ServicesOverview";
import SecuritySection from "@/components/sections/home/SecuritySection";
import ContactInfo from "@/components/sections/home/ContactInfo";
import CTABanner from "@/components/sections/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <SecuritySection />
      <CTABanner />
      <ContactInfo />
    </>
  );
}
