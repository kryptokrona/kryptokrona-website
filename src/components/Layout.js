import * as React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Menubar from './Navbar'

// Style
import '../theme/index.scss'

const Layout = (props) => {
    return(
        <div>
            <Menubar/>
            <Container>
            {props.children}
            <Footer />
            </Container>
        </div>
    )
}

export default Layout