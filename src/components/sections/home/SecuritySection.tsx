import Image from "next/image";
import Button from "@/components/ui/Button";

export default function SecuritySection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-[#0a1f44] text-center mb-14 tracking-tight">
          The Path to Secure Capital
        </h2>

        <div className="flex flex-col md:flex-row items-center bg-[#f0f4f8] rounded-2xl overflow-hidden">
          <div className="relative w-full md:w-1/2 min-h-[320px]">
            <Image
              src="/images/vault-door.jpg"
              alt="Secure vault door"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 p-10 lg:p-14">
            <h3 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-6 leading-tight">
              Security is Our Priority
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-8">
              At CBA Capital, we understand that short-term business financing
              requires both speed and uncompromising security. Our platform
              integrates advanced contract generation and real-time payment
              tracking, built into a mobile-friendly design that adheres to the
              highest professional financial standards.
            </p>
            <Button href="/services" variant="outline" size="md">
              Learn Policy
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}