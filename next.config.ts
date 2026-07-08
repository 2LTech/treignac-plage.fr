import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://2ltech.github.io/treignac-plage.fr/**")],
  },
};

export default nextConfig;
