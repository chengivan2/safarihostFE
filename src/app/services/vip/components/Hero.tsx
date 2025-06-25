'use client'
import Bg from '@/assets/img/bg/hero1-bg.png'
import hero3 from '@/assets/img/images/inner-hero3.png'
import Shape5 from '@/assets/img/shapes/hero1-shape5.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <div className="inner-hero3 pt-60" style={{ backgroundImage: `url(${Bg.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={4}>
              <div className="heading1-w main-heading">
                <h5 className="sub-title">
                  $10.00/mo <span>(Our Starter Plan)</span>
                </h5>
                <h1 className="text-anime-style-3">VPS Hosting</h1>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={800}>
                  Choosing the perfect domain name is a crucial in establishing your online presence, your domain name more than hosting.
                </p>
                <div className="button mt-20">
                  <Link href="/contact" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                    buy vps hosting <span />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <div className="image">
                <Image src={hero3} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="sec-shape">
          <Image src={Shape5} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
