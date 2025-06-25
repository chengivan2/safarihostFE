import Bg from '@/assets/img/bg/login-bg.jpg'
import Logo from '@/assets/img/logo/header-logo1.png'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'
import ResetForm from './components/ResetForm'

export const metadata: Metadata = {
  title: 'SafariHost - Reset Password',
}
const ResetPass = () => {
  return (
    <>
      <main>
        <div className="login-page-sec bg-cover" style={{ backgroundImage: `url(${Bg.src})` }}>
          <Container>
            <Row>
              <Col lg={6} className="m-auto">
                <div className="login-form-area mt-100">
                  <div className="logo text-center">
                    <Link href="/">
                      <Image src={Logo} alt="" />
                    </Link>
                  </div>
                  <div className="space20" />
                  <div className="breadcrumbs-pages text-center">
                    <ul>
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li className="angle">
                        <FaAngleRight className="fa-solid" />
                      </li>
                      <li>
                        <Link href="/auth/login">Login</Link>
                      </li>
                      <li className="angle">
                        <FaAngleRight className="fa-solid" />
                      </li>
                      <li>Reset Password</li>
                    </ul>
                  </div>
                  <div className="login-form mt-60">
                    <ResetForm />
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

export default ResetPass
