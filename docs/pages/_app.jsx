// These styles apply to every route in the application
import PropTypes from 'prop-types'
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}

export default App
