'use client'
import icon1 from '@/assets/img/icons/vps-service-icon1.svg'
import icon2 from '@/assets/img/icons/vps-service-icon2.svg'
import icon3 from '@/assets/img/icons/vps-service-icon3.svg'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Pricing = () => {
  return (
    <>
      <div className="price-plan-sec">
        <Container>
          <Row>
            <Col lg={9} className="m-auto">
              <div className="vps-plan-container">
                <h2>Your High Speed VPS Plan</h2>
                <div className="slider">
                  <input type="range" min={1} max={3} defaultValue={2} className="slider-input" />
                </div>
                <div className="plan-features">
                  <Row>
                    <Col lg={4}>
                      <div className="feature">
                        <div className="icon-container">
                          <Image src={icon1} alt="CPU Icon" />
                        </div>
                        <div className="content">
                          <p>3GHZ Care</p>
                          <span>Dedicated CPU</span>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="feature">
                        <div className="icon-container">
                          <Image src={icon2} alt="RAM Icon" />
                        </div>
                        <div className="content">
                          <p>32 GB</p>
                          <span>Dedicated RAM</span>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="feature">
                        <div className="icon-container">
                          <Image src={icon3} alt="Storage Icon" />
                        </div>
                        <div className="content">
                          <p>150 GB</p>
                          <span>SSD Storage</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="bottom-pricing">
                  <p>$40.00/mo</p>
                  <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                    buy vps hosting <span />
                  </button>
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
