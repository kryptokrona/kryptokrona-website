import * as React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "../theme.css";
import { Seo } from "./Seo";

const Layout = (props) => {
  return (
    <div>
      <Seo />
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
