'use client'
import { service } from '@/assets/data/other'
import Noise from '@/assets/img/bg/noise-bg1.jpg'
import Shape1 from '@/assets/img/shapes/service1-shape1.png'
import Shape2 from '@/assets/img/shapes/service1-shape2.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Features = () => {
  return (
    <>
      <div className="service1 sp bg-cover _relative" style={{ backgroundImage: `url(${Noise.src})` }}>
        <Container>
          <Row>
            <Col lg={5} className="m-auto text-center">
              <div className="heading1">
                <h2 className="text-anime-style-3">VPS Hosting Features</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {service.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={800} data-aos-delay={item.number} data-aos-offset={100}>
                <div className="service1-box mt-30">
                  <div className="icon">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="content heading1 mt-24">
                    <h3>
                      <Link href="/service/vip">{item.title}</Link>
                    </h3>
                    <p className="mt-16">{item.comment}</p>
                    <Link href="/service/vip" className="learn_btn2 learn2_active2 mt-20 wow fadeInDown" data-wow-duration="0.8s">
                      Learn more <span />
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <Image src={Shape1} alt="" className="shape1 animate1" />
        <Image src={Shape2} alt="" className="shape2" />
      </div>
    </>
  )
}

export default Features
