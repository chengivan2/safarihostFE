import Payment1 from '@/assets/img/others/payment7-1.png'
import Payment2 from '@/assets/img/others/payment7-2.png'
import Payment3 from '@/assets/img/others/payment7-3.png'
import Image from 'next/image'
import Link from 'next/link'

const CopyrightLight = () => {
  return (
    <>
      <div className="container">
        <div className="row vl-copyright7 _dv-top align-items-center">
          <div className="col-lg-6">
            <p>Copyright 2025 SafariHost Theme By FleexStudio | All Right Reserved</p>
          </div>
          <div className="col-lg-6">
            <div className="payment-options">
              <Link href="#" style={{ marginLeft: '5px' }}>
                <Image src={Payment1} alt="" />
              </Link>
              <Link href="#" style={{ marginLeft: '5px' }}>
                <Image src={Payment2} alt="" />
              </Link>
              <Link href="#" style={{ marginLeft: '5px' }}>
                <Image src={Payment3} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CopyrightLight
