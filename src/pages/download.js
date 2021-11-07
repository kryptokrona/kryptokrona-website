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
import { AiFillApple, AiFillWindows } from 'react-icons/ai'
import { IoLogoGooglePlaystor, IoterminalSharp } from 'react-icons/io'
import { FaAppStoreIos } from 'react-icons/fa'


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
        <Heading fontSize="6xl">
          <Link href="">Downloads</Link>
        </Heading>
        <Heading fontSize="3xl">
          <Link href="">Wallets 💳</Link>
        </Heading>
        <Wrap>
            
        </Wrap>
      </Container>
      <JoinCommunity />
    </Layout>
  );
}
