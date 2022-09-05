import '../styles/globals.css'
import NavBar from '../components/NavBar'

import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar/>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}  
      >

        <Component {...pageProps} />
      </AnimatePresence>
    </div>
  )
}

export default MyApp
