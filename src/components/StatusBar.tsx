import * as React from 'react'
import fetch from 'node-fetch'
import {
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { Heading } from '@chakra-ui/layout';
  import { FaNetworkWired, FaSquare } from 'react-icons/fa';
  import { MdSpeed } from 'react-icons/md';
  import { BiDollar } from 'react-icons/bi'
  
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
    id: string;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon, id } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        border={'2px solid'}
        borderColor={useColorModeValue('gray.900', 'white')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber id={id} fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function StatusBar() {

     fetch(`https://blocksum.org/api/getinfo`)
        .then(response => response.json()) // parse JSON from request
        .then(data => {
            //add data to id
            document.getElementById('hashrate').innerHTML = (data.hashrate / 1000000).toFixed(2) + ' MH/s'
            document.getElementById('height').innerHTML = data.height
            document.getElementById('nodes').innerHTML = data.grey_peerlist_size
        })
    // get data from Coingecko
    fetch('https://api.coingecko.com/api/v3/coins/kryptokrona')
        .then(response => response.json())
        .then(data => {
            document.getElementById('price').innerHTML = (data.market_data.current_price.btc * 100000000) + ' Sats'
        }) 

    return (
      <Box maxW="7xl" mx={'auto'} my='10' pb={10} px={{ base: 2, sm: 12, md: 17 }}>
        <Heading
          textAlign={'start'}
          fontSize={'3xl'}
          py={10}
          fontWeight={'bold'}>
          Quick glance of the network.
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Height'}
            stat={'5,000'}
            icon={<FaSquare size={'3em'} />}
            id={'height'}
          />
          <StatsCard
            title={'Hashrate'}
            stat={'1,000'}
            icon={<MdSpeed size={'3em'} />}
            id={'hashrate'}
          />
          <StatsCard
            title={'Nodes'}
            stat={'7'}
            icon={<FaNetworkWired size={'3em'} />}
            id={'nodes'}
          />
            <StatsCard
            title={'Price'}
            stat={'7'}
            icon={<BiDollar size={'3em'} />}
            id={'price'}
          />
        </SimpleGrid>
      </Box>
    );
  }