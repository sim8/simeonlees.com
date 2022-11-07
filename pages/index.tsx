import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Navigation from '../components/Navigation'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Simeon Lees</title>
        </Head>
        <Container>
          <Navigation/>
          <section>
            <h1 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Hi, I'm Simeon Lees.</h1>
            </section>

        </Container>
      </Layout>
    </>
  )
}
