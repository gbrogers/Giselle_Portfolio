import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./Nav.module.scss";
// import { Link, graphql } from "gatsby";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <nav className={styles.navigationContainer}>
        <button
          className={styles.hamburger}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          &#9776;
        </button>
        <div className={styles.navLinks}>
          <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)}>
            Home
          </Link>
          <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)}>
            Portfolio
          </Link>
          <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)}>
            Contact
          </Link>
        </div>
      </nav>
      <div
        // className="navList"
        className={` navList ${styles.navList}`}
        style={{ display: `${navbarOpen ? "flex" : "none"}` }}
      >
        <Link to="/projects">Home</Link>
        <Link to="/">Porfolio</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  );
}
