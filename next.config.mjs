/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  env: {
    HOST: 'http://localhost:3000'
  }
};

export default nextConfig;