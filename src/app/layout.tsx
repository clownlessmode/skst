import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Montserrat({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "ГПОУ СКСТ - Сибирский колледж сервиса и технологий Кемерово | Огнева А.Д ДП-21",
  description:
    "Государственное профессиональное образовательное учреждение Сибирский колледж сервиса и технологий в Кемерово. Обучение с 1943 года по специальностям: дизайн, реклама, парикмахерское искусство, визаж, технологии красоты, швейное производство, ювелирное дело. Поступление после 9 и 11 класса.",
  keywords:
    "ГПОУ СКСТ, Сибирский колледж сервиса и технологий, колледж Кемерово, профессиональное образование Кемерово, поступить в колледж Кемерово, колледж после 9 класса Кемерово, колледж после 11 класса, дизайн обучение Кемерово, парикмахер обучение, визажист обучение, колледж красоты Кемерово, швейный колледж, ювелир обучение, реклама обучение, СПО Кемерово, техникум Кемерово, среднее профессиональное образование",
  authors: [{ name: "ГПОУ СКСТ" }],
  creator: "ГПОУ СКСТ",
  publisher: "ГПОУ СКСТ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ogneva-dp21.ru"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ГПОУ СКСТ - Сибирский колледж сервиса и технологий | Кемерово",
    description:
      "Официальный сайт ГПОУ СКСТ в Кемерово. Качественное профессиональное образование с 1943 года. 11 специальностей: дизайн, реклама, индустрия красоты, швейное производство. Государственный диплом, лицензия №Л035-01258-42/00224810.",
    url: "https://ogneva-dp21.ru",
    siteName: "ГПОУ СКСТ",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ГПОУ СКСТ - Сибирский колледж сервиса и технологий Кемерово",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ГПОУ СКСТ - Сибирский колледж сервиса и технологий | Кемерово",
    description:
      "Профессиональное образование в Кемерово с 1943 года. 11 специальностей, государственный диплом.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "yandex-verification": "", // Добавьте код после регистрации в Яндекс.Вебмастер
    "google-site-verification": "", // Добавьте код после регистрации в Google Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ffffff" />

        {/* Дополнительные метатеги для локального SEO */}
        <meta name="geo.region" content="RU-KEM" />
        <meta name="geo.placename" content="Кемерово" />
        <meta name="geo.position" content="55.354968;86.087314" />
        <meta name="ICBM" content="55.354968, 86.087314" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Альтернативные ссылки */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Новости ГПОУ СКСТ"
          href="/rss.xml"
        />

        {/* Schema.org разметка для образовательного учреждения */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "@id": "https://ogneva-dp21.ru/#organization",
              name: "ГПОУ СКСТ - Сибирский колледж сервиса и технологий",
              alternateName: [
                "ГПОУ СКСТ",
                "Сибирский колледж сервиса и технологий",
              ],
              url: "https://ogneva-dp21.ru",
              logo: "https://ogneva-dp21.ru/logo.png",
              description:
                "Государственное профессиональное образовательное учреждение Сибирский колледж сервиса и технологий. Профессиональное образование в Кемерово с 1943 года.",
              foundingDate: "1943",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Космическая улица, 8а",
                addressLocality: "Кемерово",
                addressRegion: "Кемеровская область",
                postalCode: "650024",
                addressCountry: "RU",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+7-384-228-14-87",
                contactType: "Приемная комиссия",
                email: "narodprom@mail.ru",
                availableLanguage: "Russian",
              },
              sameAs: ["https://vk.com/scst_42"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Специальности ГПОУ СКСТ",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Дизайн (по отраслям)",
                    category: "Профессиональное образование",
                  },
                  {
                    "@type": "Offer",
                    name: "Реклама",
                    category: "Профессиональное образование",
                  },
                  {
                    "@type": "Offer",
                    name: "Технология парикмахерского искусства",
                    category: "Профессиональное образование",
                  },
                  {
                    "@type": "Offer",
                    name: "Стилистика и искусство визажа",
                    category: "Профессиональное образование",
                  },
                  {
                    "@type": "Offer",
                    name: "Технология эстетических услуг",
                    category: "Профессиональное образование",
                  },
                  {
                    "@type": "Offer",
                    name: "Технологии индустрии красоты",
                    category: "Профессиональное образование",
                  },
                  {
                    "@type": "Offer",
                    name: "Конструирование, моделирование и технология швейных изделий",
                    category: "Профессиональное образование",
                  },
                  {
                    "@type": "Offer",
                    name: "Художник по костюму",
                    category: "Профессиональное образование",
                  },
                  {
                    "@type": "Offer",
                    name: "Ювелир",
                    category: "Профессиональное образование",
                  },
                  {
                    "@type": "Offer",
                    name: "Исполнитель художественно-оформительских работ",
                    category: "Профессиональное образование",
                  },
                ],
              },
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "Лицензия на образовательную деятельность",
                recognizedBy: {
                  "@type": "Organization",
                  name: "Министерство образования РФ",
                },
                educationalLevel: "Среднее профессиональное образование",
                identifier: "№Л035-01258-42/00224810",
              },
            }),
          }}
        />

        {/* Дополнительная разметка для локального бизнеса */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ГПОУ СКСТ",
              image: "https://ogneva-dp21.ru/logo.png",
              telephone: "+73842281487",
              email: "narodprom@mail.ru",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Космическая улица, 8а",
                addressLocality: "Кемерово",
                addressRegion: "Кемеровская область",
                postalCode: "650024",
                addressCountry: "RU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 55.354968,
                longitude: 86.087314,
              },
              url: "https://ogneva-dp21.ru",
              priceRange: "₽₽",
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden bg-white min-h-screen min-w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
