import { Button } from 'react-bootstrap'
import * as React from 'react' 

//This button uses html href to point at urls

const OutButton = ({linkTo, buttonText}) => {
    return(
        <a href={linkTo}><Button variant='outline-light' className='bottom'>{buttonText}</Button></a>
    )
}

export default OutButton