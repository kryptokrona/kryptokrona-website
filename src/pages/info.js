import * as React from 'react'
import JoinCommunity from '../components/CTACommunity'
import Layout from '../components/Layout'
import { Text, Heading, Container} from '@chakra-ui/layout'
import StatusBar from '../components/StatusBar'

const InfoPage = () => {
    return (
        <Layout>
            <Container maxW='7xl' mb='10' p={{base: 5, xl: 0, sm: 10,}}>
            <Heading mb='10' fontSize={{base: '4xl', sm: '5xl', lg: '6xl', xl: '7xl'}} align="start" marginTop="10">Money for the future.</Heading>
            <Text fontSize={{base: 'md', lg: 'lg', xl: 'xl'}} align="start">Kryptokrona exists to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the money of the future.
<br/><br/>Kryptokrona is a decentralized blockchain based on CryptoNote, which forms the basis for Monero, among others.
<br/><br/>CryptoNote is a so-called “application layer” protocol further developed by TurtleCoin that enables things like: private transactions, messages and arbitrary data storage, completely decentralized.
<br/><br/>On 2 April 2019, the platform was launched in part as a response to the Riksbank’s digital e-krona for the people’s right to create money and to safeguard the private economy without either commercial or state control.</Text>
            </Container>
            <StatusBar/>
            <JoinCommunity></JoinCommunity>
        </Layout>
    )
}

export default InfoPage