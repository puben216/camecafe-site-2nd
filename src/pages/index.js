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
        <div className="wave">
          <img src="images/wave.svg" alt="" />
        </div>
      </section>
      <section className="food">
        <div className="container">
          <h2 className="bar">Food <span>Essence</span></h2>
          <div className="details">
            <div className="detail">
              <figure>
                <img src="images/fruit.jpg" alt="" />
              </figure>
              <h3>フルーツ</h3>
              <p>FRUIT</p>
              <p>甘くてすっぱくておいしい果実たち。<br />旬のフルーツを満喫します。</p>
            </div>
            <div className="detail">
              <figure>
                <img src="images/grain.jpg" alt="" />
              </figure>
              <h3>穀物</h3>
              <p>GRAIN</p>
              <p>食事の基本となる穀物。<br />毎日の活動のエネルギー源になります。</p>
            </div>
            <div className="detail">
              <figure>
                <img src="images/beverage.jpg" alt="" />
              </figure>
              <h3>飲み物</h3>
              <p>BEVERAGE</p>
              <p>リラックスするのに欠かせない飲み物。<br />お気に入りの一杯はありますか？</p>
            </div>
          </div>
        </div>
      </section>
      <section className="photo">
        <h2 className="sr-only">Photo</h2>
        <figure>
          <img src="images/berry.jpg" alt="赤く熟したベリー" className="sr-only-img"/>
        </figure>
      </section>
    </Layout>
  </div>
);