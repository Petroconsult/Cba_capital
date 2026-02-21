"use client";

import { useState } from "react";
import { CONTACT_INFO } from "@/lib/constants";

type Category = "request-loan" | "request-funding" | "";

interface EnquiryFormData {
  category: Category;
  firstName: string;
  surname: string;
  email: string;
  companyName: string;
  companyWebsite: string;
  telephone: string;
  description: string;
}

type Status = "idle" | "loading" | "success" | "error";

const EMPTY: EnquiryFormData = {
  category: "",
  firstName: "",
  surname: "",
  email: "",
  companyName: "",
  companyWebsite: "",
  telephone: "",
  description: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<EnquiryFormData>(EMPTY);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const required: (keyof EnquiryFormData)[] = [
      "category",
      "firstName",
      "surname",
      "email",
      "companyName",
      "telephone",
      "description",
    ];

    const missing = required.some((k) => !form[k]?.toString().trim());

    if (missing) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(EMPTY);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unexpected error.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-[#cdd8e8] bg-white text-[#0a1f44] placeholder:text-[#8fa3bf] focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent transition text-sm";

  const labelClass =
    "text-xs font-bold tracking-widest uppercase text-[#6b7f99] mb-1.5 block";

  const req = <span className="text-[#f26522]">*</span>;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">

        {/* ── LEFT: Contact Info Panel ── */}
        <div className="lg:w-80 xl:w-96 flex-shrink-0">
          {/* Eyebrow */}
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#f26522] mb-3">
            Contact Us
          </p>
          <h1 className="text-3xl font-black text-[#0a1f44] leading-tight mb-4">
            Let's Talk<br />
            <span className="text-[#f26522]">Finance.</span>
          </h1>
          <p className="text-sm text-[#6b7f99] leading-relaxed mb-10">
            Whether you're exploring funding options or ready to apply, our team
            is here to guide you every step of the way.
          </p>

          {/* Contact cards */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="group flex items-start gap-4 p-4 rounded-xl border border-[#e8eef6] bg-white hover:border-[#f26522]/30 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f26522]/10 flex items-center justify-center group-hover:bg-[#f26522]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#f26522]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#a0b0c8] mb-0.5">Phone</p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm font-semibold text-[#0a1f44] hover:text-[#f26522] transition-colors duration-200"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group flex items-start gap-4 p-4 rounded-xl border border-[#e8eef6] bg-white hover:border-[#f26522]/30 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f26522]/10 flex items-center justify-center group-hover:bg-[#f26522]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#f26522]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#a0b0c8] mb-0.5">Email</p>
                <a
                  href={`mailto:${CONTACT_INFO.contactEmail}`}
                  className="text-sm font-semibold text-[#0a1f44] hover:text-[#f26522] transition-colors duration-200 break-all"
                >
                  {CONTACT_INFO.contactEmail}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="group flex items-start gap-4 p-4 rounded-xl border border-[#e8eef6] bg-white hover:border-[#f26522]/30 hover:shadow-md transition-all duration-300">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#f26522]/10 flex items-center justify-center group-hover:bg-[#f26522]/20 transition-colors duration-300">
                <svg className="w-4 h-4 text-[#f26522]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#a0b0c8] mb-0.5">Address</p>
                <p className="text-sm font-semibold text-[#0a1f44] leading-snug">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </div>

          {/* Response time badge */}
          <div className="mt-6 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#0a1f44]/5 border border-[#0a1f44]/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f26522] opacity-60" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#f26522]" />
            </span>
            <p className="text-xs text-[#6b7f99] font-medium">
              We typically respond within <span className="text-[#0a1f44] font-bold">24 hours</span>
            </p>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div className="flex-1 min-w-0">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-[#0a1f44] px-8 py-6">
              <h2 className="text-white text-2xl font-semibold tracking-tight">
                Get in Touch
              </h2>
              <p className="text-[#8fa3bf] text-sm mt-1">
                Fill in the form below and we'll be in touch shortly.
              </p>
            </div>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#f26522]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#f26522]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-[#0a1f44] mb-3">Enquiry Received</h3>
                <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
                  Thank you for reaching out. A member of the CBA Capital team will be in touch within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-xs font-bold tracking-widest uppercase text-[#f26522] hover:opacity-70 transition"
                >
                  Submit another enquiry →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-8 py-8 space-y-7">
                {/* Category */}
                <div>
                  <label className={labelClass}>I am enquiring about {req}</label>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    {[
                      { value: "request-loan", label: "Request a Loan" },
                      { value: "request-funding", label: "Request Funding" },
                    ].map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, category: value as Category }))}
                        className={`relative py-3 px-4 rounded-lg border text-sm font-semibold transition-all duration-200 text-left
                          ${form.category === value
                            ? "border-[#f26522] bg-[#f26522]/5 text-[#f26522]"
                            : "border-[#cdd8e8] text-[#6b7f99] hover:border-[#0a1f44] hover:text-[#0a1f44]"
                          }`}
                      >
                        {form.category === value && (
                          <span className="absolute top-2.5 right-3 w-2 h-2 rounded-full bg-[#f26522]" />
                        )}
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#f0f4f8]" />

                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>First Name {req}</label>
                    <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="surname" className={labelClass}>Surname {req}</label>
                    <input id="surname" name="surname" type="text" required value={form.surname} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Email + Telephone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address {req}</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="telephone" className={labelClass}>Telephone {req}</label>
                    <input id="telephone" name="telephone" type="tel" required value={form.telephone} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="companyName" className={labelClass}>Company Name {req}</label>
                    <input id="companyName" name="companyName" type="text" required value={form.companyName} onChange={handleChange} className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="companyWebsite" className={labelClass}>
                      Company Website
                      <span className="ml-1 text-[#a0b0c8] normal-case tracking-normal font-normal">(optional)</span>
                    </label>
                    <input id="companyWebsite" name="companyWebsite" type="url" value={form.companyWebsite} onChange={handleChange} className={inputClass} />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className={labelClass}>
                    Brief Description of Business & Requirements {req}
                  </label>
                  <textarea id="description" name="description" rows={5} required value={form.description} onChange={handleChange} className={`${inputClass} resize-none`} />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="rounded-lg bg-red-50 border border-red-200 text-red-600 px-4 py-3 text-sm">
                    ✗ {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#f26522] hover:bg-[#d9541a] text-white font-semibold tracking-wide transition disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {status === "loading" ? "Sending…" : "Submit Enquiry"}
                </button>

                <p className="text-center text-xs text-[#a0b0c8]">
                  All fields marked {req} are required. Your information is kept strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}