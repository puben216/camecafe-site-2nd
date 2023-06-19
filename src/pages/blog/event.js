import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { Card, Row, Col } from "react-bootstrap"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

export default ({ data, location }) => {
  return (
    <Layout>
      <Seo title="Blog" />

      <div className="container mt-8">
        {data.allMicrocmsBlog.nodes.map(node => (
          <Row className="mb-8" key={node.id}>
            <Col md={3}>
              <Link to={`/blog/${node.id}`}>
                <Img fluid="" />
              </Link>
            </Col>
            <Col md={9}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <Link to={`/blog/${node.id}`}>{node.title}</Link>
                  </Card.Title>
                  <Card.Text>{node.excerpt}</Card.Text>
                  <Card.Footer>
                    <small className="text-muted">
                      Posted on node.frontmatter.date in
                      node.frontmatter.category
                    </small>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
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
        samne {
          url
          height
          width
        }
      }
    }
  }
`
