import '../styles/globals.css'
import {Layout} from '../components/Layout'
import Head from "next/Head"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="color-scheme" content="light only"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
