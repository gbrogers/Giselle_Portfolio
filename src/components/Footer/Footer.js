import * as styles from "./Footer.module.scss";
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContentContainer}>
        <form
          action="https://formspree.io/f/xpzkypqq"
          method="POST"
          className={styles.contactForm}
        >
          <h2 className={styles.footerHeader}>Let's Get In Touch!</h2>
          <div className={styles.nameEmail}>
            <div className={styles.singleInput}>
              <label>Name: </label>
              <input name="name" type="text" placeholder="enter name..." />
            </div>
            <div className={styles.singleInput}>
              <label>Email: </label>
              <input
                name="_replyto"
                type="email"
                placeholder="enter email..."
              />
            </div>
          </div>
          <div className={styles.singleInput}>
            <label>Message:</label>
            <textarea name="message" placeholder="enter message..."></textarea>
          </div>

          <button type="submit" className={styles.submitFormBtn}>
            Send Message
          </button>
        </form>
        <div className={styles.contactContainer}>
          <div className={styles.contactIcons}>
            <div className={styles.singleContactItem}>
              <StaticImage
                className={styles.contactIcon}
                src="../../images/locationsvg.png"
                alt="location icon"
              ></StaticImage>
              <h4>
                <strong>Location</strong>
                <br />
                Salt Lake City, UT
              </h4>
            </div>

            <div className={styles.singleContactItem}>
              <StaticImage
                className={styles.contactIcon}
                src="../../images/email.png"
                alt="email icon"
              ></StaticImage>
              <h4>
                <strong>Email</strong>
                <br />
                giselle.b.rogers@gmail.com
              </h4>
            </div>

            <div className={styles.singleContactItem}>
              <StaticImage
                className={styles.contactIcon}
                src="../../images/phone.png"
                alt="phone icon"
              ></StaticImage>
              <h4>
                <strong>Phone</strong>
                <br />
                (801) 441-0981
              </h4>
            </div>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com/in/giselle-rogers123" target="_blank">
              <StaticImage
                className={styles.singleSocialIcon}
                src="../../images/linkedin.png"
                alt="linkedIn icon"
              ></StaticImage>
            </a>
            <a href="https://github.com/gbrogers" target="_blank">
              <StaticImage
                className={`${styles.singleSocialIcon} ${styles.githubIcon}`}
                src="../../images/github.png"
                alt="email icon"
              ></StaticImage>
            </a>

            <a href="mailto:giselle.b.rogers@gmail.com" target="_blank">
              <StaticImage
                className={styles.singleSocialIcon}
                src="../../images/email.png"
                alt="email icon"
              ></StaticImage>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
