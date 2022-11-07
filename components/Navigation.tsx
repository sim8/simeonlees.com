import Link from 'next/link'

export default function Navigation() {
  return <nav>
    <Link className="hover:underline mr-4" href="/">About</Link>
    <Link className="hover:underline mr-4" href="/blog">Blog</Link>
  </nav>
}
