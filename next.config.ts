import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  reactStrictMode: true,
  
  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === "production" ? {
      exclude: ['error', 'warn']
    } : false,
  },
  
  // Output standalone for faster builds
  output: process.env.NODE_ENV === "production" ? "standalone" : undefined,
  
  // Disable source maps in production for faster builds
  productionBrowserSourceMaps: false,
  
  // Webpack optimizations for faster builds
  webpack: (config, { dev, isServer }) => {
    // Enable filesystem cache for faster rebuilds
    if (!dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
    }
    
    // Exclude node_modules from unnecessary processing
    config.resolve.symlinks = false;
    
    // Optimize module resolution
    config.resolve.modules = ['node_modules'];
    
    return config;
  },
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'videos.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Optimize image loading
    formats: ['image/avif', 'image/webp'],
    // Disable image optimization during build for faster builds
    unoptimized: process.env.SKIP_IMAGE_OPTIMIZATION === 'true',
  },
  
  // TypeScript and ESLint optimizations
  typescript: {
    // Don't ignore errors, but allow faster builds in CI
    ignoreBuildErrors: process.env.CI === 'true' ? false : false,
  },
  eslint: {
    // Only run ESLint in CI, skip during local builds for speed
    ignoreDuringBuilds: process.env.CI !== 'true',
  },
  
  // Experimental features for better performance
  experimental: {
    // Enable optimized CSS loading
    optimizeCss: true,
    // Optimize package imports (tree-shaking)
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'recharts',
      '@radix-ui/react-slot',
    ],
  },
  
  // Turbopack configuration (moved from experimental)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
