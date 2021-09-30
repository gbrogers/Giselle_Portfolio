import * as styles from "./Footer.module.scss";
import * as React from "react";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <form
        action="https://formspree.io/f/xpzkypqq"
        method="POST"
        className={styles.contactForm}
      >
        <h3 className={styles.footerHeader}>Let's Get In Touch!</h3>
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
              placeholder="enter email address..."
            />
          </div>
        </div>
        <br />
        <br />
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
            <img className={styles.contactIcon} src="" alt="location icon" />
            <h4>
              <strong>Location</strong>
              <br />
              Salt Lake City, UT
            </h4>
          </div>

          <br />

          <div className={styles.singleContactItem}>
            <img className={styles.contactIcon} src="" alt="email icon" />
            <h4>
              <strong>Email</strong>
              <br />
              giselle.b.rogers@gmail.com
            </h4>
          </div>

          <br />
          <div className={styles.singleContactItem}>
            <img className={styles.contactIcon} src="" alt="phone icon" />
            <h4>
              <strong>Phone</strong>
              <br />
              (801) 441-0981
            </h4>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com/in/giselle-rogers123" target="_blank">
            <img className={styles.singleSocialIcon} src="" />
          </a>
          <a href="https://github.com/gbrogers" target="_blank">
            <img className={styles.singleSocialIcon} src="" />
          </a>

          <a href="mailto:giselle.b.rogers@gmail.com" target="_blank">
            <img className={styles.singleSocialIcon} src="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
