import React from "react";

import { NewsItem } from "./news-item";
import { Button } from "@/components/ui/button";

export const News = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full justify-between items-center flex">
        <h2 className="text-4xl font-medium">Последние новости</h2>
        <Button variant="outline" className="uppercase">
          Узнать больше
        </Button>
      </div>

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
    </div>
  );
};
