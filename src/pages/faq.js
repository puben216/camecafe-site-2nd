import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"

const faq = ({ data, location }) => {
  return (
    <div className="aaaaaaa">
      <Seo title="FAQ" />
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
    </div>
  )
}

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

export default faq
