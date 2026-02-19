import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-0.5 h-7">
              <div className="w-2 h-3 bg-[#f26522] rounded-sm" />
              <div className="w-2 h-5 bg-[#f26522] rounded-sm" />
              <div className="w-2 h-7 bg-[#0a1f44] rounded-sm" />
              <div className="w-2 h-4 bg-[#0a1f44] rounded-sm" />
            </div>
            <span className="text-[#0a1f44] font-bold text-sm leading-tight">
              CBA
              <br />
              Capital
            </span>
          </div>

          {/* Funding Enquiries */}
          <div>
            <p className="text-xs font-bold tracking-widest text-[#0a1f44] uppercase mb-3">
              Funding Enquiries
            </p>
            <p className="text-sm text-gray-600 mb-1">T: {CONTACT_INFO.phone}</p>
            <p className="text-sm text-gray-600">
              E:{" "}
              <a
                href={`mailto:${CONTACT_INFO.contactEmail}`}
                className="hover:text-[#f26522] transition-colors"
              >
                {CONTACT_INFO.contactEmail}
              </a>
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-sm text-gray-600">{CONTACT_INFO.address}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-right">
            © 2026 CBA Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}