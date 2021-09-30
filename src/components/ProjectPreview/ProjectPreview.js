import * as styles from "./ProjectPreview.module.scss";
import * as React from "react";

export default function ProjectPreview() {
  return (
    <section className={styles.projectsContentContainer}>
      <h2 className={styles.projectHeader}>Projects</h2>
      <div className={styles.projectsList}>
        <div className={styles.mbmh}>
          <div className={styles.projectPlaceholder}></div>
          <div className={styles.projectLabel}>
            <h3>My Body My Health</h3>
            <p>These are words describing this particular project</p>
          </div>
        </div>
        <div className={styles.drinkz}>
          <div className={styles.projectPlaceholder}></div>
          <div className={`${styles.projectLabel} ${styles.secondProject}`}>
            <h3>Drinkz!</h3>
            <p>These are words describing this particular project</p>
          </div>
        </div>
        <div className={styles.quizzies}>
          <div className={styles.projectPlaceholder}></div>
          <div className={styles.projectLabel}>
            <h3>Quizzies</h3>
            <p>These are words describing this particular project</p>
          </div>
        </div>
      </div>
    </section>
  );
}
