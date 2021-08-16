import * as React from 'react'
import { Container } from 'react-bootstrap'

const PageHeader = ({pageTitle, pageText, emoji}) => {
    return(
        <Container className='py-5 bg-dark'>
            <div>
            <h1>{pageTitle}<span class="p-2"> {emoji}</span></h1>
            <p>{pageText}</p>  
            </div>
        </Container>
    )
}

export default PageHeader