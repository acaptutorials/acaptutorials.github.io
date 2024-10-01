import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Image from 'next/image'

import BannerText from '@/components/BannerText'
import Footer from '@/components/Footer'

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
  docsRepositoryBase: 'https://github.com/acaptutorials/acaptutorials.github.io/tree/dev/docs',
  useNextSeoProps: () => {
    return {
      titleTemplate: 'ACAP Tutorials - %s'
    }
  },
  head: function Head () {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()

    const url = 'https://acaptutorials.github.io' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    const title = 'ACAP Tutorials'
    const description = "The ACAP Tutorials website offers an organized and structured software development documentation for the Agro-Climatic Advisory Portal (ACAP), a Climate Information Services (CIS) web application initially piloted in the Bicol region (ACAP Bicol)."

    return (
      <>
        <meta name="description" content={description} />
        <meta name="keywords" content={`acap, acap tutorials, acap-tutorials, acap dev, acap dev tutorials, acap bicol, acap-bicol, acap 1.0, acap 2.0, acap requirements, acap installation, acap changelog, acap installation and setup, acap post-installation, acap checklist, acap security, acap security guidelines, acap folder structure, acap troubleshooting, acap references, acap firebase, acap-bicol, da, amia, department of agriculture, adoptation and mitigation initiative in agriculture, rfo5, bicol, regional field office 5, resilient agriculture, agro-climatic advisory portal, agro climatic advisory portal`} />
        <meta httpEquiv="content-language" content="en-gb" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || title} />
        <meta
          property="og:description"
          content={frontMatter.description || description}
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
      <Footer />
    )
  }
}
