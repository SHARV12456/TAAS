import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/admin/",
        "/_next/",
      ],
    },
    sitemap: "https://taas-vf6a.vercel.app/sitemap.xml",
  };
}
