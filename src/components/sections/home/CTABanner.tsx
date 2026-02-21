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
      className="group/section relative w-full bg-[#0a1f44] overflow-hidden"
      style={{ "--mx": "50%", "--my": "50%" } as React.CSSProperties}
    >
      {/* Cursor radial highlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/section:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(400px circle at var(--mx) var(--my), rgba(242,101,34,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Top + bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f26522]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#f26522]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="flex flex-col items-center text-center gap-5">

          {/* Eyebrow */}
          <span className="text-[#f26522] text-[11px] font-bold tracking-[0.2em] uppercase">
            Fast Business Financing
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight max-w-2xl transition-all duration-500 group-hover/section:tracking-wide">
            Secure Your Future with Fast Business Financing
          </h2>

          {/* Subline */}
          <p className="text-white/55 text-base md:text-lg max-w-md leading-relaxed">
            Get funded in as little as 24 hours — no lengthy paperwork, no surprises.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            {/* Primary — orange filled */}
            <div className="group/btn1 relative inline-block">
              <div className="transition-transform duration-300 ease-out group-hover/btn1:-translate-y-0.5">
                <Button href="/services" variant="primary" size="md">
                  Request a Quote
                </Button>
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#f26522] rounded-full transition-all duration-300 group-hover/btn1:w-3/4" />
            </div>

            {/* Secondary — outline */}
            <div className="group/btn2 relative inline-block">
              <div className="transition-transform duration-300 ease-out group-hover/btn2:-translate-y-0.5">
                <Button href="/contact" variant="outline-white" size="md">
                  Talk to an Expert
                </Button>
              </div>
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-white/50 rounded-full transition-all duration-300 group-hover/btn2:w-3/4" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}