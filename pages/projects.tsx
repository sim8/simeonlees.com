import Container from '../components/Container';
import Layout from '../components/layout';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';
import projects from '../config/projects';
import Image from 'next/image';
import Link from 'next/link';

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
            <ul className="unstyled">
              {projects.map(
                ({ slug, title, description, previewUrl, link }) => (
                  <li key={slug}>
                    <div>
                      <h2>{title}</h2>
                      <p>{description}</p>
                      <Link href={link}>Go</Link>
                    </div>
                    <Image
                      src={previewUrl}
                      alt={title}
                      width={200}
                      height={180}
                    />
                  </li>
                )
              )}
            </ul>
          </section>
        </Container>
      </Layout>
    </>
  );
}
