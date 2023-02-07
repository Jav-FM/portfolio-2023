/** @type {import('next').NextConfig} */
// const { i18n } = require("./src/shared/utils/next-i18next.config");
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  // i18n,
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig;

//en   es
