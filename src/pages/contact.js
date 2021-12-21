import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => (
  <Layout>
    <Seo title="Page two" />
    
    <div>
      <div>
        <h1>Contact</h1>
        <form method="post" name="contact" netlify-honeypot="bot-field" data-netlify="true" >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">お名前：</label>
            <input type="text" name="name" id="name" required /><br />
          </div>
          <div>
            <label htmlFor="name">性別：</label>
            <label htmlFor="men"><input type="radio" name="sex" value="men" />男</label>
            <label htmlFor="women"><input type="radio" name="sex" value="woman" />女</label><br />
          </div>
          <div>
            <label htmlFor="name">カメラ歴：</label>
            <input type="text" name="experience" id="experience" required /><br />
          </div>
          <div>
            <label htmlFor="name">メールアドレス：</label>
            <input type="text" name="email" id="email" required /><br />
          </div>
          <div>
            <label htmlFor="name">内容：</label>
            <textarea name="content" id="" cols="30" rows="10">
              撮影で行ってみたい所や、
              応募理由等をご記入ください。
            </textarea>
          </div>

          <button type="submit">送信</button>
        </form>
      </div>
    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
