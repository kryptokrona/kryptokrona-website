import * as React from 'react';
import Menubar from '../components/Navbar';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';

const InfoPage = () => {
    return(
        <div>
                    <Menubar/>
                    <Container>
                    <h1>info</h1>
                    <Footer/>
                    </Container>
        </div>
    )
}

export default InfoPage