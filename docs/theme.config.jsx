import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Image from 'next/image'

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

    const url = 'https://localhost:3000' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'ACAP Tutorials'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Development notes'}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </>
    )
  },
  banner: {
    key: 'v10.1.0-alpha.6-release',
    text: (
      <a href="#" target="_blank">
        🎉 acap-v2 v10.1.0-alpha.6, dev branch @e2df7bf is released. Read more →
      </a>
    )
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