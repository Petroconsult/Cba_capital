"use client";

import { useState } from "react";

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

    // Client-side required check
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
      setErrorMsg(
        err instanceof Error ? err.message : "Unexpected error."
      );
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-[#cdd8e8] bg-white text-[var(--navy)] placeholder:text-[#8fa3bf] focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:border-transparent transition text-sm";

  const labelClass =
    "text-xs font-bold tracking-widest uppercase text-[#6b7f99] mb-1.5 block";

  const req = <span className="text-[var(--orange)]">*</span>;

  if (status === "success") {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-[var(--navy)] px-8 py-6">
            <h2 className="text-white text-2xl font-semibold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-[#8fa3bf] text-sm mt-1">
              We'll get back to you within 24 hours.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--orange)]/10 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-[var(--orange)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-black text-[var(--navy)] mb-3">
              Enquiry Received
            </h3>

            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Thank you for reaching out. A member of the CBA Capital team will
              be in touch within 24 hours.
            </p>

            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-xs font-bold tracking-widest uppercase text-[var(--orange)] hover:opacity-70 transition"
            >
              Submit another enquiry →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[var(--navy)] px-8 py-6">
          <h2 className="text-white text-2xl font-semibold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-[#8fa3bf] text-sm mt-1">
            We'll get back to you within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-7">
          {/* Category */}
          <div>
            <label className={labelClass}>
              I am enquiring about {req}
            </label>

            <div className="grid grid-cols-2 gap-3 mt-1">
              {[
                { value: "request-loan", label: "Request a Loan" },
                { value: "request-funding", label: "Request Funding" },
              ].map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setForm((p) => ({
                      ...p,
                      category: value as Category,
                    }))
                  }
                  className={`relative py-3 px-4 rounded-lg border text-sm font-semibold transition-all duration-200 text-left
                    ${
                      form.category === value
                        ? "border-[var(--orange)] bg-[var(--orange)]/5 text-[var(--orange)]"
                        : "border-[#cdd8e8] text-[#6b7f99] hover:border-[var(--navy)] hover:text-[var(--navy)]"
                    }`}
                >
                  {form.category === value && (
                    <span className="absolute top-2.5 right-3 w-2 h-2 rounded-full bg-[var(--orange)]" />
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
              <label htmlFor="firstName" className={labelClass}>
                First Name {req}
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={form.firstName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="surname" className={labelClass}>
                Surname {req}
              </label>
              <input
                id="surname"
                name="surname"
                type="text"
                required
                value={form.surname}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Email + Telephone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address {req}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="telephone" className={labelClass}>
                Telephone {req}
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                required
                value={form.telephone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="companyName" className={labelClass}>
                Company Name {req}
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                required
                value={form.companyName}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="companyWebsite" className={labelClass}>
                Company Website
                <span className="ml-1 text-[#a0b0c8] normal-case tracking-normal font-normal">
                  (optional)
                </span>
              </label>
              <input
                id="companyWebsite"
                name="companyWebsite"
                type="url"
                value={form.companyWebsite}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className={labelClass}>
              Brief Description of Business & Requirements {req}
            </label>
            <textarea
              id="description"
              name="description"
              rows={5}
              required
              value={form.description}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
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
            className="w-full py-3.5 px-6 rounded-lg bg-[var(--orange)] hover:bg-[var(--orange-dark)] text-white font-semibold tracking-wide transition disabled:opacity-60 disabled:cursor-not-allowed text-sm"
          >
            {status === "loading" ? "Sending…" : "Submit Enquiry"}
          </button>

          <p className="text-center text-xs text-[#a0b0c8]">
            All fields marked {req} are required. Your information is kept
            strictly confidential.
          </p>
        </form>
      </div>
    </div>
  );
}