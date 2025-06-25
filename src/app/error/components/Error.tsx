'use client'
import Hero1 from '@/assets/img/bg/inner-hero1-bg.jpeg'
import errorimg from '@/assets/img/images/error.png'
import img1 from '@/assets/img/images/inner-hero-image1.png'
import Shape from '@/assets/img/shapes/inner-hero-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'

const Error = () => {
  return (
    <>
      <div className="inner-hero1 pt-60" style={{ backgroundImage: `url(${Hero1.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <div className="main-heading1">
                <h1>404 Error Page</h1>
                <div className="breadcrumbs-pages">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="angle">
                      <FaAngleRight className="fa-solid" />
                    </li>
                    <li>404 Error Page</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className="images">
                <Image src={img1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="sec-shape">
          <Image src={Shape} alt="" />
        </div>
      </div>
      <div className="error-page-sec sp">
        <Container>
          <Row>
            <Col lg={8} className="m-auto text-center">
              <div className="image">
                <Image src={errorimg} alt="" />
              </div>
              <div className="heading1 mt-30">
                <h2>Oops!! Page Not Found</h2>
                <p className="mt-16">
                  While you're here, why not check out some of our top-notch web hosting services? Whether you're just starting a new website or
                  looking to upgrade your current hosting, we offer solutions tailored to your needs.
                </p>
                <div className="button mt-30">
                  <Link href="/" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                    Back To Home Page <span />
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

export default Error
