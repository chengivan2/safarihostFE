import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import {  FaChevronRight } from 'react-icons/fa6'
import demo1 from '@/assets/img/demo/demo1.jpg';
import demo2 from '@/assets/img/demo/demo2.jpg';
import demo3 from '@/assets/img/demo/demo3.jpg';
import demo4 from '@/assets/img/demo/demo4.jpg';
import demo5 from '@/assets/img/demo/demo5.jpg';
import demo6 from '@/assets/img/demo/demo6.jpg';
import demo7 from '@/assets/img/demo/demo7.jpg';
import demo8 from '@/assets/img/demo/demo8.jpg';
import demo9 from '@/assets/img/demo/demo9.jpg';
import demo10 from '@/assets/img/demo/demo10.jpg';

const menuItems = [
  {
    title: "Home",
    links: [
      { path: "/home/hosting-01", label: "Web Hosting 01", img: demo1 },
      { path: "/home/hosting-02", label: "Cloud Hosting 02", img: demo2 },
      { path: "/home/hosting-03", label: "VPS Hosting 03", img: demo3 },
      { path: "/home/hosting-04", label: "Web Hosting 04", img: demo4 },
      { path: "/home/hosting-05", label: "Web Hosting 05", img: demo5 },
      { path: "/home/hosting-06", label: "Web Hosting 06", img: demo6 },
      { path: "/home/hosting-07", label: "WordPress Hosting 07", img: demo7 },
      { path: "/home/hosting-08", label: "Shared Hosting 08", img: demo8 },
      { path: "/home/hosting-09", label: "Shared Hosting 09", img: demo9 },
      { path: "/home/hosting-10", label: "Shared Hosting 10", img: demo10 },
    ],
  },
  {
    title: "Pages",
    links: [
      { path: "/about-us", label: "About Us" },
      { path: "/domin", label: "Domain" },
      { path: "/hosting", label: "Hosting" },
      { path: "/testimonial", label: "Testimonial" },
      { path: "/faq", label: "FAQ" },
      { path: "/auth/login", label: "Login" },
      { path: "/auth/sign-in", label: "Sign In" },
      { path: "/auth/forgot", label: "Forgot Password" },
      { path: "/auth/reset-pass", label: "Reset Password" },
      { path: "/auth/verify", label: "Verify Password" },
      { path: "/error", label: "404" },
    ],
  },
  {
    title: "Services",
    links: [
      { path: "/services/vip", label: " VPS Hosting" },
      { path: "/services/shared", label: "Shared Hosting" },
      { path: "/services/cloud", label: " Cloud Hosting" },
      { path: "/services/word-press", label: "WordPress Hosting" },
      { path: "/services/email", label: " Email Hosting" },
      { path: "/services/dedicated", label: " Dedicated Hosting" },
    ],
  },
  {
    title: 'Blogs',
    children: [
      {
        title: 'Our Blogs',
        links: [
          { path: '/blogs/grid', label: 'Blogs 01' },
          { path: '/blogs/sidebar', label: 'Blog 02' },
        ],
      },
      {
        title: 'Blog Details ',
        links: [
          { path: '/details/left', label: 'Blog Details Left' },
          { path: '/details/right', label: 'Blog Details Right' },
          { path: '/details/detail', label: 'Blog Details' },
        ],
      },
    ],
  },
  { title: "Contact", path: "/contact" },
];

interface MenuItemProps {
  item: any
  depth?: number
}

const MenuItem = ({ item, depth = 0 }: MenuItemProps) => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)
  const hasSubItems = item.links || item.children

  return (
    <li className="has-dropdown">
      <span className="d-flex justify-content-between align-items-center" onClick={hasSubItems ? toggle : undefined}>
        <span>{item.title || item.label}</span>
        {hasSubItems && <button className={`vl-menu-close ${open && 'active'}`}>
          <FaChevronRight />
        </button>}
      </span>

      <Collapse in={open}>
        <ul className="list-unstyled ms-4">
          {item.links?.map((link: any, idx: number) => (
            <li key={idx} className="has-dropdown">
              {link.img && (
                <div className="img1 mb-2">
                  <Image src={link.img} alt="image" className="img-fluid" />
                </div>
              )}
              <Link href={link.path} className="nav-link ">
                {link.label}
              </Link>
            </li>
          ))}
          {item.children?.map((child: any, idx: number) => <MenuItem key={idx} item={child} depth={depth + 1} />)}
        </ul>
      </Collapse>
    </li>
  )
}

const MobileMenuMultiItem = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  )
}

export default MobileMenuMultiItem
