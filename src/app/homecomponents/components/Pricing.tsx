"use client";
import { pricing } from "@/assets/data/other";
import Span6 from "@/assets/img/icons/span6.svg";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight, FaCheck } from "react-icons/fa";
import CustomNiceSelect from "@/components/CustomNiceSelect";

const Pricing = () => {
  return (
    <>
      <div className="pricing6 sp sec-bg6">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading6">
                <h2 className="text-anime-style-3">
                  Flexible Pricing Plans for Every Need
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            <Col lg={9} className="m-auto">
              <div data-aos="fade-up" data-aos-duration={800}>
                <div className="pricing6-box mt-30">
                  <Row className="align-items-center">
                    <Col lg={4}>
                      <div className="title-area">
                        <h5>Basic Plan</h5>
                        <h2 style={{ paddingBottom: "0px" }}>
                          $29.99 <span>/Monthly</span>
                        </h2>
                        <div className="button">
                          <CustomNiceSelect className="wide">
                            <option value={1}>$29.99 - Monthly</option>
                            <option value={3}>$144.6 - 6 Month</option>
                            <option value={4}>$220.3 - 12 Month</option>
                          </CustomNiceSelect>

                          <Link className="theme-btn13" href="/pricing">
                            Order Now{" "}
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
                                  </span>
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
                                  </span>
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
                <div className="pricing6-box mt-30">
                  <Row className="align-items-center">
                    <Col lg={4}>
                      <div className="title-area">
                        <h5>Pro Plan</h5>
                        <h2 style={{ paddingBottom: "0px" }}>
                          $49.99 <span>/Monthly</span>
                        </h2>
                        <div className="button">
                          <CustomNiceSelect className="wide">
                            <option value={1}>$49.99 - Monthly</option>
                            <option value={3}>$144.6 - 6 Month</option>
                            <option value={4}>$220.3 - 12 Month</option>
                          </CustomNiceSelect>
                          <Link className="theme-btn13" href="/pricing">
                            Order Now
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
                                  </span>
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
                                  </span>
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
                <div className="pricing6-box mt-30">
                  <Row className="align-items-center">
                    <Col lg={4}>
                      <div className="title-area">
                        <h5>Platinum Plan</h5>
                        <h2 style={{ paddingBottom: "0px" }}>
                          $69.99 <span>/Monthly</span>
                        </h2>
                        <div className="button ">
                          <CustomNiceSelect className="wide">
                            <option value={1}>$69.99 - Monthly</option>
                            <option value={3}>$194.6 - 6 Month</option>
                            <option value={4}>$280.3 - 12 Month</option>
                          </CustomNiceSelect>
                          <Link className="theme-btn13" href="/pricing">
                            Order Now
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
                                  </span>
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
                                  </span>
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
  );
};

export default Pricing;
