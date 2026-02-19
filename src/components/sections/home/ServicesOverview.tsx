import Image from "next/image";
import Card from "@/components/ui/Card";

export default function ServicesOverview() {
  return (
    <section className="w-full bg-[#f0f4f8] py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-medium text-[#0a1f44] bg-white rounded-full border border-gray-200">
            Finance Infrastructure
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-[#0a1f44] mb-12 tracking-tight max-w-3xl">
          Structured Capital. Engineered for Growth.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <Card className="overflow-hidden rounded-2xl bg-white">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85&auto=format&fit=crop"
                alt="Modern architectural structure representing stability and foundation"
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
                Precision liquidity engineered to support disciplined expansion,
                bridge capital gaps, and reinforce operational continuity without
                compromising long-term structure.
              </p>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="overflow-hidden rounded-2xl bg-white">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85&auto=format&fit=crop"
                alt="Professional reviewing structured legal documents"
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
                Digitally structured agreements built for enforceability,
                transparency, and speed — integrating compliance directly into
                your capital workflow.
              </p>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="overflow-hidden rounded-2xl bg-white">
            <div className="relative w-full h-56">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format&fit=crop"
                alt="Clean financial analytics dashboard representing clarity and control"
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
                Real-time visibility into obligations, accruals, and schedules —
                delivering complete operational control through secure,
                centralized monitoring.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
