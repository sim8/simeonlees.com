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
            <p>
              I'm a Frontend Engineer with a passion for crafting{' '}
              <strong>delightful user experiences</strong>. I'm currently a Tech
              Lead at{' '}
              <a className="text-blue" href="https://www.hubspot.com">
                HubSpot
              </a>{' '}
              building out its collaboration platform.
            </p>
          </section>
          <hr className="my-7" />
          <section>
            <ul>
              {links.map((link) => (
                <li className="unstyled" key={link.href}>
                  {link.title}:{' '}
                  <a href={link.href} className="text-blue">
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
