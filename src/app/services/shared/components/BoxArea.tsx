import Image from 'next/image'
import {Col, Container, Row} from 'react-bootstrap'
import {box} from '../data'

const BoxArea = () => {
    return (
        <>
            <div className="service-detials2-boxs">
                <Container>
                    <Row>
                        {box.map((item, idx) => (
                            <Col lg={3} md={6} key={idx}>
                                <div className="service-details2-single-box">
                                    <div className="icon">
                                        <Image src={item.image} alt=""/>
                                    </div>
                                    <div className="content">
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default BoxArea
