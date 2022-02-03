/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["default", "en", "de", "fr"],
    defaultLocale: "default",
    localeDetection: false,
  },
  reactStrictMode: true,
  // trailingSlash: true,
};

module.exports = nextConfig;
