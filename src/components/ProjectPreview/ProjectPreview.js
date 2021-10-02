import * as styles from "./ProjectPreview.module.scss";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function ProjectPreview() {
  return (
    <section className={styles.projectsContentContainer}>
      <h2 className={styles.projectHeader}>Projects</h2>
      <div className={styles.projectsList}>
        <div className={styles.mbmh}>
          <StaticImage
            className={styles.projectPlaceholder}
            src="../../images/mbmh_home.PNG"
            alt="My Body My Health Image"
          ></StaticImage>
          <div className={styles.projectLabel}>
            <h3>My Body My Health</h3>
            <p>These are words describing this particular project</p>
            <button
              className={`${styles.projectSeeMoreBtn} ${styles.styledBtn}`}
            >
              See More
            </button>
          </div>
        </div>
        <div className={styles.drinkz}>
          <StaticImage
            className={styles.projectPlaceholder}
            src="../../images/Drinkz_home.PNG"
            alt="Drinkz! Image"
          ></StaticImage>
          <div className={`${styles.projectLabel} ${styles.secondProject}`}>
            <h3>Drinkz!</h3>
            <p>These are words describing this particular project</p>
            <button
              className={`${styles.projectSeeMoreBtn} ${styles.styledBtn}`}
            >
              See More
            </button>
          </div>
        </div>
        <div className={styles.quizzies}>
          <StaticImage
            className={styles.projectPlaceholder}
            src="../../images/Quizzies_4right.PNG"
            alt="Quizzies Image"
          ></StaticImage>
          <div className={styles.projectLabel}>
            <h3>Quizzies</h3>
            <p>These are words describing this particular project</p>
            <button
              className={`${styles.projectSeeMoreBtn} ${styles.styledBtn}`}
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
