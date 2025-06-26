'use client'
import { choose } from '@/assets/data/other'
import Noise from '@/assets/img/bg/noise-bg1.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Choose = () => {

  return (
    <>
      <div className="work1 sp bg-cover" style={{ backgroundImage: `url(${Noise.src})` }}>
        <Container>
          <Row>
            <Col lg={7} className=" m-auto text-center">
              <div className="heading1">
                <h2 className="text-anime-style-3">Why Choose SafariHost?</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {choose.map((item, idx) => (
              <Col lg={4} md={6} key={idx} className="mt-30 aos-init" data-aos="fade-up" data-aos-duration={item.number}>
                <div className="work1-box text-center">
                  <div className="icon">
                    <Image src={item.image} alt="Image" />
                  </div>
                  <div className="content heading1 mt-20">
                    <h4>
                      <Link href="">{item.title}</Link>
                    </h4>
                    <p className="mt-16">{item.comment}</p>
                  </div>
                  <div className="arrow-shape1">{item.avtar && <Image src={item.avtar} alt="Image" />}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Choose
