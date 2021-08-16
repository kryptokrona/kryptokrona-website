import { Button } from 'react-bootstrap'
import * as React from 'react' 
import { Link } from 'gatsby'

//This button uses Link, that renders the next internal page beforehand

const InButton = ({linkTo, buttonText}) => {
    return(
        <Link to={linkTo}><Button variant='outline-light' className='bottom'>{buttonText}</Button></Link>
    )
}

export default InButton