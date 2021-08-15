import * as React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Menubar from './Navbar'

//As of now, A Global theme is importet and rendered through this file. 
import '../theme/theme.scss'

const Layout = (props) => {
    return(
        <div>
            <Menubar/>
            <Container className='layout'>
            {props.children}
            <Footer />
            </Container>
        </div>
    )
}

export default Layout