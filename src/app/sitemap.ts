import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tokala.dev",
      lastModified: new Date(),
    },
    {
      url: "https://tokala.dev/about",
      lastModified: new Date(),
    },
    {
      url: "https://tokala.dev/contact",
      lastModified: new Date(),
    },
    {
      url: "https://tokala.dev/projects",
      lastModified: new Date(),
    },
  ];
}
