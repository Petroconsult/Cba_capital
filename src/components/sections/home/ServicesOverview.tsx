import Image from "next/image";
import Card from "@/components/ui/Card";

export default function ServicesOverview() {
  return (
    <section className="w-full bg-[#f0f4f8] py-16 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#0a1f44] bg-white rounded-full border border-gray-200">
            Our Services
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-[#0a1f44] mb-10 tracking-tight">
          Superior Finance Infrastructure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <Card className="overflow-hidden rounded-2xl">
            <div className="relative w-full h-72">
              <Image
                src="/images/business-woman-office.jpg"
                alt="Business woman in modern office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                Short-Term Business Finance
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Access rapid capital solutions designed to bridge liquidity gaps
                and support high-growth business cycles with secure lending at
                competitive rates.
              </p>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="overflow-hidden rounded-2xl">
            <div className="relative w-full h-48">
              <Image
                src="/images/contract-tablet.jpg"
                alt="Contract on tablet"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                Contract Generation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Automated legal compliance tools that generate secure,
                enforceable contracts instantly for seamless operations.
              </p>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="overflow-hidden rounded-2xl">
            <div className="relative w-full h-48">
              <Image
                src="/images/dashboard-chart.jpg"
                alt="Financial dashboard with charts"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3">
                Payment Tracking
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Complete transparency with our secure portal. Track
                installments, interest accruals, and schedules in real-time.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}