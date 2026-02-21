"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = (path: string) =>
    `block text-sm font-medium transition-colors ${
      pathname === path
        ? "text-[#0a1f44] underline underline-offset-4"
        : "text-[#0a1f44] hover:text-[#f26522]"
    }`;

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
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
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link href="/services" className={navLinkClass("/services")}>
              Services
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button href="/contact" variant="primary" size="md">
              Get Funding
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#0a1f44]"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link href="/services" className={navLinkClass("/services")}>
              Services
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>

            <Button href="/contact" variant="primary" size="md">
              Get Funding
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
