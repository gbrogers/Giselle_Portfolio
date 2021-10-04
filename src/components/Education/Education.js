import * as styles from "./Education.module.scss";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Education() {
  return (
    <section className={styles.educationContentContainer}>
      <h2 className={styles.educationHeader}>Education</h2>
      <div className={styles.educationContainer}>
        <section id="devm">
          <StaticImage
            className={styles.educationLogo}
            src="../../images/devmountain.png"
            alt="devmountain logo"
          ></StaticImage>
          <h3>Devmountain</h3>
          <h4>
            <em>Graduated September 2021</em>
          </h4>
          <p>Accelerated Software Engineering Program</p>
        </section>
        <section>
          <StaticImage
            className={styles.educationLogo}
            src="../../images/uwm.png"
            alt="Badgers logo"
          ></StaticImage>
          <h3>University of Wisconsin - Madison</h3>
          <h4>
            <em>Graduated May 2018</em>
          </h4>
          <p>
            Bachelors of Science in Biology<br></br> Gender & Women's Studies
            Certificate <br></br>Biology Core Curriculum Certificate - Honors
          </p>
        </section>
      </div>
    </section>
  );
}
