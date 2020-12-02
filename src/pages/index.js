import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class IndexPage extends React.Component {
  render() {
    const projects = this.props.data.allContentfulProjects.edges
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <Layout>
        <SEO title={siteTitle} />
        {projects.map(({ node }) => {
          return <Project key={node.id} node={node}></Project>
        })}
      </Layout>
    )
  }
}

const Project = ({ node }) => {
  return (
    <div>
      <h1>{node.title} </h1>
      <h5>
        {node.title}- {node.keywords}
      </h5>
    </div>
  )
}
export default IndexPage

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
