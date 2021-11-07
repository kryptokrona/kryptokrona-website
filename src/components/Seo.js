import * as React from "react"
import {Helmet} from "react-helmet"

export const SEO = (title) => {
  return (
    <div>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>{title}</title>
        <meta name="Kryptokrona" content="a Kryptokrona Website" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Helmet>
    </div>
  );
}