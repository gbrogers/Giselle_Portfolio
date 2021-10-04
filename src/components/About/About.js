import * as styles from "./About.module.scss";
import * as React from "react";
import Skills from "../Skills/Skills";
import ProjectPreview from "../ProjectPreview/ProjectPreview";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";

export default function About() {
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
            jigsaw puzzles with my coffee in the morning... but now my cat eats
            the pieces and makes that tricky. <br></br>
            <br></br>I have always been extremely passionate about empowering
            women and non-binary persons in all aspects of life, and now
            especially within the tech industry.
          </p>
        </section>
        <Skills />
      </section>
      <aside>
        <ProjectPreview />
        <section className={styles.experienceEducation}>
          <Experience />
          <Education />
        </section>
      </aside>
    </div>
  );
}
