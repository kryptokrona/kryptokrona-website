import * as React from 'react'
import fetch from 'node-fetch'
import { useState, useEffect } from "react"
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
        borderColor={useColorModeValue('black', 'white')}
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
    
    useEffect(() => {
      fetch('https://swenode.org/api/getinfo')
      .then(res => res.json())
      .then(async(data) => {
          const Hashrate = data.hashrate;
          const Height = data.height;
          const Nodes = data.grey_peerlist_size;
          document.getElementById('hashrate').innerHTML = (Hashrate / 1000000).toFixed(2) + ' MH/s'
          document.getElementById('height').innerHTML = Height;
          document.getElementById('nodes').innerHTML = Nodes;

      })
      fetch('https://api.coingecko.com/api/v3/coins/kryptokrona')
      .then(response => response.json())
      .then(data => {
        const Price = data.market_data.current_price.btc
        document.getElementById('price').innerHTML = (Price * 100000000) + ' Sats'
      })
    })

    // get data from Coingecko


    return (
      <Box maxW="7xl" mx={'auto'} my='5rem' pb={10} px={{base: 5, xl: 0, sm: 10,}}>
        <Heading
          textAlign={'start'}
          fontSize={{base: '4xl', xl: '5xl'}}
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