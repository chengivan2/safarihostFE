'use client'
import { intergration } from '@/assets/data/other'
import cta1 from '@/assets/img/bg/cta1-bg.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Integration = () => {
  return (
    <>
      <div className="apps3 sp bg-cover" style={{ backgroundImage: `url(${cta1.src})` }}>
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading2-w">
                <div className="heading4-w">
                  <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={800}>
                    100+ integration{' '}
                  </span>
                  <h2 className="text-anime-style-3">100+ Apps &amp; Intergrations</h2>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {intergration.map((item, idx) => (
              <Col lg={3} md={6} key={idx} data-aos="zoom-in-up" data-aos-duration={item.number}>
                <div className="apps-item mt-30">
                  <div className="image">
                    <Image src={item.image} alt="" />
                  </div>
                  <div className="text">
                    <Link href="#">{item.title}</Link>
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

export default Integration
