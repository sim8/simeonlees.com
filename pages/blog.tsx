import Container from '../components/Container';
import BlogPosts from '../components/BlogPosts';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import type { PostType } from '../types';
import Navigation from '../components/Navigation';
import Heading from '../components/Heading';

type Props = {
  allPosts: PostType[];
};

export default function Blog({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Simeon Lees - Blog</title>
        </Head>
        <Container>
          <Navigation />
          <Heading>Simeon Lees // Blog</Heading>
          <BlogPosts posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'description',
  ]);

  return {
    props: { allPosts },
  };
};
