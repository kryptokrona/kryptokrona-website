import * as React from "react";
import { Helmet } from "react-helmet";

export const Seo = () => {
  return (
    <div>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>Kryptokrona</title>
        <meta name="Kryptokrona" content="a Kryptokrona Website" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
        <link rel="icon" src="../images/favicon.png"  type="image/x-icon"></link>
      </Helmet>
    </div>
  );
};
