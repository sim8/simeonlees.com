import Container from '../components/Container';
import Layout from '../components/layout';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';
import Image from 'next/image';

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
          <section className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="min-w-0 flex-1">
              <Heading>Simeon Lees</Heading>
              <p>
                I&apos;m a Frontend Engineer with a passion for crafting{' '}
                <strong>delightful user experiences</strong>. I&apos;m currently
                a Tech Lead at{' '}
                <a
                  className="text-blue hover:underline"
                  href="https://www.hubspot.com"
                >
                  HubSpot
                </a>{' '}
                building out its collaboration platform.
              </p>
            </div>
            <Image
              src="/images/simeon-lees.png"
              alt="Pixel art portrait of Simeon Lees wearing sunglasses"
              width={400}
              height={400}
              priority
              className="h-40 w-40 shrink-0 object-cover sm:mt-5 sm:h-48 sm:w-48"
            />
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
