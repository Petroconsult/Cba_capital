import Image from "next/image";
import Button from "@/components/ui/Button";

export default function SecuritySection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] text-center mb-14 tracking-tight">
          The Path to Secure Capital
        </h2>

        <div className="group flex flex-col md:flex-row items-center bg-[#f0f4f8] rounded-2xl overflow-hidden transition-shadow duration-500 ease-out hover:shadow-[0_20px_60px_-10px_rgba(10,31,68,0.18)]">

          {/* Image side */}
          <div className="relative w-full md:w-1/2 min-h-[320px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800"
              alt="Digital security and financial protection"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle navy wash */}
            <div className="absolute inset-0 bg-[#0a1f44] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
          </div>

          {/* Content side */}
          <div className="relative w-full md:w-1/2 p-10 lg:p-14">
            {/* Animated top accent bar */}
            <div className="absolute top-0 left-10 lg:left-14 right-10 lg:right-14 h-[3px] bg-[#0a1f44] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />

            <h3 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-6 leading-tight transition-transform duration-500 ease-out group-hover:translate-x-1">
              Security is Our Priority
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-8 transition-transform duration-500 ease-out group-hover:translate-x-1">
              At CBA Capital, we understand that short-term business financing
              requires both speed and uncompromising security. Our platform
              integrates advanced contract generation and real-time payment
              tracking, built into a mobile-friendly design that adheres to the
              highest professional financial standards.
            </p>
            <div className="transition-transform duration-500 ease-out group-hover:translate-x-1">
              <Button href="/services" variant="outline" size="md">
                Learn Policy
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}