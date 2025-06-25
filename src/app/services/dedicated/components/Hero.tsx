'use client'
import hero1 from '@/assets/img/bg/hero1-bg.png'
import img4 from '@/assets/img/images/inner-hero-image4.png'
import shape4 from '@/assets/img/shapes/hero1-shape5.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <div className="inner-hero3 pt-60" style={{ backgroundImage: `url(${hero1.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="heading1-w main-heading">
                <h5 className="sub-title">
                  $20.00/mo <span>(Our Starter Plan)</span>
                </h5>
                <h1 className="text-anime-style-3">Dedicated Hosting</h1>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={800}>
                  Email And hosting is a type of web hosting specifically Best optimized for WordPress websites. It is designed to enhance the
                  performance, security, and reliability of WordPress.
                </p>
                <div className="button mt-20">
                  <Link href="/domain" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                    Buy Dedicated Hosting <span />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="image">
                <Image src={img4} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="sec-shape">
          <Image src={shape4} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
