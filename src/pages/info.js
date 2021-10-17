import * as React from 'react';
import PageHeader from '../components/PageHeader';
import Layout from '../components/Layout';
import Seo from "../components/seo"
import { Container, Row, Col, Card } from 'react-bootstrap';

const InfoPage = () => {
    return(
        <Layout>
            <Seo></Seo>
            <PageHeader pageTitle='Information' pageText='So you want to know more?' emoji='📚' />
            <section className='bg-light py-5'>
            <Container className='pt-5'>
                <h1>Money for the future.</h1>
                <p>Kryptokrona exists to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow.
                We work with open source code that allows you to be involved and improve the money of the future.</p>
                <p>Kryptokrona is a decentralized blockchain based on CryptoNote, which forms the basis for Monero, among others.</p>
                <p>CryptoNote is a so-called “application layer” protocol further developed by TurtleCoin that enables things like: private transactions, messages and arbitrary data storage, completely decentralized.</p>
                <p>On 2 April 2019, the platform was launched in part as a response to the Riksbank’s digital e-krona for the people’s right to create money and to safeguard the private economy without either commercial or state control.</p>
            </Container>
            <Container className='mb-5'>
                <Row>
                    <Col className='col-lg mt-4'>
                        <Card>
                            <div className='card-body'>
                            <h3 className='card-title'>💰 Max supply</h3>
                            <p className='card-text'>1,000,000,000 XKR</p>
                            </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h3>⏰ Blocktime</h3>
                            <p>90 Seconds</p>
                        </div>
                        </Card>
                    </Col>
                    <Col className='col-lg mt-4'>
                        <Card>
                        <div className='card-body'>
                            <h3>👾 Algorithm</h3>
                            <p>CryptoNight-Pico</p>
                        </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        </Layout>
    )
}

export default InfoPage