import Contexts from 'src/contexts'
import '../styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import 'normalize.css/normalize.css';
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.getElementById("__next").className = "custom-root-class";
  }, []);

  return (
    <Contexts>
      <ToastContainer />
      <Component {...pageProps} />
    </Contexts>
  )

}

export default MyApp
