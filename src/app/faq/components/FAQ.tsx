'use client'
import { faq } from '@/assets/data/other'
import Sec from '@/assets/img/images/faq-page-sec-image.png'
import Shape from '@/assets/img/shapes/tes1-shape.png'
import Image from 'next/image'
import { useState } from 'react'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from 'react-bootstrap'

export type FaqType = {
  id: string
  title: string
}

export const tabContent: FaqType[] = [
  {
    id: '1',
    title: 'Web Hosting',
  },
  {
    id: '2',
    title: 'technical support',
  },
  {
    id: '3',
    title: 'website migration',
  },
  {
    id: '4',
    title: 'hosting features',
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <>
      <div className="faq-page-sec sp">
        <Container>
          <TabContainer defaultActiveKey="Web Hosting">
            <Row>
              <Col lg={9} className="m-auto text-center">
                <div className="heading1 mb-30">
                  <h2>Frequently Asked Question</h2>
                </div>
                <div className="faq-tab-buttons">
                  <Nav as={'ul'} variant="pills" className="nav-pills mb-3" id="pills-tab" role="tablist">
                    {(tabContent || []).map((tab, idx) => {
                      return (
                        <NavItem key={idx} as={'li'} role="presentation">
                          <NavLink as={'button'} id={tab.id} eventKey={tab.title} data-bs-toggle="pill" type="button" role="tab" aria-selected="true">
                            {tab.title}
                          </NavLink>
                        </NavItem>
                      )
                    })}
                  </Nav>
                </div>
              </Col>
            </Row>
            <TabContent id="pills-tabContent">
              {(tabContent || []).map((tab, idx) => {
                return (
                  <TabPane key={idx} className="fade" eventKey={tab.title} id={tab.id}>
                    <Row className="align-items-center mt-30">
                      <Col lg={6}>
                        <div className="faq-page-image">
                          <div className="image">
                            <Image src={Sec} alt="" />
                          </div>
                          <div className="shape">
                            <Image src={Shape} alt="" height={331} />
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="faq-content mt-30">
                          <Accordion className="accordion1" id="accordionExample">
                            {faq.map((item, idx) => (
                              <AccordionItem
                                eventKey={`${idx}`}
                                key={idx}
                                className={activeIndex === idx ? 'active' : ''}
                                onClick={() => toggleFaq(idx)}>
                                <AccordionHeader as={'h2'} className="accordion-header" id="headingOne">
                                  {item.question}
                                </AccordionHeader>
                                <div
                                  id="collapseOne"
                                  className={`accordion-collapse collapse ${activeIndex === idx ? 'show' : ''}`}
                                  aria-labelledby={`heading${idx}`}
                                  data-bs-parent="#accordionExample">
                                  <AccordionBody>
                                    Digital marketing refers to the use of online platforms and strategies to promote brands, products, or services.
                                    It includes SEO, social media marketing, content marketing, email marketing, an paid.
                                  </AccordionBody>
                                </div>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                )
              })}
            </TabContent>
          </TabContainer>
        </Container>
      </div>
    </>
  )
}

export default FAQ
