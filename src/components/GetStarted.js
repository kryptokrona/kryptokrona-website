import * as React from 'react'
import { Row, Col, Card, Container } from 'react-bootstrap'
import InButton from './InButton'

const GetStarted = () => {
    return(
        <section className='bg-light py-5'>
            <Container className='mb-5'>
                <Row>
                    <Col className='col-lg mt-4'>
                        <Card>
                            <div className='card-body'>
                            <h5 className='card-title'><span className="p-2">ℹ️</span>Information</h5>
                            <p className='card-text'>Not controlled by any company, foundation or individual. The coin distribution is designed to be as fair as possible.</p>
                            <InButton linkTo='/info' buttonText='Teach me!'/>
                            </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h5><span className="p-2">📡</span>Download</h5>
                            <p>Our source code is open for everyone to view and our community is open for anyone interested. Come join us!</p>
                            <InButton linkTo='/download' buttonText='Give me!'/>
                        </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h5><span className="p-2">⛏️</span>Mining</h5>
                            <p>Neither bank, authorities or friends can see your assets or your transactions. Protect your privacy and rights.</p>
                            <InButton linkTo='/mining' buttonText='Lets go!'/>
                        </div>
                        </Card>
                    </Col>
                </Row>
                <Row className=''>
                    <Col className='col-lg mt-4'>
                        <Card>
                            <div className='card-body'>
                            <h5 className='card-title'><span className="p-2">💸</span>Trading</h5>
                            <p className='card-text'>Not controlled by any company, foundation or individual. The coin distribution is designed to be as fair as possible.</p>
                            <InButton linkTo='/Trading' buttonText='Take my fiat!'/>
                            </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h5><span className="p-2">📖</span>Guides & docs</h5>
                            <p>Our source code is open for everyone to view and our community is open for anyone interested. Come join us!</p>
                            <InButton linkTo='/posts' buttonText='Dive deeper'/>
                        </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h5><span className="p-2">🧑‍🤝‍🧑</span>Community</h5>
                            <p>Neither bank, authorities or friends can see your assets or your transactions. Protect your privacy and rights.</p>
                            <InButton linkTo='/community' buttonText='Friends?'/>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default GetStarted