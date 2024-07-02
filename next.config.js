/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,  
  images: {
    domains: ['api.deezer.com', 'e-cdns-images.dzcdn.net', 'images.unsplash.com'],
  },
};

const withPWA = require("next-pwa")({
  dest: "public", // Zielverzeichnis für die PWA-Dateien
  disable: process.env.NODE_ENV === "development", // Deaktiviert PWA im Entwicklungsmodus
  register: true, // Registriert den PWA Service Worker
  skipWaiting: true, // Überspringt das Warten auf die Aktivierung des Service Workers
});

const webpack = require('webpack');

module.exports = withPWA({
  ...nextConfig,
  webpack: (config, { dev, isServer }) => {

    if (!dev && !isServer) {
      config.plugins.push(
        new webpack.DefinePlugin({
          'console.log': '(() => {})', 
        })
      );
    }


    
    return config;
  },
});
