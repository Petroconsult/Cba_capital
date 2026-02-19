"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactInfo() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const img = el.querySelector("img");
      if (img) {
        (img as HTMLElement).style.transform = `scale(1.06) translate(${x * -10}px, ${y * -7}px)`;
      }
    };

    const handleMouseLeave = () => {
      const img = el.querySelector("img");
      if (img) {
        (img as HTMLElement).style.transform = "scale(1.06) translate(0px, 0px)";
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

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

            {/* Email */}
            <div className="group mb-6">
              <p className="text-sm font-bold text-[#0a1f44] mb-1">Email Us</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="relative inline-flex items-center gap-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#f26522]"
              >
                {/* Underline sweep */}
                <span className="relative">
                  {CONTACT_INFO.email}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#f26522] transition-all duration-300 group-hover:w-full rounded-full" />
                </span>
                {/* Arrow slides in */}
                <svg
                  className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#f26522]"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Phone */}
            <div className="group">
              <p className="text-sm font-bold text-[#0a1f44] mb-1">Call Us</p>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="relative inline-flex items-center gap-2 text-sm text-gray-600 transition-colors duration-300 hover:text-[#f26522]"
              >
                <span className="relative">
                  {CONTACT_INFO.phone}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#f26522] transition-all duration-300 group-hover:w-full rounded-full" />
                </span>
                <svg
                  className="w-3.5 h-3.5 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#f26522]"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 relative">
            {/* Image with parallax */}
            <div
              ref={imageRef}
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ height: "380px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85&auto=format&fit=crop"
                alt="Professional business team in modern office"
                fill
                className="object-cover object-center transition-transform duration-700 ease-out"
                style={{ transform: "scale(1.06) translate(0px, 0px)" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/30 via-transparent to-transparent pointer-events-none" />

              <p className="absolute bottom-4 left-4 text-xs text-white font-semibold tracking-widest uppercase drop-shadow">
                Empowering Businesses
              </p>
            </div>

            {/* Overlay Card */}
            <div className="group absolute bottom-6 right-0 bg-white rounded-2xl p-6 shadow-lg max-w-xs transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_16px_48px_-8px_rgba(10,31,68,0.18)]">
              {/* Top accent bar */}
              <div className="absolute top-0 left-6 right-6 h-[3px] bg-[#0a1f44] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />

              <p className="text-sm text-gray-700 leading-relaxed mb-4 transition-transform duration-500 group-hover:translate-x-0.5">
                CBA Capital provides specialized liquidity for growing
                enterprises. Experience secure lending with integrated contract
                generation and real-time payment tracking.
              </p>

              <Link
                href="/services"
                className="group/btn relative text-sm font-semibold text-white bg-[#f26522] px-5 py-2.5 rounded-full inline-flex items-center gap-2 overflow-hidden transition-all duration-300 hover:bg-[#d4551a] hover:gap-3"
              >
                View Lending Services
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}