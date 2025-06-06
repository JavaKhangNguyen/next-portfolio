/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  devIndicators: false,
  distDir: 'build'
}
 
module.exports = nextConfig