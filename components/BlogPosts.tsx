import Link from 'next/link'
import DateFormatter from './DateFormatter'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const BlogPosts = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-black text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Simeon Lees // Blog
      </h2>
      <ol>
        {posts.map((post) => (
          <li className="py-1 flex" key={post.slug}>
            <Link
              as={`/posts/${post.slug}`}
              href="/posts/[slug]"
              className="grow hover:underline"
            >
              {post.title}
            </Link>
            <span className="shrink-0 text-slate-400"><DateFormatter dateString={post.date}/></span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default BlogPosts
