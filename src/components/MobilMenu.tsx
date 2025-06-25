'use client'
import HeaderLogo1 from '@/assets/img/logo/header-logo1.png'
import Image from 'next/image'
import Link from 'next/link'
import { Offcanvas, OffcanvasHeader } from 'react-bootstrap'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXmark, FaXTwitter } from 'react-icons/fa6'
import MobileMenuItem from './TopNav/AppMenu/MobileMenuItem'

type MenuToggle = {
  isOpen: boolean
  toggle: () => void
}

const MobilMenu = ({ isOpen, toggle }: MenuToggle) => {
  return (
    <>
      <Offcanvas
        show={isOpen}
        onHide={toggle}
        placement="end"
        scroll={true}
        className="vl-offcanvas vl-header-area1 vl-offcanvas-open"
        tabIndex={-1}
        id="offcanvasStart"
        aria-labelledby="offcanvasStart">
        <div className="vl-offcanvas-wrapper">
          <OffcanvasHeader className="vl-offcanvas-header d-flex justify-content-between align-items-center mb-90">
            <div className="vl-offcanvas-logo">
              <Link href="/" className="header1-logo-block">
                <Image src={HeaderLogo1} alt="HeaderLogo1" />
              </Link>
            </div>
            <div className="vl-offcanvas-close">
              <button className="vl-offcanvas-close-toggle" onClick={toggle}>
                <FaXmark className="fa-solid" />
              </button>
            </div>
          </OffcanvasHeader>
          <div className="vl-offcanvas-menu d-lg-none mb-40">
            <MobileMenuItem />
          </div>
          <div className="space20" />
          <div className="vl-offcanvas-info">
            <h4 className="black1 text-24 mb-30 leading-24 font-semibold">Contact Us</h4>
            <div className="single-contact flex align-items-center">
              <div className="text">
                <Link href="tel:+11234567890" className="ml-10 gray2 inline-block p-10-0 text-18 leading-18 text _hover1 font-medium">
                  +1 123 456 7890
                </Link>
              </div>
            </div>
            <div className="single-contact flex align-items-center mt-6">
              <div className="text">
                <Link href="#" className="ml-10 gray2 inline-block p-10-0 text-18 leading-18 text _hover1 font-medium">
                  421 Allen, Mexico 4233
                </Link>
              </div>
            </div>
            <div className="single-contact flex align-items-center mt-6">
              <div className="text">
                <Link href="mailto:Hosticconsult@com" className="ml-10 gray2 inline-block p-10-0 text-18 leading-18 text _hover1 font-medium">
                  Hosticconsult@com
                </Link>
              </div>
            </div>
            <div className="single-contact flex align-items-center mt-6">
              <div className="text">
                <Link href="#" className="ml-10 gray2 inline-block p-10-0 text-18 leading-18 text _hover1 font-medium">
                  +1 123 456 7890
                </Link>
              </div>
            </div>
          </div>
          <div className="space20" />
          <div className="vl-offcanvas-social">
            <h4 className="black1 text-24 mb-20 mt-20 leading-24 font-semibold">Follow Us</h4>
            <div className="vl-copyright-social2 text-start mt-20">
              <Link href="#">
                <FaFacebookF className="fa-brands" />
              </Link>
              <Link href="#">
                <FaInstagram className="fa-brands" />
              </Link>
              <Link href="#">
                <FaLinkedinIn className="fa-brands" />
              </Link>
              <Link href="#">
                <FaXTwitter className="fa-brands" />
              </Link>
            </div>
          </div>
        </div>
      </Offcanvas>

      <div className="vl-offcanvas-overlay" onClick={toggle} />
    </>
  )
}

export default MobilMenu