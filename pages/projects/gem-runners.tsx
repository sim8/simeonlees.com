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
            The idea behind Gem Runners was simple: land on an asteroid, dig for
            gems, and get out before it burns up. The valuable stuff is deeper
            inside, past harder rock and pockets of lava. How far do you push
            your luck before turning back?
          </p>
          <p>
            I built it in C# with MonoGame, a lightweight framework for
            cross-platform games. I wanted to understand what went into making a
            game, so beyond MonoGame I tried to avoid other libraries and
            frameworks. That meant building the engine alongside the game, from
            movement and collisions to lighting, world generation, and UI.
          </p>
          <p>
            A lot of the work was in making those pieces interact. Driving and
            drilling can destabilise the ground around you, opening cracks that
            give way to lava. Explosive rock can set off nearby explosions.
            Digging a tunnel changes both what you can see and how safely you
            can get back out.
          </p>
          <p>
            Making that world look right was another project in itself. I
            learned pixel art in Aseprite and built a tiling system that picks
            each corner of a wall or floor from its neighbours, so the edges
            join up as you mine. Then came the layers: getting the vehicle to
            sit correctly behind walls, light spilling from lava, and fog
            gradually lifting as you explore.
          </p>
          <p>
            The asteroids are generated rather than hand-drawn, with a crust,
            mantle, and core, each with its own mix of rock, gems, and hazards.
            I built a separate viewer to see the whole asteroid at once,
            generate new ones, and toggle layers and walls. It let me inspect
            the shape of a world without having to drive through every tunnel.
          </p>
          <p>
            For the menus and inventory, I brought some familiar ideas from web
            development: a tree of UI elements, composed like React components
            and arranged with flexbox-style rows, columns, padding, and
            alignment. Except this time I had to make all of that work myself.
            Even displaying text meant mapping out the position and width of
            each character in a font PNG, then measuring words to work out where
            a line should wrap. Educational, occasionally tedious, and a good
            reminder of what a browser usually does for me.
          </p>
          <p>
            I&apos;m proud of the world and tools I built, but I never quite
            cracked the core loop. There was always another system I could
            improve; making the mining itself something I wanted to keep coming
            back to was harder. I came away with a much better understanding of
            how games work, and a lot more respect for the people who make them
            fun.
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
