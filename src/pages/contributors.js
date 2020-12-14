// import React from "react"
// import { Link } from "gatsby"
// import { graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const AllContributors = ({ data }) => {
//   const contributors = data.allContentfulContributors.edges
//   return (
//     <Layout>
//       <SEO title="AllContributors" />
//       {contributors.map(({ node }) => {
//         return <h2 key={node.id}>{node.name}</h2>
//       })}
//       <Link to="/">Go back to the homepage</Link>
//     </Layout>
//   )
// }

// export default AllContributors

// export const query = graphql`
//   {
//     allContentfulContributors {
//       edges {
//         node {
//           id
//           name
//         }
//       }
//     }
//   }
// `
