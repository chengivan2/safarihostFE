'use client'
import { category, latestblogs, links, links2, popular } from '@/assets/data/other'
import detail from '@/assets/img/blog/blog-details-image1.png'
import detail2 from '@/assets/img/blog/blog-details-image2.png'
import detail3 from '@/assets/img/blog/blog-details-image3.png'
import comment1 from '@/assets/img/blog/details-comment1.png'
import comment2 from '@/assets/img/blog/details-comment2.png'
import date from '@/assets/img/icons/date1.svg'
import Comment from '@/assets/img/icons/details-comment.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight, FaCheck, FaFacebookF, FaInstagram, FaLinkedinIn, FaReply } from 'react-icons/fa'
import { FaMagnifyingGlass, FaXTwitter } from 'react-icons/fa6'

const Blog = () => {
  return (
    <>
      <div className="blog2 sp">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="blog-post-detials mr-30 md:mr-0 sm:mr-0">
                <article>
                  <div className="details-single-posts">
                    <div className="image image-anime _relative">
                      <Image src={detail} alt="" />
                    </div>
                    <div className="content-details-area">
                      <ul>
                        <li className="tag">
                          <Link href="#">#Digital Marketing</Link>
                        </li>
                        <li className="date">
                          <Link href="#">
                            <Image src={date} alt="" /> 10 October 2025
                          </Link>
                        </li>
                        <li className="date">
                          <Link href="#">
                            <Image src={Comment} alt="" /> 2 Comments
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="heading1 mt-24">
                      <h3>The Importance of Regular To Backups Your WordPress Site</h3>
                      <p className="mt-16">
                        Your WordPress site is the heart of your online presence, and losing it due to a hack, server failure, or human error can be
                        devastating. Regular backups are your safety net, ensuring that you can quickly restore your site to its previous state if
                        something goes wrong. Whether it's a simple plugin update that didn't go as planned or a more serious security breach, having
                        a recent backup means you won't lose valuable.
                      </p>
                    </div>
                    <Row>
                      <Col lg={5}>
                        <div className="details-check-list mt-24">
                          <ul>
                            {links.map((item, idx) => (
                              <li key={idx}>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                      <Col lg={5}>
                        <div className="details-check-list mt-24">
                          <ul>
                            {links2.map((item, idx) => (
                              <li key={idx}>
                                <span className="check">
                                  <FaCheck className="fa-solid" />
                                </span>
                                {item.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </article>
                <article>
                  <div className="details-single-posts">
                    <Row>
                      <Col lg={6} className="mt-40">
                        <div className="image image-anime _relative">
                          <Image src={detail2} alt="" />
                        </div>
                      </Col>
                      <Col lg={6} className="mt-40">
                        <div className="image image-anime _relative">
                          <Image src={detail3} alt="" />
                        </div>
                      </Col>
                    </Row>
                    <div className="heading1 mt-24">
                      <h4>Mitigates the Impact of Cyber Attacks</h4>
                      <p className="mt-16">
                        Regular backups are essential for maintaining the security and stability of your WordPress site. They protect you from data
                        loss caused by unexpected events like server failures, hacking attempts, or even human errors, ensuring that your.
                      </p>
                    </div>
                  </div>
                </article>
                <div className="details-border" />
                <div className="details-social-tags">
                  <Row>
                    <Col lg={5}>
                      <div className="tags-area">
                        <ul>
                          <li className="text">Posts Tags:</li>
                          <li>
                            <Link href="#">#Web Hosting</Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className="social-icons">
                        <ul>
                          <li className="text">Share On:</li>
                          <li>
                            <Link href="#">
                              <FaFacebookF className="fa-brands" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaInstagram className="fa-brands" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaLinkedinIn className="fa-brands" />
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              <FaXTwitter className="fa-brands" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="details-comments-area mt-30">
                  <div className="heading1 pb-16">
                    <h4>Blog Comments (2)</h4>
                  </div>
                  <div className="details-single-comment">
                    <div className="top-area">
                      <div className="author-area">
                        <div className="auhor_thumb">
                          <Image src={comment1} alt="" />
                        </div>
                        <div className="heading">
                          <Link href="#" className="date">
                            <Image src={date} alt="" /> 8 December 2025
                          </Link>
                          <h4>
                            <Link href="#">Alex Robertson</Link>
                          </h4>
                        </div>
                      </div>
                      <Link href="#" className="reply">
                        <span>
                          <FaReply className="fa-solid" />
                        </span>{' '}
                        Reply
                      </Link>
                    </div>
                    <p>
                      Regular backups are not just a precaution; they are a critical component any website maintenance strategy. In the event of a
                      catastrophic failure, such as a server crash or a malware attack, a recent backup is often the
                    </p>
                  </div>
                  <div className="details-single-comment ml-30 md:ml-0 sm:ml-0">
                    <div className="top-area">
                      <div className="author-area">
                        <div className="auhor_thumb">
                          <Image src={comment2} alt="" />
                        </div>
                        <div className="heading">
                          <Link href="#" className="date">
                            <Image src={date} alt="" /> 8 December 2025
                          </Link>
                          <h4>
                            <Link href="#">Alex Robertson</Link>
                          </h4>
                        </div>
                      </div>
                      <Link href="#" className="reply">
                        <span>
                          <FaReply className="fa-solid" />
                        </span>{' '}
                        Reply
                      </Link>
                    </div>
                    <p>
                      Regular backups are not just a precaution; they are a critical component any website maintenance strategy. In the event of a
                      catastrophic failure, such as a server crash or a malware attack, a recent backup is often the
                    </p>
                  </div>
                </div>
                <div className="details-contact-form mt-50">
                  <div className="heading1 pb-16">
                    <h4>Leave A Reply Now</h4>
                  </div>
                  <div className="form-area">
                    <h4>Send Us A Message</h4>
                    <form action="#">
                      <Row>
                        <Col md={6}>
                          <div className="single-input">
                            <input type="text" placeholder="First Name" />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="single-input">
                            <input type="text" placeholder="Last Name" />
                          </div>
                        </Col>
                        <Col md={12}>
                          <div className="single-input">
                            <textarea rows={4} placeholder="Your Message" />
                          </div>
                          <div className="button">
                            <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                              leave a reply now
                              <span />
                            </button>
                          </div>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="details-sidebar sm:mt-30 md:mt-30">
                <div className="_sidebar-widget _search">
                  <h3>Search</h3>
                  <div className="_search-form">
                    <form action="#">
                      <input type="search" placeholder="Search..." />
                      <button>
                        <FaMagnifyingGlass className="fa-solid" />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="_sidebar-widget _category mt-40">
                  <h3>Blog Category</h3>
                  <div className="_category-list">
                    <ul>
                      {category.map((item, idx) => (
                        <li key={idx}>
                          <Link href="#">
                            {item.title}
                            <span>
                              <FaAngleRight className="fa-solid" />
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="_sidebar-widget _recent-posts mt-40">
                  <h3>Latest Blog</h3>
                  <div className="_recent-post-box">
                    {latestblogs.map((item, idx) => (
                      <div key={idx} className="recent-post-single">
                        <div>
                          <div className="image _relative image-anime">
                            <Image src={item.image} alt="" />
                          </div>
                        </div>
                        <div className="content">
                          <Link href="#" className="date">
                            <Image src={date} alt="" />
                            {item.date}
                          </Link>
                          <h5>
                            <Link href="/details/detail">{item.title}</Link>
                          </h5>
                        </div>
                      </div>
                    ))}
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
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog

//428
