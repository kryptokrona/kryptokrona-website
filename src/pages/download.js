import {
  Container,
  Heading,
  Wrap,
  WrapItem,
  VStack,
  Text,
} from "@chakra-ui/layout";
import * as React from "react";
import JoinCommunity from "../components/CTACommunity";
import Layout from "../components/Layout";
import { useEffect } from "react";


export default function DownloadPage() {
  useEffect(() => {
    //Fetch wallet downloadn links from github
    fetch("https://api.github.com/repos/kryptokrona/hugin-messenger/releases/latest")
      .then((res) => res.json())
      .then((data) => {});
  });

  return (
    <Layout>
      <Container maxW="7xl" px={{ base: 5, xl: 0, sm: 10 }}>
        <Heading fontSize="6xl">Downloads</Heading>
        <Heading fontSize="3xl">Wallets 💳</Heading>
        <Heading fontSize="3xl">Hugin Messenger</Heading>
        <Wrap>


            
        </Wrap>
      </Container>
      <JoinCommunity />
    </Layout>
  );
}
