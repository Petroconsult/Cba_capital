"use client";

import Button from "@/components/ui/Button";
import { useRef, useEffect } from "react";

export default function CTABanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="group/section relative w-full bg-[#0a1f44] py-16 overflow-hidden"
      style={
        {
          "--mx": "50%",
          "--my": "50%",
        } as React.CSSProperties
      }
    >
      {/* Subtle radial highlight that follows the cursor */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx) var(--my), rgba(242,101,34,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Thin top + bottom border lines that sweep in on hover */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20 scale-x-0 group-hover/section:scale-x-100 transition-transform duration-700 ease-out origin-left" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20 scale-x-0 group-hover/section:scale-x-100 transition-transform duration-700 ease-out origin-right" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Button 1 — slides right slightly and gains orange underline */}
          <div className="group/btn1 relative">
            <div className="transition-transform duration-300 ease-out group-hover/btn1:-translate-y-0.5">
              <Button href="/services" variant="outline-white" size="md">
                Request a Quote
              </Button>
            </div>
            <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
              <span className="h-[2px] w-0 bg-[#f26522] rounded-full transition-all duration-300 group-hover/btn1:w-3/4" />
            </div>
          </div>

          {/* Headline — letters breathe very slightly on section hover */}
          <h2 className="text-3xl md:text-4xl font-black text-white text-center leading-tight transition-all duration-500 group-hover/section:tracking-wide">
            Secure Your Future with Fast Business Financing
          </h2>

          {/* Button 2 */}
          <div className="group/btn2 relative">
            <div className="transition-transform duration-300 ease-out group-hover/btn2:-translate-y-0.5">
              <Button href="/services" variant="outline-white" size="md">
                Talk to Experts
              </Button>
            </div>
            <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
              <span className="h-[2px] w-0 bg-[#f26522] rounded-full transition-all duration-300 group-hover/btn2:w-3/4" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}