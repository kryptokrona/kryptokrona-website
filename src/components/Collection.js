import React from "react"
import { graphql } from "gatsby"
import PostCard from './PostCard';
import { Container, Heading, Wrap } from '@chakra-ui/layout';


const Collection = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // Filter here
    .map(edge => <PostCard key={edge.node.id} post={edge.node} />)

  return(
  
          <Container mb='5rem' maxW='7xl' mt='5' px={{base: 5, xl: 0, sm: 10,}}>
          <Heading fontSize='6xl'>Lates writing</Heading>
          <Wrap mt='10' justify='start'>
          {Posts}
          </Wrap>
          </Container>
  ) 
}

export default Collection

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
            color
            author
          }
        }
      }
    }
  }
`