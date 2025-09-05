import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "cdna.artstation.com",
      "lh3.googleusercontent.com",
      "image.tmdb.org",
    ], // thêm domain bạn muốn dùng
  },
  /* config options here */

  turbopack: {
    root: "./", // chỉ định thư mục hiện tại là root
  },
};

export default nextConfig;
