import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BestBasket — Smart Grocery Savings & Price Comparison",
    short_name: "BestBasket",
    description:
      "Compare local grocery prices, clip digital coupons, and maximize your weekly grocery savings with AI-powered insights.",
    start_url: "/",
    display: "standalone",
    background_color: "#F8F9FD",
    theme_color: "#7C3AED",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
