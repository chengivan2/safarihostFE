'use client'
import Chooses6 from '@/assets/img/images/choose6-image.png'
import Shapeimg from '@/assets/img/shapes/choose6-image-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import { choose, choose2 } from '../data'

const ChooseUs = () => {
  return (
    <>
      <div className="choose6 sp">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="heading6">
                <h2 className="text-anime-style-3">Benefits of Choosing Us</h2>
                <p className="mt-16" data-aos="fade-right" data-aos-duration={800}>
                  When you choose SafariHost Cloud Hosting, you gain more than just a hosting service. You partner with a team dedicated to ensuring your
                  success. From our high-performance servers to our easy-to-use control panel, every aspect of our service is designed to help you
                  achieve your goals effortlessly.
                </p>
                <Row data-aos="fade-right" data-aos-duration={1000}>
                  <Col md={6}>
                    <div className="choose6-icon-list">
                      <ul>
                        {choose.map((item, idx) => (
                          <li key={idx}>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="choose6-icon-list">
                      <ul>
                        {choose2.map((item, idx) => (
                          <li key={idx}>
                            <span className="check">
                              <FaCheck className="fa-solid" />
                            </span>
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
                <div className="button mt-30" data-aos="fade-right" data-aos-duration={1200}>
                  <Link className="theme-btn13" href="/domain">
                    Lets Started Now
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
            <Col lg={6}>
              <div className="choose6-images">
                <div className="shape-bg round-circle">
                  <Image src={Shapeimg} alt="" />
                </div>
                <div className="image overflow-hidden reveal">
                  <Image src={Chooses6} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default ChooseUs
