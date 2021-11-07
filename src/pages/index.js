import * as React from "react";
import CTAhugin from "../components/CTAhugin";
import Features from "../components/Features";
import Hero from "../components/Hero";
import JoinCommunity from "../components/CTACommunity";
import Layout from "../components/Layout";
import StatusBar from "../components/StatusBar";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <CTAhugin />
      <StatusBar />
      <JoinCommunity />
    </Layout>
  );
};
export default IndexPage;
