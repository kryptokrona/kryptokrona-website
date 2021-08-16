import * as React from 'react'
import { Alert, Container } from 'react-bootstrap'
import { useState } from 'react'
import render from 'dom-serializer'
import '../theme/theme.scss'

//Styled under //Alert in theme.scss


function AlertBanner() {
    const [show, setShow] = useState(true);
  
    if (show) {
      return (
          <Container>
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <h6><span class="p-2">&#128172;</span>New wallet update! <a className='alertLink' href='https:/github.com'>Download</a></h6>
            </Alert>
          </Container>

      );
    }
    return AlertBanner;
  }
  
  render(<AlertBanner/>);

export default AlertBanner