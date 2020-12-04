import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
const AllProjects = ({ data }) => {
  const projects = data.allContentfulProjects.edges
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout>
      <p>AllProjects</p>
      {projects.map(({ node }) => {
        return <Project key={node.id} node={node}></Project>
      })}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const Project = ({ node }) => {
  return (
    <div>
      <h1>{node.title} </h1>
      <h5>
        {node.title}- {node.keywords}
      </h5>
      <h6>{node.slug}</h6>
    </div>
  )
}
export default AllProjects
export const query = graphql`
  query pageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulProjects {
      edges {
        node {
          id
          title
          keywords
          slug
          status
        }
      }
    }
  }
`
