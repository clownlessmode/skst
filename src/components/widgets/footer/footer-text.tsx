import Link from "next/link";
import React from "react";

export const FooterText = ({
  text,
  className,
  href,
}: {
  text: string;
  className?: string;
  href?: string;
}) => {
  return (
    <Link
      href={href || "/"}
      className={`text-lg text-[#69697B] hover:text-[#235095] ${className}`}
    >
      {text}
    </Link>
  );
};
