'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { service } from '../data'

const Services = () => {
  return (
    <>
      <div className="service6 sp sec-bg6">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading6">
                <h2 className="text-anime-style-3">Cloud Hosting Services Tailored for Your Success</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {service.map((item, idx) => (
              <Col md={6} lg={4} key={idx} data-aos="zoom-in-up" data-aos-duration={item.number}>
                <div className="service6-box mt-30">
                  <div className="icon">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="content heading6 mt-20">
                    <h4>
                      <Link href="/service/vip">{item.title}</Link>
                    </h4>
                    <p className="mt-16">{item.comment} </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Services
