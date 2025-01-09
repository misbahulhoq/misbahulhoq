/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["postimg.cc", "i.postimg.cc"], // Add Postimages domains here
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //     pathname: "/mezbah900/image/upload/**",
    //   },
    // ],
  },
};

export default nextConfig;
