import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Img from 'gatsby-image';

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `portfolio`]}
    />
    <h1>Projects</h1>
    <div className="project-list">
      {data.allProjectsJson.edges.map(project => (
          
        <div key={project.node.id} >
            {console.log(project)}
          <div>
          {/* <Img fluid={project.node.thumbnailImage.childImageSharp.fluid} /> */}

          </div>
          <div >
            <h2>{project.node.title}</h2>
            <div >
              {project.node.description}
            </div>
            <a href={project.node.url}>
            </a>
          </div>
          
        </div>
      ))}
    </div>
  </Layout>
);



export default ProjectsPage;


export const projectsQuery = graphql`
{
  allProjectsJson {
    edges {
      node {
        id
        description
        date
        title
        url
        thumbnailImage
      }
    }
  }
}
`