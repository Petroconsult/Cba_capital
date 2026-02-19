import { LoanProduct } from "@/types";

interface LoanCardProps {
  product: LoanProduct;
  imageLeft?: boolean;
  showContactButton?: boolean;
}

export default function LoanCard({
  product,
  imageLeft = true,
  showContactButton = false,
}: LoanCardProps) {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-[#f0f4f8]">
      <div
        className={`flex flex-col ${
          imageLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-stretch min-h-[260px]`}
      >
        <div className="relative w-full md:w-5/12 min-h-[260px]">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
        <div className="w-full md:w-7/12 p-10 lg:p-12 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-black text-[#0a1f44] mb-4 leading-tight">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
          {showContactButton && (
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-[#f26522] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#d4551a] transition-colors text-sm"
              >
                Contact Us
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}