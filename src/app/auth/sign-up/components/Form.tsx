'use client'
import Fb from '@/assets/img/others/facebook.png'
import Google from '@/assets/img/others/google.png'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const FormPage = () => {
  const resetPasswordSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    password: yup.string().min(8, 'Password must of minimum 8 characters').required('Please enter Password'),
    // confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  })
  return (
    <>
      <Form onSubmit={handleSubmit(() => {})} action="#">
        <div className="form">
          <h2>Create Your Account</h2>
          <p>Create an account today and start using SafariHost.</p>
          <p>Already have an account? <Link href="/auth/login">Sign In</Link></p>
          <div className="space16" />
          <div className="single-input">
            <label>Name</label>
            <input type="text" className="input-box" placeholder="Your name" />
          </div>
          <div className="single-input">
            <label>Email Address</label>
            <TextFormInput
              control={control}
              name="email"
              placeholder="name@example.com"
              type="email"
              className="input-box"
              floating
              style={{ paddingTop: '10px' }}
            />
          </div>
          <div className="single-input">
            <label>Password</label>
            <PasswordFormInput
              control={control}
              name="password"
              className="input-box"
              type="password"
              placeholder="Enter your password"
              floating
              style={{ paddingTop: '10px' }}
            />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              I have read and agree to the <Link href="#">Terms &amp; Conditions.</Link>
            </label>
          </div>
          <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
            Create An Account <span />
          </button>
          <div className="or-text">
            <p>Or</p>
          </div>
          <button className="social-btn google">
            <Image src={Google} alt="Google" />
            Sign Up With Google
          </button>
          <button className="social-btn facebook mt-20">
            <Image src={Fb} alt="Facebook" />
            Sign Up With Facebook
          </button>
        </div>
      </Form>
    </>
  )
}

export default FormPage
