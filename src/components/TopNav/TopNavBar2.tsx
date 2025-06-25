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
import HeaderLogo from '@/assets/img/logo/header-logo6.png'
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
                        <Link href="#">
                          Home
                          <span>
                            <FaChevronDown
                              className="fa-regular" size={15}
                              style={{ marginBottom: "8px", marginLeft: "4px" }}
                            />
                          </span>
                        </Link>
                        <div className="vl-mega-menu">
                          <div className="vl-home-menu">
                            <Row className="gx-3 row-cols-1 row-cols-md-1 row-cols-lg-5">
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={Demo1} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-01">
                                    Web Hositng 01
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={Demo2} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-02">
                                    Cloud Hosting 02
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/home/hosting-02" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={Demo3} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-03">
                                    VPS Hosting 03
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/home/hosting-03" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={Demo4} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-04">
                                    Web Hositng 04
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/home/hosting-04" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb">
                                  <div className="img1">
                                    <Image src={Demo5} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-05">
                                    Web Hositng 05
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/home/hosting-05" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <div className="vl-home-menu">
                            <Row className="gx-3 row-cols-1 row-cols-md-1 row-cols-lg-5">
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={Demo6} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-06">
                                    Web Hositng 06
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/home/hosting-06" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={Demo7} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-07">
                                    WordPress Hosting 07
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/home/hosting-07" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={Demo8} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-08">
                                    Shared Hosting 08
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/home/hosting-08" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={Demo9} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-09">
                                    Shared Hosting 09
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/home/hosting-09" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                  <div className="space20 d-lg-none d-block" />
                                </div>
                              </Col>
                              <Col>
                                <div className="vl-home-thumb mt-20">
                                  <div className="img1">
                                    <Image src={Demo10} alt="" />
                                  </div>
                                  <Link className="text" href="/home/hosting-10">
                                    Shared Hosting 10
                                  </Link>
                                  <div className="btn-area1">
                                    <Link href="/home/hosting-10" className="theme-btn13" data-wow-duration="0.8s">
                                      View Page <span />
                                    </Link>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </li>
                      <PagesMenu />
                      <ServicesMenu />
                      <BlogMenu />
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
