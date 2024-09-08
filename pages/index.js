import Link from '../src/components/Link'

function Title({ children, as }) {
  const Tag = as
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
          font-family: sans-serif;
        }
      `}</style>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Title as="h1">Alura Cases</Title>
      <p>
        Ir para o <Link href="/faq">FAQ</Link>
      </p>
    </>
  )
}
