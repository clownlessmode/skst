import React from "react";
import { SmoothScrollLink } from "@/components/ui/smooth-scroll";

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
    <SmoothScrollLink
      href={href || "/"}
      className={`text-lg text-[#69697B] hover:text-[#235095] ${className}`}
    >
      {text}
    </SmoothScrollLink>
  );
};
