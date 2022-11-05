import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Simeon Lees</title>
        </Head>
        <Container>
          <Link href="/blog">Blog</Link>
          Index page

        </Container>
      </Layout>
    </>
  )
}
