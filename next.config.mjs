/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, "pino", "pino-pretty", "jsdom"];

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
