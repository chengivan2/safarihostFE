'use client'
import Link from 'next/link'
import { FaChevronDown } from 'react-icons/fa6'

const ServicesMenu = () => {
  return (
    <>
      <li>
        <Link href="#" className="nav-link">
          Services
          <span>
            <FaChevronDown
              className="fa-regular" size={15}
              style={{ marginBottom: "8px", marginLeft: "4px" }}
            />
          </span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="/services/vip">VPS Hosting</Link>
          </li>
          <li>
            <Link href="/services/shared">Shared Hosting</Link>
          </li>
          <li>
            <Link href="/services/cloud">Cloud Hosting</Link>
          </li>
          <li>
            <Link href="/services/word-press">WordPress Hosting</Link>
          </li>
          <li>
            <Link href="/services/email">Email Hosting</Link>
          </li>
          <li>
            <Link href="/services/dedicated">Dedicated Hosting</Link>
          </li>
        </ul>
      </li>
    </>
  )
}

export default ServicesMenu
