import * as React from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import JoinCommunity from "../components/CTACommunity";
import Layout from "../components/Layout";
import StatusBar from "../components/StatusBar";
import CTAhugin from "../components/CTAhugin";
import CTAwallet from "../components/CTAwallet";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <CTAhugin/>
      <StatusBar />
      <CTAwallet/>
      <JoinCommunity />
    </Layout>
  );
};
export default IndexPage;
