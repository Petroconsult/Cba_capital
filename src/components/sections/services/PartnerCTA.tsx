import Button from "@/components/ui/Button";

export default function PartnerCTA() {
  return (
    <>
      <section className="w-full bg-white py-16" id="contact">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-12 h-0.5 bg-[#f26522] mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-5 tracking-tight">
            Partner with CBA Capital
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We invite you to reach out to our specialist lending team to discuss
            your funding requirements. Please use our contact form below to
            initiate a private consultation regarding your business needs.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#0a1f44] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
            Let&apos;s Discuss Your Funding Requirements
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
            Speak with a CBA Capital expert to tailor a solution for your
            business. We prioritize personal service over automated applications.
          </p>
          <Button
            href="mailto:partnerships@cbacapital.com"
            variant="outline-white"
            size="lg"
          >
            CONTACT TEAM
          </Button>
        </div>
      </section>
    </>
  );
}