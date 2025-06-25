'use client'
import { faq } from '@/assets/data/other'
import sec from '@/assets/img/images/faq-page-sec-image.png'
import shape from '@/assets/img/shapes/tes1-shape.png'
import Image from 'next/image'
import { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader, AccordionItem, Col, Container, Row } from 'react-bootstrap'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <>
      <div className="service-page-faq sp">
        <Container>
          <Row>
            <Col lg={6} className="m-auto text-center">
              <div className="heading1">
                <span className="sub-title">Frequently asked Question</span>
                <h2>(VPS) Based FAQ Question</h2>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center mt-30">
            <Col lg={6}>
              <div className="faq-content mt-30">
                <Accordion className="accordion1" id="accordionExample">
                  {faq.map((faq, idx) => (
                    <AccordionItem className={activeIndex === idx ? 'active' : ''} onClick={() => toggleFaq(idx)} eventKey={`${idx}`} key={idx}>
                      <AccordionHeader as={'h2'} id="headingOne">
                        {faq.question}
                      </AccordionHeader>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${activeIndex === idx ? 'show' : ''}`}
                        aria-labelledby={`heading${idx}`}
                        data-bs-parent="#accordionExample">
                        <AccordionBody>
                          Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services. It includes
                          SEO, social media marketing, content marketing, email marketing, an paid.
                        </AccordionBody>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Col>
            <Col lg={6}>
              <div className="faq-page-image">
                <div className="image">
                  <Image src={sec} alt="" />
                </div>
                <div className="shape">
                  <Image src={shape} alt="" height={359} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Faq
