import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import { Container } from "react-bootstrap"

export default function Markdown({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <PageHeader pageTitle={frontmatter.title} pageText={frontmatter.date}></PageHeader>
      <section className='bg-light py-5'>
      <Container>
        <div dangerouslySetInnerHTML={{ __html: html }}/>
        </Container>
      </section>
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
      }
    }
  }
`
