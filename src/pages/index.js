import * as React from 'react';
import Layout from '../components/Layout';
import { Button, Container } from 'react-bootstrap';
import { Img } from 'gatsby-image';
import { Link } from 'gatsby';
import art from '../images/xkrart.png'

const Homepage = () => {
    return(
        <Layout>
            <div className='rgb artdiv'>
                <img className='art' src={art}/>  
            </div>
            <div className='landingText'>
                <h1>A Nordic cryptocurrency for the future</h1>
                <p>On 2 April 2019, the project was launched to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the money of the future.</p>
                    <Link to='/get-started'><Button>Get Started</Button></Link>
                    <Link to='/download'><Button>Download</Button></Link>
            </div>
        </Layout>
    )
}

export default Homepage