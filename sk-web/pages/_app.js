import Contexts from 'src/contexts'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Contexts>
      <Component {...pageProps} />
    </Contexts>
  )

}

export default MyApp
