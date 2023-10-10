import * as React from "react"
import { navigate, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/contact.css"

const Contact = () => (
  <div className="aaaaaaa">
    <Seo title="お問い合わせ" />

    <div>
      <div class="contact-title">
        <h2>参加希望の方は、お気軽にご連絡ください！</h2>
        <br />
        <p>以下情報のご記入お願いします。</p>
        <div>
          お名前
          <br />
          性別
          <br />
          カメラ歴
          <br />
          その他（撮影で行ってみたい所や、 応募理由等をご記入ください。）
        </div>
      </div>
    </div>
  </div>
)

export default Contact
