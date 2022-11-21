import classNames from 'classnames';
import Link from 'next/link'
import { useRouter } from 'next/router'

type Route = {
  pathname: string,
  title: string,
}

const routes: Route[] = [
  {
    pathname: '/',
    title: 'About',
  },
  {
    pathname: '/blog',
    title: 'Blog',
  }
]

export default function Navigation({rightNav}: {rightNav?: React.ReactNode}) {
  const router = useRouter();


  return <nav className="mb-2 flex">
    <div className="grow">

    {routes.map(({pathname, title}) => {
      const isCurrentRoute = pathname === '/' ? router.pathname === pathname : router.pathname.startsWith(pathname)
      return (
        <Link key={pathname} className={classNames("mr-4", {
          'hover:underline': !isCurrentRoute,
          'text-slate-400 cursor-default': isCurrentRoute,

        })} href={pathname}>{title}</Link>
        )
      })}
      </div>
    {rightNav ? rightNav : null}
  </nav>
}
