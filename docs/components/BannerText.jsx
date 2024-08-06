function BannerText () {
  const version = process.env.RELEASE_VERSION ?? '0.0.0'

  return (
    <a href={process.env.RELEASE_PAGE ?? '#'} target="_blank">
      🎉 {version}, dev branch @{process.env.COMMIT_ID ?? '123456'} is released. Read more →
    </a>
  )
}

export default BannerText
