/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BUCKETNAME: process.env.BUCKETNAME,
    REGION: process.env.REGION,
    DIRNAME: process.env.DIRNAME,
    SECRETACCESSKEY: process.env.SECRETACCESSKEY,
    ACCESSKEYID: process.env.ACCESSKEYID,
  }
}

module.exports = nextConfig
