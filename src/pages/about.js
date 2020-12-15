import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';

export default function About({ data }) {
  return (
<Layout>
    <div>
      <h1>Posts</h1>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <p>{data.markdownRemark.frontmatter.title}</p>
      <p>{data.markdownRemark.frontmatter.author}</p>
    </div>
</Layout>
  )
}

export const pageQuery = graphql`
  query AboutQuery {
    markdownRemark(fileAbsolutePath: { regex: "/firstAbout.md/" }) {
      frontmatter {
        date(fromNow: true)
        title
        author
      }
      excerpt
      id
    }
  }
`
