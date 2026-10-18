import Container from '../../components/Container';
import Layout from '../../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import baseInterior from '../../public/images/gem-runners/base-interior.webp';
import miningGameplay from '../../public/images/gem-runners/mining-gameplay.webp';
import asteroidGenerator from '../../public/images/gem-runners/asteroid-generator.webp';
import Navigation from '../../components/Navigation';
import Heading from '../../components/Heading';

const screenshots = [
  {
    image: miningGameplay,
    alt: 'A mining vehicle exploring rocky asteroid tunnels beside lava, with lighting and a minimap',
    caption: 'Exploring an asteroid, with custom lighting and tiles.',
  },
  {
    image: baseInterior,
    alt: 'A pixel art character and mining vehicle inside a tiled base, with inventory items along the bottom',
    caption: 'The base interior, pixel art, and in-game UI.',
  },
  {
    image: asteroidGenerator,
    alt: 'The procedural generation viewer displaying an asteroid with rocky layers, caves, and lava for seed 853',
    caption:
      'The asteroid-generation viewer, used to inspect and iterate on generated worlds.',
  },
];

export default function GemRunners() {
  return (
    <Layout>
      <Head>
        <title>Gem Runners | Simeon Lees</title>
        <meta
          name="description"
          content="An asteroid-mining game built in C# and MonoGame, and an exercise in making an engine, tools, and pixel art from scratch."
          key="description"
        />
      </Head>
      <Container>
        <Navigation backUrl="/projects" />
        <header className="mb-8">
          <Heading>Gem Runners</Heading>
        </header>
        <div className="space-y-6">
          <p>
            Gem Runners is an asteroid-mining game I built in C# with MonoGame,
            a lightweight framework for cross-platform games. Beyond MonoGame, I
            tried to avoid other libraries and frameworks as a learning
            exercise.
          </p>
          <p>
            I built the engine from scratch, including lighting and a custom
            tiling system. I also built procedural asteroid generation and a
            separate viewer to explore the results and iterate on them.
          </p>
          <p>
            For the in-game UI, I built a layout system inspired by flexbox and
            React. I learned a lot, but some of it was tedious: manually writing
            out the x, y, width, and height of every character in my font PNG
            was a particular highlight.
          </p>
          <p>
            Along the way, I learned pixel art and created the artwork in
            Aseprite.
          </p>
          <p>
            Ultimately, I struggled to make the core game loop really fun.
            Building the systems was satisfying; making a game I wanted to keep
            playing was much harder. Lots of respect for game designers!
          </p>
        </div>
        <section
          aria-label="Gem Runners screenshots"
          className="mt-8 space-y-8"
        >
          {screenshots.map(({ image, alt, caption }) => (
            <figure key={image.src}>
              <a
                href={image.src}
                aria-label={`View full-size screenshot: ${caption}`}
              >
                <Image
                  src={image}
                  alt={alt}
                  sizes="(max-width: 672px) calc(100vw - 64px), 608px"
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="mt-2 text-sm text-slate-500">
                {caption}
              </figcaption>
            </figure>
          ))}
        </section>
        <p className="mt-8">
          <a
            href="https://github.com/sim8/astro-miner"
            className="text-blue hover:underline"
          >
            Source on GitHub
          </a>
        </p>
      </Container>
    </Layout>
  );
}
