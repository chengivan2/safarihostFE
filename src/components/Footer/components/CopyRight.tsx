import Payment1 from '@/assets/img/others/payment1.png'
import Payment2 from '@/assets/img/others/payment2.png'
import Payment3 from '@/assets/img/others/payment3.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const CopyRight = () => {
  return (
    <>
      <Container>
        <Row className="vl-copyright1 _dv-top align-items-center">
          <Col lg={6}>
            <p>Copyright 2025 SafariHost Theme By FleexStudio | All Right Reserved</p>
          </Col>
          <Col lg={6}>
            <div className="payment-options">
              <Link href="">
                <Image src={Payment1} alt="" />
              </Link>
              <Link href="">
                <Image src={Payment3} alt="" />
              </Link>
              <Link href="">
                <Image src={Payment2} alt="" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CopyRight
