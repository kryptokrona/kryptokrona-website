import * as React from 'react'
import { Card, Container } from 'react-bootstrap'

const HuginIntro = (props) => {
    return (
        <Container className='mb-5'>
            <Card>
                <div className='hugin-introduction-section'>
                    <div className='hugin-title'>Vad är Hugin?</div>
                    <div className='meet-hugin'>Hugin är en meddelandetjänst där meddelanden sparas på kryptokronans blockkedja.
                        Dina meddelanden säkras med branschledande kryptering, så att bara du och din chattpartner har möjlighet att läsa dem.
                        Syftet är att inte samla någon personlig information om användarna, till skillnad från de flesta appar och sociala medier.</div>
                </div>
            </Card>
        </Container>

    )
}

export default HuginIntro