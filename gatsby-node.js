// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/templates/projects-contentful.js`)

//   return graphql(
//     `
//       {
//         allContentfulProjects {
//           edges {
//             node {
//               slug
//               title
//             }
//           }
//         }
//       }
//     `,
//     { limit: 1000 }
//   ).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }

//     const projects = result.data.allContentfulProjects
//     projects.edges.forEach(edge => {
//       createPage({
//         path: `${edge.node.slug}`,
//         component: blogPostTemplate,
//         context: {
//           slug: edge.node.slug,
//         },
//       })
//     })
//   })
// }
