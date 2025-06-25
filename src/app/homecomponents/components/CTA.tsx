'use client'
import Images from '@/assets/img/images/cta6-image.png'
import Cts6 from '@/assets/img/shapes/cta6-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'

const CTA = () => {
  return (
    <>
      <div className="cta6">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading1-w">
                <h2>Elevate Your Online Presence with Scalable Cloud Hosting</h2>
                <p className="mt-16">
                  Don’t let outdated hosting hold you back. Join the countless businesses that trust us to deliver exceptional hosting solutions.
                </p>
                <div className="button mt-30">
                  <Link className="theme-btn15" href="/domain">
                    Get Started Now
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="cta6-iamges">
                <div className="bg-shape round-circle">
                  <Image src={Cts6} alt="" />
                </div>
                <div className="image">
                  <Image src={Images} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default CTA
