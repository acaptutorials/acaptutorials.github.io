const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
  // Hydration fix: WATCHPACK_POLLING + config if running in Docker and Windows WSL2
  ...(process.env.WATCHPACK_POLLING && {
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
      return config
    }
  }),
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    // Use unoptimized for static hosting
    unoptimized: true
  },
  env: {
    RELEASE_PAGE: process.env.RELEASE_PAGE,
    RELEASE_VERSION: process.env.RELEASE_VERSION,
    COMMIT_ID: process.env.COMMIT_ID,
    OPENGRAPH_IMAGE_URL: process.env.OPENGRAPH_IMAGE_URL
  }
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })