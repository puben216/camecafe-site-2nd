import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MapContainer from "../components/place/map"

export default ({ data, location }) => {
  return (
    <div className="aaaaaaa">
      <Seo title="イベントブログ一覧" />

      <div id="place_container" className="container mt-8">
        <MapContainer data={data} />
      </div>
    </div>
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
        longitude
        latitude
        place
        samne {
          url
          height
          width
        }
      }
    }
    allMicrocmsInfomation(filter: { recruitment_flag: { eq: true } }) {
      nodes {
        title
        place
        id
        longitude
        latitude
      }
    }
  }
`
