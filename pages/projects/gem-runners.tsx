import Container from '../../components/Container';
import Layout from '../../components/layout';
import Head from 'next/head';
import Image, { type StaticImageData } from 'next/image';
import baseInterior from '../../public/images/gem-runners/base-interior.webp';
import miningGameplay from '../../public/images/gem-runners/mining-gameplay.webp';
import asteroidGenerator from '../../public/images/gem-runners/asteroid-generator.webp';
import Navigation from '../../components/Navigation';
import Heading from '../../components/Heading';

function Screenshot({
  image,
  alt,
  caption,
}: {
  image: StaticImageData;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <a href={image.src} aria-label={`View full-size screenshot: ${caption}`}>
        <Image
          src={image}
          alt={alt}
          sizes="(max-width: 672px) calc(100vw - 64px), 608px"
          className="h-auto w-full"
        />
      </a>
      <figcaption className="mt-2 text-sm text-slate-500">{caption}</figcaption>
    </figure>
  );
}

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
            Gem Runners is an asteroid-mining game built in C# with MonoGame, a
            lightweight framework for cross-platform games. You explore
            asteroids for gems and have to get out before time runs out.
          </p>
          <p>
            Beyond MonoGame, I tried to avoid other libraries and frameworks as
            a learning exercise. I built the engine alongside the game,
            including movement, collisions, lighting, and a custom tiling
            system.
          </p>
          <p>
            The tiles are drawn in quarters, choosing each piece based on its
            neighbours so the edges join up as you mine. Lighting and fog of war
            reveal the tunnels as you explore. Driving and drilling can also
            weaken the ground, causing it to collapse into lava.
          </p>
          <Screenshot
            image={miningGameplay}
            alt="A mining vehicle exploring rocky asteroid tunnels beside lava, with lighting and a minimap"
            caption="Mining, lighting, and the tiling system."
          />
          <p>
            The asteroids are procedurally generated using perlin noise, with
            different materials and hazards in the crust, mantle, and core. I
            built a separate viewer to generate asteroids and inspect their
            layers without playing through them:
          </p>
          <Screenshot
            image={asteroidGenerator}
            alt="The procedural generation viewer displaying an asteroid with rocky layers, caves, and lava for seed 853"
            caption="The asteroid-generation viewer."
          />
          <p>
            For the menus and inventory, I built a UI system inspired by React
            and flexbox: a tree of elements with rows, columns, padding, and
            alignment. That also meant handling text measurement and wrapping,
            including manually recording the coordinates and width of each
            character in a font PNG. Useful to learn, though fairly tedious!
          </p>
          <p>
            I also learned pixel art and made the artwork in Aseprite, from the
            terrain tiles to the character and mining vehicle.
          </p>
          <Screenshot
            image={baseInterior}
            alt="A pixel art character and mining vehicle inside a tiled base, with inventory items along the bottom"
            caption="The base interior and in-game UI."
          />
          <p>
            As much as I enjoyed building the game, I ultimately struggled to
            make the core loop fun, and didn&apos;t pursue releasing it.
            I&apos;m grateful for the technical lessons and now have a lot more
            respect for game designers!
          </p>
        </div>
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
