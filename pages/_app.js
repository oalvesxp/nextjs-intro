import Head from 'next/head'
import GlobalStyle from '../src/theme/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>{/** Inclusão de scripts externos.. como google analytics */}</Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
