import React from "react"
import { graphql } from "gatsby"
import { Container, Heading, Text } from "@chakra-ui/layout"
import Layout from "../components/Layout"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
      <Layout>
        <Container maxW='7xl'>
        <Heading>{frontmatter.title}</Heading>
        <Text> - {frontmatter.date}</Text>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </Container>
      </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        category
        author
      }
    }
  }
`