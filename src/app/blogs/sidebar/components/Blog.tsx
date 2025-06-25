'use client'
import { popular } from '@/assets/data/other'
import date from '@/assets/img/icons/date1.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { blogs } from '../data'

const Blog = () => {
  return (
    <>
      <div className="blog2 sp">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="details-sidebar mt-30">
                <div className="_sidebar-widget _search">
                  <h3>Search</h3>
                  <div className="_search-form">
                    <form action="#">
                      <input type="search" placeholder="Search..." />
                      <button>
                        <FaMagnifyingGlass className="fa-solid " />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="_sidebar-widget _category mt-40">
                  <h3>Blog Category</h3>
                  <div className="_category-list">
                    <ul>
                      <li>
                        <a href="#">
                          VPS Hosting
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Shared Hosting
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Cloud Hosting
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          WordPress Hosting
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Email Hosting
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Dedicated Hosting
                          <span>
                            <FaAngleRight className="fa-solid" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="_sidebar-widget _tags mt-40">
                  <h3>Popular Tags</h3>
                  <div className="_tags-area">
                    <ul>
                      {popular.map((item, idx) => (
                        <li key={idx}>
                          <Link href="#">{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={8}>
              <Row className="ml-30 md:ml-0 sm:ml-0">
                {blogs.map((item, idx) => (
                  <Col md={6} key={idx} data-aos="zoom-in-up" data-aos-duration={800}>
                    <div className="vl-blog-2-item mt-30">
                      <div className="vl-blog-2-thumb image-anime _relative">
                        <Image className="w-full" src={item.image} alt="" />
                      </div>
                      <div className="vl-blog-2-content heading2">
                        <div className="vl-blog2-meta">
                          <Link href="#" className="mb-16">
                            <Image src={date} alt="" />
                            {item.date}
                          </Link>
                        </div>
                        <h4>
                          <Link href="/details/detail">{item.title}</Link>
                        </h4>
                        <Link href="/details/detail" className="learn_btn mt-16">
                          Read more
                          <span>
                            <FaArrowRight className="fa-regular " />
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog
