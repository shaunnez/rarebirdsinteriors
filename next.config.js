/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.squarespace-cdn.com",
      "loremflickr.com",
      "placeimg.com",
      "via.placeholder.com",
      "source.unsplash.com",
    ],
  },
  experimental: { images: { layoutRaw: true } },
};

module.exports = nextConfig;
