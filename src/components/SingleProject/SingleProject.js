import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from "./SingleProject.module.scss";
// import { StaticImage } from "gatsby-plugin-image";

export default function SingleProject({ title, description, tech, image }) {
  return (
    <div className={styles.singleProjectPageContainer}>
      <StaticImage src={image}></StaticImage>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{tech}</p>
    </div>
  );
}
