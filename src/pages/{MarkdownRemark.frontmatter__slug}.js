import React from "react";
import { graphql } from "gatsby";
import { Container, Heading, Text } from "@chakra-ui/layout";
import Layout from "../components/Layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Container maxW="7xl" px={{ base: 5, xl: 0, sm: 10 }}>
        <Heading fontSize="6xl" mt='3rem'>{frontmatter.title}</Heading>
        <Text> Uploaded : {frontmatter.date}</Text>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        category
        color
        author
      }
    }
  }
`;
