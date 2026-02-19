"use client";

import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { useRef, useEffect } from "react";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const img = el.querySelector("img");
      if (img) {
        // Subtle parallax — image shifts slightly opposite to cursor
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
    <section className="w-full bg-white pt-10 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Badge — fades up first */}
        <div
          className="mb-6 opacity-0 translate-y-3 animate-[fadeUp_0.5s_ease-out_0.1s_forwards]"
        >
          <Badge>Hero</Badge>
        </div>

        {/* Headline — fades up after badge */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0a1f44] leading-[1.05] tracking-tight max-w-4xl mb-12 opacity-0 translate-y-4 animate-[fadeUp_0.6s_ease-out_0.25s_forwards]"
        >
          Securing corporate momentum with short-term capital solutions
        </h1>
      </div>

      {/* Image container — fades up last, with parallax on hover */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          ref={imageRef}
          className="relative w-full rounded-2xl overflow-hidden bg-gray-100 opacity-0 translate-y-5 animate-[fadeUp_0.7s_ease-out_0.45s_forwards] cursor-none"
          style={{ aspectRatio: "16/7" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600"
            alt="Modern glass skyscraper facade"
            fill
            className="object-cover transition-transform duration-700 ease-out"
            style={{ transform: "scale(1.06) translate(0px, 0px)" }}
            priority
            sizes="100vw"
          />

          {/* Subtle vignette to ground the image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/20 via-transparent to-transparent pointer-events-none" />
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