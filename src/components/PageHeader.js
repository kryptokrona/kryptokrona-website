import * as React from 'react'
import { Container } from 'react-bootstrap'

const PageHeader = ({pageTitle, pageText}) => {
    return(
        <Container className='py-5 bg-dark'>
            <div>
            <h1>{pageTitle}</h1>
            <p>{pageText}</p>  
            </div>
        </Container>
    )
}

export default PageHeader