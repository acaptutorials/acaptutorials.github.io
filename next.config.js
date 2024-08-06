const withNextra = require('nextra')({
  reactStrictMode: true,
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
  output: 'export',
  images: {
    // Use unoptimized for static hosting
    unoptimized: true
  }
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })