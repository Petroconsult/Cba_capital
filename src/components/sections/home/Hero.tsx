import Image from "next/image";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="w-full bg-white pt-10 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-6">
          <Badge>Hero</Badge>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0a1f44] leading-[1.05] tracking-tight max-w-4xl mb-12">
          Securing corporate momentum with short-term capital solutions
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative w-full rounded-2xl overflow-hidden bg-gray-100" style={{ aspectRatio: "16/7" }}>
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600"
            alt="Modern glass skyscraper facade"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}