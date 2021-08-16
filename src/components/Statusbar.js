import * as React from 'react'
import { Row } from 'react-bootstrap'

//Not finished...

const Statusbar = () => {
    return(
        <Row className='row bg-dark'>
            <div className='class="col-sm text-start d-none d-md-block'><i class="bi-record-fill p-2 text-warning blinkMe"></i><span class="text">Status</span></div>
            <div classNam='col-sm text-start d-none d-lg-flex' ><h6>Block Height</h6><span id="height"></span></div>
        </Row>

    )
}

export default Statusbar