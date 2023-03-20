const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `カメカフェ`,
    description: `カメラサークル「カメカフェ」のサイト`,
    author: `@カメカフェ`,
    siteUrl: `https://camecafe.net`,
  },
  plugins: [
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-R6Z45LK2V6", // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `カメカフェ`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `camecafe（カメカフェ）`,
        short_name: `camecafe`,
        short_url: `/`,
        background_color: `#ffffff`,
        theme_color: `standalone`,
        icon: `src/images/cametop.png`,
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.GATSBY_MICROCMS_API_KEY,
        serviceId: "camecafe",
        apis: [
          {
            endpoint: "blog",
          },
          {
            endpoint: "photos",
          },
          {
            endpoint: "infomation",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    `gatsby-plugin-offline`,
  ],
}
