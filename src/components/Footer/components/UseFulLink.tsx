import Link from "next/link"

const UseFulLink = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/services/cloud">Cloud Hosting</Link>
        </li>
        <li>
          <Link href="/service/vip">VPS Hosting</Link>
        </li>
        <li>
          <Link href="/services/shared">Shared Hosting</Link>
        </li>
        <li>
          <Link href="/services/word-press">WP Hosting</Link>
        </li>
        <li>
          <Link href="/services/web">Web Hosting</Link>
        </li>
      </ul>
    </>
  )
}

export default UseFulLink
