import Container from '../components/Cdontainer'
import MoreStories from '../components/Blog'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Navigation from '../components/Navigation'

type Props = {
  allPosts: Post[]
}

export default function Blog({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Simeon Lees - blog</title>
        </Head>
        <Container>
          <Navigation />
          <MoreStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'description',
  ])

  return {
    props: { allPosts },
  }
}
