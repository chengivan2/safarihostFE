'use client'
import useScrollEvent from '@/hook/useScrollEvent'
import useToggle from '@/hook/useToggle'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaBarsStaggered } from 'react-icons/fa6'
import MobilMenu from '../MobilMenu'
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
                    <Image src="/safarihostlogonobg.png" width={80} height={80} alt="SafariHost logo" />
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
                  <Link className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" href="/contact" data-wow-duration="0.8s">
                    Get Started Now <span />
                  </Link>
                </div>
                <div className="vl-header-action-item d-block d-lg-none">
                  <button title="Menu" onClick={toggle} className="vl-offcanvas-toggle" data-bs-toggle="offcanvas" role="button">
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
