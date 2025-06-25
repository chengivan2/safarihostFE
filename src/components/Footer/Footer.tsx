'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import BrandIcon from './components/BrandIcon'
import CopyRight from './components/CopyRight'
import QuickLink from './components/QuickLink'
import UseFulLink from './components/UseFulLink'

const Footer = () => {
  return (
    <>
      <footer className="vl-footer-area6 bg-cover">
        <div>
          <Container>
            <Row>
              <Col xl={3} lg={3} md={6} sm={6}>
                <div className="vl-footer-widget mb-50">
                  <div className="vl-footer-logo black-logo">
                    <Link href="/">
                      <Image src="/safarihostlogonobg.png" width={80} height={80} alt="SafariHost logo" />
                    </Link>
                  </div>
                  <div className="vl-footer-text heading1 mt-16">
                    <p>Take control of your online presence with to top-tier web hosting solutions. Whether you&#39;re launching your first.</p>
                  </div>
                  <div className="vl-footer-social6 text-start mt-20">
                    <BrandIcon />
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <div className="vl-footer-widget6 mb-50 ml-70 md:ml-30 sm:ml-0">
                  <h4>Quick Links</h4>
                  <div className="vl-footer-list">
                    <QuickLink />
                  </div>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <div className="vl-footer-widget6 mb-50 ml-0 md:ml-0 sm:ml-0">
                  <h4>Useful Links</h4>
                  <div className="vl-footer-list">
                    <UseFulLink />
                  </div>
                </div>
              </Col>
              <Col lg={4} md={8} sm={6}>
                <div className="vl-footer-subscribe6 vl-footer-widget mb-50 ml-30 sm:ml-0 md:ml-0">
                  <h4>Newsletter</h4>
                  <div className="heading1">
                    <p>Subscribe Our Newletter</p>
                  </div>
                  <Form action="" className="_relative">
                    <input type="email" placeholder="Enter Email Address" />
                    <div className="button">
                      <button className="theme-btn13" type="submit">
                        Subscribe
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <CopyRight />
      </footer>
    </>
  )
}

export default Footer
