import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data }) => {
  const blog = data.microcmsInfomation

  return (
    <Layout>
      <Seo title="Using DSG" />
      <h1>{blog.title}</h1>
      <p>{blog.updatedAt}</p>
      <h2>{blog.place}</h2>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      <Link to="/">トップへ戻る</Link>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query ($id: String!) {
    microcmsInfomation(id: { eq: $id }) {
      id
      endtime
      date
      createdAt
      content
      place
      starttime
      title
      type
      updatedAt
      main_image {
        height
        url
        width
      }
    }
  }
`
