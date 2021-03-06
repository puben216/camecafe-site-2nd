import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"

export default ({ data, location }) => (
  <Layout>
    <SEO
      pagetitle="カメカフェ について"
      pagedesc="これまでにいただいた質問と回答をまとめております。"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    />
    <article className="content">
      <div className="container">
        <h1 className="bar">カメカフェについて</h1>
        <ul>
          <li>サークル情報</li>
          <li>イベント情報</li>
          <li>撮った写真</li>
        </ul>
      </div>
    </article>
  </Layout>
)

export const query = graphql`
  query {
    about: file(relativePath: { eq: "spring-2174750__340.png" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
        original {
          src
          height
          width
        }
      }
    }
  }
`
