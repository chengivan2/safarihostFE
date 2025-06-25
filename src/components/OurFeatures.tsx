'use client'
import img from '@/assets/img/images/features1-image.png'
import shape from '@/assets/img/shapes/features1-sec-shape.png'
import shap2 from '@/assets/img/shapes/features1-shape2.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'

const OurFeatures = () => {
  return (
    <>
      <div className="features">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="heading1">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={800}>
                  OUR FEATURES
                </span>
                <h2 className="text-anime-style-3">SafariHost Security Features</h2>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={900}>
                  At SafariHost, your website&#39;s security is our top priority. Features provide robust security features designed to protect your data and
                  ensure the smooth operation of your online presence.
                </p>
                <Row className="mt-2" data-aos="fade-right" data-aos-duration={1100}>
                  <Col lg={5}>
                    <div className="features1-list">
                      <ul>
                        <li>
                          <span className="check">
                            <FaCheck className="fa-solid" />
                          </span>
                          100% Uptime Guarantee
                        </li>
                        <li>
                          <span className="check">
                            <FaCheck className="fa-solid" />
                          </span>
                          24/7 Customer Support
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="features1-list">
                      <ul>
                        <li>
                          <span className="check">
                            <FaCheck className="fa-solid" />
                          </span>
                          Fast Loading Speeds
                        </li>
                        <li>
                          <span className="check">
                            <FaCheck className="fa-solid" />
                          </span>
                          Free Site Migration
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
                <div className="button mt-30" data-aos="fade-right" data-aos-duration={1300}>
                  <Link href="/contact" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                    get started now <span />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="features-images">
                <div className="image1 animate3 overflow-hidden reveal">
                  <Image src={img} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Image src={shape} alt="" className="sec-shape" />
        <Image src={shap2} alt="" className="sec-shape2 animate3" width={456} />
      </div>
    </>
  )
}

export default OurFeatures
