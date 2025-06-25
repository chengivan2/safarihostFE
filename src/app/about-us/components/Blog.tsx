'use client'
import Date1 from '@/assets/img/icons/date1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { blog } from '../data'

const Blog = () => {
  
  return (
    <>
      <div className="blog1 sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading1">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={800}>
                  our blog &amp; news
                </span>
                <h2 className="text-anime-style-3">Latest Insights &amp; News</h2>
              </div>
            </Col>
          </Row>
          <Row className="mt-30">
            {blog.map((item, idx) => (
              <Col lg={4} md={6} key={idx} data-aos="zoom-in-up" data-aos-duration={item.number}>
                <div className="vl-blog-1-item mt-30">
                  <div className="vl-blog-3-thumb image-anime">
                    <Image className="w-full" src={item.image} alt="" />
                  </div>
                  <div className="vl-blog-1-content heading1">
                    <div className="vl-blog1-meta">
                      <Link href="" className="mb-16">
                        <Image src={Date1} alt="" /> 8 December 2025
                      </Link>
                    </div>
                    <h4>
                      <Link href="/details/detail">{item.comment}</Link>
                    </h4>
                    <Link href="/details/detail" className="learn_btn1 learn1_active1 mt-20 wow fadeInDown" data-wow-duration="0.8s">
                      Read more <span />
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
