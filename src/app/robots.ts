import { MetadataRoute } from "next";

const DOMAIN = "https://portnext.com"; // Change this to your actual production domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/*", "/private/*"],
    },
    sitemap: `${DOMAIN}/sitemap.xml`,
  };
}
