import Avatar from './avatar'
import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  date: string
  author: string
}

const PostHeader = ({ title, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <div>{author}</div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
        <div>{author}</div>
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
