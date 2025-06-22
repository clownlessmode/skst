import React from "react";
import Link from "next/link";
import { NewsItem } from "./news-item";
import { Button } from "@/components/ui/button";

export const News = () => {
  return (
    <section
      className="flex flex-col gap-8 px-4 md:px-0"
      aria-labelledby="news-heading"
    >
      <header className="w-full justify-between items-center flex">
        <h2 id="news-heading" className="text-4xl font-medium">
          Последние новости
        </h2>
        <Link href="/news">
          <Button variant="outline" className="uppercase hidden md:flex">
            Узнать больше
          </Button>
        </Link>
      </header>

      <Link href="/news/forum-legkoy-promyshlennosti-2025">
        <NewsItem
          id="forum-legkoy-promyshlennosti-2025"
          href="/news/forum-legkoy-promyshlennosti-2025"
          imageSrc="/news/1.png"
          title="Форум предприятий легкой промышленности"
          excerpt="27 мая 2025 года в городе Барнаул на базе КГБПОУ «Алтайская академия гостеприимства» начал работу Форум предприятий легкой промышленности «РROШИТЬ СИБИРЬ»"
          date="Май 27, 2025"
          readTime="7 минут"
          location="г. Барнаул, ул. имени А. Юрина, 203"
        />
      </Link>

      <Link href="/news/pobeda-abilimpiks-2025">
        <NewsItem
          id="pobeda-abilimpiks-2025"
          href="/news/pobeda-abilimpiks-2025"
          imageSrc="/news/2.png"
          title="Победа на отборочном чемпионате"
          excerpt="По итогам Межрегионального этапа национального чемпионата «Абилимпикс» в Сибирском федеральном округе, который проходил в городе Новосибирск, студентка ГПОУ «Сибирский колледж сервиса и технологий» Курбонова Камила заняла 1 место в компетенции «Парикмахерское искусство»."
          date="Май 16, 2025"
          readTime="3 минуты"
          location="г. Новосибирск, национальный центр «Абилимпикс»"
        />
      </Link>
    </section>
  );
};
