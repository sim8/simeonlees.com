import Avatar from './avatar'
import DateFormatter from './date-formatter'
import Link from 'next/link'

type Props = {
  title: string
  date: string
  description: string
  author: string
  slug: string
}

const PostPreview = ({
  title,
  date,
  description,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
      <div>{author}</div>
    </div>
  )
}

export default PostPreview
