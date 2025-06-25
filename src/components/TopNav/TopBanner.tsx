import HeaderIcon1 from '@/assets/img/icons/header1-top-icon1.svg'
import HeaderIcon2 from '@/assets/img/icons/header1-top-icon2.svg'
import HeaderIcon3 from '@/assets/img/icons/header1-top-icon3.svg'
import HeaderIcon4 from '@/assets/img/icons/header1-top-icon4.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const TopBanner = () => {
  return (
    <>
      <div className="header1-top pb-16 md:pb-0 sm:pb-0 d-none d-lg-block">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="header-top-contact">
                <div className="icon">
                  <Image src={HeaderIcon1} alt="Image" />
                </div>
                <div className="text">
                  <Link href="mailto:contact@safarihost.com">contact@safarihost.com</Link>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="header-top-contact">
                <div className="icon">
                  <Image src={HeaderIcon2} alt="Image" />
                </div>
                <div className="text">
                  <p>&nbsp;Hosting Flash Sale: Starting at&nbsp;$2.59/mo&nbsp;for a limited time</p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="header-top2-contacts">
                <div className="header-top-contact">
                  <div className="icon">
                    <Image src={HeaderIcon3} alt="Image" />
                  </div>
                  <div className="text">
                    <Link href="">Live Chat</Link>
                  </div>
                </div>
                <div className="header-top-contact ml-30">
                  <div className="icon">
                    <Image src={HeaderIcon4} alt="Image" />
                  </div>
                  <div className="text">
                    <Link href="/auth/login">Login</Link>
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

export default TopBanner
