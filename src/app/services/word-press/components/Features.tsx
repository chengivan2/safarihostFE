'use client'
import { service2, service3 } from '@/assets/data/other'
import noise from '@/assets/img/bg/noise-bg1.jpg'
import sec from '@/assets/img/shapes/service-details2-sec-center-img.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <>
      <div className="service3 sp bg-cover" style={{ backgroundImage: `url(${noise.src})` }}>
        <Container>
          <Row>
            <Col lg={8} className="m-auto text-center">
              <div className="heading1">
                <h2 className="text-anime-style-3">Shared Hosting Features</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30 align-items-center">
            <Col lg={5}>
              {service3.map((item, idx) => (
                <div key={idx} data-aos="fade-right" data-aos-duration={item.number}>
                  <div className="service-details2-box mt-30">
                    <div>
                      <div className="icon">
                        <Image src={item.image} alt="" />
                      </div>
                    </div>
                    <div className="heading3">
                      <h4>
                        <Link href="/service/vip">{item.title}</Link>
                      </h4>
                      <p className="mt-16">{item.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
            <Col lg={2} className="text-center">
              <div className="center-shape">
                <Image src={sec} alt="" />
              </div>
            </Col>
            <Col lg={5}>
              {service2.map((item, idx) => (
                <div key={idx} data-aos="fade-left" data-aos-duration={item.number}>
                  <div className="service-details2-box mt-30">
                    <div>
                      <div className="icon">
                        <Image src={item.image} alt="" />
                      </div>
                    </div>
                    <div className="heading3">
                      <h4>
                        <Link href="/service/vip">{item.title}</Link>
                      </h4>
                      <p className="mt-16">{item.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Features
