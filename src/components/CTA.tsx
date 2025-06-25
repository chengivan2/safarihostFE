'use client'
import cta1 from '@/assets/img/bg/cta1-bg.png'
import { Col, Container, Row } from 'react-bootstrap'

const CTA = () => {
  return (
    <>
      <div>
        <div className="cta1">
          <Container>
            <div className="bg-area bg-cover" style={{ backgroundImage: `url(${cta1.src})` }}>
              <Row>
                <Col lg={5}>
                  <div className="heading1-w">
                    <h2>Hosting Flash Sale</h2>
                    <p className="mt-16">Hosting Flash Sale! Save up to 50% on all plans limited time only. Get blazing-fast for speeds</p>
                    <div className="cta1-form-area">
                      <form action="#" className="_relative">
                        <input type="email" placeholder="Enter Email Address" />
                        <div className="button">
                          <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                            Subscribe <span />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="cta1-boxs-area _relative">
                    <Row>
                      <Col md={6}>
                        <div className="cta1-box box1">
                          <div>
                            <p>For Limited Time</p>
                            <h3>
                              68% <br /> Off
                            </h3>
                            <p>Hostings</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="cta1-box box2">
                          <div>
                            <p>For Limited Time</p>
                            <h3>
                              95% <br /> Off
                            </h3>
                            <p>Domain</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <div className="space100" />
      </div>
    </>
  )
}

export default CTA
