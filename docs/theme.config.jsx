import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Image from 'next/image'

import BannerText from '@/components/BannerText'

export default {
  logo: (
    <>
      <Image src="/images/logos/logo-acaptutorials.png" width="24" height="24" alt="logo" />&nbsp;
      <span>ACAP Development Docs</span>
    </>
  ),
  project: {
    link: 'https://github.com/acaptutorials/acaptutorials.github.io'
  },
  docsRepositoryBase: 'https://github.com/acaptutorials/acaptutorials.github.io',
  useNextSeoProps: () => {
    return {
      titleTemplate: 'ACAP Tutorials - %s'
    }
  },
  head: function Head () {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const title = 'ACAP Tutorials'

    const url = 'https://acaptutorials.github.io' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    console.log('---url', url)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || title} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Development notes'}
        />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={process.env.OPENGRAPH_IMAGE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={process.env.OPENGRAPH_IMAGE_URL} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </>
    )
  },
  banner: {
    key: process.env.RELEASE_VERSION ?? 'v10.1.0-alpha.6-release',
    text: <BannerText />
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: (
      <span>
        ACAP Dev Documentation {new Date().getFullYear()} ©{' '}
        <a href="https://github.com/acaptutorials" target="_blank" rel="noreferrer">
          acaptutorials
        </a>
      </span>
    )
  }
}