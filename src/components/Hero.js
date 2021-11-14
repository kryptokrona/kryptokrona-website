import * as React from "react";
import { Container, Heading, Stack, Text, Box } from "@chakra-ui/layout";
import { Link as GatsbyLink } from "gatsby";
import { Button } from "@chakra-ui/button";
import { Img } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import AlertBanner from "./AlertBanner";
import xkrartdark from "../images/xkr.svg";
import xkrartlight from "../images/xkrwhite.svg";

const Hero = () => {
  return (
    <Container maxW="7xl" overflow="hidden" mt="15px" px="0">
      <Box>
        <Img
          className='rgb'
          src={useColorModeValue(xkrartlight, xkrartdark)}
          borderRadius={{ xl: "10px", lg: 0 }}
          width="100%"
          minH="380px"
          maxH="500px"
          objectFit="cover"
          objectPosition="center"
          opacity='1'
          transition= 'opacity 500ms ease 0s'
        ></Img>
        <AlertBanner />
      </Box>
      <Stack px={{ base: 5, xl: 0, sm: 10 }}>
        <Heading
          align="start"
          fontSize={{ base: "5xl", sm: "4xl", md: '5xl',lg: "6xl", xl: "7xl" }}
          py="3"
          mt='5'
        >
          A Nordic cryptocurrency for the future
        </Heading>
        <Text align="start" fontSize={{ base: "lg", lg: "lg", xl: "xl" }}>
          On 2 April 2019, Kryptokrona was launched to secure and simplify our
          future economic system. Sending and receiving money should not be
          expensive or slow. We work with open source code that allows you to be
          involved and improve the money of the future.
        </Text>
        <Stack alignSelf="start" direction="row" pt="5">
          <GatsbyLink to="/info">
            <Button
              bg={useColorModeValue("black", "white")}
              color={useColorModeValue("white", "black")}
              size="lg"
              _hover={{
                bg: "gray.500",
              }}
            >
              Learn more
            </Button>
          </GatsbyLink>
          <GatsbyLink to="/download">
            <Button colorScheme="black" variant="outline" size="lg">
              Download
            </Button>
          </GatsbyLink>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Container>
  );
};

export default Hero;
