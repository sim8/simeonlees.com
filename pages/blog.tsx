import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Link from 'next/link'

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
        <Link href="/">About</Link>
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
