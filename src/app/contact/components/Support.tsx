'use client'
import sec1 from '@/assets/img/images/about-page-sec1.png'
import shape from '@/assets/img/shapes/tes1-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { support } from '../data'

const Support = () => {
  return (
    <>
      <div className="contact-page-sec sp">
        <Container>
          <Row>
            <Col lg={9} className="m-auto">
              <div className="heading1 text-center">
                <h2>Our Premium Support</h2>
              </div>
              <div className="contact-page-boxs">
                <Row className="mt-20">
                  {support.map((item, idx) => (
                    <Col lg={4} md={6} key={idx}>
                      <div className="contact-sec-single-bx">
                        <div className="icon">
                          <Image src={item.image} alt="" />
                        </div>
                        <div className="heading">
                          <h4>{item.title}</h4>
                          <Link href="">{item.comment}</Link>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="images">
                <div className="image">
                  <Image src={sec1} alt="" />
                </div>
                <div className="shape">
                  <Image src={shape} alt="" height={303} />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="details-contact-form mt-60">
                <div className="form-area">
                  <h4>Send Us A Message</h4>
                  <form action="#">
                    <Row>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="text" placeholder="First Name" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="number" placeholder="Phone Number" />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="single-input">
                          <input type="text" placeholder="Subject" />
                        </div>
                      </Col>
                      <Col md={12}>
                        <div className="single-input">
                          <textarea rows={4} placeholder="Your Message" />
                        </div>
                        <div className="button">
                          <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                            Subscribe <span />
                          </button>
                        </div>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Support
