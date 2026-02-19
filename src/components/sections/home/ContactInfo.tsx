import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <section className="w-full bg-white py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-16 py-16">
          {/* Left */}
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-black text-[#0a1f44] leading-tight mb-8">
              Secure the Growth Your Business Deserves
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mb-8 max-w-md">
              Whether you&apos;re looking for short-term liquidity or bridge
              financing, CBA Capital is dedicated to professional, secure
              lending. Inquire today to start your application process.
            </p>

            <div className="mb-6">
              <p className="text-sm font-bold text-[#0a1f44] mb-1">Email Us</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm text-gray-600 hover:text-[#f26522] transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            <div>
              <p className="text-sm font-bold text-[#0a1f44] mb-1">Call Us</p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-sm text-gray-600 hover:text-[#f26522] transition-colors"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 relative">
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ height: "380px" }}
            >
              <Image
                src="/images/glass-railing.jpg"
                alt="Modern building with glass railing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <p className="absolute bottom-4 left-4 text-xs text-white font-semibold tracking-widest uppercase">
                Empowering Businesses
              </p>
            </div>

            {/* Overlay Card */}
            <div className="absolute bottom-6 right-0 bg-white rounded-2xl p-6 shadow-lg max-w-xs">
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                CBA Capital provides specialized liquidity for growing
                enterprises. Experience secure lending with integrated contract
                generation and real-time payment tracking.
              </p>

              <Link
                href="/services"
                className="text-sm font-semibold text-white bg-[#f26522] px-5 py-2.5 rounded-full inline-block hover:bg-[#d4551a] transition-colors"
              >
                View Lending Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
