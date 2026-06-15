import type { MetadataRoute } from "next";
import { profile } from "@/lib/data";
import { seoDescription, siteUrl } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} Full Stack Developer`,
    short_name: profile.name,
    description: seoDescription,
    start_url: siteUrl,
    scope: siteUrl,
    display: "standalone",
    background_color: "#08080a",
    theme_color: "#08080a",
    orientation: "portrait",
    categories: ["portfolio", "developer", "technology"],
    lang: "en-IN",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
    ],
  };
}
