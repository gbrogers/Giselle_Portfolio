import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import SingleProject from "../SingleProject/SingleProject";
import { getImage } from "gatsby-plugin-image";

export default SingleProject = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                Image01
                title
                projecttech
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="projectPageContainer">
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <SingleProject
              description={node.frontmatter.description}
              title={node.frontmatter.title}
              tech={node.frontmatter.projecttech}
              image={getImage(node.frontmatter.Image01)}
            />
          );
        })}
      </div>
    )}
  />
);
