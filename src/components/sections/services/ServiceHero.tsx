import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="w-full bg-white pt-12 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-black text-[#0a1f44] text-center leading-tight mb-4 tracking-tight">
          Professional Funding Solutions
        </h1>
        <p className="text-gray-500 text-center text-base mb-10">
          Transparent, fast, and bespoke capital for UK businesses.
        </p>
        <div className="relative w-full rounded-2xl overflow-hidden h-[380px]">
          <Image
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&q=85&auto=format&fit=crop"
            alt="Dark executive boardroom representing professional corporate funding"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/70 to-transparent rounded-2xl" />
        </div>
      </div>
    </section>
  );
}