import '../styles/globals.css'

import Footer from '../components/footer.js'
import Navigation from '../components/navigation.js'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navigation />

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default MyApp
