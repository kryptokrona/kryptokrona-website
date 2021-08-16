import * as React from 'react'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'

const Community = () => {
    return(
        <section className='bg-light py-5'>
            <Container className='mb-5'>
                <Row className=''>
                    <Col className='col-lg mt-4'>
                        <Card>
                            <div className='card-body'>
                            <h5 className='card-title'><span class="p-2">&#128589;</span>Hugin</h5>
                            <p className='card-text'>Not controlled by any company, foundation or individual. The coin distribution is designed to be as fair as possible.</p>
                            <a href='https://google.se'><Button>Join</Button></a>
                            </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h5><span class="p-2">&#128173;</span>Discord</h5>
                            <p>Our source code is open for everyone to view and our community is open for anyone interested. Come join us!</p>
                        </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h5><span class="p-2">&#128274;</span>Telegram</h5>
                            <p>Neither bank, authorities or friends can see your assets or your transactions. Protect your privacy and rights.</p>
                        </div>
                        </Card>
                    </Col>
                </Row>
                <Row className=''>
                    <Col className='col-lg mt-4'>
                        <Card>
                            <div className='card-body'>
                            <h5 className='card-title'><span class="p-2">&#128589;</span>Twitter</h5>
                            <p className='card-text'>Not controlled by any company, foundation or individual. The coin distribution is designed to be as fair as possible.</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h5><span class="p-2">&#128173;</span>jaja</h5>
                            <p>Our source code is open for everyone to view and our community is open for anyone interested. Come join us!</p>
                        </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h5><span class="p-2">&#128274;</span>jsjs</h5>
                            <p>Neither bank, authorities or friends can see your assets or your transactions. Protect your privacy and rights.</p>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Community