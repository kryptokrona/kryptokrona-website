import * as React from 'react'
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import { BiLockAlt, BiSend, BiSupport } from 'react-icons/bi'
  import { IoMdPeople } from 'react-icons/io'
  import { HiCubeTransparent } from 'react-icons/hi'
  import { BsLightningChargeFill } from 'react-icons/bs'
  import { useColorModeValue } from '@chakra-ui/color-mode';

  export default function Features() {
    return (
    <Container maxW='7xl' my='8rem'>
      <Box>
        <Stack spacing={4} as={Container} maxW={'7xl'} textAlign={'start'}>
          <Heading fontSize={'4xl'}>Why Kryptokrona?</Heading>
          <Text color={useColorModeValue('gray.900', 'White')} fontSize={'xl'} py='5'>
          The advantages with Kryptokrona compared to the alternatives are many.
          </Text>
        </Stack>
  
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} py='5'>
                <HStack align={'top'}>
                <Box color={useColorModeValue('gray.900', 'White')} px={0}>
                  <BiLockAlt size='1.5rem'/>
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Private money</Text>
                  <Text color={useColorModeValue('gray.900', 'White')}>All transactions are private. Users can share view keys to give trusted parties access to to share account information.</Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={useColorModeValue('gray.900', 'White')} px={0}>
                  <IoMdPeople size='1.5rem'/>
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Your currency</Text>
                  <Text color={useColorModeValue('gray.900', 'White')}>You can assist Kryptokrona. Through mining you can create Kryptokrona and store them wherever you want to.</Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={useColorModeValue('gray.900', 'White')} px={0}>
                  <BiSend size='1.5rem'/>
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Peer to peer</Text>
                  <Text color={useColorModeValue('gray.900', 'White')}>The Kryptokrona isn’t dependent on central banks or servers, thus less fragile than todays systems.</Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={useColorModeValue('gray.900', 'White')} px={0}>
                  <HiCubeTransparent size='1.5rem'/>
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Transparency</Text>
                  <Text color={useColorModeValue('gray.900', 'White')}>Our source code is open for everyone to view and our community is open for anyone interested.</Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={useColorModeValue('gray.900', 'White')} px={0}>
                  <BsLightningChargeFill size='1.5rem'/>
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Quick & efficient</Text>
                  <Text color={useColorModeValue('gray.900', 'White')}>Our network processes new transactions every 90 seconds, in comparison to Bitcoins 10 minute delay.</Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={useColorModeValue('gray.900', 'White')} px={0}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Transparency</Text>
                  <Text color={useColorModeValue('gray.900', 'White')}>Our source code is open for everyone to view and our community is open for anyone interested.</Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={useColorModeValue('gray.900', 'White')} px={0}>
                  <Icon as={CheckIcon} />
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Transparency</Text>
                  <Text color={useColorModeValue('gray.900', 'White')}>Our source code is open for everyone to view and our community is open for anyone interested.</Text>
                </VStack>
              </HStack>
              <HStack align={'top'}>
                <Box color={useColorModeValue('gray.900', 'White')} px={0}>
                  <BiSupport size='1.5rem'/>
                </Box>
                <VStack align={'start'}>
                  <Text fontWeight={600}>Technical support</Text>
                  <Text color={useColorModeValue('gray.900', 'White')}>You can get assistance with Kryptokrona, around the clock, every day of the week in our Discord server. Welcome for discussions.</Text>
                </VStack>
              </HStack>
          </SimpleGrid>
      </Box>
      </Container>    
    );
  }