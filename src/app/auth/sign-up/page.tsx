import Bg from '@/assets/img/bg/login-bg.png'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'
import Form from './components/Form'

export const metadata: Metadata = {
  title: 'SafariHost- Sign Up',
}
const SignIn = () => {
  return (
    <>
      <main>
        <div className="login-page-sec bg-cover" style={{ backgroundImage: `url(${Bg.src})` }}>
          <Container>
            <Row>
              <Col lg={6} className="m-auto">
                <div className="login-form-area mt-100">
                  <div className="logo text-center">
                    <Link href="/" className='flex justify-center w-[120] bg-white-90 rounded-full p-2'>
                      <Image src="/safarihostlogonobg.png" width={100} height={100} alt="SafariHost logo" />
                    </Link>
                  </div>
                  <div className="space20" />
                  <div className="login-form mt-60">
                    <Form />
                  </div>
                </div>
                <div className="space100" />
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  )
}

export default SignIn
