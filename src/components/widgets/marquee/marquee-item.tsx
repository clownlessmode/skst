import Image from "next/image";
import React, { FC, ReactNode } from "react";
interface Props {
  image: string;
  title: ReactNode;
}
export const MarqueeItem: FC<Props> = ({ image, title }) => {
  return (
    <div className="flex flex-row items-center gap-2 ml-[50px] md:ml-[180px]">
      <Image
        className="w-auto h-[48px]"
        src={image}
        alt="image"
        width={200}
        height={200}
        quality={100}
      />
      <span className="font-extrabold leading-[20px] uppercase">{title}</span>
    </div>
  );
};
