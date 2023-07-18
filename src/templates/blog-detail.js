import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row, Col, Card } from "react-bootstrap"

const Blog = ({ data, pageContext }) => {
  const blog = data.microcmsBlog
  const category = blog.category.map(node => {
    return <li>{node}</li>
  })
  const { previous, next } = pageContext
  console.log("BBBBBB")
  console.log(pageContext)
  console.log(previous)
  console.log(next)
  return (
    <Layout>
      <Seo title="Using DSG" />
      <div className="container">
        <p>更新日時：{blog.updatedAt}</p>
        <h1>{blog.title}</h1>
        <h2>{blog.subtitle}</h2>
        <div>場所：{blog.place}</div>
        <div>撮影日：{blog.date}</div>
        <div>時間：{blog.photo_time}</div>
        <div>天気：{blog.weather}</div>

        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        <br />

        <Container>
          <Row>
            <Col lg={2}>
              {previous && (
                <Link to={`/blog/${previous.id}`} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </Col>
            <Col lg={8}></Col>
            <Col lg={2}>
              {next && (
                <Link to={`/blog/${next.id}`} rel="next">
                  {next.title} →
                </Link>
              )}
            </Col>
          </Row>
        </Container>
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
      date
      photo_time
      weather
      place
      samne {
        url
      }
      subtitle
      title
      updatedAt
    }
  }
`
