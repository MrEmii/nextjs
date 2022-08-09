import { Navbar } from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  // return <div>
  //   <Component {...pageProps} />
  // </div>

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
