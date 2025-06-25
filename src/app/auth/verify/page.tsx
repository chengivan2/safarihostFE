import Bg from '@/assets/img/bg/login-bg.jpg'
import Logo from '@/assets/img/logo/header-logo1.png'

import VerifyImg from '@/assets/img/others/verify.png'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { FaAngleRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'SafariHost - Verify Email',
}
const VerifyEmail = () => {
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
                    <form action="#">
                      <div className="form">
                        <div className="text-center">
                          <div className="forgot-icon">
                            <Image src={VerifyImg} alt="" />
                          </div>
                          <div className="space20" />
                          <h2>Verify Your Email!</h2>
                          <p>
                            We sent you a verification link via email. Please click it to verify your email address if you don’t see it, please wait
                            up to 5 mins or check your SPAM folder.
                          </p>
                        </div>
                        <div className="space30" />
                        <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
                          Open Email <span />
                        </button>
                      </div>
                    </form>
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

export default VerifyEmail
