const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    // Use unoptimized for static hosting
    unoptimized: true
  },
  env: {
    RELEASE_VERSION: process.env.RELEASE_VERSION,
    COMMIT_ID: process.env.COMMIT_ID
  }
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })