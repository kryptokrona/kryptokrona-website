import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import * as React from 'react' 
import xkrsymbol from '../images/xkrsymbol.png'

const Footer = () => {
    return(
        <footer>
            <img src={xkrsymbol} height='32' className='footersymbol'/>
            <div>
            <Link to='https://github.com/kryptokrona/kryptokrona-website.git'><Button variant='outline-light'><i></i>Edit Page</Button></Link>
            <p className='copyright'>©Kryptokrona 2021</p> 
            </div>
        </footer>
    )
}

export default Footer