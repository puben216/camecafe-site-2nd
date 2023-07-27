/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = title + " | " + site.siteMetadata?.title
  const props = {
    metaDescription: metaDescription,
    title: defaultTitle,
    author: site.siteMetadata?.author
      ? site.siteMetadata.author
      : "写真サークル｜カメカフェ",
  }

  return <Head {...props} />
}

export const Head = ({ title, metaDescription, author }) => {
  console.log(title)
  console.log(metaDescription)
  console.log(author)
  return (
    <>
      <meta charset="utf-8" />
      <meta http-equiv="Content-Language" content="ja" />
      <meta name="google" content="notranslate" />
      <meta http-equiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content="{metaDescription}" />
      <meta content="{metaDescription}" />
      <meta name="twitter:creator" content="@{author}" />
      <meta name="twitter:description" content="{metaDescription}" />
    </>
  )
}

export default Seo
