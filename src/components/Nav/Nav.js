import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./Nav.module.scss";

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
          <Link to="/">Home</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </nav>
      <div
        className={` navList ${styles.navList}`}
        style={{ display: `${navbarOpen ? "flex" : "none"}` }}
      >
        <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)}>
          Home
        </Link>
        <Link to="/Projects" onClick={() => setNavbarOpen(!navbarOpen)}>
          Projects
        </Link>
        <Link to="/" onClick={() => setNavbarOpen(!navbarOpen)}>
          Contact
        </Link>
      </div>
    </div>
  );
}
