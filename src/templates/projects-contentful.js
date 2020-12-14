// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/layout.js"
// import SEO from "../components/seo"
// import PropsTypes from "prop-types"
// class ProjectsTemplate extends React.Component {
//   render() {
//     const project = this.props.data.contentfulProjects
//     const siteTitle = this.props.data.site.siteMetadata.title

//     return (
//       <Layout>
//         <SEO title={project.title} description="desc." />
//         <h1>{project.title}</h1>
//         <h1>{siteTitle}</h1>
//       </Layout>
//     )
//   }
// }
// ProjectsTemplate.PropsTypes = {
//   data: PropsTypes.object.isRequired,
// }
// export default ProjectsTemplate

// export const query = graphql`
//   query contentfulProjectsBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulProjects(slug: { eq: $slug }) {
//       title
//       slug
//     }
//   }
// `
