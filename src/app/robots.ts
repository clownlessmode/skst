import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/_next/"],
        crawlDelay: 1,
      },
    ],
    sitemap: "https://ogneva-dp21.ru/sitemap.xml",
    host: "https://ogneva-dp21.ru",
  };
}
