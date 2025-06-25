import icon1 from '@/assets/img/icons/choose-domain-icon1.svg'
import icon2 from '@/assets/img/icons/choose-domain-icon2.svg'
import icon3 from '@/assets/img/icons/choose-domain-icon3.svg'
import domin from '@/assets/img/images/choose-domain-image.png'
import shape from '@/assets/img/shapes/tes1-shape.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Choose = () => {
  return (
    <>
      <div className="choose-domain _relative">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="images">
                <div className="image">
                  <Image src={domin} alt="" />
                </div>
                <div className="shape">
                  <Image src={shape} alt="" />
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="heading1">
                <span className="sub-title">best domain choose</span>
                <h2>The Reasons Behind Best Choosing To Our Hosting</h2>
                <div className="space10" />
                <div className="domain-choose-box">
                  <div>
                    <div className="icon">
                      <Image src={icon1} alt="" />
                    </div>
                  </div>
                  <div className="heading1">
                    <h4>
                      <Link href="/service/vip">100% Uptime Guaranteed</Link>
                    </h4>
                    <p className="mt-16">We understand that your website the backbone of your online presence, which is why we offer 100%</p>
                  </div>
                </div>
                <div className="domain-choose-box">
                  <div>
                    <div className="icon">
                      <Image src={icon2} alt="" />
                    </div>
                  </div>
                  <div className="heading1">
                    <h4>
                      <Link href="/service/vip">Embrace Open Source</Link>
                    </h4>
                    <p className="mt-16">Open source is more than just a technology—it's a philosophy that fosters innovation, collaboration.</p>
                  </div>
                </div>
                <div className="domain-choose-box">
                  <div>
                    <div className="icon">
                      <Image src={icon3} alt="" />
                    </div>
                  </div>
                  <div className="heading1">
                    <h4>
                      <Link href="/service/vip">Commitment To Security</Link>
                    </h4>
                    <p className="mt-16">Your security is our top priority. In an ever evolving digital landscape, we understand the importance.</p>
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

export default Choose
