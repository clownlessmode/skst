import React from "react";
import { LinksItems } from "./links-items";
import { TextLinksItem } from "./text-link-item";

const TextLinks = [
  {
    title: "ФГОС",
    link: "https://www.google.com",
  },
  {
    title: "Министерство образования Кузбасса",
    link: "https://www.google.com",
  },
  {
    title: "КРИРПО",
    link: "https://www.google.com",
  },
  {
    title: "Комитет по управлению гос. имуществом Кузбасса",
    link: "https://www.google.com",
  },
  {
    title: "Министерство науки и высшего образования РФ",
    link: "https://www.google.com",
  },
  {
    title: "Министерство просвещения России",
    link: "https://www.google.com",
  },
];

export const Links = () => {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-0">
      <h2 className="text-4xl font-medium">Полезные ссылки</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <LinksItems index={1} />
        <LinksItems index={2} />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        <LinksItems index={3} />
        <LinksItems index={4} />
        <LinksItems index={5} />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[10px] p-[10px]">
        {TextLinks.map((link) => (
          <TextLinksItem key={link.title} title={link.title} link={link.link} />
        ))}
      </div>
    </div>
  );
};
