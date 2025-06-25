'use client'
import Demo1 from '@/assets/img/demo/demo1.jpg'
import Demo10 from '@/assets/img/demo/demo10.jpg'
import Demo2 from '@/assets/img/demo/demo2.jpg'
import Demo3 from '@/assets/img/demo/demo3.jpg'
import Demo4 from '@/assets/img/demo/demo4.jpg'
import Demo5 from '@/assets/img/demo/demo5.jpg'
import Demo6 from '@/assets/img/demo/demo6.jpg'
import Demo7 from '@/assets/img/demo/demo7.jpg'
import Demo8 from '@/assets/img/demo/demo8.jpg'
import Demo9 from '@/assets/img/demo/demo9.jpg'
import useScrollEvent from '@/hook/useScrollEvent'
import useToggle from '@/hook/useToggle'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import { FaBarsStaggered, FaChevronDown } from 'react-icons/fa6'
import MobilMenu from '../MobilMenu'
import BlogMenu from './AppMenu/BlogMenu'
import PagesMenu from './AppMenu/PagesMenu'
import ServicesMenu from './AppMenu/ServicesMenu'

const TopNavBar2 = () => {
  const { scrollY } = useScrollEvent()

  const { isOpen, toggle } = useToggle()
  return (
    <>
      <header>
        <div id="vl-header-sticky" className={`vl-header-area6 header-tranperent header-${scrollY > 100 && 'sticky'}`}>
          <Container className="header1-bg">
            <Row className="align-items-center">
              <Col lg={2} md={6} xs={6}>
                <div className="vl-logo">
                  <Link href="/" className="header1-logo-block">
                    <Image src="/safarihostlogonobg.png" width={80} height={80} alt="SafariHost Logo" />
                  </Link>
                </div>
              </Col>
              <Col lg={7} className="d-none d-lg-block text-end">
                <div className="vl-main-menu">
                  <nav className="vl-mobile-menu-active">
                    <ul>
                      <li className="has-dropdown">
                        <Link href="/">
                          Home
                        </Link>
                       
                      </li>
                      <ServicesMenu />
                      <li>
                        <Link href="/about-us">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Col>
              <Col lg={3} md={6} xs={6}>
                <div className="vl-header-btn text-end d-none d-lg-block">
                  <Link className="theme-btn13" href="/domain">
                    Get Started Now
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
                <div className="vl-header-action-item d-block d-lg-none">
                  <button title='Menu' onClick={toggle} type="button" className="vl-offcanvas-toggle">
                    <FaBarsStaggered className="fa-duotone fa-solid" />
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <MobilMenu toggle={toggle} isOpen={isOpen} />
    </>
  )
}

export default TopNavBar2
