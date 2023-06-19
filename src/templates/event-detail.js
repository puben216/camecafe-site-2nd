import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Announcement from "../components/announcement/announcement"

const Blog = ({ data }) => {
  const blog = data.microcmsInfomation

  return (
    <Layout>
      <Seo title="Using DSG" />
      <Announcement event={blog} />
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
