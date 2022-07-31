import Contexts from 'src/contexts'
import '../styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function MyApp({ Component, pageProps }) {
  return (
    <Contexts>
      <ToastContainer />
      <Component {...pageProps} />
    </Contexts>
  )

}

export default MyApp
