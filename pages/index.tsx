import Container from '../components/Container';
import Layout from '../components/layout';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';

const links = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/simeon-lees/',
    linkText: 'https://www.linkedin.com/in/simeon-lees/',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/sim8',
    linkText: 'https://github.com/sim8',
  },
  { title: 'CV', href: '/simeon-lees-cv.pdf', linkText: '/simeon-lees-cv.pdf' },
];

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Simeon Lees</title>
        </Head>
        <Container>
          <Navigation />
          <section>
            <Heading>Simeon Lees</Heading>
            <div className="space-y-4">
              <p>Hi! I&apos;m Simeon.</p>
              <p>
                I&apos;m a software engineer at Figma. I like building products,
                exploring new tech, and figuring out what makes software feel
                great.
              </p>
              <p>
                Previously at HubSpot. Outside work, I tinker with games and
                educational experiences.
              </p>
            </div>
          </section>
          <hr className="my-7" />
          <section>
            <ul className="unstyled">
              {links.map((link) => (
                <li key={link.href}>
                  {link.title}:{' '}
                  <a href={link.href} className="text-blue hover:underline">
                    {link.linkText}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </Layout>
    </>
  );
}
