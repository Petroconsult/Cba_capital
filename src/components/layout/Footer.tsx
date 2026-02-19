import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">

          {/* Logo */}
          <div className="group flex items-center gap-2 cursor-default">
            <div className="flex items-end gap-0.5 h-7">
              <div className="w-2 h-3 bg-[#f26522] rounded-sm transition-transform duration-300 ease-out group-hover:-translate-y-0.5" />
              <div className="w-2 h-5 bg-[#f26522] rounded-sm transition-transform duration-300 ease-out delay-[40ms] group-hover:-translate-y-1" />
              <div className="w-2 h-7 bg-[#0a1f44] rounded-sm transition-transform duration-300 ease-out delay-[80ms] group-hover:-translate-y-1.5" />
              <div className="w-2 h-4 bg-[#0a1f44] rounded-sm transition-transform duration-300 ease-out delay-[120ms] group-hover:-translate-y-0.5" />
            </div>
            <span className="text-[#0a1f44] font-bold text-sm leading-tight transition-colors duration-300 group-hover:text-[#f26522]">
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
              <span className="group/email inline-flex items-center gap-1.5">
                <a
                  href={`mailto:${CONTACT_INFO.contactEmail}`}
                  className="relative text-gray-600 transition-colors duration-300 group-hover/email:text-[#f26522]"
                >
                  {CONTACT_INFO.contactEmail}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#f26522] rounded-full transition-all duration-300 group-hover/email:w-full" />
                </a>
                <svg
                  className="w-3 h-3 text-[#f26522] opacity-0 -translate-x-1 transition-all duration-300 group-hover/email:opacity-100 group-hover/email:translate-x-0"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-sm text-gray-600">{CONTACT_INFO.address}</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
          {/* Animated divider dot */}
          <div className="flex items-center gap-1.5">
            <span className="block w-1 h-1 rounded-full bg-[#f26522] opacity-40" />
            <span className="block w-1 h-1 rounded-full bg-[#0a1f44] opacity-20" />
            <span className="block w-1 h-1 rounded-full bg-[#0a1f44] opacity-10" />
          </div>
          <p className="text-xs text-gray-400">
            © 2026 CBA Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}