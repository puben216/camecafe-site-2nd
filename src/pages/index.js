import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"


export const query = graphql`
  query {
    file(relativePath: {eq: "hero.jpg"}) {
      childrenImageSharp {
        fluid(maxWidth: 1600) {
          aspectRatio
          base64
          originalImg
          originalName
          presentationWidth
          presentationHeight
          sizes
        }
      }
    }
  }
`

export default ({data}) => (
  <div>
    <Layout>
      <section className="hero">
        <figure>
        </figure>
        <div className="catch">
          <h1>カメカフェ</h1>
          <p>東京を中心に活動する初心者向けカメラサークル</p>
        </div>
      </section>
      <section className="food">
        <div className="container">
          <h2 className="bar">お知らせ</h2>
          <div className="details">
            <div className="detail">

            </div>
          </div>
        </div>
      </section>

      <section className="food">
        <div className="container">
          <h2 className="bar">新着 <span></span></h2>
          <div className="details">
            <div className="detail">
              <figure>
                <img src="images/IMGP4909.JPG" alt="" />
              </figure>
              <h3>紅葉（本土寺）撮影会</h3>
              <p>Hondoji Temple</p>
              <p>紅葉を撮りに行きました。</p>
            </div>
            <div className="detail">
              <figure>
                <img src="images/IMGP4909.JPG" alt="" />
              </figure>
              <h3>紅葉（本土寺）撮影会</h3>
              <p>Hondoji Temple</p>
              <p>紅葉を撮りに行きました。</p>
            </div>
            <div className="detail">
              <figure>
                <img src="images/IMGP4909.JPG" alt="" />
              </figure>
              <h3>紅葉（本土寺）撮影会</h3>
              <p>Hondoji Temple</p>
              <p>紅葉を撮りに行きました。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="photo">
        <h2 className="sr-only">Photo</h2>
        <figure>
          <img src="images/spring-2174750__340.png" alt="赤く熟したベリー" className="sr-only-img"/>
        </figure>
      </section>
    </Layout>
  </div>
);