import * as React from 'react'
import { Container } from 'react-bootstrap'


//Add contributors to site, 

const Contributors = () => {
    return(
        <Container className='mt-5'>
            <div>
                <h1>Contributors</h1>
                <p>Kryptokrona is an open-sourced project. </p>
            </div>
            <div className='d-flex gap-5' width='1360px'>
                <div className='text-center'>
                    <a href='https://github.com/swepool'>
                        <img src='https://avatars1.githubusercontent.com/u/36674091?v=4' width='60px' alt=''/></a><br/>
                </div>
                <div className='text-center'>
                    <a href='https://github.com/swepool'>
                        <img src='https://avatars1.githubusercontent.com/u/36674091?v=4' width='60px' alt=''/></a><br/>
                </div>
            </div>
        </Container>
    )
}

export default Contributors