'use client'
import Span06 from '@/assets/img/icons/span6.svg'
import Hero06 from '@/assets/img/images/hero6-image.png'
import shape from '@/assets/img/shapes/hero6-image-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
      <div className="inner-hero1 pt-60">
        <Container>
          <Row className="align-items-center">
            <Col lg={5}>
              <div className="main-heading6">
                <h1 className="text-anime-style-3">Achieve More with the Power of Cloud Hosting</h1>
                <p className="aos-init aos-animate" data-aos="fade-right" data-aos-duration={1000}>
                  Take your business to the next level with powerful cloud hosting designed for speed, security, &amp; scalability.{' '}
                </p>
                <div className="buttons mt-30 aos-init aos-animate" data-aos="fade-right" data-aos-duration={1200}>
                  <Link className="theme-btn13" href="/domain">
                    Get Started Now{' '}
                    <span className="arrow1">
                      <FaArrowRight className="fa-solid fa-arrow-right" />
                    </span>
                    <span className="arrow2">
                      <FaArrowRight className="fa-solid" />
                    </span>
                  </Link>
                  <Link className="theme-btn14 ml-20 sm:ml-0 sm:mt-20" href="/domain">
                    Explore Cloud Hosting{' '}
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
            <Col lg={7}>
              <div className="hero6-images">
                <div className="bg-shape round-circle">
                  <Image src={shape} alt="" />
                </div>
                <div className="image">
                  <Image src={Hero06} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hero
