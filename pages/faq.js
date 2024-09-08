import { useEffect, useState } from 'react'
import Link from '../src/components/Link'

export async function getStaticProps() {
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
  // const [faq, setFaq] = useState([])

  // useEffect(() => {
  //   const FAQ_API_URL =
  //     'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  //   fetch(FAQ_API_URL)
  //     .then((responseAPI) => {
  //       return responseAPI.json()
  //     })
  //     .then((response) => {
  //       setFaq(response)
  //       console.log(response)
  //     })
  // }, [])

  return (
    <>
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
