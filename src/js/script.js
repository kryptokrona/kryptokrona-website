

fetch('https://blocksum.org/api/getinfo')
.then(response => response.json())
.then(data => {
    document.getElementById('hashrate').innerHTML = (data.hashrate / 1000000).toFixed(2) + ' MH/s'
    document.getElementById('height').innerHTML = data.height
    document.getElementById('nodes').innerHTML = data.grey_peerlist_size
    document.getElementById('tx').innerHTML = data.tx_count
})

fetch('https://api.coingecko.com/api/v3/coins/kryptokrona')
.then(response => response.json())
.then(data => {
    document.getElementById('price').innerHTML = (data.market_data.current_price.btc * 100000000) + ' Sats'
})

export default fetch