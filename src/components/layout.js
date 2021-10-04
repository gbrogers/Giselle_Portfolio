import * as React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="global-wrapper">
      <Nav />

      {/* <header className="global-header">{header}</header> */}
      <main>{children}</main>
      <Footer />
      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  );
};

export default Layout;
