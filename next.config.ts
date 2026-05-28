import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['dig-rewrap-parmesan.ngrok-free.dev'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.cupra.com",
      },
    ],
  },
};

export default nextConfig;
