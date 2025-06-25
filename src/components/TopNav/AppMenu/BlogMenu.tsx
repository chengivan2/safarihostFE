'use client'
import Link from 'next/link'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa6'

const BlogMenu = () => {
  return (
    <>
      <li>
        <Link href="#" className="nav-link">
          Blogs
          <span>
            <FaChevronDown
              className="fa-regular" size={15}
              style={{ marginBottom: "8px", marginLeft: "4px" }}
            />
          </span>
        </Link>
        <ul className="sub-menu">
          <li>
            <Link href="#" className="span-arrow">
              Our Blogs
              <span>
                <FaChevronRight className="fa-solid d-lg-block d-none" />
              </span>
            </Link>
            <ul className="sub-menu menu1">
              <li>
                <Link href="/blogs/grid">Blog 3 Grid</Link>
              </li>
              <li>
                <Link href="/blogs/sidebar">Blog Sidebar</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#" className="span-arrow">
              Blog Details
              <span>
                <FaChevronRight className="fa-solid d-lg-block d-none" />
              </span>
            </Link>
            <ul className="sub-menu menu1">
              <li>
                <Link href="/details/left">Blog Details Left</Link>
              </li>
              <li>
                <Link href="/details/right">Blog Details Right</Link>
              </li>
              <li>
                <Link href="/details/detail">Blog Details</Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </>
  )
}

export default BlogMenu
