'use client'
import sec1 from '@/assets/img/images/about-page-sec1.png'
import about2 from '@/assets/img/shapes/about2-shape.png'
import { animate } from '@/utils/animation'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar'

const Count = () => {
  const [progressSpeed, setProgressSpeed] = useState(0)
  const [progressSEO, setProgressSEO] = useState(0)
  const [progressResults, setProgressResults] = useState(0)

  useEffect(() => {
    animate(96, setProgressSpeed)
    animate(94, setProgressSEO)
    animate(90, setProgressResults)
  }, [])
  return (
    <>
      <div className="about2 _relative bg-cover sp" >
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="about2-images">
                <div className="shape-bg1">
                  <Image src={about2} alt="" />
                </div>
                <div className="main-image animate1 reveal overflow-hidden">
                  <Image src={sec1} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="heading1 ml-40 sm:ml-0 md:ml-0">
                <span className="sub-title" data-aos="zoom-in-left" data-aos-duration={800}>
                  loading speed on VPS
                </span>
                <h2 className="text-anime-style-3">Launch Website with Our Top-Tier Hosting Service</h2>
                <p data-aos="fade-left" data-aos-duration={900} className="mt-16">
                  We're more than web hosting provider—we're your partner in online success. Founded with a passion for technology and a commitment
                  customer satisfaction, we've built a reputation.
                </p>
                <div className="circle-progress-area1" data-aos="fade-left" data-aos-duration={1100}>
                  <Row>
                    <Col lg={3} md={6}>
                      <div className="progresbar">
                        <div className="progressbar">
                          <div className="circle" data-percent={96} style={{ margin: '25px' }}>
                            <CircularProgressbar
                              value={progressSpeed}
                              text={`${progressSpeed}%`}
                              styles={{
                                path: {
                                  stroke: '#0061FF',
                                },
                              }}
                            />
                          </div>
                        </div>
                        <p>Loading Speed</p>
                      </div>
                    </Col>
                    <Col lg={3} md={6}>
                      <div className="progresbar">
                        <div className="progressbar">
                          <div className="circle two" data-percent={94} style={{ margin: '25px' }}>
                            <CircularProgressbar
                              value={progressSEO}
                              text={`${progressSEO}%`}
                              styles={{
                                path: {
                                  stroke: '#0061FF',
                                },
                              }}
                            />
                          </div>
                        </div>
                        <p>SEO Off-Page</p>
                      </div>
                    </Col>
                    <Col lg={3} md={6}>
                      <div className="progresbar">
                        <div className="progressbar">
                          <div className="circle three" data-percent={90} style={{ margin: '25px' }}>
                            <CircularProgressbar
                              value={progressResults}
                              text={`${progressResults}%`}
                              styles={{
                                path: {
                                  stroke: '#0061FF',
                                },
                              }}
                            />
                          </div>
                        </div>
                        <p>Search Results</p>
                      </div>
                    </Col>
                    <Col lg={3}></Col>
                  </Row>
                </div>
                <div className="button mt-10" data-aos-duration={800} data-aos="fade-left">
                  <Link href="domin" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                    Launch your website
                    <span />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Count
