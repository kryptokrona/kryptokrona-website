import * as React from 'react'
import { Card, Container } from 'react-bootstrap'
import fetch from 'node-fetch'

const Statusbar = () => {

    // get data from Blocksum api
    fetch(`https://blocksum.org/api/getinfo`)
        .then(response => response.json()) // parse JSON from request
        .then(data => {
            //add data to id
            document.getElementById('hashrate').innerHTML = (data.hashrate / 1000000).toFixed(2) + ' MH/s'
            document.getElementById('height').innerHTML = data.height
            document.getElementById('nodes').innerHTML = data.grey_peerlist_size
            document.getElementById('tx').innerHTML = data.tx_count
        })

    // get data from Coingecko
    fetch('https://api.coingecko.com/api/v3/coins/kryptokrona')
        .then(response => response.json())
        .then(data => {
            document.getElementById('price').innerHTML = (data.market_data.current_price.btc * 100000000) + ' Sats'
        })


    return (
        <Container className='mb-5'>
            <Card>
                <div className='blockchain-banner'>
                    <div className="blockchain-data">
                        <p className="blockchain-data-info">Hashrate:</p>
                        <p className="blockchain-data-output" id="hashrate"></p>
                        <p className="blockchain-data-info">Height:</p>
                        <p className="blockchain-data-output" id="height"></p>
                        <p className="blockchain-data-info">Nodes:</p>
                        <p className="blockchain-data-output" id="nodes"></p>
                        <p className="blockchain-data-info">TX:</p>
                        <p className="blockchain-data-output" id="tx"></p>
                        <p className="blockchain-data-info">Price:</p>
                        <p className="blockchain-data-output" id="price"></p>
                    </div>
                </div>

            </Card>
        </Container>

    )
}

export default Statusbar