import * as React from 'react'
import { Row } from 'react-bootstrap'
import { useState, useEffect } from "react"

//Not finished... how the F do I use Fetch here lol

const Statusbar = () => {

    const [Hashrate, Height, Nodes, Transactions] = useState(0)
    useEffect(() => {
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
    }, [])

    return(
        <div className='blockchain-banner'>
            <div className="blockchain-data">
                Hashrate: <p id="hashrate">{Hashrate}</p>
                Height: <p id="height">{Height}</p>
                Nodes: <p id="nodes">{Nodes}</p>
                TX: <p id="tx">{Transactions}</p>
            </div>
        </div>

    )
}

export default Statusbar