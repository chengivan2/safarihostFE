'use client'
import Bg from '@/assets/img/bg/footer5-bg.png'
import Logo from '@/assets/img/logo/header-logo5.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import BrandIcon from './components/BrandIcon'
import LightCopyRight from './components/LightCopyRight'
import QuickLink from './components/QuickLink'
import UseFulLink from './components/UseFulLink'

const Footer5 = () => {
  return (
    <>
      <footer className="vl-footer-area5 bg-cover" style={{ backgroundImage: `url(${Bg.src})` }}>
        <div>
          <Container>
            <Row>
              <Col xl={3} lg={3} md={6} sm={6}>
                <div className="vl-footer-widget mb-50">
                  <div className="vl-footer-logo black-logo">
                    <Link href="/">
                      <Image src={Logo} alt="" />
                    </Link>
                  </div>
                  <div className="vl-footer-text heading1-w mt-16">
                    <p>Take control of your online presence with to top-tier web hosting solutions. Whether you&#39;re launching your first.</p>
                  </div>
                  <div className="vl-footer-social5 text-start mt-20">
                    <BrandIcon />
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="vl-footer-widget5 mb-50 ml-70 md:ml-30 sm:ml-0">
                  <h4>Quick Links</h4>
                  <div className="vl-footer-list">
                    <QuickLink />
                  </div>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <div className="vl-footer-widget5 mb-50 ml-0 md:ml-0 sm:ml-0">
                  <h4>Useful Links</h4>
                  <div className="vl-footer-list">
                    <UseFulLink />
                  </div>
                </div>
              </Col>
              <Col lg={4} md={8} sm={6}>
                <div className="vl-footer-subscribe4 vl-footer-widget5 mb-50 ml-30 sm:ml-0 md:ml-0">
                  <h4>Newsletter</h4>
                  <div className="heading1-w">
                    <p>Subscribe Our Newletter</p>
                  </div>
                  <form action="#" className="_relative">
                    <input type="email" placeholder="Enter Email Address" />
                    <div className="button">
                      <button type="submit" className="btn_theme10 btn_theme_active10 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                        Subscribe
                        <span />
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <LightCopyRight />
      </footer>
    </>
  )
}

export default Footer5
