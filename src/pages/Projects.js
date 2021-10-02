import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link, graphql } from "gatsby";
// import ProjectOne from '../components/ProjectOne/ProjectOne'

export default function Projects({ data }) {
  const projects = data.allMarkdownRemark.edges;
  return (
    <Layout title="Giselle's Projects">
      <Seo title="Projects" />

      {projects.map(project => {
        console.log(project.node.frontmatter);
        return true;
      })}
    </Layout>
  );
}

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
