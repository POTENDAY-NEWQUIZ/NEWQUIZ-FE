import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  register: true,
});

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "newquiz-s3-bucket.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default withPWA(nextConfig);
