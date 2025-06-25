'use client'
import About06 from '@/assets/img/images/about6-image.png'
import About6 from '@/assets/img/shapes/about6-bg-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'

const About = () => {
  
  return (
    <>
      <div className="about6 sp">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about6-images">
                <div className="shape-bg round-circle">
                  <Image src={About6} alt="" />
                </div>
                <div className="image animate1 reveal overflow-hidden">
                  <Image src={About06} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading6">
                <h2 className="text-anime-style-3">What Makes Cloud Hosting the Best Choice For You?</h2>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={1000}>
                  Cloud hosting offers unmatched flexibility scalability, reliability for businesses of all sizes. With resources distributed across
                  multiple servers, downtime becomes of the past. Empower your business with high-performance hosting integration, and robust security
                  features, ensuring uninterrupted growth.
                </p>
                <p className="mt-16" data-aos="fade-left" data-aos-duration={1100}>
                  Cloud hosting is the cornerstone modern digital infrastructure, offering unparalleled reliability, flexibility, and performance.
                  Unlike traditional hosting, it utilizes a network servers ensure your website remains online and fast.
                </p>
                <div className="button mt-30" data-aos="fade-left" data-aos-duration={1300}>
                  <Link className="theme-btn13" href="/contact">
                    Lets Started Now
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid fa-arrow-right" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default About
