'use client'
import HedImg from '@/assets/img/logo/header-logo7.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import BrandIcon from './components/BrandIcon'
import CopyrightLight from './components/CopyrightLight'
import QuickLink from './components/QuickLink'
import UseFulLink from './components/UseFulLink'

const Footer3 = () => {
  return (
    <>
      <footer className="vl-footer-area6 bg-cover">
        <div>
          <Container>
            <Row>
              <Col xl={3} lg={3} md={6} sm={6}>
                <div className="vl-footer-widget7 mb-50">
                  <div className="vl-footer-logo black-logo">
                    <Link href="/">
                      <Image src={HedImg} alt="" />
                    </Link>
                  </div>
                  <div className="vl-footer-text heading7-w mt-16">
                    <p>Take control of your online presence with to top-tier web hosting solutions. Whether you&#39;re launching your first.</p>
                  </div>
                  <div className="vl-footer-social7 text-start mt-20">
                    <BrandIcon />
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="vl-footer-widget7 mb-50 ml-70 md:ml-30 sm:ml-0">
                  <h4>Quick Links</h4>
                  <div className="vl-footer-list">
                    <QuickLink />
                  </div>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <div className="vl-footer-widget7 mb-50 ml-0 md:ml-0 sm:ml-0">
                  <h4>Useful Links</h4>
                  <div className="vl-footer-list">
                    <UseFulLink />
                  </div>
                </div>
              </Col>
              <Col lg={4} md={8} sm={6}>
                <div className="vl-footer-subscribe7 vl-footer-widget mb-50 ml-30 sm:ml-0 md:ml-0">
                  <h4>Newsletter</h4>
                  <div className="heading7-w">
                    <p>Subscribe Our Newletter</p>
                  </div>
                  <form action="#" className="_relative">
                    <input type="email" placeholder="Enter Email Address" />
                    <div className="button">
                      <button className="theme-btn17" type="submit">
                        Subscribe{' '}
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <CopyrightLight />
      </footer>
    </>
  )
}

export default Footer3
