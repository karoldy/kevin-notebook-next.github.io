/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

const config = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true ,
};

module.exports = withNextra(config);
