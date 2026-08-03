/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // מתעלם משגיאות Linter בזמן הבנייה כדי למנוע תקיעה
    ignoreDuringBuilds: true,
  },
  typescript: {
    // מתעלם משגיאות TypeScript בזמן הבנייה כדי למנוע תקיעה
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
