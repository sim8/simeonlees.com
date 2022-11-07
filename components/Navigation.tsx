import Link from 'next/link'

export default function Navigation() {
  return <nav className="mb-2">
    <Link className="hover:underline mr-4" href="/">About</Link>
    <Link className="hover:underline mr-4" href="/blog">Blog</Link>
  </nav>
}
