import type { NextConfig } from "next";

const repo = "provides-field-scanning-and-2d-as-built-drawing-updates-for-industrial-facilitie-2025-10-04-sdcip";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};

export default nextConfig;
