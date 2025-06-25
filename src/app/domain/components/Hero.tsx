'use client'
import bg from '@/assets/img/bg/hero1-bg.png'
import hero from '@/assets/img/images/inner-hero2-image.png'
import hero1 from '@/assets/img/shapes/hero1-shape5.png'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <>
      <div className="inner-hero2 pt-60" style={{ backgroundImage: ` url(${bg.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="heading1-w main-heading">
                <h2 className="text-anime-style-3">Find Your Domain Name</h2>
                <p className="mt-16 aos-init aos-animate" data-aos="fade-right" data-aos-duration={800}>
                  Choosing the perfect domain name is a crucial in establishing your online presence, your domain name more than hosting.
                </p>
                <div className="domain1-form mt-24">
                  <form action="#" data-aos="fade-right" data-aos-duration={1100}>
                    <div className="input-form">
                      <input type="email" placeholder="Find Your Domain Name" />
                      <div className="button">
                        <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                          Search <span />
                        </button>
                      </div>
                    </div>
                    <div className="domain-select-list">
                      <ul className="controls">
                        <li className="select1">.Com $6.99</li>
                        <li className="select1">.Net $6.99</li>
                        <li className="select1">.Org $6.99</li>
                        <li className="select1">.Info $6.99</li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="image">
                <Image src={hero} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="sec-shape">
          <Image src={hero1} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
