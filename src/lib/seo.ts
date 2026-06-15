import { profile } from "@/lib/data";

// Keep all canonical SEO URLs in one place. The deployed site resolves to www,
// so canonical/social URLs should match the final public host.
export const siteUrl = "https://www.satyx.dev";
export const siteName = `${profile.name} Full Stack Developer`;
export const seoDescription =
  "Satyam Mishra is a full stack developer in Jaipur building React, Next.js, TypeScript, Node.js and Web3 products with polished user interfaces.";
export const ogImageUrl = `${siteUrl}/opengraph-image`;
