/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

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
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
