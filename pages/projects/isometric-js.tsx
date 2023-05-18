import Container from '../../components/Container';
import Layout from '../../components/layout';
import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Heading from '../../components/Heading';

export default function IsometricJs() {
  return (
    <Layout>
      <Head>
        <title>Isometric-JS | Simeon Lees</title>
        {/* <meta property="og:image" content={post.ogImage.url} /> */}
      </Head>
      <Container>
        <Navigation backUrl="/projects" />
        <header className="mb-8">
          <Heading>Isometric-JS</Heading>
        </header>

        <div>
          <p>TODO content</p>
          <iframe
            src="https://isometric-js.netlify.app/"
            width="800"
            height="480"
          />
        </div>
      </Container>
    </Layout>
  );
}
