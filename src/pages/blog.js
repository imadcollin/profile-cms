import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';

export default function Blog({ data }) {
  const { blogs } = data.firstBlog

  return (
    <Layout>

    <div>
      <h1>Blogs</h1>

      {blogs.map(blog => (
        <article key={blog.id}>
          <small>
            {blog.frontmatter.author}, {blog.frontmatter.date}
          </small>
          <p>{blog.excerpt}</p>
        </article>
      ))}
    </div>
      </Layout>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    firstBlog: allMarkdownRemark {
      blogs: nodes {
        frontmatter {
          date(fromNow: true)
          title
          author
        }
        excerpt
        id
      }
    }
  }
`
