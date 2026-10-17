import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wispry — User Rewards Platform",
    short_name: "Wispry",
    description:
      "A platform where users earn real rewards by engaging with their community, tracking daily milestones, and unlocking sponsored bonuses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D12",
    theme_color: "#0D0D12",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
