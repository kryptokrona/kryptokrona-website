import { Link, Text } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby';
import { useColorModeValue } from '@chakra-ui/color-mode';

const AlertBanner = () => {
    return (
        <Box height='36px' borderRadius='2'>
            <Text align='center' color={useColorModeValue('black','white')}>
            New wallet update! 🎉 <Link color={useColorModeValue('blue', 'lightblue')} href='https://github.com'>Download here!</Link>
            </Text>
        </Box>
    )
}

export default AlertBanner