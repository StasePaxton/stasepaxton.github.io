import '../styles/globals.css'

import Footer from '../components/footer.js'
import Navigation from '../components/navigation.js'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navigation />

      <main className="flex-grow mb-12">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}

export default MyApp
