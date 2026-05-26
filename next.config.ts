import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    // "http://localhost:3000",
    // "http://127.0.0.1:3000",
    // "http://0.0.0.0:3000",
    // "http://192.168.0.244:3000",
    // "*",
  ],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
