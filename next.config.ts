import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  experimental: {
    dynamicIO: true,
  },
};

export default nextConfig;
