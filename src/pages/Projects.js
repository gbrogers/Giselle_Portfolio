import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProjectList from "../components/ProjectList/ProjectList";
import { Link, graphql } from "gatsby";
// import * as styles from "../style.scss";
// import ProjectOne from '../components/ProjectOne/ProjectOne'

export default function Projects() {
  return (
    <Layout title="Giselle's Projects">
      <Seo title="Projects" />
      <ProjectList />
    </Layout>
  );
}
