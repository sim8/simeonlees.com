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

const linkCommonClassnames = 'mr-4';

export default function Navigation({backUrl}: {backUrl?: string}) {
  const router = useRouter();


  return <nav className="mb-2 flex">
    <div className="grow">

    {routes.map(({pathname, title}) => {
      const isCurrentRoute = pathname === '/' ? router.pathname === pathname : router.pathname.startsWith(pathname)
      return isCurrentRoute ? <span className={`${linkCommonClassnames} text-slate-400`}>{title}</span> :         <Link key={pathname} className={`${linkCommonClassnames} hover:underline`} href={pathname}>{title}</Link>
      })}
      </div>
    {backUrl ? <Link href={backUrl} className='hover:underline'>← Back</Link> : null}
  </nav>
}
