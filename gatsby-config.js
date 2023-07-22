const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `写真サークル｜カメカフェ`,
    description: `カメラサークル「カメカフェ」のサイト。首都圏を中心に撮影会を行い、カメラ、写真を通じた交流の場を作ることを目標に活動しています。このサイトはその活動の経験や、過程で学んだスポットや技術等を共有しています。`,
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
    `gatsby-plugin-offline`,
  ],
}
