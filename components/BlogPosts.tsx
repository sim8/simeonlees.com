import Link from 'next/link';
import DateFormatter from './DateFormatter';
import type Post from '../interfaces/post';

type Props = {
  posts: Post[];
};

const BlogPosts = ({ posts }: Props) => {
  return (
    <section>
      <ol>
        {posts.map((post) => (
          <li className="py-1 flex unstyled" key={post.slug}>
            <Link
              as={`/blog/${post.slug}`}
              href="/blog/[slug]"
              className="grow hover:underline"
            >
              {post.title}
            </Link>
            <span className="shrink-0 text-slate-400">
              <DateFormatter dateString={post.date} />
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default BlogPosts;
