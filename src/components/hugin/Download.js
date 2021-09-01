import * as React from 'react'
import { Card, Container } from 'react-bootstrap'
import xkrPc from '../../images/xkr-mining.png'
import { FaWindows } from "@react-icons/all-files/fa/FaWindows";
import { FaLinux } from "@react-icons/all-files/fa/FaLinux";
import { FaApple } from "@react-icons/all-files/fa/FaApple";

const HuginDownload = (props) => {
    return (
        <Container className='mb-5'>
            <Card>

                <div className='hugin-installation-section'>
                    <div className='hugin-box'>
                        <div className='hugin-title'>Installation</div>
                        Packa upp och öppna den körbara filen som låg i .zip-filen som du kan ladda ner här:

                        <div className='hugin-download-buttons'>

                            {/* windows */}
                            <a href='https://github.com/kryptokrona/hugin-messenger/releases/download/v0.3.3/HuginMessenger-Setup-0.3.3.exe' aria-label="github" target="_blank" rel="noreferrer">
                                <h1><FaWindows></FaWindows></h1></a>

                            {/* mac */}
                            <a href='https://github.com/kryptokrona/hugin-messenger/releases/download/v0.3.3/HuginMessenger-0.3.3.dmg' aria-label="github" target="_blank" rel="noreferrer">
                                <h1><FaApple></FaApple></h1></a>

                            {/* Linux */}
                            <a href='' aria-label="github" target="_blank" rel="noreferrer">
                                <h1><FaLinux></FaLinux></h1></a>

                        </div>

                        I Windows så installerar du Hugin Messenger med exe filen.
                        <br></br><br></br>
                        I OSX behöver du flytta hugin-messenger.app till Applikationer-mappen och
                        sen godkänna applikationen i säkerhetsinställningar för att kunna köra den.
                    </div>
                    <div className='hugin-box-img'>
                        <img className='xkrPc' src={xkrPc} alt='' /></div>
                </div>


            </Card>
        </Container>

    )
}

export default HuginDownload