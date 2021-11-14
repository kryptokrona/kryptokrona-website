import { Button } from "@chakra-ui/button";
import { Text, Heading, Stack } from "@chakra-ui/layout";
import * as React from "react";
import { Img } from "@chakra-ui/image";
import { Container } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import Hugin from "../images/hugin.png";
import { Link as GatsbyLink } from "gatsby";
const CTAhugin = () => {
  return (
    <Container maxW="7xl" mt="10rem" px={{ base: 5, xl: 0, sm: 10 }}>
      <Stack direction={{ xl: 'row', lg: "row", md: "column", sm: 'column', xs: 'column' }}>
        <Stack align='start' spacing={{base: '3', lg: '5'}}  width={{base: '100%', lg: '50%'}}>
          <Heading align="start" fontSize={{ base: "4xl", xl: "5xl" }}>
            Hugin Messenger
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg", xl: "xl" }} pr={{base: '0', lg:'10'}}>
            Hugin is a messaging service where messages are stored on the
            kryptokrona blockchain. Your messages are secured with industry
            leading encryption so that only you and your chat partner have the
            possibility to read them. The purpose is not to gather any personal
            information about the users, unlike most apps and social media.
          </Text>
          <Stack width={{base: '100%', lg:'50%'}} display={{base: 'flex', lg: 'none'}}>
          <Img maxW="100%" align="start" src={Hugin} />
        </Stack>
          <Stack direction="row" pt="5">
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
        <Stack width={{base: '50%', lg:'50%'}} display={{base:'none', lg:'flex'}}>
          <Img maxW="100%" align="start" src={Hugin} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default CTAhugin;
