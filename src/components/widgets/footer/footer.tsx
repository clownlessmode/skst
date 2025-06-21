"use client";
import React from "react";
import { Logotype } from "../header/logotype";
import { FooterText } from "./footer-text";
import Image from "next/image";
import { FooterHeading } from "./footer-heading";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  const getActiveClass = (path: string) => {
    return pathname === path ? "text-[#235095] font-medium" : "";
  };

  return (
    <div className="flex flex-col gap-8 px-4 md:px-0">
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex flex-col md:flex-row md:gap-[64px] gap-8">
          <div className="flex flex-col gap-4">
            <Logotype />
            <div className="flex flex-col gap-3 max-w-[264px]">
              <FooterText text="650024, Кемеровская Область - Кузбасс область, город Кемерово, Космическая улица, 8 А" />
              <FooterText
                text="narodprom@mail.ru"
                href="mailto:narodprom@mail.ru"
              />
              <FooterText text="+7 (384) 228 14-87" href="tel:+73842281487" />
            </div>
            <div className="rounded-full size-[34px] flex items-center justify-center bg-[#FAFAFA] border border-[#ECECF4]">
              <Image src="/socials/vk.png" alt="vk" width={24} height={24} />
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <FooterHeading title="НАВИГАЦИЯ" />
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col gap-4 ">
                <FooterText text="Главная" className={getActiveClass("/")} />
                <FooterText
                  text="О СКСТ"
                  className={getActiveClass("/about")}
                />
                <FooterText
                  text="Специальности"
                  className={getActiveClass("/specialties")}
                />
                <FooterText
                  text="Новости"
                  className={getActiveClass("/news")}
                />
                <FooterText
                  text="Абитуриентам"
                  className={getActiveClass("/applicants")}
                />
                <FooterText
                  text="Полезные ссылки"
                  className={getActiveClass("/links")}
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <FooterText
                  text="Студентам"
                  className={getActiveClass("/students")}
                />
                <FooterText text="УПК" className={getActiveClass("/upk")} />
                <FooterText
                  text="«Центр содействия трудоустройству выпускников (ЦСТВ)»"
                  className={`max-w-[200px] ${getActiveClass(
                    "/career-center"
                  )}`}
                />
                <FooterText
                  text="Преподавателям"
                  className={getActiveClass("/teachers")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <FooterHeading title="ДОКУМЕНТЫ" />
          <div className="flex flex-col gap-4 ">
            <FooterText
              href="/license"
              text="Лицензия на осуществление образовательной деятельности (выписки из реестра лицензий на осуществление образовательной деятельности)"
              className={`${getActiveClass("/license")} max-w-[356px] text-xs`}
            />
            <FooterText
              href="/register"
              text="Выписка из государственной информационной системы «Реестр организаций, осуществляющих образовательную деятельность по имеющим государственную аккредитацию образовательным программам"
              className={`${getActiveClass("/register")} max-w-[356px] text-xs`}
            />
          </div>
        </div>
      </div>
      <p className="max-w-[550px] text-[#69697B] text-lg">
        Государственное профессиональное образовательное учреждение
        &quot;Сибирский колледж сервиса и технологий&quot;
      </p>
    </div>
  );
};
