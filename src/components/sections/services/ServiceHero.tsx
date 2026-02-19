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
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ height: "340px" }}
        >
          <Image
            src="/images/london-building-exterior.jpg"
            alt="London office building exterior"
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