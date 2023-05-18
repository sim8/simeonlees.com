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
          <p className="mb-4">
            This is an isometric rendering engine I built in JS. I attempted
            this to get exposure to game programming patterns, and potentially
            use it as a foundation for a game in future.
          </p>
          <p className="mb-8">
            I wanted to avoid using any libraries for the game mechanics, and so
            am interacting with the HTML canvas directly to render and using
            Redux to maintain some state (camera + world).
          </p>
          <h2 className="text-2xl mb-4 leading-snug">How to use</h2>
          <ul className="ml-5">
            <li>Click the iframe to focus it</li>
            <li>
              <b>R</b> - rotate camera
            </li>
            <li>
              <b>Z</b> - cycle zoom
            </li>
            <li>
              <b>Arrow keys</b> - pan camera
            </li>
            <li>
              <b>Esc</b> - unfocus iframe
            </li>
          </ul>
        </div>
      </Container>

      <iframe
        className="mx-auto"
        src="https://isometric-js.netlify.app/"
        width="800"
        height="480"
      />
    </Layout>
  );
}
