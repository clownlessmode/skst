import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Prepods = () => {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-0">
      <div className="w-full justify-between items-center flex">
        <h2 className="text-4xl font-medium">Наши преподаватели</h2>
        <Button variant="outline" className="uppercase hidden md:flex">
          Все преподаватели
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        <div className="bg-white shadow-2xl flex flex-col jusitfy-center items-center gap-4 mt-[100px] px-[48px] pb-[64px] rounded-2xl">
          <Image
            height={140 * 4}
            width={140 * 4}
            src="/prepods/1.png"
            alt="prepod"
            className="size-[140px] bg-[#3434FF]/5 rounded-full -mt-[75px] mb-4"
          />
          <div className="flex flex-col gap-2 items-center">
            <h4 className="text-2xl leading-none font-medium text-center">
              Бутакова
              <br />
              Наталья Валериена
            </h4>
            <p className="text-[#235095] uppercase text-base">
              дизайн и полиграфия
            </p>
          </div>
          <p className="text-center">
            Преподаватель с художественным и профессионально-педагогическим
            образованием. Готовит специалистов для сферы графики, полиграфии и
            цифрового дизайна.
          </p>
        </div>
        <div className="bg-white shadow-2xl flex flex-col jusitfy-center items-center gap-4 mt-[100px] px-[48px] pb-[64px] rounded-2xl">
          <Image
            height={140 * 4}
            width={140 * 4}
            src="/prepods/2.png"
            alt="prepod"
            className="size-[140px] bg-[#3434FF]/5 rounded-full -mt-[75px] mb-4"
          />
          <div className="flex flex-col gap-2 items-center">
            <h4 className="text-2xl leading-none font-medium text-center">
              Огнев
              <br />
              Виктор Васильевич
            </h4>
            <p className="text-[#235095] uppercase text-base">
              физическая культура
            </p>
          </div>
          <p className="text-center">
            Преподаватель физической культуры с высшим профильным образованием.
            Специалист по спортивной подготовке с высшей квалификационной
            категорией.
          </p>
        </div>
        <div className="bg-white shadow-2xl flex flex-col jusitfy-center items-center gap-4 mt-[100px] px-[48px] pb-[64px] rounded-2xl">
          <Image
            height={140 * 4}
            width={140 * 4}
            src="/prepods/3.png"
            alt="prepod"
            className="size-[140px] bg-[#3434FF]/5 rounded-full -mt-[75px] mb-4"
          />
          <div className="flex flex-col gap-2 items-center">
            <h4 className="text-2xl leading-none font-medium text-center">
              Мельничук
              <br />
              Людмила Ивановна
            </h4>
            <p className="text-[#235095] uppercase text-base">
              иностранный язык
            </p>
          </div>
          <p className="text-center">
            Преподаватель английского языка с высшим педагогическим
            образованием. Специалист по языковой подготовке и переводу в
            профессиональной сфере с высшей квалификационной категорией.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prepods;
