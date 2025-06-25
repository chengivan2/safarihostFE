import Link from 'next/link'

const QuickLink = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="">Support Center</Link>
        </li>
        <li>
          <Link href="/domain">Domain Search</Link>
        </li>
        <li>
          <Link href="/">My Account</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </>
  )
}

export default QuickLink
