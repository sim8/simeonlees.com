import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/Container'
import PostBody from '../../components/PostBody'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import Navigation from '../../components/Navigation'
import DateFormatter from '../../components/DateFormatter'
import Link from 'next/link'
import Heading from '../../components/Heading'

type Props = {
  post: PostType
  morePosts: PostType[]
}

export default function Post({ post, morePosts }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        <Navigation rightNav={<Link href="/blog" className='hover:underline'>← Back</Link>}/>
        {router.isFallback ? (
          <span>Loading...</span>
        ) : (
          <>
            <Head>
              <title>
                {post.title} | Simeon Lees
              </title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <header className="mb-8">
            <Heading>
            {post.title}
            </Heading>
              <span className="text-slate-400"><DateFormatter dateString={post.date}/></span>
            </header>

            <PostBody content={post.content} />
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
