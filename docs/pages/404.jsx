import Head from 'next/head'
import Image from 'next/image'

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>404 Page Not Found | ACAP Tutorials</title>
        <meta name="description" content="The page you're looking for doesn't exist. Navigate back to ACAP Tutorials documentation." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <div className="max-w-md w-full text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/images/logos/logo-acaptutorials.png"
              width="64"
              height="64"
              alt="ACAP Tutorials Logo"
              className="mr-3"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ACAP Tutorials
            </span>
          </div>

          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-black-600 dark:text-blue-400 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          </div>

          {/* Help Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Need help finding what you&apos;re looking for?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://github.com/acaptutorials/acaptutorials.github.io/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                📝 Report an Issue
              </a>
              <a
                href="https://deepwiki.com/acaptutorials/acaptutorials.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                🤖 Ask DeepWiki
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFoundPage
