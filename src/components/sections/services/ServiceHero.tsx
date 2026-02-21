"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function ServiceHero() {
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
        (img as HTMLElement).style.transform = `scale(1.06) translate(${x * -12}px, ${y * -8}px)`;
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
    <section className="w-full bg-white pt-12 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Headline — fades up first */}
        <h1 className="text-5xl md:text-6xl font-black text-[#0a1f44] text-center leading-tight mb-4 tracking-tight opacity-0 translate-y-3 animate-[fadeUp_0.55s_ease-out_0.1s_forwards]">
          Professional Funding Solutions
        </h1>

        {/* Subtext — fades up after */}
        <p className="text-gray-500 text-center text-base mb-10 opacity-0 translate-y-3 animate-[fadeUp_0.55s_ease-out_0.25s_forwards]">
          Transparent, fast, and bespoke capital for businesses.
        </p>

        {/* Image — fades up last, parallax on hover */}
        <div
          ref={imageRef}
          className="relative w-full rounded-2xl overflow-hidden h-[380px] opacity-0 translate-y-4 animate-[fadeUp_0.65s_ease-out_0.4s_forwards]"
        >
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=85&auto=format&fit=crop"
            alt="Dark executive boardroom representing professional corporate funding"
            fill
            className="object-cover object-center transition-transform duration-700 ease-out"
            style={{ transform: "scale(1.06) translate(0px, 0px)" }}
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/70 to-transparent rounded-2xl pointer-events-none" />

          {/* Decorative corner marks that appear on hover */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-white/40 rounded-tl-sm transition-all duration-500" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/0 group-hover:border-white/40 rounded-tr-sm transition-all duration-500" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/0 group-hover:border-white/40 rounded-bl-sm transition-all duration-500" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover:border-white/40 rounded-br-sm transition-all duration-500" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}