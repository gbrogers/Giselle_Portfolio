import * as React from "react";
import { Link } from "gatsby";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import About from "./About/About";
import Footer from "./Footer/Footer";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  console.log({ location });

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Nav />
      <Header />
      <About />
      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
      <Footer />
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
