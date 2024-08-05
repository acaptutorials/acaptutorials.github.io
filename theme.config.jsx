import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
  logo: (
    <>
      <img src="/images/logos/logo-acaptutorials.png" width="24" height="24" />&nbsp;
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
  head: () => {
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
        <a href="https://github.com/acaptutorials" target="_blank">
          acaptutorials
        </a>
      </span>
    )
  }
}