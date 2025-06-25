'use client'
import reset from '@/assets/img/others/reset.png'
import PasswordFormInput from '@/components/form/PasswordFormInput'
import { yupResolver } from '@hookform/resolvers/yup'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const ResetForm = () => {
  const resetPasswordSchema = yup.object().shape({
    password: yup.string().min(8, 'Password must of minimum 8 characters').required('Please enter Password'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(resetPasswordSchema),
  })

  return (
    <>
      <form onSubmit={handleSubmit(() => {})} action="#">
        <div className="form">
          <div className="text-center">
            <div className="forgot-icon">
              <Image src={reset} alt="" />
            </div>
            <div className="space20" />
            <h2>Reset Password</h2>
            <p>If you want to reset your password, please enter your new password below.</p>
          </div>
          <div className="space16" />
          <div className="single-input">
            <label>New Password</label>
            <PasswordFormInput
              control={control}
              name="password"
              className="input-box"
              placeholder="Enter your password"
              floating
              style={{ paddingTop: '10px' }}
            />
          </div>
          <div className="single-input">
            <label>Confirm Password</label>
            <PasswordFormInput
              control={control}
              name="confirmPassword"
              className="input-box"
              placeholder="Confirm new password"
              floating
              style={{ paddingTop: '10px' }}
            />
          </div>
          <div className="space30" />
          <button type="submit" className="theme-btn1 btn_theme_active1 mt_40 wow fadeInDown" data-wow-duration="0.8s">
            Change Password <span />
          </button>
          <div className="checkbox-container text-center">
            <p>If you didn’t request a password recovery link, please ignore this.</p>
          </div>
        </div>
      </form>
    </>
  )
}

export default ResetForm
