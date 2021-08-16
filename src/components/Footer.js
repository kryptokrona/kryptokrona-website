import { Button } from 'react-bootstrap'
import * as React from 'react' 
import xkrsymbol from '../images/xkrsymbol.png'

//Add social with links etc

const Footer = () => {
    return(
        <footer>
            <img src={xkrsymbol} height='24' className='footersymbol' alt=''/>
            <div>
            <a href='https://github.com/kryptokrona/kryptokrona-website.git'><Button variant='outline-light'><i></i>Edit Page</Button></a>
            <p className='copyright'>©Kryptokrona 2021</p> 
            </div>
        </footer>
    )
}

export default Footer