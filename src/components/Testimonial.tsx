"use client";
import { testimonials } from "@/assets/data/other";
import Noise from "@/assets/img/bg/noise-bg1.jpg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaAngleDown, FaAngleUp, FaStar } from "react-icons/fa";
import Slider from "react-slick";

const Testimonial = () => {
  const [nav1, setNav1] = useState<Slider>();
  const [nav2, setNav2] = useState<Slider>();
  const sliderRef1 = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);

  useEffect(() => {
    setNav1(sliderRef1.current!);
    setNav2(sliderRef2.current!);
  }, []);

  const settings1 = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <div
        className="tes1 sp bg-cover"
        style={{ backgroundImage: `url(${Noise.src})` }}
      >
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading1">
                <h2 className="text-anime-style-3">
                  Success Stories from Our Users
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mt-60 md:mt-30 sm:mt-30 tes1-shape-bg">
            <Col lg={2} />
            <Col lg={3}>
              <div className="slider-area _relative">
                <div className="slider-boxarea2">
                  <Slider ref={sliderRef1} asNavFor={nav2} {...settings1}>
                    {testimonials.map((item, idx) => (
                      <div key={idx} className="slider-box">
                        <div className="img1">
                          <Image src={item.image} alt="" />
                        </div>
                        <div className="content">
                          <Link href="">{item.name}</Link>
                          <div className="space10" />
                          <p>{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  <div className="space20" />
                </div>
                <div className="tes1-arrows">
                  <div className="prev-arrow">
                    <button title="Previous testimonial" onClick={() => sliderRef1.current?.slickPrev()}>
                      <FaAngleUp className="fa-solid" />
                    </button>
                  </div>
                  <div className="next-arrow">
                    <button title="Next testimonial" onClick={() => sliderRef1.current?.slickNext()}>
                      <FaAngleDown className="fa-solid" />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-up" data-aos-duration={1000}>
              <div className="testimonial-horizental-slider2">
                <Slider ref={sliderRef2} asNavFor={nav1} {...settings2}>
                  {testimonials.map((item, idx) => (
                    <div key={idx} className="testimonial-vertical">
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
                        “At Hostic our clients&#39; success is our top priority.
                        As one client of on shared, Working with Finazze
                        transformed our business. Their expertise in financial
                        strategy us identify growth opportunity and we never
                        considered. With their guidance, we increased our.”
                      </p>
                      <div className="bottom-area-all">
                        <div className="author-area">
                          <div className="image">
                            <Image src={item.image} alt="" />
                          </div>
                          <div className="text">
                            <h4>
                              <Link href="#">{item.name}</Link>
                            </h4>
                            <p>{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Testimonial;
