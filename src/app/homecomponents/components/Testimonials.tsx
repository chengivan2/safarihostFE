'use client'
import { testimonial } from '@/assets/data/other'
import tes2 from '@/assets/img/testimonial/tes2-smoll-image.png'
import Tes6 from '@/assets/img/testimonial/tes6-image.png'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FaAngleDown, FaAngleUp, FaStar } from 'react-icons/fa'
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

const Testimonials = () => {
  const swiperOptions: SwiperOptions = {
    modules: [Autoplay, Navigation],
    spaceBetween: 50,
    loop: false,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next-team',
      prevEl: '.swiper-button-prev-team',
    },
    breakpoints: {
      576: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
      1200: { slidesPerView: 1 },
    },
  }
  return (
    <>
      <div className="tes6 sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading6">
                <h2 className="text-anime-style-3">Real Feedback From Real Users</h2>
              </div>
            </Col>
          </Row>
          <div className="space60" />
          <Row>
            <Col lg={10} className="m-auto">
              <Row className="align-items-center">
                <Col lg={5}>
                  <div className="main-image" data-aos="fade-up" data-aos-duration={700}>
                    <Image src={Tes6} alt="" />
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="tes6-all" data-aos="fade-up" data-aos-duration={900}>
                    <div className="tes6-slider">
                      <Swiper {...swiperOptions} wrapperClass="align-items-center">
                        {testimonial.map((item, idx) => (
                          <SwiperSlide key={idx}>
                            <div className="swiper-slide">
                              <div className="testimonials-box-2">
                                <div className="star">
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
                                <p className="text">{item.description}</p>
                                <div className="bottom">
                                  <div className="info">
                                    <div className="image">
                                      <Image src={tes2} alt="" />
                                    </div>
                                    <div className="content">
                                      <h6 className="name">
                                        <Link href="">{item.title}</Link>
                                      </h6>
                                      <p className="position">{item.product}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="pagination-buttons">
                      <div className="tes6-prev-arrow">
                        <Button className="swiper-button-prev-team">
                          <FaAngleUp className="fa-solid" style={{ marginBottom: '12px' }} />
                        </Button>
                      </div>
                      <div className="tes6-next-arrow">
                        <Button className="swiper-button-next-team">
                          <FaAngleDown className="fa-solid" style={{ marginBottom: '12px' }} />
                        </Button>
                      </div>
                    </div>
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

export default Testimonials
