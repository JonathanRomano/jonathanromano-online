import '../styles/globals.css'
import '../styles/transition.css'

import Transition from '../components/Transition'

import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar/>
      <Transition>

        <Component {...pageProps} />
      </Transition>
    </div>
  )
}

export default MyApp
