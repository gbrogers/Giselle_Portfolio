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
              Feeling like your uterus complicates everything? My Body My Health
              has your back by assisting you in tracking your menstruation and
              contraceptive use, as well as generating verified health resources
              so you can focus on continuing to advocate for your health and
              wellbeing.
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
            <p>
              Left over alcohol from a failed cocktail attempt? Heard of a
              cocktail that you'd love to make, but don't have the recipe? Have
              a cool glass you'd love to make a cocktail in? Feeling gutsy and
              wanting to try something new? Try Drinkz!
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
            <h3>Quizzies!</h3>
            <p>
              Always the worst person on your trivia team? Fear not! - Practice
              up with Quizzies!
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
