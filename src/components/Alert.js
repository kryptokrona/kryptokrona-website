import * as React from 'react'
import { Alert, Container } from 'react-bootstrap'
import { useState } from 'react'
import render from 'dom-serializer'
import '../theme/theme.scss'

//Styled under //Alert in theme.scss
// Use useState(true) to show the alert and false to remove it.

function AlertBanner() {
  const [show] = useState(true);

  if (show) {
    return (
          <Alert variant="danger">
              <h6><span className="p-2">&#128172;</span>New wallet update! <a className='alertLink' href='https:/github.com'>Download</a></h6>
          </Alert>

    );
  }
  return AlertBanner;
}

render(<Container><AlertBanner/></Container>);

export default AlertBanner