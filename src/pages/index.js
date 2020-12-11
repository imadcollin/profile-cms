import React from "react"
import Layout from "../components/layout"
const IndexPage = ({ data }) => {
  const { title, description } = data.site.siteMetadata

  return (
    <Layout>
      <h1>Index</h1>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>

        <img alt="Cute dog" src={data.image.publicURL} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MetadataQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    image: file(base: { eq: "1.png" }) {
      publicURL
    }
  }
`
