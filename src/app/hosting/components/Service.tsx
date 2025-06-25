'use client'
import { service } from '@/assets/data/other'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Service = () => {
  return (
    <>
      <div className="service1 sp bg-cover _relative">
        <Container>
          <Row>
            {service.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="fade-up" data-aos-duration={800} data-aos-delay={item.number} data-aos-offset={100}>
                <div className="service1-box add-shadow mt-30">
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
      </div>
    </>
  )
}

export default Service
