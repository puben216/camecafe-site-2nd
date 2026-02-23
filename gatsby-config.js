const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `写真・カメラサークル｜カメカフェ`,
    description: `写真・カメラサークル「カメカフェ」のサイト。首都圏を中心に撮影会を行い、カメラ、写真を通じた交流の場を作ることを目標に活動しています。このサイトはその活動の経験や、過程で学んだスポットや技術等を共有しています。`,
    author: `@カメカフェ`,
    siteUrl: process.env.APP_SITE_URL,
    samApiUrl: process.env.SAM_API_DOMAIN_URL,
  },
  plugins: [
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID].filter(
          Boolean,
        ),
      },
    },
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
        name: `camecafe（カメカフェ）`,
        short_name: `camecafe`,
        start_url: `/`,
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
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API_KEY,
        baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
        tableName: "camecafe_table",
      },
    },
    {
      resolve: "@sentry/gatsby",
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `home`,
        exclude: [`**/404/**`, `**/404.html`, `**/dev-404-page/**`],
        crumbLabelUpdates: [
          {
            pathname: "/blog/:blogId",
            crumbLabel: "Blog Details",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.example.com",
        sitemap: `${process.env.APP_SITE_URL}/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
