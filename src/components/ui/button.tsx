import * as React from "react";

type Variant = "primary" | "outline" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: Variant;
};

export function Button({
  className = "",
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "active:scale-95 hover:scale-[1.03]! flex cursor-pointer items-center justify-center gap-1 rounded-[4px] px-6 py-[18px] text-[16px] font-semibold leading-[18px] transition disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<Variant, string> = {
    primary: "bg-[#235095] text-white hover:bg-[#1e447f]",
    outline:
      "border border-[#235095] text-[#235095] hover:bg-[#235095] hover:text-white",
    ghost: "bg-transparent text-[#111827] hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
