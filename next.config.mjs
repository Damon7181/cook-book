// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "t3.ftcdn.net",
      },
      {
        hostname: "i.ytimg.com",
      },
      {
        hostname: "img.youtube.com",
      },
      {
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;
