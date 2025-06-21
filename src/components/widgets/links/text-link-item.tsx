import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export const TextLinksItem = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-[10px] text-[20px] leading-[34px] font-medium"
    >
      <span className="max-w-[320px]">{title}</span>
      <ArrowUpRight className="text-[#235095]" />
    </Link>
  );
};
