import * as styles from "./Experience.module.scss";
import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";

export default function Experience() {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <section className={styles.experienceContentContainer}>
      <h2 className={styles.experienceHeader}>Experience</h2>
      <section className={styles.experienceListed}>
        <section className={styles.hci}>
          <h3>
            <strong>Huntsman Cancer Institute </strong>| Salt Lake City, UT
          </h3>
          <p>March 2020 - June 2021</p>
          {!seeMore ? (
            <ul className={styles.hciDuties}>
              <li>
                Coordinated the implementation, quality control and completion
                of research studies while assisting the Principal Investigator
                in determining and accomplishing study objectives
              </li>
              <li>
                Managed the technical and administrative details involved in the
                data collection and maintenance for a clinical trial
              </li>
              <li>
                Worked closely with physicians, nurses, pharmacists, and other
                medical team personnel to ensure patient safety and research
                data integrity through protocol compliance
              </li>
              <button
                className={styles.seeMoreBtn}
                onClick={() => setSeeMore(!seeMore)}
              >
                See More
              </button>
            </ul>
          ) : (
            <ul>
              <li>
                Coordinated the implementation, quality control and completion
                of research studies while assisting the Principal Investigator
                in determining and accomplishing study objectives
              </li>
              <li>
                Managed the technical and administrative details involved in the
                data collection and maintenance for a clinical trial
              </li>
              <li>
                Worked closely with physicians, nurses, pharmacists, and other
                medical team personnel to ensure patient safety and research
                data integrity through protocol compliance
              </li>
              <li>
                Utilized EPIC for entering and reviewing medical documentation
                daily
              </li>
              <li>
                Entered patient data into a wide variety of electronic data
                capture systems, including Medidata RAVE, OpenClinica, Oracle,
                and others
              </li>
              <li>
                Reviewed and implemented complex research protocols, thoroughly
                documenting all protocol procedures
              </li>
              <button
                className={styles.seeMoreBtn}
                onClick={() => setSeeMore(!seeMore)}
              >
                See Less
              </button>
            </ul>
          )}
        </section>
        <section className={styles.pra}>
          <h3>
            <strong>PRA Health Sciences </strong>| Salt Lake City, UT
          </h3>
          <p>December 2018 - March 2020</p>
          <ul className={styles.praDuties}>
            <li>
              Screened potential subjects for clinical trails, following
              study-specific protocols, adhering to SOPs, ICH, HIPPA, GCP, and
              FDA regulations.
            </li>
            <li>Lead group and individual Informed Consent discussions</li>
            <li>
              Work interdepartmentally to ensure subject safety and research
              efficacy
            </li>
          </ul>
        </section>
        <Link
          to="https://docs.google.com/document/d/1mOj6jcAJPKiGVtMR8Jsn_2Z6y_5mVzF9bxbC_yJjMz0/edit?usp=sharing"
          target="__blank"
        >
          <button className={`${styles.resumeBtn} ${styles.styledBtn}`}>
            See Full Resume
          </button>
        </Link>
      </section>
    </section>
  );
}
