import Link from 'next/link';
import DateFormatter from './DateFormatter';
import type { PostType } from '../types';

type Props = {
  posts: PostType[];
};

const BlogPosts = ({ posts }: Props) => {
  return (
    <section>
      <ol className="unstyled">
        {posts.map((post) => (
          <li className="py-1 flex" key={post.slug}>
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
