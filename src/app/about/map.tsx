import React, { FC } from "react";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Map: FC = () => {
  return (
    <div className=" flex flex-col gap-8 px-4 md:px-0 justify-center items-center">
      <h2 className="text-4xl font-medium text-center">Ждем вас</h2>
      <div className="shadow-2xl flex flex-col gap-[20px]  justify-center items-center rounded-2xl w-full h-fit overflow-hidden">
        <Image
          src="/map.png"
          alt="icon"
          width={1000 * 3}
          height={1000 * 3}
          className="w-full md:scale-100 scale-150"
        />
        <div className="bg-white w-full p-6 flex flex-col gap-6">
          <h4 className="text-2xl font-medium">
            Сибирский колледж сервиса и технологий
          </h4>
          <div className="flex flex-row gap-[20px] md:gap-[110px]">
            <div className="flex flex-row gap-3">
              <MapPin className="text-[#235095]" />
              <p className="text-[#69697B]">
                Космическая улица, 8а
                <br />
                Заводский район, <br />
                Кемерово, 650024
              </p>
            </div>
            <div className="flex flex-row gap-3">
              <Phone className="text-[#235095]" />
              <p className="text-[#69697B]">+7 (384) 228 14-87</p>
            </div>
          </div>
        </div>
      </div>
      <Button className="uppercase">
        <Link href="/specialties">Выбрать специальность</Link>
      </Button>
    </div>
  );
};
