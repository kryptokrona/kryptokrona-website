import * as React from 'react'
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import AlertBanner from './AlertBanner'

const Hero = () => {
    return (
    <Container maxW='7xl' p='0' overflow='hidden'>
        <AlertBanner/>
            <Img
            className='rgb'
            maxW='7xl'
            src='https://kryptolink.se/static/xkrart-62cd1762a4c10098ca3b6b8dcca2c7f8.png'
            objectFit='fill'
            objectPosition='50% 50%'
            ></Img>
        <Stack pt='10' p={{xl: 0, sm: 5}} mt='10'>
                <Heading align="start" fontSize="6xl">A Nordic cryptocurrency for the future</Heading>
                <Text align="start" fontSize="md">On 2 April 2019, Kryptokrona was launched to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the money of the future.</Text>
            <Stack alignSelf="start" direction="row" pt='5'>
                <Button 
                bg={useColorModeValue('black', 'white')} 
                color={useColorModeValue('white', 'black')}
                size="lg"
                _hover={{
                    bg:'gray.500'
                }}
                >Get Started</Button>
                <Button colorScheme="black" variant="outline" size="lg">Download</Button>
            </Stack>
        <Stack>
            
        </Stack>
        </Stack>
    </Container>
    )
}

export default Hero