import React from "react";
import { LinksItems } from "./links-items";
import { TextLinksItem } from "./text-link-item";

const TextLinks = [
  {
    title: "ФГОС",
    link: "https://fgos.ru/",
  },
  {
    title: "Министерство образования Кузбасса",
    link: "http://образование42.рф/",
  },
  {
    title: "КРИРПО",
    link: "https://krirpo.ru/",
  },
  {
    title: "Комитет по управлению гос. имуществом Кузбасса",
    link: "https://kugi.kemobl.ru/",
  },
  {
    title: "Министерство науки и высшего образования РФ",
    link: "https://minobrnauki.gov.ru/",
  },
  {
    title: "Министерство просвещения России",
    link: "https://edu.gov.ru/",
  },
];

export const Links = () => {
  return (
    <section
      className="flex flex-col gap-8 px-4 md:px-0"
      aria-labelledby="links-heading"
    >
      <h2 id="links-heading" className="text-4xl font-medium">
        Полезные ссылки
      </h2>
      <nav
        className="grid md:grid-cols-2 grid-cols-1 gap-8"
        aria-label="Навигация для абитуриентов и студентов"
      >
        <LinksItems index={1} title="Абитуриентам" />
        <LinksItems index={2} title="Студентам" />
      </nav>
      <nav
        className="grid md:grid-cols-3 grid-cols-1 gap-8"
        aria-label="Навигация для колледжа"
      >
        <LinksItems index={3} title="Колледж СКСТ" />
        <LinksItems index={4} title="Выпускникам" />
        <LinksItems index={5} title="Преподавателям" />
      </nav>
      <nav
        className="grid md:grid-cols-3 grid-cols-1 gap-[10px] p-[10px]"
        aria-label="Полезные внешние ссылки"
      >
        {TextLinks.map((link) => (
          <TextLinksItem key={link.title} title={link.title} link={link.link} />
        ))}
      </nav>
    </section>
  );
};
