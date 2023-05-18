import Container from '../components/Container';
import Layout from '../components/layout';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';
import projects from '../config/projects';

export default function Projects() {
  return (
    <>
      <Layout>
        <Head>
          <title>Simeon Lees - Projects</title>
        </Head>
        <Container>
          <Navigation />
          <Heading>Simeon Lees // Projects</Heading>
          <section>
            <ul>
              {projects.map(({ slug, title }) => (
                <li key={slug}>{title}</li>
              ))}
            </ul>
          </section>
        </Container>
      </Layout>
    </>
  );
}
