'use client'
import Transfer from '@/assets/img/icons/transfer.svg'
import CustomNiceSelect from '@/components/CustomNiceSelect'
import Image from 'next/image'
import Link from 'next/link'
import {Col, Container, Row} from 'react-bootstrap'

const DomainArea = () => {

    return (
        <>
            <div className="domain6">
                <Container>
                    <Row className="bg-area">
                        <Col lg={10} className="m-auto">
                            <div className="heading6 text-center">
                                <h2 className="text-anime-style-3">Find Your Domain Name</h2>
                                <p className="mt-16">Web Hostings, Domain Name and Hosting Venter Solution</p>
                            </div>
                            <div className="domain6-form">
                                <form action="#">
                                    <div className="hero6-form-area">
                                        <input type="search" placeholder="Find Your Domain Name"/>
                                        <div className="button">
                                            <button type="submit" className="theme-btn16">
                                                Search
                                            </button>
                                            <button type="submit" className="theme-btn16 transfer ml-10">
                                                Transfer <Image src={Transfer} alt=""/>
                                            </button>
                                        </div>
                                        <div className="select-form">
                                            <CustomNiceSelect>
                                                <option>.Com</option>
                                                <option>.In</option>
                                                <option>.Net</option>
                                                <option>.Tw</option>
                                            </CustomNiceSelect>
                                        </div>
                                    </div>
                                    <div className="hero6-select-list">
                                        <ul className="controls">
                                            <li className="text">Popular Domain:</li>
                                            <li className="select1">.Com $6.99</li>
                                            <li className="select1">.Net $6.99</li>
                                            <li className="select1">.Org $6.99</li>
                                            <li className="select1">.Info $6.99</li>
                                        </ul>
                                        <Link href="/pricing" className="pricing-btn">
                                            View All Pricing
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default DomainArea
