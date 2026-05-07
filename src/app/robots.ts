import type { MetadataRoute } from "next";

const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-Web",
  "Google-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/thanks-xray" },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/thanks-xray",
      })),
    ],
    sitemap: "https://sprintzero.sh/sitemap.xml",
  };
}
