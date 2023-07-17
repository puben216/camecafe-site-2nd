import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Card, Row, Col } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "../../styles/blog.css"

export default ({ data, location }) => {
  return (
    <Layout>
      <Seo title="Blog" />

      <div className="container mt-8">
        {data.allMicrocmsBlog.nodes.map(node => {
          const date = new Date(node.date)
          const formatter = new Intl.DateTimeFormat("ja-JP", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          const formattedBlogDate = formatter.format(date)
          return (
            <Link to={`/blog/${node.id}`}>
              <Row className="mb-8 blog-item" key={node.id}>
                <Col md={4} lg={4} className="mb-8 blog-item-col-img">
                  <img className="blog-img" src={node.samne.url} />
                </Col>
                <Col md={8} lg={8}>
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
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsBlog(sort: { fields: createdAt, order: DESC }) {
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
