import Container from '../components/Container'
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
            <p>Hey, I'm a Frontend Engineer with a passion for crafting <strong>delightful user experiences</strong>. I'm currently a Tech Lead at <a className="text-blue" href="https://www.hubspot.com">HubSpot</a> building out its collaboration platform.</p>
            </section>

        </Container>
      </Layout>
    </>
  )
}
