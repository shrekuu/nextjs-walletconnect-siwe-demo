/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, "pino", "pino-pretty", "jsdom", 'encoding'];

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
