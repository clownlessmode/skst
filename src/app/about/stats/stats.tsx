import React from "react";
import { StatsItem } from "./stats-item";

export const Stats = () => {
  return (
    <div className="w-full rounded-4xl bg-[#FAFAFA] flex flex-col gap-[48px] items-center md:flex-row justify-between py-[40px] px-[20px] md:py-[72px] md:px-[58px]">
      <StatsItem
        title={
          <p className="font-medium text-[54px] leading-[64px]">
            900<span className="text-[#235095]">+</span>
          </p>
        }
        description="Студентов"
      />
      <StatsItem
        title={<p className="font-medium text-[54px] leading-[64px]">11</p>}
        description="Направлений"
      />
      <StatsItem
        title={
          <p className="font-medium text-[54px] leading-[64px]">
            5400<span className="text-[#235095]">+</span>
          </p>
        }
        description="Выпускников"
      />
      <StatsItem
        title={<p className="font-medium text-[54px] leading-[64px]">59</p>}
        description="Преподавателей"
      />
    </div>
  );
};
