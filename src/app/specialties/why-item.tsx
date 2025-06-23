import Image from "next/image";
import React from "react";

export const WhyItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <Image
        src={icon}
        alt="icon"
        width={1000}
        height={1000}
        className="w-[120px]"
      />
      <p className="text-2xl font-medium text-center">{title}</p>
      <p className="text-[#69697B] text-lg text-center max-w-[400px]">
        {description}
      </p>
    </div>
  );
};
