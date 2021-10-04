import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ProjectList from "../components/ProjectList/ProjectList";

export default function Projects() {
  return (
    <Layout title="Giselle's Projects">
      <Seo title="Projects" />
      <ProjectList />
    </Layout>
  );
}
