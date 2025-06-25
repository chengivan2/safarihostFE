'use client'
import { pricing2 } from '@/assets/data/other'
import pricing1 from '@/assets/img/bg/price1-box.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'

const Hosting = () => {
  const [isMonthly, setIsMonthly] = useState(true)

  const handleToggleChange = () => {
    setIsMonthly((prevState) => !prevState)
  }

  return (
    <>
      <div className="pricing1 sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading2">
                <h2 className="text-anime-style-3">The Best WordPress Hosting</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30 tab-content">
            <Col xs={12} className="text-center">
              <div className="plan-toggle-wrap" style={{ marginTop: 0 }}>
                <div className="toggle-inner" data-aos="fade-up" data-aos-duration={1000}>
                  <input id="ce-toggle" checked={isMonthly} onChange={handleToggleChange} type="checkbox" />
                  <span className="custom-toggle" />
                  <div className="t-month">
                    <h4>Monthly</h4>
                  </div>
                  <div className="t-year">
                    <h4>Yearly</h4>
                  </div>
                </div>
              </div>
            </Col>

            {isMonthly && (
              <div id="monthly">
                <Row>
                  <Col lg={4} md={6} data-aos-duration={900} data-aos="fade-up">
                    <div className="page-pricing-box">
                      <div className="price-area">
                        <div className="text">
                          <h2
                            data-hs-toggle-count='{
                              "target": "#toggle-count",
                              "min": 80,
                              "max": 180
                            }'>
                            $80
                          </h2>
                          <p>Per Month</p>
                        </div>
                        <Image src={pricing1} alt="" className="bg-shape" />
                      </div>
                      <div className="pricing-content">
                        <p>Basic Packages</p>
                        <h3>Basic Plan</h3>
                        <div className="pricing-list">
                          <ul>
                            {pricing2.map((item, idx) => (
                              <li key={idx}>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>{' '}
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button">
                          <Link href="">Choose A Plan</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos-duration={1100} data-aos="fade-up">
                    <div className="page-pricing-box">
                      <div className="price-area">
                        <div className="text">
                          <h2
                            data-hs-toggle-count='{
                              "target": "#toggle-count",
                              "min": 99,
                              "max": 199
                            }'>
                            $99
                          </h2>
                          <p>Per Month</p>
                        </div>
                        <Image src={pricing1} alt="" className="bg-shape" />
                      </div>
                      <div className="pricing-content">
                        <p>Pro Packages</p>
                        <h3>Pro Plan</h3>
                        <div className="pricing-list">
                          <ul>
                            {pricing2.map((item, idx) => (
                              <li key={idx}>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>{' '}
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button">
                          <Link href="">Choose A Plan</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos-duration={1300} data-aos="fade-up">
                    <div className="page-pricing-box">
                      <div className="price-area">
                        <div className="text">
                          <h2
                            data-hs-toggle-count='{
                              "target": "#toggle-count",
                              "min": 70,
                              "max": 170
                            }'>
                            $70
                          </h2>
                          <p>Per Month</p>
                        </div>
                        <Image src={pricing1} alt="" className="bg-shape" />
                      </div>
                      <div className="pricing-content">
                        <p>Premium Packages</p>
                        <h3>Premium Plan</h3>
                        <div className="pricing-list">
                          <ul>
                            {pricing2.map((item, idx) => (
                              <li key={idx}>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>{' '}
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button">
                          <Link href="">Choose A Plan</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
            {!isMonthly && (
              <div id="yearly">
                <Row>
                  <Col lg={4} md={6} data-aos-duration={900} data-aos="fade-up">
                    <div className="page-pricing-box">
                      <div className="price-area">
                        <div className="text">
                          <h2>$180</h2>
                          <p>Per Month</p>
                        </div>
                        <Image src={pricing1} alt="" className="bg-shape" />
                      </div>
                      <div className="pricing-content">
                        <p>Basic Packages</p>
                        <h3>Basic Plan</h3>
                        <div className="pricing-list">
                          <ul>
                            {pricing2.map((item, idx) => (
                              <li key={idx}>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>{' '}
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button">
                          <Link href="">Choose A Plan</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos-duration={1100} data-aos="fade-up">
                    <div className="page-pricing-box">
                      <div className="price-area">
                        <div className="text">
                          <h2>$199</h2>
                          <p>Per Month</p>
                        </div>
                        <Image src={pricing1} alt="" className="bg-shape" />
                      </div>
                      <div className="pricing-content">
                        <p>Pro Packages</p>
                        <h3>Pro Plan</h3>
                        <div className="pricing-list">
                          <ul>
                            {pricing2.map((item, idx) => (
                              <li key={idx}>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>{' '}
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button">
                          <Link href="">Choose A Plan</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} md={6} data-aos-duration={1300} data-aos="fade-up">
                    <div className="page-pricing-box">
                      <div className="price-area">
                        <div className="text">
                          <h2>$170</h2>
                          <p>Per Month</p>
                        </div>
                        <Image src={pricing1} alt="" className="bg-shape" />
                      </div>
                      <div className="pricing-content">
                        <p>Premium Packages</p>
                        <h3>Premium Plan</h3>
                        <div className="pricing-list">
                          <ul>
                            {pricing2.map((item, idx) => (
                              <li key={idx}>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>{' '}
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="button">
                          <Link href="">Choose A Plan</Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Hosting
