import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PostCard from '../components/PostCard';
import { Container, Heading, Wrap } from '@chakra-ui/layout';


const CollectionPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // Filter here
    .map(edge => <PostCard key={edge.node.id} post={edge.node} />)

  return(
        <Layout>
          <Container maxW='7xl'>
          <Heading fontSize='6xl'>Docs</Heading>
          <Wrap justify='start'>
          {Posts}
          </Wrap>
          </Container>
        </Layout>
  ) 
}

export default CollectionPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
          }
        }
      }
    }
  }
`