/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains: ['cdn.weatherapi.com']
  },
  typescript:{ignoreBuildErrors: true,}
}

module.exports = nextConfig
