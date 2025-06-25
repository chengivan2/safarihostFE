'use client'
import { blogs } from '@/assets/data/other'
import date from '@/assets/img/icons/date1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa'

const Blog = () => {
  return (
    <>
      <div className="blog2 sp">
        <Container>
          <Row>
            {blogs.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in-up" data-aos-duration={800}>
                <div className="vl-blog-2-item mt-30">
                  <div className="vl-blog-2-thumb image-anime _relative">
                    <Image className="w-full" src={item.image} alt="" />
                  </div>
                  <div className="vl-blog-2-content heading2">
                    <div className="vl-blog2-meta">
                      <Link href="#" className="mb-16">
                        <Image src={date} alt="" /> 8 December 2025
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
          <div className="space50" />
          <Row>
            <Col xs={12} className="m-auto">
              <div className="theme-pagination text-center">
                <ul>
                  <li>
                    <Link href="#">
                      <FaAngleLeft className="fa-solid" />
                    </Link>
                  </li>
                  <li>
                    <Link className="active" href="#">
                      01
                    </Link>
                  </li>
                  <li>
                    <Link href="#">02</Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link href="#">12</Link>
                  </li>
                  <li>
                    <Link href="#">
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

export default Blog
