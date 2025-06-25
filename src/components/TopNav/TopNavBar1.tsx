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
import Headerlogo1 from '@/assets/img/logo/header-logo1.png'
import useScrollEvent from '@/hook/useScrollEvent'
import useToggle from '@/hook/useToggle'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaBarsStaggered, FaChevronDown } from 'react-icons/fa6'
import MobilMenu from '../MobilMenu'
import BlogMenu from './AppMenu/BlogMenu'
import PagesMenu from './AppMenu/PagesMenu'
import ServicesMenu from './AppMenu/ServicesMenu'

const TopNavBar1 = () => {

  const { scrollY } = useScrollEvent()

  const { isOpen, toggle } = useToggle()

  return (
    <>
      <header>
        <div id="vl-header-sticky" className={`vl-header-area1 header-tranperent header-${scrollY > 100 && 'sticky'}`}>
          <Container className="header1-bg">
            <Row className="align-items-center">
              <Col lg={2} md={6} xs={6}>
                <div className="vl-logo">
                  <Link href="/" className="header1-logo-block">
                    <Image src={Headerlogo1} alt="" />
                  </Link>
                </div>
              </Col>
              <Col lg={7} className="d-none d-lg-block text-end">
                <div className="vl-main-menu">
                  <nav className="vl-mobile-menu-active">
                    <ul>
                      <li>
                        <Link href="/">
                          Home
                        </Link>                        
                      </li>
                      <ServicesMenu />
                      <li>
                        <Link href="/about">
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
                  <Link className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" href="/contact" data-wow-duration="0.8s">
                    Get Started Now <span />
                  </Link>
                </div>
                <div className="vl-header-action-item d-block d-lg-none">
                  <button title="Menu" onClick={toggle} className="vl-offcanvas-toggle" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasEnd">
                    <FaBarsStaggered className="fa-duotone fa-solid" data-bs-target="#offcanvasEnd" />
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

export default TopNavBar1
