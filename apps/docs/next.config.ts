import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  cacheComponents: true,
  transpilePackages: ["@repo/ui"],
  typedRoutes: true,
};

const NextApp = () => {
  const plugins = [withMDX];
  return plugins.reduce((config, plugin) => plugin(config), nextConfig);
};

export default NextApp;
