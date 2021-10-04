import * as styles from "./Header.module.scss";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Header() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.headerContentContainer}>
          <StaticImage
            className={styles.profilePicture}
            src="../../images/profilePic.JPG"
            alt="profile photo"
            loading="eager"
          ></StaticImage>
          <div className={styles.headerWordsContainer}>
            <h1>Giselle Rogers</h1>
            <p>
              I am a Web Developer based out of Salt Lake City, UT who is eager
              to bring your next project to life.
            </p>
            <a href="#AboutMe">
              <button className={styles.styledBtn}>Learn More</button>
            </a>
          </div>
        </div>
      </div>
      <div id="AboutMe"></div>
    </div>
  );
}
