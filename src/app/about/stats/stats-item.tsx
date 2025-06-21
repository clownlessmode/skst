import React from "react";

export const StatsItem = ({
  title,
  description,
}: {
  title: React.ReactNode;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-[16px] items-center w-fit text-center">
      {title}
      <p className="uppercase text-[#235095] text-[20px] leading-[28px]">
        {description}
      </p>
    </div>
  );
};
