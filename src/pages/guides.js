import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { Container, Heading, Wrap } from "@chakra-ui/layout";
import CTACommunity from "../components/CTACommunity";

const GuidesPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // Filter here
    .map((edge) => <PostCard key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <Container mb="5rem" maxW="7xl" mt="5" px={{ base: 5, xl: 0, sm: 10 }}>
        <Heading fontSize="6xl">Guides</Heading>
        <Wrap mt="10" justify="start">
          {Posts}
        </Wrap>
      </Container>
      <CTACommunity />
    </Layout>
  );
};

export default GuidesPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { in: "Guide" } } }
    ) {
      edges {
        node {
          frontmatter {
            author
            category
            color
            date
            slug
            title
          }
        }
      }
    }
  }
`;
