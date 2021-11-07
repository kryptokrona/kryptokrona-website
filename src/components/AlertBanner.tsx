import { Link, Text } from '@chakra-ui/layout'
import * as React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/alert';
import { Button } from '@chakra-ui/button';


//change status to change color- use "info, error, success, warning" 

const AlertBanner = () => {
    return (
        <Alert status="info" borderRadius='10' my='5' mr='10'>
        <AlertIcon />
        <Text>New wallet update 🎉 </Text>
        <Link><Button size='sm' position="absolute" right="8px" top="8px">Download</Button></Link>
        </Alert>
    )
}

export default AlertBanner