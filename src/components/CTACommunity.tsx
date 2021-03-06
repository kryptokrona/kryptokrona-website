import { Button } from "@chakra-ui/button";
import {
  Box,
  Center,
  Container,
  Stack,
  Text,
  Wrap,
  WrapItem,
  Heading,
  Link,
} from "@chakra-ui/layout";
import { Img } from "@chakra-ui/image";
import { useColorModeValue } from "@chakra-ui/color-mode";
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";

const CTACommunity = () => {
  return (
    <Container maxW="7xl" px={{ base: 5, xl: 0, sm: 10 }} mt='10rem'>
      <Stack spacing="5">
        <Heading
          align="start"
          fontSize={{ base: "4xl", xl: "5xl" }}
        >
          Join our community
        </Heading>
        <Text align="start" fontSize={{ base: "md", lg: "lg", xl: "xl" }}>
          This project is open source and maintained by the Community. You can
          for example make changes to this site, suggest awesome new features,
          or help us squash bugs. Not a developer? No worries, there's tons of
          things to do!
        </Text>
        <Stack alignSelf="start" direction="row">
          <Stack alignSelf="start" direction="row" pt="5">
            <GatsbyLink to="/hugin">
              <Link to="/hugin">
                <Button
                  bg={useColorModeValue("black", "white")}
                  color={useColorModeValue("white", "black")}
                  size="lg"
                  _hover={{ bg: "gray.500" }}
                >
                  Join Hugin
                </Button>
              </Link>
            </GatsbyLink>
            <Link to="https://chat.kryptokrona.se">
              <Button colorScheme="black" variant="outline" size="lg">
                Join Discord
              </Button>
            </Link>
          </Stack>
        </Stack>
        <Stack paddingTop="10">
          <Text fontSize="xl" align="start">
            Contributors
          </Text>
          <Wrap justify="start">
            <WrapItem>
              <Center>
                <Link to="https://github.com/f-r00t">
                  <Img
                    borderRadius="100"
                    boxSize="64px"
                    src="https://avatars.githubusercontent.com/u/3246908?v=4"
                  />
                </Link>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Link to="https://github.com/swepool">
                  <Img
                    borderRadius="100"
                    boxSize="64px"
                    src="https://avatars1.githubusercontent.com/u/36674091?v=4"
                  />
                </Link>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Link to="https://github.com/ux33-331">
                  <Img
                    borderRadius="100"
                    boxSize="64px"
                    src="https://avatars.githubusercontent.com/u/61588635?v=4"
                  />
                </Link>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Link to="https://github.com/TechyGuy17">
                  <Img
                    borderRadius="100"
                    boxSize="64px"
                    src="https://avatars.githubusercontent.com/u/65623992?v=4"
                  />
                </Link>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Link to="https://github.com/Coffeboi">
                  <Img
                    borderRadius="100"
                    boxSize="64px"
                    src="https://avatars.githubusercontent.com/u/84473858?v=4"
                  />
                </Link>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Link to="https://github.com/ayatollah">
                  <Img
                    borderRadius="100"
                    boxSize="64px"
                    src="https://avatars.githubusercontent.com/u/3543254?v=4"
                  />
                </Link>
              </Center>
            </WrapItem>
          </Wrap>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CTACommunity;
