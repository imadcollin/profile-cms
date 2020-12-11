import React from "react"
import { graphql } from "gatsby"

export default function About({ data }) {
  return (
    <div>
      <h1>First posts</h1>

      <p>{data.markdownRemark.frontmatter.date}</p>
      <p>{data.markdownRemark.frontmatter.title}</p>
      <p>{data.markdownRemark.frontmatter.author}</p>
    </div>
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
