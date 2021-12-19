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
        <form method="post" name="contact" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <label htmlFor="name">お名前</label>
          <input type="text" name="name" id="name" required />
          <label></label>
          <label>内容</label>
          <button type="submit">送信</button>
        </form>
      </div>
    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
