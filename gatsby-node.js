
    const fetch = require(`node-fetch`)

    exports.sourceNodes = async ({
        actions: { createNode },
        createContentDigest,
    }) => {

        const result = await fetch(`https://blocksum.org/api/getinfo`)
        const resultData = await result.json()

        createNode({

            hashrate: resultData.hashrate,
            height: resultData.height,
            nodes: resultData.grey_peerlist_size,
            transactions: resultData.tx_count,
            id: `blockchain-data`,
            parent: null,
            children: [],
            internal: {
                type: `Blocksum`,
                contentDigest: createContentDigest(resultData),
            },
        })
    }