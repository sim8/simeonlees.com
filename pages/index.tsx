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
          <section >
            <h1 className="mb-8 text-black text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Hi, I'm Simeon Lees.</h1>
            <p>I'm a Frontend Engineer with a passion for crafting <strong>delightful user experiences</strong>. I'm currently a Tech Lead at <a className="text-blue" href="https://www.hubspot.com">HubSpot</a> building out its collaboration platform.</p>
            </section>
            <hr className="my-7"/>
            <section>
              <ul>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/simeon-lees/" className="text-blue">https://www.linkedin.com/in/simeon-lees/</a></li>
                <li>GitHub: <a href="https://github.com/sim8" className="text-blue">https://github.com/sim8</a></li>
                <li>CV: <a href="/simeon-lees-cv.pdf" className="text-blue">/simeon-lees-cv.pdf</a></li>

                </ul>
            </section>

        </Container>
      </Layout>
    </>
  )
}
