import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
// import SingleProject from "../SingleProject/SingleProject";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./ProjectList.module.scss";

export const ProjectList = () => (
  <StaticQuery
    query={graphql`
      query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              rawMarkdownBody
              frontmatter {
                description
                projecttech
                title
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
            <div className={styles.singleProjectPageContainer}>
              {console.log(node.rawMarkDownBody)}
              <GatsbyImage image={getImage(node.rawMarkDownBody)}></GatsbyImage>
              <h4>{node.frontmatter.title}</h4>
              <p>{node.frontmatter.description}</p>
              <p>{node.frontmatter.projecttech}</p>
            </div>
          );
        })}
      </div>
    )}
  />
);

// <SingleProject
//   description={node.frontmatter.description}
//   title={node.frontmatter.title}
//   tech={node.frontmatter.projecttech}
//   image={getImage(node.frontmatter.Image01)}
// />
