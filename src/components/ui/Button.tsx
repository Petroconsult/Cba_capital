import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-white" | "outline-dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-[#f26522] text-white hover:bg-[#d4551a] active:scale-95",
    outline:
      "border border-[#f26522] text-[#f26522] bg-transparent hover:bg-[#f26522] hover:text-white active:scale-95",
    "outline-white":
      "border border-white text-white bg-transparent hover:bg-white hover:text-[#0a1f44] active:scale-95",
    "outline-dark":
      "border border-[#0a1f44] text-[#0a1f44] bg-transparent hover:bg-[#0a1f44] hover:text-white active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}