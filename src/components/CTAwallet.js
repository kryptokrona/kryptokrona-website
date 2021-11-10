import { Button } from "@chakra-ui/button";
import { Text, Heading, Container, Stack } from "@chakra-ui/layout";
import * as React from "react";
import { Img } from "@chakra-ui/image";
import Hugin from "../images/hugin.png";
import { Link as GatsbyLink } from "gatsby";
import { useColorModeValue } from "@chakra-ui/color-mode";

const CTAwallet = () => {
  return (
    <Container maxW="7xl" mt="10rem" px={{ base: 5, xl: 0, sm: 10 }}>
      <Stack
        direction={{
          xl: "row",
          lg: "row",
          md: "column",
          sm: "column",
          xs: "column",
        }}
      >
        <Stack align="start" spacing={{base: '5', lg: '10'}} width={{ base: "100%", lg: "50%" }}>
          <Heading fontSize="4xl">Wallet</Heading>
          <Text fontSize={{ base: "md", lg: "lg", xl: "xl" }} pr={{base: '0', lg:'10'}}>
            You store your Kryptokrona using a special program, a so-called
            wallet. If you have a PC or a mac the best option is our desktop wallet. The wallet stores your private key so you can easily send and
            receive Kryptokrona. If you don’t have access to a computer you can create a paper
            wallet.
          </Text>
          <Stack width={{base: '100%', lg:'50%'}} display={{base: 'flex', lg: 'none'}}>
            <Img maxW="100%" align="start" src={Hugin} />
          </Stack>
          <Stack alignSelf="start" direction="row" pt="5">
            <GatsbyLink to="/hugin">
              <Button
                bg={useColorModeValue("black", "white")}
                color={useColorModeValue("white", "black")}
                size="lg"
                _hover={{
                  bg: "gray.500",
                }}
              >
                Download
              </Button>
            </GatsbyLink>
            <GatsbyLink to="/download">
              <Button colorScheme="black" variant="outline" size="lg">
                Learn more
              </Button>
            </GatsbyLink>
          </Stack>
        </Stack>
        <Stack
          width={{ base: "50%", lg: "50%" }}
          display={{ base: "none", lg: "flex" }}
        >
          <Img maxW="100%" align="start" src={Hugin} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default CTAwallet;
