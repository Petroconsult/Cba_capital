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
          <Card className="group overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(10,31,68,0.18)]">
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85&auto=format&fit=crop"
                alt="Modern architectural structure representing stability and foundation"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Subtle color wash on hover */}
              <div className="absolute inset-0 bg-[#0a1f44] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </div>
            <div className="p-6 relative">
              {/* Animated left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-[#0a1f44] rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out origin-top" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3 transition-transform duration-500 group-hover:translate-x-2">
                Short-Term Business Finance
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed transition-transform duration-500 group-hover:translate-x-2">
                Precision liquidity engineered to support disciplined expansion,
                bridge capital gaps, and reinforce operational continuity without
                compromising long-term structure.
              </p>
              {/* Arrow that slides in */}
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#0a1f44] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 delay-75">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="group overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(10,31,68,0.18)]">
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85&auto=format&fit=crop"
                alt="Professional reviewing structured legal documents"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#0a1f44] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </div>
            <div className="p-6 relative">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-[#0a1f44] rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out origin-top" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3 transition-transform duration-500 group-hover:translate-x-2">
                Contract Generation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed transition-transform duration-500 group-hover:translate-x-2">
                Digitally structured agreements built for enforceability,
                transparency, and speed — integrating compliance directly into
                your capital workflow.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#0a1f44] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 delay-75">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="group overflow-hidden rounded-2xl bg-white transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_60px_-10px_rgba(10,31,68,0.18)]">
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format&fit=crop"
                alt="Clean financial analytics dashboard representing clarity and control"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-[#0a1f44] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </div>
            <div className="p-6 relative">
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-[#0a1f44] rounded-r-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out origin-top" />
              <h3 className="text-xl font-bold text-[#0a1f44] mb-3 transition-transform duration-500 group-hover:translate-x-2">
                Payment Tracking
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed transition-transform duration-500 group-hover:translate-x-2">
                Real-time visibility into obligations, accruals, and schedules —
                delivering complete operational control through secure,
                centralized monitoring.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#0a1f44] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500 delay-75">
                Learn more
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}