'use client'
import Plan from '@/assets/img/images/pricing-plan-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Plane = () => {
  return (
    <>
      <div className="compear-pricing-section-area sp">
        <Container>
          <Row>
            <Col lg={5} className="m-auto text-center">
              <div className="heading1">
                <span data-aos="zoom-in-left" data-aos-duration={800} className="sub-title">
                  Pricing plan
                </span>
                <h2 className="text-anime-style-3">Select Your Best Plan</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            <Col lg={12}>
              <div className="compear-table" data-aos="fade-up" data-aos-duration={900} data-aos-delay={300}>
                <div className="comparison">
                  <table>
                    <thead>
                      <tr className="main-heading">
                        <th className="price-info">
                          <div className="price-now">
                            <Image src={Plan} alt="" />
                          </div>
                        </th>
                        <th className="price-info">
                          <div className="price-now">
                            <div className="price-now-area">
                              <span>Basic Plan</span>
                              <h2>
                                $199 <span>/Monthly</span>
                              </h2>
                              <p>
                                Ideal for small businesses an <br /> startups looking to establish.
                              </p>
                              <div className="space16" />
                              <Link href="#" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                                Choose plan <span />
                              </Link>
                            </div>
                          </div>
                        </th>
                        <th className="price-info">
                          <div className="price-now highlight">
                            <div className="price-now-area">
                              <span>Standard Plan</span>
                              <h2>
                                $299 <span>/Monthly</span>
                              </h2>
                              <p>
                                Ideal for small businesses an <br /> startups looking to establish.
                              </p>
                              <div className="space16" />
                              <Link href="#" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                                Choose plan <span />
                              </Link>
                            </div>
                          </div>
                        </th>
                        <th className="price-info">
                          <div className="price-now">
                            <div className="price-now-area">
                              <span>Plus Plan</span>
                              <h2>
                                $399 <span>/Monthly</span>
                              </h2>
                              <p>
                                Ideal for small businesses an <br /> startups looking to establish.
                              </p>
                              <div className="space16" />
                              <Link href="#" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                                Choose plan <span />
                              </Link>
                            </div>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="compare-header1">
                        <td>&nbsp;</td>
                        <td>
                          <span />
                        </td>
                        <td>
                          <span />
                        </td>
                        <td>
                          <span />
                        </td>
                      </tr>
                      <tr></tr>
                      <tr>
                        <td />
                        <td colSpan={3}>Visit Per Month</td>
                      </tr>
                      <tr className="compare-row">
                        <td>Visit Per Month</td>
                        <td>
                          <p className="infor">Up to 25000</p>
                        </td>
                        <td className="highlight">
                          <p className="infor">Up to 50000</p>
                        </td>
                        <td>
                          <p className="infor">Unlimited</p>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td colSpan={3}>Total Sites</td>
                      </tr>
                      <tr>
                        <td>Total Sites</td>
                        <td>
                          <p className="infor">1</p>
                        </td>
                        <td className="highlight">
                          <p className="infor">2</p>
                        </td>
                        <td>
                          <p className="infor">3</p>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td colSpan={3}>Hosting Type</td>
                      </tr>
                      <tr className="compare-row">
                        <td>Hosting Type</td>
                        <td>
                          <p className="infor">Shared</p>
                        </td>
                        <td className="highlight">
                          <p className="infor">Shared</p>
                        </td>
                        <td>
                          <p className="infor">Shared</p>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td colSpan={4}>Share Hosting</td>
                      </tr>
                      <tr>
                        <td>Share Hosting</td>
                        <td>
                          <p className="infor">50 GB</p>
                        </td>
                        <td className="highlight">
                          <p className="infor">70 GB</p>
                        </td>
                        <td>
                          <p className="infor">100 GB</p>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td colSpan={3}>Brand Per Month</td>
                      </tr>
                      <tr className="compare-row">
                        <td>Brand Per Month</td>
                        <td>
                          <p className="infor">256 GB</p>
                        </td>
                        <td className="highlight">
                          <p className="infor">400 GB</p>
                        </td>
                        <td>
                          <p className="infor">600 GB</p>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td colSpan={4}>Imported SSL</td>
                      </tr>
                      <tr>
                        <td>Imported SSL</td>
                        <td>
                          <p className="infor">
                            <FaX className="fa-solid" />
                          </p>
                        </td>
                        <td className="highlight">
                          <p className="infor">
                            <FaCheck className="fa-solid" />
                          </p>
                        </td>
                        <td>
                          <p className="infor">
                            <FaCheck className="fa-solid" />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td colSpan={3}>24/7 Phone Support</td>
                      </tr>
                      <tr className="compare-row">
                        <td>24/7 Phone Support</td>
                        <td>
                          <p className="infor">
                            <FaCheck className="fa-solid" />
                          </p>
                        </td>
                        <td className="highlight">
                          <p className="infor">
                            <FaCheck className="fa-solid" />
                          </p>
                        </td>
                        <td>
                          <p className="infor">
                            <FaCheck className="fa-solid" />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td colSpan={3}>Consultative Onboarding</td>
                      </tr>
                      <tr>
                        <td>Consultative Onboarding</td>
                        <td>
                          <p className="infor">
                            <FaX className="fa-solid" />
                          </p>
                        </td>
                        <td className="highlight">
                          <p className="infor">
                            <FaCheck className="fa-solid" />
                          </p>
                        </td>
                        <td>
                          <p className="infor">
                            <FaCheck className="fa-solid" />
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Plane
