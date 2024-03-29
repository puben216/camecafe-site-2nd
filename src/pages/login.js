import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import LoginButton from "../components/login/LoginButton"

import SEO from "../components/seo"

export default ({ data, location }) => (
  <div className="aaaaaaa">
    <SEO
      pagetitle="カメカフェ について"
      pagedesc="東京を中心に初心者向けに活動している写真・カメラサークルです。"
      pagepath={location.pathname}
      pageimg={data.about.childImageSharp.original.src}
      pageimgw={data.about.childImageSharp.original.width}
      pageimgh={data.about.childImageSharp.original.height}
    />
    <article className="content">
      <div className="container">
        <h1 className="bar login-title">Login</h1>
        <LoginButton />
        <aside className="info">
          <div className="subtitle">
            <FontAwesomeIcon icon={faUtensils} />
            <a href="#">パスワードを忘れた場合</a>
          </div>
        </aside>
        <div className="postbody"></div>
      </div>
    </article>
  </div>
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
