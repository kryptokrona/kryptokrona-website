import {
  Container,
  Heading,
  Wrap,
  WrapItem,
  VStack,
  Text,
} from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import * as React from "react";
import JoinCommunity from "../components/CTACommunity";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { Link } from "gatsby";

export default function DownloadPage() {
  useEffect(() => {
    //Fetch wallet downloadn links from github
    fetch(
      "https://api.github.com/repos/kryptokrona/hugin-messenger/releases/latest"
    )
      .then((res) => res.json())
      .then((data) => {});
  });

  return (
    <Layout>
      <Container maxW="7xl" px={{ base: 5, xl: 0, sm: 10 }}>
        <Heading fontSize="6xl">
          <Link href="">Downloads</Link>
        </Heading>
        <Heading fontSize="3xl">
          <Link href="">Wallets</Link>
        </Heading>
        <Wrap justify="start">
          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  Mac
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>

          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  Windows
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>

          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  Anddroid
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>

          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  iOS
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>

          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  Webwallet
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>

          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  Terminal
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>
        </Wrap>

        <Heading fontSize="3xl">
          <Link href="">Hugin</Link>
        </Heading>

        <Wrap justify="start">
          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  Mac
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>

          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  Windows
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>

          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  Anddroid
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>

          <Link href="">
            <WrapItem
              width={{
                base: "100%",
                xl: "25.6rem",
                lg: "49%",
                md: "49%",
                sm: "100%",
              }}
              padding="8"
              borderRadius="10"
              border="2px solid"
              borderColor={useColorModeValue("black", "white")}
            >
              <VStack align="start" spacing="3">
                <Heading color={useColorModeValue("black", "white")}>
                  iOS
                </Heading>
                <Text color={useColorModeValue("black", "white")}>
                  Got a macitosh?
                </Text>
              </VStack>
            </WrapItem>
          </Link>
        </Wrap>
      </Container>
      <JoinCommunity />
    </Layout>
  );
}
