import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const BrandIcon = () => {
  return (
    <>
      <Link href="">
        <FaFacebookF className="fa-brands" />
      </Link>
      <Link href="">
        <FaInstagram className="fa-brands" />
      </Link>
      <Link href="">
        <FaLinkedinIn className="fa-brands" />
      </Link>
      <Link href="">
        <FaXTwitter className="fa-brands" />
      </Link>
    </>
  )
}

export default BrandIcon
