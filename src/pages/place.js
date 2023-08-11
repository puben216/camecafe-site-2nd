import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MapContainer from "../components/place/map"

export default ({ data, location }) => {
  return (
    <Layout>
      <Seo title="イベントブログ一覧" />

      <div className="container mt-8">
        <MapContainer data={data} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { fields: date, order: DESC }) {
      nodes {
        id
        category
        title
        content
        subtitle
        date
        samne {
          url
          height
          width
        }
      }
    }
  }
`
