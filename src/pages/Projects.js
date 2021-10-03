import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import SingleProject from "../components/SingleProject/SingleProject";
import { Link, graphql } from "gatsby";
// import * as styles from "../style.scss";
// import ProjectOne from '../components/ProjectOne/ProjectOne'

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.edges;
  return (
    <Layout title="Giselle's Projects">
      <Seo title="Projects" />
      <div className="projectPageContainer">
        {projects.map(project => {
          return (
            <SingleProject
              description={project.node.frontmatter.description}
              title={project.node.frontmatter.title}
              tech={project.node.frontmatter.projecttech}
              image={project.node.frontmatter.image}
            />
          );
        })}
      </div>
    </Layout>
  );
}

// const styles = {
//   projectPageContainer:
//     {backgroundColor='yellow'}
//   }

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            projecttech
            title
          }
        }
      }
    }
  }
`;
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       nodes {
//         excerpt
//         fields {
//           slug
//         }
//         frontmatter {
//           date(formatString: "MMMM DD, YYYY")
//           title
//           description
//         }
//       }
//     }
//   }
// `;
