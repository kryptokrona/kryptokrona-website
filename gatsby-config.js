const path = require(`path`)

module.exports = {
  flags: {
    DEV_SSR: true
  },
  siteMetadata: {
    title: "Kryptokrona",
    titleTemplate: "Kryptokrona",
    description:
      "En nordisk kryptovaluta för framtiden",
    siteUrl: "https://www.kryptokrona.se",
    url: "https://www.kryptokrona.se",
    image: "/images/xkrsymbol.png", 
    twitterUsername: "@Kryptokrona",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["absolute/path/a", "absolute/path/b"],
        }
      },
    },
  ],
};
