import Transfer from '@/assets/img/icons/transfer.svg'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import { FaArrowRight } from 'react-icons/fa6'
import { domin } from '../data'

const DomainName = () => {
  return (
    <>
      <div className="domain10 sp sec-bg6">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading10">
                <h2>Find Your Domain Name</h2>
                <p className="mt-16">Web Hostings, Domain Name and Hosting Venter Solution</p>
              </div>
            </div>
          </div>
          <div className="row mt-30">
            <div className="col-lg-9 m-auto">
              <div className="pricing-page-domain-form">
                <form action="#">
                  <div className="hero10-form-area">
                    <input type="search" placeholder="Find Your Domain Name" />
                    <div className="button">
                      <button type="submit" className="theme-btn33">
                        Search{' '}
                        <span className="arrow1">
                          <FaArrowRight className="fa-solid" />
                        </span>
                        <span className="arrow2">
                          <FaArrowRight className="fa-solid" />
                        </span>
                      </button>
                      <button type="submit" className="theme-btn33 transfer ml-10">
                        Transfer <Image src={Transfer} alt="" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Row className="mt-30">
            {domin.map((item, idx) => (
              <Col lg={3} md={6} key={idx}>
                <div className="domain10-box">
                  <h3 className={item.name}>.{item.name}</h3>
                  <h5>USD $9.99/ yr</h5>
                  <s>USD $14.99/ yr</s>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  )
}

export default DomainName
