import Link from '../src/components/Link'
import PageTitle from '../src/components/PageTitle'

/** SSG - Static Site Generation */
/** SSR - Server Side Rendering */
/** ISG - Incremental Static Generation */

//** export async function getServerSideProps() { */
//** Roda sempre que a página receber um acesso */
/** Em modo DEV roda a cada acesso */

export async function getStaticProps() {
  /** Roda SOMENTE em build time */
  /** Em modo DEV roda a cada acesso */

  const FAQ_API_URL =
    'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const faq = await fetch(FAQ_API_URL)
    .then((responseAPI) => {
      return responseAPI.json()
    })
    .then((response) => {
      return response
      console.log(response)
    })
  return {
    props: {
      faq,
    },
  }
}

export default function Faq({ faq }) {
  return (
    <>
      <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
      <h1>FAQ Page</h1>
      <p>
        Voltar para a <Link href="/">Home</Link>
      </p>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
