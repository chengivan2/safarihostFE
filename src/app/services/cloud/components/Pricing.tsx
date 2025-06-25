'use client'
import { pricing } from '@/assets/data/other'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'

const Pricing = () => {
  return (
    <>
      <div className="pricing4 sp">
        <Container>
          <Row>
            <Col lg={6} className=" m-auto text-center">
              <div className="heading1">
                <h2 className="text-anime-style-3">Choose Your Perfect Plan</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            <Col lg={9} className="m-auto">
              <div data-aos="fade-up" data-aos-duration={800}>
                <div className="pricing4-box-page mt-30">
                  <Row className="align-items-center">
                    <Col lg={4}>
                      <div className="title-area">
                        <h5>Basic Plan</h5>
                        <h2>
                          $299 <span>/Monthly</span>
                        </h2>
                        <p>Choose the perfect plan to meet your website's needs—no hidden fees, just</p>
                        <div className="button mt-20">
                          <Link href="#" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                            Choose a plan <span />
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="list-area">
                        <h4>Features</h4>
                        <Row>
                          <Col lg={6}>
                            <ul>
                              {pricing.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check">
                                    <FaCheck className="fa-solid" />
                                  </span>{' '}
                                  {item.title}
                                </li>
                              ))}
                            </ul>
                          </Col>
                          <Col lg={6}>
                            <ul>
                              {pricing.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check">
                                    <FaCheck className="fa-solid" />
                                  </span>{' '}
                                  {item.title}
                                </li>
                              ))}
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration={1000}>
                <div className="pricing4-box-page mt-30">
                  <Row className="align-items-center">
                    <Col lg={4}>
                      <div className="title-area">
                        <h5>Basic Plan</h5>
                        <h2>
                          $299 <span>/Monthly</span>
                        </h2>
                        <p>Choose the perfect plan to meet your website's needs—no hidden fees, just</p>
                        <div className="button mt-20">
                          <Link href="#" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                            Choose a plan <span />
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="list-area">
                        <h4>Features</h4>
                        <Row>
                          <Col lg={6}>
                            <ul>
                              {pricing.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check">
                                    <FaCheck className="fa-solid" />
                                  </span>{' '}
                                  {item.title}
                                </li>
                              ))}
                            </ul>
                          </Col>
                          <Col lg={6}>
                            <ul>
                              {pricing.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check">
                                    <FaCheck className="fa-solid" />
                                  </span>{' '}
                                  {item.title}
                                </li>
                              ))}
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration={1200}>
                <div className="pricing4-box-page mt-30">
                  <Row className="align-items-center">
                    <Col lg={4}>
                      <div className="title-area">
                        <h5>Basic Plan</h5>
                        <h2>
                          $299 <span>/Monthly</span>
                        </h2>
                        <p>Choose the perfect plan to meet your website's needs—no hidden fees, just</p>
                        <div className="button mt-20">
                          <Link href="#" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                            Choose a plan <span />
                          </Link>
                        </div>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="list-area">
                        <h4>Features</h4>
                        <Row>
                          <Col lg={6}>
                            <ul>
                              {pricing.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check">
                                    <FaCheck className="fa-solid" />
                                  </span>{' '}
                                  {item.title}
                                </li>
                              ))}
                            </ul>
                          </Col>
                          <Col lg={6}>
                            <ul>
                              {pricing.map((item, idx) => (
                                <li key={idx}>
                                  <span className="check">
                                    <FaCheck className="fa-solid" />
                                  </span>{' '}
                                  {item.title}
                                </li>
                              ))}
                            </ul>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Pricing
