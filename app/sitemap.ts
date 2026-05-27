import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/features",
  "/pricing",
  "/about",
  "/contact",
  "/products/messenger",
  "/modules/bookings",
  "/modules/sales-crm",
  "/modules/finance",
  "/modules/messenger",
  "/modules/marketing",
  "/modules/studio",
  "/modules/hr",
  "/modules/planner",
  "/privacy",
  "/do-not-sell",
  "/data-processing-addendum",
  "/subprocessors",
  "/gdpr",
  "/cookie-policy",
  "/terms",
  "/acceptable-use-policy",
  "/ai-usage-policy",
  "/copyright-dmca",
  "/data-deletion",
  "/security",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
  }));
}
