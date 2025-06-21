import React, { FC } from "react";
import Image from "next/image";

export const Mission: FC = () => {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-0 justify-center items-center">
      <h2 className="text-4xl font-medium text-center">Наша миссия</h2>
      <div className="flex flex-col px-4 gap-[20px] bg-[#3434FF]/5 justify-center items-center py-[72px] rounded-2xl max-w-[1000px] w-full h-fit">
        <Image
          src="/icon.png"
          alt="icon"
          width={1000}
          height={1000}
          className="w-[100px]"
        />
        <h2 className="text-2xl font-medium text-center">
          Создаём будущее через
          <br />
          творчество и красоту
        </h2>
        <p className="text-base text-[#69697B] max-w-[650px] text-center">
          Готовим творческих профессионалов, которые создают красоту и комфорт в
          современном мире. Даём качественное образование, развиваем таланты и
          помогаем студентам найти своё призвание в индустрии красоты и дизайна.
        </p>
      </div>
    </div>
  );
};
