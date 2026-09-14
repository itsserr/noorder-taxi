import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://noordertaxi.nl";
  const routes = [
    "",
    "/reserveren",
    "/diensten",
    "/over-ons",
    "/contact",
    "/klachtenregeling",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
