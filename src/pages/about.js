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
      pagedesc="東京を中心に初心者向けに活動しているカメラサークルです。"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    />
    <div className="eyecatch">
      <figure>
        <Img
          fluid={data.about.childImageSharp.fluid}
          alt="カメカフェトップ画像"
        />
      </figure>
    </div>
    <article className="content">
      <div className="container">
        <h1 className="bar">カメカフェについて</h1>
        <aside className="info">
          <div className="subtitle">
            <FontAwesomeIcon icon={faUtensils} />
            ABOUT CAMECAFE
          </div>
        </aside>
        <div className="postbody">
          <p>
            サークルに関する情報を発信するサイトです。
          </p>
          <h2>
            <FontAwesomeIcon icon={faCheckSquare} />
            公開している記事
          </h2>
          <p>
            これらについて、次のような情報を公開しています。
          </p>
          <ul>
            <li>サークル情報</li>
            <li>イベント情報</li>
            <li>撮った写真</li>
          </ul>
        </div>
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
