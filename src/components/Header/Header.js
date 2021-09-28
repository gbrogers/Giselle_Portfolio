import * as styles from "./Header.module.scss";
import * as React from "react";
import { Link } from "gatsby";
// import * as Picture from "../../images/profilePic.JPG";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContentContainer}>
        {/* <img src={Picture} alt="Giselle Profile Picture"></img> */}
        <div className={styles.headerWordsContainer}>
          <h1>Giselle Rogers</h1>
          <p>
            I am a Web Developer based out of Salt Lake City, UT who is eager to
            bring your next project to life.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
