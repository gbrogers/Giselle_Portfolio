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
            className={`${styles.skillIcon}`}
            src="../../images/js.png"
            alt="js icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>Javascript</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} ${styles.react}`}
            src="../../images/react.png"
            alt="react icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>React</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} `}
            src="../../images/nodejs.png"
            alt="nodeJS icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>NodeJS</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} `}
            src="../../images/expressicon.png"
            alt="Express icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>Express</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/postgreSQL.png"
            alt="postgreSQL icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>PostgreSQL</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/html.png"
            loading="eager"
            alt="HTML5 icon"
            placeholder="blurred"
          ></StaticImage>
          <h4>HTML5</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/css.png"
            loading="eager"
            alt="CSS icon"
            placeholder="blurred"
          ></StaticImage>
          <h4>CSS</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon} `}
            src="../../images/scss.png"
            loading="eager"
            alt="Sass icon"
            placeholder="blurred"
          ></StaticImage>
          <h4>Sass</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/gatsby.png"
            loading="eager"
            alt="gatsby icon"
            placeholder="blurred"
          ></StaticImage>
          <h4>Gatsby</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/next-js.svg"
            loading="eager"
            alt="NextJS icon"
            placeholder="blurred"
          ></StaticImage>
          <h4>NextJS</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/sequelize.svg"
            alt="sequelize icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>Sequelize</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/axios-vector-logo.svg"
            alt="axios icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>Axios</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/git.png"
            alt="git icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>Git</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/github.png"
            alt="github icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>GitHub</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/heroku.png"
            alt="heroku icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>Heroku</h4>
        </div>
        <div>
          <StaticImage
            className={`${styles.skillIcon}`}
            src="../../images/redux.png"
            alt="redux icon"
            loading="eager"
            placeholder="blurred"
          ></StaticImage>
          <h4>Redux</h4>
        </div>
      </div>
    </section>
  );
}
