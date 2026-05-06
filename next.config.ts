import type { NextConfig } from "next";
import { withPlausibleProxy } from "next-plausible";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  reactCompiler: true,
  typedRoutes: true,
};

export default withPlausibleProxy({
  src: "https://plausible.io/js/pa-yaXxF7dVcKtBSbOtfYd8j.js",
})(nextConfig);
