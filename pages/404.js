import Link from '../src/components/Link'

export default function Error404() {
  return (
    <>
      <h1>Você se perdeu :/</h1>
      <h2>Error 404 - Not Found</h2>
      <p>
        Ir para a <Link href="/">Home</Link>
      </p>
    </>
  )
}
