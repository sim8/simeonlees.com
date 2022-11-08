import Link from 'next/link'
import DateFormatter from './date-formatter'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const Blog = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Simeon Lees // Blog
      </h2>
      <ol>
        {posts.map((post) => (
          <li className="py-1 flex">
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className="grow hover:underline"
            >
              {post.title}
            </Link>
            <span className="shrink-0"><DateFormatter dateString={post.date}/></span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Blog
