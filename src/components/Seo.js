import * as React from "react";
import { Helmet } from "react-helmet";

export const Seo = (title) => {
  return (
    <div>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>Kryptokrona</title>
        <meta name="Kryptokrona" content="a Kryptokrona Website" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Helmet>
    </div>
  );
};
