import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/PostLink"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import PageHeader from "../components/PageHeader"
import { Container } from "react-bootstrap"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // Filter here
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return(
        <Layout>
            <Seo></Seo>
            <PageHeader pageTitle='Posts' pageText='Heres everything you need to learn' emoji='🚀'/>
                <section className='bg-light py-5'>
                    <Container className='mb-5'>
                    <div>{Posts}</div>
                    </Container>
                </section>
        </Layout>
  ) 
}

export default IndexPage

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
          }
        }
      }
    }
  }
`