import * as React from 'react'
import { Box, Container, Heading, Stack, Text} from '@chakra-ui/layout'
import { Link as GatsbyLink } from 'gatsby'
import { Button } from '@chakra-ui/button'
import { Img } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/color-mode'
import AlertBanner from './AlertBanner'
import xkrart from '../images/xkrart.svg'
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';
import {graphql} from 'gatsby';

const Hero = () => {
    const { t } = useTranslation();
    return (
    <Container maxW='7xl' overflow='hidden'>
        <AlertBanner/>
            <Img
            className='rgb'
            maxW='7xl'
            src={xkrart}
            objectFit='fill'
            objectPosition='50% 50%'
            ></Img>
        <Stack pt='10' px={{base: 5, xl: 0, sm: 10,}} mt='5'>
                <Heading align="start" fontSize={{base: '4xl', sm: '5xl', lg: '6xl', xl: '7xl'}} py='5'><Trans>A Nordic cryptocurrency for the future</Trans></Heading>
                <Text align="start" fontSize={{base: 'md', lg: 'lg', xl: 'xl'}}><Trans>On 2 April 2019, Kryptokrona was launched to secure and simplify our future economic system. Sending and receiving money should not be expensive or slow. We work with open source code that allows you to be involved and improve the money of the future.</Trans></Text>
            <Stack alignSelf="start" direction="row" pt='5'>
                <GatsbyLink to='/info'><Button
                bg={useColorModeValue('black', 'white')} 
                color={useColorModeValue('white', 'black')}
                size="lg"
                _hover={{
                    bg:'gray.500'
                }}
                ><Trans>Learn more</Trans></Button></GatsbyLink>
                <GatsbyLink to='/download'><Button colorScheme="black" variant="outline" size="lg"><Trans>Download</Trans></Button></GatsbyLink>
            </Stack>
        <Stack>
            
        </Stack>
        </Stack>
    </Container>
    )
}

export default Hero

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;