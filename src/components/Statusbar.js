import * as React from 'react'
import { Container } from 'react-bootstrap'
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
            <div class="row status bg-dark">
                <div class="col-sm text-start">
                    <p className="status-info">Status</p>
                    <i className="bi-record-fill p-2 text-warning blinkMe"></i></div>
                <div className="col-sm text-start">
                    <p className="status-info">Height</p><span id="height"></span></div>
                <div className="col-sm text-start">
                    <p className="status-info">Hashrate</p><span id="hashrate"></span></div>
                <div className="col-sm text-start">
                    <p className="status-info">Nodes</p><span id="nodes"></span></div>
                <div className="col-sm text-start">
                    <p className="status-info">Transactions</p><span id="tx"></span></div>
                <div className="col-sm text-start">
                    <p className="status-info">Price</p><span id="price"></span></div>
            </div>
        </Container>

    )
}

export default Statusbar