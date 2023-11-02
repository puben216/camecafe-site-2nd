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
                以下の点についてご理解いただけない場合には、退会を含めた対応を取らせていただきます
              </h3>
              <ul>
                <li>
                  <p>
                    営業、ナンパ目的の参加、宗教・政治活動及びそれに準ずる勧誘行為は禁止します。また、メンバー間のトラブル（迷惑行為、金品の貸し借り）、
                    事件・事故等、当サークルでは一切責任を負いませんので、ご了承ください。
                  </p>
                </li>
                <li>
                  <p>
                    プライバシーに関する過度の質問、人やモノに対するネガティブな発言（写真への求められていないダメ出しを含む）等、相手を不快にさせる発言は控えてください
                  </p>
                </li>
                <li>
                  <p>新型コロナ感染対策への協力をお願いします</p>
                </li>
              </ul>
              <br />
              <h3>サークル設立の想い</h3>
              <div>
                カメラを購入したけれど、なかなか使う機会もなく、
                たまに出かける時に撮影するくらいでしたが、もう少し機会を増やして、
                ちゃんと写真撮りたいな、カメラ友達ほしいなと思ってサークルを立ち上げました！！
                撮影はゆるく楽しむことを最優先としつつも、
                常識的な連絡やマナーはしっかりと、
                雰囲気重視で仲良く、楽しくやっていきたいので、命令口調で指示したり、
                人を批判したり、けなしたりする人の参加はお断りします。
                サークルを通じてカメラ友達が作れる場を目指します！
              </div>
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
