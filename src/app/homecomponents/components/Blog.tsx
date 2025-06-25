'use client'
import Date from '@/assets/img/icons/date1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa'
import { blog } from '../data'

const Blog = () => {
  return (
    <>
      <div className="blog2 sp sec-bg6">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading6">
                <h2 className="text-anime-style-3">Our Latest Blog &amp; Insight</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {blog.map((blog, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in-up" data-aos-duration={blog.number}>
                <div className="vl-blog-6-item mt-30">
                  <div className="vl-blog-6-thumb image-anime _relative">
                    <Image className="w-full" src={blog.image} alt="" />
                  </div>
                  <div className="vl-blog-6-content heading6">
                    <div className="vl-blog6-meta">
                      <Link href="" className="mb-16">
                        <Image src={Date} alt="" /> 8 December 2025
                      </Link>
                    </div>
                    <h3>
                      <Link href="/details/detail">Top 5 Plugins to A Enhance Your WordPress Hosting Experience</Link>
                    </h3>
                    <Link href="/details/detail" className="learn_btn mt-16">
                      Read more
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
    </>
  )
}

export default Blog
