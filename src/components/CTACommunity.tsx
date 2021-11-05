import { Button } from '@chakra-ui/button'
import { Box, Center, Container, Stack, Text, Wrap, WrapItem, Link, Heading } from '@chakra-ui/layout'
import { Img } from '@chakra-ui/image'
import { useColorModeValue } from '@chakra-ui/color-mode'
import * as React from 'react'

const CTACommunity = () => {
    return(
        <Container maxW="7xl">
        <Stack marginTop="5" spacing='5'>
                <Heading align="start" fontSize="6xl">Join our community</Heading>
                <Text align="start" fontSize="md">This project is open source and maintained by the Community. You can for example make changes to this site, suggest awesome new features, or help us squash bugs. Not a developer? No worries, there's tons of things to do!</Text>
                <Stack alignSelf="start" direction="row">
                <Stack alignSelf="start" direction="row" pt='5'>
                <Button bg={useColorModeValue('black', 'white')} color={useColorModeValue('white', 'black')} size="lg" _hover={{ bg:'gray.500'}}>Join Hugin</Button>
                <Button colorScheme="black" variant="outline" size="lg">Join Discord</Button>
            </Stack>
            </Stack>
            <Stack paddingTop="10">
            <Text fontSize="xl" align="start">Contributors</Text>
            <Wrap justify="start">
                <WrapItem>
                    <Center>
                        <Link href="https://github.com/f-r00t"><Img borderRadius="100" boxSize="64px" src="https://avatars.githubusercontent.com/u/3246908?v=4"/></Link>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center>
                        <Link href="https://github.com/swepool"><Img borderRadius="100" boxSize="64px" src="https://avatars1.githubusercontent.com/u/36674091?v=4"/></Link>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center>
                        <Link href="https://github.com/ux33-331"><Img borderRadius="100" boxSize="64px" src="https://avatars.githubusercontent.com/u/61588635?v=4"/></Link>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center>
                        <Link href="https://github.com/TechyGuy17"><Img borderRadius="100" boxSize="64px" src="https://avatars.githubusercontent.com/u/65623992?v=4"/></Link>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center>
                        <Link href="https://github.com/Coffeboi"><Img borderRadius="100" boxSize="64px" src="https://avatars.githubusercontent.com/u/84473858?v=4"/></Link>
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center>
                        <Link href="https://github.com/ayatollah"><Img borderRadius="100" boxSize="64px" src="https://avatars.githubusercontent.com/u/3543254?v=4"/></Link>
                    </Center>
                </WrapItem>
            </Wrap>
            </Stack>
        </Stack>
        </Container>
    )
}

export default CTACommunity