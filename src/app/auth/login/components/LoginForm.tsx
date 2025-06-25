'use client'
import Fb from '@/assets/img/others/facebook.png'
import Google from '@/assets/img/others/google.png'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const LoginForm = () => {
  

  const route = useRouter()

  const messageSchema = yup.object({
    email: yup.string().email().required('Please enter Email'),
    password: yup.string().required('Please enter password'),
  })

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: 'demo@gmail.com',
      password: '123456',
    },
    resolver: yupResolver(messageSchema),
  })

  const handleLogin = () => {
    route.push('/home/hosting-01')
  }

  return (
    <>
      <Form onSubmit={handleSubmit(handleLogin)} action="#">
        <div className="form">
          <h2>Welcome Back</h2>
          <p>Please fill your email and password to sign in.</p>
          <div className="space16" />
          <div className="single-input">
            <label>Name</label>
            <input type="text" className="input-box" placeholder="Your name" />
          </div>
          <div className="single-input">
            <label>Email Address</label>
            <TextFormInput control={control} name="email" placeholder="name@example.com" type="email" className="input-box" floating  style={{paddingTop:"10px"}}/>
          </div>
          <div className="checkbox-container text-center">
            <p>
              Don’t have an account? <Link href="/auth/sign-up">Sign Up Today.</Link> <br /> <Link href="/auth/forgot">Forgot Password</Link>
            </p>
          </div>
          <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
            Sign In <span />
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

export default LoginForm
