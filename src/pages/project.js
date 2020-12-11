import React from "react"
import { graphql } from "gatsby"

export default function Project({ data }) {
  return (
    <div>
      <h1>First Project</h1>

      <p>{data.markdownRemark.frontmatter.date}</p>
      <p>{data.markdownRemark.frontmatter.title}</p>
      <p>{data.markdownRemark.frontmatter.author}</p>
    </div>
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
