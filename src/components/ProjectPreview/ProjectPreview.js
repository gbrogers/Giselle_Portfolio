import * as styles from "./ProjectPreview.module.scss";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

export default function ProjectPreview() {
  return (
    <section className={styles.projectsContentContainer}>
      <h2 className={styles.projectHeader}>Projects</h2>
      <div c>
        <div className={styles.mbmh}>
          <StaticImage
            onClick={() => navigate("/Projects")}
            className={styles.projectPlaceholder}
            src="../../images/mbmh_home.PNG"
            alt="My Body My Health Image"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <div className={styles.projectLabel}>
            <h3>My Body My Health</h3>
            <p>
              Assists users in tracking menstruation and contraceptive use, as
              well as generates verified health resources.
            </p>
            <Link to="/Projects">
              <button
                className={`${styles.projectSeeMoreBtn} ${styles.styledBtn}`}
              >
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.drinkz}>
          <StaticImage
            onClick={() => navigate("/Projects")}
            className={styles.projectPlaceholder}
            src="../../images/Drinkz_home.PNG"
            alt="Drinkz! Image"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <div className={`${styles.projectLabel} ${styles.secondProject}`}>
            <h3>Drinkz!</h3>
            <p>Generates drink recipes based on user inputted data.</p>
            <Link to="/Projects">
              <button
                className={`${styles.projectSeeMoreBtn} ${styles.styledBtn}`}
              >
                See More
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.quizzies}>
          <StaticImage
            onClick={() => navigate("/Projects")}
            className={styles.projectPlaceholder}
            src="../../images/Quizzies_4right.PNG"
            alt="Quizzies Image"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <div className={styles.projectLabel}>
            <h3>Quizzies</h3>
            <p>
              Generates quiz questions based on user inputted difficulty,
              category, and length.
            </p>
            <Link to="/Projects">
              <button
                className={`${styles.projectSeeMoreBtn} ${styles.styledBtn}`}
              >
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
