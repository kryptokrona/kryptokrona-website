import * as React from "react";
import CTACommunity from "../components/CTACommunity";
import Layout from "../components/Layout";
import CTAhugin from "../components/CTAhugin";
import StatusBar from "../components/StatusBar";

const HuginPage = () => {
  return (
    <Layout>
      <CTAhugin />
      <StatusBar />
      <CTACommunity />
    </Layout>
  );
};

export default HuginPage;
