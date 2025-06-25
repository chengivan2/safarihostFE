import Payment1 from '@/assets/img/others/payment7-1.png'
import Payment2 from '@/assets/img/others/payment7-2.png'
import Payment3 from '@/assets/img/others/payment7-3.png'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const LightCopyRight = () => {
  return (
    <>
      <Container>
        <Row className="vl-copyright5 _dv-top align-items-center">
          <Col lg={6}>
            <p>Copyright 2025 SafariHost Theme By FleexStudio | All Right Reserved</p>
          </Col>
          <Col lg={6}>
            <div className="payment-options">
              <Link href="">
                <Image src={Payment1} alt="" style={{ marginLeft: '5px' }} />
              </Link>
              <Link href="">
                <Image src={Payment2} alt="" style={{ marginLeft: '5px' }} />
              </Link>
              <Link href="">
                <Image src={Payment3} alt="" style={{ marginLeft: '5px' }} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LightCopyRight
