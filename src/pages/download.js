import { Container, Heading, Wrap } from "@chakra-ui/layout";
import * as React from "react";
import JoinCommunity from "../components/CTACommunity";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { Link } from "@chakra-ui/layout";

export default function DownloadPage() {
  useEffect((file) => {
    let latest_mac;
    let latest_win;
    let latest_lin;
    fetch(
      "https://api.github.com/repos/kryptokrona/hugin-messenger/releases/latest"
    )
      .then((response) => response.json())
      .then((data) => {
        let files = data.assets;
        for (file in files) {
          console.log(files[file].browser_download_url);
          switch (files[file].name.slice(files[file].name.length - 7)) {
            case "mac.zip":
              latest_mac = files[file].browser_download_url;
              break;
            default:
              break;
          }
          document.getElementById('latest_mac').href=latest_mac;
        }
      });
  });

  return (
    <Layout>
      <Container maxW="7xl" px={{ base: 5, xl: 0, sm: 10 }}>
        <Link id='latest_mac' href=''><Heading fontSize="6xl">Downloads</Heading></Link>
        <Heading fontSize="3xl">Wallets 💳</Heading>
        <Heading fontSize="3xl">Hugin Messenger</Heading>
        <Link></Link>
        <Wrap></Wrap>
      </Container>
      <JoinCommunity />
    </Layout>
  );
}
