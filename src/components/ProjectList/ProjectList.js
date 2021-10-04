import * as React from "react";
import * as styles from "./ProjectList.module.scss";
import { StaticQuery, graphql } from "gatsby";
import SingleProject from "../SingleProject/SingleProject";

export default () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                description
                projecttech
                title
                image
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
              image={node.frontmatter.image}
            />
          );
        })}
      </div>
    )}
  />
);
