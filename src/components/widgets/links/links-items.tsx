import { ArrowUpRight } from "lucide-react";
import React from "react";

export const LinksItems = ({ index }: { index: number }) => {
  return (
    <div
      className="shadow-lg p-8 text-white text-2xl font-medium relative overflow-hidden rounded-[30px] h-[320px] w-full bg-cover bg-center bg-no-repeat flex flex-row justify-between items-end"
      style={{ backgroundImage: `url('/links/${index}.png')` }}
    >
      <p>Полезные ссылки</p>
      <ArrowUpRight />
    </div>
  );
};
