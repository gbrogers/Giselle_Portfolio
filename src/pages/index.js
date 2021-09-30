import * as React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Layout from "../components/layout";
import Seo from "../components/seo";
// import { getSizes } from "gatsby-plugin-image/dist/src/image-utils"

const Index = ({ data, location }) => {
  return (
    <div>
      <Layout location={location} title="Giselle's Portfolio">
        <Seo title="Giselle's Portfolio" />
        <Header />
        <About />
      </Layout>
    </div>
  );
};

export default Index;

// export const pageQuery = graphql`
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
