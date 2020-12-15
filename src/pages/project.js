import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
export default function Project({ data }) {
  
  return (
      <Layout>
    <div>
      <h1> Project-md</h1>

      <p>{data.markdownRemark.frontmatter.date}</p>
      <p>{data.markdownRemark.frontmatter.title}</p>
      <p>{data.markdownRemark.frontmatter.author}</p>
    </div>
  </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectQuery {
    markdownRemark(fileAbsolutePath: { regex: "/firstProject.md/" }) {
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
