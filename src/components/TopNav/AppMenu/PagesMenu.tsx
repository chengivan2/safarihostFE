'use client'
import Link from 'next/link'
import { DropdownItem } from 'react-bootstrap'
import { FaChevronDown } from 'react-icons/fa6'

const PagesMenu = () => {
  return (
    <>
      <li className="has-dropdown">
        <Link href="#" className="nav-link">
          Pages
          <span>
            <FaChevronDown
              className="fa-regular" size={15}
              style={{ marginBottom: "8px", marginLeft: "4px" }}
            />
          </span>
        </Link>
        <ul className="sub-menu">
          <li>
            <DropdownItem as={Link} href="/about-us">
              About Us
            </DropdownItem>
          </li>
          <li>
            <Link href="/domain">Domain</Link>
          </li>
          <li>
            <Link href="/hosting">Hositng</Link>
          </li>
          <li>
            <Link href="/testimonial">Testimonials</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/auth/login">Log in</Link>
          </li>
          <li>
            <Link href="/auth/sign-in">Sign in</Link>
          </li>
          <li>
            <Link href="/auth/forgot">Forgot Password</Link>
          </li>
          <li>
            <Link href="/auth/reset-pass">Reset Password</Link>
          </li>
          <li>
            <Link href="/auth/verify">Verify Password</Link>
          </li>
          <li>
            <Link href="/error">404</Link>
          </li>
        </ul>
      </li>
    </>
  )
}

export default PagesMenu
