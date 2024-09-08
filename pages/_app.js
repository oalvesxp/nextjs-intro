import Head from 'next/head'
import GlobalStyle from '../src/theme/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/** Inclusão de scripts externos.. como google analytics */}
        {/*<!-- Google tag (gtag.js) -->*/}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XEME6JS4LB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-XEME6JS4LB');
            `,
          }}
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
