import date1 from '@/assets/img/icons/date1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { moreblog } from '../data'

const MoreBlog = () => {
  return (
    <>
      <div className="blog2">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading1">
                <h2>Read More Blog</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {moreblog.map((item, idx) => (
              <Col lg={4} md={6} key={idx}>
                <div className="vl-blog-2-item mt-30">
                  <div className="vl-blog-2-thumb image-anime _relative">
                    <Image className="w-full" src={item.image} alt="" />
                  </div>
                  <div className="vl-blog-2-content heading2">
                    <div className="vl-blog2-meta">
                      <Link href="#" className="mb-16">
                        <Image src={date1} alt="" /> {item.date}
                      </Link>
                    </div>
                    <h4>
                      <Link href="/details/detail">{item.title}</Link>
                    </h4>
                    <Link href="/details/detail" className="learn_btn mt-16">
                      Read more{' '}
                      <span>
                        <FaArrowRight className="fa-regular" />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="space100" />
    </>
  )
}

export default MoreBlog
