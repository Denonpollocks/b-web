import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07131d",
    theme_color: "#55cce1",
    icons: [
      {
        src: "/images/w-B-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
