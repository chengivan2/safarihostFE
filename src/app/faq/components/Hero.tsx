import Hero1 from '@/assets/img/bg/inner-hero1-bg.jpeg'
import heroimg from '@/assets/img/images/inner-hero-image1.png'
import Shape from '@/assets/img/shapes/inner-hero-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
      <div className="inner-hero1 pt-60" style={{ backgroundImage: `url(${Hero1.src})` }}>
        <Container>
          <Row className="align-items-center">
            <Col md={5}>
              <div className="main-heading1">
                <h1>FAQ Question</h1>
                <div className="breadcrumbs-pages">
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="angle">
                      <FaAngleRight className="fa-solid" />
                    </li>
                    <li>FAQ Question</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className="images">
                <Image src={heroimg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
        <div className="sec-shape">
          <Image src={Shape} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero
