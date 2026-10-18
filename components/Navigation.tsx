import Link from 'next/link';
import { useRouter } from 'next/router';

type Route = {
  pathname: string;
  title: string;
};

const routes: Route[] = [
  {
    pathname: '/',
    title: 'About',
  },
  {
    pathname: '/projects',
    title: 'Side projects',
  },
];

const linkCommonClassnames = 'mr-5';

export default function Navigation({ backUrl }: { backUrl?: string }) {
  const router = useRouter();

  return (
    <nav className="mb-2 flex">
      <div className="grow">
        {routes.map(({ pathname, title }) => {
          const isCurrentRoute =
            pathname === '/'
              ? router.pathname === pathname
              : router.pathname.startsWith(pathname);
          return isCurrentRoute ? (
            <span
              key={pathname}
              className={`${linkCommonClassnames} text-slate-400`}
            >
              {title}
            </span>
          ) : (
            <Link
              key={pathname}
              className={`${linkCommonClassnames} hover:underline`}
              href={pathname}
            >
              {title}
            </Link>
          );
        })}
      </div>
      {backUrl ? (
        <Link href={backUrl} className="hover:underline">
          ← Back
        </Link>
      ) : null}
    </nav>
  );
}
