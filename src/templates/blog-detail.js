import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  const blog = data.microcmsBlog
  const category = blog.category.map(node => {
    return <li>{node}</li>
  })

  return (
    <Layout>
      <Seo title="Using DSG" />
      <div className="container">
        <h1>{blog.title}</h1>
        <p>更新日時：{blog.updatedAt}</p>
        <h2>{blog.subtitle}</h2>
        <p>撮影日：{blog.date}</p>
        <p>天気：{blog.weather}</p>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        <br />
        <Link to="/">トップへ戻る</Link>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query ($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      id
      blogId
      category
      content
      datetime
      samne {
        url
      }
      subtitle
      title
      updatedAt
    }
  }
`
