import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
// import SingleProject from "../SingleProject/SingleProject";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
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
                sourceCode
                demoVideo
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.projectPageContainer}>
        {/* <h1 className={styles.projectHeader}>My Projects</h1> */}
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <div className={styles.singleProjectPageContainer}>
              <div className={styles.headerPicture}>
                {node.frontmatter.title == "Quizzies" && (
                  <StaticImage
                    className={styles.projectPhoto}
                    src="../../images/Quizzies_5right.2.PNG"
                    alt="mbmh home image"
                    placeholder="blurred"
                    width={400}
                    height={250}
                  ></StaticImage>
                )}
                {node.frontmatter.title == "Drinkz!" && (
                  <StaticImage
                    className={styles.projectPhoto}
                    src="../../images/Drinkz_home.PNG"
                    alt="mbmh home image"
                    placeholder="blurred"
                    width={400}
                  ></StaticImage>
                )}
                {node.frontmatter.title == "My Body My Health" && (
                  <StaticImage
                    className={styles.projectPhoto}
                    src="../../images/mbmh_home.PNG"
                    alt="mbmh home image"
                    placeholder="blurred"
                    width={400}
                  ></StaticImage>
                )}
              </div>
              <div className={styles.singleProjectLabel}>
                <h2 className={styles.projectTitle}>
                  {node.frontmatter.title}
                </h2>
                <p>{node.frontmatter.description}</p>
                <p>{node.frontmatter.projecttech}</p>
                <div className={styles.projectLinks}>
                  <a href={node.frontmatter.sourceCode} target="_blank">
                    Source Code
                  </a>
                  <a href={node.frontmatter.demoVideo} target="_blank">
                    Demo
                  </a>
                </div>
              </div>
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
