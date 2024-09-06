// next.config.mjs
export default {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-images-1.s3.us-east-2.amazonaws.com',
        pathname: '/**', // Allows any path from this hostname
      },
    ],
  },
};

