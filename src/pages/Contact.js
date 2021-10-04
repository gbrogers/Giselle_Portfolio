import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../style.scss";

export default function Contact() {
  return (
    <Layout title="Giselle's Projects">
      <Seo title="Projects" />
      <div className={styles.filler}></div>
    </Layout>
  );
}
