import * as styles from "./Skills.module.scss";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Skills() {
  return (
    <section className={styles.skillsContentContainer}>
      <h2 className={styles.skillsHeader}>Skills</h2>
      <div className={styles.listedSkills}>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.javaScript}`}
            src="../../images/js.png"
            alt="js icon"
          ></StaticImage>
          <h4>Javascript</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.react}`}
            src="../../images/react.png"
            alt="react icon"
          ></StaticImage>
          <h4>React</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.node}`}
            src="../../images/nodejs.png"
            alt="nodeJS icon"
          ></StaticImage>
          <h4>NodeJS</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.express}`}
            src="../../images/expressicon.png"
            alt="Express icon"
          ></StaticImage>
          <h4>Express</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.postgres}`}
            src="../../images/postgreSQL.png"
            alt="postgreSQL icon"
          ></StaticImage>
          <h4>PostgreSQL</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.html}`}
            src="../../images/html.png"
            alt="HTML5 icon"
          ></StaticImage>
          <h4>HTML5</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.css}`}
            src="../../images/css.png"
            alt="CSS icon"
          ></StaticImage>
          <h4>CSS</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.scss}`}
            src="../../images/scss.png"
            alt="Sass icon"
          ></StaticImage>
          <h4>Sass</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.gatsby}`}
            src="../../images/gatsby.png"
            alt="gatsby icon"
          ></StaticImage>
          <h4>Gatsby</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.nextjs}`}
            src="../../images/next-js.svg"
            alt="NextJS icon"
          ></StaticImage>
          <h4>NextJS</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.sequelize}`}
            src="../../images/sequelize.svg"
            alt="sequelize icon"
          ></StaticImage>
          <h4>Sequelize</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.axios}`}
            src="../../images/axios-vector-logo.svg"
            alt="axios icon"
          ></StaticImage>
          <h4>Axios</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.git}`}
            src="../../images/git.png"
            alt="git icon"
          ></StaticImage>
          <h4>Git</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.github}`}
            src="../../images/github.png"
            alt="github icon"
          ></StaticImage>
          <h4>GitHub</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.heroku}`}
            src="../../images/heroku.png"
            alt="heroku icon"
          ></StaticImage>
          <h4>Heroku</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.redux}`}
            src="../../images/redux.png"
            alt="redux icon"
          ></StaticImage>
          <h4>Redux</h4>
        </div>
      </div>
    </section>
  );
}
