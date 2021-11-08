import * as React from "react";
import JoinCommunity from "../components/CTACommunity";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { Wrap, WrapItem, VStack, Heading, Text, Container } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";


const TradingPage = () => {
  return (
    <Layout>
      <Container mb="5rem" maxW="7xl" mt="3rem" px={{ base: 5, xl: 0, sm: 10 }}>
        <Heading fontSize="6xl">Trading</Heading>
        <Wrap mt="10" justify="start">

          <WrapItem
            minH="150px"
            width={{
              base: "100%",
              xl: "25.6rem",
              lg: "49%",
              md: "48%",
              sm: "100%",
            }}
            padding="7"
            borderRadius="10"
            border="2px solid"
            borderColor={useColorModeValue("black", "white")}
          >
            <Link to='#'>
              <VStack spacing="3" align="start">
                <Heading color={useColorModeValue("black", "white")}>
                  FreiExchange
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  BTX | XKR
                </Text>
              </VStack>
            </Link>
          </WrapItem>

          <WrapItem
            minH="150px"
            width={{
              base: "100%",
              xl: "25.6rem",
              lg: "49%",
              md: "48%",
              sm: "100%",
            }}
            padding="7"
            borderRadius="10"
            border="2px solid"
            borderColor={useColorModeValue("black", "white")}
          >
            <Link to='#'>
              <VStack spacing="3" align="start">
                <Heading color={useColorModeValue("black", "white")}>
                  Exbitron
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  BTC | USDT | XMR
                </Text>
              </VStack>
            </Link>
          </WrapItem>

        </Wrap>
      </Container>
      <JoinCommunity />
    </Layout>
  );
};

export default TradingPage;
