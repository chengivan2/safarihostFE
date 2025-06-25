import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa'
import { testimonial } from '../data'

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-page-sec sp">
        <Container>
          <Row>
            {testimonial.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="tes-page-box mt-30">
                  <div className="stars">
                    <ul>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                      <li>
                        <FaStar className="fa-solid" />
                      </li>
                    </ul>
                  </div>
                  <p>
                    "Switching this WordPress hosting was the best to decision for my business. My site’s speed has Hosting improved dramatically, and
                    the support team is best always there.”
                  </p>
                  <div className="author-area">
                    <div className="image">
                      <Image src={item.image} alt="" />
                    </div>
                    <div className="author-content">
                      <Link href="">{item.name}</Link>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <div className="space50" />
          <Row>
            <Col xs={12} className="m-auto">
              <div className="theme-pagination text-center">
                <ul>
                  <li>
                    <Link href="">
                      <FaAngleLeft className="fa-solid" />
                    </Link>
                  </li>
                  <li>
                    <Link className="active" href="">
                      01
                    </Link>
                  </li>
                  <li>
                    <Link href="">02</Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link href="">12</Link>
                  </li>
                  <li>
                    <Link href="">
                      <FaAngleRight className="fa-solid" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Testimonials
