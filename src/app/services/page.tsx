import ServiceHero from "@/components/sections/services/ServiceHero";
import PartnerCTA from "@/components/sections/services/PartnerCTA";
import LoanCard from "@/components/sections/services/LoanCard";

interface ServiceLoan {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  bg: string;
  showContactButton?: boolean;
}

const LOAN_PRODUCTS: ServiceLoan[] = [
  {
    id: "short-term-loans",
    title: "Short Term Business Loans",
    description:
      "Secure immediate liquidity for your enterprise with flexible funding terms ranging from 9 to 18 months. Designed for UK businesses requiring rapid momentum and transparent repayment structures.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Professional reviewing financial charts in a modern office",
    imageLeft: true,
    bg: "bg-[#f0f4f8]",
  },
  {
    id: "bridging-loans",
    title: "Bridging Loans",
    description:
      "Fast-acting liquidity to secure opportunities. We bridge the gap between financial milestones with transparent terms and no hidden fees, designed specifically for the pace and suitability of the UK market.",
    image:
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Aerial view of Tower Bridge representing financial transition",
    imageLeft: false,
    bg: "bg-white",
  },
  {
    id: "acquisition-loans",
    title: "Business Acquisition Loans",
    description:
      "Strategic funding designed for UK enterprises looking to expand through acquisition. We provide suitability-matched loan structures with an emphasis on speed and transparency, ensuring your business can act decisively on growth opportunities without hidden complexities.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Business professionals completing an acquisition deal",
    imageLeft: true,
    bg: "bg-[#f0f4f8]",
  },
  {
    id: "real-estate-loans",
    title: "Real Estate & Mortgage Loans",
    description:
      "We offer expert commercial property lending solutions designed for UK portfolio expansion. From high-value acquisitions to strategic development projects, CBA Capital provides transparent, high-speed mortgages tailored to the unique dynamics of the British property market. Our process emphasizes clarity and speed, ensuring you can secure opportunities with confidence.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85&auto=format&fit=crop",
    imageAlt:
      "Luxury UK commercial property representing real estate investment",
    imageLeft: false,
    bg: "bg-white",
    showContactButton: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />

      {/* Overview grid */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LOAN_PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="border border-gray-100 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-black text-[#0a1f44] mb-4 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sections */}
      <section className="w-full py-4 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4 py-8">
          {LOAN_PRODUCTS.map((p) => (
            <LoanCard
              key={p.id}
              product={p}
              imageLeft={p.imageLeft}
              showContactButton={p.showContactButton}
            />
          ))}
        </div>
      </section>

      <PartnerCTA />
    </>
  );
}