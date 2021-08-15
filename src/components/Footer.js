import { Button } from 'react-bootstrap'
import { Link } from 'gatsby'
import * as React from 'react' 

const Footer = () => {
    return(
        <footer>
            <Link to='https://github.com/'><Button><i></i>Edit Page</Button></Link>
            <p>©Kryptokrona 2021</p>
        </footer>
    )
}

export default Footer