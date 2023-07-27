import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import parse from "html-react-parser"
import { Container, Row, Col } from "react-bootstrap"
import { formatYmd } from "../utils/helpers"

const Blog = ({ data, pageContext }) => {
  const blog = data.microcmsBlog
  const category = blog.category.map(node => {
    return <li>{node}</li>
  })
  const { previous, next } = pageContext
  const formattedBlogDate = formatYmd(blog.date)

  // State to hold the TOC (table of content)
  const [toc, setToc] = useState([])

  useEffect(() => {
    const parsedHtml = parse(blog.content)
    const h3Elements = parsedHtml.filter(el => el.type === "h3")
    const newToc = h3Elements.map((h3, i) => {
      return {
        id: h3.props.id,
        text: h3.props.children || "",
      }
    })
    setToc(newToc)
  }, [blog.content])

  return (
    <Layout>
      <Seo title="ブログ" />
      <div className="container">
        <p>更新日時：{blog.updatedAt}</p>
        <h1>{blog.title}</h1>
        <h2>{blog.subtitle}</h2>
        <div>場所：{blog.place}</div>
        <div>撮影日：{formattedBlogDate}</div>
        <div>時間：{blog.photo_time}</div>
        <div>天気：{blog.weather}</div>

        <br />
        <h3>目次</h3>
        <ul>
          {toc.map(entry => (
            <li key={entry.id}>
              <a href={`#${entry.id}`}>{entry.text}</a>
            </li>
          ))}
        </ul>

        <div>{parse(blog.content)}</div>
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
