import * as React from "react";
import { Link, graphql } from "gatsby";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Index = ({ data, location }) => {
  return (
    <div>
      <Layout location={location} title="Giselle's Portfolio">
        <Seo title="Giselle's Portfolio" />
        <Header />
        <About />
      </Layout>
    </div>
  );
};

export default Index;
