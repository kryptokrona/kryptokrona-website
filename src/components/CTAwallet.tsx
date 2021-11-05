import { Button } from '@chakra-ui/button'
import { Text, VStack, HStack, Heading } from '@chakra-ui/layout'
import * as React from 'react'
import { Img } from '@chakra-ui/image'
import { VscDebugStart } from 'react-icons/vsc'
const CTAwallet = () => {
    return(
            <HStack py="20" verticalAlign="top">    
            <VStack align="start" spacing="8">
                <Heading align="center" fontSize="4xl">Wallet</Heading>
                <Text align="center" fontSize="lg">You store your Kryptokrona using a special program, a so-called wallet.</Text>
                <Text align="center" fontSize="lg">If you have a PC or a mac the best option is our desktop wallet.</Text>
                <Button colorScheme="green">Download</Button>
                <HStack><VscDebugStart/><Text as="em">The wallet stores your private key so you can easily send and receive Kryptokrona.</Text></HStack>
                <HStack><VscDebugStart/><Text as="em">If you don’t have access to a computer you can create a paper wallet.</Text></HStack>
            </VStack>
            <VStack direction="row">
                <Img maxW="lg" src="https://user-images.githubusercontent.com/3246908/125691331-a40a038f-c12e-4c37-9e96-de5b371bb103.png"/>
            </VStack>
            </HStack>
    )
}

export default CTAwallet