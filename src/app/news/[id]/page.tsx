import { Footer } from "@/components/widgets/footer/footer";
import { Header } from "@/components/widgets/header/header";
import Image from "next/image";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Абилимпикс-2025: завершающий день | ГПОУ СКСТ",
  description:
    "17 апреля 2025 года в ГПОУ «Сибирский колледж сервиса и технологий» завершили работу три соревновательные площадки X регионального чемпионата по профессиональному мастерству «Абилимпикс»-2025.",
  keywords:
    "Абилимпикс, ГПОУ СКСТ, чемпионат, профессиональное мастерство, Кемерово",
  openGraph: {
    title: "Абилимпикс-2025: завершающий день",
    description:
      "X региональный чемпионат по профессиональному мастерству в ГПОУ СКСТ",
    images: ["/news/1.png"],
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
            src="/news/1.png"
            alt="X региональный чемпионат Абилимпикс-2025 в ГПОУ СКСТ"
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
              headline: "Абилимпикс-2025: завершающий день",
              image: ["https://ogneva-dp21.ru/news/1.png"],
              datePublished: "2025-01-01",
              dateModified: "2025-01-01",
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
                "17 апреля 2025 года в ГПОУ «Сибирский колледж сервиса и технологий» завершили работу три соревновательные площадки X регионального чемпионата по профессиональному мастерству «Абилимпикс»-2025.",
            }),
          }}
        />
        <div className="flex flex-col gap-3">
          <h1 className="font-medium md:text-6xl text-2xl">
            Абилимпикс-2025: завершающий день
          </h1>
          <time dateTime="2025-01-01" className="text-lg text-[#69697B]">
            Январь 1, 2025
          </time>
          <div className="h-[1px] bg-[#E0E0E0] w-full" />
        </div>
        <p className="text-lg text-[#69697B]">
          17 апреля 2025 года в ГПОУ «Сибирский колледж сервиса и технологий»
          завершили работу три соревновательные площадки X регионального
          чемпионата по профессиональному мастерству «Абилимпикс»-2025.
        </p>
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-4xl">Площадки чемпионата</h2>
          <div className="text-lg text-[#69697B]">
            <p>
              На базе колледжа были организованы соревнования по трем
              компетенциям:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Портной (категория: специалисты)</li>
              <li>Роспись по шелку (категория: школьники)</li>
              <li>Парикмахерское искусство (категория: студенты)</li>
            </ul>
            <p className="mt-2">
              В чемпионате приняли участие конкурсанты из Кемерово и
              Новокузнецка.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-4xl">Конкурсные задания</h2>
          <div className="text-lg text-[#69697B] space-y-4">
            <div>
              <p className="font-bold mb-2">Компетенция «Портной»</p>
              <ul className="list-disc list-inside ml-4">
                <li>Пошив брюк</li>
                <li>Изготовление аксессуаров</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2">Компетенция «Роспись по шелку»</p>
              <ul className="list-disc list-inside ml-4">
                <li>Роспись батика с применением красителей</li>
                <li>Создание эффектов с использованием соли и карбамида</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2">
                Компетенция «Парикмахерское искусство»
              </p>
              <ul className="list-disc list-inside ml-4">
                <li>
                  Женская салонная короткая стрижка с окрашиванием и укладкой
                </li>
                <li>
                  Мужская стрижка по фотографии с оформлением бороды и усов
                </li>
                <li>
                  Женская собранная прическа с предварительным сложным
                  окрашиванием
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-medium text-4xl">Победители и призёры</h2>
          <div className="text-lg text-[#69697B] space-y-4 grid grid-cols-2 gap-4">
            <div>
              <p className="font-bold mb-2">Портной</p>
              <ol className="list-decimal list-inside ml-4">
                <li>Микурова Евгения Виторовна</li>
                <li>Швайцер Анастасия Андреевна</li>
                <li>Терешонок Людмила Евгеньевна</li>
              </ol>
            </div>
            <div>
              <p className="font-bold mb-2">Роспись по шелку</p>
              <ol className="list-decimal list-inside ml-4">
                <li>Бурлакова Кристина Сергеевна</li>
                <li>Нефёдова Валерия Денисовна</li>
                <li>Карманова Элеонора Александровна</li>
              </ol>
            </div>
            <div>
              <p className="font-bold mb-2">Сертификаты участников получили:</p>
              <ol className="list-decimal list-inside ml-4">
                <li>Маркина Анастасия Романовна</li>
                <li>Солодкова Анна Денисовна</li>
                <li>Михайлец Марина Александровна</li>
              </ol>
            </div>
            <div>
              <p className="font-bold mb-2">Сертификаты участников получили:</p>
              <ol className="list-decimal list-inside ml-4">
                <li>Маркина Анастасия Романовна</li>
                <li>Солодкова Анна Денисовна</li>
              </ol>
            </div>
            <div>
              <p className="font-bold mb-2">Парикмахерское искусство</p>
              <ol className="list-decimal list-inside ml-4">
                <li>Курбонова Камила Икромовна</li>
                <li>Иванов Данил Александрович</li>
                <li>Вихарева Александра Вадимовна</li>
              </ol>
            </div>
          </div>
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
            Поздравляем победителей и участников чемпионата! Желаем дальнейших
            успехов в профессиональном развитии и новых достижений!
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default Page;
