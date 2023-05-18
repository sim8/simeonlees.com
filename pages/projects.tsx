import Container from '../components/Container';
import Layout from '../components/layout';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';
import projects from '../config/projects';
import Image from 'next/image';
import ButtonLink from '../components/ButtonLink';

export default function Projects() {
  return (
    <>
      <Layout>
        <Head>
          <title>Simeon Lees - Projects</title>
        </Head>
        <Container>
          <Navigation />
          <Heading>Projects</Heading>
          <section>
            <ul className="unstyled">
              {projects.map(
                ({ slug, title, description, previewUrl, link }) => (
                  <li key={slug} className="flex items-start mb-10">
                    <div className="flex-1 mr-10">
                      <h2 className="text-2xl mb-4 leading-snug">{title}</h2>
                      <p className="mb-5">{description}</p>
                      <ButtonLink href={link}>Go</ButtonLink>
                    </div>
                    <Image
                      src={previewUrl}
                      alt={title}
                      width={248}
                      height={192}
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
