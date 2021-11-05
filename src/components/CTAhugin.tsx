import { Button } from '@chakra-ui/button'
import { Text, VStack, HStack, Heading, Stack } from '@chakra-ui/layout'
import * as React from 'react'
import { Img } from '@chakra-ui/image'
import { VscDebugStart } from 'react-icons/vsc'
import { Container } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Link as GatsbyLink } from 'gatsby'

const CTAhugin = () => {
    return(
        <Container maxW='7xl' marginTop='20'>
            <Stack>
                <Heading align="start" fontSize="6xl">Hugin Messenger</Heading>
                <Img maxW='3xl' align="start" src="https://user-images.githubusercontent.com/3246908/118410333-273fc000-b68f-11eb-8883-77f42f4c1558.png"/>
                        <Text align="start" fontSize="lg">Hugin is a messaging service where messages are stored on the kryptokrona blockchain. Your messages are secured with industry leading encryption so that only you and your chat partner have the possibility to read them. The purpose is not to gather any personal information about the users, unlike most apps and social media.</Text>
                        <Stack alignSelf="start" direction="row" pt='5'>
                <GatsbyLink to='/hugin'>
                <Button 
                bg={useColorModeValue('black', 'white')} 
                color={useColorModeValue('white', 'black')}
                size="lg"
                _hover={{
                    bg:'gray.500'
                }}
                >Learn more
                </Button>
                </GatsbyLink>
                <GatsbyLink to='/download'><Button colorScheme="black" variant="outline" size="lg">Download</Button></GatsbyLink>
            </Stack>
                        <HStack alignSelf="start" ><VscDebugStart/><Text as="em">Psst! It's free to use!</Text></HStack>
                </Stack>
        </Container>
    )
}

export default CTAhugin