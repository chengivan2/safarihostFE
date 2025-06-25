'use client'
import { choose } from '@/assets/data/other'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Choose = () => {
  return (
    <>
      <div className="work4">
        <Container>
          <div className="service-details4-bottom-boxs">
            <Row className="mt-30">
              {choose.map((item, idx) => (
                <Col lg={4} md={6} key={idx} className="mt-30" style={{ marginTop: '30px' }} data-aos="fade-up" data-aos-duration={item.number}>
                  <div className="service-details3-bottom-box text-center">
                    <div className="icon">
                      <Image src={item.image} alt="" />
                    </div>
                    <div className="content heading4 mt-20">
                      <h4>
                        <Link href="#">{item.title}</Link>
                      </h4>
                      <p className="mt-16">{item.comment}</p>
                    </div>
                    <div className="arrow-shape1">{item.avtar && <Image src={item.avtar} alt="" />}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Choose
