import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="w-full bg-[#0a1f44] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Button href="/services" variant="outline-white" size="md">
            Request a Quote
          </Button>
          <h2 className="text-3xl md:text-4xl font-black text-white text-center leading-tight">
            Secure Your Future with Fast Business Financing
          </h2>
          <Button href="/services" variant="outline-white" size="md">
            Talk to Experts
          </Button>
        </div>
      </div>
    </section>
  );
}