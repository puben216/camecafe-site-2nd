import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Card, Row, Col } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { formatYmd } from "../../utils/helpers"

import "../../styles/blog.css"

export default ({ data, location }) => {
  return (
    <div className="aaaaaaa">
      <Seo title="イベントブログ一覧" />

      <div className="container mt-8">
        {data.allMicrocmsBlog.nodes.map(node => {
          const formattedBlogDate = formatYmd(node.date)
          return (
            <Link to={`/blog/${node.id}`}>
              <Row className="mb-8 blog-item" key={node.id}>
                <Col xs={5} md={4} lg={4} className="mb-8 blog-item-col-img">
                  <img
                    className="blog-img"
                    src={node.samne ? node.samne.url : ""}
                  />
                </Col>
                <Col xs={7} md={8} lg={8}>
                  <p>
                    <h2>{node.title}</h2>
                  </p>
                  <p>
                    <h3>{formattedBlogDate}</h3>
                  </p>
                </Col>
              </Row>
            </Link>
          )
        })}
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
        samne {
          url
          height
          width
        }
      }
    }
  }
`
