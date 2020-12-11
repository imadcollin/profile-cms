import React from "react"
import { graphql } from "gatsby"

export default function Blog({ data }) {
  const { posts } = data.firstBlog

  return (
    <div>
      <h1>First posts</h1>

      {posts.map(post => (
        <article key={post.id}>
          <small>
            {post.frontmatter.author}, {post.frontmatter.date}
          </small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    firstBlog: allMarkdownRemark {
      posts: nodes {
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
