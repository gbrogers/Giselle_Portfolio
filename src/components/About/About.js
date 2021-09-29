import * as styles from "./About.module.scss";
import * as React from "react";
import { useState } from "react";

export default function Header() {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <div className={styles.aboutContainer}>
      <section className={styles.aboutExperience}>
        <section className={styles.aboutContentContainer}>
          <h2 className={styles.aboutHeader}>About Me</h2>
          <p>
            Hello there! I'm Giselle, an energetic and eager Software Engineer
            with a background in healthcare, clinical research, basic research,
            and environmental sciences. I was drawn to software engineering for
            its versatility and the ability to apply my previous experience to
            tomorrow's technology. I am excited by the fast-paced career that
            matches my passions for both problem solving and lifelong learning.
            I am an avid learner and love to push myself to the next level.{" "}
            <br></br>
            <br></br>Outside of work, I enjoy snowboarding, rollerblading,
            ultimate frisbee, flip-flop tennis, and spending time at our family
            cabin in Northern Minnesota playing way-too-competitive card games.
            I love puzzle games, especially Suduko. I used to like doing big
            puzzles with my coffee in the morning... but now my cat eats the
            pieces and makes that tricky. <br></br>
            <br></br>I have always been extremely passionate about empowering
            women and non-binary persons in all aspects of life, and now
            especially within the tech industry.
          </p>
        </section>
        <section className={styles.experienceEducation}>
          <section className={styles.experienceContentContainer}>
            <h2 className={styles.experienceHeader}>Experience</h2>
            <section className={styles.experienceListed}>
              <section className={styles.hci}>
                <h3>
                  <strong>Huntsman Cancer Institute </strong>| Salt Lake City,
                  UT
                </h3>
                <p>March 2020 - June 2021</p>
                {!seeMore ? (
                  <ul className={styles.hciDuties}>
                    <li>
                      Coordinated the implementation, quality control and
                      completion of research studies while assisting the
                      Principal Investigator in determining and accomplishing
                      study objectives
                    </li>
                    <li>
                      Managed the technical and administrative details involved
                      in the data collection and maintenance for a clinical
                      trial
                    </li>
                    <li>
                      Worked closely with physicians, nurses, pharmacists, and
                      other medical team personnel to ensure patient safety and
                      research data integrity through protocol compliance
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
                      Coordinated the implementation, quality control and
                      completion of research studies while assisting the
                      Principal Investigator in determining and accomplishing
                      study objectives
                    </li>
                    <li>
                      Managed the technical and administrative details involved
                      in the data collection and maintenance for a clinical
                      trial
                    </li>
                    <li>
                      Worked closely with physicians, nurses, pharmacists, and
                      other medical team personnel to ensure patient safety and
                      research data integrity through protocol compliance
                    </li>
                    <li>
                      Utilized EPIC for entering and reviewing medical
                      documentation daily
                    </li>
                    <li>
                      Entered patient data into a wide variety of electronic
                      data capture systems, including Medidata RAVE,
                      OpenClinica, Oracle, and others
                    </li>
                    <li>
                      Reviewed and implemented complex research protocols,
                      thoroughly documenting all protocol procedures
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
                    study-specific protocols, adhering to SOPs, ICH, HIPPA, GCP,
                    and FDA regulations.
                  </li>
                  <li>
                    Lead group and individual Informed Consent discussions
                  </li>
                  <li>
                    Work interdepartmentally to ensure subject safety and
                    research efficacy
                  </li>
                </ul>
              </section>
              <button>See Full Resume</button>
            </section>
          </section>
          <section className={styles.educationContentContainer}>
            <h2 className={styles.educationHeader}>Education</h2>
            <div className={styles.educationContainer}>
              <section id="devm">
                <h3>Devmountain</h3>
                <h4>
                  <em>Graduated September 2021</em>
                </h4>
                <p>Accelerated Software Engineering Program</p>
              </section>
              <section className={styles.uwm}>
                <h3>University of Wisconsin - Madison</h3>
                <h4>
                  <em>Graduated May 2018</em>
                </h4>
                <p>
                  Bachelors of Science in Biology<br></br> Gender & Women's
                  Studies Certificate <br></br>Biology Core Curriculum
                  Certificate - Honors
                </p>
              </section>
            </div>
          </section>
        </section>
      </section>
      <aside className={styles.skillsProjects}>
        <section className={styles.projectsContentContainer}>
          <h2 className={styles.projectHeader}>My Projects</h2>
          <div className={styles.projectsList}>
            <div className={styles.mbmh}>
              <div className={styles.projectPlaceholder}></div>
              <div>
                <h3>My Body My Health</h3>
                <p>These are words describing this particular project</p>
              </div>
            </div>
            <div className={styles.drinkz}>
              <div className={styles.projectPlaceholder}></div>
              <div className={styles.projectLabel}>
                <h3>Drinkz!</h3>
                <p>These are words describing this particular project</p>
              </div>
            </div>
            <div className={styles.quizzies}>
              <div className={styles.projectPlaceholder}></div>
              <div>
                <h3>Quizzies</h3>
                <p>These are words describing this particular project</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.skillsContentContainer}>
          <h2 className={styles.skillsHeader}>Skills</h2>
          <div className={styles.listedSkills}>
            <div>
              <h4>Javascript</h4>
            </div>
            <div>
              <h4>React</h4>
            </div>
            <div>
              <h4>NodeJS</h4>
            </div>
            <div>
              <h4>Express</h4>
            </div>
            <div>
              <h4>PostgreSQL</h4>
            </div>
            <div>
              <h4>HTML5</h4>
            </div>
            <div>
              <h4>CSS</h4>
            </div>
            <div>
              <h4>SCSS</h4>
            </div>
            <div>
              <h4>Gatsby</h4>
            </div>
            <div>
              <h4>NextJS</h4>
            </div>
            <div>
              <h4>Sequelize</h4>
            </div>
            <div>
              <h4>Axios</h4>
            </div>
            <div>
              <h4>Git</h4>
            </div>
            <div>
              <h4>GitHub</h4>
            </div>
            <div>
              <h4>Heroku</h4>
            </div>
            <div>
              <h4>Redux</h4>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
}
