import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUtensils, faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import SEO from "../components/seo"

export default ({ pageContext, data, location }) => {
  return (
    <div>
      <SEO title="カメカフェについて" />
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
            <div>
              <h2>
                都内近郊のスポットでゆるく楽しく、四季折々の花の撮影会＆お茶！をする写真サークルです！
              </h2>
              <p>毎回テーマを決めて、以下の流れで活動予定です！</p>
              <h3 id="イベントの流れ">イベントの流れ</h3>
              <ul>
                <li>
                  <p>都内中心のスポットで撮影（1～2時間）</p>
                </li>
                <li>
                  <p>
                    撮影会近くのカフェで談笑（1時間程度・状況により撮影のみ）
                  </p>
                </li>
              </ul>
              <p>
                都内中心に四季折々季節の花をメインに撮影スポットを決めて、
                1～2時間くらい撮影、近くのおしゃれなカフェやお店で1時間くらい、
                撮った写真見せ合ったり、感想などを中心に談笑
              </p>
              <br />
              <h3>メンバー募集中です！</h3>
              <p>
                管理人がカメラ初心者ということもあり、 応募条件は初心者、
                初心者にも合わせて楽しめる中、上級者
                <br />
                年齢は20～40代限定とさせていただきます。
                <br />
                人数が集まってきたら、関東中心に半日以上の撮影イベント等も考えています！
              </p>
              <div>
                <p>ご連絡は以下からお願いします</p>
                <p>ご興味もっていただけら気軽にご連絡ください！</p>
                <p>
                  ※ポートレートモデルも募集中です。撮られてもいいよという方も、お気軽にご連絡ください
                </p>
                <ul>
                  <li>
                    <a href="/contact">お問い合わせページ</a>
                  </li>
                  <li>
                    <a href="https://www.circle-book.com/u/camecafe">
                      サークルブック
                    </a>
                  </li>
                </ul>
              </div>
              <br />
              <h3>こんな方におすすめ</h3>
              <ul>
                <li>
                  <p>カメラが好きだけど身近に話ができる相手が少ない</p>
                </li>
                <li>
                  <p>写真の撮り方や撮影スポットについて情報交換したい</p>
                </li>
                <li>
                  <p>一緒に写真を撮りに行ける人を見つけたい</p>
                </li>
                <li>
                  <p>少し遠出して自然豊かな所を散歩しながら撮影したい</p>
                </li>
                <li>
                  <p>落ち着いた雰囲気の写真サークルに参加したい</p>
                </li>
              </ul>
              <br />
              <br />
              <h3>
                安心して楽しむために、みなさまへのお願い
              </h3>
              <div>
                みなさんが安心して参加できるよう、いくつかのルールを設けています。ご一読いただき、ご理解・ご協力をお願いいたします。
                万が一、下記が守られていないと感じた場合には、参加をご遠慮いただくことがありますので、あらかじめご了承ください。
              </div>
              <ul>
                <li>
                  <p>
                    営業・ナンパ目的、宗教や政治などの勧誘行為はご遠慮ください
                  </p>
                </li>
                <li>
                  <p>
                    メンバー間のトラブル（迷惑行為、金銭の貸し借りなど）や、万が一の事件・事故について、サークルでは責任を負いかねます
                  </p>
                </li>
                <li>
                  <p>
                    プライバシーに踏み込みすぎる質問や、他人やその作品へのネガティブな発言（求められていない指摘など）はお控えください
                  </p>
                </li>
              </ul>
              <br />
              <h3>サークルについて & 大切にしていること</h3>
              <div>
                このサークルは、「カメラは買ったけど、なかなか使う機会がない…」「気軽に撮影に行ける仲間がほしい！」という思いからスタートしました。
                ゆるく楽しく撮影を楽しみながら、自然にカメラ仲間ができるような、あたたかい雰囲気を大切にしています☕
                撮影技術よりも、心地よい空気感と、思いやりのあるやりとりを何より重視しています。
              </div>
              <h3>ポートレートモデルも募集中</h3>
              <p>撮られてもいいよという方も、お気軽にご連絡ください。</p>
            </div>
            <br />
            <h1 className="bar">サイトについて</h1>
            <aside className="info">
              <div className="subtitle">
                <FontAwesomeIcon icon={faUtensils} />
                ABOUT SITE
              </div>
            </aside>
            <p>次のような情報を公開しています。</p>
            <ul>
              <li>サークル情報</li>
              <li>イベント情報</li>
              <li>撮った写真</li>
            </ul>
          </div>
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
