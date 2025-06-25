'use client'
import Img from '@/assets/img/others/forgot.png'
import TextFormInput from '@/components/form/TextFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const ForgetForm = () => {
  const messageSchema = yup.object({
    email: yup.string().email().required('Please enter Email'),
  })

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(messageSchema),
  })
  return (
    <>
      <form onSubmit={handleSubmit(() => {})} action="#">
        <div className="form">
          <div className="text-center">
            <div className="forgot-icon">
              <Image src={Img} alt="" />
            </div>
            <div className="space20" />
            <h2>Forgot Your Password?</h2>
            <p>If you forgot your password, please enter your email below and we will send you a recovery link.</p>
          </div>
          <div className="space16" />
          <div className="single-input">
            <label>Email Address</label>
            <TextFormInput control={control} name="email" placeholder="Enter your email" className="input-box" style={{ paddingTop: '17px' }} />
          </div>
          <div className="space30" />
          <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
            Send Recovery Link <span />
          </button>
          <div className="checkbox-container text-center">
            <p>
              Remember your password <Link href="/auth/login">Login</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  )
}

export default ForgetForm
