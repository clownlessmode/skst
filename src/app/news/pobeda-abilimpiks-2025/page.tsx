import { Footer } from "@/components/widgets/footer/footer";
import { Header } from "@/components/widgets/header/header";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Победа на отборочном чемпионате Абилимпикс-2025 | ГПОУ СКСТ",
  description:
    "Студентка ГПОУ СКСТ Курбонова Камила заняла 1 место в компетенции «Парикмахерское искусство» на Межрегиональном этапе национального чемпионата «Абилимпикс» в Новосибирске.",
  keywords:
    "Абилимпикс, победа, ГПОУ СКСТ, парикмахерское искусство, чемпионат, Новосибирск",
  openGraph: {
    title: "Победа на отборочном чемпионате Абилимпикс-2025",
    description:
      "Студентка ГПОУ СКСТ заняла 1 место в компетенции «Парикмахерское искусство»",
    images: ["/news/2.png"],
  },
};

const Page = () => {
  return (
    <main className="mx-auto max-w-[1440px] w-full flex flex-col gap-[10vh] justify-center items-center">
      <section className="flex flex-col justify-between py-8 min-h-screen">
        <Header />
        <div className="md:px-0 px-4">
          <Image
            className="w-full aspect-video h-[calc(100vh-200px)] object-cover overflow-hidden rounded-2xl"
            width={1440}
            height={1000}
            src="/news/2.png"
            alt="Победа студентки ГПОУ СКСТ на чемпионате Абилимпикс-2025"
          />
        </div>
      </section>
      <article className="md:px-0 px-4 mx-0 flex flex-col gap-6 max-w-[810px] w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: "Победа на отборочном чемпионате Абилимпикс-2025",
              image: ["https://ogneva-dp21.ru/news/2.png"],
              datePublished: "2025-05-16",
              dateModified: "2025-05-16",
              author: {
                "@type": "Organization",
                name: "ГПОУ СКСТ",
              },
              publisher: {
                "@type": "Organization",
                name: "ГПОУ СКСТ",
                logo: {
                  "@type": "ImageObject",
                  url: "https://ogneva-dp21.ru/logotype.png",
                },
              },
              description:
                "Студентка ГПОУ СКСТ Курбонова Камила заняла 1 место в компетенции «Парикмахерское искусство» на Межрегиональном этапе национального чемпионата «Абилимпикс» в Новосибирске.",
            }),
          }}
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-medium md:text-6xl text-2xl">
            Победа на отборочном чемпионате
          </h1>
          <time dateTime="2025-05-16" className="text-lg text-[#69697B]">
            Май 16, 2025
          </time>
          <div className="h-[1px] bg-[#E0E0E0] w-full" />
        </div>
        <p className="text-lg text-[#69697B]">
          По итогам Межрегионального этапа национального чемпионата «Абилимпикс»
          в Сибирском федеральном округе, который проходил в городе Новосибирск,
          студентка ГПОУ «Сибирский колледж сервиса и технологий» Курбонова
          Камила заняла 1 место в компетенции «Парикмахерское искусство».
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-4xl">Путь к победе</h2>
          <p className="text-lg text-[#69697B]">
            Заняв 1 место, Камила получила «путёвку» для участия в Национальном
            чемпионате профессионального мастерства «Абилимпикс»-2025, который
            пройдет в октябре 2025 года в городе Москва.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-4xl">Участники отборочного этапа</h2>
          <div className="text-lg text-[#69697B]">
            <p>
              В отборочном этапе принимали участие представители четырех
              регионов:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Кемеровская область – Кузбасс</li>
              <li>Сахалинская область</li>
              <li>Томская область</li>
              <li>Красноярский край</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-4xl">Благодарности</h2>
          <p className="text-lg text-[#69697B]">
            Благодарим и поздравляем педагога-наставника{" "}
            <strong>Колмакову Нину Викторовну</strong> за отличную подготовку
            студентки к соревнованиям!
          </p>
        </div>
        <div className="text-lg text-[#69697B] w-full text-center bg-white shadow-2xl rounded-2xl py-[64px] px-[82px] relative overflow-hidden">
          <Image
            src="/quotes.png"
            alt="quotes"
            width={200}
            height={200}
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-100 pointer-events-none"
          />
          <p className="relative z-10">
            Желаем не останавливаться на достигнутом, всегда двигаться вперед,
            покорять новые вершины!
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default Page;
